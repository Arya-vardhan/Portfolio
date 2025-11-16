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

  // In a real app, you would send an email here using a service like Resend or Nodemailer.
  // For this example, we'll just log it to the console.
  console.log("New contact form submission:", parsedData.data);

  return { success: true, message: "Message sent successfully! Thanks for reaching out." };
}
