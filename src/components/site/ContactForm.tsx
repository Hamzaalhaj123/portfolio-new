"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import * as z from "zod";

const FORM_ENDPOINT = "https://formspree.io/f/xdkepvzr";

type Status = "idle" | "sending" | "sent" | "failed";

export function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<Status>("idle");

  const schema = z.object({
    name: z.string().trim().min(2, t("errorName")),
    email: z.string().trim().email(t("errorEmail")),
    message: z.string().trim().min(10, t("errorMessage")),
    _gotcha: z.string().max(0).optional(),
  });
  type Values = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const submit = async (values: Values) => {
    if (values._gotcha) return;
    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="mt-6 grid gap-6 sm:grid-cols-2">
      <div aria-hidden className="absolute -start-[9999px] h-px w-px overflow-hidden">
        <input tabIndex={-1} autoComplete="off" {...register("_gotcha")} />
      </div>

      <div>
        <label htmlFor="contact-name" className="font-semibold">
          {t("name")}
        </label>
        <input
          id="contact-name"
          autoComplete="name"
          disabled={sending}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="field"
          {...register("name")}
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1.5 text-[15px] text-[#ffb3ba]">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="font-semibold">
          {t("emailField")}
        </label>
        <input
          id="contact-email"
          type="email"
          dir="ltr"
          autoComplete="email"
          disabled={sending}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="field rtl:text-right"
          {...register("email")}
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1.5 text-[15px] text-[#ffb3ba]">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className="font-semibold">
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          rows={4}
          disabled={sending}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="field resize-y"
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-[15px] text-[#ffb3ba]">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex min-h-12 items-center bg-white px-7 py-2 font-bold text-ink transition-colors hover:bg-[#F28C00] disabled:cursor-progress disabled:opacity-70"
        >
          {sending ? t("sending") : t("send")}
        </button>
        <p role="status" className="text-[16px]">
          {status === "sent" && t("sent")}
          {status === "failed" && (
            <span className="text-[#ffb3ba]">{t("failed")}</span>
          )}
        </p>
      </div>
    </form>
  );
}
