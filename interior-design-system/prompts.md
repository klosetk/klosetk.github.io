# Prompts

Every prompt follows the same four-part structure: **Architecture & Ground Truth**, **Style Ratio & Core Pieces**, **Color Palette & Lighting**, **Camera & Output Specs**.

## "Before": locked empty shell

Paste this block at the start of every "before" prompt.

```
Architecture & Ground Truth: Empty 16x20 ft open studio loft, 12 ft ceiling with exposed rough-sawn timber beams running north-south at 4 ft spacing. North wall: one large black steel-framed factory window, 12 ft wide x 8 ft tall, 12-pane grid, sill 2.5 ft above floor. South wall: original red brick, uneven mortar, soft patina. East and west walls: matte white painted drywall, 6-inch painted baseboard. Floor: polished concrete, light grey, subtle trowel marks and hairline cracks. Black conduit along the ceiling beams. Two capped copper water supply stubs and one capped drain stub emerge from the south brick wall about 30 inches from the east wall, 6 inches above the floor, with one exposed outlet box beside them. Completely empty, no furniture, no decor, no people.

Palette & Lighting: Cool, diffuse north daylight (about 6500K) through the window, 10:30 AM, soft shadows with no direct sun. Brick reads warm against the cool light.

Camera & Output: 5-foot eye-level camera, 24mm full-frame wide-angle lens, f/8, vertical lines kept straight, hyper-realistic textures, architectural editorial photography, 3:2 aspect ratio.
```

Shot lines (add one to the block):

- **B1, entry view:** `Camera position: standing at the east door, looking west. Brick wall on the left, window wall on the right, white west wall at the far end.`
- **B2, brick view:** `Camera position: standing 2 ft from the window wall, looking south. Brick wall fills the frame, ceiling beams visible overhead.`
- **B3, window view:** `Camera position: standing 2 ft from the brick wall, looking north. The factory window is centered and the light falls across the concrete.`

The capped plumbing stubs were added to the shell when a kitchenette replaced a console, because a sink is a fixed fact that has to exist in the "before" image too.

## "After": final prompt (v3)

```
Architecture & Ground Truth: 16x20 ft open studio loft, 12 ft ceiling with exposed rough-sawn timber beams at 4 ft spacing and black ceiling conduit. Exactly ONE window in the whole room: the 12-pane black steel window on the north wall, 12 ft wide x 8 ft tall. Only door is on the east wall, never visible in shots looking west. Brick appears ONLY on the south wall; east, west and north walls are flat white drywall with 6-inch baseboard. Floor: polished light grey concrete.

Style Ratio & Core Pieces: 60% Mid-Century Modern, 25% Industrial, 15% Western Americana. Kitchenette along the south brick wall at the east end: 60-inch walnut-fronted base run, black steel pulls, honed charcoal counter, matte black bar sink with gooseneck faucet, matte black 24-inch under-counter fridge, plug-in two-burner induction cooktop, one turquoise ceramic vessel; bare brick above, no upper cabinets, no open shelving. Living zone: 84-inch cognac top-grain leather sofa with walnut legs centered on the brick wall facing the window, 3 solid pillows (two oatmeal, one burnt sienna); 48-inch walnut slab coffee table with black steel base holding one low brass bowl; tightly woven natural oatmeal wool flat-weave rug, flat pile, no jute texture, with a brown-and-white cowhide layered on top; one saddle-tan leather sling chair with walnut frame at each end of the coffee table, angled 30 degrees toward the sofa; matte black iron arc floor lamp arching over the sofa's east end. Dining: 42-inch round walnut pedestal table with two black steel and saddle-leather chairs at the east end of the window. Sleeping zone at the west end: low walnut platform bed, headboard on the west wall, oatmeal linen, burnt-sienna throw, one small walnut bedside table with an aged-brass lamp, rust-and-sand abstract canvas above the bed, 5-foot open walnut and black steel shelf divider with only a few objects, offset from the bed's foot. One 7-foot olive tree in a matte black planter at the west end of the north wall. Curated and sparse. No stainless or chrome, no faux-rustic decor, no barn wood, no animal skulls, no pouf, no books, no striped patterns.

Color Palette & Lighting: neutral-cool daylight white balance (~6000-6500K) on concrete and white walls, bright overcast 10:30 AM. Only the arc lamp and brass lamp cast small 2700K warm pools. Not golden hour, no orange color cast. Warm cognac, burnt sienna, saddle tan, oatmeal, walnut, aged brass.

Camera & Output Specs: 5-foot eye-level, 24mm full-frame wide-angle, f/8, straight verticals, ceiling beams visible, hyper-realistic leather, walnut and brick texture, architectural editorial photography, 3:2. One image per generation.
```

Shot lines (same camera positions as the "before" shots):

- **A1:** `Camera at the east wall looking west. Brick wall and kitchenette on the LEFT, window wall on the RIGHT, bed zone at the far end.`
- **A2:** `Camera 2 ft from the north window wall looking south. Kitchenette at the LEFT edge (east), sofa centered, shelf divider and olive tree at the RIGHT edge (west).`
- **A3:** `Camera 2 ft from the brick wall looking north. Window centered, dining table at the RIGHT (east), arc lamp and olive tree at the LEFT (west).`

Generate A1 first, then use it as a reference image for A2 and A3.

## What changed between versions

| Version | Change | Reason |
| --- | --- | --- |
| v1 | Three views requested in one collage | Model reinvented the room per panel. Second window, visible door, brick on the wrong wall, dusk lighting, jute rug, and extra decor all appeared |
| v2 | One image per generation. Added "exactly ONE window," door and brick rules, neutral-cool white balance, flat wool rug, a curation list, and explicit left/right orientation | Fix each defect found in the v1 audit |
| v3 | Console replaced with a kitchenette, brass lamp moved to the bedside, sling chairs set to flank the table | The audit found a table lamp and floor lamp stacked at one end and a console with no purpose |
