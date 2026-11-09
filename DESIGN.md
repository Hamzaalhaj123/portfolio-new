---
name: Hamza Alhaj Portfolio
description: A full-stack developer's systems drawn as one bilingual transit network on a white enamel sheet.
colors:
  line-red: "#D9202F"
  line-red-on: "#FFFFFF"
  line-blue: "#0A5BC4"
  line-blue-on: "#FFFFFF"
  line-magenta: "#D6247F"
  line-magenta-on: "#FFFFFF"
  line-orange: "#F28C00"
  line-orange-on: "#141414"
  line-green: "#007F49"
  line-green-on: "#FFFFFF"
  line-purple: "#6C2DB3"
  line-purple-on: "#FFFFFF"
  line-brown: "#8A5A2B"
  line-brown-on: "#FFFFFF"
  ink: "#15171c"
  mute: "#5c616b"
  rule: "#dcdee3"
  plate: "#f1f2f4"
  white: "#ffffff"
  error-on-ink: "#ffb3ba"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(44px, 7.4vw, 124px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(36px, 5.6vw, 92px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  hero:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(38px, 10.6vw, 64px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(36px, 5vw, 76px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.7vw, 42px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  sign:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(20px, 2.1vw, 32px)"
    fontWeight: 700
    lineHeight: 1.25
  lead:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(19px, 1.5vw, 23px)"
    fontWeight: 400
    lineHeight: 1.45
  subhead:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.6
  note:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.6
  map-label:
    fontFamily: "Schibsted Grotesk, Alexandria, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
rounded:
  none: "0px"
  full: "999px"
spacing:
  gutter: "clamp(16px, 3.2vw, 56px)"
  section: "clamp(72px, 9vw, 150px)"
  block: "clamp(44px, 4.6vw, 72px)"
  case-foot: "clamp(64px, 7vw, 112px)"
  column: "clamp(24px, 4vw, 72px)"
  overlap: "clamp(72px, 13vw, 220px)"
  row: "12px"
  header-height: "56px"
  key-height: "104px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "8px 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.line-red}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "8px 20px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-on-ink:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 28px"
    height: "48px"
  button-on-ink-hover:
    backgroundColor: "{colors.line-orange}"
    textColor: "{colors.ink}"
  field-on-ink:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  screenshot-frame:
    backgroundColor: "{colors.plate}"
    rounded: "{rounded.none}"
  line-bullet-1:
    backgroundColor: "{colors.line-red}"
    textColor: "{colors.line-red-on}"
    rounded: "{rounded.full}"
    size: "1.75em"
  line-bullet-2:
    backgroundColor: "{colors.line-blue}"
    textColor: "{colors.line-blue-on}"
    rounded: "{rounded.full}"
    size: "1.75em"
  line-bullet-3:
    backgroundColor: "{colors.line-magenta}"
    textColor: "{colors.line-magenta-on}"
    rounded: "{rounded.full}"
    size: "1.75em"
  line-bullet-4:
    backgroundColor: "{colors.line-orange}"
    textColor: "{colors.line-orange-on}"
    rounded: "{rounded.full}"
    size: "1.75em"
  line-bullet-5:
    backgroundColor: "{colors.line-green}"
    textColor: "{colors.line-green-on}"
    rounded: "{rounded.full}"
    size: "1.75em"
  line-bullet-6:
    backgroundColor: "{colors.line-purple}"
    textColor: "{colors.line-purple-on}"
    rounded: "{rounded.full}"
    size: "1.75em"
  line-bullet-7:
    backgroundColor: "{colors.line-brown}"
    textColor: "{colors.line-brown-on}"
    rounded: "{rounded.full}"
    size: "1.75em"
---

# Design System: Hamza Alhaj Portfolio

## Overview

**Creative North Star: "The Metro Map of Systems"**

The page is a printed transit sheet. Each project is a line in a full-saturation colour, each stop is a real step in that system, and each dotted branch is a real failure path. Everything else exists to read that network: near-black ink on a white enamel sheet, heavy grotesque type, hairline rules instead of containers, and square-framed screenshots as the only imagery of the work.

The density changes on purpose. The first viewport is one diagram edge to edge, then each line takes over the full width as a solid colour band, then the system narrows to ruled rows and strip diagrams for the detail. The page ends on the only ink ground in the system, where all seven lines run down into one terminus.

Arabic and English are equal readings of one sheet. The map mirrors so that trains run in reading direction, the layout uses logical properties throughout, and the bilingual station sign holds both scripts in every locale.

**Key Characteristics:**
- One white sheet, one near-black ink, seven line colours that own whole bands.
- A single map geometry, authored once on a grid and derived for right-to-left and portrait.
- A fixed station grammar: station, interchange, terminus, dotted failure branch, numbered bullet.
- Flat surfaces, square rectangles, circles reserved for the network.
- One authored motion family, all of it telling the same story of a line lighting up.

## Colors

Seven transit colours at full saturation over a neutral sheet; no gradients and no tinted surfaces.

### Primary

The seven line colours are the primary palette. Each identifies one system across its band, bullet, stops, rail and section action.

- **Line 1 Signal Red** (#D9202F, on #FFFFFF): Retail Pro to ZATCA.
- **Line 2 Network Blue** (#0A5BC4, on #FFFFFF): Prism to SFDA RSD.
- **Line 3 Route Magenta** (#D6247F, on #FFFFFF): Raneem Gifts.
- **Line 4 Junction Orange** (#F28C00, on #141414): Strata by GameReplays. The only line with a dark on-colour.
- **Line 5 Depot Green** (#007F49, on #FFFFFF): Aleef Care.
- **Line 6 Express Purple** (#6C2DB3, on #FFFFFF): Occasion.
- **Line 7 Freight Brown** (#8A5A2B, on #FFFFFF): RTM Accounting for Odoo.

Inside a section, the pair is exposed as the `--line` and `--on-line` custom properties and every component reads those two names. The career route binds the same pair to ink and white, so it renders as an uncoloured line using the same parts.

### Neutral

- **Enamel White** (#ffffff): The sheet. Page background, station fill, label halo, and text on the ink ground.
- **Ink** (#15171c): Text, heavy 2px structural rules, screenshot frames, interchange rings, the train, and the terminus ground.
- **Mute** (#5c616b): Secondary text only, such as a project's privacy note or a career stop's location.
- **Rule** (#dcdee3): 1px dividers between rows and the unfilled rail of a strip diagram.
- **Plate** (#f1f2f4): The placeholder behind a loading screenshot, and the scrollbar track.
- **Error Tint** (#ffb3ba): Validation and failed-send text on the ink ground. The invalid field underline uses the stronger #ff8b95.

### Named Rules

**The One Colour Per System Rule.** A line colour identifies one project. Do not use it to decorate another project's content. Two global hovers borrow from the set and are the only exceptions: the hero Email action fills with Line 1 red, and links and the submit button on the ink ground turn Line 4 orange.

**The Paired On-Colour Rule.** A line colour never appears behind text without its own on-colour. Orange takes the dark on-colour and is never used for text on white.

**The Two Grounds Rule.** White is the ground for the whole page. Ink becomes a ground only at the terminus, where the lines end.

## Typography

**Display Font:** Schibsted Grotesk (with Alexandria for Arabic, then system-ui, sans-serif)
**Body Font:** Schibsted Grotesk (with Alexandria for Arabic)

**Character:** Schibsted Grotesk gives the Latin a dense, signage-weight voice at very large sizes. Alexandria matches its geometry and weight in Arabic, so a sign reads as one voice in two scripts. Latin words inside Arabic text stay in Schibsted, because the stack resolves script by script.

### Hierarchy

- **Display** (700, clamp(44px, 7.4vw, 124px), 1.02): The terminus title.
- **Statement** (700, clamp(36px, 5.6vw, 92px), 1.04, max 22ch): The one-sentence claim on each line's colour band.
- **Hero** (700, clamp(38px, 10.6vw, 64px), 1.05; from 1024px, 4.2cqw at 1.04): The name and claim in the map's clearing. Sized against the stage so it stays in that clearing.
- **Headline** (700, clamp(36px, 5vw, 76px), 1.05): Section titles. The toolkit title takes a narrower step (clamp(30px, 3.4vw, 52px), 1.08) because it sits in a four-column cell.
- **Title** (700, clamp(24px, 2.7vw, 42px), 1.12): Rule titles in the network rules list.
- **Sign** (700, clamp(20px, 2.1vw, 32px), 1.25): The bilingual station sign.
- **Lead** (400, clamp(19px, 1.5vw, 23px), 1.45): The opening paragraph of a case study and the terminus sentence.
- **Subhead** (700, 20px, 1.25): Career stop names. The contact form's title sits one step above at 22px.
- **Body** (400, 17px, 1.6): Running text, capped at 58 to 62ch.
- **Action** (600, 17px): Buttons and row terms.
- **Note** (400, 15px, 1.6): Metadata and privacy notes, usually in Mute.
- **Label** (700, 15px): Small headings inside a case study, in sentence case. Strip stops use weight 600, at 15px below 900px and 14px above.
- **Map Label** (600, 15 sheet units): Station names, with a 5px white halo so they read across lines. It scales with the map; below a 1130px container it becomes 16.5 units and non-interchange labels hide.

### Named Rules

**The Latin-Only Tracking Rule.** The -0.03em tracking on display type applies only under `:lang(en)`. Arabic display type is always set at 0, because letter-spacing breaks the joins between Arabic letters.

**The Arabic Room Rule.** Arabic gets more leading than Latin: 1.8 for body against 1.6, 1.3 for tracked display against about 1.05, and 1.22 for the hero, whose size also drops from 4.2cqw to 3.7cqw.

**The Catch-All Fallback Rule.** `adjustFontFallback` stays false on both fonts. The generated metric fallback is a catch-all Arial with no script range, which sits ahead of Alexandria in the stack and swallows every Arabic glyph. With it off, Arabic falls through to Alexandria as the page intends.

## Layout

The page is one fluid column capped at 1520px with a gutter of clamp(16px, 3.2vw, 56px). Below the hero, sections use a 12-column grid from 1024px. Section padding is clamp(72px, 9vw, 150px) and internal blocks step at clamp(44px, 4.6vw, 72px). Row content sits on a 12px rhythm between rules.

**The map grid.** The network is defined on a sheet of 40 by 21.5 units at 40px per unit, giving 1600 by 860. Stops and bends live on this grid. Line segments run at 0, 45 or 90 degrees, with corners softened to a radius of 16 (12 on branches).

**Fitting the first viewport.** From 1024px the stage is a size container, its width capped at the height left under the header and line key, multiplied by the sheet ratio (1.86), and never smaller than 960px. The headline, sentence and actions are positioned in the map's clearing in cqw units, so they keep their relationship to the network at any size. The seven-column line key sits directly below.

**Portrait.** Below 1024px the map transposes (x and y swap) and thickens: line 11 against 8, station radius 6.5 against 5, interchange 15 against 12, terminus 12 against 9.5, bullet 25 against 16. Portrait maps carry no station labels or legend, and the line key stacks into a full list beneath the diagram.

**Case studies.** Each line opens with a full-bleed band. Its lead screenshot takes eight columns and is pulled up over the band by clamp(72px, 13vw, 220px); the lead paragraph takes the other four. The pairing swaps sides on every second line. Gallery screenshots share a row and size by aspect ratio from 768px, and scroll horizontally below it.

### Named Rules

**The Single Sheet Rule.** The map is authored once, left-to-right and landscape. Arabic and portrait are derived from it by calculation: transpose first, then mirror x against the view width. Label sides flip with the mirror. Never draw a second geometry.

**The Octilinear Rule.** Every map segment is horizontal, vertical or a true 45-degree diagonal. New stops go on the grid.

## Elevation & Depth

This system is flat. There are no cast shadows and no blur. Depth is expressed by overlap (the screenshot crossing the band) and by line order on the map. The `box-shadow` property appears only as a zero-offset, zero-blur ring, drawing an outline that takes no layout space.

### Shadow Vocabulary

- **Screenshot frame** (`box-shadow: 0 0 0 1.5px #15171c`): The ink hairline around every screenshot.
- **Screenshot frame, hover** (`box-shadow: 0 0 0 4px var(--line)`): Thickens to the current line colour on linked screenshots.
- **Outline button** (`box-shadow: inset 0 0 0 2px #15171c`): The secondary action's border.
- **Current line bullet** (`box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--line)`): Marks the case study currently in view in the header.

### Named Rules

**The Flat Enamel Rule.** A shadow here is a ring: no offset, no blur.

## Shapes

Rectangles are square: buttons, bands, fields, and screenshot frames all have a 0 radius. Circles belong to the network: stations, interchanges, termini and line bullets. The train is the one capsule. Lines are round-capped strokes at 8 or 11 units, branches 3 units lighter, and rails in the page body are 6px bars.

### Named Rules

**The Square Sheet Rule.** If it is a surface it has square corners; if it is round it is part of the network.

## Components

### Network Grammar

The vocabulary of the map, repeated at every size. Wide values are given first, portrait values after the slash, in sheet units.

- **Line:** stroke 8 / 11 in the line colour, round cap and join.
- **Station:** a white dot of radius 5 / 6.5 sitting inside the line.
- **Interchange:** a white circle of radius 12 / 15 with a 5-unit ink ring. It marks infrastructure shared by more than one line, and the shared labels are always shown.
- **Terminus:** a white circle of radius 9.5 / 12 with a 5-unit ring in the line colour.
- **Failure branch:** a dotted stroke 3 units lighter than the line (dash `2 11`, round cap) leaving the line and rejoining it, or stopping short, with a ring at its far point. Rings are radius 9.5 / 12 with a 3-unit line-coloured stroke, solid for retry and offline, and dashed (`3 3.4`) for a held outcome.
- **Line bullet:** a filled circle of radius 16 / 25 carrying the Western numeral in the on-colour, placed at the end of the line.
- **Legend:** ink samples of the shared ring, the failure dots and the held ring, set in the map's lower corner.

### Line Isolation

The signature behaviour. Activating a line (hover, focus, tap, or the auto-cycle) drops every other line and station to 0.2 opacity, hides unrelated labels, and runs a train along the line once. The train is an ink capsule of 36 by 16 / 48 by 20 with a 3-unit white stroke, rotated along the path over at least 2600ms. The auto-cycle lights one line for 4400ms, rests on the full network for 2600ms, pauses when off-screen or when the tab is hidden, and stops for good the first time the visitor takes over. Pointer hit areas are 30 / 44 units wide.

### Motion

**The One Motion Rule.** The network is the only thing that moves: line isolation, the train, the draw-on of the lines at load, and the strip fill. There are no scroll reveals, parallax or entrance effects on text or images. Everything else is a state transition of 150 to 220ms.

- **Draw-on:** each line draws over 1100ms on an exponential ease-out, staggered 80ms by line.
- **Strip fill:** the rail of a strip diagram fills over 1400ms on the same ease the first time it enters the viewport.
- **Reduced motion:** the auto-cycle, train, draw-on and strip fill are all disabled, and the full static network shows.

### Station Sign

The header of every case study, modelled on a platform sign: English name, a 6px rail with the numbered bullet centred on it, Arabic name.

**The Fixed Sign Rule.** English stays left and Arabic stays right in both locales, as a physical sign does. Each name carries its own `lang` and `dir`, and the current locale's name is the heading. Below 768px the sign stacks with the reader's language first, then the rail, then the other script.

### Strip Diagram

A linear map of one system. A 6px rail in Rule with a line-coloured fill, vertical below 900px and horizontal from 900px, where its fill grows from the reading-start side. Stops are 22px white circles with a 5px line-coloured border. A terminus is filled solid with the line colour. A stop with a failure branch adds a 2px dashed outline offset by 2px.

**The Dash Means Failure Rule.** Dotted and dashed marks belong to the failure family and nothing else: failure branches and held rings on the map, the dashed outline on strip stops, and the dashed bullet in the When It Goes Wrong list.

### Buttons

- **Shape:** square corners (0), minimum height 44px, and 48px on the ink ground.
- **Primary:** ink fill with white text; fills with Line 1 red on hover.
- **Outline:** white with an inset 2px ink ring; inverts to ink on hover.
- **Line action:** the section's line colour with its on-colour; drops to 0.85 opacity on hover.
- **On ink:** white with ink text; turns Line 4 orange on hover.
- **Focus:** a 3px outline in the current text colour at 3px offset, applied globally.

### Inputs / Fields

Underlined fields exist only on the ink ground. Transparent, white text, a 2px bottom border at 45% white, rising to 75% on hover and to solid white on focus. An invalid field takes the #ff8b95 underline, with its message in Error Tint below.

### Navigation

A sticky 56px header on white with a 2px ink rule. The name is set at 17px bold on the reading-start side, the seven line bullets sit in the middle from 1024px, and Email, CV and the language switch sit at the end at 15px, weight 600, underlining on hover. The language switch is written in the other language's own script. The bullet for the case study in view gets the double ring.

### Line Key

The seven-part index beneath the map, between two 2px ink rules: seven columns from 1024px, a stacked list below. Each entry is a bullet, the line name at 15px weight 600 and a descriptor at 13px. Hovering, focusing or the auto-cycle fills the entry with its line colour and inverts the bullet.

### Ruled Rows

The system's replacement for cards and tables: a 2px ink rule on top, 1px Rule dividers between rows, 12px row padding, a semibold term and a detail in a 1:2 or 1:3 grid.

### Screenshot Frame

Real product screens at their native ratio with square corners and the 1.5px ink frame, on a Plate placeholder. Linked frames open the full image.

### Terminus

The ending. On the ink ground, seven parallel 10-unit lines bend into a single white-ringed ink station above the display title, followed by the email at clamp(23px, 4vw, 64px) as the largest link on the page, then the contact form.

## Do's and Don'ts

### Do:

- **Do** keep each line's colour paired with its on-colour through `--line` and `--on-line`.
- **Do** add a new project as a new line on the grid, with stops and failure branches that are real.
- **Do** place every map point on the 40 by 21.5 sheet and let the code mirror and transpose it.
- **Do** set the Latin -0.03em tracking through `:lang(en)` only, and give Arabic its own leading.
- **Do** keep `adjustFontFallback` false on Schibsted Grotesk and Alexandria.
- **Do** frame screenshots with the 1.5px ink ring at square corners and native ratio.
- **Do** keep English left and Arabic right on station signs in both locales.
- **Do** use ruled rows for structured detail.
- **Do** honour reduced motion for anything that moves.

### Don't:

- **Don't** add card surfaces, gradients or monospace type; the world has none.
- **Don't** open on a dark hero, set the name in a gradient, or show a grid of technology icons.
- **Don't** present the career as alternating timeline cards; it is a line with stops.
- **Don't** letter-space Arabic.
- **Don't** add a line colour without adding a line, or borrow one as general decoration.
- **Don't** set text in Line 4 orange on white.
- **Don't** use dots or dashes for anything other than failure paths.
- **Don't** use a shadow with blur or offset, or round a rectangular surface.
- **Don't** draw separate maps for Arabic or portrait.
- **Don't** add motion outside the network.
