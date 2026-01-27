import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Validate with Zod schema (already handled by form resolver, but double check)
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        // Prefer a server-provided message when available
        try {
          const error = await res.json();
          const message = (error && (error.message || error.error)) as string | undefined;
          if (message) throw new Error(message);
        } catch {
          // ignore JSON parse errors
        }

        if (res.status === 400) {
          throw new Error("Validation failed");
        }

        throw new Error("Failed to submit inquiry");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Received!",
        description: "We'll be in touch with you shortly to confirm details.",
        variant: "default", // Shadcn toast variant
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
