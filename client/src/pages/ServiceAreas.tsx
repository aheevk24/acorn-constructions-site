import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";
import gtaCoverageMap from "@/assets/photos/service-areas-map.jpg";

export default function ServiceAreas() {
  const areas = [
    "Toronto", "Mississauga", "Brampton", "Vaughan", "Richmond Hill", 
    "Markham", "Scarborough", "Etobicoke", "North York", "Oakville", 
    "Burlington", "Milton"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Seo
        title="Service Areas | Toronto & GTA Bin Rental | Acorn Constructions"
        description="See service areas across Toronto & the GTA for bin rental, demolition, and excavation support with fast dispatch. Call for availability or a free quote."
        image={siteImages.hero.serviceAreas}
      />
      <PageHero
        title="Service Areas"
        subtitle="Serving the Greater Toronto Area and nearby communities."
        image={siteImages.hero.serviceAreas}
        alt={siteImageAlts.hero.serviceAreas}
        eyebrow="Service Areas"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
              <MapPin className="text-primary" /> Cities We Serve
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-gray-700 p-2 rounded">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Same-day and next-day bin delivery available in most GTA areas.
            </p>
            <p className="mt-6 text-sm text-gray-500 italic">
              *Don't see your city? Call us at (416) 305-3301 to check if we service your location.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md cursor-default">
            <div className="h-[320px] rounded-lg overflow-hidden bg-gray-200">
              <img
                src={gtaCoverageMap}
                alt="Roll-off bin at a GTA jobsite"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold uppercase text-gray-900">
                Service Coverage (GTA)
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Providing bin rental, demolition support, and excavation services across Toronto and surrounding GTA communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
