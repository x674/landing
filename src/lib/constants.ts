export const APP_CONFIG = {
  name: "Jai Dating",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1",
  urls: {
    pwa: "https://app.jaidating.com",
    apk: "https://download.jaidating.com/latest.apk",
    playStore: null, // Coming soon
    appStore: null, // Coming soon
  },
  placeholders: {
    supportEmail: "support@jaidating.com",
    fullName: "Jane Doe",
    country: "Thailand",
    taxStatus: "Sole Proprietor / Freelancer",
    address: "123 Digital Nomad Hub, Chiang Mai, Thailand",
    lastUpdated: "October 24, 2023",
    refundReviewTime: "7 business days",
  },
};

export const ROUTES = {
  home: "/",
  contact: "/contact",
  legal: {
    privacy: "/privacy-policy",
    terms: "/terms-of-service",
    cookies: "/cookie-policy",
    data: "/data-processing-notice",
    subscription: "/subscription-terms",
    refund: "/refund-policy",
    community: "/community-guidelines",
    acceptable: "/acceptable-use",
  },
};

export const LEGAL_SLUGS = {
  "privacy-policy": "privacy",
  "terms-of-service": "terms",
  "cookie-policy": "cookies",
  "data-processing-notice": "data",
  "subscription-terms": "subscription",
  "refund-policy": "refund",
  "community-guidelines": "community",
  "acceptable-use": "acceptable",
} as const;

export type LegalSlug = keyof typeof LEGAL_SLUGS;
export type LegalTitleKey = (typeof LEGAL_SLUGS)[LegalSlug];
