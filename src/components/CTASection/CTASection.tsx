"use client";
import { ArrowRight } from "lucide-react";
import Button from "../shared/Button";

export const CTASection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8  from-slate-900 to-emerald-900/20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent pb-6">
            Want to work together?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing! Whether you need a modern web
            application, a stunning portfolio, or a performant e-commerce
            solution - I'm ready to bring your vision to life.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "1+ Years", subtitle: "Experience" },
              { title: "5+ Projects", subtitle: "Completed" },
              { title: "100%", subtitle: "Satisfaction" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm hover:shadow-md hover:shadow-emerald-400/30 transition-all hover:scale-105 duration-300"
              >
                <p className="text-2xl font-bold text-cyan-400">{item.title}</p>
                <p className="text-sm text-emerald-100/70">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <Button
            className="group px-8 py-6 text-lg bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 transition-all gap-2"
            onClick={() => {
              window.location.href = "#contact";
            }}
          >
            Let's Connect
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
