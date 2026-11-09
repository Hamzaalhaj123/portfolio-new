import { setRequestLocale } from "next-intl/server";
import { CaseStudy } from "@/components/case/CaseStudy";
import { HeroStage } from "@/components/map/HeroStage";
import {
  CareerRoute,
  NetworkRules,
  Toolkit,
} from "@/components/site/Sections";
import { Terminus } from "@/components/site/Terminus";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { LINES } from "@/content/network";

type PageProps = { params: Promise<{ locale: string }> };

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <main>
        <HeroStage />
        {LINES.map((line, index) => (
          <CaseStudy key={line.id} line={line} flip={index % 2 === 1} />
        ))}
        <NetworkRules />
        <CareerRoute />
        <Toolkit />
      </main>
      <Terminus />
      <WhatsAppButton />
    </>
  );
}
