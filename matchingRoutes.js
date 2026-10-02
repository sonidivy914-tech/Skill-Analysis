const express = require('express');
const router = express.Router();
const {
  matchJobsWithAggregation,
  getPrerequisiteChain,
  searchJobsBySkillsIndexed,
  getCoursesForSkills
} = require('../services/inMemoryEngine');

// GET /api/db/status & /api/matching/status
router.get('/status', (req, res) => {
  res.json({
    connected: true,
    engine: 'In-Memory Standalone Engine',
    connectionType: 'in_memory_direct',
    latency_ms: 0.1,
    status: 'Operational',
    databaseRequired: false,
    message: 'Running standalone with zero external database dependencies.'
  });
});

// POST /api/db/match-jobs
router.post('/match-jobs', (req, res) => {
  try {
    const skills = Array.isArray(req.body.skills) ? req.body.skills : [];
    const result = matchJobsWithAggregation(skills);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/db/prerequisites/:skillId
router.get('/prerequisites/:skillId', (req, res) => {
  try {
    const skillId = decodeURIComponent(req.params.skillId);
    const result = getPrerequisiteChain(skillId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/db/jobs-by-skills
router.get('/jobs-by-skills', (req, res) => {
  try {
    const skillsParam = req.query.skills || '';
    const location = req.query.location || null;
    const skills = skillsParam.split(',').map(s => s.trim()).filter(Boolean);
    const result = searchJobsBySkillsIndexed(skills, location);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/db/courses
router.get('/courses', (req, res) => {
  try {
    const skillsParam = req.query.skills || '';
    const skills = skillsParam.split(',').map(s => s.trim()).filter(Boolean);
    const result = getCoursesForSkills(skills);
    res.json({ courses: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
