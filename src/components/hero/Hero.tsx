import Image from "next/image";
import React from "react";
import personalPic from "@/../public/personal picture.png";
import Button from "../shared/Button";
import { Link } from "@/lib/next-intl/navigation";
import {
  Github,
  Linkedin,
  Download,
  MessageSquare,
  ArrowRight,
  ArrowRightFromLine,
} from "lucide-react";
import { About } from "../about/About";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 py-12 px-4 selection:bg-[#BA5011]">
        <div className="relative group">
          <Image
            src={personalPic}
            className="rounded-full border-4 border-white/20 shadow-xl transition-all duration-300 group-hover:border-emerald-500/30 group-hover:scale-105"
            alt="Hamza Alhaj - Frontend Developer"
            width={96}
            height={96}
          />
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
        </div>

        <div className="space-y-4 text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent selection:text-white">
            Frontend Developer
          </h1>

          <p className="text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Engineering{" "}
            <span className="text-emerald-400 font-medium">responsive</span>,
            high-performance solutions that{" "}
            <span className="underline decoration-emerald-400">
              engage users{" "}
            </span>
            and{" "}
            <span className="underline decoration-emerald-400">
              elevate brands
            </span>
          </p>
        </div>

        <Link
          href={"#timeline"}
          className="mt-8 px-8 py-3 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-emerald-500/20 "
        >
          <span className=" flex items-center gap-2">
            View Projects <ArrowRight className="w-4 h-4 mt-1" />
          </span>
        </Link>

        <div className="mt-12 flex gap-6 opacity-80 items-center">
          <span className="border-r pr-6 border-white/20 ">
            Available for work
          </span>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener"
              className="p-2 hover:text-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener"
              className="p-2 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all group"
            >
              <Download className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
              <span className="text-sm">CV</span>
            </a>
          </div>
        </div>
        <a
          href="https://wa.me/+963934985349"
          className="fixed bottom-8 right-8 p-4 bg-emerald-500/20 backdrop-blur-lg rounded-full shadow-xl hover:bg-emerald-500/30 transition-all border border-emerald-500/30 hover:border-emerald-500/50 animate-pulse"
        >
          <MessageSquare className="w-6 h-6 text-emerald-400" />
        </a>
      </div>
      <About />
    </>
  );
}
