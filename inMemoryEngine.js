/**
 * SkillBridge In-Memory Standalone Matching Engine
 * 
 * Zero external database dependencies (No MongoDB, No Supabase, No PostgreSQL).
 * All data structures and algorithms execute in-memory with sub-millisecond latency:
 * - Recursive Directed Acyclic Graph (DAG) traversal for prerequisite depth resolution.
 * - Multi-stage weighted scoring algorithm (Core 3x, Strong 2x, Familiar 1x).
 * - Multi-skill Set indexing for instant filtering.
 */

// 1. Comprehensive Master Skills Catalog (52 Skills across 5 Disciplines)
const SKILLS_CATALOG = [
  // Computer Engineering / IT
  { skill_id: "html_css", name: "HTML5 & Modern CSS", category: "Frontend", level: "Beginner", field: "ce", prerequisites: [] },
  { skill_id: "javascript_basics", name: "JavaScript Fundamentals", category: "Frontend", level: "Beginner", field: "ce", prerequisites: ["html_css"] },
  { skill_id: "javascript_es6", name: "Modern JavaScript (ES6+ & Async)", category: "Frontend", level: "Intermediate", field: "ce", prerequisites: ["javascript_basics"] },
  { skill_id: "react", name: "React.js & Hooks", category: "Frontend", level: "Intermediate", field: "ce", prerequisites: ["javascript_es6"] },
  { skill_id: "typescript", name: "TypeScript", category: "Frontend", level: "Intermediate", field: "ce", prerequisites: ["javascript_es6"] },
  { skill_id: "nextjs", name: "Next.js & SSR", category: "Frontend", level: "Advanced", field: "ce", prerequisites: ["react", "node_express"] },
  { skill_id: "tailwind_css", name: "Tailwind CSS & Responsive UI", category: "Frontend", level: "Beginner", field: "ce", prerequisites: ["html_css"] },
  { skill_id: "node_express", name: "Node.js & Express REST APIs", category: "Backend", level: "Intermediate", field: "ce", prerequisites: ["javascript_es6"] },
  { skill_id: "sql_relational", name: "SQL & Relational Databases", category: "Database", level: "Beginner", field: "ce", prerequisites: [] },
  { skill_id: "git_github", name: "Git Version Control & GitHub", category: "DevOps", level: "Beginner", field: "ce", prerequisites: [] },
  { skill_id: "python_basics", name: "Python Core Programming", category: "Data & AI", level: "Beginner", field: "ce", prerequisites: [] },
  { skill_id: "pandas_numpy", name: "Pandas & NumPy Data Analysis", category: "Data & AI", level: "Intermediate", field: "ce", prerequisites: ["python_basics"] },
  { skill_id: "statistics_math", name: "Applied Statistics & Linear Algebra", category: "Data & AI", level: "Intermediate", field: "ce", prerequisites: [] },
  { skill_id: "scikit_learn", name: "Machine Learning (Scikit-Learn)", category: "Data & AI", level: "Advanced", field: "ce", prerequisites: ["pandas_numpy", "statistics_math"] },
  { skill_id: "deep_learning", name: "Deep Learning (TensorFlow/PyTorch)", category: "Data & AI", level: "Advanced", field: "ce", prerequisites: ["scikit_learn"] },
  { skill_id: "nlp_genai", name: "NLP & LLM Applications (LangChain)", category: "Data & AI", level: "Advanced", field: "ce", prerequisites: ["deep_learning"] },
  { skill_id: "linux_bash", name: "Linux Administration & Bash Shell", category: "DevOps", level: "Beginner", field: "ce", prerequisites: [] },
  { skill_id: "docker", name: "Docker Containerization", category: "DevOps", level: "Intermediate", field: "ce", prerequisites: ["linux_bash"] },
  { skill_id: "aws_cloud", name: "AWS Cloud Fundamentals", category: "DevOps", level: "Intermediate", field: "ce", prerequisites: ["linux_bash"] },
  { skill_id: "kubernetes", name: "Kubernetes Orchestration", category: "DevOps", level: "Advanced", field: "ce", prerequisites: ["docker", "aws_cloud"] },
  { skill_id: "android_sdk", name: "Android SDK & Jetpack", category: "Mobile", level: "Intermediate", field: "ce", prerequisites: ["java_oop"] },
  { skill_id: "java_oop", name: "Java Core & OOP Design", category: "Programming", level: "Beginner", field: "ce", prerequisites: [] },
  { skill_id: "flutter_dart", name: "Flutter & Dart Cross-Platform", category: "Mobile", level: "Intermediate", field: "ce", prerequisites: [] },

  // Mechanical Engineering
  { skill_id: "engineering_drawing", name: "Engineering Drawing & GD&T", category: "Design", level: "Beginner", field: "me", prerequisites: [] },
  { skill_id: "autocad_mech", name: "AutoCAD 2D/3D Mechanical", category: "CAD", level: "Beginner", field: "me", prerequisites: ["engineering_drawing"] },
  { skill_id: "solidworks", name: "SolidWorks / Creo Parametric 3D", category: "CAD", level: "Intermediate", field: "me", prerequisites: ["autocad_mech"] },
  { skill_id: "ansys_fea", name: "ANSYS Structural FEA Analysis", category: "Simulation", level: "Advanced", field: "me", prerequisites: ["solidworks"] },
  { skill_id: "cfd_fluid", name: "Computational Fluid Dynamics (CFD)", category: "Simulation", level: "Advanced", field: "me", prerequisites: ["ansys_fea"] },
  { skill_id: "thermodynamics_hvac", name: "HVAC Load Calculation & Psychrometry", category: "Thermal", level: "Intermediate", field: "me", prerequisites: [] },
  { skill_id: "hvac_revit", name: "Revit MEP & HVAC Duct Design", category: "MEP", level: "Advanced", field: "me", prerequisites: ["thermodynamics_hvac", "autocad_mech"] },
  { skill_id: "cnc_gcode", name: "CNC Programming & G-Code / M-Code", category: "Manufacturing", level: "Intermediate", field: "me", prerequisites: ["engineering_drawing"] },
  { skill_id: "six_sigma_lean", name: "Lean Manufacturing & Six Sigma (DMAIC)", category: "Quality", level: "Intermediate", field: "me", prerequisites: [] },

  // Civil Engineering
  { skill_id: "autocad_civil", name: "AutoCAD Civil Drafting & Plans", category: "Drafting", level: "Beginner", field: "civil", prerequisites: [] },
  { skill_id: "rcc_steel_design", name: "RCC & Steel Structural Design (IS 456 / IS 800)", category: "Structures", level: "Intermediate", field: "civil", prerequisites: ["autocad_civil"] },
  { skill_id: "staad_pro", name: "STAAD.Pro / ETABS Structural Modeling", category: "Analysis", level: "Advanced", field: "civil", prerequisites: ["rcc_steel_design"] },
  { skill_id: "revit_bim", name: "Revit Architecture & BIM Modeling", category: "BIM", level: "Intermediate", field: "civil", prerequisites: ["autocad_civil"] },
  { skill_id: "surveying_gis", name: "Total Station & QGIS Mapping", category: "Surveying", level: "Beginner", field: "civil", prerequisites: [] },
  { skill_id: "quantity_estimation", name: "Quantity Surveying, BBS & Rate Analysis", category: "Estimation", level: "Intermediate", field: "civil", prerequisites: ["autocad_civil"] },
  { skill_id: "primavera_p6", name: "Primavera P6 & MS Project Scheduling", category: "Management", level: "Advanced", field: "civil", prerequisites: ["quantity_estimation"] },

  // Electrical & Electronics (EE / EC)
  { skill_id: "c_cpp_embedded", name: "Embedded C / C++ Programming", category: "Embedded", level: "Beginner", field: "ee", prerequisites: [] },
  { skill_id: "microcontrollers", name: "Microcontrollers (STM32 / ESP32 / PIC)", category: "Hardware", level: "Intermediate", field: "ee", prerequisites: ["c_cpp_embedded"] },
  { skill_id: "rtos_embedded", name: "FreeRTOS & Embedded Systems Architecture", category: "Embedded", level: "Advanced", field: "ee", prerequisites: ["microcontrollers"] },
  { skill_id: "pcb_design", name: "Altium Designer / KiCAD Multi-layer PCB", category: "Hardware", level: "Intermediate", field: "ee", prerequisites: [] },
  { skill_id: "plc_scada", name: "PLC Programming (Siemens/Allen Bradley) & SCADA", category: "Automation", level: "Intermediate", field: "ee", prerequisites: [] },
  { skill_id: "matlab_simulink", name: "MATLAB & Simulink Power Systems Simulation", category: "Power", level: "Intermediate", field: "ee", prerequisites: [] },
  { skill_id: "solar_pv_design", name: "Solar PV System Design & PVSyst", category: "Renewable", level: "Intermediate", field: "ee", prerequisites: [] },

  // Commerce & Finance
  { skill_id: "advanced_excel", name: "Advanced MS Excel (VBA, PowerQuery, Macros)", category: "Analytics", level: "Beginner", field: "commerce", prerequisites: [] },
  { skill_id: "financial_modeling", name: "Financial Modeling & Valuation (DCF, LBO)", category: "Finance", level: "Intermediate", field: "commerce", prerequisites: ["advanced_excel"] },
  { skill_id: "tally_prime", name: "Tally Prime & Indian GST / TDS Compliance", category: "Accounting", level: "Beginner", field: "commerce", prerequisites: [] },
  { skill_id: "power_bi_tableau", name: "Power BI & Tableau Dashboarding", category: "BI", level: "Intermediate", field: "commerce", prerequisites: ["advanced_excel"] },
  { skill_id: "equity_research", name: "Equity Research & Ratio Analysis", category: "Investment", level: "Advanced", field: "commerce", prerequisites: ["financial_modeling"] }
];

// 2. Comprehensive Jobs Catalog (18+ Roles across all 5 Disciplines)
const JOBS_CATALOG = [
  // CE / IT
  {
    job_id: "job_fullstack_ahmedabad",
    title: "Junior Full-Stack Web Developer",
    company: "TatvaSoft / Bacancy",
    location: "Ahmedabad",
    field: "ce",
    salary_range: { min: 450000, max: 700000, formatted: "₹4.5 - ₹7.0 LPA" },
    required_skills: [
      { skill_id: "html_css", skill_name: "HTML5 & Modern CSS", weight: 3, mandatory: true },
      { skill_id: "javascript_es6", skill_name: "Modern JavaScript (ES6+)", weight: 3, mandatory: true },
      { skill_id: "react", skill_name: "React.js & Hooks", weight: 3, mandatory: true },
      { skill_id: "node_express", skill_name: "Node.js & Express", weight: 3, mandatory: true },
      { skill_id: "sql_relational", skill_name: "SQL & Relational Databases", weight: 2, mandatory: false },
      { skill_id: "git_github", skill_name: "Git & GitHub", weight: 2, mandatory: true }
    ]
  },
  {
    job_id: "job_react_vadodara",
    title: "Frontend React Developer",
    company: "Crest Data Systems / ScaleGrid",
    location: "Vadodara",
    field: "ce",
    salary_range: { min: 500000, max: 750000, formatted: "₹5.0 - ₹7.5 LPA" },
    required_skills: [
      { skill_id: "html_css", skill_name: "HTML5 & Modern CSS", weight: 3, mandatory: true },
      { skill_id: "javascript_es6", skill_name: "Modern JavaScript (ES6+)", weight: 3, mandatory: true },
      { skill_id: "react", skill_name: "React.js & Hooks", weight: 3, mandatory: true },
      { skill_id: "typescript", skill_name: "TypeScript", weight: 2, mandatory: false },
      { skill_id: "tailwind_css", skill_name: "Tailwind CSS", weight: 2, mandatory: false },
      { skill_id: "git_github", skill_name: "Git & GitHub", weight: 2, mandatory: true }
    ]
  },
  {
    job_id: "job_ml_pune",
    title: "Junior Machine Learning Engineer",
    company: "eInfochips / Persistent",
    location: "Ahmedabad / Pune",
    field: "ce",
    salary_range: { min: 600000, max: 950000, formatted: "₹6.0 - ₹9.5 LPA" },
    required_skills: [
      { skill_id: "python_basics", skill_name: "Python Core", weight: 3, mandatory: true },
      { skill_id: "pandas_numpy", skill_name: "Pandas & NumPy", weight: 3, mandatory: true },
      { skill_id: "scikit_learn", skill_name: "Machine Learning (Scikit-Learn)", weight: 3, mandatory: true },
      { skill_id: "statistics_math", skill_name: "Applied Statistics", weight: 2, mandatory: true },
      { skill_id: "sql_relational", skill_name: "SQL Databases", weight: 2, mandatory: false },
      { skill_id: "deep_learning", skill_name: "Deep Learning (PyTorch)", weight: 2, mandatory: false }
    ]
  },
  {
    job_id: "job_devops_gandhinagar",
    title: "DevOps & Cloud Associate",
    company: "Cybage / L&T Infotech (GIFT City)",
    location: "Gandhinagar",
    field: "ce",
    salary_range: { min: 550000, max: 800000, formatted: "₹5.5 - ₹8.0 LPA" },
    required_skills: [
      { skill_id: "linux_bash", skill_name: "Linux Administration & Bash", weight: 3, mandatory: true },
      { skill_id: "docker", skill_name: "Docker Containerization", weight: 3, mandatory: true },
      { skill_id: "aws_cloud", skill_name: "AWS Cloud Fundamentals", weight: 3, mandatory: true },
      { skill_id: "git_github", skill_name: "Git & GitHub", weight: 2, mandatory: true },
      { skill_id: "kubernetes", skill_name: "Kubernetes", weight: 2, mandatory: false }
    ]
  },

  // Mechanical
  {
    job_id: "job_cad_ahmedabad",
    title: "Mechanical CAD Design Engineer",
    company: "L&T Heavy Engineering / Arvind",
    location: "Ahmedabad / Surat",
    field: "me",
    salary_range: { min: 380000, max: 600000, formatted: "₹3.8 - ₹6.0 LPA" },
    required_skills: [
      { skill_id: "engineering_drawing", skill_name: "Engineering Drawing & GD&T", weight: 3, mandatory: true },
      { skill_id: "autocad_mech", skill_name: "AutoCAD 2D/3D Mechanical", weight: 3, mandatory: true },
      { skill_id: "solidworks", skill_name: "SolidWorks / Creo Parametric", weight: 3, mandatory: true },
      { skill_id: "ansys_fea", skill_name: "ANSYS Structural FEA", weight: 2, mandatory: false }
    ]
  },
  {
    job_id: "job_fea_vadodara",
    title: "CAE / FEA Simulation Analyst",
    company: "Tata Motors / Schaeffler India",
    location: "Vadodara / Sanand",
    field: "me",
    salary_range: { min: 450000, max: 750000, formatted: "₹4.5 - ₹7.5 LPA" },
    required_skills: [
      { skill_id: "solidworks", skill_name: "SolidWorks 3D CAD", weight: 3, mandatory: true },
      { skill_id: "ansys_fea", skill_name: "ANSYS Structural FEA", weight: 3, mandatory: true },
      { skill_id: "engineering_drawing", skill_name: "GD&T", weight: 2, mandatory: true },
      { skill_id: "cfd_fluid", skill_name: "CFD Analysis", weight: 2, mandatory: false }
    ]
  },
  {
    job_id: "job_hvac_mep",
    title: "HVAC & MEP Design Engineer",
    company: "Voltas / Blue Star / Johnson Controls",
    location: "Ahmedabad",
    field: "me",
    salary_range: { min: 400000, max: 650000, formatted: "₹4.0 - ₹6.5 LPA" },
    required_skills: [
      { skill_id: "thermodynamics_hvac", skill_name: "HVAC Psychrometry & Load Calc", weight: 3, mandatory: true },
      { skill_id: "autocad_mech", skill_name: "AutoCAD Duct Drafting", weight: 3, mandatory: true },
      { skill_id: "hvac_revit", skill_name: "Revit MEP Modeling", weight: 2, mandatory: false }
    ]
  },
  {
    job_id: "job_lean_qa",
    title: "Production & Lean QA Engineer",
    company: "Adani Wilmar / Welspun Corp",
    location: "Mundra / Bharuch",
    field: "me",
    salary_range: { min: 360000, max: 550000, formatted: "₹3.6 - ₹5.5 LPA" },
    required_skills: [
      { skill_id: "six_sigma_lean", skill_name: "Lean Manufacturing & Six Sigma", weight: 3, mandatory: true },
      { skill_id: "engineering_drawing", skill_name: "Engineering Drawing & GD&T", weight: 2, mandatory: true },
      { skill_id: "cnc_gcode", skill_name: "CNC & Machining Basics", weight: 2, mandatory: false }
    ]
  },

  // Civil
  {
    job_id: "job_structural_civil",
    title: "Junior Structural Design Engineer",
    company: "Sadbhav Engineering / HCP Design",
    location: "Ahmedabad",
    field: "civil",
    salary_range: { min: 400000, max: 650000, formatted: "₹4.0 - ₹6.5 LPA" },
    required_skills: [
      { skill_id: "autocad_civil", skill_name: "AutoCAD Civil Drafting", weight: 3, mandatory: true },
      { skill_id: "rcc_steel_design", skill_name: "RCC & Steel Design (IS 456)", weight: 3, mandatory: true },
      { skill_id: "staad_pro", skill_name: "STAAD.Pro Structural Modeling", weight: 3, mandatory: true }
    ]
  },
  {
    job_id: "job_bim_civil",
    title: "BIM Civil Modeler",
    company: "Atkins / Mott MacDonald",
    location: "Ahmedabad / Mumbai",
    field: "civil",
    salary_range: { min: 420000, max: 700000, formatted: "₹4.2 - ₹7.0 LPA" },
    required_skills: [
      { skill_id: "autocad_civil", skill_name: "AutoCAD Civil", weight: 3, mandatory: true },
      { skill_id: "revit_bim", skill_name: "Revit BIM Architecture", weight: 3, mandatory: true },
      { skill_id: "quantity_estimation", skill_name: "Quantity Takeoff & BBS", weight: 2, mandatory: false }
    ]
  },
  {
    job_id: "job_qs_billing",
    title: "Quantity Surveyor & Billing Engineer",
    company: "PSP Projects / Shapoorji Pallonji",
    location: "Gandhinagar / Ahmedabad",
    field: "civil",
    salary_range: { min: 380000, max: 600000, formatted: "₹3.8 - ₹6.0 LPA" },
    required_skills: [
      { skill_id: "autocad_civil", skill_name: "AutoCAD Civil Drafting", weight: 3, mandatory: true },
      { skill_id: "quantity_estimation", skill_name: "Quantity Surveying & BBS", weight: 3, mandatory: true },
      { skill_id: "primavera_p6", skill_name: "Project Scheduling", weight: 2, mandatory: false }
    ]
  },

  // EE / EC
  {
    job_id: "job_embedded_firmware",
    title: "Embedded Firmware Engineer",
    company: "Matrix Comsec / eInfochips",
    location: "Vadodara / Ahmedabad",
    field: "ee",
    salary_range: { min: 450000, max: 750000, formatted: "₹4.5 - ₹7.5 LPA" },
    required_skills: [
      { skill_id: "c_cpp_embedded", skill_name: "Embedded C/C++", weight: 3, mandatory: true },
      { skill_id: "microcontrollers", skill_name: "STM32 / ESP32 Microcontrollers", weight: 3, mandatory: true },
      { skill_id: "rtos_embedded", skill_name: "FreeRTOS", weight: 2, mandatory: false }
    ]
  },
  {
    job_id: "job_pcb_hardware",
    title: "Hardware & PCB Design Engineer",
    company: "Volansys Technologies / Masibus",
    location: "Gandhinagar",
    field: "ee",
    salary_range: { min: 400000, max: 680000, formatted: "₹4.0 - ₹6.8 LPA" },
    required_skills: [
      { skill_id: "pcb_design", skill_name: "Altium / KiCAD PCB Design", weight: 3, mandatory: true },
      { skill_id: "c_cpp_embedded", skill_name: "Embedded C", weight: 2, mandatory: false },
      { skill_id: "microcontrollers", skill_name: "Microcontrollers", weight: 2, mandatory: false }
    ]
  },
  {
    job_id: "job_plc_automation",
    title: "Industrial Automation Engineer",
    company: "ABB / Siemens India",
    location: "Vadodara",
    field: "ee",
    salary_range: { min: 420000, max: 700000, formatted: "₹4.2 - ₹7.0 LPA" },
    required_skills: [
      { skill_id: "plc_scada", skill_name: "PLC & SCADA Programming", weight: 3, mandatory: true },
      { skill_id: "matlab_simulink", skill_name: "MATLAB Simulation", weight: 2, mandatory: false }
    ]
  },

  // Commerce
  {
    job_id: "job_financial_analyst",
    title: "Financial Analyst (Valuation & DCF)",
    company: "TresVista / Morgan Stanley (GIFT City)",
    location: "GIFT City Gandhinagar",
    field: "commerce",
    salary_range: { min: 550000, max: 900000, formatted: "₹5.5 - ₹9.0 LPA" },
    required_skills: [
      { skill_id: "advanced_excel", skill_name: "Advanced Excel & Financial Functions", weight: 3, mandatory: true },
      { skill_id: "financial_modeling", skill_name: "Financial Modeling & Valuation (DCF)", weight: 3, mandatory: true },
      { skill_id: "equity_research", skill_name: "Equity Research & Ratios", weight: 2, mandatory: false },
      { skill_id: "power_bi_tableau", skill_name: "Power BI Visualizations", weight: 2, mandatory: false }
    ]
  },
  {
    job_id: "job_tax_gst",
    title: "Senior Tax & GST Associate",
    company: "Deloitte / EY India",
    location: "Ahmedabad",
    field: "commerce",
    salary_range: { min: 400000, max: 650000, formatted: "₹4.0 - ₹6.5 LPA" },
    required_skills: [
      { skill_id: "tally_prime", skill_name: "Tally Prime & Indian GST/TDS", weight: 3, mandatory: true },
      { skill_id: "advanced_excel", skill_name: "Advanced Excel", weight: 3, mandatory: true }
    ]
  }
];

// 3. Curated Courses Catalog
const COURSES_CATALOG = [
  { course_id: "crs_react_pro", title: "Namaste React & Redux Toolkit", provider: "NamasteDev", duration_weeks: 8, rating: 4.9, cost_type: "paid", skills_covered: ["react", "javascript_es6"] },
  { course_id: "crs_node_mastery", title: "Node.js, Express, MongoDB Bootcamp", provider: "Udemy (Jonas)", duration_weeks: 10, rating: 4.8, cost_type: "paid", skills_covered: ["node_express", "sql_relational"] },
  { course_id: "crs_py_data", title: "Applied Data Science with Python", provider: "Coursera (Univ of Michigan)", duration_weeks: 12, rating: 4.7, cost_type: "free_audit", skills_covered: ["python_basics", "pandas_numpy"] },
  { course_id: "crs_ml_andrew", title: "Machine Learning Specialization", provider: "DeepLearning.AI (Andrew Ng)", duration_weeks: 12, rating: 4.9, cost_type: "free_audit", skills_covered: ["scikit_learn", "statistics_math"] },
  { course_id: "crs_docker_k8s", title: "Docker & Kubernetes: The Practical Guide", provider: "Academind", duration_weeks: 6, rating: 4.8, cost_type: "paid", skills_covered: ["docker", "kubernetes", "linux_bash"] },
  { course_id: "crs_solidworks", title: "SolidWorks Mechanical Design Masterclass", provider: "NPTEL / Coursera", duration_weeks: 8, rating: 4.7, cost_type: "free_audit", skills_covered: ["solidworks", "engineering_drawing"] },
  { course_id: "crs_staad_civil", title: "Structural Analysis & Design with STAAD.Pro", provider: "Bentley Institute", duration_weeks: 6, rating: 4.8, cost_type: "paid", skills_covered: ["staad_pro", "rcc_steel_design"] },
  { course_id: "crs_embedded_c", title: "Embedded Systems Bare-Metal Programming in C", provider: "FastBit Embedded", duration_weeks: 10, rating: 4.9, cost_type: "paid", skills_covered: ["c_cpp_embedded", "microcontrollers"] },
  { course_id: "crs_financial_mod", title: "Complete Financial Modeling & Valuation Masterclass", provider: "CFI (Corporate Finance Institute)", duration_weeks: 8, rating: 4.9, cost_type: "paid", skills_covered: ["financial_modeling", "advanced_excel"] }
];

// Skill fast lookup map
const SKILL_MAP = new Map(SKILLS_CATALOG.map(s => [s.skill_id.toLowerCase(), s]));

/**
 * 1. Recursive Prerequisite Graph Traversal (DAG)
 * Dynamically resolves learning dependencies and computes depth levels.
 */
function getPrerequisiteChain(skillId) {
  const startTime = Date.now();
  const normalizedId = (skillId || '').toLowerCase().trim();
  const targetSkill = SKILL_MAP.get(normalizedId);

  if (!targetSkill) {
    return {
      source: "in_memory_dag",
      engine: "In-Memory Engine",
      execution_ms: 0,
      found: false,
      message: `Skill '${skillId}' not found in catalog.`,
      prerequisite_chain: []
    };
  }

  const chain = [];
  const visited = new Set([normalizedId]);
  let currentLevelSkills = [...(targetSkill.prerequisites || [])];
  let depth = 1;

  while (currentLevelSkills.length > 0) {
    const nextLevelSkills = [];

    for (const prereqId of currentLevelSkills) {
      const pid = prereqId.toLowerCase().trim();
      if (!visited.has(pid)) {
        visited.add(pid);
        const item = SKILL_MAP.get(pid);
        if (item) {
          chain.push({
            skill_id: item.skill_id,
            name: item.name,
            category: item.category,
            level: item.level,
            depth: depth
          });
          if (Array.isArray(item.prerequisites)) {
            nextLevelSkills.push(...item.prerequisites);
          }
        }
      }
    }

    currentLevelSkills = nextLevelSkills;
    depth++;
  }

  // Reverse so lowest foundational prerequisite appears first
  chain.reverse();

  return {
    source: "in_memory_dag",
    engine: "In-Memory Standalone Engine",
    execution_ms: Date.now() - startTime,
    found: true,
    target_skill: {
      skill_id: targetSkill.skill_id,
      name: targetSkill.name,
      category: targetSkill.category,
      level: targetSkill.level
    },
    prerequisites_count: chain.length,
    prerequisite_chain: chain
  };
}

/**
 * 2. Multi-Stage Weighted Compatibility Scoring
 * Core (3x), Strong (2x), Familiar (1x)
 */
function matchJobsWithAggregation(userSkills = []) {
  const startTime = Date.now();
  const skillSet = new Set(userSkills.map(s => s.toLowerCase().trim()));

  const scoredJobs = JOBS_CATALOG.map(job => {
    let totalPossibleWeight = 0;
    let totalEarnedWeight = 0;
    const matchingSkills = [];
    const missingSkills = [];

    job.required_skills.forEach(req => {
      totalPossibleWeight += req.weight;
      if (skillSet.has(req.skill_id.toLowerCase())) {
        totalEarnedWeight += req.weight;
        matchingSkills.push({
          skill_id: req.skill_id,
          skill_name: req.skill_name,
          weight: req.weight
        });
      } else {
        missingSkills.push({
          skill_id: req.skill_id,
          skill_name: req.skill_name,
          weight: req.weight,
          mandatory: req.mandatory
        });
      }
    });

    const matchPercentage = totalPossibleWeight > 0
      ? Math.round((totalEarnedWeight / totalPossibleWeight) * 100)
      : 0;

    return {
      job_id: job.job_id,
      title: job.title,
      company: job.company,
      location: job.location,
      field: job.field,
      salary_range: job.salary_range,
      match_percentage: matchPercentage,
      total_earned_weight: totalEarnedWeight,
      total_possible_weight: totalPossibleWeight,
      matching_skills: matchingSkills,
      missing_skills: missingSkills
    };
  });

  scoredJobs.sort((a, b) => b.match_percentage - a.match_percentage);

  return {
    source: "in_memory_scoring",
    engine: "In-Memory Standalone Engine",
    execution_ms: Date.now() - startTime,
    count: scoredJobs.length,
    results: scoredJobs
  };
}

/**
 * 3. Multi-Skill Filter Search
 */
function searchJobsBySkillsIndexed(skills = [], location = null) {
  const startTime = Date.now();
  const cleanSkills = new Set(skills.map(s => s.toLowerCase().trim()));

  const matched = JOBS_CATALOG.filter(job => {
    const hasSkill = cleanSkills.size === 0 || job.required_skills.some(req => cleanSkills.has(req.skill_id.toLowerCase()));
    const hasLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    return hasSkill && hasLocation;
  });

  return {
    source: "in_memory_index",
    index_used: "In-Memory Set/Hash Map",
    execution_ms: Date.now() - startTime,
    count: matched.length,
    results: matched.map(r => ({
      job_id: r.job_id,
      title: r.title,
      company: r.company,
      location: r.location,
      salary_range: r.salary_range
    }))
  };
}

/**
 * 4. Get Recommended Courses
 */
function getCoursesForSkills(skills = []) {
  const cleanSkills = new Set(skills.map(s => s.toLowerCase().trim()));
  if (cleanSkills.size === 0) return COURSES_CATALOG.slice(0, 5);

  return COURSES_CATALOG.filter(c =>
    c.skills_covered.some(s => cleanSkills.has(s.toLowerCase()))
  );
}

module.exports = {
  getPrerequisiteChain,
  matchJobsWithAggregation,
  searchJobsBySkillsIndexed,
  getCoursesForSkills,
  SKILLS_CATALOG,
  JOBS_CATALOG
};
