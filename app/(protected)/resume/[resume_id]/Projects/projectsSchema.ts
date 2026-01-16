import { z } from "zod";

// Base schema with common validation rules
export const projectsBaseSchema = z.object({
  projectTitle: z.string("Enter project title").min(3, "Project title must be at least 3 characters long"),
  projectDetails: z.string("Enter project details").min(10, "Project details must be at least 10 characters long").nullable(),
  technologiesUsed: z.string("Enter technologies used").min(3, "Technologies used must be at least 3 characters long").nullable(),
  duration: z.string("Enter duration").min(2, "Duration must be at least 2 characters long").optional().nullable(),
  github: z.string("Enter github").min(3, "Github must be at least 3 characters long").optional().nullable(),
});

// Update schema (makes all fields optional for partial updates)
export const projectsUpdateSchema = projectsBaseSchema.partial().extend({
  id: z.number(),
  resume_id: z.string().optional(),
});

// Response schema (includes database-generated fields)
export const projectsResponseSchema = projectsBaseSchema.extend({
  id: z.number(),
  resume_id: z.string(),
  // Database has these as non-nullable but schema allows nullable for forms
  github: z.string(), // Database requires this, but form allows nullable
});

// Type exports
export type ProjectValues = z.infer<typeof projectsBaseSchema>;
export type ProjectsUpdateInput = z.infer<typeof projectsUpdateSchema>;
export type ProjectsResponse = z.infer<typeof projectsResponseSchema>;
