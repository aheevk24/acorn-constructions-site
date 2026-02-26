import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/logo.jpeg"; // If this file is a phone screenshot with black bars, we crop via CSS in the header

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/bin-rental", label: "Bin Rental" },
    { href: "/demolition", label: "Demolition" },
    { href: "/excavation", label: "Excavation" },
    { href: "/pricing", label: "Pricing" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - Contact Info */}
      <div className="bg-black text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" /> (416) 305-3301
            </span>
            <a className="flex items-center gap-2 hover:text-primary transition-colors" href="mailto:acorn.inc3@gmail.com">
              <Mail className="w-4 h-4 text-primary" /> acorn.inc3@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Serving GTA & Surrounding Areas
            </span>
          </div>
          <div className="flex gap-4">
             {/* Social placeholders */}
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary cursor-pointer transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary cursor-pointer transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-primary">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Acorn Constructions Inc. Home">
            <div className="h-12 w-14 overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt="Acorn Constructions Inc. logo"
                className="h-24 w-full object-cover"
                style={{ objectPosition: "center 60%" }}
              />
            </div>
            <div className="hidden lg:block">
              <span className="block font-display text-xl font-bold leading-none uppercase text-black">Acorn Constructions Inc.</span>
              <span className="block font-sans text-xs font-medium tracking-widest text-gray-500 uppercase">Bin Rentals • Demolition • Excavation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-medium text-sm uppercase tracking-wide hover:text-primary transition-colors ${isActive(link.href) ? 'text-primary font-bold' : 'text-gray-800'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:4163053301" className="font-display text-xl font-bold text-black hover:text-primary transition-colors">
              (416) 305-3301
            </a>
            <Link href="/contact">
              <Button size="lg" className="btn-primary">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-accordion-down">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-lg font-medium py-2 border-b border-gray-100 ${isActive(link.href) ? 'text-primary' : 'text-gray-800'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a href="tel:4163053301" className="flex items-center justify-center gap-2 bg-gray-100 p-3 rounded-md font-bold text-black">
                  <Phone className="w-5 h-5" /> Call (416) 305-3301
                </a>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full btn-primary h-12">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-primary">About Us</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We provide top-tier bin rental, demolition, and excavation services across the GTA. 
                Committed to safety, speed, and reliable service for residential and commercial projects.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-primary">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.slice(0, 6).map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white hover:pl-2 transition-all block">
                      › {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-primary">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span> Bin Rentals (10-40 Yards)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span> Residential Demolition
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span> Commercial Demolition
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span> Excavation & Grading
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span> Site Cleanup
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-primary">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Serving Toronto & The GTA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <a href="tel:4163053301" className="text-gray-400 hover:text-white">(416) 305-3301</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <a href="mailto:acorn.inc3@gmail.com" className="text-gray-400 hover:text-white">acorn.inc3@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p className="text-gray-500">
              Acorn Constructions Inc. • Toronto, ON •{" "}
              <a href="tel:4163053301" className="hover:text-white">
                (416) 305-3301
              </a>{" "}
              •{" "}
              <a href="mailto:acorn.inc3@gmail.com" className="hover:text-white">
                acorn.inc3@gmail.com
              </a>
            </p>
            <p>&copy; {new Date().getFullYear()} Acorn Constructions Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-t border-white/10 p-3">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:4163053301"
            aria-label="Call Acorn Constructions"
            className="flex items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-bold uppercase tracking-wide text-white"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="sms:+14163053301?body=Hi%20Acorn%2C%20I%20need%20a%20quote.%20I%20can%20text%20a%20photo."
            aria-label="Text Acorn Constructions"
            className="flex items-center justify-center gap-2 rounded-md border border-white/30 py-3 text-sm font-bold uppercase tracking-wide text-white"
          >
            <MessageSquareText className="w-4 h-4" />
            Text Us
          </a>
        </div>
      </div>
    </div>
  );
}
