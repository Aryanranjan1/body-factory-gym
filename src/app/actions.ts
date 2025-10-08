// @/app/actions.ts
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    phone?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    message: formData.get("message"),
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
