import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Excavation() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=2064&auto=format&fit=crop" /* Excavator digging */
            alt="Excavation" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-display font-bold uppercase mb-4">Excavation Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Precision digging, grading, and site preparation.</p>
        </div>
      </div>

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
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" /* Excavator */
              alt="Excavation Equipment" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
