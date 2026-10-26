# Accuracy Report

## Method

The written brief is broken into yes-or-no checks, one per specified fact. Each check scores **1** if the render matches, **0.5** if it partly matches, and **0** if it does not.

- **Scope:** the final render, view A1 only (`images/after-a1-v3.jpg`).
- **Method:** manual visual review against the brief. These are judgments by eye, not pixel measurements, so treat the percentages as approximate.
- **Not scored:** Pillar 2, the style ratio (60% Mid-Century Modern, 25% Industrial, 15% Western Americana), because it is a judgment about overall feel.
- **Not measurable from a render:** true dimensions. Placement and relative scale are checked, not exact inches.

## Result

| Pillar | Checks | Score |
| --- | --- | --- |
| 1. Fixed facts | 8 | 7.5 |
| 3. Palette tied to light | 4 | 3.5 |
| 4. Key pieces | 20 | 18.5 |
| 5. Constraints and exclusions | 7 | 5.5 |
| 6. Output specification | 5 | 5.0 |
| **Total** | **44** | **40.0 (90.9%)** |

## Every check

### 1. Fixed facts (7.5 / 8)

| Check | Score |
| --- | --- |
| Exactly one window | 1 |
| Window on the north wall (right-hand side when looking west) | 1 |
| Window has a 12-pane grid | 0.5, grid reads denser |
| Brick on the south wall only (left-hand side) | 1 |
| East and west walls are flat white drywall | 1 |
| Exposed timber beams visible, ceiling reads about 12 ft | 1 |
| Polished light grey concrete floor | 1 |
| No door visible in a view looking west | 1 |

### 3. Palette tied to light (3.5 / 4)

| Check | Score |
| --- | --- |
| Neutral-cool white balance on the concrete and white walls | 1 |
| Reads as bright overcast daytime, not dusk or golden hour | 0.5, could pass for late afternoon |
| Warm light limited to the arc lamp and the brass bedside lamp | 1 |
| Warm earth-tone palette: cognac, sienna, saddle, oatmeal, walnut, brass | 1 |

### 4. Key pieces (18.5 / 20)

| Check | Score |
| --- | --- |
| Kitchenette: walnut slab-front base run with black pulls | 1 |
| Kitchenette: charcoal counter | 1 |
| Kitchenette: matte black bar sink and gooseneck faucet | 1 |
| Kitchenette: matte black under-counter fridge at the east end | 1 |
| Kitchenette: two-burner cooktop on the counter | 1 |
| Kitchenette: one turquoise vessel on the counter | 1 |
| Cognac leather sofa centered on the brick wall facing the window | 1 |
| Three solid pillows (two oatmeal, one burnt sienna) | 1 |
| Walnut slab coffee table, black steel base, one brass bowl | 1 |
| Oatmeal wool flat-weave rug, flat pile | 0.5, reads textured |
| Cowhide layered on the rug | 1 |
| Sling chairs at each end of the coffee table, angled toward the sofa | 0, both on one side |
| Arc lamp arching over the sofa's east end | 1 |
| 42-in. walnut pedestal table and two black steel and leather chairs at the east end of the window | 1 |
| Low walnut platform bed, headboard on the west wall | 1 |
| Oatmeal linen bedding and a burnt-sienna throw | 1 |
| Walnut bedside table with brass lamp | 1 |
| Rust-and-sand canvas above the bed | 1 |
| Open shelf divider with few objects, offset from the bed's foot | 1 |
| One olive tree in a black planter at the west end of the north wall | 1 |

### 5. Constraints and exclusions (5.5 / 7)

| Check | Score |
| --- | --- |
| No chrome or stainless | 1 |
| No barn wood | 1 |
| No animal skulls or themed decor | 1 |
| No striped or competing patterns | 1 |
| No upper cabinets or open kitchen shelving | 0, wall-mounted shelves with dishes appeared |
| No pouf, books, or extra wall art | 1 |
| Curated and sparse | 0.5, extra plants and dishware |

### 6. Output specification (5 / 5)

| Check | Score |
| --- | --- |
| 5-ft eye-level viewpoint | 1 |
| Wide-angle (about 24 mm) perspective | 1 |
| Straight verticals | 1 |
| 3:2 aspect ratio (1536 x 1024) | 1 |
| Orientation matches the shot line (brick left, window right, bed at the far end, beams visible) | 1 |

## Audit log

| Version | Defects found | Status in the next version |
| --- | --- | --- |
| v1 collage | Second window | Fixed |
| | Door visible in a view where it should be behind the camera | Fixed |
| | Brick on the west wall in one panel | Not re-tested, A2 and A3 not regenerated |
| | Golden-hour orange cast instead of 10:30 AM light | Fixed, minor residue |
| | Jute-like rug | Partly fixed |
| | Olive tree on different sides in different views | Correct in A1, other views not re-tested |
| | Extra decor: leaning art, striped pillows, nightstands, pouf, books | Fixed |
| | Ceiling cropped out of two views | Beams visible in A1, other views not re-tested |
| v2 single view | Table lamp and floor lamp stacked at one end of the brick wall | Fixed by replacing the console with a kitchenette |
| | Console with no purpose | Fixed |
| | Sling chairs side by side on the window side of the table | Open |
| v3 final | Wall-mounted open shelving and dishes over the counter | Open |
| | Rug still reads textured | Open |
| | Window grid denser than 12 panes | Open |
| | Views A2 and A3 not generated for v3 | Open |

## Before: the empty shell (view B1)

The same method, applied to `images/before-b1.jpg` against the Fixed Facts and the locked shell prompt. Manual visual review, so treat the numbers as approximate.

**Total: 21.5 / 25 (86%).**

| Check | Score |
| --- | --- |
| Completely empty: no furniture, decor, or people | 1 |
| Exactly one window | 1 |
| Window on the north wall (right-hand side looking west) | 1 |
| Window has a 12-pane grid | 0.5 |
| Window about 12 ft wide and 8 ft tall, sill about 2.5 ft up | 1 |
| Brick on the south wall only (left-hand side) | 1 |
| East, west, and north walls are flat white drywall | 1 |
| Painted baseboard about 6 in. on the white walls | 1 |
| Exposed timber beams visible, ceiling reads about 12 ft | 1 |
| Beams run north-south at about 4 ft spacing | 0.5 |
| Black conduit along the beams | 1 |
| Polished light grey concrete with trowel marks and hairline cracks | 1 |
| Two copper supply stubs on the south brick wall | 1 |
| Capped drain stub on the south wall | 0.5 |
| Stubs sit about 6 in. above the floor | 0 |
| Stubs about 30 in. from the east wall | 0.5 |
| Exposed outlet box beside the stubs | 0.5 |
| Neutral-cool overcast daylight, soft shadows, no direct sun | 1 |
| Not golden hour, no orange cast | 1 |
| 5-ft eye-level viewpoint | 1 |
| Wide-angle (about 24 mm) perspective | 1 |
| Straight verticals | 1 |
| 3:2 aspect ratio (1536 x 1024) | 1 |
| Orientation matches shot B1 (brick left, window right, white west wall at the far end) | 1 |
| No door visible in a view looking west | 1 |

Misses and the prompt patch each one calls for (not yet regenerated):

| Miss | Patch line |
| --- | --- |
| Window reads about 20 panes | `Window grid: exactly 12 panes, 4 columns by 3 rows.` |
| Primary beams run along the room | `Primary timber beams run north-south, crosswise across the room from left to right as seen from the east wall. No beams run along the length of the room.` |
| Supply stubs about 3 ft up the wall | `All three stubs sit low, 6 inches above the floor at baseboard height, none at waist height.` |
| Drain and outlet read loosely | `The drain is a short capped pipe rising 6 inches from the floor. The outlet is a surface-mounted metal box.` |
