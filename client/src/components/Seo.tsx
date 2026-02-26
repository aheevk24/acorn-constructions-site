import { useEffect } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type SeoProps = {
  title: string;
  description: string;
  image: string;
  url?: string;
  canonicalUrl?: string;
  type?: string;
  faqItems?: FaqItem[];
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

function setLinkTag(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let tag = document.head.querySelector<HTMLLinkElement>(selector);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function removeJsonLd(id: string) {
  const script = document.head.querySelector<HTMLScriptElement>(`script[data-jsonld="${id}"]`);
  if (script) {
    script.remove();
  }
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

export function Seo({
  title,
  description,
  image,
  url,
  canonicalUrl,
  type = "website",
  faqItems,
}: SeoProps) {
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
    setLinkTag("canonical", canonicalUrl || resolvedUrl);

    const origin = window.location.origin;
    setJsonLd("local-business", {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Acorn Constructions Inc.",
      telephone: "+1-416-305-3301",
      email: "acorn.inc3@gmail.com",
      url: origin,
      image,
      priceRange: "$$",
      areaServed: [
        "Richmond Hill",
        "Markham",
        "Vaughan",
        "Scarborough",
        "North York",
        "Aurora",
        "Newmarket",
        "Toronto",
        "GTA",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "07:00",
          closes: "19:00",
        },
      ],
      sameAs: [],
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
            itemOffered: { "@type": "Service", name: "Concrete Bin Rental" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Excavation Services" },
          },
        ],
      },
    });

    if (faqItems && faqItems.length > 0) {
      setJsonLd("pricing-faq", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      });
    } else {
      removeJsonLd("pricing-faq");
    }
  }, [canonicalUrl, description, faqItems, image, title, type, url]);

  return null;
}
