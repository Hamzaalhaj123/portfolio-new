import {
  Calculator,
  EarthIcon,
  Flower2,
  PawPrint,
  Pill,
  ReceiptText,
  School2Icon,
  ShoppingBag,
  Trophy,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shared/card";
import cn from "@/utils/cn";
import websiteImage from "../../../public/DataPower.png";
import MueenWebsite from "../../../public/MueenWebsite.png";
import BohrWebsite from "../../../public/brave_6JCsr4kVri.png";
import RTM from "../../../public/rtm.png";
import aleefBranches from "../../../public/case-studies/aleef-branches.webp";
import aleefHome from "../../../public/case-studies/aleef-home.webp";
import aleefMobile from "../../../public/case-studies/aleef-mobile.webp";
import occasionCatalog from "../../../public/case-studies/occasion-catalog.webp";
import occasionGiftCard from "../../../public/case-studies/occasion-gift-card.webp";
import occasionMobileAr from "../../../public/case-studies/occasion-mobile-ar.webp";
import occasionProduct from "../../../public/case-studies/occasion-product.webp";
import odooLauncher from "../../../public/case-studies/odoo-launcher.webp";
import odooOverview from "../../../public/case-studies/odoo-overview.webp";
import odooReports from "../../../public/case-studies/odoo-reports.webp";
import prismScanner from "../../../public/case-studies/prism-rsd-scanner.webp";
import prismTransactions from "../../../public/case-studies/prism-rsd-transactions.webp";
import raneemDriverApp from "../../../public/case-studies/raneem-driver-app.webp";
import raneemOperations from "../../../public/case-studies/raneem-operations.webp";
import raneemOrders from "../../../public/case-studies/raneem-orders.webp";
import raneemShopperApp from "../../../public/case-studies/raneem-shopper-app.webp";
import raneemStorefront from "../../../public/case-studies/raneem-storefront.webp";
import strataHome from "../../../public/case-studies/strata-home.webp";
import strataLeague from "../../../public/case-studies/strata-league.webp";
import strataMaps from "../../../public/case-studies/strata-maps.webp";
import strataMatchups from "../../../public/case-studies/strata-matchups.webp";
import zatcaHierarchy from "../../../public/case-studies/zatca-hierarchy.webp";
import zatcaLogEvents from "../../../public/case-studies/zatca-log-events.webp";
import zatcaStatusReport from "../../../public/case-studies/zatca-status-report.webp";
import Image, { StaticImageData } from "next/image";
import { Link } from "@/lib/next-intl/navigation";
import Button from "../shared/Button";

type Screenshot = {
  src: StaticImageData;
  alt: string;
};

type TimelineItemType = {
  title: string;
  description: string;
  /** A second paragraph on why the project matters. */
  story?: string;
  highlights?: { label: string; detail: string }[];
  stack?: string[];
  milestone: string | React.ReactNode;
  websiteImage: StaticImageData;
  websiteImageAlt: string;
  gallery?: Screenshot[];
  website?: string;
  /** Says where the screens came from, since many of these are private. */
  note?: string;
};

const timelineItems: TimelineItemType[] = [
  {
    title: "Aleef Care",
    description:
      "Aleef Care puts everything a pet needs in one place. Owners book grooming and clinic visits at their nearest branch, join behavior courses, shop services and find pets to adopt, all in Arabic and on any device.",
    story:
      "Behind that simple flow is a custom reservation system that handles availability across branches and service types. The platform reports more than 10,000 completed sessions and 5,000 happy pets, supported by over 50 expert trainers.",
    highlights: [
      {
        label: "Booking",
        detail: "Service, branch and time selection across every location",
      },
      {
        label: "Services",
        detail: "Grooming, clinics, training courses, adoption and a market",
      },
      {
        label: "Language",
        detail: "Right-to-left Arabic experience on desktop and mobile",
      },
    ],
    stack: ["Next.js", "TypeScript", ".NET", "nopCommerce"],
    milestone: <PawPrint />,
    website: "https://aleefcare.com",
    websiteImage: aleefHome,
    websiteImageAlt: "Aleef Care home page in Arabic",
    gallery: [
      { src: aleefBranches, alt: "Aleef branches and featured services" },
      { src: aleefMobile, alt: "Aleef Care home page on a phone" },
    ],
    note: "Live site",
  },
  {
    title: "Strata by GameReplays",
    description:
      "Strata is the competitive home of the GameReplays.org community for Command & Conquer: Generals, with ladders, player profiles, match history and balance analytics in one place.",
    story:
      "It has processed more than 2.1 million matches from over 48,000 players, turning a constant stream of game results into ratings, league standings and faction win rates. In October 2026, 954 people were on the site at the same time.",
    highlights: [
      {
        label: "Competition",
        detail: "Overall and seasonal ladders with ratings and league results",
      },
      {
        label: "Data pipeline",
        detail: "Scheduled ingestion and queue workers for match history",
      },
      {
        label: "Analytics",
        detail: "Faction matchups, map win rates and performance graphs",
      },
    ],
    stack: ["Laravel", "Livewire", "Tailwind CSS", "MariaDB", "Redis"],
    milestone: <Trophy />,
    website: "https://strata.gamereplays.org/",
    websiteImage: strataLeague,
    websiteImageAlt: "Strata QuickMatch league statistics",
    gallery: [
      { src: strataHome, alt: "Strata home page" },
      { src: strataMatchups, alt: "Faction matchup statistics" },
      { src: strataMaps, alt: "Map play statistics" },
    ],
    note: "Live site, built with the GameReplays team",
  },
  {
    title: "Raneem Gifts",
    description:
      "Flowers for a birthday only count if they arrive on the right day. Raneem Gifts carries that promise from choosing a gift and delivery shift through preparation, quality checks and dispatch, to a handover confirmed with a photo and a one-time code.",
    story:
      "One platform is designed around customers, personal shoppers, drivers and twelve permission-scoped staff roles, in both Arabic and English, so everyone works from the same order.",
    highlights: [
      {
        label: "Storefront",
        detail: "Gifts, bouquet builder, gift cards and subscriptions",
      },
      {
        label: "Backend",
        detail: ".NET commerce services behind the web and mobile clients",
      },
      {
        label: "Operations",
        detail: "Console for orders, preparation, dispatch and stock",
      },
      {
        label: "Mobile prototypes",
        detail: "Expo apps for delivery drivers and personal shoppers",
      },
    ],
    stack: ["Next.js", "TypeScript", ".NET", "nopCommerce", "Expo"],
    milestone: <Flower2 />,
    websiteImage: raneemStorefront,
    websiteImageAlt: "Raneem Gifts storefront home page",
    gallery: [
      {
        src: raneemOperations,
        alt: "Operations console showing the work due today",
      },
      { src: raneemOrders, alt: "Operations console order list" },
      { src: raneemDriverApp, alt: "Driver app task board" },
      { src: raneemShopperApp, alt: "Personal shopper app booking board" },
    ],
    note: "Private project, shown with demo data",
  },
  {
    title: "Retail Pro → ZATCA",
    description:
      "Every sale a Saudi retailer finalizes has to become a signed, compliant e-invoice, and simplified invoices must reach ZATCA within 24 hours. A lost or duplicated invoice is a compliance problem, not just a bug.",
    story:
      "This integration turns finalized Retail Pro documents into durable workflows. Each step is separate, so a failure can be retried or reconciled instead of lost, and stores can keep signing invoices while offline.",
    highlights: [
      {
        label: "Invoice workflows",
        detail: "Ingestion, normalization, XML generation, signing, submission",
      },
      {
        label: "Background processing",
        detail: "Queue workers, with the database as the source of truth",
      },
      {
        label: "Offline handling",
        detail: "Edge agent with local signing, QR codes and a durable outbox",
      },
      {
        label: "Reconciliation",
        detail: "Ordered reporting with a recorded history of every attempt",
      },
    ],
    stack: ["TypeScript", "Fastify", "BullMQ", "PostgreSQL", "React"],
    milestone: <ReceiptText />,
    websiteImage: zatcaStatusReport,
    websiteImageAlt: "ZATCA invoice status report",
    gallery: [
      { src: zatcaHierarchy, alt: "Retail Pro Prism store hierarchy" },
      { src: zatcaLogEvents, alt: "Invoice processing log events" },
    ],
    note: "Private project, shown with sample data",
  },
  {
    title: "Prism → SFDA RSD",
    description:
      "Saudi Arabia's SFDA tracks medicine packs individually, from warehouse to pharmacy to patient. Staff can't stop serving customers to report each movement, so this integration works from inside the Retail Pro Prism point of sale.",
    story:
      "Receiving, transfers and pharmacy sales are picked up from finalized documents, and a scanner reads each pack's DataMatrix code. When SFDA's response is unclear, the outcome is held as unknown instead of being retried blindly, so a pack isn't reported twice.",
    highlights: [
      {
        label: "Service development",
        detail: ".NET Windows service with local SQLite persistence",
      },
      {
        label: "POS integration",
        detail: "Prism WebClient plugin for transactions and stock matching",
      },
      {
        label: "Scanning",
        detail: "GS1 DataMatrix item scanner for tracked medicines",
      },
      {
        label: "Reliable delivery",
        detail: "Durable dispatch, safe retries and explicit unknown outcomes",
      },
    ],
    stack: [".NET 8", "SQLite", "AngularJS", "SOAP"],
    milestone: <Pill />,
    websiteImage: prismTransactions,
    websiteImageAlt: "SFDA RSD transactions inside the Prism plugin",
    gallery: [{ src: prismScanner, alt: "Tracked medicine scan dialog" }],
    note: "Private project, shown with sample data",
  },
  {
    title: "Occasion Storefront + backend",
    description:
      "Occasion is a premium gifting store for chocolates, flowers and perfumes, and its storefront has to feel as considered as the products it sells.",
    story:
      "Built headless on nopCommerce, it renders catalog pages on the server for speed and search visibility, and covers the complete journey from browsing to a placed order, including personalized gift cards, in Arabic and English.",
    highlights: [
      {
        label: "Authentication",
        detail: "Phone OTP sign-in with tokens kept in httpOnly cookies",
      },
      {
        label: "Checkout",
        detail: "Guest cart, shipping, payment and order placement",
      },
      {
        label: "Localization",
        detail: "Arabic RTL and English LTR from one component system",
      },
      {
        label: "API contracts",
        detail: "Typed clients generated from the OpenAPI specification",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "OpenAPI", "nopCommerce"],
    milestone: <ShoppingBag />,
    websiteImage: occasionCatalog,
    websiteImageAlt: "Occasion product catalog",
    gallery: [
      { src: occasionProduct, alt: "Occasion product page" },
      { src: occasionGiftCard, alt: "Personalized gift card editor" },
      { src: occasionMobileAr, alt: "Arabic catalog on a phone" },
    ],
    note: "Private project",
  },
  {
    title: "RTM Accounting for Odoo",
    description:
      "RTM Accounting brings financial reports, bank matching, fixed assets, deferrals, budgets and receivables follow-up to Odoo 19 Community as independent modules, giving a business those workflows on the open-source edition.",
    story:
      "A connected workspace ties the work together, so a team can follow a purchase through stock, sale, invoice and bank match, with live figures on one overview.",
    highlights: [
      {
        label: "Business modules",
        detail: "Accounting addon and a connected app workspace",
      },
      {
        label: "Reporting",
        detail: "Financial statements and ledgers, exported to XLSX and PDF",
      },
      {
        label: "Accounting workflows",
        detail: "Bank matching, assets, deferrals, budgets and follow-up",
      },
    ],
    stack: ["Odoo 19", "Python", "PostgreSQL"],
    milestone: <Calculator />,
    websiteImage: odooOverview,
    websiteImageAlt: "Financial overview dashboard",
    gallery: [
      { src: odooReports, alt: "Accounting reports menu" },
      { src: odooLauncher, alt: "Workspace app launcher" },
    ],
    note: "Private project, shown with a sample company",
  },
  {
    title: "Startup landing page",
    description:
      "Built the public landing page for RTM Solutions, introducing the company and its software services.",
    milestone: "2025",
    website: "https://rtm-solutions.com",
    websiteImage: RTM,
    websiteImageAlt: "RTM Solutions landing page",
  },
  {
    title: "University project research",
    description:
      "Using ThreeJs Created a 3d visualization of the bohr model and wrote a research paper explaining how we have built it",
    milestone: "2023",
    website: "https://bohr-model-visualization.vercel.app/",
    websiteImage: BohrWebsite,
    websiteImageAlt: "3D Bohr model visualization",
  },
  {
    title: "Junior Developer @ Startup",
    description:
      "Developed a local Software school management system with the help of a backend developer while utilizing modern development tools",
    milestone: <School2Icon />,
    website: "https://mueen-frontend-v3.vercel.app",
    websiteImage: MueenWebsite,
    websiteImageAlt: "Mueen school management system",
  },
  {
    title: "Frontend Developer @ DataPower Startup",
    description:
      "Worked as a freelancer and built a modern and responsive landing page and delivered satisfying results in the desired time",
    milestone: <EarthIcon />,
    website: "http://data-power-website-dev.vercel.app/",
    websiteImage: websiteImage,
    websiteImageAlt: "DataPower landing page",
  },
];

export const Timeline = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
    >
      <h2
        id="projects-title"
        className="text-center text-3xl font-bold text-slate-900 dark:text-white"
      >
        Projects
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-lg text-muted-foreground">
        Commerce platforms, Saudi compliance integrations, a competitive gaming
        community and the work that led to them.
      </p>

      <div className="relative mt-16">
        <div
          aria-hidden
          className="absolute start-6 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200 rtl:translate-x-1/2 lg:start-1/2"
        />
        <ol className="relative">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={item.title}
              {...item}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

const TimelineItem = ({
  title,
  description,
  story,
  highlights,
  stack,
  milestone,
  side,
  website,
  websiteImage,
  websiteImageAlt,
  gallery,
  note,
}: TimelineItemType & { side: "left" | "right" }) => {
  const hasDetails = Boolean(note || website);

  return (
    <li className="relative mb-16 grid gap-6 ps-16 last:mb-0 lg:grid-cols-2 lg:gap-x-24 lg:ps-0">
      <div className="absolute start-6 top-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gray-200 bg-background rtl:translate-x-1/2 lg:start-1/2">
        <span className="text-xs font-medium text-foreground">{milestone}</span>
      </div>

      <div className={cn(side === "right" && "lg:col-start-2 lg:row-start-1")}>
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </CardHeader>
          <CardContent className="mt-2 space-y-3 text-sm leading-relaxed">
            <p>{description}</p>
            {story && <p>{story}</p>}
            {highlights && (
              <dl className="space-y-2 pt-2">
                {highlights.map((highlight) => (
                  <div key={highlight.label}>
                    <dt className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {highlight.label}
                    </dt>
                    <dd>{highlight.detail}</dd>
                  </div>
                ))}
              </dl>
            )}
            {stack && (
              <p className="pt-2 font-medium text-foreground">
                {stack.join(" · ")}
              </p>
            )}
          </CardContent>
          {hasDetails && (
            <CardFooter className="mt-3 flex items-center gap-3">
              {note && (
                <span className="text-xs text-muted-foreground">{note}</span>
              )}
              {website && (
                <Button
                  asChild
                  className="ms-auto shrink-0 bg-slate-800 text-xs text-emerald-500"
                >
                  <Link href={website}>Visit</Link>
                </Button>
              )}
            </CardFooter>
          )}
        </Card>
      </div>

      <div
        className={cn(
          "min-w-0 self-start",
          side === "right" && "lg:col-start-1 lg:row-start-1"
        )}
      >
        <ScreenshotLink
          href={website ?? websiteImage.src}
          label={
            website
              ? `Visit ${title}`
              : `Open full size: ${websiteImageAlt}`
          }
        >
          <Image
            src={websiteImage}
            alt={websiteImageAlt}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="h-auto w-full rounded-lg transition-all duration-300 hover:scale-105 hover:opacity-75 hover:shadow-md motion-reduce:hover:scale-100"
          />
        </ScreenshotLink>

        {gallery && (
          <ul
            aria-label={`More screens from ${title}`}
            className="mt-3 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]"
          >
            {gallery.map((shot) => (
              <li key={shot.alt} className="shrink-0">
                <ScreenshotLink
                  href={shot.src.src}
                  label={`Open full size: ${shot.alt}`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    sizes="240px"
                    className="h-24 w-auto rounded-md border border-border transition-opacity duration-300 hover:opacity-75"
                  />
                </ScreenshotLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

const ScreenshotLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    aria-label={label}
    className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
  >
    {children}
  </a>
);
