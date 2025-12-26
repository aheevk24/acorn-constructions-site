import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Demolition() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2070&auto=format&fit=crop" /* Demolition site */
            alt="Demolition" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-display font-bold uppercase mb-4">Demolition Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Safe, efficient, and precise demolition for residential and commercial projects.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
             <img 
              src="https://pixabay.com/get/g4a9a9a80c0263e4e48e21097ff1ba249a3fb5edcd63220b1ae62831a23cd65761d21668cb2c2ddb2f3a9c1764f46147b65a2515649d21092a3f397cdabd0cea2_1280.jpg" /* Interior demolition */
              alt="Interior Demolition" 
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
