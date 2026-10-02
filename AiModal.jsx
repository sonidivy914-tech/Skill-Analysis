import React, { useState } from 'react';
import { CAREER_DATA } from '../data/careersData';

export default function AiModal({ isOpen, onClose, type, profile, selectedSkills }) {
  const [city, setCity] = useState('Gujarat (Ahmedabad/Vadodara/Surat)');
  const [pref, setPref] = useState('Entry-level engineering roles');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const career = CAREER_DATA[profile.targetCareer] || CAREER_DATA['webdev'];
  const missingSkills = career.required.filter(s => !selectedSkills.has(s));

  const runAiQuery = async () => {
    setLoading(true);
    setError(null);
    setResults(null);

    let prompt = '';
    if (type === 'roadmap') {
      prompt = `You are a career counselor for engineering and commerce students in Gujarat, India (GTU curriculum).
Target Career: "${career.title}"
Student Education: "${profile.education}"
Student's Missing Skills: ${JSON.stringify(missingSkills)}

Generate 3 advanced, personalized monthly milestone recommendations to bridge this gap. Return ONLY a valid JSON array of objects with keys: "month", "title", "desc", "recommendedResource". Do NOT include markdown fences or extra text.`;
    } else if (type === 'jobs') {
      prompt = `You are a recruiter finding real jobs in India (specifically Gujarat tech hubs like Ahmedabad, Vadodara, Surat, GIFT City, and GIDC).
Target Role: "${career.title}"
Preferred City/Region: "${city}"
Preferences: "${pref}"
Student's Missing Skills: ${JSON.stringify(missingSkills)}

Generate 4 realistic job listings. Return ONLY a raw valid JSON array of objects with keys: "role", "company", "location", "salary", "match", "neededSkills", "applyTip". Do NOT wrap in markdown fences.`;
    } else if (type === 'resources') {
      prompt = `Provide 4 top free learning resources (YouTube channels, official documentation, free interactive courses, GitHub repos) specifically to learn these missing skills for a ${career.title}: ${JSON.stringify(missingSkills)}.
Return ONLY a raw valid JSON array of objects with keys: "name", "type", "description", "icon", "color". Do NOT wrap in markdown fences.`;
    }

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Gemini server error');

      let parsed = [];
      const cleanText = data.text.replace(/```json/gi, '').replace(/```/g, '').trim();
      parsed = JSON.parse(cleanText);
      setResults(parsed);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem',
      backdropFilter: 'blur(4px)'
    }}>
      <div className="card" style={{
        maxWidth: '680px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--purple-600)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🤖 Gemini AI {type === 'roadmap' ? 'Milestone Generator' : type === 'jobs' ? 'Gujarat Job Matcher' : 'Resource Recommender'}
          </h3>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}
          >
            ✕
          </button>
        </div>

        {type === 'jobs' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label className="form-label">City / Tech Hub</label>
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Preferences</label>
              <input
                type="text"
                className="form-control"
                value={pref}
                onChange={e => setPref(e.target.value)}
              />
            </div>
          </div>
        )}

        <div style={{ marginBottom: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Generating recommendations for <strong>{career.title}</strong> targeting {missingSkills.length} missing skill(s).
        </div>

        <button
          className="btn btn-ai"
          style={{ width: '100%' }}
          onClick={runAiQuery}
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="spinner"></div> Consulting Gemini AI...
            </>
          ) : (
            '✨ Generate with Gemini AI'
          )}
        </button>

        {error && (
          <div className="badge badge-coral" style={{ padding: '0.75rem', width: '100%', marginTop: '1rem' }}>
            ❌ Error: {error}
          </div>
        )}

        {/* Results Container */}
        {results && (
          <div style={{ marginTop: '1.5rem' }}>
            {type === 'roadmap' && Array.isArray(results) && (
              <div className="timeline" style={{ borderLeftColor: 'var(--purple-600)' }}>
                {results.map((m, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot" style={{ borderColor: 'var(--purple-600)' }}></div>
                    <div className="timeline-month" style={{ color: 'var(--purple-600)' }}>{m.month}</div>
                    <h4 className="timeline-title">{m.title}</h4>
                    <p className="timeline-desc">{m.desc}</p>
                    {m.recommendedResource && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                        Resource: {m.recommendedResource}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {type === 'jobs' && Array.isArray(results) && (
              <div className="job-cards-grid">
                {results.map((j, idx) => (
                  <div key={idx} className="job-card">
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <h4 style={{ fontSize: '1rem' }}>{j.role}</h4>
                        <span className="badge badge-teal">{j.match || 'High'} Match</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        🏢 <strong>{j.company}</strong> • 📍 {j.location}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent)', margin: '0.4rem 0' }}>
                        💰 {j.salary}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.75rem', background: 'var(--card-subtle)', padding: '0.5rem', borderRadius: '6px' }}>
                      💡 <strong>Apply Tip:</strong> {j.applyTip}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {type === 'resources' && Array.isArray(results) && (
              <div className="resources-grid">
                {results.map((r, idx) => (
                  <div key={idx} className="resource-card">
                    <div className="resource-header">
                      <span className="resource-icon">{r.icon || '📚'}</span>
                      <span className="badge badge-purple">{r.type || 'Course'}</span>
                    </div>
                    <h4 style={{ fontSize: '0.95rem', marginTop: '0.4rem' }}>{r.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{r.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
