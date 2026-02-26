import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Truck,
  Hammer,
  Shovel,
  CheckCircle,
  Clock,
  ShieldCheck,
  DollarSign,
  Phone,
  MapPin,
  HardHat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { InquiryForm } from "@/components/InquiryForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo } from "@/components/Seo";
import { HeroBackground } from "@/components/HeroBackground";
import { siteImages, siteImageAlts } from "@/assets/siteImages";
import {
  CITY_CONFIGS,
  SERVICE_CONFIGS,
} from "@/data/cityServicePages";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="flex flex-col">
      <Seo
        title="Bin Rental, Demolition & Excavation in Toronto & the GTA | Acorn Constructions"
        description="Bin rental, demolition, and excavation in Toronto & the GTA with fast scheduling, clean job sites, and clear pricing for every project. Get a free quote today."
        image={siteImages.hero.home}
      />

      {/* Hero Section */}
      <section className="relative min-h-[680px] text-white overflow-hidden">
        <HeroBackground
          image={siteImages.hero.home}
          alt={siteImageAlts.hero.home}
        />

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center py-16">
          <motion.div {...fadeIn} className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full text-sm uppercase tracking-[0.2em] font-bold">
              <MapPin className="h-4 w-4 text-primary" />
              Serving Toronto & the GTA
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold uppercase leading-tight">
              Bin Rentals, Demolition & Excavation
            </h1>
            <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
              Reliable delivery, job-site cleanup, and heavy equipment support for
              residential and commercial projects across the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
                  Get a Free Quote
                </Button>
              </Link>
              <a href="tel:4163053301">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-6 h-auto uppercase font-bold tracking-wider"
                >
                  Call (416) 305-3301
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/50 border border-white/10 rounded-2xl p-8 backdrop-blur"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/90 text-white p-3 rounded-lg">
                <HardHat className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-300">
                  Job Site Ready
                </p>
                <p className="text-xl font-bold">Fast scheduling & clean drops</p>
              </div>
            </div>
            <ul className="space-y-4 text-gray-200">
              {[
                "10–40 yard bins for clean fill, mixed waste, and concrete",
                "Licensed demolition teams for interior and structural projects",
                "Excavation for foundations, grading, and site prep",
                "On-time pickups with driveway protection available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Bins", value: "10–40 yd" },
                { label: "Turnaround", value: "24–48 hr" },
                { label: "Coverage", value: "GTA+" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-white/10 py-3">
                  <p className="text-lg font-bold">{item.value}</p>
                  <p className="text-xs uppercase tracking-widest text-gray-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Rapid Delivery",
              description: "Same or next-day bin drop-offs across Toronto & GTA.",
              icon: <Clock className="h-6 w-6 text-primary" />,
            },
            {
              title: "Transparent Pricing",
              description: "Straightforward rates with clear weight limits.",
              icon: <DollarSign className="h-6 w-6 text-primary" />,
            },
            {
              title: "Safety First",
              description: "Insured operators and clean, organized job sites.",
              icon: <ShieldCheck className="h-6 w-6 text-primary" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="bg-primary/10 p-3 rounded-lg">{item.icon}</div>
              <div>
                <p className="text-lg font-bold">{item.title}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-widest uppercase mb-2">
                Core Services
              </h2>
              <h3 className="text-4xl font-display font-bold text-gray-900 mb-4">
                Built for clean jobsites and tight schedules
              </h3>
            </div>
            <Link href="/contact">
              <Button size="lg" className="btn-primary">
                Book a Site Visit
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Bin Rental"
              description="Driveway-friendly bins for renovations, clean fill, concrete, and mixed waste. Sizes from 10 to 40 yards."
              image={siteImages.sections.homeServices.binRental}
              imageAlt={siteImageAlts.sections.homeServices.binRental}
              icon={<Truck className="w-6 h-6" />}
              link="/bin-rental"
            />
            <ServiceCard
              title="Demolition"
              description="Selective interior or full-structure demolition with safe haul-away and debris management."
              image={siteImages.sections.homeServices.demolition}
              imageAlt={siteImageAlts.sections.homeServices.demolition}
              icon={<Hammer className="w-6 h-6" />}
              link="/demolition"
            />
            <ServiceCard
              title="Excavation"
              description="Foundation digs, grading, trenching, and site prep done with modern equipment and experienced operators."
              image={siteImages.sections.homeServices.excavation}
              imageAlt={siteImageAlts.sections.homeServices.excavation}
              icon={<Shovel className="w-6 h-6" />}
              link="/excavation"
            />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2">
              Service Areas
            </h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Local landing pages for GTA service coverage
            </h3>
            <p className="text-gray-600">
              Explore service-specific pages for each city to get local details, pricing support, and fast booking options.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {CITY_CONFIGS.map((city) => (
              <div key={city.slug} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{city.name}</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {SERVICE_CONFIGS.map((service) => (
                    <Link
                      key={`${city.slug}-${service.slugPrefix}`}
                      href={`/${service.slugPrefix}-${city.slug}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {service.titlePrefix} {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl"></div>
            <img
              src={siteImages.sections.binRentalDetail}
              alt={siteImageAlts.sections.binRentalDetail}
              className="relative rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold uppercase text-gray-900 mb-4">
              Request a Same-Day Quote
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us about your project and we will confirm pricing, delivery
              timing, and site requirements.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase mb-2">
                Why Choose Us
              </h2>
              <h3 className="text-4xl font-display font-bold text-white mb-8">
                Built on reliability & clean delivery
              </h3>

              <div className="space-y-8">
                {[
                  {
                    title: "Fast & Reliable Delivery",
                    copy:
                      "We keep your project moving with quick scheduling and clean placement.",
                    icon: <Clock className="w-8 h-8 text-primary" />,
                  },
                  {
                    title: "Transparent Pricing",
                    copy:
                      "Flat-rate pricing with clear weight limits and no surprise add-ons.",
                    icon: <DollarSign className="w-8 h-8 text-primary" />,
                  },
                  {
                    title: "Fully Insured & Safe",
                    copy:
                      "Skilled operators, insured crews, and safe jobsite practices.",
                    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-xl transform rotate-3"></div>
              <img
                src={siteImages.sections.homeWhyChoose}
                alt={siteImageAlts.sections.homeWhyChoose}
                className="relative rounded-lg shadow-2xl border-4 border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold uppercase">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">What size bin do I need?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
                It depends on your project. For small cleanouts or dirt/concrete, a 10 or 14-yard bin is usually sufficient. For large renovations or whole-house cleanouts, we recommend a 20 or 40-yard bin. Check our Pricing page for dimensions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold">What materials are not allowed?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
                We cannot accept hazardous waste, batteries, tires, paint cans (unless empty and dry), propane tanks, or bio-hazardous materials. If you're unsure, please give us a call!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold">How long can I keep the bin?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
                Our standard rental period is 7 days. If you need it longer, just let us know! Additional daily rates may apply after the included period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-bold">Do I need to be home for delivery?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
                No, you don't need to be home as long as the delivery area is clear and accessible. You can provide specific placement instructions when booking.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-6 uppercase">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today for a free quote on your next project. We are ready to help with bins, demolition, or excavation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="tel:4163053301">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6 h-auto">
                  <Phone className="mr-2 h-5 w-5" /> Call (416) 305-3301
                </Button>
             </a>
             <Link href="/contact">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-8 py-6 h-auto">
                  Request Online Quote
                </Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
