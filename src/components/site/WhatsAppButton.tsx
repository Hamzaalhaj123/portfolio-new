"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/content/cases";
import cn from "@/utils/cn";

export function WhatsAppButton() {
  const t = useTranslations("Site");
  const [show, setShow] = useState(false);

  // Waits while the hero's own WhatsApp button is on screen. Showing both
  // repeats the action, and the corner would cover the line key.
  useEffect(() => {
    const heroButton = document.getElementById("hero-contact");
    if (!heroButton) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { rootMargin: "-56px 0px 0px 0px" }
    );
    observer.observe(heroButton);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label={t("whatsapp")}
      className={cn(
        "fixed bottom-[max(16px,env(safe-area-inset-bottom))] end-4 z-40 flex h-14 w-14 items-center justify-center bg-ink text-white shadow-[0_0_0_2px_#fff] transition-[background-color,opacity] duration-200 hover:bg-[#D9202F] focus-visible:-outline-offset-[7px] lg:bottom-6 lg:end-6",
        !show && "invisible opacity-0"
      )}
    >
      <FaWhatsapp aria-hidden className="h-8 w-8" />
    </a>
  );
}
