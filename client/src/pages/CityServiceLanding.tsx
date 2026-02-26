import { Link } from "wouter";
import {
  CheckCircle2,
  Clock3,
  Phone,
  MessageSquareText,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";
import {
  CITY_LOOKUP_BY_SLUG,
  CityConfig,
  ServiceConfig,
} from "@/data/cityServicePages";

type CityServiceLandingProps = {
  city: CityConfig;
  service: ServiceConfig;
};

const BASE_URL = "https://acornconstructions.ca";

function getNearbyLinks(city: CityConfig, service: ServiceConfig) {
  return city.nearby
    .map((nearbySlug) => CITY_LOOKUP_BY_SLUG[nearbySlug])
    .filter(Boolean)
    .map((nearbyCity) => ({
      href: `/${service.slugPrefix}-${nearbyCity.slug}`,
      label: `${service.titlePrefix} ${nearbyCity.name}`,
    }));
}

function getServiceBreakdown(service: ServiceConfig, cityName: string) {
  const excavationLine =
    service.key === "excavation"
      ? `For ${cityName} excavation projects, we can pair dig-and-haul support with material bins so spoil and demolition debris move off-site without delays.`
      : `If your ${cityName} project also needs trenching, grading, or foundation prep, our excavation crew can coordinate directly with your bin schedule.`;

  return [
    "10-yard bins for soil, brick, concrete, and compact renovation debris where access is limited.",
    "14-yard bins for garage cleanouts, medium renovations, and contractor punch-list disposal.",
    "20-yard bins for larger renovations, roofing tear-offs, and steady mixed garbage output.",
    "40-yard bins for full-site cleanups, major rebuilds, and high-volume contractor debris.",
    "Concrete, dirt, and brick must stay in dedicated bins with no mixing to protect clean-fill pricing and disposal compliance.",
    excavationLine,
  ];
}

function getCityTextMessage(cityName: string, servicePrefix: string) {
  const message = `Hi Acorn, I need ${servicePrefix.toLowerCase()} in ${cityName}. I can text a site photo.`;
  return `sms:+14163053301?body=${encodeURIComponent(message)}`;
}

export default function CityServiceLanding({ city, service }: CityServiceLandingProps) {
  const canonicalUrl = `${BASE_URL}/${service.slugPrefix}-${city.slug}`;
  const title = `${service.titlePrefix} ${city.name} | Acorn Constructions`;
  const description = `${service.titlePrefix} in ${city.name} with fast dispatch, clear pricing, and contractor-friendly support. Call now, text a photo, and get next-day delivery across the GTA.`;
  const h1 = `${service.titlePrefix} ${city.name}`;
  const nearbyLinks = getNearbyLinks(city, service);
  const breakdown = getServiceBreakdown(service, city.name);
  const cityTextHref = getCityTextMessage(city.name, service.titlePrefix);

  return (
    <div className="bg-white min-h-screen">
      <Seo
        title={title}
        description={description}
        image={siteImages.hero.binRental}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
      />

      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-16 lg:py-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <p className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm mb-4 uppercase">
              {service.heroLabel} in {city.name}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{h1}</h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              {service.titlePrefix} in {city.name} gives homeowners and contractors {service.introFocus}. {service.scopeLead}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="tel:4163053301">
                <Button size="lg" className="btn-primary w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
              <a href={cityTextHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black"
                >
                  <MessageSquareText className="mr-2 h-5 w-5" /> Text a Photo
                </Button>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h2 className="text-2xl font-bold mb-5 text-white">Why {city.name} Clients Choose Us</h2>
            <ul className="space-y-4 text-gray-200">
              <li className="flex gap-3">
                <Clock3 className="h-5 w-5 text-primary mt-1" />
                <span>Fast dispatch and practical windows for busy GTA traffic conditions.</span>
              </li>
              <li className="flex gap-3">
                <Truck className="h-5 w-5 text-primary mt-1" />
                <span>No hidden fees, clear weight allowances, and straightforward overage rates.</span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-primary mt-1" />
                <span>Contractor-friendly coordination with responsive support and documented ETAs.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 lg:py-16">
        <div className="max-w-5xl mx-auto space-y-8 text-gray-700 leading-relaxed">
          <h2 className="text-3xl text-gray-900 font-bold">Local {service.titlePrefix} Support in {city.name}</h2>
          <p>
            Acorn Constructions provides {service.keyword} across {city.name}, including {city.neighborhoods.join(", ")}. {city.localProjectFocus}{" "}
            {city.routingReality} This local approach helps homeowners avoid rushed decisions and gives site supervisors a cleaner scheduling path from first drop-off
            through final pickup.
          </p>
          <p>
            Before dispatch, we review access constraints, expected volume, and material type so the container matches your real workflow instead of a generic estimate.
            Residential clients get clear guidance on driveway placement, clearance, and safe loading height. Contractor teams get practical sequencing support for
            demolition, framing, excavation, and debris haul-out. The result is less downtime and fewer avoidable change orders tied to disposal logistics.
          </p>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl text-gray-900 font-bold">Service Breakdown for {city.name} Projects</h2>
              <p className="mt-4">
                Our {service.titlePrefix.toLowerCase()} process is built around clean material handling, realistic timelines, and safe loading practices. The bin
                sizes and rules below are used daily on renovation, excavation, and construction jobs throughout {city.name}.
              </p>
              <ul className="space-y-3 mt-4">
                {breakdown.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={siteImages.sections.binRentalDetail}
              alt={`${service.titlePrefix} setup in ${city.name} with roll-off container and loading zone`}
              className="rounded-xl shadow-lg border border-gray-200"
            />
          </div>

          <h2 className="text-3xl text-gray-900 font-bold">Transparent Process, No Surprise Fees</h2>
          <p>
            {city.disposalFlow} We provide written pricing details before drop-off, including rental duration, included weight assumptions, and any extension rates.
            That transparency matters when schedules shift, weather affects loading pace, or crews require one additional haul cycle to finish cleanly. {city.contractorAngle}
          </p>
          <p>
            If you are comparing {service.keyword} providers in {city.name}, ask how overage is calculated, whether material checks happen at pickup, and what happens
            if access changes mid-project. Our team answers those questions before dispatch, not after invoicing. This keeps procurement decisions easier for project
            managers and gives homeowners confidence that final cost aligns with the original plan.
          </p>

          <h2 className="text-3xl text-gray-900 font-bold">Scheduling and Delivery Windows</h2>
          <p>
            Most {service.keyword} requests in {city.name} can be scheduled for next-day delivery, and many can be completed sooner when routing allows. We confirm a
            delivery window, arrival contact, and placement notes in advance so equipment is ready when our truck arrives. If your site needs a swap, we prioritize
            continuity to keep demolition and loading activity active instead of paused.
          </p>
          <p>
            For contractors managing multiple addresses, we can stagger service by phase and keep communication centralized through one dispatcher. For homeowners,
            we keep updates simple: call, text a photo, receive a size recommendation, and get confirmation for drop-off and pickup. This workflow is designed to be
            practical, fast, and easy to repeat on future projects across the GTA.
          </p>

          <h2 className="text-3xl text-gray-900 font-bold">Book {service.titlePrefix} in {city.name}</h2>
          <p>
            Need quick turnaround? Call now or text a site photo for sizing advice. You can review current rates on our pricing page, then finalize scope with dispatch.
            Our team will confirm what can go in the bin, explain concrete and dirt separation rules, and schedule the earliest practical delivery slot.
          </p>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-2xl text-gray-900 font-bold mb-4">Helpful Internal Links</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/" className="text-primary hover:underline font-semibold">
                Home
              </Link>
              <Link href="/pricing" className="text-primary hover:underline font-semibold">
                Pricing
              </Link>
              <Link href={service.relatedServiceLink} className="text-primary hover:underline font-semibold">
                {service.relatedServiceLabel}
              </Link>
              {nearbyLinks.map((nearbyLink) => (
                <Link key={nearbyLink.href} href={nearbyLink.href} className="text-primary hover:underline font-semibold">
                  {nearbyLink.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-black text-white p-8">
            <h3 className="text-2xl font-bold mb-3">Ready for Next-Day Delivery?</h3>
            <p className="text-gray-300 mb-6">
              Send a photo, share material details, and we will confirm your best setup for {city.name}. Call now or text now to book.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:4163053301">
                <Button className="btn-primary w-full sm:w-auto">Call Now</Button>
              </a>
              <a href={cityTextHref} className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black">
                  Text a Photo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
