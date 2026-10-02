# 🎓 SkillBridge — Career Skill-Gap Analyzer

SkillBridge is an interactive web platform designed to bridge the gap between academic curricula and practical industry demands. Built with **React 18** and **Node.js (Express)** with Gemini AI integration.

---

## ✨ Features

- **Dynamic Field & Career Selector**:
  - Filter across **5 Disciplines**: Computer Engineering (CE/IT), Mechanical Engineering (ME), Civil Engineering, Electrical & Electronics (EE/EC), and Commerce & Finance.
  - Automatically changes available target career roles (18+ career profiles mapped to dynamic skills).
- **Interactive Multi-Step Skill Gap Analyzer**:
  - Step 1: User Profile & Target Career selection.
  - Step 2: Categorized searchable skills checklist.
  - Step 3: Real-time match score (%), identified skill gaps, month-by-month learning roadmap, verified hiring companies, and curated learning resources.
- **AI Career Counselor**:
  - Interactive Gemini AI modal to generate personalized week-by-week roadmaps and interview preparation advice.
- **Dark / Light Mode**:
  - Persistent theme toggle with responsive styling.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..
```

### 2. Configure Environment (Optional)
In `.env`:
```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run Application
```bash
# Start backend server & frontend (Port 5000)
npm start
```

Visit **`http://localhost:5000`** in your browser.

For local development with Vite Hot Module Replacement:
```bash
# In terminal 1:
npm run server

# In terminal 2:
npm run client
```

---

## 📁 Project Structure

```
skillbridge/
├── client/                     # React 18 + Vite Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── analyzer/       # ProfileStep, SkillsStep, ResultsStep
│   │   │   ├── Navbar.jsx      # Navigation bar & theme switcher
│   │   │   ├── Hero.jsx        # Landing hero
│   │   │   ├── Stats.jsx       # Placement statistics
│   │   │   └── AiModal.jsx     # Gemini AI modal
│   │   ├── data/
│   │   │   └── careersData.js  # 18+ roles, skills, and roadmaps
│   │   ├── App.jsx             # Main layout & step state
│   │   └── index.css           # Styling & theme variables
│   └── package.json
├── server/                     # Node.js + Express Backend
│   ├── routes/
│   │   ├── matchingRoutes.js   # Fast in-memory matching & recommendations
│   │   └── geminiRoutes.js     # Gemini AI endpoint
│   ├── services/
│   │   └── inMemoryEngine.js   # Master catalog & matching logic
│   └── server.js               # Express application entry
├── .env
└── package.json
```
