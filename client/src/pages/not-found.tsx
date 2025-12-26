import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4 shadow-xl">
        <CardContent className="pt-6 text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-display uppercase mb-2">404 Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link href="/">
            <Button className="btn-primary w-full">Return Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
