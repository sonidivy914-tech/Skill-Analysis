const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const matchingRoutes = require('./routes/matchingRoutes');
const geminiRoutes = require('./routes/geminiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/matching', matchingRoutes);
app.use('/api', geminiRoutes);

// Health route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'SkillBridge Express Backend',
    time: new Date()
  });
});

// Serve frontend build in production
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// Fallback route for SPA
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(clientDistPath, 'index.html');
  res.sendFile(indexPath, err => {
    if (err) {
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head><title>SkillBridge API</title></head>
          <body style="font-family:system-ui,sans-serif; text-align:center; padding:50px; background:#0f172a; color:#f8fafc;">
            <h2>🚀 SkillBridge Express Backend is Running</h2>
            <p>Port: <strong>${PORT}</strong></p>
            <p>Frontend dev server runs on Vite at <a href="http://localhost:5173" style="color:#38bdf8;">http://localhost:5173</a>.</p>
            <p>Run <code>npm run build</code> in the root directory to generate production frontend assets.</p>
          </body>
        </html>
      `);
    }
  });
});

function startServer() {
  app.listen(PORT, () => {
    console.log(`\n🚀 SkillBridge Backend running at: http://localhost:${PORT}`);
    console.log(`🧭 Matching API: http://localhost:${PORT}/api/matching/*`);
    console.log(`🤖 Gemini AI API: http://localhost:${PORT}/api/gemini`);
    console.log(`🔑 GEMINI_API_KEY: ${process.env.GEMINI_API_KEY ? 'Configured ✅' : 'Missing ❌'}\n`);
  });
}

startServer();
