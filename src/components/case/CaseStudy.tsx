import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { CASES } from "@/content/cases";
import type { Line } from "@/content/network";
import cn from "@/utils/cn";
import { StripFill } from "./StripFill";

type Highlight = { label: string; detail: string };

export function CaseStudy({ line, flip }: { line: Line; flip: boolean }) {
  const t = useTranslations(`Cases.${line.id}`);
  const tCase = useTranslations("Case");
  const tStations = useTranslations("Stations");
  const locale = useLocale() as "en" | "ar";
  const EnglishName = locale === "en" ? "h2" : "p";
  const ArabicName = locale === "ar" ? "h2" : "p";

  const assets = CASES[line.id];
  const alts = t.raw("shots") as string[];
  const highlights = t.raw("highlights") as Highlight[];
  const [lead, ...gallery] = assets.shots;
  const name = line.names[locale];
  const titleId = `line-${line.number}-title`;
  const branches = line.branches ?? [];
  const exceptionStops = new Set(branches.map((b) => b.from));

  return (
    <section
      id={`line-${line.number}`}
      aria-labelledby={titleId}
      style={
        {
          "--line": line.color,
          "--on-line": line.onColor,
          "--overlap": "clamp(72px, 13vw, 220px)",
        } as React.CSSProperties
      }
    >
      <header className="bg-[var(--line)] text-[var(--on-line)] selection:bg-white selection:text-[var(--line)]">
        <div className="wrap pb-[calc(var(--overlap)+clamp(32px,4vw,64px))] pt-[clamp(40px,5vw,80px)]">
          <div
            dir="ltr"
            className="flex flex-wrap items-center justify-between gap-x-6 text-[clamp(20px,2.1vw,32px)] font-bold leading-tight"
          >
            <EnglishName
              id={locale === "en" ? titleId : undefined}
              lang="en"
              className={cn(
                "shrink-0 max-md:w-full",
                locale === "en" ? "max-md:order-1" : "max-md:order-3"
              )}
            >
              {line.names.en}
            </EnglishName>
            <span
              aria-hidden
              className="relative mx-2 h-[6px] min-w-16 flex-1 bg-current max-md:order-2 max-md:mx-0 max-md:my-[1.3em] max-md:w-full max-md:flex-none"
            >
              <span className="absolute left-1/2 top-1/2 flex h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--on-line)] text-[var(--line)]">
                {line.number}
              </span>
            </span>
            <ArabicName
              id={locale === "ar" ? titleId : undefined}
              lang="ar"
              dir="rtl"
              className={cn(
                "shrink-0 max-md:w-full",
                locale === "ar" ? "max-md:order-1" : "max-md:order-3"
              )}
            >
              {line.names.ar}
            </ArabicName>
          </div>

          <p className="tight mt-[clamp(28px,4vw,64px)] max-w-[22ch] text-[clamp(36px,5.6vw,92px)] font-bold leading-[1.04]">
            {t("statement")}
          </p>
        </div>
      </header>

      <div className="wrap pb-[clamp(80px,9vw,150px)]">
        <div className="-mt-[var(--overlap)] grid gap-x-[clamp(24px,4vw,72px)] gap-y-8 lg:grid-cols-12">
          <div className={cn("lg:col-span-8", flip && "lg:order-2")}>
            <a
              href={lead.src}
              target="_blank"
              rel="noopener"
              aria-label={tCase("openFull", { alt: alts[0] })}
              className="shot"
            >
              <Image
                src={lead}
                alt={alts[0]}
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
            </a>
          </div>

          <div
            className={cn(
              "lg:col-span-4 lg:pt-[calc(var(--overlap)+28px)]",
              flip && "lg:order-1"
            )}
          >
            <p className="text-[clamp(19px,1.5vw,23px)] leading-[1.45]">
              {t("lead")}
            </p>
            <p className="mt-5 text-[15px] text-mute">{t("note")}</p>
            {assets.website && (
              <a
                href={assets.website}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex min-h-11 items-center bg-[var(--line)] px-5 py-2 font-semibold text-[var(--on-line)] transition-opacity hover:opacity-85"
              >
                {tCase("visit", { site: new URL(assets.website).hostname })}
              </a>
            )}
          </div>
        </div>

        <div className="mt-[clamp(56px,6vw,104px)]">
          <h3 className="text-[15px] font-bold">{tCase("stops")}</h3>
          <ol
            className="strip mt-5"
            style={{ ["--cols" as string]: line.stops.length }}
          >
            <StripFill />
            {line.stops.map((stop) => (
              <li
                key={stop.id}
                className="strip-stop"
                {...(stop.terminus ? { "data-terminus": "" } : {})}
                {...(exceptionStops.has(stop.id)
                  ? { "data-exception": "" }
                  : {})}
              >
                <span aria-hidden className="strip-dot" />
                <span>{tStations(stop.id)}</span>
              </li>
            ))}
          </ol>

          {branches.length > 0 && (
            <div className="mt-8 border-t border-rule pt-6">
              <h3 className="text-[15px] font-bold">
                {tCase("whenItGoesWrong")}
              </h3>
              <ul className="mt-3 grid gap-x-12 gap-y-4 md:grid-cols-2">
                {branches.map((branch) => (
                  <li key={branch.id} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.3em] h-5 w-5 flex-none rounded-full border-2 border-dashed border-[var(--line)] bg-white"
                    />
                    <p className="max-w-[60ch]">
                      <strong className="font-bold">
                        {tStations(branch.id)}.
                      </strong>{" "}
                      {t(`branches.${branch.id}`)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-[clamp(56px,6vw,104px)] grid gap-x-[clamp(24px,4vw,72px)] gap-y-3 lg:grid-cols-12">
          <h3 className="text-[15px] font-bold lg:col-span-4">
            {tCase("built")}
          </h3>
          <dl className="border-t-2 border-ink lg:col-span-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="grid gap-x-6 gap-y-0.5 border-b border-rule py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
              >
                <dt className="font-semibold">{highlight.label}</dt>
                <dd>{highlight.detail}</dd>
              </div>
            ))}
            <div className="grid gap-x-6 gap-y-0.5 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <dt className="font-semibold">{tCase("stack")}</dt>
              <dd dir="ltr" className="rtl:text-right">
                {assets.stack.join(", ")}
              </dd>
            </div>
          </dl>
        </div>

        {gallery.length > 0 && (
          <ul
            aria-label={tCase("moreScreens", { name })}
            className="gallery mt-[clamp(56px,6vw,104px)]"
          >
            {gallery.map((shot, index) => {
              const alt = alts[index + 1];
              return (
                <li
                  key={shot.src}
                  className="gallery-item"
                  style={
                    {
                      "--r": (shot.width / shot.height).toFixed(4),
                    } as React.CSSProperties
                  }
                >
                  <a
                    href={shot.src}
                    target="_blank"
                    rel="noopener"
                    aria-label={tCase("openFull", { alt })}
                    className="shot"
                  >
                    <Image src={shot} alt={alt} sizes="(min-width: 768px) 40vw, 70vw" />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
