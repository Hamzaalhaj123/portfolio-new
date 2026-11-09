"use client";

import { useEffect, useRef, useState } from "react";

/** The coloured run of a strip diagram, drawn the first time it scrolls into view. */
export function StripFill() {
  const ref = useRef<HTMLSpanElement>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    setArmed(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(false);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -18% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className="strip-fill"
      {...(armed ? { "data-armed": "" } : {})}
    />
  );
}
