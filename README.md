# VELMORE UNO — one-product espresso store (STAGED)

Static one-product storefront replicating the funnel model from Don's TikTok reference (branded one-product store, free-gift line items, bundle upsell), built agent-side 2026-11-03. Not yet published — see `PUSH-MANIFEST.md`.

## Product (verified 2026-11-03)
- Machine: TESSLUX TXEM-2414 "Espresso Machine Pro" — 20-bar ULKA pump, dual boiler, LCD touch, 1.8 L tank, 1350W, 120V US model, stainless steel, 11.6″×9.1″×14.1″, ~12 lb, 12-month manufacturer warranty. Identity confirmed via the manufacturer's user manual (manuals.plus) and Amazon ASIN B0D3PX52GZ metadata.
- The video's AliExpress listing ($59.74) could NOT be verified live — no AliExpress item page surfaced through search/fetch tools on 2026-11-03. Do not treat $59.74 as a live-verified price.
- Closest verifiable channel for the EXACT machine: SHEIN US "Local" listing — **$63.00, free shipping, US warehouse ("Local" / QuickShip), 110V–130V, 70–80+ sold**. Amazon carries the same machine at $109.49.
- **Best verified landed cost: $63.00** (product + shipping, US warehouse route).

## Margin math (landed $63.00, minus 3% payment processing)
- At $789.00: processing $23.67 → **gross margin $702.33/unit (89.0%)**
- At $495.00: processing $14.85 → **gross margin $417.15/unit (84.3%)**
- Exposure note: a high-ticket dropshipped appliance carries outsized return/chargeback exposure — one refund reverses the full ticket plus shipping both ways, and card networks can hold reserves on high-ticket, longer-delivery stores.

## Rules
- No fake/imported/fabricated reviews — ever. Reviews module launches empty on purpose.
- Buy buttons are `href="#"` placeholders until the main session wires Stripe after Don's gate.
- Brand name VELMORE is a placeholder.
