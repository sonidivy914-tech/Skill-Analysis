import React from 'react';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          Skill<span>Bridge</span> 🎓
        </a>

        <ul className="nav-links">
          <li><a href="#analyzer" className="nav-link">Skill Analyzer</a></li>
          <li><a href="#stats" className="nav-link">Placement Stats</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
        </ul>

        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
          >
            <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          <a href="#analyzer" className="btn btn-primary btn-sm">
            Analyze My Skills
          </a>
        </div>
      </div>
    </nav>
  );
}
