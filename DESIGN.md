# Beacon — gpt-taste Design Plan

## Pre-flight

Deterministic seed: `421` (character count of the supplied design request).

```python
seed = 421
hero = "Artistic Asymmetry"
type_stack = "Outfit"
components = ["Inline Typography Images", "Horizontal Accordions", "Infinite Marquee"]
motion = ["Scroll Pinning (GSAP Split)", "Card Stacking"]
```

The existing landing-page chapter order is preserved. The visual system is reswamped rather than replacing the information architecture.

## AIDA check

- Navigation: floating glass navigation with a high-contrast waitlist action.
- Attention: cinematic photographic hero, wide editorial headline, two CTAs, animated analytics dashboard.
- Interest: dense 12-column product grid with retention, image-led context, heatmap, cross-platform orbit, sponsor report, and episode comparison.
- Desire: pinned story narrative, image scale/fade, stacked cards, and scrubbed explanatory copy.
- Action: oversized lime waitlist chapter and minimal footer.

## Hero math

H1 width: `min(1150px, 100%)` with `clamp(4rem, 8vw, 8.6rem)` and `.88` line-height. The headline is intentionally wide so it remains a 2–3 line editorial composition instead of a narrow SaaS text wall. No hero stamp icons or spam tags are used.

## Bento density

Desktop columns = 12. Card spans are `7 + 5 = 12`, `5 + 7 = 12`, and `7 + 5 = 12`; the grid uses dense auto-flow. Every row is intentionally filled with no dead grid cell.

## Motion direction

Motion is choreographic rather than constant: hero staging, dashboard curve draw, ambient glow drift, bento reveal, heatmap sequencing, comparison-bar growth, pinned story title, image scale/fade, card stacking, and word-by-word narrative scrub. Reduced-motion users receive a calmer static presentation.

## Asset direction

Stock imagery is contextual and editorial: podcast studio, listener/headphones, and report/workspace scenes. Images are desaturated and layered with gradients so they support the analytics product rather than becoming decorative stock-photo blocks.
