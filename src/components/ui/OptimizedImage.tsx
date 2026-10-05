import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { getOptimizedImageUrl, toWebp } from "@/utils/imageOptimizer";

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  aspectRatio?: "16/9" | "4/3" | "4/5" | "1/1" | "21/9" | string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  fallbackSrc?: string;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}

export function OptimizedImage({
  src,
  alt,
  webpSrc,
  aspectRatio,
  priority = false,
  className,
  containerClassName,
  fallbackSrc = "/assets/dental-clinic-bg.webp",
  onError,
  onLoad,
  ...props
}: OptimizedImageProps) {
  // Compute optimized source using the imageOptimizer utility
  const optimizedInitialSrc = getOptimizedImageUrl(src);
  const resolvedWebpSrc = webpSrc || toWebp(optimizedInitialSrc);

  const [isLoaded, setIsLoaded] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(optimizedInitialSrc);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const nextSrc = getOptimizedImageUrl(src);
    setCurrentSrc(nextSrc);
    setHasError(false);
    
    // Check if the image element is already completed in browser cache
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      return;
    }

    if (priority) {
      setIsLoaded(true);
      return;
    }

    // Safety fallback: ensure image becomes visible even if onLoad event was missed
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 250);

    return () => clearTimeout(timer);
  }, [src, priority]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
    if (onError) onError(e);
  };

  const getAspectClass = (ratio?: string) => {
    switch (ratio) {
      case "16/9": return "aspect-[16/9]";
      case "4/3": return "aspect-[4/3]";
      case "4/5": return "aspect-[4/5]";
      case "1/1": return "aspect-square";
      case "21/9": return "aspect-[21/9]";
      default: return "";
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-100 dark:bg-[#1a191b]",
        getAspectClass(aspectRatio),
        containerClassName
      )}
      style={aspectRatio && !getAspectClass(aspectRatio) ? { aspectRatio } : undefined}
    >
      {/* Shimmer / Skeleton Placeholder (shown only while loading and not priority) */}
      {!isLoaded && !priority && (
        <div 
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-[#1a191b] dark:via-[#262428] dark:to-[#1a191b] animate-pulse"
        />
      )}

      {/* Picture element for modern WebP negotiation */}
      <picture className="w-full h-full block">
        {resolvedWebpSrc && !hasError && (
          <source srcSet={resolvedWebpSrc} type="image/webp" />
        )}
        <img
          ref={(node) => {
            imgRef.current = node;
            if (node && node.complete && node.naturalWidth > 0 && !isLoaded) {
              setIsLoaded(true);
            }
          }}
          src={currentSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300 ease-out block",
            isLoaded || priority ? "opacity-100" : "opacity-0",
            className
          )}
          {...props}
        />
      </picture>
    </div>
  );
}

export default OptimizedImage;
