/**
 * App - CSS Centering Techniques demonstration platform.
 *
 * Displays 72 recommended CSS centering methods (dimension-independent).
 * Based on https://css-generators.com/center/
 *
 * @license CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
 * @author Simon Rundell
 */

import { useState, useMemo } from 'react';
import { techniques } from './data/techniques';
import TechniqueCard from './components/TechniqueCard';
import CategoryFilter from './components/CategoryFilter';
import CMFloatAd from './components/CMFloatAd';
import './App.css';

/** Main application component */
export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(
    () => activeCategory === 'All'
      ? techniques
      : techniques.filter((t) => t.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="app-title-row">
            <img src="/exeter_logo.svg" alt="Exeter College" className="header-logo" />
            <h1 className="app-title">CSS Centering Techniques</h1>
          </div>
          <p className="app-subtitle">
            {techniques.length} dimension-independent ways to centre an element&nbsp;&mdash;&nbsp;
            edit the code, see it live, copy what you need.
          </p>
          <p className="app-source">
            Based on{' '}
            <a
              href="https://css-generators.com/center/"
              target="_blank"
              rel="noopener noreferrer"
            >
              css-generators.com/center/
            </a>
          </p>
        </div>
      </header>

      <main className="app-main">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <p className="results-count">
          Showing <strong>{filtered.length}</strong> of {techniques.length} techniques
          {activeCategory !== 'All' && ` in "${activeCategory}"`}
        </p>

        <div className="techniques-grid">
          {filtered.map((technique) => (
            <TechniqueCard key={technique.id} technique={technique} />
          ))}
        </div>
      </main>
<CMFloatAd color="#000000" bgColor="#ffffff"/>
      <footer className="app-footer">
        <p>
          Released under{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          &copy; {new Date().getFullYear()} Simon Rundell. </p>
          <p>Note that the CSS code is 'center' but in UK English (as taught at Exeter College) the text uses the spelling 'centre'.  
        </p>
      </footer>
    </div>
  );
}
