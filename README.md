# CSS Centering Techniques — Classroom Demo Platform

An interactive reference tool for teaching the many ways to centre an element in CSS.
Students browse 72 practical, dimension-independent techniques, edit live code in a built-in
editor, and copy any snippet directly to their own projects.

Based on the reference catalogue at [css-generators.com/center/](https://css-generators.com/center/).

---

## Contents

1. [Quick Start](#quick-start)
2. [Feature Guide](#feature-guide)
3. [Teaching Notes](#teaching-notes)
   - [Why centring is hard — and getting easier](#why-centring-is-hard--and-getting-easier)
   - [Category 1 — Grid](#category-1--grid)
   - [Category 2 — Flexbox](#category-2--flexbox)
   - [Category 3 — Block](#category-3--block)
   - [Category 4 — Position: Relative](#category-4--position-relative)
   - [Category 5 — Position: Relative + Inset](#category-5--position-relative--inset)
   - [Category 6 — Position: Absolute](#category-6--position-absolute)
   - [Category 7 — Position: Fixed](#category-7--position-fixed)
   - [Category 8 — Container Query](#category-8--container-query)
4. [What is NOT included, and why](#what-is-not-included-and-why)
5. [Suggested Classroom Activities](#suggested-classroom-activities)
6. [Curriculum Mapping](#curriculum-mapping)
7. [Technical Notes](#technical-notes)
8. [License](#license)

---

## Quick Start

Prerequisites: [Node.js](https://nodejs.org/) 18 or later.

```bash
# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

To build a deployable version for a school web server:

```bash
npm run build
# Output is in the dist/ folder
```

---

## Feature Guide

### Browsing techniques

The main page shows all 72 techniques as cards in a responsive grid. Each card shows:

- **Category badge** — colour-coded to the technique's CSS approach.
- **Technique number** — matches the numbering in the source reference.
- **Title** — a short descriptive name.
- **Description** — one or two sentences explaining *why* the technique works.

### Filtering by category

The row of buttons at the top filters the grid to a single category. Useful when teaching
a specific layout module (e.g. "today we're looking at Flexbox — let's filter to those 12
techniques").

### The live editor (modal)

Clicking **Open Editor** on any card opens a full-screen modal containing:

| Panel | Purpose |
|---|---|
| **HTML tab** | The markup for the demo — a `.container` wrapping a `.item`. |
| **CSS tab** | Complete CSS including base sizing styles *and* the technique properties. A `/* technique */` comment marks exactly which lines do the centring. |
| **Preview pane** | A sandboxed live preview that updates as you type. |
| **Copy HTML / Copy CSS** | Copies the current editor content to the clipboard. |

Students can experiment freely — the modal always opens with the original code and
changes are discarded when it is closed.

> **Classroom tip:** Project the modal on a screen and invite students to take turns
> editing the code. Ask "what happens if we remove that line?" before deleting it.

---

## Teaching Notes

### Why centring is hard — and getting easier

For most of the web's history, CSS was designed for document layout, not application
layout. Centring *horizontally* was straightforward for block elements (`margin: auto`),
but centring *vertically* required hacks: absolute positioning with negative margins,
table-cell tricks, or line-height manipulations.

Modern CSS layout modules — Grid (2017), Flexbox (widespread ~2015), and Container
Queries (2023) — finally gave developers tools designed explicitly for two-dimensional
layout. The result is that the "best" answer to "how do I centre this?" has changed
significantly in recent years, and teachers should help students understand *which era*
a technique comes from and *when* they would reach for it today.

**Key mental model to establish early:**

> Every centring technique needs to answer two questions:
> 1. What makes the element the *right size* (so it doesn't just fill the container)?
> 2. What puts the *remaining space* equally on both sides?

---

### Category 1 — Grid

**Techniques #1–8 | Difficulty: ★☆☆☆☆**

#### Core concept

CSS Grid is a two-dimensional layout system. Even with a single child element, Grid gives
the parent complete control over how space is distributed around that child.

#### Key properties

| Property | What it does |
|---|---|
| `display: grid` | Activates grid layout on the container. |
| `place-content: center` | Shorthand for `align-content` + `justify-content`. Centres the *grid tracks* within the container. |
| `place-items: center` | Shorthand for `align-items` + `justify-items`. Centres each item *within its cell*. |
| `place-self: center` | Applied to the child. Centres it within its own cell without touching the container. |
| `margin: auto` | Inside a grid, absorbs all available free space equally on each side. |

#### Teaching progression

Start with **#1 (`place-content: center`)** — one rule, both axes, done. Then compare
with **#5 (`place-self: center`)** to show that the child can take responsibility for its
own alignment. This distinction between *container-side* and *item-side* alignment is
fundamental and recurs in every layout module.

Techniques **#7** and **#8** (explicit grid tracks / named lines) are good extension
material: they show how Grid can be used architecturally — laying out the whole page
structure — rather than just centring a single element.

#### Common misconceptions

- Students sometimes think `place-content` and `place-items` are interchangeable. They
  are not: `place-content` distributes *tracks*, `place-items` distributes *within cells*.
  With a single item the result looks the same — use technique #4 vs #1 to show the
  visual difference is invisible here, then explain when it would matter with multiple items.
- `margin: auto` on a grid child (**#6**) surprises students who associate `auto` margins
  with horizontal block-level centring only. Emphasise that *grid* changes the rules.

#### Browser support

Grid is supported in all modern browsers (Chrome 57+, Firefox 52+, Safari 10.1+,
Edge 16+). Safe to use without fallbacks for any current audience.

---

### Category 2 — Flexbox

**Techniques #9–20 | Difficulty: ★☆☆☆☆**

#### Core concept

Flexbox is a *one-dimensional* layout system — it aligns items along a single axis (row
or column). Centring in two dimensions requires combining a *main-axis* property with a
*cross-axis* property.

#### Key properties

| Property | Axis | Applied to |
|---|---|---|
| `justify-content` | Main (horizontal in row) | Container |
| `align-items` | Cross (vertical in row) | Container |
| `align-self` | Cross | Individual child |
| `flex-wrap: wrap` | Enables `place-content` | Container |
| `margin: auto` | Both, if space is available | Child |

#### Teaching progression

**#9** (`align-items: center; justify-content: center`) is typically the first flexbox
centering students encounter and is worth spending time on. Spend a lesson on the
*main axis vs cross axis* concept before introducing it.

Use **#15** (`margin: auto` on the child) to challenge students: "Can you centre without
touching `justify-content` at all?" This deepens understanding of how free space is
distributed.

Techniques **#19** and **#20** (pseudo-element spacers) are a useful historical artefact —
they show a technique that was popular before `justify-content` was widely supported, and
are good for discussing *why* properties exist and how the language has evolved.

#### Common misconceptions

- Students often set `justify-content: center` on *column-direction* flex containers and
  wonder why horizontal centring doesn't work — because `justify-content` always follows
  the *main axis*, which is vertical in a column layout. Use the editor to change
  `flex-direction: column` and observe the behaviour shift.
- `place-content` (**#12–14**) only works for two-dimensional distribution when
  `flex-wrap: wrap` is set. Without it, `place-content` only applies to the cross axis.
  Demonstrate by removing `flex-wrap: wrap` in the editor.

#### Browser support

Flexbox is supported universally. Safe to use everywhere.

---

### Category 3 — Block

**Techniques #21–30 | Difficulty: ★★☆☆☆**

#### Core concept

This category shows that `align-content` and `justify-items`/`justify-self` now work on
**normal block-layout containers** — no `display: grid` or `display: flex` required. This
is a relatively recent addition to CSS (Chrome 123+, Firefox 125+, Safari 17.4+).

#### Why this is significant for teaching

For students who have learned that "you need grid or flexbox to centre vertically", these
techniques are a genuine surprise. They demonstrate that CSS is a living language —
properties gain new powers over time without breaking old behaviour.

#### Teaching progression

**#21** (`align-content: center; justify-items: center`) is the headline technique. It
mirrors the Grid/Flexbox pattern students already know, applied to plain `display: block`.

Techniques **#27–30** explore different ways to control *horizontal* sizing before
applying `margin: auto`:
- `width: fit-content` — shrinks to the smallest size the content needs.
- `max-width: max-content` — prevents the element growing beyond its maximum content
  width while still allowing it to shrink.
- `display: table` — an older technique that makes a block element shrink-wrap.
- `display: inline-block` with `text-align: center` on the parent.

These four variants are excellent discussion material: "why do we need to control the
*width* at all?" leads to a conversation about how block elements default to `width: 100%`.

#### Common misconceptions

- `align-content` on a block has **no effect** in older browsers — students using older
  machines may see different results. Check browser support before a lesson and use it
  as a teaching moment about progressive enhancement.

#### Browser support

`align-content` on block: Chrome 123+, Firefox 125+, Safari 17.4+. Suitable for
modern projects; add a note about the recency when teaching.

---

### Category 4 — Position: Relative

**Techniques #31–40 | Difficulty: ★★★☆☆**

#### Core concept

These techniques use `position: relative` on the child element to shift it away from its
normal position using `top`, `left`, `right`, or `inset` properties combined with the
CSS `translate` property.

The fundamental pattern:

```css
.item {
  position: relative;
  top: 50%;          /* move top edge to the container midpoint */
  translate: 0 -50%; /* shift back up by half the item's own height */
}
```

#### Why it works

`top: 50%` is relative to the *parent's* height. `translate: 0 -50%` is relative to
the *element's own* height. Together they place the element's centre at the parent's
centre — without needing to know either dimension in advance.

#### Teaching progression

**#31** is the "classic" relative-position centering technique and is worth teaching as
a stepping stone, even if Grid/Flexbox are now preferred. Understanding *why* this works
builds intuition for how percentage values relate to different reference boxes.

Techniques **#35–40** combine vertical centring via `align-content: center` (on the
container) with horizontal shifting via `left`/`right` + `translate`. The four horizontal
width-control strategies (`inline-block`, `table`, `fit-content`, `max-content`) appear
again — a good opportunity to consolidate that concept.

#### Key distinction: `transform` vs `translate`

The CSS `translate` property (used here) is a standalone property introduced in CSS
Transforms Level 2. It is equivalent to `transform: translateX() translateY()` but
easier to read and compose. Both are supported in all modern browsers.

#### Common misconceptions

- `top: 50%` alone does **not** centre the element — it moves the *top edge* to 50%.
  The element then extends *downwards* from that point, so it appears below centre.
  Use the editor to remove the `translate` line and observe the result.
- Using `transform: translate(-50%, -50%)` (the older equivalent) achieves the same
  result — students may encounter this in tutorials online. The techniques here use the
  modern `translate` shorthand.

---

### Category 5 — Position: Relative + Inset

**Techniques #41–46 | Difficulty: ★★★☆☆**

#### Core concept

The `inset` shorthand sets `top`, `right`, `bottom`, and `left` simultaneously. These
techniques use `inset: 50% 0 0 50%` to place the element's *top-left corner* at the
container's centre point, then use `translate: -50% -50%` to shift it back by half its
own width and height.

```css
.item {
  position: relative;
  inset: 50% 0 0 50%;    /* top-left corner → container centre */
  translate: -50% -50%;  /* shift back by half own dimensions */
}
```

#### Teaching progression

Present this *after* Category 4. It is a more compact way to express the same idea —
both `top` and `left` in a single property. Good for discussing the `inset` shorthand
as a general concept (it also works on absolutely positioned elements).

Techniques **#41–46** then vary the width-control strategy, repeating the `inline-block`,
`table`, `fit-content`, `max-content`, `float: left`, `float: right` pattern. By this
point students should recognise the pattern and be able to predict what each variant will do.

---

### Category 6 — Position: Absolute

**Techniques #47–53 | Difficulty: ★★★☆☆**

#### Core concept

Absolutely positioned elements are removed from the normal document flow and positioned
relative to their nearest *positioned ancestor* (an ancestor with `position` set to
anything other than `static`). The container is given `position: relative` to become
that anchor.

#### The `inset: 0` + `margin: auto` pattern

Techniques **#47–49** use a pattern worth teaching explicitly:

```css
.container { position: relative; }
.item {
  position: absolute;
  inset: 0;                 /* stretch to fill the container */
  width: fit-content;
  height: fit-content;
  margin: auto;             /* distribute remaining space equally */
}
```

`inset: 0` means `top: 0; right: 0; bottom: 0; left: 0` — the browser tries to make the
element fill its containing block. When `width` and `height` are constrained (to
`fit-content`), the browser instead distributes the *leftover space* equally via
`margin: auto`. This is a reliable, readable pattern supported in all browsers.

#### The 50% + translate pattern (absolute)

Techniques **#50–53** apply the same shift-and-correct approach as Category 4, but from
each of the four corners. These are useful for demonstrating how `inset` values map to
each corner — a good visual exercise.

#### Common misconceptions

- Students sometimes set `position: absolute` on the item without `position: relative`
  on the parent. The item then positions relative to the viewport or the next positioned
  ancestor up the tree, which is rarely what is intended. Use the editor to remove
  `position: relative` from `.container` and observe the result.
- `inset: 0` does **not** stretch the element to fill its parent unless the element is
  absolutely (or fixed) positioned. On a regular element it has no such effect.

---

### Category 7 — Position: Fixed

**Techniques #54–60 | Difficulty: ★★★★☆**

#### Core concept

Normally, `position: fixed` positions an element relative to the **viewport** — the
browser window. These techniques use the less well-known `contain: layout` property to
*scope* a fixed element so it behaves as if it were absolutely positioned relative to
its container.

```css
.container { contain: layout; }
.item      { position: fixed; inset: 0; place-self: center; }
```

#### Why `contain: layout`?

CSS Containment (`contain`) is a performance and scoping mechanism. `contain: layout`
tells the browser:

> "This element's layout is self-contained. Nothing inside affects the layout of
> things outside, and vice versa."

A side effect of layout containment is that it creates a new *containing block* for
fixed-position descendants — the same way that `transform`, `filter`, or
`will-change` do. So the fixed child is positioned relative to the container, not the
viewport.

#### Teaching notes

This category is best suited to **advanced/extension students** (T-Level, Higher
National). The behaviour is surprising and non-obvious. Good discussion questions:
- "Why would we use `position: fixed` inside a container at all?"
- "What other CSS properties accidentally create a fixed-position scope?"
- "What are the performance implications of `contain: layout`?"

#### Common misconceptions

- Students may expect `position: fixed` to always be relative to the viewport. This is
  correct in *most* contexts — but several CSS properties, including `contain: layout`,
  `transform`, `filter`, `perspective`, `will-change`, and `backdrop-filter`, override
  this behaviour.

#### Browser support

`contain: layout`: Chrome 52+, Firefox 69+, Safari 15.4+. Modern but not universal —
worth noting in lessons.

---

### Category 8 — Container Query

**Techniques #61–72 | Difficulty: ★★★★★**

#### Core concept

Container Queries allow CSS rules to respond to the size of an *element's container*
rather than the viewport. Enabling them with `container-type: size` also activates
**container query length units**:

| Unit | Meaning |
|---|---|
| `cqi` | 1% of the container's *inline* size (typically width) |
| `cqb` | 1% of the container's *block* size (typically height) |

These units make it possible to centre an element without knowing its dimensions *or*
the container's dimensions in advance.

#### The `calc(50cqi - 50%)` pattern

The headline pattern in this category is:

```css
.container { container-type: size; }
.item      { translate: calc(50cqi - 50%) calc(50cqb - 50%); }
```

Breaking this down:
- `50cqi` = half the container's width → moves the item's left edge to the centre.
- `50%` (in translate) = half the item's own width → shifts it back left to true centre.
- The `calc()` expression combines both steps into a single `translate` value.

This is arguably the most *mathematically elegant* centring technique in the collection
and a good opportunity to discuss how CSS functions compose.

#### The pseudo-element strut patterns (#61, #62)

Techniques **#61** and **#62** use a `::before` pseudo-element to create an invisible
*reference element* with a height equal to the container (`100cqb`). The real item then
centres itself relative to this strut using `vertical-align: middle`. This is a
container-query-era version of the old `line-height` trick.

#### Teaching notes

Container Queries are the newest technique category — suitable as **enrichment/extension
material** for the most advanced students, or as a "this is where CSS is heading" lesson
for a T-Level cohort. Key takeaways:

1. `container-type: size` is the enabler — without it, `cqi`/`cqb` units are zero.
2. Container query units let you express position as a function of the container rather
   than the viewport — a fundamentally different mental model from media queries.
3. Techniques #71 and #72 combine container queries with absolute/fixed positioning —
   the culmination of concepts from all previous categories.

#### Browser support

Container Queries: Chrome 105+, Firefox 110+, Safari 16+. Modern browsers only. Always
check [caniuse.com](https://caniuse.com/css-container-queries) before using in
production.

---

## What is NOT included, and why

The source reference at css-generators.com/center/ includes 100 techniques total. This
application deliberately **excludes techniques #73–100**, which require hard-coded pixel
values for either the element's dimensions (`200px × 100px`) or the container's
dimensions (`300px` height, `400px` width).

These were excluded because:

1. **They are not reusable** — changing the content or container breaks the centring.
2. **They teach bad habits** — students should learn dimension-independent techniques
   from the outset.
3. **They have been superseded** — every problem they solved is now solved more cleanly
   by Grid, Flexbox, or `fit-content`.

When a student asks "why can't I just use `margin-top: -50px`?", this distinction is a
teaching opportunity: explain the difference between *hard-coding a value you happen to
know today* and *writing CSS that adapts to any content or viewport*.

---

## Suggested Classroom Activities

### Activity 1 — Spot the technique (all levels)

Display a webpage or design screenshot on the projector. Ask students: "How do you think
that element was centred?" Then use the filter buttons to find likely candidates and open
the editor to verify.

### Activity 2 — Edit and break (all levels)

Open any technique in the editor. Ask students to predict what will happen when you:
- Remove a single CSS property
- Change `center` to `flex-start`
- Increase the item's padding significantly
- Add a second `.item` element to the HTML

Run each experiment and discuss the results.

### Activity 3 — The Great Centring Debate (Level 3)

Divide the class into groups. Each group must argue that their assigned category is the
*best* way to centre elements in modern web development. Groups present their case;
the class votes. Debrief by discussing the real answer: *it depends on context*.

### Activity 4 — Code translation (Level 3 / T-Level)

Students are given a printed list of 10 techniques without names. They must:
1. Identify which category each belongs to.
2. Predict the output before opening the editor.
3. Find the equivalent in the app and verify.

### Activity 5 — Browser compatibility audit (T-Level)

Students research the browser support for each category using MDN Web Docs and
caniuse.com. They produce a one-page reference table mapping technique to browser
support date. Discuss the implications for a project that must support older browsers.

### Activity 6 — Build a component (all levels)

Students recreate a common UI pattern (hero section, card, navigation bar, modal
dialogue) using only techniques from this tool. They must document which technique they
chose and justify the choice.

---

## Curriculum Mapping

| Technique Category | NCFE Level 2 | BTec Level 3 | T-Level |
|---|---|---|---|
| Grid | Core | Core | Core |
| Flexbox | Core | Core | Core |
| Block (modern) | Awareness | Core | Core |
| Position: Relative | Core | Core | Core |
| Position: Relative + Inset | Awareness | Core | Core |
| Position: Absolute | Awareness | Core | Core |
| Position: Fixed + contain | — | Awareness | Core |
| Container Query | — | Enrichment | Core |

*Core = expected to understand and apply; Awareness = exposure and recognition;
Enrichment = extension material; — = beyond scope.*

---

## Technical Notes

The application is a standard **React + Vite** single-page application. No backend or
login is required — it runs entirely in the browser.

### Project structure

```
css2/
├── public/
│   └── exeter_logo.svg        ← college logo (served at /exeter_logo.svg)
├── src/
│   ├── data/
│   │   └── techniques.js      ← all 72 technique definitions
│   ├── components/
│   │   ├── CategoryFilter.jsx ← filter button row
│   │   ├── MiniCodepen.jsx    ← tabbed editor + iframe preview
│   │   └── TechniqueCard.jsx  ← card + modal launcher
│   ├── App.jsx                ← root component, filter state
│   ├── App.css                ← all component styles
│   └── index.css              ← reset and global base styles
├── index.html
└── package.json
```

### Adding or editing a technique

All technique data is in `src/data/techniques.js`. Each entry follows this shape:

```js
{
  id: 1,                         // unique number
  title: 'Grid: place-content center',
  category: 'Grid',              // must match a key in CATEGORY_COLORS
  description: 'One sentence explaining why this works.',
  html: `<div class="container">\n  <div class="item">Centered</div>\n</div>`,
  css: `...`,                    // full CSS shown in the editor
}
```

The `css` helper function at the top of the file assembles the CSS from base styles
plus technique-specific additions. A `/* technique */` comment marks where the
centering logic begins in each generated CSS block.

### Deploying to a school web server

```bash
npm run build
```

Copy the contents of `dist/` to any static web server (Apache, Nginx, IIS). No
server-side processing is needed.

### Modifying the colour scheme

The Exeter College brand colour (`#00a2d3`) is used throughout `App.css`. To change
the primary colour, search-and-replace `#00a2d3` in that file.

---

## License

Copyright &copy; 2025 Simon Rundell / Exeter College

Released under the
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

You are free to:
- **Share** — copy and redistribute the material in any medium or format.
- **Adapt** — remix, transform, and build upon the material.

Under the following terms:
- **Attribution** — you must give appropriate credit, provide a link to the licence, and
  indicate if changes were made.
- **NonCommercial** — you may not use the material for commercial purposes.
- **ShareAlike** — if you remix, transform, or build upon the material, you must
  distribute your contributions under the same licence.

Technique content and reference data based on
[css-generators.com/center/](https://css-generators.com/center/), used for educational purposes.
