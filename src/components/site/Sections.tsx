import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ROUTE_IMAGES } from "@/content/cases";
import { LINES } from "@/content/network";

type Rule = { line: number; title: string; body: string };
type RouteStop = {
  when: string;
  name: string;
  place: string;
  body: string;
  site?: string;
  image?: string;
  alt?: string;
};
type Also = { name: string; body: string; site?: string };
type Group = { name: string; items: string };

export function NetworkRules() {
  const t = useTranslations("Rules");
  const rules = t.raw("items") as Rule[];
  const locale = useLocale() as "en" | "ar";

  return (
    <section
      aria-labelledby="rules-title"
      className="border-t-2 border-ink py-[clamp(72px,9vw,150px)]"
    >
      <div className="wrap">
        <h2
          id="rules-title"
          className="tight text-[clamp(36px,5vw,76px)] font-bold leading-[1.05]"
        >
          {t("title")}
        </h2>
        <ol className="mt-[clamp(32px,4vw,64px)] border-t-2 border-ink">
          {rules.map((rule) => {
            const line = LINES.find((l) => l.number === rule.line)!;
            return (
              <li
                key={rule.title}
                className="grid items-baseline gap-x-8 gap-y-2 border-b border-rule py-[clamp(20px,2.4vw,36px)] lg:grid-cols-12"
                style={
                  {
                    "--line": line.color,
                    "--on-line": line.onColor,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-baseline gap-4 lg:col-span-7">
                  <a
                    href={`#line-${line.number}`}
                    aria-label={line.names[locale]}
                    className="bullet relative top-[-0.1em] text-[17px]"
                  >
                    {line.number}
                  </a>
                  <h3 className="tight text-[clamp(24px,2.7vw,42px)] font-bold leading-[1.12]">
                    {rule.title}
                  </h3>
                </div>
                <p className="max-w-[58ch] lg:col-span-5">{rule.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function CareerRoute() {
  const t = useTranslations("Route");
  const stops = t.raw("stops") as RouteStop[];
  const also = t.raw("also") as Also[];

  return (
    <section
      id="route"
      aria-labelledby="route-title"
      className="border-t-2 border-ink py-[clamp(72px,9vw,150px)]"
      style={
        { "--line": "var(--ink)", "--on-line": "#fff" } as React.CSSProperties
      }
    >
      <div className="wrap">
        <h2
          id="route-title"
          className="tight text-[clamp(36px,5vw,76px)] font-bold leading-[1.05]"
        >
          {t("title")}
        </h2>

        <ol className="relative mt-[clamp(32px,4vw,64px)] grid gap-12 before:absolute before:bottom-2 before:start-[8px] before:top-2 before:w-[6px] before:bg-ink lg:grid-cols-4 lg:gap-12 lg:before:bottom-auto lg:before:end-0 lg:before:start-0 lg:before:top-[8px] lg:before:h-[6px] lg:before:w-auto">
          {stops.map((stop) => {
            const image = stop.image ? ROUTE_IMAGES[stop.image] : null;
            return (
              <li key={stop.name} className="relative ps-10 lg:ps-0 lg:pt-10">
                <span
                  aria-hidden
                  className="absolute start-0 top-0 h-[22px] w-[22px] rounded-full border-[5px] border-ink bg-white"
                />
                <p className="text-[clamp(26px,2.4vw,36px)] font-bold leading-none">
                  {stop.when}
                </p>
                <h3 className="mt-3 text-[20px] font-bold leading-tight">
                  {stop.name}
                </h3>
                <p className="text-[15px] text-mute">{stop.place}</p>
                <p className="mt-2 max-w-[42ch]">{stop.body}</p>
                {stop.site && (
                  <a
                    href={stop.site}
                    target="_blank"
                    rel="noopener"
                    className="mt-2 inline-block font-semibold underline"
                  >
                    {t("open")}
                  </a>
                )}
                {image && (
                  <div className="shot mt-4 max-w-[420px]">
                    <Image
                      src={image}
                      alt={stop.alt ?? ""}
                      sizes="(min-width: 1024px) 24vw, 90vw"
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-[clamp(56px,6vw,96px)] grid gap-x-8 gap-y-4 lg:grid-cols-12">
          <h3 className="text-[20px] font-bold lg:col-span-4">
            {t("alsoTitle")}
          </h3>
          <ul className="border-t-2 border-ink lg:col-span-8">
            {also.map((item) => (
              <li
                key={item.name}
                className="grid gap-x-6 gap-y-0.5 border-b border-rule py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
              >
                <p className="font-semibold">{item.name}</p>
                <p>
                  {item.body}{" "}
                  {item.site && (
                    <a
                      href={item.site}
                      target="_blank"
                      rel="noopener"
                      className="font-semibold underline"
                    >
                      {t("open")}
                    </a>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Toolkit() {
  const t = useTranslations("Toolkit");
  const groups = t.raw("groups") as Group[];

  return (
    <section aria-labelledby="toolkit-title" className="py-[clamp(72px,9vw,150px)]">
      <div className="wrap grid gap-x-8 gap-y-6 lg:grid-cols-12">
        <h2
          id="toolkit-title"
          className="tight text-[clamp(30px,3.4vw,52px)] font-bold leading-[1.08] lg:col-span-4"
        >
          {t("title")}
        </h2>
        <dl className="border-t-2 border-ink lg:col-span-8">
          {groups.map((group) => (
            <div
              key={group.name}
              className="grid gap-x-6 gap-y-0.5 border-b border-rule py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]"
            >
              <dt className="font-semibold">{group.name}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
