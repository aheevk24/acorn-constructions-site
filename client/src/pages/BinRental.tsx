import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";

export default function BinRental() {
  return (
    <div className="bg-white">
      <Seo
        title="Bin Rental Toronto & GTA | Same-Day Delivery | Acorn Constructions"
        description="Same-day bin rental across Toronto & the GTA with driveway-friendly delivery, clear weight limits, and clean bins for renovations. Call now for a free quote."
        image={siteImages.hero.binRental}
      />
      <PageHero
        title="Bin Rental Services"
        subtitle="Reliable waste disposal solutions for homeowners and contractors across Toronto & the GTA."
        image={siteImages.hero.binRental}
        alt={siteImageAlts.hero.binRental}
        eyebrow="Bin Rentals"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-display font-bold uppercase text-gray-900 mb-6">The Right Bin For Every Job</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you are cleaning out a garage, renovating a kitchen, or managing a large construction site, we have the perfect bin size for your needs. 
              Our bins are clean, well-maintained, and delivered on time.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Same-day or next-day delivery", "Driveway-friendly placement", "Flat-rate pricing", "Easy-load doors on larger bins"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/pricing">
              <Button className="btn-primary" size="lg">View Sizes & Pricing</Button>
            </Link>
          </div>
          <div>
            <img
              src={siteImages.sections.binRentalDetail}
              alt={siteImageAlts.sections.binRentalDetail}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Bin Sizes Grid */}
        <h2 className="text-3xl font-display font-bold uppercase text-center mb-12">Available Sizes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { size: "10 Yard", use: "Dirt, Concrete, Brick, Small Cleanups", dims: "10' L x 7' W x 4' H" },
            { size: "14 Yard", use: "Garage Cleanouts, Small Reno", dims: "12' L x 7' W x 4.5' H" },
            { size: "20 Yard", use: "Whole Home Cleanout, Roofing", dims: "14' L x 8' W x 5' H" },
            { size: "40 Yard", use: "Large Construction, Demolition", dims: "20' L x 8' W x 8' H" },
          ].map((bin) => (
            <div key={bin.size} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow bg-gray-50">
              <div className="text-4xl font-black text-gray-200 mb-4">{bin.size.split(" ")[0]}</div>
              <h3 className="text-xl font-bold text-gray-900 uppercase mb-2">{bin.size}</h3>
              <p className="text-sm text-gray-500 mb-4">{bin.dims}</p>
              <p className="text-gray-600 mb-6">{bin.use}</p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">Book Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
