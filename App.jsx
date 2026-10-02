import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProfileStep from './components/analyzer/ProfileStep';
import SkillsStep from './components/analyzer/SkillsStep';
import ResultsStep from './components/analyzer/ResultsStep';
import AiModal from './components/AiModal';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('skillbridge_theme') || 'light');
  const [currentStep, setCurrentStep] = useState(1);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);

  // AI Modal state
  const [aiModal, setAiModal] = useState({ isOpen: false, type: 'roadmap' });

  // User profile state
  const [profile, setProfile] = useState({
    name: 'Rahul Patel',
    education: 'BE_6',
    stream: 'ce',
    targetCareer: 'webdev'
  });

  // Selected skills state
  const [selectedSkills, setSelectedSkills] = useState(
    new Set(['HTML/CSS', 'JavaScript (ES6+)', 'Git/GitHub'])
  );

  // Theme synchronization
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('skillbridge_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleStartAnalysis = () => {
    const el = document.getElementById('analyzer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAnalyze = async () => {
    setLoadingAnalysis(true);
    try {
      const skillList = Array.from(selectedSkills).map(s => s.toLowerCase().replace(/[^a-z0-9]/g, '_'));
      await fetch('/api/matching/match-jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skills: skillList })
      }).catch(() => {});
    } finally {
      setLoadingAnalysis(false);
      setCurrentStep(3);
      setTimeout(() => {
        const el = document.getElementById('results');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="app">
      {/* 1. Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* 2. Hero */}
      <Hero onStartAnalysis={handleStartAnalysis} />

      {/* 3. Stats */}
      <Stats />

      {/* 4. Interactive Skill Gap Analyzer */}
      <section id="analyzer" style={{ padding: '2rem 0 4rem 0' }}>
        <div className="container" style={{ maxWidth: '1050px' }}>

          {/* Stepper */}
          <div className="stepper">
            <div
              className={`step-item ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''}`}
              onClick={() => setCurrentStep(1)}
              style={{ cursor: 'pointer' }}
            >
              <div className="step-number">{currentStep > 1 ? '✓' : '1'}</div>
              <span>1. Your Profile</span>
            </div>

            <div className="step-divider"></div>

            <div
              className={`step-item ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}`}
              onClick={() => setCurrentStep(2)}
              style={{ cursor: 'pointer' }}
            >
              <div className="step-number">{currentStep > 2 ? '✓' : '2'}</div>
              <span>2. Current Skills</span>
            </div>

            <div className="step-divider"></div>

            <div
              className={`step-item ${currentStep === 3 ? 'active' : ''}`}
              style={{ cursor: currentStep === 3 ? 'default' : 'pointer' }}
              onClick={() => { if (selectedSkills.size > 0) setCurrentStep(3); }}
            >
              <div className="step-number">3</div>
              <span>3. Results & Roadmap</span>
            </div>
          </div>

          {/* Step 1: Profile */}
          {currentStep === 1 && (
            <ProfileStep
              profile={profile}
              setProfile={setProfile}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {/* Step 2: Skills Selection */}
          {currentStep === 2 && (
            <SkillsStep
              profile={profile}
              selectedSkills={selectedSkills}
              setSelectedSkills={setSelectedSkills}
              onBack={() => setCurrentStep(1)}
              onAnalyze={handleAnalyze}
              loading={loadingAnalysis}
            />
          )}

          {/* Step 3: Results & Roadmap */}
          {currentStep === 3 && (
            <ResultsStep
              profile={profile}
              selectedSkills={selectedSkills}
              onReset={() => setCurrentStep(1)}
              onOpenAiModal={(type) => setAiModal({ isOpen: true, type })}
            />
          )}

        </div>
      </section>

      {/* 5. Footer */}
      <footer id="about">
        <div className="container footer-content">
          <div className="logo">Skill<span>Bridge</span> 🎓</div>
          <p style={{ fontWeight: 600, color: 'var(--text)' }}>
            Built with ❤️ for Gujarat Technological University (GTU) & Indian Engineering Students
          </p>
          <p style={{ maxWidth: '600px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            SkillBridge bridges the gap between academic curriculum and practical industry demands through React.js, Express, and Gemini AI.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            SkillBridge • React 18 + Node.js (Express) Full-Stack Platform
          </p>
        </div>
      </footer>

      {/* 6. Gemini AI Modal */}
      <AiModal
        isOpen={aiModal.isOpen}
        type={aiModal.type}
        profile={profile}
        selectedSkills={selectedSkills}
        onClose={() => setAiModal({ isOpen: false, type: 'roadmap' })}
      />
    </div>
  );
}
