# Interior Design Brief Template

Fill this in once per project. Reuse it verbatim in every image prompt so rooms, materials, and light stay consistent. Change only the camera line between views.

### [Project Name / Concept Title]

#### 1. Fixed Facts (Ground Truth)
* **Dimensions & Layout:** [e.g., Studio loft, 16x20 ft]
* **Ceiling & Architecture:** [e.g., 12-ft timber-beam ceiling, large factory window facing North]
* **Walls & Flooring:** [e.g., Original exposed red brick, polished concrete floors]
* **Openings & Services:** [door and window positions measured from a named corner; plumbing and electrical locations]
* **Source:** [floor plan upload, measured, or assumed. Mark each fact `[plan]`, `[calc]`, or `[assumed]`]

#### 2. Style Ratio
* **Breakdown:** [e.g., 70% Mid-Century Modern, 20% Western Americana, 10% Industrial]

#### 3. Palette Tied to Light
* **Light Adaptation:** [e.g., Countering cool North light with warm earth tones: burnt sienna, cognac, aged brass]

#### 4. Key Pieces (Material + Placement)
* **Seating:** [e.g., Cognac top-grain leather sofa against the brick wall]
* **Textiles:** [e.g., Brown-and-white cowhide rug layered under the coffee table]
* **Lighting & Decor:** [e.g., Matte black iron arc lamp arching over seating zone]

#### 5. Constraints and Exclusions
* **Constraints:** [e.g., Renter-friendly, moderate budget]
* **Exclusions:** [e.g., No faux-rustic clutter, no chrome finishes]

#### 6. Output Specification
* **Image Prompt Specs:** [e.g., 5-foot eye-level height, wide angle, late afternoon golden hour]
* **Text Brief Format:** [e.g., Room zones + markdown shopping table]

---

## Starting from a floor plan

If you have a floor plan, blueprint, survey, or CAD export (image or PDF), upload it and extract the Fixed Facts from it instead of typing them.

1. **Set the scale.** Use a scale bar, a stated scale, or one labeled dimension. Never infer scale from furniture. If none exists, supply one known dimension.
2. **Extract the facts.** Room dimensions, wall positions and thickness, door and window positions from a named corner, widths and door swing, ceiling height (often missing, so check sections and notes), plumbing, outlets, panels, columns, beams, stairs, built-ins, north arrow, and finishes from the legend.
3. **Label every fact** as `[plan]` (read directly), `[calc]` (derived), or `[assumed]` (not on the plan). Ask only for what is critical and missing: north orientation, ceiling height, window sill height, which wall is brick.
4. **Cross-check.** Dimensions add up, openings fit their walls, the scale is consistent, and the plan agrees with the written description. Resolve conflicts before anything is generated.
5. **Set one coordinate system.** Pick an origin corner and axes and use them for every piece and every camera. Write each camera as a position, a look direction, and which wall is on the left and right.
6. **Convert to text.** Put the confirmed facts into the shell prompt in words. Image models do not follow drawn plans reliably, so the plan is the source of geometry, not an image reference.
7. **Lock it.** Changing a fixed fact later, such as adding a sink that needs plumbing, means updating the shell and regenerating the "before" images.
8. **Redact before publishing.** Plans can carry addresses, names, and permit numbers.

This project's shell was specified from a written description, not a drawing.

## Rules that made the prompts reliable

- **Lock the shell first.** Generate the empty room, then reuse its architecture block word for word.
- **Write material and placement, not nouns.**
- **Spell out orientation.** Say which wall is on the left and right and what is behind the camera.
- **Name what must not appear.** Add a negative line for every failure you see.
- **One image per generation.** Use the first good image as a reference for the other views.
- **Audit, then patch.** Score each render against the brief and turn each defect into a prompt line.
