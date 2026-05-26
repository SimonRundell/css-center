/**
 * TechniqueCard - displays a single CSS centering technique.
 *
 * The "Open Editor" button mounts a full-screen modal (via React portal)
 * containing the MiniCodepen with ample space to read and experiment.
 * Closes on Escape, on overlay click, or on the close button.
 *
 * @license CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import MiniCodepen from './MiniCodepen';
import { CATEGORY_COLORS } from '../data/techniques';

/**
 * TechniqueCard component.
 * @param {Object} props
 * @param {Object} props.technique - Technique data object from techniques.js
 */
export default function TechniqueCard({ technique }) {
  const [isOpen, setIsOpen]   = useState(false);
  const color                 = CATEGORY_COLORS[technique.category] ?? '#00a2d3';
  const close                 = useCallback(() => setIsOpen(false), []);

  /* Lock body scroll and handle Escape key while modal is open */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  const badgeStyle = {
    backgroundColor: `${color}22`,
    color,
    borderColor: `${color}55`,
  };

  return (
    <article className="technique-card">
      <header className="card-header">
        <span className="category-badge" style={badgeStyle}>
          {technique.category}
        </span>
        <span className="technique-num">#{technique.id}</span>
      </header>

      <h3 className="card-title">{technique.title}</h3>
      <p className="card-desc">{technique.description}</p>

      <button className="try-btn" onClick={() => setIsOpen(true)}>
        Open Editor
      </button>

      {isOpen && createPortal(
        <div
          className="modal-overlay"
          onClick={close}
          role="presentation"
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${technique.id}`}
          >
            <header className="modal-header">
              <div className="modal-header-text">
                <span className="category-badge" style={badgeStyle}>
                  {technique.category}
                </span>
                <h2 id={`modal-title-${technique.id}`} className="modal-title">
                  #{technique.id} &mdash; {technique.title}
                </h2>
              </div>
              <button className="modal-close" onClick={close} aria-label="Close editor">
                &#x2715;
              </button>
            </header>

            <div className="modal-body">
              <p className="modal-desc">{technique.description}</p>
              <MiniCodepen
                initialHtml={technique.html}
                initialCss={technique.css}
              />
            </div>
          </div>
        </div>,
        document.body,
      )}
    </article>
  );
}
