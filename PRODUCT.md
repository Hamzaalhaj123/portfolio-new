# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: engineering leads, CTOs and technical recruiters deciding whether to interview Hamza Alhaj. They are evaluating candidates between other tasks, usually on a laptop, often arriving from a CV or LinkedIn link, and give the page a minute or two before deciding whether it is worth more.

Secondary, not designed for first: founders and businesses in Saudi Arabia and the Gulf who reach the site through the same work.

## Product Purpose

A personal portfolio that gets Hamza interviews for full-stack roles. Success is a hiring manager reading at least one case study and then emailing him or downloading the CV.

## Positioning

A full-stack developer who builds the kind of software where failure has a cost: commerce platforms and Saudi compliance integrations (ZATCA e-invoicing, SFDA medicine track-and-trace) in which a lost invoice or a pack reported twice is a real problem. The work is bilingual Arabic and English in production, and the reasoning behind it (durable workflows, safe retries, explicit unknown outcomes) is what a neighbouring frontend portfolio could not truthfully copy.

## Operating Context

Visitors compare this page against CVs and other candidates. Much of the best work is private client software, so screenshots use demo or sample data and must say so. Visitors may read in Arabic or English; both must be first-class.

## Capabilities and Constraints

- Next.js 15 App Router, next-intl, Tailwind CSS 3, framer-motion. Routes are `/en` and `/ar`.
- Fully bilingual: every visible string exists in English and Arabic, with real right-to-left layout. The Arabic is drafted by Claude and must be proofread by Hamza.
- Contact form posts to the existing Formspree endpoint (`xdkepvzr`).
- CV ships at `/cv.pdf`, downloaded as `Hamza Alhaj CV.pdf`.
- Undecided: whether to add a Twitter/X account (none is known; do not link one), and any current availability wording beyond being open to full-stack roles.

## Brand Commitments

- Name: Hamza Alhaj (حمزة الحاج).
- Title: full-stack software developer. Do not call him a frontend developer or understate experience as "1+ years"; professional work runs from 2022 to the present.
- Voice: plain, specific, engineering-literate. No hype ("stunning", "amazing", "elevate brands").

## Evidence on Hand

- Case studies with real copy and screenshots in `public/case-studies/` and the project list previously in `src/components/timeline/Timeline.tsx`: Aleef Care, Strata by GameReplays, Raneem Gifts, Retail Pro → ZATCA, Prism → SFDA RSD, Occasion, RTM Accounting for Odoo.
- Earlier work: RTM Solutions landing page, Bohr model 3D visualization (university research, 2023), Mueen school management, DataPower landing page.
- Hindam: his own marketplace SaaS, third place in a local startup competition. No screenshots on hand.
- Reported figures: Strata has processed 2.1M+ matches from 48,000+ players and saw 954 concurrent users in October 2026. Aleef Care reports 10,000+ completed sessions, 5,000 happy pets and 50+ expert trainers.
- Attribution to keep: Strata was built with the GameReplays team. Raneem, ZATCA, SFDA and RTM Accounting are private and shown with demo or sample data. Occasion is private; its source note does not say whether its screens use sample data, so do not claim either way.
- CV at `public/cv.pdf`: RTM Solutions, Saudi Arabia, Software Developer, 2025–present; contract freelancer for a technology company in Damascus (electricity-provider workflow dashboard); Data Power, Saudi Arabia, remote, 2022; Mobadroon community, 2023.
- Portrait: `public/personal picture.png`.
- Contact: hamzaalhaj987@gmail.com, +963 934 985 349 (WhatsApp), linkedin.com/in/hamza-alhaj-a7867923b, github.com/Hamzaalhaj123.
- Absent, must not be fabricated: testimonials, client satisfaction figures (the old "100% Satisfaction" stat had no basis), employer logos used as endorsement, performance benchmarks.

## Product Principles

1. Every claim traces to something real: a shipped system, a named constraint, a reported number.
2. Show how the system behaves when something goes wrong, because that is the differentiator.
3. Arabic and English have equal standing; neither is a translation afterthought.
4. Respect a hiring manager's minute: the role, the proof and the way to reach him are never more than a glance away.

## Accessibility & Inclusion

Keyboard operable, reduced-motion respected, WCAG AA contrast, correct `lang` and `dir` on both locales.
