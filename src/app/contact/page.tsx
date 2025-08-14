"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let ctx = gsap.context(() => {
      // Initialize ScrollSmoother after a short delay
      gsap.delayedCall(0.5, () => {
        ScrollTrigger.refresh();
        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.2,
          effects: true,
          normalizeScroll: true,
        });

        // Staggered fade-in for contact cards
        gsap.utils.toArray<HTMLElement>(".contact-card").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });
        });
      });

      // Hero section animations
      gsap.from(".hero-title", {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    });

    // The cleanup function now only needs to revert the context, which automatically kills
    // the smoother instance and all other animations created within it.
    return () => ctx.revert();
  }, [isClient]);

  async function onSubmit(data: ContactFormValues) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="bg-slate-950 text-slate-50 font-sans">
        <div className="space-y-16 py-16 md:py-24">
          <section className="text-center">
            <h1 className="hero-title text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Get in Touch</h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="contact-card bg-slate-800/80 border border-slate-700 ">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-400">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-100">Our Office</h3>
                      <p>Sunshine Complex, Office No. 41, Near Nalasopara East Station</p>
                      <p>Opp Sunshine Heights, Maharashtra 401209</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-100">Email Us</h3>
                      <a href="mailto:novastacksolution@gmail.com" className="hover:text-primary transition-colors">novastacksolution@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-100">Call Us</h3>
                      <p>022-50333576</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="contact-card bg-slate-800/80 border border-slate-700">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-slate-400">
                  <p><span className="font-semibold text-slate-200">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold text-slate-200">Saturday - Sunday:</span> Closed</p>
                </CardContent>
              </Card>
            </div>
            <Card className="contact-card contact-form-card bg-slate-800/80 border border-slate-700 p-6 md:p-8">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="bg-slate-700 border-slate-600 text-white focus:border-primary transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} className="bg-slate-700 border-slate-600 text-white focus:border-primary transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Subject" {...field} className="bg-slate-700 border-slate-600 text-white focus:border-primary transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your Message" {...field} className="bg-slate-700 border-slate-600 text-white focus:border-primary transition-colors min-h-[150px]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </section>
        </div>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}
