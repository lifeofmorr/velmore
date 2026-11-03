# PUSH MANIFEST — VELMORE UNO one-product store (STAGED, not published)

**Staging folder:** `~/workspace/espresso-store-staging/`
**Proposed repo:** `lifeofmorr/velmore` (new repo — creation is BROWSER-ONLY per portfolio rule)
**Proposed live URL:** https://lifeofmorr.github.io/velmore/
**Brand:** VELMORE — PLACEHOLDER name invented for staging. Not VERO (the video creator's brand), not Anchor Me Down, unconnected to any other Don brand. Don renames before or after launch; a rename = wordmark/title find-replace + repo rename.

## Files to publish (exact list)
- `index.html` — one-product storefront (hero $789.00 / compare-at $1,299.00, bundle selector, free-gifts row, Complete Bundle upsell, benefits, how-it-works, specs, shipping, reviews launch-state, FAQ)
- `policies.html` — shipping / returns / warranty / privacy
- `style.css`
- `main.js`
- `favicon.svg`
- `robots.txt`
- `sitemap.xml`
- `assets/machine-main.jpg` — supplier product photo (TESSLUX TXEM-2414), 500×500
- `README.md`
- (Do NOT publish this PUSH-MANIFEST.md itself — optional either way; Northbound keeps planning docs in-repo, so including it is also acceptable.)

## Main-session publish steps
1. Create repo `lifeofmorr/velmore` via the GitHub **web UI** (connector repo creation returns 403 — browser-only, per standing rule).
2. From the **main session only** (approval cards cannot be collected in subagent sessions): push the files above to `main` via the GitHub connector `push_files`, one push per background exec.
3. Enable GitHub Pages on `main` / root.
4. Verify the LIVE site byte-for-byte against staging (standard: measure live, not the report) and open it once on mobile width.
5. **Payments gate (Don):** create the Stripe payment link(s) from the main session — machine $789.00, and the bundle variant $888.00 (machine + $99 Complete Bundle) — then replace BOTH `href="#"` placeholder buy buttons in `index.html` (hero ADD TO CART + bundle ADD THE BUNDLE) and re-push. Until then the buttons are inert placeholders by design.
6. Optional at publish: add Google Search Console verification meta (Northbound pattern) and submit sitemap.

## Content rules baked into the staged copy (do not regress on edit)
- NO reviews, reviewer names, photos, star counts or rating figures anywhere. Reviews section is a launch-state module ("Be the first to review"); hero rating row shows empty stars + "Be the first to review". Populate ONLY with real verified-order reviews.
- Honest shipping: US warehouse, "most US orders arrive within 5–12 business days", free shipping, 30-day returns — matches the verified supplier route (SHEIN US Local listing for the exact machine, free shipping; see README).
- Prices on page: machine $789.00 (compare-at $1,299.00), Complete Bundle add-on $99.00 (was $199.00), gifts $0.00.
