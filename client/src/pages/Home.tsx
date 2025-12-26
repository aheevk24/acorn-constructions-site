import { motion } from "framer-motion";
import { Link } from "wouter";
import { Truck, Hammer, Shovel, CheckCircle, Clock, ShieldCheck, DollarSign, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { InquiryForm } from "@/components/InquiryForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Construction site background */}
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Construction Site Excavator" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16">
          <motion.div {...fadeIn} className="space-y-6">
            <div className="inline-block bg-primary px-4 py-1 text-sm font-bold uppercase tracking-widest text-white mb-2">
              Serving the GTA & Surrounding Areas
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold uppercase leading-tight">
              Bin Rentals, <span className="text-primary">Demolition</span> & Excavation
            </h1>
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              Fast, clean, and reliable service. Same-day or next-day delivery often available. We handle the mess so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-6 h-auto uppercase font-bold tracking-wider">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <InquiryForm />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Our Services</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-4">Construction & Disposal Solutions</h3>
            <p className="text-gray-600">
              From small residential cleanups to large commercial demolitions, we have the equipment and expertise to get the job done right.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Bin Rental"
              description="Various sizes available (10, 14, 20, 40 yards) for all your waste disposal needs. Mixed waste, clean fill, concrete, and more."
              image="https://images.unsplash.com/photo-1595245862217-158863f82023?q=80&w=2070&auto=format&fit=crop" /* Dumpster image */
              icon={<Truck className="w-6 h-6" />}
              link="/bin-rental"
            />
            <ServiceCard 
              title="Demolition"
              description="Safe and efficient demolition services for residential and commercial properties. Interior gut-outs, structural demolition, and more."
              image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" /* Demolition image */
              icon={<Hammer className="w-6 h-6" />}
              link="/demolition"
            />
            <ServiceCard 
              title="Excavation"
              description="Professional excavation, grading, and site preparation. We have the heavy machinery to handle digging projects of any scale."
              image="https://images.unsplash.com/photo-1579769363026-64c843026850?q=80&w=2069&auto=format&fit=crop" /* Excavator image */
              icon={<Shovel className="w-6 h-6" />}
              link="/excavation"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Why Choose Us</h2>
              <h3 className="text-4xl font-display font-bold text-white mb-8">Built on Reliability & Trust</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg h-fit">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Fast & Reliable Delivery</h4>
                    <p className="text-gray-400">We understand that time is money. We offer same-day or next-day delivery to keep your project on schedule.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg h-fit">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Transparent Pricing</h4>
                    <p className="text-gray-400">No hidden fees. Our flat-rate pricing includes delivery, pickup, and disposal up to the weight limit.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg h-fit">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Fully Insured & Safe</h4>
                    <p className="text-gray-400">Safety is our priority. Our operators are trained professionals, and we are fully insured for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2132&auto=format&fit=crop" /* Construction worker with clipboard */
                alt="Professional Team" 
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
