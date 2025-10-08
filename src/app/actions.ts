// @/app/actions.ts
"use server";

import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
});

export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
    email?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }

  try {
    // Future Integration: Send data to a CRM like HubSpot or save to a database.
    // e.g., await saveToLeadList(validatedFields.data);
    console.log("Form data submitted:", validatedFields.data);

    return {
      message: "Thank you! Your message has been sent.",
      success: true,
      errors: {},
    };
  } catch (e) {
    return {
      message: "An unexpected error occurred. Please try again.",
      success: false,
      errors: {},
    };
  }
}
