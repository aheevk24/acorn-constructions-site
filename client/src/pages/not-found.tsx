import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Seo
        title="404 Page Not Found | Acorn Constructions"
        description="The page you requested could not be found. Return to Acorn Constructions for bin rental, demolition, and excavation."
        image={siteImages.hero.notFound}
      />
      <PageHero
        title="404 Page Not Found"
        subtitle="The page you requested could not be found. Let us help you get back to the site."
        image={siteImages.hero.notFound}
        alt={siteImageAlts.hero.notFound}
        eyebrow="Not Found"
      />

      <div className="flex items-center justify-center py-16">
        <Card className="w-full max-w-md mx-4 shadow-xl">
          <CardContent className="pt-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-3xl font-bold font-display uppercase mb-2">
              Let’s get you back on track
            </h2>
            <p className="text-gray-600 mb-6">
              The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link href="/">
              <Button className="btn-primary w-full">Return Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
