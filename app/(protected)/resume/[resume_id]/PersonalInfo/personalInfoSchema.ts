import { z } from "zod";

// Base schema with common validation rules
export const personalInfoBaseSchema = z.object({
  fullName: z.string("Full name is required").min(3, "Full name must be at least 3 characters long"),
  position: z.string("position is required").min(3, "Position must be at least 3 characters long"),
  email: z.string("email is required").email("email is not valid"),
  phone: z.string("phone number is required ").min(10, "Phone number must be at least 10 characters long"),
  address: z.string("address is required").min(3, "Address must be at least 3 characters long"),
  github: z.string("github is required").default(""),
  linkedIn: z.string("linkedIn is required").default(""),
  portfolio: z.string("portfolio is required").default(""),
  summary: z.string("summary is required").min(10, "Summary must be at least 10 characters long"),
});

// Update schema (makes all fields optional for partial updates)
export const personalInfoUpdateSchema = personalInfoBaseSchema.partial().extend({
  id: z.number(),
  resume_id: z.string().nullable().optional(),
});

// Response schema (includes database-generated fields)
export const personalInfoResponseSchema = personalInfoBaseSchema.extend({
  id: z.number(),
  resume_id: z.string().nullable(),
  phone: z.number().nullable(), // Database stores phone as number
});

// Type exports
export type PersonalInfoValues = z.infer<typeof personalInfoBaseSchema>;
export type PersonalInfoUpdateInput = z.infer<typeof personalInfoUpdateSchema>;
export type PersonalInfoResponse = z.infer<typeof personalInfoResponseSchema>;
