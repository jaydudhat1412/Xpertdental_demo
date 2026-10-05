import { clinicData, doctors, services } from "../data/mockData";

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  schemaType?: "Dentist" | "MedicalOrganization" | "Physician" | "MedicalProcedure" | "ContactPage" | "AboutPage";
}

/**
 * Resolves SEO metadata based on pathname and route parameters
 */
export function getSeoConfigForPath(pathname: string): PageSeoConfig {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";

  // Dynamic Service Detail: /services/:id
  if (cleanPath.startsWith("/services/")) {
    const id = cleanPath.split("/")[2];
    const service = services.find((s) => s.id.toString() === id);
    if (service) {
      return {
        title: `${service.name} in Junagadh | ${clinicData.clinic_name} Hospital`,
        description: `${service.name} at ${clinicData.clinic_name} Dental Hospital, Junagadh. ${service.description} Performed by experienced dental surgeons.`,
        keywords: `${service.name}, dental clinic Junagadh, dentist Zanzarda road, teeth treatments, ${clinicData.clinic_name}`,
        ogType: "article",
        ogImage: service.image_url,
        schemaType: "MedicalProcedure"
      };
    }
  }

  // Dynamic Doctor Profile: /doctors/:id
  if (cleanPath.startsWith("/doctors/")) {
    const id = cleanPath.split("/")[2];
    const doctor = doctors.find((d) => d.id.toString() === id);
    if (doctor) {
      return {
        title: `${doctor.name} - ${doctor.specialization} | ${clinicData.clinic_name}`,
        description: `Consult ${doctor.name}, ${doctor.qualifications} specializing in ${doctor.specialization} with ${doctor.experience_years} years experience at ${clinicData.clinic_name} Hospital Junagadh.`,
        keywords: `${doctor.name}, ${doctor.specialization}, dentist Junagadh, oral surgeon Gujarat, ${clinicData.clinic_name}`,
        ogType: "profile",
        ogImage: doctor.photo_url,
        schemaType: "Physician"
      };
    }
  }

  // Static Routes
  switch (cleanPath) {
    case "/about":
      return {
        title: `About Us | ${clinicData.clinic_name} Multispecialty Dental Hospital Junagadh`,
        description: `Learn about ${clinicData.clinic_name} Dental Hospital at Akshar Plaza, Junagadh. Discover our surgical infrastructure, advanced diagnostic imaging, and commitment to pain-free dentistry.`,
        keywords: `about Xpertdental, dental hospital Junagadh, best dentist in Junagadh, dental clinic Akshar Plaza Zanzarda road`,
        ogType: "website",
        ogImage: "/assets/clinicboardphoto.webp",
        schemaType: "AboutPage"
      };

    case "/services":
      return {
        title: `Dental Treatments & Services | ${clinicData.clinic_name} Hospital Junagadh`,
        description: `Explore multispecialty dental services at ${clinicData.clinic_name}: Permanent Dental Implants, Cosmetic Teeth Whitening, Braces & Aligners, and Root Canal Therapy in Junagadh.`,
        keywords: `dental implants Junagadh, teeth whitening Junagadh, braces and aligners, root canal treatment Zanzarda road, cosmetic dentistry`,
        ogType: "website",
        ogImage: "/assets/dental-operatory-bg.webp",
        schemaType: "MedicalProcedure"
      };

    case "/doctors":
      return {
        title: `Specialist Dental Surgeons | ${clinicData.clinic_name} Hospital Junagadh`,
        description: `Meet our specialist dental team: Dr. Kishan Dudhat (Oral & Maxillofacial Surgeon, MDS) and Dr. Nikunj Bhuva (Periodontist, MDS) at ${clinicData.clinic_name} Junagadh.`,
        keywords: `Dr Kishan Dudhat, Dr Nikunj Bhuva, oral surgeon Junagadh, periodontist Junagadh, dental doctors Akshar Plaza`,
        ogType: "website",
        ogImage: "/assets/dr.Kishandudhat.webp",
        schemaType: "Physician"
      };

    case "/contact":
      return {
        title: `Contact & Book Appointment | ${clinicData.clinic_name} Junagadh`,
        description: `Contact ${clinicData.clinic_name} Dental Hospital at Akshar Plaza, Zanzarda Chowkdi Bypass Road, Junagadh. Call ${clinicData.phone} or book your appointment online.`,
        keywords: `contact dentist Junagadh, book dental appointment, Xpertdental phone number, Akshar plaza dental clinic address`,
        ogType: "website",
        ogImage: "/assets/clinicboardphoto.webp",
        schemaType: "ContactPage"
      };

    case "/":
    default:
      return {
        title: `${clinicData.clinic_name} | Multispecialty Dental Hospital & Implant Center • Junagadh`,
        description: `Welcome to ${clinicData.clinic_name} Dental Hospital in Junagadh. State-of-the-art dental surgeries, painless implants, cosmetic dentistry, and compassionate dental care. Call ${clinicData.phone}.`,
        keywords: `Xpertdental, dental hospital Junagadh, best dentist Junagadh, dental implants Zanzarda road, oral surgery Junagadh`,
        ogType: "website",
        ogImage: "/assets/clinicboardphoto.webp",
        schemaType: "Dentist"
      };
  }
}

/**
 * Updates or creates a <meta> tag in document.head
 */
function setMetaTag(selector: string, attrName: string, attrValue: string, content: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

/**
 * Updates or creates a <link rel="..."> tag in document.head
 */
function setLinkTag(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

/**
 * Generates Schema.org JSON-LD structured data for Google rich snippets
 */
export function generateSchemaJsonLd(config: PageSeoConfig, canonicalUrl: string) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "MedicalOrganization"],
    "@id": `${canonicalUrl}#hospital`,
    "name": `${clinicData.clinic_name} Dental Hospital`,
    "alternateName": "Xpert Dental and Maxillofacial Hospital Junagadh",
    "url": canonicalUrl,
    "logo": `${window.location.origin}/logo.svg`,
    "image": `${window.location.origin}${config.ogImage || "/assets/clinicboardphoto.webp"}`,
    "description": config.description,
    "telephone": clinicData.phone,
    "email": clinicData.email,
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, UPI",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Akshar Plaza, 1, Zanzarda Chowkdi Bypass Road, above Dr. Sangani Hospital",
      "addressLocality": "Junagadh",
      "addressRegion": "Gujarat",
      "postalCode": "362001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.5222,
      "longitude": 70.4579
    },
    "hasMap": clinicData.mapUrl,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "medicalSpecialty": [
      "Dentistry",
      "Oral and Maxillofacial Surgery",
      "Periodontics",
      "Orthodontics",
      "Cosmetic Dentistry"
    ],
    "founder": [
      {
        "@type": "Physician",
        "name": "Dr. Kishan Dudhat",
        "medicalSpecialty": "Oral & Maxillofacial Surgeon",
        "jobTitle": "Oral & Maxillofacial Surgeon"
      },
      {
        "@type": "Physician",
        "name": "Dr. Nikunj Bhuva",
        "medicalSpecialty": "Periodontist",
        "jobTitle": "Periodontist"
      }
    ]
  };

  return JSON.stringify(baseSchema);
}

/**
 * Injects or updates Schema.org JSON-LD in the document head
 */
function setStructuredData(jsonContent: string) {
  const SCRIPT_ID = "xpertdental-seo-structured-data";
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.text = jsonContent;
}

/**
 * Core SEO Management Utility:
 * Dynamically updates document.title, meta descriptions, OpenGraph, Twitter cards,
 * canonical links, and Schema.org structured data based on the active route.
 */
export function updateSeoMetadata(pathname: string) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const config = getSeoConfigForPath(pathname);
  const canonicalUrl = `${window.location.origin}${pathname}`;
  const fullImageUrl = config.ogImage?.startsWith("http")
    ? config.ogImage
    : `${window.location.origin}${config.ogImage || "/assets/clinicboardphoto.webp"}`;

  // 1. Page Title
  document.title = config.title;

  // 2. Standard Meta Tags
  setMetaTag('meta[name="description"]', "name", "description", config.description);
  if (config.keywords) {
    setMetaTag('meta[name="keywords"]', "name", "keywords", config.keywords);
  }
  setMetaTag('meta[name="robots"]', "name", "robots", "index, follow");

  // 3. OpenGraph Social Cards
  setMetaTag('meta[property="og:title"]', "property", "og:title", config.title);
  setMetaTag('meta[property="og:description"]', "property", "og:description", config.description);
  setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  setMetaTag('meta[property="og:image"]', "property", "og:image", fullImageUrl);
  setMetaTag('meta[property="og:type"]', "property", "og:type", config.ogType || "website");
  setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", `${clinicData.clinic_name} Dental Hospital`);

  // 4. Twitter / X Cards
  setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", config.title);
  setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", config.description);
  setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", fullImageUrl);

  // 5. Canonical Link
  setLinkTag("canonical", canonicalUrl);

  // 6. Schema.org JSON-LD Structured Data
  const jsonLd = generateSchemaJsonLd(config, canonicalUrl);
  setStructuredData(jsonLd);
}
