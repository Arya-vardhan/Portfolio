
"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram, Share2 } from "lucide-react";
import { submitContactForm, type FormState } from "@/app/actions";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [state, formAction] = useFormState<FormState, FormData>(submitContactForm, {
    success: false,
    message: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <SectionWrapper id="contact">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <ScrollAnimationWrapper>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Contact Me</h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl">Have a question or want to work together? Let's talk.</p>
        </ScrollAnimationWrapper>
      </div>

      <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
        <div className="md:col-span-2 space-y-8">
            <ScrollAnimationWrapper>
                <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Email</h3>
                        <a href="mailto:aryavardhan.gelli@outlook.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                            aryavardhan.gelli@outlook.com
                        </a>
                    </div>
                </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4">
                    <Share2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Follow Me</h3>
                        <div className="flex gap-4 mt-2">
                            <Link href="https://github.com/Arya-vardhan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-6 h-6" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/gelli-arya-vardhan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                            <Link href="https://www.instagram.com/arya_vardhan_gelli" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollAnimationWrapper>
        </div>
        <div className="md:col-span-3">
          <ScrollAnimationWrapper animationClassName="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form action={formAction} className="space-y-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl><Input placeholder="Your Name" {...field} className="bg-input/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input placeholder="your.email@example.com" {...field} className="bg-input/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl><Textarea placeholder="Your message..." {...field} className="bg-input/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
