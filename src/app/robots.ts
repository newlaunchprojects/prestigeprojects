import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://indiabulls-projects-gurgaon.example.com/sitemap.xml",
  };
}
