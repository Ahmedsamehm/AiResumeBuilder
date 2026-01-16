import { z } from "zod";

// Base schema with common validation rules
export const experienceBaseSchema = z.object({
  title: z.string("Enter job title").min(5, "Job title should be at least 5 character").nullable(),
  company: z.string("Enter company name").min(3, "Company name should be at least 3 character").nullable(),
  location: z.string("Enter location").min(3, "Location should be at least 3 characters").nullable(),
  start_date: z.string("Enter start date").min(2, "Start date should be at least 2 character").nullable(),
  end_date: z.string("Enter end date").min(2, "End date should be at least 2 character").nullable(),
  description: z.string("Enter description").min(10, "Description should be at least 10 characters").nullable(),
});

// Update schema (makes all fields optional for partial updates)
export const experienceUpdateSchema = experienceBaseSchema.partial().extend({
  id: z.number(),
  resume_id: z.string().nullable().optional(),
});

// Response schema (includes database-generated fields)
export const experienceResponseSchema = experienceBaseSchema.extend({
  id: z.number(),
  resume_id: z.string().nullable(),
});

// Type exports
export type ExperienceValues = z.infer<typeof experienceBaseSchema>;
export type ExperienceUpdateInput = z.infer<typeof experienceUpdateSchema>;
export type ExperienceResponse = z.infer<typeof experienceResponseSchema>;
