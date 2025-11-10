import Link from "next/link";
import { Linkedin, Github, Mail, Twitter, ArrowRight } from "lucide-react";
import { cva } from "class-variance-authority";
import Button from "../shared/Button";

export const Footer = () => {
  return (
    <footer className="border-t border-emerald-900/30">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Hamza Alhaj
            </h3>
            <p className="text-sm text-muted-foreground">
              Crafting exceptional web experiences
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#timeline">Journey</FooterLink>
              <FooterLink href="#projects">Work</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </nav>
          </div>

          {/* Socials */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <SocialIcon
                href="https://linkedin.com"
                icon={<Linkedin className="h-5 w-5" />}
              />
              <SocialIcon
                href="https://github.com"
                icon={<Github className="h-5 w-5" />}
              />
              <SocialIcon
                href="mailto:you@email.com"
                icon={<Mail className="h-5 w-5" />}
              />
              <SocialIcon
                href="https://twitter.com"
                icon={<Twitter className="h-5 w-5" />}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">
              Let's Build
            </h4>
            <Button asChild variant="muted">
              <Link href="#contact">
                Start Project
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-emerald-900/30 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Hamza Alhaj. All rights reserved.
            <br />
            Built with <span className="text-cyan-400">Next.js</span> and
            <span className="text-emerald-400"> Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: string }) => (
  <Link
    href={href}
    className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
  >
    {children}
  </Link>
);

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg bg-slate-800/50 hover:bg-cyan-900/30 transition-colors text-muted-foreground hover:text-cyan-400"
  >
    {icon}
  </Link>
);
