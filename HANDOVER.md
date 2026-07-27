# HANDOVER — DKNS Digital Website

## What this is

The DKNS Digital agency website, Next.js 16 App Router + TypeScript + Tailwind
v4. It went through two builds:

- **Phase 1** (2026-07-27): a complete, conventional premium marketing site —
  hero/services/portfolio/testimonials, 13 static pages.
- **Redesign** (same day, later session): the homepage, portfolio detail page,
  and contact flow were rebuilt from scratch to a much more ambitious,
  "living product" brief — interactive canvas hero, GSAP-scrubbed horizontal
  timeline, a click-driven system diagram, an animated illustrative dashboard,
  a rule-based "Ask DKNS" console, and a multi-step guided contact builder.
  The secondary pages (services, about, industries, pricing, blog, resources,
  faq, careers, privacy, terms) kept their Phase 1 structure and just inherit
  the new fonts/tokens.

No database, admin dashboard, or auth exists yet — see **Phase 2 TODO** below.

## Running it

```bash
npm install
npm run dev
```

Dev server runs on port 3005 (registered in `~/.claude/launch.json` as
`dkns-digital`). `npm run build` produces a fully static/SSG production
build — verified clean (28/28 routes, 0 type errors, 0 lint errors).

## Two deliberate deviations from the redesign brief

1. **No Three.js / React-Three-Fiber / Spline.** The "Digital Ecosystem" hero
   and "Digital Operating System" section are a hand-built 2D `<canvas>`
   node-network engine (`src/components/hero/ecosystem-canvas.tsx`) instead of
   a WebGL/3D scene — same "living system" feeling, far less bundle/perf risk,
   fully self-contained. Revisit if she specifically wants literal 3D later.
2. **"Ask DKNS" is a rule-based console, not a live LLM call**
   (`src/components/home/ai-assistant.tsx`). Quick-prompt chips run a local
   generator built from our own `services`/`pricing`/`process` content — no
   API key, no usage cost, ships instantly. Swapping in a real Claude API
   route later is an isolated change once she wants to add a key (see
   `claude-api` skill / Claude API skill in this environment for wiring
   details) — don't add billed API calls without her explicit go-ahead.

## Structure — what's new in the redesign

- **Design language**: `src/app/globals.css` gained a restrained "Soft Gold"
  accent (renamed from Golden Wheat), fixed-tone `--color-ivory` /
  `--color-charcoal` tokens for deliberate high-contrast editorial sections
  (Command Center uses charcoal, the closing Contact Teaser uses ivory,
  regardless of light/dark theme), and a noise-overlay texture class. Body
  font switched from Inter to Geist; display stays Fraunces.
- **Motion foundation**: `src/lib/motion/use-lenis.ts` (Lenis inertia scroll
  wired to GSAP ScrollTrigger, auto-skipped under `prefers-reduced-motion`,
  also handles smooth anchor-link scrolling since native `scroll-behavior` was
  removed in favor of Lenis), `cursor.tsx` (magnetic dot+ring cursor,
  fine-pointer only), `use-magnetic.ts` (hook behind `MagneticButton`). Wired
  in via `src/components/motion-providers.tsx` in the root layout.
- **Home page** (`src/app/page.tsx`) is now exactly the 10 sections from the
  brief: Hero → How We Think → Digital Operating System → Transformation
  Timeline (GSAP horizontal pin/scrub) → Interactive Portfolio (device-frame
  hover mockups, testimonials folded in) → Engineering Process (horizontal
  precision timeline) → Command Center (illustrative animated dashboard, tech
  stack folded in) → Knowledge Center (blog + resources merged) → Ask DKNS →
  Contact Teaser. The old generic sections (TrustedBy marquee, WhyChooseUs
  grid, standalone Testimonials/TechStack/Stats/CTA) were deleted — their
  useful content was folded into the sections above rather than kept as
  separate cookie-cutter blocks.
- **Portfolio detail** (`src/app/portfolio/[slug]/page.tsx`) gained an
  Architecture section (`architecture-diagram.tsx`, a 4-layer stack diagram)
  and a Performance section (`ScoreRing` component, reused by Command Center
  too) with illustrative Lighthouse-style scores.
- **Contact** (`src/app/contact/page.tsx`) now runs `ProjectBuilder`
  (`src/components/contact/project-builder.tsx`), a 4-step wizard reusing the
  same `estimatorProjectTypes`/`estimatorFeatures` data as `/pricing`,
  replacing the old flat form. `/api/lead/route.ts` was extended to accept
  `features`/`timeline` fields.

Everything from the Phase 1 handover — content layer shape, SEO/sitemap
plumbing, `.data/*.jsonl` placeholder lead storage, known placeholder content
(fictional case studies, placeholder contact details, generic legal text) —
is unchanged; see the content files under `src/content/` for what's still
sample data.

## A real bug found and fixed during verification

Three places used `<AnimatePresence mode="wait">` wrapping a single
`motion.div` keyed on changing state (Digital OS's description panel, the
Command Center AI-activity feed, the contact builder's step transitions) with
matching `initial`/`exit` values. In this Framer Motion version that combo got
stuck mid-exit — clicking a new option updated the underlying React state
(confirmed via `aria-pressed`) but the visible panel never advanced past the
first render. Fixed in all three spots by dropping `AnimatePresence`/`exit`
entirely and relying on React's own key-based remount with just
`initial`/`animate` — simpler and confirmed working (Digital OS node
selection, the AI Assistant's prompt chips, and the full 4-step contact
builder were each re-tested end-to-end after the fix). If you add another
`AnimatePresence mode="wait"` with a changing `key` elsewhere, test it the
same way before trusting it.

## Deployment status (as of 2026-07-28)

**GitHub: done.** Code is pushed to `github.com/khdanushka-spec/DKNS` on `main`
(local git identity for this repo is set to `Dhanu` /
`dhanu-af@users.noreply.github.com`, matching the convention used in her other
DKNS repos). This is the source of truth to deploy from — don't recreate it.

**Vercel: fixed.** She deleted the broken `dkns` project and re-imported
`khdanushka-spec/DKNS` fresh with default Next.js settings herself (Vercel
Hobby plan, account "Dhanushka"), as planned below. Verified from this session
by browsing `dkns.vercel.app` directly — it now correctly serves the DKNS
Digital agency site (hero, nav, "We Engineer Digital Businesses."), not the
old `404: NOT_FOUND`.

**`dkns.ai` custom domain: NOT yet repointed — still serving the wrong site.**
Browsing `https://dkns.ai` in this session (2026-07-28) returns a completely
different, unrelated site: a personal résumé/career page for "Dhanushka
Kariyawasam — Entrepreneur & Operations Professional" (DKNS Marketing tea/
cinnamon export business, South Scooters, Senkadagala Finance career history,
etc.) — not the agency site, and not a 404. This means `dkns.ai` is either
still attached to a different old Vercel project/deployment, or its DNS
hasn't been added to the new `dkns` project yet. **Do not report `dkns.ai` as
live until this is checked in her Vercel dashboard** — the fix that worked for
`dkns.vercel.app` (recreating the project) does not by itself move a custom
domain over; domains have to be explicitly added to the new project in
Settings → Domains, and any old project still claiming `dkns.ai` needs the
domain removed from it first.

**Important access limitation for future sessions:** the Vercel MCP
integration available in this environment is authenticated as a **different
Vercel identity** than her real account — a team called "DKNS" (slug `dkns1`)
that does not appear anywhere in her actual dashboard (confirmed: her team
switcher only shows "Dhanushka / Hobby"). Every lookup against her real `dkns`
project (`get_project`, `get_deployment`, `get_deployment_build_logs`, by
project ID, by hostname, with every team ID variant) returns 404/not found.
There is no tool available in this environment to create a Vercel project
with a linked git repository either — the only creation tool
(`deploy_to_vercel`) is a raw file-upload API that explicitly bypasses git,
and even that would land in the wrong (inaccessible-to-her) "DKNS" team, not
her Hobby account. **Do not attempt to fix or redeploy her `dkns` project via
the Vercel MCP tools — they cannot reach it, no matter how the calls are
shaped.** The only ways to actually act on her real account are (a) her doing
it herself in the dashboard, or (b) she connects the "Claude in Chrome"
browser extension so a session can drive her real, logged-in browser
directly — checked via `list_connected_browsers`, currently empty (not
connected as of this writing).

**Next step (her call):** in the Vercel dashboard, check whatever project
currently owns the `dkns.ai` domain (likely the old personal-site project or
a leftover claim on the deleted `dkns` project), remove the domain from it,
then add `dkns.ai` to the new `dkns` project's Settings → Domains. Once she
says it's done, re-verify by browsing `dkns.ai` from here — a plain
fetch/browse of the public URL doesn't need her login, only *changing*
settings does.

## Phase 2 — still not built, by design

Unchanged from Phase 1 — needs her accounts/credentials or infra decisions:

- Prisma schema + Neon Postgres (deps installed, schema not written).
- Authenticated `/admin` dashboard (mirror `labs-dkns-ai`'s `bcryptjs`+`jose`
  pattern) for editing content without touching code.
- Real lead persistence + email notifications (replace `.data/*.jsonl`).
- A real Claude/OpenAI-backed "Ask DKNS" (currently rule-based, see above).
- WhatsApp Business API, live calendar booking embed, analytics wiring.
- Vercel deployment and `dkns.ai` domain/DNS — needs her go-ahead.

## Verification done this session

- `npx tsc --noEmit`, `npx eslint .`, `npm run build` — all clean (28/28
  routes) after every batch of changes, re-run at the end.
- Hero canvas: confirmed correct sizing and live painted content via direct
  pixel inspection (`getImageData`), not just visual assumption.
- Digital OS: node selection re-tested and confirmed correct after the
  AnimatePresence fix above.
- Transformation Timeline: scrolled the full page height programmatically,
  confirmed no console errors from the GSAP ScrollTrigger pin.
- AI Assistant: triggered the "Estimate pricing" prompt, confirmed the
  generated response matches live `pricingTiers` data.
- Contact builder: stepped through all 4 steps programmatically, submitted,
  confirmed the extended payload (`projectType`, `features`, `budget`,
  `timeline`) landed correctly in `.data/leads.jsonl`, then removed the test
  entry.
- Spot-checked every untouched secondary page (services, about, industries,
  pricing, a portfolio case study) still renders cleanly with the new
  fonts/tokens.
- Could not capture a visual screenshot in this environment (the Browser pane
  wasn't displayed/compositing) — verification relied on DOM text extraction,
  computed-style/pixel checks, and scripted interaction testing instead.
  `prefers-reduced-motion` and touch/`pointer:coarse` behavior are correct by
  code review (all three motion primitives check the right media features)
  but weren't exercised live — this tooling can resize the viewport but can't
  emulate actual touch/reduced-motion capability.
