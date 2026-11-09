import type { Metadata, Viewport } from "next";
import { Alexandria, Schibsted_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import React from "react";
import { getLangDir } from "rtl-detect";
import { SiteHeader } from "@/components/site/SiteHeader";
import { locales, type Locales } from "@/config/locales";
import "../globals.css";

const latin = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
  // The metric fallback is a catch-all Arial, which would swallow Arabic glyphs.
  adjustFontFallback: false,
});

const arabic = Alexandria({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  adjustFontFallback: false,
});

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Site" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { languages: { en: "/en", ar: "/ar" } },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "profile",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as Locales)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const { Site, Hero, Key, Stations, Contact } = messages;

  return (
    <html
      dir={getLangDir(locale)}
      lang={locale}
      className={`${latin.variable} ${arabic.variable}`}
    >
      <body>
        <NextIntlClientProvider
          messages={{ Site, Hero, Key, Stations, Contact }}
        >
          <SiteHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
