import { useTranslations } from "next-intl";
import { CONTACT } from "@/content/cases";
import { LINES } from "@/content/network";
import { ContactForm } from "./ContactForm";

const SPACING = 40;
const CENTER = 400;
const TERMINUS_Y = 280;

/** Every line runs down into one station. */
function Converge() {
  const mid = (LINES.length - 1) / 2;
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 320"
      className="mx-auto block h-[clamp(180px,22vw,320px)] w-auto max-w-full"
    >
      {LINES.map((line, i) => {
        const x = CENTER + (i - mid) * SPACING;
        const offset = Math.abs(x - CENTER);
        const bend = TERMINUS_Y - offset;
        return (
          <path
            key={line.id}
            d={`M${x} 0 L${x} ${bend} L${CENTER} ${TERMINUS_Y}`}
            fill="none"
            stroke={line.color}
            strokeWidth={10}
            strokeLinejoin="round"
          />
        );
      })}
      <circle
        cx={CENTER}
        cy={TERMINUS_Y}
        r={26}
        fill="#fff"
        stroke="#fff"
        strokeWidth={4}
      />
      <circle cx={CENTER} cy={TERMINUS_Y} r={15} fill="var(--ink)" />
    </svg>
  );
}

export function Terminus() {
  const t = useTranslations("Contact");
  const year = new Date().getFullYear();

  const links = [
    { href: CONTACT.linkedin, label: t("linkedin") },
    { href: CONTACT.github, label: t("github") },
    { href: CONTACT.whatsapp, label: `${t("whatsapp")} ${CONTACT.phoneDisplay}` },
  ];

  return (
    <footer
      id="contact"
      className="on-ink bg-ink text-white selection:bg-white selection:text-ink"
    >
      <Converge />
      <div className="wrap pb-10 pt-[clamp(24px,3vw,48px)]">
        <h2 className="tight text-center text-[clamp(44px,7.4vw,124px)] font-bold leading-[1.02]">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-center text-[clamp(18px,1.5vw,23px)] leading-[1.45]">
          {t("body")}
        </p>

        <p className="mt-[clamp(32px,4vw,64px)] text-center">
          <a
            href={`mailto:${CONTACT.email}`}
            dir="ltr"
            className="inline-block break-all text-[clamp(23px,4vw,64px)] font-bold leading-tight underline decoration-2 underline-offset-[0.18em] transition-colors hover:text-[#F28C00] sm:break-normal"
          >
            {CONTACT.email}
          </a>
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-semibold">
          <li>
            <a
              href={CONTACT.cv}
              download={CONTACT.cvName}
              className="underline underline-offset-4 transition-colors hover:text-[#F28C00]"
            >
              {t("cv")}
            </a>
          </li>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener"
                className="underline underline-offset-4 transition-colors hover:text-[#F28C00]"
              >
                <bdi>{link.label}</bdi>
              </a>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-[clamp(56px,7vw,110px)] max-w-3xl">
          <h3 className="text-[22px] font-bold">{t("formTitle")}</h3>
          <ContactForm />
        </div>

        <p className="mt-[clamp(56px,6vw,96px)] border-t border-white/25 pt-5 text-[15px] text-white/75">
          {t("copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
