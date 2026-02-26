import heroHome from "./photos/hero-home.jpg";
import heroBinRental from "./photos/hero-bin-rental.jpg";
const heroDemolition = "/images/demolition-excavator-gta.jpg";
import heroExcavation from "./photos/hero-excavation.jpg";
import heroPricing from "./photos/hero-pricing.jpg";
import heroAbout from "./photos/hero-about.jpg";
import heroContact from "./photos/hero-contact.jpg";
import heroServiceAreas from "./photos/hero-service-areas.jpg";
import binRentalDetail from "./photos/bin-rental-detail.jpg";
import demolitionDetail from "./photos/demolition-detail.jpg";
import excavationDetail from "./photos/excavation-detail.jpg";
import homeServicesBinRental from "./photos/home-services-bin-rental.jpg";
const homeServicesDemolition = "/images/demolition-excavator-gta.jpg";
import homeServicesExcavation from "./photos/home-services-excavation.jpg";
import homeWhyChoose from "./photos/home-why-choose.jpg";
import serviceAreasMap from "./photos/service-areas-map.jpg";

export const siteImages = {
  hero: {
    home: heroHome,
    binRental: heroBinRental,
    demolition: heroDemolition,
    excavation: heroExcavation,
    pricing: heroPricing,
    about: heroAbout,
    contact: heroContact,
    serviceAreas: heroServiceAreas,
    notFound: heroHome,
  },
  sections: {
    homeServices: {
      binRental: homeServicesBinRental,
      demolition: homeServicesDemolition,
      excavation: homeServicesExcavation,
    },
    homeWhyChoose,
    binRentalDetail,
    demolitionDetail,
    excavationDetail,
    serviceAreasMap,
  },
};

export const siteImageAlts = {
  hero: {
    home: "Bins and equipment on a Toronto job site",
    binRental: "Bin rental drop-off at a residential project",
    demolition: "Demolition crew clearing a structure",
    excavation: "Excavator preparing a foundation",
    pricing: "Row of rental bins ready for pickup",
    about: "Acorn Constructions team on a work site",
    contact: "Work trucks staged at a job site",
    serviceAreas: "Construction equipment serving the GTA",
    notFound: "Construction site in Toronto",
  },
  sections: {
    homeServices: {
      binRental: "Bin rental containers set on a driveway",
      demolition: "Demolition equipment clearing debris",
      excavation: "Excavation equipment at a site prep",
    },
    homeWhyChoose: "Heavy equipment on a clean job site",
    binRentalDetail: "Bin rental loaded for haul-away",
    demolitionDetail: "Interior demolition in progress",
    excavationDetail: "Excavation equipment grading a site",
    serviceAreasMap: "Map of service coverage across the GTA",
  },
};
