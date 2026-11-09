"use client";

import { useEffect, useMemo, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  INTERCHANGES,
  LINES,
  SHEET,
  roundedPath,
  type LineId,
  type Pt,
  type Side,
} from "@/content/network";

type Variant = "wide" | "tall";

type Props = {
  variant: Variant;
  rtl: boolean;
  active: LineId | null;
  onActive: (id: LineId | null) => void;
  label: string;
  className?: string;
};

const W = SHEET.width * SHEET.unit;
const H = SHEET.height * SHEET.unit;
const OFFSET = 20;

/** Stops whose full name is too long for the map; the strip diagrams keep it. */
const SHORT_LABELS: Record<string, string> = { pickup: "pickupShort" };

function labelPlacement(
  side: Side,
  rtl: boolean,
  nudge?: readonly [number, number]
) {
  const flipped = rtl
    ? (side.replace(/e|w/, (c) => (c === "e" ? "w" : "e")) as Side)
    : side;
  let dx = 0;
  let dy = 5;
  let edge: "middle" | "left" | "right" = "middle";

  if (flipped.includes("n")) dy = -OFFSET + 1;
  if (flipped.includes("s")) dy = OFFSET + 13;
  if (flipped === "e") {
    dx = OFFSET;
    edge = "left";
  }
  if (flipped === "w") {
    dx = -OFFSET;
    edge = "right";
  }
  if (flipped === "ne" || flipped === "se") {
    dx = 12;
    edge = "left";
  }
  if (flipped === "nw" || flipped === "sw") {
    dx = -12;
    edge = "right";
  }

  const anchor =
    edge === "middle"
      ? "middle"
      : (edge === "left") !== rtl
        ? "start"
        : "end";
  if (nudge) {
    dx += rtl ? -nudge[0] : nudge[0];
    dy += nudge[1];
  }
  return { dx, dy, anchor };
}

export function NetworkMap({
  variant,
  rtl,
  active,
  onActive,
  label,
  className,
}: Props) {
  const t = useTranslations("Stations");
  const paths = useRef<Partial<Record<LineId, SVGPathElement | null>>>({});
  const train = useRef<SVGGElement>(null);

  const tall = variant === "tall";
  const viewW = tall ? H : W;
  const viewH = tall ? W : H;

  const place = useMemo(() => {
    return ([gx, gy]: Pt): Pt => {
      let x = gx * SHEET.unit;
      let y = gy * SHEET.unit;
      if (tall) [x, y] = [y, x];
      if (rtl) x = viewW - x;
      return [x, y];
    };
  }, [tall, rtl, viewW]);

  // A train runs the active line once.
  useEffect(() => {
    const path = active ? paths.current[active] : null;
    const car = train.current;
    if (!path || !car) return;
    if (path.getBoundingClientRect().width === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const length = path.getTotalLength();
    const duration = Math.max(2600, length * 3);
    const start = performance.now();
    let frame = 0;

    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2;
      const at = eased * length;
      const point = path.getPointAtLength(at);
      const ahead = path.getPointAtLength(Math.min(length, at + 1));
      const behind = path.getPointAtLength(Math.max(0, at - 1));
      const angle =
        (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;
      car.setAttribute(
        "transform",
        `translate(${point.x} ${point.y}) rotate(${angle})`
      );
      car.setAttribute("opacity", "1");
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      car.setAttribute("opacity", "0");
    };
  }, [active]);

  const stroke = tall ? 11 : 8;
  const hitStroke = tall ? 44 : 30;
  const stationR = tall ? 6.5 : 5;
  const interchangeR = tall ? 15 : 12;
  const terminusR = tall ? 12 : 9.5;
  const bulletR = tall ? 25 : 16;
  const bulletFont = tall ? 27 : 18;
  const on = (ids: LineId[]) =>
    active && ids.includes(active) ? { "data-on": "" } : {};

  const interchanges = INTERCHANGES.map((id) => {
    const owners = LINES.filter((l) => l.stops.some((s) => s.id === id));
    const stop = owners[0].stops.find((s) => s.id === id)!;
    return { id, stop, owners: owners.map((l) => l.id) };
  });

  const renderLabel = (
    id: string,
    at: Pt,
    side: Side,
    owners: LineId[],
    nudge?: readonly [number, number]
  ) => {
    if (tall) return null;
    const [x, y] = place(at);
    const { dx, dy, anchor } = labelPlacement(side, rtl, nudge);
    return (
      <text
        key={`l-${owners[0]}-${id}`}
        x={x + dx}
        y={y + dy}
        textAnchor={anchor}
        fontSize={15}
        className="lbl"
        {...on(owners)}
      >
        {t(SHORT_LABELS[id] ?? id)}
      </text>
    );
  };

  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      role="img"
      aria-label={label}
      className={`net block h-auto w-full ${className ?? ""}`}
      style={{ direction: rtl ? "rtl" : "ltr" }}
      {...(active ? { "data-active": active } : {})}
      onPointerLeave={() => onActive(null)}
    >
      {LINES.map((line, i) => (
        <g key={line.id} className="ln" {...on([line.id])}>
          <path
            ref={(el) => {
              paths.current[line.id] = el;
            }}
            d={roundedPath(line.path.map(place), 16)}
            fill="none"
            stroke={line.color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            className="draw"
            style={{ ["--i" as string]: i }}
          />
          {line.branches?.map((branch) => (
            <path
              key={branch.id}
              d={roundedPath(branch.path.map(place), 12)}
              fill="none"
              stroke={line.color}
              strokeWidth={stroke - 3}
              strokeDasharray="2 11"
              strokeLinecap="round"
              className="fail"
            />
          ))}
        </g>
      ))}

      {LINES.map((line) => (
        <g key={`s-${line.id}`} className="st" {...on([line.id])}>
          {line.stops
            .filter((s) => !INTERCHANGES.includes(s.id))
            .map((stop) => {
              const [x, y] = place(stop.at);
              return stop.terminus ? (
                <circle
                  key={stop.id}
                  cx={x}
                  cy={y}
                  r={terminusR}
                  fill="#fff"
                  stroke={line.color}
                  strokeWidth={5}
                />
              ) : (
                <circle key={stop.id} cx={x} cy={y} r={stationR} fill="#fff" />
              );
            })}
          {line.branches?.map((branch) => {
            const [x, y] = place(branch.at);
            return (
              <circle
                key={branch.id}
                cx={x}
                cy={y}
                r={terminusR}
                fill="#fff"
                stroke={line.color}
                strokeWidth={3}
                strokeDasharray={branch.kind === "hold" ? "3 3.4" : undefined}
                className="fail"
              />
            );
          })}
        </g>
      ))}

      {interchanges.map(({ id, stop, owners }) => {
        const [x, y] = place(stop.at);
        return (
          <g key={id} className="st" {...on(owners)}>
            <circle
              cx={x}
              cy={y}
              r={interchangeR}
              fill="#fff"
              stroke="var(--ink)"
              strokeWidth={5}
            />
          </g>
        );
      })}

      {LINES.map((line) => {
        const [x, y] = place(line.bulletAt);
        return (
          <g key={`b-${line.id}`} className="st" {...on([line.id])}>
            <circle cx={x} cy={y} r={bulletR} fill={line.color} />
            <text
              x={x}
              y={y + bulletFont * 0.36}
              textAnchor="middle"
              fontSize={bulletFont}
              style={{ fill: line.onColor, stroke: "none", fontWeight: 700 }}
            >
              {line.number}
            </text>
          </g>
        );
      })}

      {LINES.flatMap((line) => [
        ...line.stops
          .filter((s) => !INTERCHANGES.includes(s.id))
          .map((s) => renderLabel(s.id, s.at, s.side, [line.id])),
        ...(line.branches ?? []).map((b) =>
          renderLabel(b.id, b.at, b.side, [line.id])
        ),
      ])}
      {interchanges.map(({ id, stop, owners }) =>
        renderLabel(id, stop.at, stop.side, owners, stop.nudge)
      )}

      {LINES.map((line) => (
        <path
          key={`hit-${line.id}`}
          d={roundedPath(line.path.map(place), 16)}
          fill="none"
          stroke="transparent"
          strokeWidth={hitStroke}
          className="hit"
          onPointerEnter={() => onActive(line.id)}
          onClick={() => {
            window.location.hash = `line-${line.number}`;
          }}
        />
      ))}

      <g ref={train} opacity={0} pointerEvents="none">
        <rect
          x={tall ? -24 : -18}
          y={tall ? -10 : -8}
          width={tall ? 48 : 36}
          height={tall ? 20 : 16}
          rx={tall ? 10 : 8}
          fill="var(--ink)"
          stroke="#fff"
          strokeWidth={3}
        />
      </g>
    </svg>
  );
}
