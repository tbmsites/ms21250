# MS21250 — Verified Spec Facts (cross-checked ≥2 sources)
_Extracted 2026-05-31. Every fact below carries provenance. Anything marked ⚠️ NEEDS-VERIFICATION will NOT be published as definitive._

## Sources
- S1 = everyspec.com/Bolt/MS21250/ (spec index, verbatim title)
- S2 = aaestore.com.au/media/specs/MS21250.pdf (the actual drawing — Table 1 + grip table)
- S3 = aero-space.us/product-families-ms21250/ (manufacturer summary)
- S4 = lasaero.com (commercial catalogue — clean part-number → size → grip mapping)
- S5 = Google AI Overview (informational, treated as lead only, not authority)

## Designation & lineage (VERIFIED S1+S3+S5)
- Full title: **"Military Standard — Bolt, Tension, Steel, External Wrenching, Flanged, 12-Point"**
- Current revision indexed: **MS21250L** (30 JAN 1989)
- **Superseded by NASM21250** (AIA/NAS redesignation; dimensional & mechanical requirements retained)
- Procurement specification: **MIL-B-8831B** (23 AUG 1982)

## Mechanical / material (VERIFIED S1+S3+S4)
- **Ultimate tensile strength (Ftu): 180,000 psi (180 ksi) minimum** — confirmed S1, S3, S4
- Service temperature: **450 °F** — confirmed S1, S3, S5
- Head: **12-point (double-hex) external wrenching, flanged** — confirmed all
- Material: alloy steel, cadmium plated ⚠️ (grade AISI 4140/4340/8740 stated only by S5 AIO — NOT in primary sources; publish as "alloy steel per the governing spec", not a specific AISI grade, unless the MIL-B-8831 text is obtained)
- Hardness 39–43 HRC ⚠️ (S5 only — do NOT publish as definitive; omit or attribute)
- **Shear: CONFLICT.** S1 (MIL-B-8831B title) reads "180 KSI FTU AND 180 KSI FSU"; S5 AIO says ~108 ksi design allowable. These are not reconcilable from public data. → **Do NOT publish a single shear-ksi figure.** Instead publish the per-size **minimum double-shear (lbs)** and **minimum ultimate tensile (lbs)** straight from the MS21250 drawing Table 1 (S2), which is authoritative drawing data.

## Part-number decoder (VERIFIED S2 grip table + S4 catalogue + S5)
Format: **MS21250 [H] – DD – LLL**
- **H** (optional, before dash) = **drilled head** for safety wire; absent = undrilled
- **DD** = diameter dash code
- **LLL** = grip length in **1/16-inch increments** (e.g. 016 = 16/16 = 1.000")
- Worked example: MS21250-05012 → 5/16" dia, 12/16 = 0.750" grip. MS21250H05012 → same, drilled head.

### Diameter dash → nominal size (VERIFIED S4 catalogue headers, grip math confirms)
| Dash | Nominal dia |
|---|---|
| 03 | 3/16" |
| 04 | 1/4" |
| 05 | 5/16" |
| 06 | 3/8" |
| 07 | 7/16" |
| 08 | 1/2" |
| 09 | 9/16" |
| 10 | 5/8" |
| 12 | 3/4" |
| 14 | 7/8" |
(01/02 small sizes #8/#10 appear in S2 drawing but OCR-garbled → ⚠️ verify before publishing those two rows.)

### Per-size strength minimums (VERIFIED S2 drawing Table 1 — authoritative)
Columns "DOUBLE SHEAR LBS MIN" / "ULT TENSILE LBS MIN" exist per diameter dash. Values legible for 02–12 but some OCR noise → re-verify each cell against a clean copy of the drawing before publishing the lbs table. Do NOT transcribe OCR-noisy cells blind.

## Certifications to claim (per Mitul, 2026-05-31)
- ISO 9001
- PED 2014/68/EU (Pressure Equipment Directive)
- AD 2000-Merkblatt (German pressure-vessel material certification)
- **TorqBolt DOES supply MS21250.**
- ❌ Do NOT claim AS9100 / NADCAP / aerospace-prime approvals (TorqBolt does not hold them). Position: ISO 9001 manufacturer producing to MS21250/NASM21250 requirements.

## Contact (canonical, per fleet rules)
- info@torqbolt.com · +91-22-66157017 · Mumbai + Rajkot · no personal names/mobiles
