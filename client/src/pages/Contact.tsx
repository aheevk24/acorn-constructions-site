import { InquiryForm } from "@/components/InquiryForm";
import { Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Seo
        title="Contact Acorn Constructions | Get a Quote (416) 305-3301"
        description="Contact Acorn Constructions in Toronto & the GTA for bin rental, demolition, or excavation. Call (416) 305-3301 or get a free quote today for fast service."
        image={siteImages.hero.contact}
      />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for quotes, booking, or job-site questions across Toronto & the GTA."
        image={siteImages.hero.contact}
        alt={siteImageAlts.hero.contact}
        eyebrow="Contact"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold uppercase mb-6 border-b pb-2">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <a href="tel:4163053301" className="text-gray-600 hover:text-primary transition-colors text-lg">(416) 305-3301</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a href="mailto:acorn.inc3@gmail.com" className="text-gray-600 hover:text-primary transition-colors">acorn.inc3@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Hours</p>
                    <p className="text-gray-600">Mon - Fri: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 8:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-bold uppercase mb-2">Emergency Service?</h3>
              <p className="mb-4 text-white/90">Need a bin or cleanup urgently? Call us directly for immediate assistance.</p>
              <a href="tel:4163053301" className="inline-block bg-white text-primary font-bold px-6 py-2 rounded uppercase text-sm hover:bg-gray-100 transition-colors">Call Now</a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
