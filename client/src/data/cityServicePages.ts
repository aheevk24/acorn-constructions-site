export type ServiceKey =
  | "bin-rental"
  | "dumpster-rental"
  | "excavation"
  | "concrete-bin-rental";

export type ServiceConfig = {
  key: ServiceKey;
  slugPrefix: string;
  keyword: string;
  titlePrefix: string;
  heroLabel: string;
  introFocus: string;
  scopeLead: string;
  relatedServiceLink: string;
  relatedServiceLabel: string;
};

export type CityConfig = {
  name: string;
  slug: string;
  neighborhoods: string[];
  localProjectFocus: string;
  routingReality: string;
  disposalFlow: string;
  contractorAngle: string;
  nearby: string[];
};

export const SERVICE_CONFIGS: ServiceConfig[] = [
  {
    key: "bin-rental",
    slugPrefix: "bin-rental",
    keyword: "bin rental",
    titlePrefix: "Bin Rental",
    heroLabel: "GTA Bin Delivery",
    introFocus:
      "fast driveway-safe delivery for renovation debris, household junk, and jobsite material",
    scopeLead:
      "From garage cleanups to full renovation tear-outs, we place the right container where your crew can load safely and keep work moving.",
    relatedServiceLink: "/bin-rental",
    relatedServiceLabel: "main bin rental service page",
  },
  {
    key: "dumpster-rental",
    slugPrefix: "dumpster-rental",
    keyword: "dumpster rental",
    titlePrefix: "Dumpster Rental",
    heroLabel: "Roll-Off Dumpsters",
    introFocus:
      "contractor-ready roll-off dumpsters with dependable dispatch and clear disposal rules",
    scopeLead:
      "Our roll-off dumpsters are used by roofers, renovators, and property managers who need reliable swaps and clean pickup windows.",
    relatedServiceLink: "/bin-rental",
    relatedServiceLabel: "bin rental page",
  },
  {
    key: "excavation",
    slugPrefix: "excavation",
    keyword: "excavation",
    titlePrefix: "Excavation",
    heroLabel: "Site Prep & Digging",
    introFocus:
      "precision excavation for foundations, trenching, grading, and utility-ready site prep",
    scopeLead:
      "We coordinate machine access, trucking, and soil haul-out so your build sequence stays on schedule and inspection-ready.",
    relatedServiceLink: "/excavation",
    relatedServiceLabel: "excavation service page",
  },
  {
    key: "concrete-bin-rental",
    slugPrefix: "concrete-bin-rental",
    keyword: "concrete bin rental",
    titlePrefix: "Concrete Bin Rental",
    heroLabel: "Clean Fill Containers",
    introFocus:
      "clean-fill concrete, dirt, and brick bins with strict no-mix disposal compliance",
    scopeLead:
      "When material must stay separated, we supply dedicated clean-fill bins and precise pickup timing to avoid contamination charges.",
    relatedServiceLink: "/bin-rental",
    relatedServiceLabel: "bin sizing and rental options",
  },
];

export const CITY_CONFIGS: CityConfig[] = [
  {
    name: "Richmond Hill",
    slug: "richmond-hill",
    neighborhoods: ["Oak Ridges", "Bayview Hill", "Jefferson", "Langstaff"],
    localProjectFocus:
      "Projects in Richmond Hill often combine basement upgrades with landscaping and driveway reconstruction, so staged disposal matters.",
    routingReality:
      "We schedule around Bayview, Yonge, and Highway 404 traffic windows so delivery and pickup stay predictable.",
    disposalFlow:
      "Loads are reviewed for fill type before haul-out to keep clean material streams compliant and disposal costs controlled.",
    contractorAngle:
      "Contractors rely on us for straightforward invoices, accurate dispatch ETAs, and fast bin exchanges when trades overlap.",
    nearby: ["markham", "vaughan"],
  },
  {
    name: "Markham",
    slug: "markham",
    neighborhoods: ["Unionville", "Milliken Mills", "Cornell", "Berczy"],
    localProjectFocus:
      "Markham jobs frequently involve interior renovation plus exterior hardscape work, which requires separate streams for mixed waste and clean fill.",
    routingReality:
      "Our dispatch team plans around Highway 7, 16th Avenue, and 404 corridor bottlenecks to protect your delivery window.",
    disposalFlow:
      "Material is screened at pickup so concrete, brick, and soil stay separated from garbage and avoid rejected loads.",
    contractorAngle:
      "Builder and renovation teams in Markham use us for crew-friendly scheduling, stable pricing, and direct phone support.",
    nearby: ["richmond-hill", "scarborough"],
  },
  {
    name: "Vaughan",
    slug: "vaughan",
    neighborhoods: ["Woodbridge", "Maple", "Kleinburg", "Concord"],
    localProjectFocus:
      "Vaughan construction work ranges from infill rebuilds to commercial tenant improvements, so access planning is critical.",
    routingReality:
      "We route around Highway 400 and major arterial congestion to keep machine and bin arrival times consistent.",
    disposalFlow:
      "Every pickup is tagged by material class, helping clients avoid contamination penalties and last-minute sorting delays.",
    contractorAngle:
      "Our contractor clients in Vaughan value quick swap requests, clean bins, and transparent overage calculations.",
    nearby: ["north-york", "richmond-hill"],
  },
  {
    name: "Scarborough",
    slug: "scarborough",
    neighborhoods: ["Agincourt", "Guildwood", "Malvern", "Birch Cliff"],
    localProjectFocus:
      "Scarborough properties often need heavy concrete removal and grading before new hardscape or addition work can begin.",
    routingReality:
      "Dispatch timing accounts for Kingston Road and 401 traffic so crews are not left waiting at curbside.",
    disposalFlow:
      "Concrete and dirt loads are kept strictly separate from mixed debris to maintain clean-fill acceptance at transfer points.",
    contractorAngle:
      "Scarborough contractors choose us for reliable communication, fair terms, and no hidden line-item fees.",
    nearby: ["north-york", "markham"],
  },
  {
    name: "North York",
    slug: "north-york",
    neighborhoods: ["Willowdale", "York Mills", "Downsview", "Don Mills"],
    localProjectFocus:
      "North York renovation and redevelopment work often happens on tight lots where careful placement and pickup sequencing are essential.",
    routingReality:
      "We coordinate around 401 and DVP peaks to reduce standby time and maintain dependable service slots.",
    disposalFlow:
      "Load verification and clear material rules help projects pass disposal checks without expensive re-sorting.",
    contractorAngle:
      "Trade teams use our service for accurate ETAs, responsive dispatch, and predictable billing from drop-off to final pickup.",
    nearby: ["scarborough", "vaughan"],
  },
  {
    name: "Aurora",
    slug: "aurora",
    neighborhoods: ["Aurora Heights", "Bayview Northeast", "Hills of St Andrew", "Aurora Village"],
    localProjectFocus:
      "Aurora projects commonly include home additions, landscaping upgrades, and driveway expansions that generate mixed load profiles.",
    routingReality:
      "We plan dispatch around Yonge and Wellington corridor patterns to keep arrival times practical for active jobsites.",
    disposalFlow:
      "Clear load separation at source protects clean-fill pricing and keeps mixed waste tonnage predictable.",
    contractorAngle:
      "Local contractors appreciate our clear communication, no-surprise billing, and quick turnaround for repeat jobs.",
    nearby: ["newmarket", "richmond-hill"],
  },
  {
    name: "Newmarket",
    slug: "newmarket",
    neighborhoods: ["Glenway Estates", "Stonehaven", "Summerhill Estates", "Armitage"],
    localProjectFocus:
      "Newmarket work frequently combines interior demolition, excavation, and disposal across phased residential timelines.",
    routingReality:
      "Our scheduling team watches Highway 404 and Davis Drive pressure points to keep crew plans on track.",
    disposalFlow:
      "Material-specific bins and pre-pickup checks reduce contamination risk and support faster transfer processing.",
    contractorAngle:
      "Builders and homeowners in Newmarket choose us for practical advice, responsive dispatch, and fair overage policies.",
    nearby: ["aurora", "richmond-hill"],
  },
];

export type LandingEntry = {
  city: CityConfig;
  service: ServiceConfig;
  slug: string;
};

export const CITY_SERVICE_LANDING_ENTRIES: LandingEntry[] = CITY_CONFIGS.flatMap((city) =>
  SERVICE_CONFIGS.map((service) => ({
    city,
    service,
    slug: `${service.slugPrefix}-${city.slug}`,
  })),
);

export const CITY_LOOKUP_BY_SLUG = Object.fromEntries(
  CITY_CONFIGS.map((city) => [city.slug, city]),
) as Record<string, CityConfig>;
