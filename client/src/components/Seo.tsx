import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  image: string;
  url?: string;
  type?: string;
};

function setMetaTag(name: string, content: string, useProperty = false) {
  const attr = useProperty ? "property" : "name";
  const selector = `meta[${attr}="${name}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setJsonLd(id: string, payload: Record<string, unknown>) {
  const selector = `script[data-jsonld="${id}"]`;
  let script = document.head.querySelector<HTMLScriptElement>(selector);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-jsonld", id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
}

export function Seo({ title, description, image, url, type = "website" }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMetaTag("description", description);
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", type, true);
    setMetaTag("og:image", image, true);
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);
    const resolvedUrl = url || window.location.href;
    setMetaTag("og:url", resolvedUrl, true);
    const origin = window.location.origin;
    setJsonLd("local-business", {
      "@context": "https://schema.org",
      "@type": "ConstructionCompany",
      name: "Acorn Constructions Inc.",
      telephone: "(416) 305-3301",
      email: "acorn.inc3@gmail.com",
      url: origin,
      areaServed: [
        "Toronto",
        "Mississauga",
        "Brampton",
        "Vaughan",
        "Richmond Hill",
        "Markham",
        "Scarborough",
        "Etobicoke",
        "North York",
        "Oakville",
        "Burlington",
        "Milton",
      ],
      serviceType: ["Bin Rental", "Demolition", "Excavation"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Bin Rental" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Demolition" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Excavation" },
          },
        ],
      },
    });
  }, [description, image, title, type, url]);

  return null;
}
