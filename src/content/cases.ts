import type { StaticImageData } from "next/image";
import type { LineId } from "./network";

import aleefBranches from "../../public/case-studies/aleef-branches.webp";
import aleefHome from "../../public/case-studies/aleef-home.webp";
import aleefMobile from "../../public/case-studies/aleef-mobile.webp";
import occasionCatalog from "../../public/case-studies/occasion-catalog.webp";
import occasionGiftCard from "../../public/case-studies/occasion-gift-card.webp";
import occasionMobileAr from "../../public/case-studies/occasion-mobile-ar.webp";
import occasionProduct from "../../public/case-studies/occasion-product.webp";
import odooLauncher from "../../public/case-studies/odoo-launcher.webp";
import odooOverview from "../../public/case-studies/odoo-overview.webp";
import odooReports from "../../public/case-studies/odoo-reports.webp";
import prismScanner from "../../public/case-studies/prism-rsd-scanner.webp";
import prismTransactions from "../../public/case-studies/prism-rsd-transactions.webp";
import raneemDriverApp from "../../public/case-studies/raneem-driver-app.webp";
import raneemOperations from "../../public/case-studies/raneem-operations.webp";
import raneemOrders from "../../public/case-studies/raneem-orders.webp";
import raneemShopperApp from "../../public/case-studies/raneem-shopper-app.webp";
import raneemStorefront from "../../public/case-studies/raneem-storefront.webp";
import strataHome from "../../public/case-studies/strata-home.webp";
import strataLeague from "../../public/case-studies/strata-league.webp";
import strataMaps from "../../public/case-studies/strata-maps.webp";
import strataMatchups from "../../public/case-studies/strata-matchups.webp";
import zatcaHierarchy from "../../public/case-studies/zatca-hierarchy.webp";
import zatcaLogEvents from "../../public/case-studies/zatca-log-events.webp";
import zatcaStatusReport from "../../public/case-studies/zatca-status-report.webp";
import dataPower from "../../public/DataPower.png";
import bohr from "../../public/brave_6JCsr4kVri.png";
import rtmLanding from "../../public/rtm.png";

export type CaseAssets = {
  /** First entry is the lead screenshot. Alt text lives in messages by position. */
  shots: StaticImageData[];
  stack: string[];
  website?: string;
};

export const CASES: Record<LineId, CaseAssets> = {
  zatca: {
    shots: [zatcaStatusReport, zatcaHierarchy, zatcaLogEvents],
    stack: ["TypeScript", "Fastify", "BullMQ", "PostgreSQL", "React"],
  },
  sfda: {
    shots: [prismTransactions, prismScanner],
    stack: [".NET 8", "SQLite", "AngularJS", "SOAP"],
  },
  raneem: {
    shots: [
      raneemStorefront,
      raneemOperations,
      raneemOrders,
      raneemDriverApp,
      raneemShopperApp,
    ],
    stack: ["Next.js", "TypeScript", ".NET", "nopCommerce", "Expo"],
  },
  strata: {
    shots: [strataLeague, strataHome, strataMatchups, strataMaps],
    stack: ["Laravel", "Livewire", "Tailwind CSS", "MariaDB", "Redis"],
    website: "https://strata.gamereplays.org/",
  },
  aleef: {
    shots: [aleefHome, aleefBranches, aleefMobile],
    stack: ["Next.js", "TypeScript", ".NET", "nopCommerce"],
    website: "https://aleefcare.com",
  },
  occasion: {
    shots: [occasionCatalog, occasionProduct, occasionGiftCard, occasionMobileAr],
    stack: ["Next.js", "React", "TypeScript", "OpenAPI", "nopCommerce"],
  },
  rtm: {
    shots: [odooOverview, odooReports, odooLauncher],
    stack: ["Odoo 19", "Python", "PostgreSQL"],
  },
};

export const ROUTE_IMAGES: Record<string, StaticImageData> = {
  datapower: dataPower,
  bohr,
  rtm: rtmLanding,
};

export const CONTACT = {
  email: "hamzaalhaj987@gmail.com",
  phoneDisplay: "+963 934 985 349",
  whatsapp: "https://wa.me/963934985349",
  linkedin: "https://www.linkedin.com/in/hamza-alhaj-a7867923b",
  github: "https://github.com/Hamzaalhaj123",
  cv: "/cv.pdf",
  cvName: "Hamza Alhaj CV.pdf",
};
