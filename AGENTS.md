# AGENTS.md

You are building a one-page landing page for 3rducation's AI automatic grading tool 「澄」.

## Most Important Instruction
Build a one-page LP, not a multi-page corporate site.

## Goal
Complete the source code up to the state immediately before deployment.

## Website Type
- One-page landing page
- All content on `/`
- Header navigation must use anchor links
- Do not create separate pages

## Tech Stack
- Astro
- Tailwind CSS
- Static site
- TypeScript only when necessary
- No backend
- No CMS
- No database
- No login system

## Source Materials
Read all files in `/input` first.
Use the following assets:
- `/assets/proposal.pdf`
- `/public/images/logo-transparent.png`

## Create Only
- `src/pages/index.astro`

## Do Not Create
- `src/pages/service.astro`
- `src/pages/pricing.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`
- Blog pages
- Case study pages
- Login pages
- Admin pages

## LP Sections
The LP should include:
1. Header
2. Hero / First View
3. Trust / Target badges
4. Problem
5. Existing tools limitation / comparison
6. Solution
7. What is AI自動採点「澄」
8. Features
9. Product mockup / image section
10. How it works
11. Expected effects
12. Data flow / security consideration
13. Pricing / plans
14. FAQ
15. Final CTA
16. Contact form UI
17. Footer

## Header Anchor Links
Use these anchors:
- `#problem`
- `#features`
- `#flow`
- `#pricing`
- `#faq`
- `#contact`

## Brand / Design Direction
- Japanese B2B SaaS style
- School-friendly
- White base
- Use logo green and gold as accents
- Clean, trustworthy, calm, modern
- Avoid flashy startup look
- Avoid cyberpunk AI look
- Avoid childlike school design

## Copy Rules
- Japanese by default
- Use polite ですます style
- Do not say AI replaces teachers
- Do not say fully automatic and perfect grading
- Do not fabricate customer logos, adoption numbers, certifications, awards, or case studies
- Use TODO labels for unknown information
- Position the product as AI that supports teachers

## Visual Rules
- Use the logo in the header and footer
- Include visual sections: dashboard mockup, answer sheet preview, score table, workflow diagram
- If proposal page screenshots are available in `/public/images`, use them as references or temporary assets inside modern UI cards
- If screenshots are rough, create clean HTML/CSS mockups instead

## Contact
- Build a contact form UI section
- Backend submission is not required
- If easy, make it Netlify Forms-ready, but do not add complex backend logic

## Implementation Rules
- Keep LP content editable in `src/data/lpContent.ts`
- Use reusable components for sections
- Keep pricing, FAQ, features, and CTA text easy to edit
- Make it mobile responsive
- Ensure `npm run build` succeeds
- README must include setup, editing, build, and deployment instructions

## Definition of Done
- `npm run dev` works
- `npm run build` succeeds
- `npm run preview` works
- `/` contains the full LP
- Header anchor links work
- Mobile layout does not break
- Contact section exists
- README is complete
