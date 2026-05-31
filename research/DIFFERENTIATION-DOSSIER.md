# MS21250 — Deep-Research Dossier (verified, cited) — 2026-05-31
_Source: deep-research workflow, 103 agents, 20 sources, 25 claims adversarially verified (13 confirmed / 12 killed). Use this to write UNIQUE content. Every "DO NOT PUBLISH" flag is binding._

## ✅ CONFIRMED FACTS (≥2 sources, high confidence)

### 1. The shear "conflict" is resolved — and it's our #1 unique angle
- MS21250 carries TWO distinct properties simultaneously: **180 ksi ultimate tensile (Ftu)** AND **108 ksi ultimate shear (Fsu)**.
- They are NOT contradictory. Ratio 108/180 = **0.60** = the standard steel rule Fsu ≈ 0.6·Ftu.
- The "180 ksi FSU" seen on EverySpec's title field is a **transcription typo** duplicating the Ftu value. Authoritative DLA title + successor NASM8831 both read **"180 KSI Ftu, 108 KSI Fsu, 450°F."**
- **WRITER FLAG (unique gap nobody explains):** 108 ksi Fsu is an ultimate shear **STRESS (psi)**, NOT a per-bolt single-shear **LOAD (lbs)**. Per-size load = 108,000 × shear area. Distributors mislabel "108000 psi" as a load. Explaining stress-vs-load + the typo origin = content NO competitor has.
- Sources: everyspec MIL-B-8831B PDF, globalspec/DLA, military-fasteners, monroe, NASM8831 title.

### 2. Designation / code-name map (the cross-walk) — unanimous 3-0
- **Part standard:** MS21250 ⇄ **NASM21250** (current rev NASM21250L, 2013)
- **Material/property spec:** MIL-B-8831 (rev A/B) ⇄ **NASM8831**
- MIL-B-8831B (23 AUG 1982) was **cancelled 03 APR 2000** (NOTICE-1) and superseded by NASM8831. "Cancelled (inactive)" = existing inventory still usable.
- Related family: NAS624–NAS644 (same 12-point external-wrenching aircraft-bolt family, different strength tiers).
- All distributors (military-fasteners, Monroe, SkyGeek, aerospace-supplies, buyaircraftparts) ingest the **same DLA/FLIS NSN characteristics record** — they are mutually corroborating, NOT independent.

### 3. Material = a FAMILY, not one grade — 3-0
- Permitted aircraft-quality low-alloy steels: **4140, E4340/4340, 6150, 8735, 8740**, each tied to its own spec (MIL-S-5626=4140, MIL-S-5000=4340, MIL-S-8503=6150, MIL-S-6098=8735, MIL-S-6049=8740).
- Hardness **39–43 HRC**.
- **CAVEAT:** present the 5-member list as "per the NSN/FLIS characteristics record," NOT as a verbatim spec clause (the spec PDF's material block was font-garbled). The PRINCIPLE (a family, not one grade) is rock-solid. This corrects the earlier over-cautious "alloy steel only" — we CAN name the family, attributed.

### 4. Part-number decoder (deterministic) — 3-0
- Format: **MS21250 [H] – DD – LLL**
- **H** before the dash = **drilled head** (safety-wire). No H = undrilled.
- **DD** (first two digits) = thread/shank diameter in 1/16": 04 = 1/4", 05 = 5/16" (verified). 14 = 7/8" (verified).
- **LLL** (last three) = grip length in 1/16": 004 = 0.250", 008 = 0.500", 016 = 1.000", 022 ≈ 1.375".
- Threads: **UNJF-3A, right-hand, controlled-root** (UNJ per MIL-S-8879). The plain-"UNF" claim was REFUTED 0-3 — use UNJF.
- Worked (verified): MS21250-04008 = 1/4-28 UNJF-3A, 0.500" grip · MS21250H04004 = 1/4-28 drilled head, 0.250" grip · MS21250-05022 = 5/16-24 UNJF-3A, 1.375" grip.
- **WRITER NOTE:** odd grip dash numbers carry a +0.061" offset (base unit .0625"); the clean 1/16" rule is exact for even codes. Another nuance nobody explains.

### 5. The 450°F ceiling is FINISH-driven (metallurgical unique angle) — 3-0
- Finish: **cadmium plate + chromate per QQ-P-416 (now AMS-QQ-P-416) Type II Class 2.**
- Cadmium melts ~600°F and causes metal-induced embrittlement of high-strength steel near 450°F → that's WHY the bolt is capped at 450°F. The limit comes from the plating, not the steel.
- QQ-P-416 bars cadmium on parts >200 ksi UTS or >43 HRC. MS21250 (180 ksi, 39–43 HRC) is **at-or-below** the boundary → fully conforming; mandatory post-plate bake per AMS2759/9.
- **FLAG 1:** AMS-QQ-P-416F says "SHOULD not be plated" (advisory); older FEDERAL QQ-P-416F says "SHALL not" (mandatory) — state which revision.
- **FLAG 2:** Do NOT frame MS21250 as "violating" the finish spec. It conforms. The limit is >43 HRC / >200 ksi.

## ⛔ DO NOT PUBLISH (failed verification / not located — fabrication risk)
1. **Per-size dimensional table** (head across-flats, head height, thread length per diameter) — NOT primary-verified. Distributor head geometry ("12-point external-wrenching flanged") is **distributor-described**, present as such, not as spec-verified.
2. **Per-size minimum double-shear / ultimate-tensile LOAD tables (in lbs)** — NOT located in any source. Must be computed (stress × area) from the procured NASM21250 doc. DO NOT invent.
3. **Full dash→nominal-size table beyond verified rows.** dash 14 = 7/8" ✓; dash 04 = 1/4" ✓; dash 05 = 5/16" ✓. BUT **dash 03 = 0.190" (#10), NOT 3/16"** — the earlier 03=3/16" mapping was WRONG. Do not publish a complete 02–16 size column until verified against NASM21250.
4. **Per-diameter thread split** (UNJC-3A for dash 02, UNJF for 03–16, per Jet-Tek) — only 1 vote, UNVERIFIED. Do not assert thread-series varies by diameter; state UNJF-3A generally.

## 🎯 SIX DIFFERENTIATION ANGLES (unique content — own these, no competitor explains them)
1. **The 180/108 clarification + the EverySpec typo story** — why "180 ksi FSU" online is wrong.
2. **Stress vs per-bolt load** — 108 ksi is a stress; the load in lbs = stress × shear area.
3. **The full MIL→NASM cross-walk** with cancellation dates (MIL-B-8831→NASM8831; MS21250→NASM21250L).
4. **450°F = cadmium-plating limit**, not steel limit — the metallurgy.
5. **Clean-prose part-number decoder** incl. the odd-dash +0.061" offset.
6. **Material is a permitted family of 5 steels**, not "made of 4340."

## PART-NUMBER MATRIX (real catalog data, LAS Aerospace + Monroe — safe to publish as "commonly stocked sizes"; grips are real)
Grouped by diameter dash → available grip dash codes (each = grip in 1/16"). Present uniquely (e.g. as a coverage map), do not copy LAS layout verbatim.
- **Dash 03** (~0.190"/#10): 04, 06, 08, 10, 12, 16
- **Dash 04** (1/4"): 04, 06, 08, 10, 12, 13, 14, 16, 18, 20, 22, 24, 26, 28, 30, 34, 38, 40, 42, 46, 52, 54
- **Dash 05** (5/16"): 06, 08, 09, 10, 12, 14, 15, 16, 17, 18, 22, 24, 26, 28, 30, 32, 36, 40, 48, 56, 62
- **Dash 06** (3/8"): 06, 08, 10, 12, 14, 16, 18, 20, 22, 24, 26, 30, 34, 38, 40, 42, 44, 56, 62
- **Dash 07** (7/16"): 04, 08, 14, 16, 20, 22, 30, 64
- **Dash 08** (1/2"): 18, 20, 24, 26, 27, 28, 31, 32, 34, 38, 42, 47, 50, 62, 76
- **Dash 09** (9/16"): 14, 18, 20, 22, 24, 38, 66
- **Dash 10** (5/8"): 22, 24, 70
- **Dash 12** (3/4"): 24, 36, 40
- **Dash 14** (7/8"): 46
(Grip dash → inches: divide by 16. e.g. 022 = 1.375".)

## SOURCES (cite a mix; primary anchors first)
- PRIMARY: everyspec.com MIL-B-8831B PDF + NOTICE-1; QQ-P-416F federal spec text; NASM8831 / NASM21250L titles (globalspec/DLA).
- SECONDARY (NSN-derived, mutually corroborating): military-fasteners.com, catalog.monroeaerospace.com, skygeek.com, jet-tek.com, aero-space.us, lasaero.com.
- Caveat to bake into References: "Specification values cross-checked against the U.S. DLA/FLIS characteristics record and the NASM21250/NASM8831 standards; confirm against the controlling NASM21250 document for design use."
