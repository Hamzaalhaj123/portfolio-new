"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/content/cases";
import { LINES, type LineId } from "@/content/network";
import { NetworkMap } from "./NetworkMap";

const LIT_MS = 4400;
const REST_MS = 2600;

export function HeroStage() {
  const t = useTranslations("Hero");
  const tKey = useTranslations("Key");
  const tSite = useTranslations("Site");
  const locale = useLocale() as "en" | "ar";
  const rtl = locale === "ar";

  const [active, setActive] = useState<LineId | null>(null);
  const handled = useRef(false);
  const stage = useRef<HTMLElement>(null);

  // Lights one line at a time until the visitor takes over.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = stage.current;
    if (!node) return;

    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(node);

    // Each lit line gives way to the whole network again.
    let index = -1;
    let timer = 0;
    const rest = () => {
      if (handled.current) return;
      setActive(null);
      timer = window.setTimeout(lightNext, REST_MS);
    };
    const lightNext = () => {
      if (handled.current) return;
      if (!visible || document.hidden) {
        timer = window.setTimeout(lightNext, REST_MS);
        return;
      }
      index = (index + 1) % LINES.length;
      setActive(LINES[index].id);
      timer = window.setTimeout(rest, LIT_MS);
    };
    timer = window.setTimeout(lightNext, REST_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const take = useCallback((id: LineId | null) => {
    handled.current = true;
    setActive(id);
  }, []);

  return (
    <section ref={stage} aria-labelledby="headline" className="bg-white">
      <div className="hero-stage">
        <NetworkMap
          variant="wide"
          rtl={rtl}
          active={active}
          onActive={take}
          label={t("mapLabel")}
          className="max-lg:hidden"
        />

        <h1
          id="headline"
          className="hero-headline tight px-[var(--gutter)] pb-6 pt-8 lg:p-0"
        >
          {t("headline")}
          <span className="hero-role">{t("role")}</span>
        </h1>

        <div className="relative lg:static">
          <NetworkMap
            variant="tall"
            rtl={rtl}
            active={active}
            onActive={take}
            label={t("mapLabel")}
            className="lg:hidden"
          />
          <div className="hero-side">
            <p>{t("body")}</p>
            <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:gap-3">
              <a
                id="hero-contact"
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener"
                aria-label={tSite("whatsapp")}
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-5 py-2 font-semibold text-white transition-colors hover:bg-[#D9202F]"
              >
                <FaWhatsapp aria-hidden className="h-5 w-5 flex-none" />
                {t("contact")}
              </a>
              <a
                href={CONTACT.cv}
                download={CONTACT.cvName}
                className="inline-flex min-h-11 items-center justify-center bg-white px-5 py-2 font-semibold text-ink shadow-[inset_0_0_0_2px_var(--ink)] transition-colors hover:bg-ink hover:text-white"
              >
                {t("cv")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label={t("keyLabel")} className="border-y-2 border-ink">
        <ol className="key-grid">
          {LINES.map((line) => (
            <li
              key={line.id}
              className="key-item"
              style={
                {
                  "--line": line.color,
                  "--on-line": line.onColor,
                } as React.CSSProperties
              }
            >
              <a
                href={`#line-${line.number}`}
                className="key-link"
                {...(active === line.id ? { "data-on": "" } : {})}
                onPointerEnter={() => take(line.id)}
                onPointerLeave={() => take(null)}
                onFocus={() => take(line.id)}
                onBlur={() => take(null)}
              >
                <span className="bullet text-[15px]">{line.number}</span>
                <span className="min-w-0 text-[15px] font-semibold leading-tight">
                  {tKey(line.id)}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
