import { clinicData, doctors, services, faqs } from "../data/mockData";

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  schemaType?: "Dentist" | "MedicalOrganization" | "Physician" | "MedicalProcedure" | "ContactPage" | "AboutPage";
}

/**
 * Resolves SEO metadata based on pathname and route parameters,
 * specifically optimized for queries like "xpertdental junagadh" and "dental hospital junagadh"
 */
export function getSeoConfigForPath(pathname: string): PageSeoConfig {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";

  // Dynamic Service Detail: /services/:id
  if (cleanPath.startsWith("/services/")) {
    const id = cleanPath.split("/")[2];
    const service = services.find((s) => s.id.toString() === id);
    if (service) {
      return {
        title: `${service.name} in Junagadh | Xpert Dental & Maxillofacial Hospital`,
        description: `Looking for ${service.name} in Junagadh? Xpert Dental & Maxillofacial Hospital provides expert ${service.name} at Akshar Plaza, Zanzarda Road, Junagadh. ${service.description} Call 091048 27340.`,
        keywords: `${service.name} Junagadh, ${service.name} cost Junagadh, dentist Zanzarda road, best dentist in Junagadh, Xpert Dental Hospital Junagadh`,
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
        title: `${doctor.name} | ${doctor.specialization} • Xpert Dental Hospital Junagadh`,
        description: `Consult ${doctor.name} (${doctor.qualifications}) at Xpert Dental & Maxillofacial Hospital Junagadh. Leading ${doctor.specialization} with ${doctor.experience_years} years experience at Zanzarda Road, Junagadh.`,
        keywords: `${doctor.name}'s clinic, ${doctor.name} clinic, ${doctor.name}, ${doctor.name} Junagadh, best dental clinic in junagadh, Xpert Dental Hospital Junagadh, ${doctor.specialization} Junagadh`,
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
        title: `About Us | Xpert Dental & Maxillofacial Hospital — Junagadh`,
        description: `Learn why Xpert Dental & Maxillofacial Hospital is recognized as the best dental clinic in Junagadh. Home to Dr. Kishan Dudhat's clinic and Dr. Nikunj Bhuva's clinic at Akshar Plaza, Zanzarda Road, Junagadh.`,
        keywords: `about Xpert Dental & Maxillofacial Hospital, best dental clinic in junagadh, xpertdental clinic junagadh, dr kishan dudhat, dr nikunj bhuva, dental hospital Junagadh, dental clinic Akshar Plaza Zanzarda road`,
        ogType: "website",
        ogImage: "/assets/clinicboardphoto.webp",
        schemaType: "AboutPage"
      };

    case "/services":
      return {
        title: `Treatments & Services | Xpert Dental & Maxillofacial Hospital — Junagadh`,
        description: `Advanced dental treatments at Xpert Dental & Maxillofacial Hospital Junagadh: Permanent Dental Implants, Single-Sitting RCT, Laser Teeth Whitening, Braces & Aligners, and Maxillofacial Surgery.`,
        keywords: `best dental clinic in junagadh, dental services Junagadh, dental implants Junagadh, teeth whitening Junagadh, braces and aligners, root canal treatment Zanzarda road, Xpert Dental Hospital Junagadh`,
        ogType: "website",
        ogImage: "/assets/dental-operatory-bg.webp",
        schemaType: "MedicalProcedure"
      };

    case "/doctors":
      return {
        title: `Specialist Doctors | Dr. Kishan Dudhat & Dr. Nikunj Bhuva | Xpert Dental Hospital`,
        description: `Meet our specialist surgeons at Xpert Dental & Maxillofacial Hospital Junagadh: Dr. Kishan Dudhat (MDS Oral & Maxillofacial Surgeon) & Dr. Nikunj Bhuva (MDS Periodontist & Implantologist). Call 091048 27340.`,
        keywords: `dr kishan dudhat, dr nikunj bhuva, oral surgeon Junagadh, periodontist Junagadh, best dental clinic in junagadh, Xpert Dental & Maxillofacial Hospital`,
        ogType: "website",
        ogImage: "/assets/dr.Kishandudhat.webp",
        schemaType: "Physician"
      };

    case "/contact":
      return {
        title: `Contact & Book Appointment | Xpert Dental & Maxillofacial Hospital — Junagadh`,
        description: `Contact Xpert Dental & Maxillofacial Hospital at Akshar Plaza, 1, Zanzarda Chowkdi Bypass Road, above Dr. Sangani Hospital, Junagadh. Call 091048 27340 or WhatsApp.`,
        keywords: `contact Xpert Dental Hospital Junagadh, best dental clinic in junagadh, dr kishan dudhat, dr nikunj bhuva, book dental appointment Junagadh`,
        ogType: "website",
        ogImage: "/assets/clinicboardphoto.webp",
        schemaType: "ContactPage"
      };

    case "/":
    default:
      return {
        title: `Xpert Dental & Maxillofacial Hospital — Junagadh`,
        description: `Xpert Dental & Maxillofacial Hospital in Junagadh, Gujarat — advanced dental and maxillofacial care with a high-tech facility. Rated 5.0 on Google.`,
        keywords: `Xpert Dental & Maxillofacial Hospital, Xpertdental, Xperdental, Xpertdental Junagadh, Xpert Dental Junagadh, Dr. Kishan Dudhat, Dr. Nikunj Bhuva, best dental clinic in junagadh, dental implants Junagadh`,
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
  const origin = typeof window !== "undefined" ? window.location.origin : "https://xpertdental.vercel.app";

  const hospitalSchema = {
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
    "@id": `${origin}/#hospital`,
    "name": "Xpert Dental & Maxillofacial Hospital",
    "alternateName": [
      "Xpert Dental & Maxillofacial Hospital — Junagadh",
      "Xpertdental",
      "Xperdental",
      "Xpertdental Junagadh",
      "Xperdental Junagadh",
      "Xpert Dental Junagadh",
      "Xpert Dental & Implant Center",
      "Dr. Kishan Dudhat's Clinic",
      "Dr. Nikunj Bhuva's Clinic",
      "Best Dental Clinic in Junagadh"
    ],
    "url": origin,
    "logo": `${origin}/logo.svg`,
    "image": `${origin}${config.ogImage || "/assets/clinicboardphoto.webp"}`,
    "description": config.description,
    "telephone": clinicData.phone,
    "email": clinicData.email,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Net Banking",
    "areaServed": ["Junagadh", "Rajkot", "Keshod", "Dhoraji", "Manavadar", "Saurashtra", "Gujarat"],
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
    "sameAs": [
      clinicData.social.facebook,
      clinicData.social.instagram
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "medicalSpecialty": [
      "Dentistry",
      "Oral and Maxillofacial Surgery",
      "Periodontics",
      "Orthodontics",
      "Cosmetic Dentistry",
      "Endodontics",
      "Dental Implants"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "14",
      "bestRating": "5"
    },
    "founder": [
      {
        "@type": "Physician",
        "name": "Dr. Kishan Dudhat",
        "jobTitle": "Oral & Maxillofacial Surgeon",
        "medicalSpecialty": "Oral and Maxillofacial Surgery"
      },
      {
        "@type": "Physician",
        "name": "Dr. Nikunj Bhuva",
        "jobTitle": "Periodontist & Implantologist",
        "medicalSpecialty": "Periodontics"
      }
    ]
  };

  // FAQPage Schema for direct Google rich snippet expansion
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": faqs.slice(0, 5).map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": config.title.split("|")[0].trim(),
        "item": canonicalUrl
      }
    ]
  };

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      hospitalSchema,
      faqSchema,
      breadcrumbSchema
    ]
  });
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

  // 2. Standard Meta Tags & Local Geo Tags
  setMetaTag('meta[name="description"]', "name", "description", config.description);
  if (config.keywords) {
    setMetaTag('meta[name="keywords"]', "name", "keywords", config.keywords);
  }
  setMetaTag('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  setMetaTag('meta[name="geo.region"]', "name", "geo.region", "IN-GJ");
  setMetaTag('meta[name="geo.placename"]', "name", "geo.placename", "Junagadh, Gujarat, India");
  setMetaTag('meta[name="geo.position"]', "name", "geo.position", "21.5222;70.4579");
  setMetaTag('meta[name="ICBM"]', "name", "ICBM", "21.5222, 70.4579");

  // 3. OpenGraph Social Cards
  setMetaTag('meta[property="og:title"]', "property", "og:title", config.title);
  setMetaTag('meta[property="og:description"]', "property", "og:description", config.description);
  setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  setMetaTag('meta[property="og:image"]', "property", "og:image", fullImageUrl);
  setMetaTag('meta[property="og:type"]', "property", "og:type", config.ogType || "website");
  setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "Xpert Dental & Maxillofacial Hospital — Junagadh");
  setMetaTag('meta[property="og:locale"]', "property", "og:locale", "en_IN");

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
