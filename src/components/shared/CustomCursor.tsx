"use client";
import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={20}
          color="16, 185, 129"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={4}
          trailingSpeed={5}
          clickables={[
            "a",
            "button",
            ".link",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            ".hover-effect",
          ]}
          innerStyle={{
            mixBlendMode: "exclusion",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
          outerStyle={{
            border: "2px solid rgba(16, 185, 129, 0.8)",
            mixBlendMode: "exclusion",
            boxShadow: "0 0 15px rgba(16, 185, 129, 0.3)",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
          }}
        />
      )}
    </>
  );
}

// YOU CAN USE THIS INSTEAD OF THE ABOVE
// <>
//   {!isMobile && (
//     <AnimatedCursor
//       innerSize={8}
//       outerSize={30}
//       color="16, 185, 129"
//       outerAlpha={0.4}
//       innerScale={0.7}
//       outerScale={1}
//       trailingSpeed={8}
//       outerStyle={{
//         transition: "all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
//         filter: `drop-shadow(0 0 ${"8px"} rgba(16, 185, 129, 0.5))`,
//       }}
//     />
//   )}
// </>;
