"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techItems = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiTypescript />, name: "TypeScript" },
];

const TechCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const lastPosRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef(0);

  const calculateTilt = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
  };

  return (
    <div
      className="group relative h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
      }}
      onMouseMove={calculateTilt}
    >
      <motion.div
        className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center h-full cursor-none"
        style={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20 + velocityRef.current * 0.5,
          mass: 0.5 + velocityRef.current * 0.01,
        }}
      >
        <motion.div
          className="text-4xl mb-3 text-emerald-500 group-hover:text-[#10b985] transition-colors duration-300"
          animate={{
            scale: isHovered ? 1.2 : 1,
            y: isHovered ? -rotate.x * 2 : 0,
          }}
        >
          {icon}
        </motion.div>
        <motion.span
          className="text-lg font-semibold text-slate-700 dark:text-slate-200"
          animate={{
            y: isHovered ? rotate.x * 1.5 : 0,
          }}
        >
          {name}
        </motion.span>

        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: `translateZ(${isHovered ? 40 : 20}px)`,
            filter: `blur(${isHovered ? 8 : 4}px)`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default function Experience() {
  const [globalHover, setGlobalHover] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">
        Tech Expertise
      </h2>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        onMouseEnter={() => setGlobalHover(true)}
        onMouseLeave={() => setGlobalHover(false)}
      >
        {techItems.map((item) => (
          <TechCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
