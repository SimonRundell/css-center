/**
 * MiniCodepen - an embedded live code editor with HTML, CSS tabs and a preview iframe.
 *
 * Students can edit the HTML and CSS then see the result update in real time.
 * Copy buttons let them take either snippet to their own projects.
 *
 * @license CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import { useState, useCallback } from 'react';

/**
 * Assembles a complete HTML document string for the preview iframe's srcdoc.
 * The body uses flex to place the demo container centrally in the preview pane.
 * @param {string} html - User-editable HTML
 * @param {string} css  - User-editable CSS
 * @returns {string}
 */
function buildSrcdoc(html, css) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8fafc;
      font-family: system-ui, sans-serif;
    }
    ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
}

/**
 * MiniCodepen component.
 * @param {Object} props
 * @param {string} props.initialHtml - Starting HTML content shown in the editor
 * @param {string} props.initialCss  - Starting CSS content shown in the editor
 */
export default function MiniCodepen({ initialHtml, initialCss }) {
  const [html, setHtml]         = useState(initialHtml);
  const [css, setCss]           = useState(initialCss);
  const [activeTab, setActiveTab] = useState('css');
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss]   = useState(false);

  const handleCopyHtml = useCallback(() => {
    navigator.clipboard.writeText(html);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  }, [html]);

  const handleCopyCss = useCallback(() => {
    navigator.clipboard.writeText(css);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2000);
  }, [css]);

  const currentValue  = activeTab === 'html' ? html : css;
  const handleChange  = useCallback(
    (e) => activeTab === 'html' ? setHtml(e.target.value) : setCss(e.target.value),
    [activeTab],
  );

  return (
    <div className="mini-codepen">
      {/* ── Editor panel ─────────────────────────────── */}
      <div className="mcp-editor">
        <div className="mcp-tabs">
          <button
            className={`mcp-tab${activeTab === 'html' ? ' active' : ''}`}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
          <button
            className={`mcp-tab${activeTab === 'css' ? ' active' : ''}`}
            onClick={() => setActiveTab('css')}
          >
            CSS
          </button>
        </div>

        <textarea
          className="mcp-textarea"
          value={currentValue}
          onChange={handleChange}
          spellCheck={false}
          aria-label={activeTab === 'html' ? 'HTML editor' : 'CSS editor'}
        />

        <div className="mcp-copy-row">
          <button
            className={`mcp-copy-btn${copiedHtml ? ' copied' : ''}`}
            onClick={handleCopyHtml}
          >
            {copiedHtml ? '✓ Copied!' : 'Copy HTML'}
          </button>
          <button
            className={`mcp-copy-btn${copiedCss ? ' copied' : ''}`}
            onClick={handleCopyCss}
          >
            {copiedCss ? '✓ Copied!' : 'Copy CSS'}
          </button>
        </div>
      </div>

      {/* ── Preview pane ─────────────────────────────── */}
      <div className="mcp-preview">
        <span className="mcp-preview-label">Preview</span>
        <iframe
          className="mcp-iframe"
          srcdoc={buildSrcdoc(html, css)}
          title="Live preview"
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  );
}
