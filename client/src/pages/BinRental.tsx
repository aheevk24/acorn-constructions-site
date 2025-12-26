import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BinRental() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pixabay.com/get/gbe7f5843b9f19c2968abd7a9abfad66d62397d2d31aa89f6766612b883354d7dd0afdaede6637fb708465790f73976d08fbe9043529f150d1e475ecefc58bb20_1280.jpg" /* Dumpster being loaded */
            alt="Bin Rental" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-display font-bold uppercase mb-4">Bin Rental Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Reliable waste disposal solutions for homeowners and contractors.</p>
        </div>
      </div>

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
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" /* Row of dumpsters */
              alt="Dumpsters" 
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
