import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  link: string;
}

export function ServiceCard({ title, description, image, icon, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-none shadow-md h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        {/* Color overlay that fades out on hover */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 z-20 bg-primary p-3 rounded-full text-white shadow-lg">
          {icon}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl font-bold uppercase">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
      
      <CardFooter>
        <Link href={link}>
          <Button variant="ghost" className="p-0 text-primary font-bold hover:bg-transparent hover:text-green-700 flex items-center gap-2">
            LEARN MORE <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
