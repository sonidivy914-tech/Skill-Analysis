import React from 'react';

export default function Hero({ onStartAnalysis }) {
  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="badge hero-badge">🎓 Built for Engineering & Commerce Students</span>
        <h1 className="hero-title">Find Your Skill Gaps. Build Your Career Path.</h1>
        <p className="hero-subtitle">
          Compare your current skills against industry roles in Gujarat & India.
          Get an instant job-readiness score, month-by-month learning roadmap, curated job listings, and free resources.
        </p>
        <button onClick={onStartAnalysis} className="btn hero-cta">
          Analyze My Skills →
        </button>
      </div>
    </section>
  );
}
