import { z } from "zod";

// Base schema with common validation rules
export const educationBaseSchema = z.object({
  university: z.string("Enter university name").min(2, "University name should be at least 2 character").nullable(),
  degree: z.string("Enter degree").min(2, "Degree should be at least 2 character").nullable(),
  diploma: z.string().optional().nullable(),
  diplomadate: z.string().optional().nullable(),
  graduationyear: z.string("Enter graduation year").min(2, "Graduation year should be at least 2 character").nullable(),
  location: z.string("Enter location").min(5, "Location should be at least 5 character").nullable(),
  diplomaLink: z.string("Enter diploma link").optional().nullable(),
});

// Update schema (makes all fields optional for partial updates)
export const educationUpdateSchema = educationBaseSchema.partial().extend({
  id: z.number(),
  resume_id: z.string().nullable().optional(),
});

// Response schema (includes database-generated fields)
export const educationResponseSchema = educationBaseSchema.extend({
  id: z.number(),
  resume_id: z.string().nullable(),
});

// Type exports
export type EducationValues = z.infer<typeof educationBaseSchema>;
export type EducationUpdateInput = z.infer<typeof educationUpdateSchema>;
export type EducationResponse = z.infer<typeof educationResponseSchema>;
