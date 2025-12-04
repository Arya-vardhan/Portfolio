"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {

  const rawFormData = Object.fromEntries(formData.entries());
  const parsedData = contactSchema.safeParse(rawFormData);

  if (!parsedData.success) {
    return { 
      success: false, 
      message: parsedData.error.errors.map((e) => e.message).join(", ") 
    };
  }

  // This is a static site export for GitHub pages, so server actions are not supported.
  // In a real app, you would send an email here using a service like Resend or Nodemailer.
  console.log("Form submission simulated for static site:", parsedData.data);
  
  return { success: true, message: "Thank you for your message! I'll be in touch soon." };
}
