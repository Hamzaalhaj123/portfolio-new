import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locales } from "../config/locales";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locale || !locales.includes(locale as Locales)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
