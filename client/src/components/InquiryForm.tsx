import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const inquirySchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  phone: z.string().min(1, "Phone number is required."),
  email: z.string().min(1, "Email is required."),
  address: z.string().min(1, "Service address is required."),
  city: z.string().min(1, "City is required."),
  serviceNeeded: z.string().min(1, "Service needed is required."),
  binSize: z.string().optional(),
  materialType: z.string().optional(),
  preferredDeliveryDate: z.string().optional(),
  preferredPickupDate: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export function InquiryForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      serviceNeeded: "",
      binSize: "",
      materialType: "",
      preferredDeliveryDate: "",
      preferredPickupDate: "",
      additionalNotes: "",
    },
  });

  const encode = (data: Record<string, string>) => new URLSearchParams(data).toString();

  const onSubmit = async (data: InquiryFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const payload = {
      "form-name": "quote-request",
      "bot-field": "",
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      address: data.address,
      city: data.city,
      serviceNeeded: data.serviceNeeded,
      binSize: data.binSize || "",
      materialType: data.materialType || "",
      preferredDeliveryDate: data.preferredDeliveryDate || "",
      preferredPickupDate: data.preferredPickupDate || "",
      additionalNotes: data.additionalNotes || "",
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode(payload),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed.");
      }

      window.location.assign("/thank-you");
      return;
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceType = form.watch("serviceNeeded");

  return (
    <Card className="shadow-2xl border-t-4 border-t-primary">
      <CardHeader className="bg-gray-50">
        <CardTitle className="text-2xl font-bold uppercase text-gray-900">Get a Free Quote</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you immediately.</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form
            name="quote-request"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thank-you"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="quote-request" />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="serviceNeeded" value={serviceType || ""} />
            <input type="hidden" name="binSize" value={form.watch("binSize") || ""} />
            <input type="hidden" name="materialType" value={form.watch("materialType") || ""} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} name="fullName" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} name="phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                    <Input placeholder="you@example.com" type="email" {...field} name="email" />
                    </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="Street address" {...field} name="address" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City *</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} name="city" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="serviceNeeded"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Needed *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || undefined}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Bin Rental">Bin Rental</SelectItem>
                        <SelectItem value="Demolition">Demolition</SelectItem>
                        <SelectItem value="Excavation">Excavation</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {serviceType === "Bin Rental" && (
                <FormField
                  control={form.control}
                  name="binSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bin Size (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value || undefined}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="10 Yard">10 Yard</SelectItem>
                          <SelectItem value="14 Yard">14 Yard</SelectItem>
                          <SelectItem value="20 Yard">20 Yard</SelectItem>
                          <SelectItem value="40 Yard">40 Yard</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            {serviceType === "Bin Rental" && (
              <FormField
                control={form.control}
                name="materialType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || undefined}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Garbage">Mixed Garbage (Construction)</SelectItem>
                        <SelectItem value="Dirt">Clean Dirt</SelectItem>
                        <SelectItem value="Concrete">Clean Concrete</SelectItem>
                        <SelectItem value="Brick">Clean Brick</SelectItem>
                        <SelectItem value="Asphalt">Asphalt</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="preferredDeliveryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Delivery Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        name="preferredDeliveryDate"
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredPickupDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Pickup Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        name="preferredPickupDate"
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="additionalNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                      <Textarea 
                      placeholder="Tell us about your project, access restrictions, or special requirements..." 
                      className="resize-none"
                      {...field}
                      name="additionalNotes"
                      value={field.value || ""} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitStatus === "success" && (
              <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
                Request sent — we’ll get back to you shortly.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                Something went wrong. Please call 416-305-3301.
              </div>
            )}

            <Button type="submit" className="w-full btn-primary h-12 text-lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
