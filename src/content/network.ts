/**
 * The transit network behind the home page. Coordinates are grid units on a
 * 40 x 21.5 sheet, written for left-to-right reading. The map mirrors them for
 * Arabic and transposes them for portrait screens.
 */
export type Pt = readonly [number, number];
export type Side = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

export type LineId =
  | "zatca"
  | "sfda"
  | "raneem"
  | "strata"
  | "aleef"
  | "occasion"
  | "rtm";

export type Stop = {
  id: string;
  at: Pt;
  side: Side;
  terminus?: boolean;
  /** Extra label offset in sheet pixels, for tight junctions. */
  nudge?: readonly [number, number];
};

export type Branch = {
  id: string;
  kind: "retry" | "offline" | "hold";
  /** The stop this branch leaves from. */
  from: string;
  path: readonly Pt[];
  at: Pt;
  side: Side;
};

export type Line = {
  id: LineId;
  number: number;
  color: string;
  onColor: string;
  names: { en: string; ar: string };
  path: readonly Pt[];
  stops: readonly Stop[];
  branches?: readonly Branch[];
  bulletAt: Pt;
};

export const SHEET = { unit: 40, width: 40, height: 21.5 } as const;

/** Stops shared by more than one line: the infrastructure the systems have in common. */
export const INTERCHANGES = ["prism", "queue", "postgres", "nop", "otp"];

export const LINES: readonly Line[] = [
  {
    id: "zatca",
    number: 1,
    color: "#D9202F",
    onColor: "#FFFFFF",
    names: { en: "Retail Pro to ZATCA", ar: "من Retail Pro إلى زاتكا" },
    path: [
      [19, 4],
      [33, 4],
      [36, 7],
      [36, 14],
    ],
    stops: [
      { id: "prism", at: [19, 4], side: "n" },
      { id: "ingest", at: [22, 4], side: "n" },
      { id: "queue", at: [25, 4], side: "n" },
      { id: "postgres", at: [29, 4], side: "sw" },
      { id: "normalize", at: [31, 4], side: "n" },
      { id: "xml", at: [33, 4], side: "n" },
      { id: "sign", at: [36, 8], side: "w" },
      { id: "submit", at: [36, 11], side: "w" },
      { id: "reconcile", at: [36, 14], side: "w", terminus: true },
    ],
    branches: [
      {
        id: "offline",
        kind: "offline",
        from: "sign",
        path: [
          [36, 8],
          [37.5, 9.5],
          [36, 11],
        ],
        at: [37.5, 9.5],
        side: "e",
      },
      {
        id: "retry",
        kind: "retry",
        from: "submit",
        path: [
          [36, 14],
          [34.5, 12.5],
          [36, 11],
        ],
        at: [34.5, 12.5],
        side: "w",
      },
    ],
    bulletAt: [36.95, 14],
  },
  {
    id: "sfda",
    number: 2,
    color: "#0A5BC4",
    onColor: "#FFFFFF",
    names: { en: "Prism to SFDA RSD", ar: "من Prism إلى نظام رصد" },
    path: [
      [19, 4],
      [19, 9],
      [20, 10],
      [33, 10],
    ],
    stops: [
      { id: "prism", at: [19, 4], side: "n" },
      { id: "pickup", at: [19, 7], side: "w" },
      { id: "scan", at: [22.5, 10], side: "n" },
      { id: "match", at: [26.6, 10], side: "n" },
      { id: "dispatch", at: [29.75, 10], side: "n" },
      { id: "report", at: [33, 10], side: "n", terminus: true },
    ],
    branches: [
      {
        id: "unknown",
        kind: "hold",
        from: "dispatch",
        path: [
          [29.75, 10],
          [30.75, 11],
        ],
        at: [30.75, 11],
        side: "s",
      },
    ],
    bulletAt: [33.95, 10],
  },
  {
    id: "raneem",
    number: 3,
    color: "#D6247F",
    onColor: "#FFFFFF",
    names: { en: "Raneem Gifts", ar: "رنيم للهدايا" },
    path: [
      [1.5, 20],
      [12, 20],
      [16, 16],
      [34.5, 16],
    ],
    stops: [
      { id: "gift", at: [1.5, 20], side: "s", terminus: true },
      { id: "shift", at: [6.5, 20], side: "n" },
      { id: "nop", at: [16, 16], side: "e", nudge: [34, 30] },
      { id: "prep", at: [20, 16], side: "n" },
      { id: "qc", at: [24, 16], side: "n" },
      { id: "send", at: [27.5, 16], side: "n" },
      { id: "otp", at: [31, 16], side: "n" },
      { id: "handover", at: [34.5, 16], side: "n", terminus: true },
    ],
    bulletAt: [35.45, 16],
  },
  {
    id: "strata",
    number: 4,
    color: "#F28C00",
    onColor: "#141414",
    names: { en: "Strata by GameReplays", ar: "Strata من GameReplays" },
    path: [
      [21, 8],
      [25, 4],
      [25, 12],
      [27, 14],
      [30, 14],
    ],
    stops: [
      { id: "results", at: [21, 8], side: "s", terminus: true },
      { id: "schedule", at: [23, 6], side: "w" },
      { id: "queue", at: [25, 4], side: "n" },
      { id: "ratings", at: [25, 7], side: "e" },
      { id: "league", at: [25, 12], side: "e" },
      { id: "factions", at: [30, 14], side: "n", terminus: true },
    ],
    bulletAt: [30.95, 14],
  },
  {
    id: "aleef",
    number: 5,
    color: "#007F49",
    onColor: "#FFFFFF",
    names: { en: "Aleef Care", ar: "أليف كير" },
    path: [
      [1.5, 16],
      [16, 16],
      [18, 14],
      [22, 14],
    ],
    stops: [
      { id: "service", at: [1.5, 16], side: "s", terminus: true },
      { id: "branch", at: [6, 16], side: "n" },
      { id: "time", at: [11, 16], side: "n" },
      { id: "nop", at: [16, 16], side: "ne" },
      { id: "session", at: [22, 14], side: "n", terminus: true },
    ],
    bulletAt: [22.95, 14],
  },
  {
    id: "occasion",
    number: 6,
    color: "#6C2DB3",
    onColor: "#FFFFFF",
    names: { en: "Occasion", ar: "أوكيجن" },
    path: [
      [1.5, 13.5],
      [13.5, 13.5],
      [19, 19],
      [28, 19],
      [31, 16],
      [34, 19],
      [39, 19],
    ],
    stops: [
      { id: "browse", at: [1.5, 13.5], side: "s", terminus: true },
      { id: "nop", at: [16, 16], side: "ne" },
      { id: "card", at: [20.5, 19], side: "s" },
      { id: "cart", at: [25, 19], side: "s" },
      { id: "otp", at: [31, 16], side: "n" },
      { id: "shipping", at: [34, 19], side: "s" },
      { id: "payment", at: [36.5, 19], side: "s" },
      { id: "order", at: [39, 19], side: "nw", terminus: true },
    ],
    bulletAt: [39, 19.95],
  },
  {
    id: "rtm",
    number: 7,
    color: "#8A5A2B",
    onColor: "#FFFFFF",
    names: { en: "RTM Accounting for Odoo", ar: "RTM للمحاسبة على Odoo" },
    path: [
      [18, 1.5],
      [26.5, 1.5],
      [32, 7],
      [34, 7],
    ],
    stops: [
      { id: "purchase", at: [18, 1.5], side: "s", terminus: true },
      { id: "stock", at: [20.5, 1.5], side: "n" },
      { id: "sale", at: [23, 1.5], side: "n" },
      { id: "invoice", at: [25.5, 1.5], side: "n" },
      { id: "postgres", at: [29, 4], side: "sw" },
      { id: "bank", at: [32, 7], side: "s" },
      { id: "reports", at: [34, 7], side: "n", terminus: true },
    ],
    bulletAt: [17.05, 1.5],
  },
];

/** Builds an SVG path through octilinear points with softened corners. */
export function roundedPath(points: readonly Pt[], radius: number): string {
  if (points.length < 2) return "";
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1];
    const [x, y] = points[i];
    const [nx, ny] = points[i + 1];
    const inLen = Math.hypot(x - px, y - py);
    const outLen = Math.hypot(nx - x, ny - y);
    const r = Math.min(radius, inLen / 2, outLen / 2);
    const ax = x - ((x - px) / inLen) * r;
    const ay = y - ((y - py) / inLen) * r;
    const bx = x + ((nx - x) / outLen) * r;
    const by = y + ((ny - y) / outLen) * r;
    d += ` L${ax} ${ay} Q${x} ${y} ${bx} ${by}`;
  }
  const last = points[points.length - 1];
  return `${d} L${last[0]} ${last[1]}`;
}
