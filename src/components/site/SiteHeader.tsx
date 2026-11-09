"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/lib/next-intl/navigation";
import { CONTACT } from "@/content/cases";
import { LINES } from "@/content/network";

export function SiteHeader() {
  const t = useTranslations("Site");
  const locale = useLocale() as "en" | "ar";
  const other = locale === "en" ? "ar" : "en";
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const sections = LINES.map((l) =>
      document.getElementById(`line-${l.number}`)
    ).filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const n = Number(entry.target.id.replace("line-", ""));
          if (entry.isIntersecting) setCurrent(n);
          else setCurrent((value) => (value === n ? null : value));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b-2 border-ink bg-white">
      <a
        href="#headline"
        className="absolute start-2 top-2 z-10 -translate-y-20 bg-ink px-3 py-2 text-sm font-semibold text-white focus:translate-y-0"
      >
        {t("skip")}
      </a>
      <div className="wrap flex h-full items-center justify-between gap-4">
        <a href="#headline" className="whitespace-nowrap text-[17px] font-bold no-underline max-[359px]:text-[15px]">
          {t("name")}
        </a>

        <nav aria-label={t("linesNav")} className="hidden lg:block">
          <ul className="flex items-center gap-1.5">
            {LINES.map((line) => {
              const isCurrent = current === line.number;
              return (
                <li key={line.id}>
                  <a
                    href={`#line-${line.number}`}
                    aria-label={t("lineLabel", {
                      number: line.number,
                      name: line.names[locale],
                    })}
                    aria-current={isCurrent ? "location" : undefined}
                    className="bullet text-[13px] transition-transform duration-150 ease-out hover:scale-110"
                    style={
                      {
                        "--line": line.color,
                        "--on-line": line.onColor,
                        boxShadow: isCurrent
                          ? `0 0 0 2px #fff, 0 0 0 4px ${line.color}`
                          : undefined,
                      } as React.CSSProperties
                    }
                  >
                    {line.number}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 whitespace-nowrap text-[15px] font-semibold max-[359px]:gap-2 max-[359px]:text-[13px] sm:gap-6">
          <a
            href={`mailto:${CONTACT.email}`}
            className="underline-offset-4 hover:underline"
          >
            {t("email")}
          </a>
          <a
            href={CONTACT.cv}
            download={CONTACT.cvName}
            className="underline-offset-4 hover:underline"
          >
            {t("cv")}
          </a>
          <Link
            href="/"
            locale={other}
            lang={other}
            aria-label={t("switchLabel")}
            className="underline-offset-4 hover:underline"
          >
            {t("switchTo")}
          </Link>
        </div>
      </div>
    </header>
  );
}
