import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: text("email").notNull(),
  serviceNeeded: text("service_needed").notNull(), // Bin Rental, Demolition, Excavation
  address: text("address").notNull(),
  city: text("city").notNull(),
  binSize: text("bin_size"), // 10, 14, 20, 40
  materialType: text("material_type"), // Garbage, Dirt, Concrete, Brick
  deliveryDate: text("delivery_date"),
  pickupDate: text("pickup_date"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ 
  id: true, 
  createdAt: true 
});

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
