/**
 * CSS Centering Techniques - demonstration data
 * Based on https://css-generators.com/center/
 *
 * Contains 72 dimension-independent (good) centering techniques.
 * Dimension-dependent techniques (requiring hard-coded px values) are excluded.
 *
 * @license CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
 * @author Simon Rundell
 */

/** Base visual styles applied to the container in every demo */
const BC = `  width: 300px;
  height: 200px;
  background: #e6f7fc;
  border: 2px dashed #00a2d3;`;

/** Base visual styles applied to the centred item in every demo */
const BI = `  background: #00a2d3;
  color: white;
  padding: 10px 20px;
  font-family: sans-serif;
  font-size: 14px;
  border-radius: 4px;`;

/** Default HTML used by most techniques */
const H = `<div class="container">
  <div class="item">Centered</div>
</div>`;

/**
 * Assembles a complete CSS string for a technique.
 * @param {string} cExtra - Technique-specific .container properties (2-space indented)
 * @param {string} iExtra - Technique-specific .item properties (2-space indented)
 * @param {string} extra  - Any additional rules (pseudo-elements, etc.)
 * @returns {string}
 */
function css(cExtra = '', iExtra = '', extra = '') {
  let c = `.container {\n${BC}`;
  if (cExtra) c += `\n  /* technique */\n${cExtra}`;
  c += `\n}`;

  let i = `.item {\n${BI}`;
  if (iExtra) i += `\n  /* technique */\n${iExtra}`;
  i += `\n}`;

  return [c, i, extra].filter(Boolean).join('\n\n');
}

/** All 72 recommended CSS centering techniques */
export const techniques = [

  // ─── GRID ────────────────────────────────────────────────────────────────

  {
    id: 1,
    title: 'Grid: place-content center',
    category: 'Grid',
    description: 'place-content is a shorthand for both align-content and justify-content. A single property centres content on both axes in a grid container.',
    html: H,
    css: css('  display: grid;\n  place-content: center;'),
  },
  {
    id: 2,
    title: 'Grid: place-content space-around',
    category: 'Grid',
    description: 'space-around distributes equal space around each grid track. With a single child, the equal space on each side effectively centres it.',
    html: H,
    css: css('  display: grid;\n  place-content: space-around;'),
  },
  {
    id: 3,
    title: 'Grid: place-content space-evenly',
    category: 'Grid',
    description: 'space-evenly places equal space between all items and container edges. With one child this visually centres the element.',
    html: H,
    css: css('  display: grid;\n  place-content: space-evenly;'),
  },
  {
    id: 4,
    title: 'Grid: place-items center',
    category: 'Grid',
    description: 'place-items is a shorthand for align-items + justify-items. It centres each grid item within its own grid cell on both axes.',
    html: H,
    css: css('  display: grid;\n  place-items: center;'),
  },
  {
    id: 5,
    title: 'Grid: place-self center (on child)',
    category: 'Grid',
    description: 'Applied to the child element, place-self centres it within its grid cell without any change to the container. Useful when you cannot modify the parent.',
    html: H,
    css: css('  display: grid;', '  place-self: center;'),
  },
  {
    id: 6,
    title: 'Grid: margin auto (on child)',
    category: 'Grid',
    description: 'Inside a grid container, margin: auto on a child absorbs all available free space equally on every side, pushing the item to the centre.',
    html: H,
    css: css('  display: grid;', '  margin: auto;'),
  },
  {
    id: 7,
    title: 'Grid: 1fr auto 1fr rows and columns',
    category: 'Grid',
    description: 'Defines a 3×3 grid where outer rows/columns are fractional spacers. The item is placed in the centre cell at grid-area: 2 / 2.',
    html: H,
    css: css(
      '  display: grid;\n  grid: 1fr auto 1fr / 1fr auto 1fr;',
      '  grid-area: 2 / 2;',
    ),
  },
  {
    id: 8,
    title: 'Grid: named grid lines [x]',
    category: 'Grid',
    description: 'Both centre grid lines are named [x]. The item uses grid-area: x to target the named centre cell without knowing its position number.',
    html: H,
    css: css(
      '  display: grid;\n  grid: 1fr [x] auto [x] 1fr / 1fr [x] auto [x] 1fr;',
      '  grid-area: x;',
    ),
  },

  // ─── FLEXBOX ─────────────────────────────────────────────────────────────

  {
    id: 9,
    title: 'Flex: align-items + justify-content center',
    category: 'Flexbox',
    description: 'The classic flexbox pairing. align-items centres on the cross axis (vertical in a row flex); justify-content centres on the main axis (horizontal).',
    html: H,
    css: css('  display: flex;\n  align-items: center;\n  justify-content: center;'),
  },
  {
    id: 10,
    title: 'Flex: align-items + justify-content space-around',
    category: 'Flexbox',
    description: 'Centred vertically by align-items. Horizontally, space-around puts equal space either side of the single item, visually centering it.',
    html: H,
    css: css('  display: flex;\n  align-items: center;\n  justify-content: space-around;'),
  },
  {
    id: 11,
    title: 'Flex: align-items + justify-content space-evenly',
    category: 'Flexbox',
    description: 'Centred vertically by align-items. Horizontally, space-evenly distributes equal space between edges and the item.',
    html: H,
    css: css('  display: flex;\n  align-items: center;\n  justify-content: space-evenly;'),
  },
  {
    id: 12,
    title: 'Flex-wrap: place-content center',
    category: 'Flexbox',
    description: 'flex-wrap: wrap enables the place-content shorthand to work as a true 2D centering property in a flex container.',
    html: H,
    css: css('  display: flex;\n  flex-wrap: wrap;\n  place-content: center;'),
  },
  {
    id: 13,
    title: 'Flex-wrap: place-content space-around',
    category: 'Flexbox',
    description: 'A wrapping flex container with place-content: space-around distributes space around the item on both axes.',
    html: H,
    css: css('  display: flex;\n  flex-wrap: wrap;\n  place-content: space-around;'),
  },
  {
    id: 14,
    title: 'Flex-wrap: place-content space-evenly',
    category: 'Flexbox',
    description: 'A wrapping flex container with place-content: space-evenly gives the item equal space on all sides.',
    html: H,
    css: css('  display: flex;\n  flex-wrap: wrap;\n  place-content: space-evenly;'),
  },
  {
    id: 15,
    title: 'Flex: margin auto (on child)',
    category: 'Flexbox',
    description: 'Inside a flex container, margin: auto on the child grabs all available free space equally on every side, centering the element.',
    html: H,
    css: css('  display: flex;', '  margin: auto;'),
  },
  {
    id: 16,
    title: 'Flex: justify-content center + align-self center',
    category: 'Flexbox',
    description: 'justify-content: center on the container handles horizontal centering. align-self: center on the child handles vertical centering independently.',
    html: H,
    css: css('  display: flex;\n  justify-content: center;', '  align-self: center;'),
  },
  {
    id: 17,
    title: 'Flex: justify-content space-around + align-self center',
    category: 'Flexbox',
    description: 'Horizontal space-around distribution from the container. Vertical centering by align-self on the child element.',
    html: H,
    css: css('  display: flex;\n  justify-content: space-around;', '  align-self: center;'),
  },
  {
    id: 18,
    title: 'Flex: justify-content space-evenly + align-self center',
    category: 'Flexbox',
    description: 'Equal horizontal spacing from the container via space-evenly. The child centres itself vertically with align-self.',
    html: H,
    css: css('  display: flex;\n  justify-content: space-evenly;', '  align-self: center;'),
  },
  {
    id: 19,
    title: 'Flex: ::before and ::after spacers (align-items)',
    category: 'Flexbox',
    description: 'Two flex: 1 pseudo-elements act as equal-width spacers, pushing the real item to the horizontal centre. align-items: center handles vertical.',
    html: H,
    css: css(
      '  display: flex;\n  align-items: center;',
      '',
      `.container::before,\n.container::after {\n  content: "";\n  flex: 1;\n}`,
    ),
  },
  {
    id: 20,
    title: 'Flex: ::before and ::after spacers + align-self',
    category: 'Flexbox',
    description: 'Pseudo-element spacers centre the item horizontally. The child uses align-self: center to handle its own vertical centring independently.',
    html: H,
    css: css(
      '  display: flex;',
      '  align-self: center;',
      `.container::before,\n.container::after {\n  content: "";\n  flex: 1;\n}`,
    ),
  },

  // ─── BLOCK ───────────────────────────────────────────────────────────────

  {
    id: 21,
    title: 'Block: align-content + justify-items center',
    category: 'Block',
    description: 'Modern CSS allows align-content (vertical) and justify-items (horizontal) to work directly on block-layout containers — no flex or grid needed.',
    html: H,
    css: css('  align-content: center;\n  justify-items: center;'),
  },
  {
    id: 22,
    title: 'Block: align-content space-around + justify-items center',
    category: 'Block',
    description: 'align-content: space-around distributes vertical space around the item. justify-items: center centres it horizontally in a normal block container.',
    html: H,
    css: css('  align-content: space-around;\n  justify-items: center;'),
  },
  {
    id: 23,
    title: 'Block: align-content space-evenly + justify-items center',
    category: 'Block',
    description: 'Equal vertical spacing around the item via align-content: space-evenly. justify-items: center handles horizontal centering.',
    html: H,
    css: css('  align-content: space-evenly;\n  justify-items: center;'),
  },
  {
    id: 24,
    title: 'Block: align-content center + justify-self center (on child)',
    category: 'Block',
    description: 'The container handles vertical centring via align-content. The child element controls its own horizontal centering with justify-self.',
    html: H,
    css: css('  align-content: center;', '  justify-self: center;'),
  },
  {
    id: 25,
    title: 'Block: align-content space-around + justify-self center',
    category: 'Block',
    description: 'Vertical space-around distribution on the container, with the child using justify-self: center for horizontal centering.',
    html: H,
    css: css('  align-content: space-around;', '  justify-self: center;'),
  },
  {
    id: 26,
    title: 'Block: align-content space-evenly + justify-self center',
    category: 'Block',
    description: 'Equal vertical spacing from the container. The child uses justify-self: center to centre itself horizontally.',
    html: H,
    css: css('  align-content: space-evenly;', '  justify-self: center;'),
  },
  {
    id: 27,
    title: 'Block: align-content center + fit-content + margin auto',
    category: 'Block',
    description: 'align-content: center handles vertical. width: fit-content shrinks the item to its content width; margin: auto then centres it horizontally.',
    html: H,
    css: css('  align-content: center;', '  width: fit-content;\n  margin: auto;'),
  },
  {
    id: 28,
    title: 'Block: align-content center + max-content + margin auto',
    category: 'Block',
    description: 'align-content: center for vertical. max-width: max-content prevents the item stretching full-width; margin: auto centres it.',
    html: H,
    css: css('  align-content: center;', '  max-width: max-content;\n  margin: auto;'),
  },
  {
    id: 29,
    title: 'Block: align-content + text-align + inline-block',
    category: 'Block',
    description: 'align-content: center for vertical. text-align: center on the container with display: inline-block on the child centres it horizontally.',
    html: H,
    css: css('  align-content: center;\n  text-align: center;', '  display: inline-block;'),
  },
  {
    id: 30,
    title: 'Block: align-content + display table + margin auto',
    category: 'Block',
    description: 'align-content: center for vertical. display: table on the child shrinks it to content width; margin: auto centres it horizontally.',
    html: H,
    css: css('  align-content: center;', '  display: table;\n  margin: auto;'),
  },

  // ─── POSITION: RELATIVE ──────────────────────────────────────────────────

  {
    id: 31,
    title: 'Relative: top 50% + translate + inline-block',
    category: 'Position: Relative',
    description: 'top: 50% moves the item\'s top edge to the midpoint. translate: 0 -50% shifts it up by half its own height. text-align + inline-block handles horizontal.',
    html: H,
    css: css(
      '  text-align: center;',
      '  position: relative;\n  top: 50%;\n  translate: 0 -50%;\n  display: inline-block;',
    ),
  },
  {
    id: 32,
    title: 'Relative: top 50% + translate + fit-content',
    category: 'Position: Relative',
    description: 'top: 50% plus translate: 0 -50% centres vertically. width: fit-content shrinks the item; margin: auto centres it horizontally.',
    html: H,
    css: css(
      '',
      '  position: relative;\n  top: 50%;\n  translate: 0 -50%;\n  width: fit-content;\n  margin: auto;',
    ),
  },
  {
    id: 33,
    title: 'Relative: top 50% + translate + max-content',
    category: 'Position: Relative',
    description: 'The vertical-shift trick with max-width: max-content to prevent stretching, then margin: auto for horizontal centering.',
    html: H,
    css: css(
      '',
      '  position: relative;\n  top: 50%;\n  translate: 0 -50%;\n  max-width: max-content;\n  margin: auto;',
    ),
  },
  {
    id: 34,
    title: 'Relative: top 50% + translate + display table',
    category: 'Position: Relative',
    description: 'Vertical shift via top: 50% and translate. display: table shrinks the item to its content width; margin: auto centres horizontally.',
    html: H,
    css: css(
      '',
      '  position: relative;\n  top: 50%;\n  translate: 0 -50%;\n  display: table;\n  margin: auto;',
    ),
  },
  {
    id: 35,
    title: 'Relative: align-content + left 50% + translate + inline-block',
    category: 'Position: Relative',
    description: 'align-content: center handles vertical. left: 50% moves the item\'s left edge to the midpoint; translate: -50% shifts it back left by half its width.',
    html: H,
    css: css(
      '  align-content: center;',
      '  position: relative;\n  left: 50%;\n  translate: -50%;\n  display: inline-block;',
    ),
  },
  {
    id: 36,
    title: 'Relative: align-content + left 50% + translate + table',
    category: 'Position: Relative',
    description: 'Vertical align-content centering. Horizontal: left 50% + translate trick using display: table for width establishment.',
    html: H,
    css: css(
      '  align-content: center;',
      '  position: relative;\n  left: 50%;\n  translate: -50%;\n  display: table;',
    ),
  },
  {
    id: 37,
    title: 'Relative: align-content + left 50% + translate + fit-content',
    category: 'Position: Relative',
    description: 'Vertical align-content centering. Horizontal: left 50% + translate with width: fit-content constraining the item\'s width.',
    html: H,
    css: css(
      '  align-content: center;',
      '  position: relative;\n  left: 50%;\n  translate: -50%;\n  width: fit-content;',
    ),
  },
  {
    id: 38,
    title: 'Relative: align-content + left 50% + translate + max-content',
    category: 'Position: Relative',
    description: 'Vertical align-content centering. Horizontal: left 50% + translate with max-width: max-content preventing full-width stretch.',
    html: H,
    css: css(
      '  align-content: center;',
      '  position: relative;\n  left: 50%;\n  translate: -50%;\n  max-width: max-content;',
    ),
  },
  {
    id: 39,
    title: 'Relative: align-content + left 50% + translate + float left',
    category: 'Position: Relative',
    description: 'Vertical align-content centering. Horizontal: left 50% + translate(-50%) with float: left to establish an inline width.',
    html: H,
    css: css(
      '  align-content: center;',
      '  position: relative;\n  left: 50%;\n  translate: -50%;\n  float: left;',
    ),
  },
  {
    id: 40,
    title: 'Relative: align-content + right 50% + translate + float right',
    category: 'Position: Relative',
    description: 'Mirror of the float-left variant. right: 50% plus translate: 50% centres from the right side using float: right for width.',
    html: H,
    css: css(
      '  align-content: center;',
      '  position: relative;\n  right: 50%;\n  translate: 50%;\n  float: right;',
    ),
  },

  // ─── POSITION: RELATIVE + INSET ──────────────────────────────────────────

  {
    id: 41,
    title: 'Relative + Inset: 50% 0 0 50% + translate + inline-block',
    category: 'Position: Relative + Inset',
    description: 'inset: 50% 0 0 50% moves the item\'s top-left corner to the container\'s centre point. translate: -50% -50% then offsets back by half the item\'s own size.',
    html: H,
    css: css(
      '',
      '  position: relative;\n  inset: 50% 0 0 50%;\n  translate: -50% -50%;\n  display: inline-block;',
    ),
  },
  {
    id: 42,
    title: 'Relative + Inset: 50% 0 0 50% + translate + table',
    category: 'Position: Relative + Inset',
    description: 'The inset centering trick with display: table to shrink the item to its content width before applying the translate offset.',
    html: H,
    css: css(
      '',
      '  position: relative;\n  inset: 50% 0 0 50%;\n  translate: -50% -50%;\n  display: table;',
    ),
  },
  {
    id: 43,
    title: 'Relative + Inset: 50% 0 0 50% + translate + fit-content',
    category: 'Position: Relative + Inset',
    description: 'Inset centering with width: fit-content preventing the item from stretching to fill the container width.',
    html: H,
    css: css(
      '',
      '  position: relative;\n  inset: 50% 0 0 50%;\n  translate: -50% -50%;\n  width: fit-content;',
    ),
  },
  {
    id: 44,
    title: 'Relative + Inset: 50% 0 0 50% + translate + max-content',
    category: 'Position: Relative + Inset',
    description: 'Inset centering with max-width: max-content controlling the item\'s maximum width before the translate centres it.',
    html: H,
    css: css(
      '',
      '  position: relative;\n  inset: 50% 0 0 50%;\n  translate: -50% -50%;\n  max-width: max-content;',
    ),
  },
  {
    id: 45,
    title: 'Relative + Inset: 50% 0 0 50% + translate + float left',
    category: 'Position: Relative + Inset',
    description: 'Inset centering with float: left establishing the inline width, then translate correcting the position by -50% on both axes.',
    html: H,
    css: css(
      '',
      '  position: relative;\n  inset: 50% 0 0 50%;\n  translate: -50% -50%;\n  float: left;',
    ),
  },
  {
    id: 46,
    title: 'Relative + Inset: 50% 50% 0 auto + translate + float right',
    category: 'Position: Relative + Inset',
    description: 'Mirror variant for float: right. inset: 50% 50% 0 auto positions from the top-right; translate: 50% -50% adjusts back to centre.',
    html: H,
    css: css(
      '',
      '  position: relative;\n  inset: 50% 50% 0 auto;\n  translate: 50% -50%;\n  float: right;',
    ),
  },

  // ─── POSITION: ABSOLUTE ──────────────────────────────────────────────────

  {
    id: 47,
    title: 'Absolute: inset 0 + place-self center',
    category: 'Position: Absolute',
    description: 'inset: 0 stretches the absolutely-positioned item to fill the container. place-self: center then collapses it to its natural size and centres it.',
    html: H,
    css: css(
      '  position: relative;',
      '  position: absolute;\n  inset: 0;\n  place-self: center;',
    ),
  },
  {
    id: 48,
    title: 'Absolute: inset 0 + fit-content + margin auto',
    category: 'Position: Absolute',
    description: 'inset: 0 with width/height: fit-content shrinks the item to its content size. margin: auto then distributes the remaining space equally on all sides.',
    html: H,
    css: css(
      '  position: relative;',
      '  position: absolute;\n  inset: 0;\n  width: fit-content;\n  height: fit-content;\n  margin: auto;',
    ),
  },
  {
    id: 49,
    title: 'Absolute: inset 0 + max-content + margin auto',
    category: 'Position: Absolute',
    description: 'Same pattern as fit-content but using max-width/max-height: max-content as the size constraint before margin: auto centres the element.',
    html: H,
    css: css(
      '  position: relative;',
      '  position: absolute;\n  inset: 0;\n  max-width: max-content;\n  max-height: max-content;\n  margin: auto;',
    ),
  },
  {
    id: 50,
    title: 'Absolute: inset top-left 50% + translate',
    category: 'Position: Absolute',
    description: 'inset: 50% auto auto 50% places the top-left corner at the container midpoint. translate: -50% -50% shifts back by half the item\'s own dimensions.',
    html: H,
    css: css(
      '  position: relative;',
      '  position: absolute;\n  inset: 50% auto auto 50%;\n  translate: -50% -50%;',
    ),
  },
  {
    id: 51,
    title: 'Absolute: inset bottom-left 50% + translate',
    category: 'Position: Absolute',
    description: 'Positions from the bottom-left: inset: auto auto 50% 50% anchors the bottom-left corner at the midpoint; translate adjusts upward.',
    html: H,
    css: css(
      '  position: relative;',
      '  position: absolute;\n  inset: auto auto 50% 50%;\n  translate: -50% 50%;',
    ),
  },
  {
    id: 52,
    title: 'Absolute: inset top-right 50% + translate',
    category: 'Position: Absolute',
    description: 'Positions from the top-right: inset: 50% 50% auto auto anchors at the midpoint; translate: 50% -50% adjusts back to centre.',
    html: H,
    css: css(
      '  position: relative;',
      '  position: absolute;\n  inset: 50% 50% auto auto;\n  translate: 50% -50%;',
    ),
  },
  {
    id: 53,
    title: 'Absolute: inset bottom-right 50% + translate',
    category: 'Position: Absolute',
    description: 'Positions from the bottom-right corner: inset: auto 50% 50% auto with translate: 50% 50% to shift the item back to centre.',
    html: H,
    css: css(
      '  position: relative;',
      '  position: absolute;\n  inset: auto 50% 50% auto;\n  translate: 50% 50%;',
    ),
  },

  // ─── POSITION: FIXED ─────────────────────────────────────────────────────

  {
    id: 54,
    title: 'Fixed: contain layout + inset 0 + place-self center',
    category: 'Position: Fixed',
    description: 'contain: layout on the container creates a scoped fixed-position context. The fixed child with inset: 0 + place-self: center is then centred within the container, not the viewport.',
    html: H,
    css: css(
      '  contain: layout;',
      '  position: fixed;\n  inset: 0;\n  place-self: center;',
    ),
  },
  {
    id: 55,
    title: 'Fixed: contain layout + inset 0 + fit-content + margin auto',
    category: 'Position: Fixed',
    description: 'contain: layout scopes the fixed element to the container. inset: 0 + fit-content sizing + margin: auto centres the item within that scope.',
    html: H,
    css: css(
      '  contain: layout;',
      '  position: fixed;\n  inset: 0;\n  width: fit-content;\n  height: fit-content;\n  margin: auto;',
    ),
  },
  {
    id: 56,
    title: 'Fixed: contain layout + inset 0 + max-content + margin auto',
    category: 'Position: Fixed',
    description: 'contain: layout scopes fixed positioning. max-width/max-height: max-content sets the size limit; margin: auto centres within the container.',
    html: H,
    css: css(
      '  contain: layout;',
      '  position: fixed;\n  inset: 0;\n  max-width: max-content;\n  max-height: max-content;\n  margin: auto;',
    ),
  },
  {
    id: 57,
    title: 'Fixed: contain layout + top-left 50% + translate',
    category: 'Position: Fixed',
    description: 'contain: layout scopes the fixed child. inset: 50% auto auto 50% anchors the top-left corner at the midpoint; translate corrects by -50% on both axes.',
    html: H,
    css: css(
      '  contain: layout;',
      '  position: fixed;\n  inset: 50% auto auto 50%;\n  translate: -50% -50%;',
    ),
  },
  {
    id: 58,
    title: 'Fixed: contain layout + bottom-left + translate',
    category: 'Position: Fixed',
    description: 'Fixed position scoped by contain: layout. Positioned from the bottom-left 50% point with translate adjusting the offset.',
    html: H,
    css: css(
      '  contain: layout;',
      '  position: fixed;\n  inset: auto auto 50% 50%;\n  translate: -50% 50%;',
    ),
  },
  {
    id: 59,
    title: 'Fixed: contain layout + top-right + translate',
    category: 'Position: Fixed',
    description: 'Fixed position scoped by contain: layout. Positioned from the top-right 50% point with translate: 50% -50% for adjustment.',
    html: H,
    css: css(
      '  contain: layout;',
      '  position: fixed;\n  inset: 50% 50% auto auto;\n  translate: 50% -50%;',
    ),
  },
  {
    id: 60,
    title: 'Fixed: contain layout + bottom-right + translate',
    category: 'Position: Fixed',
    description: 'Fixed position scoped by contain: layout. Anchored from the bottom-right 50% corner; translate: 50% 50% shifts back to centre.',
    html: H,
    css: css(
      '  contain: layout;',
      '  position: fixed;\n  inset: auto 50% 50% auto;\n  translate: 50% 50%;',
    ),
  },

  // ─── CONTAINER QUERY ─────────────────────────────────────────────────────

  {
    id: 61,
    title: 'Container Query: line-height 100cqb',
    category: 'Container Query',
    description: 'container-type: size enables cq units. A ::before pseudo-element with line-height: 100cqb creates a tall inline strut. The item sits on the same line and is vertically aligned by the line box.',
    html: H,
    css: css(
      '  container-type: size;\n  text-align: center;',
      '  display: inline-block;\n  vertical-align: middle;',
      `.container::before {\n  content: "";\n  line-height: 100cqb;\n  vertical-align: middle;\n}`,
    ),
  },
  {
    id: 62,
    title: 'Container Query: full-height inline-block pseudo + vertical-align',
    category: 'Container Query',
    description: 'A pseudo-element styled as a full-height (100cqb) inline-block creates a reference line. Both pseudo and item use vertical-align: middle for precise vertical centering.',
    html: H,
    css: css(
      '  container-type: size;\n  text-align: center;',
      '  display: inline-block;\n  vertical-align: middle;',
      `.container::before {\n  content: "";\n  display: inline-block;\n  height: 100cqb;\n  vertical-align: middle;\n}`,
    ),
  },
  {
    id: 63,
    title: 'Container Query: margin 50cqb + translate + inline-block',
    category: 'Container Query',
    description: 'margin-top: 50cqb pushes the item to the container midpoint. translate: -50% -50% corrects for the item\'s own size. inline-block establishes width.',
    html: H,
    css: css(
      '  container-type: size;',
      '  margin: 50cqb 0 0 50%;\n  translate: -50% -50%;\n  display: inline-block;',
    ),
  },
  {
    id: 64,
    title: 'Container Query: margin 50cqb + translate + fit-content',
    category: 'Container Query',
    description: 'Container query margin centering. width: fit-content controls the item width; margin: 50cqb 0 0 50% + translate centres on both axes.',
    html: H,
    css: css(
      '  container-type: size;',
      '  margin: 50cqb 0 0 50%;\n  translate: -50% -50%;\n  width: fit-content;',
    ),
  },
  {
    id: 65,
    title: 'Container Query: margin 50cqb + translate + float left',
    category: 'Container Query',
    description: 'Container query margin trick with float: left establishing the inline width, then translate correcting the position to the true centre.',
    html: H,
    css: css(
      '  container-type: size;',
      '  margin: 50cqb 0 0 50%;\n  translate: -50% -50%;\n  float: left;',
    ),
  },
  {
    id: 66,
    title: 'Container Query: margin right 50cqb + float right',
    category: 'Container Query',
    description: 'Mirror of the float-left variant. margin: 50cqb 50% 0 0 with translate: 50% -50% centres from the right side using float: right.',
    html: H,
    css: css(
      '  container-type: size;',
      '  margin: 50cqb 50% 0 0;\n  translate: 50% -50%;\n  float: right;',
    ),
  },
  {
    id: 67,
    title: 'Container Query: calc(50cqi − 50%) translate + inline-block',
    category: 'Container Query',
    description: 'calc(50cqi - 50%) calculates the exact horizontal offset needed to centre the item using the container\'s inline size. 50cqb does the same vertically.',
    html: H,
    css: css(
      '  container-type: size;',
      '  display: inline-block;\n  translate: calc(50cqi - 50%) calc(50cqb - 50%);',
    ),
  },
  {
    id: 68,
    title: 'Container Query: calc translate + fit-content',
    category: 'Container Query',
    description: 'The calc(50cqi/cqb - 50%) translate technique with width: fit-content to control horizontal sizing before the translation.',
    html: H,
    css: css(
      '  container-type: size;',
      '  width: fit-content;\n  translate: calc(50cqi - 50%) calc(50cqb - 50%);',
    ),
  },
  {
    id: 69,
    title: 'Container Query: calc translate + float left',
    category: 'Container Query',
    description: 'Container query calc centering via translate, using float: left to establish the item\'s width before the translation is applied.',
    html: H,
    css: css(
      '  container-type: size;',
      '  float: left;\n  translate: calc(50cqi - 50%) calc(50cqb - 50%);',
    ),
  },
  {
    id: 70,
    title: 'Container Query: calc translate + float right',
    category: 'Container Query',
    description: 'Mirror of the float-left calc variant. The horizontal translation is inverted: calc(50% - 50cqi) for a right-floating element.',
    html: H,
    css: css(
      '  container-type: size;',
      '  float: right;\n  translate: calc(50% - 50cqi) calc(50cqb - 50%);',
    ),
  },
  {
    id: 71,
    title: 'Container Query: absolute + calc(cqi/cqb) translate',
    category: 'Container Query',
    description: 'Combines absolute positioning with container query units. The translate uses cqi (inline) and cqb (block) to compute exact offsets without knowing element dimensions.',
    html: H,
    css: css(
      '  position: relative;\n  container-type: size;',
      '  position: absolute;\n  translate: calc(50cqi - 50%) calc(50cqb - 50%);',
    ),
  },
  {
    id: 72,
    title: 'Container Query: fixed + contain layout + calc(cqi/cqb) translate',
    category: 'Container Query',
    description: 'The most modern combination: contain: layout scopes fixed positioning; container-type: size enables cq units; the calc translate centres without any hard-coded values.',
    html: H,
    css: css(
      '  contain: layout;\n  container-type: size;',
      '  position: fixed;\n  translate: calc(50cqi - 50%) calc(50cqb - 50%);',
    ),
  },
];

/** All unique category names, in display order */
export const CATEGORIES = [
  'All',
  'Grid',
  'Flexbox',
  'Block',
  'Position: Relative',
  'Position: Relative + Inset',
  'Position: Absolute',
  'Position: Fixed',
  'Container Query',
];

/** Colour associated with each category */
export const CATEGORY_COLORS = {
  'Grid':                      '#3b82f6',
  'Flexbox':                   '#8b5cf6',
  'Block':                     '#10b981',
  'Position: Relative':        '#f59e0b',
  'Position: Relative + Inset':'#d97706',
  'Position: Absolute':        '#ef4444',
  'Position: Fixed':           '#f43f5e',
  'Container Query':           '#06b6d4',
};
