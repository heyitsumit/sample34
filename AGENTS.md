# Beacon Design + Build Agent Rules

This repository follows the supplied `gpt-taste` design skill as the authoritative visual system.

## Design authority
- AWWWARDS-level UX/UI and advanced GSAP motion engineering.
- Never use emojis in code, comments, or UI copy.
- Do not use Inter. Use an editorial stack such as Outfit, Cabinet Grotesk, Satoshi, or Geist.
- Use a deterministic design-plan seed before UI changes and document the selected architecture.
- Keep the hero wide and editorial. H1 must remain within 2–3 lines.
- Follow AIDA: premium navigation, Attention hero, Interest product/bento, Desire motion/media, Action CTA/footer.
- Use generous cinematic vertical spacing between major sections.
- Bento grids must use dense packing and must not leave dead cells or awkward empty gaps.
- Avoid cheap meta-labels such as SECTION 01, QUESTION 05, ABOUT US.
- Buttons must have strong contrast and readable text.

## Motion
- Static interfaces are not acceptable. Use GSAP with `@gsap/react` and `ScrollTrigger`.
- Use real hover physics on clickable cards/images where appropriate.
- Use scroll pinning, image scale/fade, scrubbed text, and card stacking where they improve comprehension rather than as decoration.
- Motion must have a clear entrance, interaction, or storytelling purpose.
- Respect `prefers-reduced-motion` and avoid motion that creates horizontal overflow.
- Call `ScrollTrigger.refresh()` after major layout/image changes when needed.

## Assets
- Use contextual stock imagery, preferably `https://picsum.photos/seed/{keyword}/...` when no local asset is available.
- Images should be treated with grayscale, contrast, overlays, luminosity, or other editorial treatments rather than appearing as generic stock cards.
- Use varied image contexts: studio, listener, report, editorial/workspace, etc.
- Use images inside the composition, including inline or media-led treatments, without changing the core page hierarchy.

## Existing Beacon structure
Preserve the existing landing-page chapter order:
1. Navigation
2. Hero
3. Platform marquee
4. Product / analytics bento
5. Why Beacon / story + GSAP narrative
6. Waitlist CTA
7. Footer

Do not replace the product positioning or turn the page into a generic SaaS template.

## Responsive quality
- Desktop, tablet, and mobile must remain collision-free.
- Never allow text/images to overlap unintentionally.
- Disable desktop-only pinning when it causes mobile collisions.
- Keep the entire page `overflow-x-hidden`.
