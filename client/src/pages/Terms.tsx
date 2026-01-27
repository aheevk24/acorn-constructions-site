import { Seo } from "@/components/Seo";
import { siteImages } from "@/assets/siteImages";

export default function Terms() {
  return (
    <div className="bg-white">
      <Seo
        title="Terms of Service | Acorn Constructions"
        description="Review the terms of service for using the Acorn Constructions website."
        image={siteImages.hero.about}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold uppercase text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>By using this website, you agree to the following terms.</p>

            <h2>Website Use</h2>
            <p>
              This website is provided for informational and marketing purposes only. You
              may not misuse the site or attempt to disrupt its operation.
            </p>

            <h2>Quotes and Services</h2>
            <p>
              Submitting a quote request does not guarantee pricing or availability. Final
              pricing depends on site conditions, materials, weight limits, and access
              requirements.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              We are not responsible for content or policies on external websites linked
              from this site.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              We do not guarantee the website will be error-free or uninterrupted. Use of
              the site is at your own risk.
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
