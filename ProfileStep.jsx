import React, { useEffect } from 'react';
import { CAREER_DATA, STREAMS } from '../../data/careersData';

export default function ProfileStep({ profile, setProfile, onNext }) {
  // Helper to get careers matching the selected stream
  const getCareersForStream = (streamId) => {
    if (!streamId || streamId === 'all') {
      return Object.entries(CAREER_DATA).map(([key, item]) => ({ key, ...item }));
    }
    return Object.entries(CAREER_DATA)
      .filter(([_, item]) => {
        if (streamId === 'ee_ec' || streamId === 'ee' || streamId === 'ec') {
          return item.field === 'ee_ec';
        }
        return item.field === streamId;
      })
      .map(([key, item]) => ({ key, ...item }));
  };

  const availableCareers = getCareersForStream(profile.stream);

  // Auto-align targetCareer if stream changes and current career is no longer in the list
  const handleStreamChange = (newStream) => {
    const newAvailable = getCareersForStream(newStream);
    const isCurrentStillValid = newAvailable.some(c => c.key === profile.targetCareer);
    
    setProfile(prev => ({
      ...prev,
      stream: newStream,
      targetCareer: isCurrentStillValid ? prev.targetCareer : (newAvailable[0]?.key || 'webdev')
    }));
  };

  const handleChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="card" style={{ marginBottom: '1.5rem' }}>
      <h3 style={{ marginBottom: '1.25rem', fontSize: '1.2rem' }}>
        📋 Step 1: Tell Us About Yourself
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="userName">Full Name</label>
          <input
            type="text"
            id="userName"
            className="form-control"
            placeholder="e.g. Patel Rahul"
            value={profile.name}
            onChange={e => handleChange('name', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="educationLevel">Education Level</label>
          <select
            id="educationLevel"
            className="form-control"
            value={profile.education}
            onChange={e => handleChange('education', e.target.value)}
          >
            <option value="BE_6">B.E. / B.Tech — Semester 6 (Pre-final Year)</option>
            <option value="BE_8">B.E. / B.Tech — Semester 8 (Graduating / Final Year)</option>
            <option value="BE_4">B.E. / B.Tech — Semester 3-4 (Sophomore)</option>
            <option value="DIPLOMA">Diploma Engineering (GTU)</option>
            <option value="BCA_MCA">BCA / MCA / B.Sc IT</option>
            <option value="BCOM_MCOM">B.Com / BBA / MBA (Finance)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="stream">
            🏛️ Department / Field of Study
          </label>
          <select
            id="stream"
            className="form-control"
            value={profile.stream}
            onChange={e => handleStreamChange(e.target.value)}
            style={{ fontWeight: 600 }}
          >
            {STREAMS.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
            <label className="form-label" htmlFor="targetCareer" style={{ margin: 0 }}>
              🎯 Target Dream Career
            </label>
            <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>
              {availableCareers.length} Options
            </span>
          </div>

          <select
            id="targetCareer"
            className="form-control"
            style={{ fontWeight: 600, borderColor: 'var(--accent)' }}
            value={profile.targetCareer}
            onChange={e => handleChange('targetCareer', e.target.value)}
          >
            {availableCareers.map(item => (
              <option key={item.key} value={item.key}>
                {item.title} ({item.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn btn-primary" onClick={onNext}>
          Next: Select Your Skills →
        </button>
      </div>
    </div>
  );
}
