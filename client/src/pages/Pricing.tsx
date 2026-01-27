import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { siteImages, siteImageAlts } from "@/assets/siteImages";

export default function Pricing() {
  const binPricing = [
    { size: "10 Yard", type: "Clean Fill/Dirt", price: "$350" },
    { size: "10 Yard", type: "Concrete/Brick", price: "$375" },
    { size: "14 Yard", type: "Mixed Waste", price: "$400 + weight" },
    { size: "20 Yard", type: "Mixed Waste", price: "$450 + weight" },
    { size: "40 Yard", type: "Mixed Waste", price: "$550 + weight" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Seo
        title="Bin Rental Pricing Toronto & GTA | Transparent Rates | Acorn Constructions"
        description="Transparent bin rental pricing in Toronto & the GTA with flat rates, clear weight limits, and no surprises for every size. Get a free quote or call today."
        image={siteImages.hero.pricing}
      />
      <PageHero
        title="Transparent Pricing"
        subtitle="Clear rates for bin rentals with honest, upfront pricing."
        image={siteImages.hero.pricing}
        alt={siteImageAlts.hero.pricing}
        eyebrow="Pricing"
      />

      <div className="container mx-auto px-4 py-12">
        
        {/* Bin Rental Pricing */}
        <Card className="mb-12 shadow-lg">
          <CardHeader className="bg-primary text-white">
            <CardTitle className="text-2xl font-bold uppercase">Bin Rental Rates</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="w-[30%] font-bold text-black">Bin Size</TableHead>
                  <TableHead className="w-[40%] font-bold text-black">Material Type</TableHead>
                  <TableHead className="w-[30%] font-bold text-black text-right">Starting Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {binPricing.map((item, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{item.size}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell className="text-right font-bold text-primary text-lg">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold uppercase">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">✓ Drop-off and Pick-up</li>
                <li className="flex items-center gap-2">✓ 7-Day Rental Period</li>
                <li className="flex items-center gap-2">✓ Driveway Protection Boards (on request)</li>
                <li className="flex items-center gap-2">✓ Friendly, Professional Service</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold uppercase">Additional Charges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between border-b pb-1"><span>Extra Days</span> <span>$15/day</span></li>
                <li className="flex justify-between border-b pb-1"><span>Overweight</span> <span>$115/tonne</span></li>
                <li className="flex justify-between border-b pb-1"><span>Hazardous Waste</span> <span>Not Accepted</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-black text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 uppercase">Need a Demolition or Excavation Quote?</h2>
          <p className="text-gray-300 mb-6">These projects are priced based on scope, access, and specific requirements.</p>
          <Link href="/contact">
            <Button size="lg" className="btn-primary">Get Custom Quote</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
