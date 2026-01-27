import { db } from "./db";
import { inquiries, type InsertInquiry, type Inquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    if (!db) {
      throw new Error("Database is not configured.");
    }
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }
}

class MemoryStorage implements IStorage {
  private inquiries: Inquiry[] = [];
  private nextId = 1;

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = {
      id: this.nextId++,
      name: insertInquiry.name,
      phone: insertInquiry.phone,
      email: insertInquiry.email,
      serviceNeeded: insertInquiry.serviceNeeded,
      address: insertInquiry.address,
      city: insertInquiry.city,
      binSize: insertInquiry.binSize ?? null,
      materialType: insertInquiry.materialType ?? null,
      deliveryDate: insertInquiry.deliveryDate ?? null,
      pickupDate: insertInquiry.pickupDate ?? null,
      notes: insertInquiry.notes ?? null,
      createdAt: new Date(),
    };
    this.inquiries.push(inquiry);
    return inquiry;
  }
}

export const storage = db ? new DatabaseStorage() : new MemoryStorage();
