import { z } from "zod";

// Base schema with common validation rules
export const jobDescriptionBaseSchema = z.object({
  jobDescription: z.string("Enter job description").min(10, "Job description must be at least 10 characters long"),
});

// Type exports
export type JobDescriptionValues = z.infer<typeof jobDescriptionBaseSchema>;
