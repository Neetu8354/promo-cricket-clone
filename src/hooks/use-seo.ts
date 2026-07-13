import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical: string; // path like "/about"
  ogImage?: string;
}

const SITE = "https://www.khelo24app.live";
const SITE_NAME = "khelo24app.live";
const DEFAULT_OG_IMAGE = `${SITE}/og-image.jpg`;

export function useSeo({ title, description, canonical, ogImage }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Basic meta
    setMeta("name", "description", description);

    // Remove any existing keywords meta tag (spam signal for Google)
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    if (existingKeywords) existingKeywords.remove();

    // Canonical
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", SITE + canonical);

    // hreflang tags
    let hreflangIN = document.querySelector('link[rel="alternate"][hreflang="en-IN"]') as HTMLLinkElement | null;
    if (!hreflangIN) {
      hreflangIN = document.createElement("link");
      hreflangIN.setAttribute("rel", "alternate");
      hreflangIN.setAttribute("hreflang", "en-IN");
      document.head.appendChild(hreflangIN);
    }
    hreflangIN.setAttribute("href", SITE + canonical);

    let hreflangDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]') as HTMLLinkElement | null;
    if (!hreflangDefault) {
      hreflangDefault = document.createElement("link");
      hreflangDefault.setAttribute("rel", "alternate");
      hreflangDefault.setAttribute("hreflang", "x-default");
      document.head.appendChild(hreflangDefault);
    }
    hreflangDefault.setAttribute("href", SITE + canonical);

    // OG tags
    const img = ogImage || DEFAULT_OG_IMAGE;
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", SITE + canonical);
    setMeta("property", "og:image", img);
    const ogType = canonical.startsWith("/blog/") ? "article" : "website";
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_IN");

    // Twitter tags
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);
  }, [title, description, canonical, ogImage]);
}
