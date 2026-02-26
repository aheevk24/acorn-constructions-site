import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";
import { CITY_CONFIGS, SERVICE_CONFIGS } from "@/data/cityServicePages";
import gtaCoverageMap from "@/assets/photos/service-areas-map.jpg";

export default function ServiceAreas() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Seo
        title="Service Areas | Toronto & GTA Bin Rental | Acorn Constructions"
        description="See service areas across Toronto & the GTA for bin rental, demolition, and excavation support with fast dispatch. Call for availability or a free quote."
        image={siteImages.hero.serviceAreas}
        url="https://acornconstructions.ca/service-areas"
        canonicalUrl="https://acornconstructions.ca/service-areas"
      />
      <PageHero
        title="Service Areas"
        subtitle="Serving the Greater Toronto Area and nearby communities."
        image={siteImages.hero.serviceAreas}
        alt={siteImageAlts.hero.serviceAreas}
        eyebrow="Service Areas"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
              <MapPin className="text-primary" /> Cities We Serve
            </h2>
            <div className="space-y-6">
              {CITY_CONFIGS.map((city) => (
                <div key={city.slug}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {SERVICE_CONFIGS.map((service) => (
                      <Link
                        key={`${city.slug}-${service.slugPrefix}`}
                        href={`/${service.slugPrefix}-${city.slug}`}
                        className="text-primary hover:underline font-semibold"
                      >
                        {service.titlePrefix} {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Same-day and next-day bin delivery is available in many GTA areas depending on route capacity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md cursor-default">
            <div className="h-[320px] rounded-lg overflow-hidden bg-gray-200">
              <img
                src={gtaCoverageMap}
                alt="Map showing Acorn Constructions service coverage across the GTA"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold uppercase text-gray-900">
                Service Coverage (GTA)
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Providing bin rental, concrete bin rental, and excavation services across Toronto and surrounding GTA communities.
              </p>
              <p className="mt-3 text-sm text-gray-500 italic">
                Do not see your location listed? Call (416) 305-3301 and we will confirm coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
