# Beacon Design System — gpt-taste Revamp

## Scope
Preserve the existing Beacon landing-page structure and section order. No new sections are introduced. The revamp focuses on motion engineering: stronger GSAP interactions, scroll choreography, hover physics, and reliable initialization.

## Deterministic pre-flight
Prompt character count: 174. Seed: `174`.

```python
seed = 174
random.seed(seed)
hero = "Cinematic Center"
font = "Geist"
components = ["Inline Typography Images", "Horizontal Accordions", "Infinite Marquee"]
motion = ["Scroll Pinning (GSAP Split)", "Card Stacking"]
```

The existing component and section structure is preserved. The selected component patterns are expressed as micro-treatments within existing surfaces rather than adding sections.

## AIDA check

- Navigation: floating glass Beacon navigation.
- Attention: centered hero with wide headline, two CTAs, and dashboard visual.
- Interest: existing feature/bento section.
- Desire: existing dark story section with pinned title, stacked story cards, and scrubbed narrative.
- Action: existing waitlist CTA and footer.

## Hero math

The existing hero headline remains `max-width: 72rem`, with `clamp(3rem, 6.3vw, 6.5rem)` and balanced wrapping. No stamp icons or spam tags are introduced.

## Bento density

Desktop grid remains 12 columns with dense flow. `7 + 5 = 12`, `4 + 8 = 12`, and `5 + 7 = 12`; `grid-auto-flow: dense` remains enabled.

## Motion engineering

- Hero entrance timeline with staggered heading, copy, CTA and dashboard reveal.
- Dashboard retention curve draw animation and scroll-linked float.
- Animated chart cursor and subtle hero grid drift.
- Bento scroll reveals, heatmap cell sequencing, and retention curve drawing.
- Card magnetic hover physics and highlight sweeps.
- Platform orbit micro-motion and sponsor-report treatment.
- Desktop pinned story title and progressive story-card stacking.
- Story imagery scale/fade treatment through the viewport.
- Word-by-word scrubbed narrative reveal.
- Reduced-motion fallback and ScrollTrigger refresh.
- Desktop pinning is disabled below 901px to prevent mobile collisions.

## Label and contrast sweep

No cheap meta-labels such as `SECTION 01` or `QUESTION 05` are introduced. Existing descriptive feature labels remain because they identify the product capability itself. CTA text uses high-contrast foreground/background pairs.
