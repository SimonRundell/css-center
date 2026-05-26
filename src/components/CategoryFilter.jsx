/**
 * CategoryFilter - a row of buttons that filter the technique list by category.
 *
 * @license CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import { CATEGORIES, CATEGORY_COLORS } from '../data/techniques';

/**
 * CategoryFilter component.
 * @param {Object}   props
 * @param {string}   props.activeCategory   - Currently selected category name
 * @param {Function} props.onCategoryChange - Callback receiving the new category name
 */
export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <nav className="category-filter" aria-label="Filter by category">
      {CATEGORIES.map((cat) => {
        const color   = CATEGORY_COLORS[cat];
        const isActive = cat === activeCategory;

        const style = isActive && cat !== 'All'
          ? { backgroundColor: color, borderColor: color, color: '#fff' }
          : isActive
          ? {}
          : {};

        return (
          <button
            key={cat}
            className={`filter-btn${isActive ? ' active' : ''}`}
            style={style}
            onClick={() => onCategoryChange(cat)}
            aria-pressed={isActive}
          >
            {cat !== 'All' && (
              <span
                className="filter-dot"
                style={{ backgroundColor: isActive ? '#fff' : color }}
              />
            )}
            {cat}
          </button>
        );
      })}
    </nav>
  );
}
