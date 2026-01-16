import { z } from "zod";

// Base schema with common validation rules
export const ResumeBaseSchema = z.object({
  title: z.string("Enter resume title").min(3, "Resume title must be at least 3 characters long"),
});

// Update schema (makes all fields optional for partial updates)
export const resumeUpdateSchema = ResumeBaseSchema.partial().extend({
  id: z.string(),
  user_id: z.string().optional(),
  created_at: z.string().nullable().optional(),
});

// Response schema (includes database-generated fields)
export const resumeResponseSchema = ResumeBaseSchema.extend({
  id: z.string(),
  user_id: z.string(),
  created_at: z.string().nullable(),
});

// Type exports
export type ResumeValues = z.infer<typeof ResumeBaseSchema>;
export type ResumeUpdateInput = z.infer<typeof resumeUpdateSchema>;
export type ResumeResponse = z.infer<typeof resumeResponseSchema>;
