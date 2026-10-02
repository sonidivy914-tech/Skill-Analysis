import React, { useState } from 'react';
import { CAREER_DATA, ALL_SKILLS_CATALOG } from '../../data/careersData';

export default function SkillsStep({ profile, selectedSkills, setSelectedSkills, onBack, onAnalyze, loading }) {
  const [search, setSearch] = useState('');
  const career = CAREER_DATA[profile.targetCareer] || CAREER_DATA['webdev'];

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => {
      const next = new Set(prev);
      if (next.has(skill)) {
        next.delete(skill);
      } else {
        next.add(skill);
      }
      return next;
    });
  };

  const selectRequired = () => {
    setSelectedSkills(new Set(career.required));
  };

  const clearAll = () => {
    setSelectedSkills(new Set());
  };

  const filteredRequired = career.required.filter(s =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  const filteredNice = career.nice.filter(s =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  const otherSkills = ALL_SKILLS_CATALOG.filter(s =>
    !career.required.includes(s) && !career.nice.includes(s) && s.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card" style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem' }}>
            🛠️ Step 2: What Skills Do You Currently Possess?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Evaluating against: <strong style={{ color: 'var(--accent)' }}>{career.title}</strong>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-secondary btn-sm" onClick={selectRequired}>
            ✓ Select Required
          </button>
          <button className="btn btn-secondary btn-sm" onClick={clearAll}>
            ✕ Clear All
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '1.25rem' }}>
        <input
          type="text"
          className="form-control"
          placeholder="🔎 Filter skills (e.g. React, Python, Docker, SQL)..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Required Core Skills */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          ⭐ Core Mandatory Skills for this Role
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
          {filteredRequired.map(skill => {
            const isChecked = selectedSkills.has(skill);
            return (
              <label
                key={skill}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  background: isChecked ? 'var(--accent-light)' : 'var(--card-subtle)',
                  border: isChecked ? '1px solid var(--accent)' : '1px solid var(--border)',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.9rem'
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleSkill(skill)}
                  style={{ accentColor: 'var(--accent)', transform: 'scale(1.15)' }}
                />
                <span>{skill}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Nice-to-Have Skills */}
      {filteredNice.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            ✨ Recommended / Good-to-Have Skills
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {filteredNice.map(skill => {
              const isChecked = selectedSkills.has(skill);
              return (
                <label
                  key={skill}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    background: isChecked ? 'var(--teal-50)' : 'var(--card-subtle)',
                    border: isChecked ? '1px solid var(--teal-600)' : '1px solid var(--border)',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontSize: '0.9rem'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleSkill(skill)}
                    style={{ accentColor: 'var(--teal-600)', transform: 'scale(1.15)' }}
                  />
                  <span>{skill}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Other Catalog Skills */}
      {search && otherSkills.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            🌐 Other Industry Skills
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {otherSkills.map(skill => {
              const isChecked = selectedSkills.has(skill);
              return (
                <label
                  key={skill}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    background: isChecked ? 'var(--accent-light)' : 'var(--card-subtle)',
                    border: isChecked ? '1px solid var(--accent)' : '1px solid var(--border)',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleSkill(skill)}
                  />
                  <span>{skill}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
        <button className="btn btn-secondary" onClick={onBack}>
          ← Back to Profile
        </button>

        <button className="btn btn-primary" onClick={onAnalyze} disabled={loading}>
          {loading ? (
            <>
              <div className="spinner"></div> Calculating Gap via MongoDB...
            </>
          ) : (
            `Analyze Gap & Build Roadmap (${selectedSkills.size} skills) →`
          )}
        </button>
      </div>
    </div>
  );
}
