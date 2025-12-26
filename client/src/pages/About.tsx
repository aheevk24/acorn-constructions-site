import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-display font-bold uppercase mb-8 text-center">About Our Company</h1>
        
        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="lead text-xl text-black font-medium mb-6">
            We are a premier provider of bin rental, demolition, and excavation services in the Greater Toronto Area. 
            Founded on the principles of reliability, safety, and customer satisfaction.
          </p>

          <p className="mb-6">
            Our fleet consists of modern, well-maintained trucks and machinery, ensuring we can tackle jobs of any size efficiently. 
            From the moment you call us to the final site cleanup, we are dedicated to making your project run smoothly.
          </p>

          <h3 className="text-2xl font-display font-bold uppercase text-black mt-10 mb-4">Our Commitment</h3>
          <p className="mb-6">
            We understand that construction and renovation projects operate on tight schedules. That's why we prioritize:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Punctuality:</strong> We show up when we say we will.</li>
            <li><strong>Communication:</strong> You will never be left guessing about delivery or arrival times.</li>
            <li><strong>Cleanliness:</strong> We respect your property and ensure bins are placed carefully and sites are left clean.</li>
            <li><strong>Safety:</strong> All our operators are fully trained and insured.</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button className="btn-primary" size="lg">Work With Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
