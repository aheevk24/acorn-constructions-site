import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  icon: React.ReactNode;
  link: string;
}

export function ServiceCard({
  title,
  description,
  image,
  imageAlt,
  icon,
  link,
}: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={imageAlt || title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
          <div className="bg-primary/90 p-2 rounded-md">{icon}</div>
          <span className="text-lg font-bold uppercase">{title}</span>
        </div>
      </div>

      <CardContent className="flex-grow p-6">
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <Link href={link}>
          <Button
            variant="outline"
            className="border-primary text-primary font-bold uppercase tracking-wide hover:bg-primary hover:text-white"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
