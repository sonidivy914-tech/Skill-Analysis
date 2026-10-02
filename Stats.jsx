import React from 'react';

export default function Stats() {
  return (
    <div id="stats" className="container stats-bar">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">80+</div>
          <div className="stat-label">In-demand skills tracked</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">20+</div>
          <div className="stat-label">Career paths mapped</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">200+</div>
          <div className="stat-label">Free learning resources</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Students placed & guided</div>
        </div>
      </div>
    </div>
  );
}
