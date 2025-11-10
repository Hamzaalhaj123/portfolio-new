// components/contact-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../shared/Form";
import { Input } from "../shared/Input";
import { Textarea } from "../shared/TextArea";
import Button from "../shared/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _gotcha: z.string().max(0).optional(), // Rename honeypot to _gotcha
});

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      _gotcha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values._gotcha) return;

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xdkepvzr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      if (response.ok) {
        form.reset();
        setSuccessMessage("Message sent successfully!");
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto"
      id="contact"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="mt-4 text-muted-foreground">
          Have a project in mind? Let's make it happen!
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="hidden">
            <FormField
              control={form.control}
              name="_gotcha"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="text" autoComplete="off" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your name"
                    disabled={loading}
                  />
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
                  <Input
                    {...field}
                    type="email"
                    placeholder="your@email.com"
                    disabled={loading}
                  />
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
                  <Textarea
                    {...field}
                    placeholder="Let's build something amazing!"
                    className="min-h-[120px]"
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col items-center gap-4">
            <Button
              type="submit"
              className="w-full sm:w-auto px-8 py-6 text-lg bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 transition-all"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {successMessage && (
              <p className="text-emerald-400 text-sm">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-400 text-sm">{errorMessage}</p>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
};
