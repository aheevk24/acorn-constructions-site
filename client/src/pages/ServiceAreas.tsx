import { MapPin } from "lucide-react";

export default function ServiceAreas() {
  const areas = [
    "Toronto", "Mississauga", "Brampton", "Vaughan", "Richmond Hill", 
    "Markham", "Scarborough", "Etobicoke", "North York", "Oakville", 
    "Burlington", "Milton"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-display font-bold uppercase">Service Areas</h1>
        <p className="text-gray-300 mt-2">Serving the Greater Toronto Area and Beyond</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
              <MapPin className="text-primary" /> Cities We Serve
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-gray-700 p-2 hover:bg-gray-50 rounded">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 italic">
              *Don't see your city? Call us at (416) 305-3301 to check if we service your location.
            </p>
          </div>

          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden relative">
            {/* Placeholder for map - using an image for now */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" /* Generic map/city view */
              alt="Service Area Map" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
               <span className="bg-white/90 px-4 py-2 rounded text-sm font-bold text-black uppercase">GTA Coverage Map</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
