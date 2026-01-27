import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";

export default function Excavation() {
  return (
    <div className="bg-white">
      <Seo
        title="Excavation Services Toronto & GTA | Site Prep & Grading | Acorn Constructions"
        description="Excavation, grading, and site prep in Toronto & the GTA with experienced operators, modern equipment, and clean backfill for builds. Call for a free quote."
        image={siteImages.hero.excavation}
      />
      <PageHero
        title="Excavation Services"
        subtitle="Precision digging, grading, and site preparation across the GTA."
        image={siteImages.hero.excavation}
        alt={siteImageAlts.hero.excavation}
        eyebrow="Excavation"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold uppercase text-gray-900 mb-6">Heavy Equipment for Any Job</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Proper site preparation is the foundation of any successful construction project. We offer comprehensive excavation services using modern equipment operated by skilled professionals.
            </p>
            
            <h3 className="text-xl font-bold mb-4">We Specialize In:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["Foundation Digging", "Trenching for Utilities", "Grading & Leveling", "Pool Excavation", "Backfilling", "Driveway Prep"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button className="btn-primary" size="lg">Request Site Visit</Button>
            </Link>
          </div>
          <div>
            <img
              src={siteImages.sections.excavationDetail}
              alt={siteImageAlts.sections.excavationDetail}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
