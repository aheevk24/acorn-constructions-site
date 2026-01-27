import { Seo } from "@/components/Seo";
import { siteImages } from "@/assets/siteImages";

export default function Privacy() {
  return (
    <div className="bg-white">
      <Seo
        title="Privacy Policy | Acorn Constructions"
        description="Read how Acorn Constructions collects, uses, and protects your information."
        image={siteImages.hero.about}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold uppercase text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Acorn Constructions Inc. (“we”, “us”) respects your privacy. This policy explains how we
              collect, use, and protect your information when you visit our website or request a quote.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Contact details you submit (name, phone number, email)</li>
              <li>
                Job details you submit (service address, city, service needed, bin size,
                dates, notes)
              </li>
              <li>Basic website usage data for functionality and analytics</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to quote requests and communicate about your project</li>
              <li>To schedule delivery and pickup services</li>
              <li>To improve our website and customer experience</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal information. We only share it with
              service providers required to operate our business or when legally required.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain information only as long as necessary to provide services and
              maintain business records.
            </p>

            <h2>Cookies</h2>
            <p>
              We may use cookies or similar technologies to support site functionality and
              analytics. You may disable cookies in your browser settings.
            </p>

            <h2>Contact Us</h2>
            <p>
              Email: acorn.inc3@gmail.com
              <br />
              Phone: (416) 305-3301
            </p>

            <p>Last updated: January 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
