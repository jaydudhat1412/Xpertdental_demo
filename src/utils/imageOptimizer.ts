/**
 * Image Optimization Utility for Xpert Dental Hospital
 * 
 * Ensures all images in the assets folder are served as WebP where possible,
 * optimizes external stock photo references to decrease payload size without
 * sacrificing visual quality, and provides responsive srcset generators.
 */

// Registry of known assets available in WebP format
export const AVAILABLE_WEBP_ASSETS: Record<string, string> = {
  // Clinic and Hospital Facilities
  "clinicboardphoto": "/assets/clinicboardphoto.webp",
  "dental-clinic-bg": "/assets/dental-clinic-bg.webp",
  "dental-operatory-bg": "/assets/dental-operatory-bg.webp",
  "dental-care": "/assets/dental-care.webp",
  "dental-smile": "/assets/dental-smile.webp",
  
  // Specialists
  "dr.Kishandudhat": "/assets/dr.Kishandudhat.webp",
  "dr.nikunjbhuva": "/assets/dr.nikunjbhuva.webp",

  // Services
  "teeth-whitening": "/assets/teeth-whitening.webp",
  "dental-braces": "/assets/dental-braces.webp",
  "dental-rootcanal": "/assets/dental-rootcanal.webp",

  // Oral Health Tips
  "tip-brushing": "/assets/tip-brushing.webp",
  "tip-flossing": "/assets/tip-flossing.webp",
  "tip-diet": "/assets/tip-diet.webp",
  "tip-checkup": "/assets/tip-checkup.webp",
  "tip-sensitivity": "/assets/tip-sensitivity.webp",
  "tip-pediatric": "/assets/tip-pediatric.webp",
};

// URL Mapping: Replaces external high-resolution stock photos with local high-efficiency WebP assets
export const STOCK_PHOTO_TO_WEBP_MAP: Record<string, string> = {
  "photo-1588776814546-1ffcf47267a5": "/assets/tip-brushing.webp",
  "photo-1606811841689-23dfddce3e95": "/assets/tip-flossing.webp",
  "photo-1609840114035-3c981b782dfe": "/assets/tip-diet.webp",
  "photo-1629909613654-28e377c37b09": "/assets/tip-checkup.webp",
  "photo-1606265752439-1f18756aa5fc": "/assets/tip-sensitivity.webp",
};

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: "webp" | "auto";
  fallback?: string;
}

/**
 * Converts any image path or filename to its WebP equivalent if available or possible
 */
export function toWebp(path: string): string {
  if (!path) return path;

  // If already webp or svg, return as-is
  if (path.endsWith(".webp") || path.endsWith(".svg")) {
    return path;
  }

  // Extract base filename without extension
  const cleanPath = path.split("?")[0];
  const filename = cleanPath.split("/").pop() || "";
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");

  // Check known registry
  if (AVAILABLE_WEBP_ASSETS[nameWithoutExt]) {
    return AVAILABLE_WEBP_ASSETS[nameWithoutExt];
  }

  // If path ends with .png, .jpg, or .jpeg, replace with .webp
  if (/\.(png|jpg|jpeg)$/i.test(cleanPath)) {
    const webpPath = cleanPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    return webpPath;
  }

  return path;
}

/**
 * Optimizes an image URL (both local assets and external stock photos)
 * - Automatically replaces unoptimized remote stock photos with localized lightweight WebP
 * - Appends format=webp, controlled dimensions, and optimized quality to remote images
 * - Ensures assets folder images are served as .webp
 */
export function getOptimizedImageUrl(
  src: string,
  options: ImageOptimizationOptions = {}
): string {
  if (!src) return "";

  const {
    width,
    height,
    quality = 75,
    format = "webp",
    fallback = "/assets/dental-clinic-bg.webp"
  } = options;

  // 1. Check if the URL matches any known stock photo that has a local WebP version
  for (const [stockKey, localWebp] of Object.entries(STOCK_PHOTO_TO_WEBP_MAP)) {
    if (src.includes(stockKey)) {
      return localWebp;
    }
  }

  // 2. Handle external Unsplash stock photos by injecting modern WebP and dimension constraints
  if (src.includes("images.unsplash.com")) {
    try {
      const url = new URL(src);
      url.searchParams.set("auto", "format");
      url.searchParams.set("fit", "crop");
      url.searchParams.set("fm", format === "webp" ? "webp" : "jpg");
      url.searchParams.set("q", quality.toString());
      if (width) url.searchParams.set("w", width.toString());
      if (height) url.searchParams.set("h", height.toString());
      return url.toString();
    } catch {
      return src;
    }
  }

  // 3. For local asset paths, convert to WebP
  return toWebp(src);
}

/**
 * Generates a responsive srcset string for a given image
 */
export function getOptimizedSrcSet(
  src: string,
  widths: number[] = [400, 800, 1200]
): string {
  if (!src) return "";

  // For Unsplash images, generate width-specific URLs
  if (src.includes("images.unsplash.com")) {
    return widths
      .map((w) => `${getOptimizedImageUrl(src, { width: w })} ${w}w`)
      .join(", ");
  }

  // For local WebP images, return the WebP path directly
  const webpSrc = toWebp(src);
  return `${webpSrc} 1x`;
}

/**
 * Checks whether the current browser supports WebP (instant client check)
 */
export function supportsWebp(): boolean {
  if (typeof window === "undefined") return true;
  const elem = document.createElement("canvas");
  if (elem.getContext && elem.getContext("2d")) {
    return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }
  return false;
}
