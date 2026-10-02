const express = require('express');
const router = express.Router();

const GEMINI_MODELS = [
  'gemini-3.6-flash',
  'gemini-3.5-flash',
  'gemini-2.5-flash'
];

async function generateContentWithFallback(apiKey, prompt) {
  let lastError = null;

  for (const modelName of GEMINI_MODELS) {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    try {
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await response.json().catch(() => ({}));
      if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      }

      lastError = data.error?.message || `HTTP ${response.status} from ${modelName}`;
    } catch (err) {
      lastError = err.message;
    }
  }

  throw new Error(lastError || 'All Gemini model fallbacks failed.');
}

router.post('/gemini', async (req, res) => {
  try {
    const { prompt } = req.body || {};
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      return res.status(400).json({ error: 'GEMINI_API_KEY is not configured in .env' });
    }

    const text = await generateContentWithFallback(apiKey, prompt);
    res.json({ text });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Internal AI Server Error' });
  }
});

module.exports = router;
