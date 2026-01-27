import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { siteImages } from "@/assets/siteImages";

export default function ThankYou() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Seo
        title="Thanks | Acorn Constructions"
        description="Thanks — we received your request. We'll contact you shortly."
        image={siteImages.hero.contact}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-lg bg-white p-10 text-center shadow-md">
          <h1 className="text-3xl font-bold text-gray-900">Thanks — we received your request.</h1>
          <p className="mt-4 text-gray-600">We'll contact you shortly.</p>
          <div className="mt-8">
            <Link href="/">
              <Button className="btn-primary">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
