import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";

export default function Demolition() {
  return (
    <div className="bg-white">
      <Seo
        title="Demolition Services Toronto & GTA | Licensed & Insured | Acorn Constructions"
        description="Licensed, insured demolition in Toronto & the GTA for interior gut-outs and full tear-downs with safe cleanup and haul-away. Call for a free quote today."
        image={siteImages.hero.demolition}
      />
      <PageHero
        title="Demolition Services"
        subtitle="Safe, efficient, and precise demolition for residential and commercial projects."
        image={siteImages.hero.demolition}
        alt={siteImageAlts.hero.demolition}
        eyebrow="Demolition"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={siteImages.sections.demolitionDetail}
              alt={siteImageAlts.sections.demolitionDetail}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold uppercase text-gray-900 mb-6">Expert Demolition Team</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We handle everything from full structural tear-downs to selective interior strip-outs. Our team is experienced in handling complex projects while prioritizing safety and site cleanliness.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Our Services Include:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["Full House Demolition", "Interior Gut-Outs", "Garage & Shed Removal", "Concrete Breaking", "Retail Strip-outs", "Site Clearing"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button className="btn-primary" size="lg">Get a Demolition Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
