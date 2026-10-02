import React, { useState } from 'react';
import { CAREER_DATA } from '../../data/careersData';

export default function ResultsStep({
  profile,
  selectedSkills,
  onReset,
  onOpenAiModal
}) {
  const [activeTab, setActiveTab] = useState('roadmap');
  const career = CAREER_DATA[profile.targetCareer] || CAREER_DATA['webdev'];

  const matchedRequired = career.required.filter(s => selectedSkills.has(s));
  const missingRequired = career.required.filter(s => !selectedSkills.has(s));
  const matchedNice = career.nice.filter(s => selectedSkills.has(s));

  // Weighted score calculation
  const totalPossible = (career.required.length * 3) + (career.nice.length * 1);
  const totalEarned = (matchedRequired.length * 3) + (matchedNice.length * 1);
  const matchPercentage = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0;

  // Circular gauge circumference
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (matchPercentage / 100) * circumference;

  let readinessBadge = { text: 'Beginner / Needs Upskilling', color: 'badge-coral' };
  if (matchPercentage >= 75) readinessBadge = { text: 'Placement Ready! 🚀', color: 'badge-teal' };
  else if (matchPercentage >= 50) readinessBadge = { text: 'Interview Contender 📈', color: 'badge-amber' };

  return (
    <div id="results">
      {/* 1. Score Summary Card */}
      <div className="score-card">
        <div className="score-circle-wrapper">
          <svg className="progress-ring" width="160" height="160">
            <circle
              stroke="var(--card-subtle)"
              strokeWidth="12"
              fill="transparent"
              r={radius}
              cx="80"
              cy="80"
            />
            <circle
              className="progress-ring-circle"
              stroke={matchPercentage >= 70 ? 'var(--teal-600)' : matchPercentage >= 40 ? 'var(--amber-600)' : 'var(--coral-600)'}
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="80"
              cy="80"
            />
          </svg>
          <div className="score-center-text">
            <span className="score-val">{matchPercentage}%</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Match</span>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: '1.6rem' }}>{career.title}</h2>
            <span className={`badge ${readinessBadge.color}`}>{readinessBadge.text}</span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Prepared for <strong>{profile.name}</strong> ({profile.education.replace('_', ' ')}) •
            Earned <strong>{totalEarned}</strong> of {totalPossible} weighted skill points.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'var(--card-subtle)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
              <span style={{ color: 'var(--green-600)', fontWeight: 700 }}>✓ {matchedRequired.length}</span> / {career.required.length} Core Skills Matched
            </div>
            <div style={{ background: 'var(--card-subtle)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
              <span style={{ color: 'var(--coral-600)', fontWeight: 700 }}>⚠ {missingRequired.length}</span> Missing Core Gaps
            </div>
            <div style={{ background: 'var(--card-subtle)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
              <span style={{ color: 'var(--teal-600)', fontWeight: 700 }}>+ {matchedNice.length}</span> Bonus Skills
            </div>
          </div>
        </div>
      </div>

      {/* 2. Skill Gap Highlights */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>🎯 Identified Skill Gaps to Focus On</h3>

        {missingRequired.length === 0 ? (
          <div className="badge badge-teal" style={{ padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
            🎉 Outstanding! You have satisfied all core requirements for {career.title}! You are placement-ready.
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Priority skills to acquire to become a competitive candidate for this role:
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {missingRequired.map(skill => (
                <div
                  key={skill}
                  className="badge badge-coral"
                  style={{
                    padding: '0.5rem 0.85rem',
                    fontSize: '0.85rem'
                  }}
                >
                  ⚡ {skill} (Core Gap)
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. Sub-tabs Navigation */}
      <div className="db-subnav" style={{ borderBottomColor: 'var(--border)' }}>
        <button
          className={`db-subnav-btn ${activeTab === 'roadmap' ? 'active' : ''}`}
          onClick={() => setActiveTab('roadmap')}
        >
          📅 Month-by-Month Roadmap
        </button>
        <button
          className={`db-subnav-btn ${activeTab === 'jobs' ? 'active' : ''}`}
          onClick={() => setActiveTab('jobs')}
        >
          💼 Jobs & Hiring ({career.jobs.length})
        </button>
        <button
          className={`db-subnav-btn ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          📚 Free Learning Resources
        </button>
      </div>

      {/* Tab: Roadmap */}
      {activeTab === 'roadmap' && (
        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3>Structured Learning Timeline</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Curated monthly milestones to bridge your skill gap before graduation
              </p>
            </div>
            <button
              className="btn btn-ai btn-sm"
              onClick={() => onOpenAiModal('roadmap')}
            >
              🤖 Personalize with Gemini AI
            </button>
          </div>

          <div className="timeline">
            {career.roadmap.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-month">{item.month}</div>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Jobs */}
      {activeTab === 'jobs' && (
        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <h3>Gujarat & National Job Opportunities</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Actual hiring roles for {career.title} in Ahmedabad, Vadodara, Surat & Remote
              </p>
            </div>
            <button
              className="btn btn-ai btn-sm"
              onClick={() => onOpenAiModal('jobs')}
            >
              🤖 Find Real-Time AI Jobs
            </button>
          </div>

          <div className="table-container">
            <table className="jobs-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Avg. Salary</th>
                  <th>Match</th>
                </tr>
              </thead>
              <tbody>
                {career.jobs.map((job, idx) => (
                  <tr key={idx}>
                    <td><strong>{job.role}</strong></td>
                    <td>{job.company}</td>
                    <td>📍 {job.loc}</td>
                    <td style={{ fontWeight: 700, color: 'var(--accent)' }}>{job.salary}</td>
                    <td>
                      <span className={`badge ${job.match === 'High' ? 'badge-teal' : 'badge-amber'}`}>
                        {job.match} Match
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Resources */}
      {activeTab === 'resources' && (
        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <h3>Curated Free Resources</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                High-yield documentation, interactive platforms, and video courses
              </p>
            </div>
            <button
              className="btn btn-ai btn-sm"
              onClick={() => onOpenAiModal('resources')}
            >
              🤖 Discover AI Recommended Courses
            </button>
          </div>

          <div className="resources-grid">
            {career.resources.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="resource-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div>
                  <div className="resource-header">
                    <span className="resource-icon">{res.icon}</span>
                    <span className={`badge badge-${res.color}`}>{res.type}</span>
                  </div>
                  <h4 style={{ fontSize: '1rem', marginTop: '0.5rem' }}>{res.name}</h4>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                  Open Resource →
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn btn-secondary" onClick={onReset}>
          ← Start Over with Another Career
        </button>
      </div>
    </div>
  );
}
