import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";

type PricingCard = {
  size: string;
  label?: string;
  startingFrom: string;
  included: string;
  overage?: string;
  bestFor: string;
  note?: string;
};

const garbageBins: PricingCard[] = [
  {
    size: "10 Yard",
    startingFrom: "$350",
    included: "Includes up to 1 ton",
    overage: "+$95 per additional ton",
    bestFor: "Best for small cleanouts, light renovation debris, and garage projects.",
  },
  {
    size: "14 Yard",
    label: "Most Popular",
    startingFrom: "$450",
    included: "Includes up to 2 tons",
    overage: "+$95 per additional ton",
    bestFor: "Best for kitchen/basement renovations and medium home cleanups.",
  },
  {
    size: "20 Yard",
    label: "Best Value",
    startingFrom: "$550",
    included: "Includes up to 3 tons",
    overage: "+$95 per additional ton",
    bestFor: "Best for larger renovations, roofing projects, and contractor jobs.",
  },
  {
    size: "40 Yard",
    label: "Commercial / Demolition",
    startingFrom: "$750",
    included: "Includes up to 6 tons",
    overage: "+$95 per additional ton",
    bestFor: "Best for commercial projects, major cleanouts, and demolition debris.",
    note: "Not typically needed for small home renovations.",
  },
];

const heavyMaterialBins: PricingCard[] = [
  {
    size: "10 Yard",
    startingFrom: "$400 flat",
    included: "Concrete / dirt / brick only",
    bestFor: "Best for concrete removal, interlock tear-outs, and compact soil loads.",
  },
  {
    size: "14 Yard",
    startingFrom: "$475 flat",
    included: "Concrete / dirt / brick only",
    bestFor: "Best for heavier hardscape and masonry disposal from larger jobs.",
  },
];

const promotions = [
  "Spring Clean-Up Special: $25 off 14 or 20 yard garbage bins (limited time)",
  "Next-Day Delivery: Book today, delivered tomorrow (conditions apply)",
];

const faqItems = [
  {
    question: "What's included in the price?",
    answer:
      "Every listed price includes delivery and pickup. Garbage bins also include a stated weight allowance based on size, and heavy-material bins are flat-rate for approved materials.",
  },
  {
    question: "How does weight work?",
    answer:
      "Garbage bins include scaled weight allowances by size: up to 1 ton for 10 yard, 2 tons for 14 yard, 3 tons for 20 yard, and 6 tons for 40 yard.",
  },
  {
    question: "What happens if I go over the included tons?",
    answer:
      "For garbage bins, overage is charged at +$95 per additional ton. We explain expected overage before pickup so you know the total in advance.",
  },
  {
    question: "Can I put concrete/dirt/brick in a garbage bin?",
    answer:
      "No. Garbage bins cannot contain concrete, dirt, or brick. Those materials require dedicated heavy-material bins.",
  },
  {
    question: "How long can I keep the bin?",
    answer:
      "Standard rentals are typically up to 7 days. If you need more time, we can arrange an extension before pickup.",
  },
  {
    question: "What can't go in the bin?",
    answer:
      "Hazardous waste, liquids, batteries, propane tanks, and other restricted materials are not accepted. Contact us if you are unsure before loading.",
  },
  {
    question: "Do you offer same-day/next-day delivery?",
    answer:
      "Yes, same-day or next-day service is available in many GTA areas based on scheduling and route capacity.",
  },
  {
    question: "How do I choose the right bin size?",
    answer:
      "Send us a photo of your material and we will recommend a size based on volume, weight, and access so you avoid paying for the wrong bin.",
  },
];

export default function Pricing() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Seo
        title="Bin Rental Pricing | Upfront Pricing & No Surprise Fees"
        description="Bin rental pricing starting from $350 across Toronto, Scarborough, North York, Markham, Vaughan, Richmond Hill, Aurora, and Newmarket with clear included weight and no surprise fees."
        image={siteImages.hero.pricing}
        url="https://acornconstructions.ca/pricing"
        canonicalUrl="https://acornconstructions.ca/pricing"
        faqItems={faqItems}
      />
      <PageHero
        title="Upfront Bin Pricing"
        subtitle="Starting-from pricing with realistic included weight and clear overage rules."
        image={siteImages.hero.pricing}
        alt={siteImageAlts.hero.pricing}
        eyebrow="Pricing"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 rounded-xl border border-primary/20 bg-primary/10 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Hidden Fees. Ever.</h2>
          <p className="text-gray-700">
            All pricing includes delivery & pickup. Any additional weight charges are explained before pickup — no surprise invoices.
          </p>
        </div>

        <div className="mb-12 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Compare Total Price</h2>
          <p className="text-gray-700">
            Some companies advertise low starting prices with very little weight included. Always check what’s included. We include realistic weight allowances and explain overages upfront.
          </p>
        </div>

        <div className="mb-12 rounded-xl bg-black text-white p-5">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Promotions</p>
          <div className="grid gap-2 md:grid-cols-2">
            {promotions.map((promo) => (
              <p key={promo} className="text-sm text-gray-200">{promo}</p>
            ))}
          </div>
        </div>

        <section className="mb-14">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-bold text-gray-900">Garbage Bins</h2>
            <Badge className="bg-primary text-white">No concrete / dirt / brick</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {garbageBins.map((bin) => (
              <Card key={bin.size} className="h-full border border-gray-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">{bin.size}</CardTitle>
                    {bin.label ? <Badge className="bg-black text-white">{bin.label}</Badge> : null}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xl font-bold text-primary">Starting from {bin.startingFrom}</p>
                  <p className="text-gray-700">{bin.included}</p>
                  <p className="text-gray-700">{bin.overage}</p>
                  <p className="text-gray-700">Delivery & pickup included</p>
                  <p className="text-gray-700">{bin.bestFor}</p>
                  {bin.note ? <p className="text-sm text-gray-500 italic">{bin.note}</p> : null}
                  <div className="pt-2 grid grid-cols-2 gap-3">
                    <a href="tel:4163053301">
                      <Button className="btn-primary w-full">Call Now</Button>
                    </a>
                    <a href="sms:+14163053301?body=Hi%20Acorn%2C%20I%20need%20a%20garbage%20bin%20quote.%20I%20can%20text%20a%20photo.">
                      <Button variant="outline" className="w-full">Text a Photo</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-bold text-gray-900">Concrete / Dirt / Brick</h2>
            <Badge className="bg-primary text-white">Flat-rate heavy material bins</Badge>
          </div>
          <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            Heavy material bins must be concrete OR dirt OR brick (no mixing with garbage; if mixed, load is reclassified as garbage pricing).
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {heavyMaterialBins.map((bin) => (
              <Card key={bin.size} className="h-full border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">{bin.size}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xl font-bold text-primary">Starting from {bin.startingFrom}</p>
                  <p className="text-gray-700">{bin.included}</p>
                  <p className="text-gray-700">Delivery & pickup included</p>
                  <p className="text-gray-700">{bin.bestFor}</p>
                  <div className="pt-2 grid grid-cols-2 gap-3">
                    <a href="tel:4163053301">
                      <Button className="btn-primary w-full">Call Now</Button>
                    </a>
                    <a href="sms:+14163053301?body=Hi%20Acorn%2C%20I%20need%20a%20concrete%2Fdirt%2Fbrick%20bin%20quote.%20I%20can%20text%20a%20photo.">
                      <Button variant="outline" className="w-full">Text a Photo</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="mb-12 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold uppercase">Pricing FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={faq.question} value={`pricing-faq-${index}`}>
                  <AccordionTrigger className="text-left font-bold text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="bg-black text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 uppercase">Need Help Choosing a Bin?</h2>
          <p className="text-gray-300 mb-6">
            Call or text a photo and we will recommend the right bin for your material type, weight, and site access.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:4163053301">
              <Button size="lg" className="btn-primary">Call Now</Button>
            </a>
            <a href="sms:+14163053301?body=Hi%20Acorn%2C%20I%20need%20help%20choosing%20the%20right%20bin.%20I%20can%20text%20a%20photo.">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">Text a Photo</Button>
            </a>
          </div>
          <div className="mt-6">
            <Link href="/contact" className="text-primary hover:underline font-semibold">
              Request a detailed quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
