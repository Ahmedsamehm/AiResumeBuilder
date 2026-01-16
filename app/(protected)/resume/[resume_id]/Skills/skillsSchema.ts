import { z } from "zod";

// Base schema with common validation rules
export const skillsBaseSchema = z.object({
  programmingLanguages: z.string("Enter programming languages").min(3, "Programming languages must be at least 3 characters long").nullable(),
  frameworksTools: z.string("Enter frameworks & tools").min(3, "Frameworks & tools must be at least 3 characters long").nullable(),
  technologies: z.string("Enter technologies").min(3, "Technologies must be at least 3 characters long").nullable(),
});

// Update schema (makes all fields optional for partial updates)
export const skillsUpdateSchema = skillsBaseSchema.partial().extend({
  id: z.number(),
  resume_id: z.string().nullable().optional(),
});

// Response schema (includes database-generated fields)
// Note: Database has these as non-nullable strings, but form accepts nullable
export const skillsResponseSchema = z.object({
  id: z.number(),
  resume_id: z.string().nullable(),
  programmingLanguages: z.string(),
  frameworksTools: z.string(),
  technologies: z.string(),
});

// Type exports
export type SkillsValues = z.infer<typeof skillsBaseSchema>;
export type SkillsUpdateInput = z.infer<typeof skillsUpdateSchema>;
export type SkillsResponse = z.infer<typeof skillsResponseSchema>;
