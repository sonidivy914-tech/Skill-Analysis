export const STREAMS = [
  { id: "all", name: "🌐 All Fields / Interdisciplinary" },
  { id: "ce", name: "💻 Computer Engineering / IT / CS" },
  { id: "me", name: "⚙️ Mechanical & Automobile Engineering" },
  { id: "civil", name: "🏗️ Civil & Infrastructure Engineering" },
  { id: "ee_ec", name: "⚡ Electrical & Electronics (EE / EC)" },
  { id: "commerce", name: "📈 Commerce, Finance & Business Management" }
];

export const CAREER_DATA = {
  // ==========================================
  // 1. COMPUTER ENGINEERING & IT
  // ==========================================
  "webdev": {
    field: "ce",
    title: "Full-Stack Web Developer (JS/React)",
    category: "IT & Computer Science",
    required: ["HTML/CSS", "JavaScript (ES6+)", "React.js", "Node.js & Express", "Git/GitHub", "REST APIs", "SQL / MySQL", "Data Structures & Algo"],
    nice: ["TypeScript", "MongoDB", "Docker", "Next.js", "Tailwind CSS"],
    jobs: [
      { role: "Junior Full-Stack Dev", company: "Tech Mahindra / TCS", loc: "Ahmedabad", salary: "₹4.5 - ₹6.5 LPA", match: "High" },
      { role: "Frontend React Developer", company: "ScaleGrid / Crest Data Systems", loc: "Vadodara", salary: "₹5.0 - ₹7.5 LPA", match: "High" },
      { role: "Node.js Backend Engineer", company: "Simform", loc: "Ahmedabad", salary: "₹5.5 - ₹8.0 LPA", match: "Medium" },
      { role: "Web Application Engineer", company: "Bacancy Technology", loc: "Surat", salary: "₹4.0 - ₹6.0 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Core Web Fundamentals & Git", desc: "Master HTML5 semantic elements, CSS Flexbox/Grid, version control with Git, and GitHub workflows." },
      { month: "Month 2", title: "Advanced JavaScript & DOM", desc: "Deep dive into Async/Await, ES6+ features, Closures, Promises, and DOM manipulation." },
      { month: "Month 3", title: "Frontend Framework (React.js)", desc: "Build SPA applications using React Hooks, State Management, and REST API consumption." },
      { month: "Month 4", title: "Backend Development (Node/Express)", desc: "Create RESTful API microservices, authentication with JWT, and database interactions." },
      { month: "Month 5", title: "Database Systems & Integration", desc: "Design relational schemas in MySQL/PostgreSQL and NoSQL collections in MongoDB." },
      { month: "Month 6", title: "Full-Stack Deployment & Portfolio", desc: "Deploy apps on Vercel/AWS, build 3 full-stack projects, and prepare for placement interviews." }
    ],
    resources: [
      { name: "freeCodeCamp HTML & JS", type: "Interactive", url: "https://www.freecodecamp.org/", color: "teal", icon: "💻" },
      { name: "JavaScript.info Modern Tutorial", type: "Docs", url: "https://javascript.info/", color: "blue", icon: "📖" },
      { name: "React Official Documentation", type: "Docs", url: "https://react.dev/", color: "purple", icon: "⚛️" },
      { name: "Traversy Media Node.js Crash Course", type: "YouTube", url: "https://www.youtube.com/", color: "amber", icon: "🎥" }
    ]
  },

  "datascience": {
    field: "ce",
    title: "Data Scientist / ML Engineer",
    category: "IT & Computer Science",
    required: ["Python", "SQL", "Pandas & NumPy", "Scikit-Learn", "Statistics & Linear Algebra", "Data Visualization (Matplotlib/Seaborn)", "Machine Learning Algorithms"],
    nice: ["Deep Learning (TensorFlow/PyTorch)", "Big Data (PySpark)", "Tableau/PowerBI", "MLOps & Docker"],
    jobs: [
      { role: "Associate Data Analyst", company: "NielsenIQ", loc: "Vadodara", salary: "₹5.0 - ₹7.0 LPA", match: "High" },
      { role: "Junior ML Engineer", company: "LTI Mindtree", loc: "GIFT City Ahmedabad", salary: "₹6.0 - ₹9.0 LPA", match: "Medium" },
      { role: "Data Specialist", company: "Reliance Jio Tech", loc: "Surat", salary: "₹5.5 - ₹8.0 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Python Programming & Mathematics", desc: "Master Python data structures, vector math, linear algebra, and basic probability." },
      { month: "Month 2", title: "Data Wrangling & Exploratory Analysis", desc: "Clean and analyze real-world datasets with Pandas, NumPy, and SQL queries." },
      { month: "Month 3", title: "Supervised Machine Learning", desc: "Implement Regression, Classification, Decision Trees, and Random Forests using Scikit-Learn." },
      { month: "Month 4", title: "Unsupervised Learning & Model Tuning", desc: "Master K-Means clustering, PCA dimension reduction, and Hyperparameter Optimization." },
      { month: "Month 5", title: "Model Evaluation & Deployment", desc: "Build interactive dashboards using Streamlit and deploy ML APIs via FastAPI." }
    ],
    resources: [
      { name: "Kaggle Learn Micro-Courses", type: "Practice", url: "https://www.kaggle.com/learn", color: "blue", icon: "📊" },
      { name: "StatQuest Machine Learning", type: "YouTube", url: "https://www.youtube.com/", color: "coral", icon: "🎥" },
      { name: "Scikit-Learn User Guide", type: "Docs", url: "https://scikit-learn.org/", color: "teal", icon: "🤖" }
    ]
  },

  "android": {
    field: "ce",
    title: "Android App Developer",
    category: "IT & Computer Science",
    required: ["Kotlin", "Android SDK", "Jetpack Compose", "REST API & Retrofit", "Git", "SQLite / Room DB"],
    nice: ["Java", "Coroutines & Flow", "Firebase", "Unit Testing (JUnit)"],
    jobs: [
      { role: "Junior Android Developer", company: "TatvaSoft", loc: "Ahmedabad", salary: "₹4.0 - ₹6.5 LPA", match: "High" },
      { role: "Mobile App Engineer", company: "Hidden Brains", loc: "Ahmedabad", salary: "₹4.5 - ₹7.0 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Kotlin Fundamentals", desc: "Learn object-oriented Kotlin, null safety, lambdas, and collection APIs." },
      { month: "Month 2", title: "Android Studio & Jetpack Compose UI", desc: "Build responsive native mobile UI layouts using Jetpack Compose." },
      { month: "Month 3", title: "API Integration & Local Storage", desc: "Fetch online data with Retrofit and store local data in Room Database." },
      { month: "Month 4", title: "Architecture (MVVM) & Play Store", desc: "Implement clean MVVM architecture, state handling, and publish apps to Play Store." }
    ],
    resources: [
      { name: "Android Developers Official Courses", type: "Course", url: "https://developer.android.com/courses", color: "teal", icon: "🤖" },
      { name: "Philipp Lackner YouTube", type: "YouTube", url: "https://www.youtube.com/", color: "purple", icon: "📱" }
    ]
  },

  "devops": {
    field: "ce",
    title: "DevOps & Cloud Engineer",
    category: "IT & Computer Science",
    required: ["Linux / Bash Shell", "Docker & Containerization", "Git", "AWS Core Services", "CI/CD Pipelines (GitHub Actions/Jenkins)", "Networking Basics"],
    nice: ["Kubernetes", "Terraform / IaC", "Python Automation", "Prometheus & Grafana"],
    jobs: [
      { role: "Associate DevOps Engineer", company: "EInfochips (Arrow)", loc: "Ahmedabad", salary: "₹5.5 - ₹8.5 LPA", match: "High" },
      { role: "Cloud Support Infrastructure Analyst", company: "L&T Technology Services", loc: "Vadodara", salary: "₹5.0 - ₹7.5 LPA", match: "Medium" }
    ],
    roadmap: [
      { month: "Month 1", title: "Linux Administration & Scripting", desc: "Master Linux shell commands, permissions, SSH, and Bash automation scripts." },
      { month: "Month 2", title: "Containerization with Docker", desc: "Build custom Docker images, write Dockerfiles, and compose multi-container stacks." },
      { month: "Month 3", title: "Cloud Architecture (AWS)", desc: "Configure EC2, S3, VPC networking, IAM security, and RDS database instances." },
      { month: "Month 4", title: "Automated CI/CD Pipelines", desc: "Build automated build, test, and release pipelines using GitHub Actions." }
    ],
    resources: [
      { name: "KodeKloud DevOps Basics", type: "Interactive", url: "https://kodekloud.com/", color: "amber", icon: "☁️" },
      { name: "TechWorld with Nana", type: "YouTube", url: "https://www.youtube.com/", color: "blue", icon: "🐳" }
    ]
  },

  "cybersecurity": {
    field: "ce",
    title: "Cybersecurity & SOC Analyst",
    category: "IT & Computer Science",
    required: ["Network Security & Wireshark", "Linux Security & Kali Linux", "Ethical Hacking & Vulnerability Assessment", "SIEM Tools (Splunk / ELK)", "OWASP Top 10", "Cryptography Basics"],
    nice: ["CompTIA Security+ / CEH", "Burp Suite Pro", "Cloud Security (AWS GuardDuty)", "Firewalls & VPNs"],
    jobs: [
      { role: "Junior SOC Analyst (L1)", company: "Adani Enterprise Cyber Defense", loc: "Ahmedabad", salary: "₹5.0 - ₹8.0 LPA", match: "High" },
      { role: "Information Security Trainee", company: "GIFT City Cyber Center", loc: "Gandhinagar", salary: "₹5.5 - ₹8.5 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Computer Networks & TCP/IP Packets", desc: "Master packet sniffing with Wireshark, ports, OSI layers, DNS, and subnetting." },
      { month: "Month 2", title: "Linux CLI & Kali Security Tools", desc: "Learn Nmap scanning, SSH hardening, Metasploit basics, and permission auditing." },
      { month: "Month 3", title: "Web App Penetration Testing (OWASP)", desc: "Detect and mitigate SQL Injection, XSS cross-site scripting, and CSRF." },
      { month: "Month 4", title: "Security Operations & Incident Response", desc: "Analyze security event logs in Splunk and formulate incident response mitigation steps." }
    ],
    resources: [
      { name: "TryHackMe Pre-Security Path", type: "Practice", url: "https://tryhackme.com/", color: "coral", icon: "🛡️" },
      { name: "OverTheWire Bandit Wargames", type: "Practice", url: "https://overthewire.org/", color: "teal", icon: "💻" }
    ]
  },

  "uiux": {
    field: "ce",
    title: "UI/UX & Product Designer",
    category: "Design & Product",
    required: ["Figma", "User Research & Personas", "Wireframing & Prototyping", "Design Systems & Typography", "Information Architecture", "Usability Testing"],
    nice: ["HTML/CSS Knowledge", "Adobe XD / Illustrator", "Micro-interactions", "Design Handoff"],
    jobs: [
      { role: "Junior UI/UX Designer", company: "Simform Design Studio", loc: "Ahmedabad", salary: "₹4.0 - ₹6.0 LPA", match: "High" },
      { role: "Product Designer", company: "Volansys Technologies", loc: "Ahmedabad", salary: "₹4.5 - ₹7.0 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "UI Foundations & Design Principles", desc: "Learn color theory, visual hierarchy, grid systems, and typography rules." },
      { month: "Month 2", title: "Figma Masterclass & Components", desc: "Master Figma auto-layout, component variants, wireframing, and interactive prototypes." },
      { month: "Month 3", title: "UX Research & User Journeys", desc: "Conduct user interviews, create personas, map empathy maps and user journey flows." },
      { month: "Month 4", title: "Portfolio Case Studies", desc: "Complete 2 end-to-end design case studies and prepare design system handoffs." }
    ],
    resources: [
      { name: "Figma YouTube Official Channel", type: "YouTube", url: "https://www.youtube.com/", color: "purple", icon: "🎨" },
      { name: "Laws of UX Guide", type: "Docs", url: "https://lawsofux.com/", color: "teal", icon: "💡" }
    ]
  },

  // ==========================================
  // 2. MECHANICAL & AUTOMOBILE ENGINEERING
  // ==========================================
  "cad-designer": {
    field: "me",
    title: "CAD & Product Design Engineer",
    category: "Mechanical & Automobile",
    required: ["AutoCAD 2D/3D", "SolidWorks / Creo", "Engineering Drawing (GD&T)", "Material Selection", "Machine Design Principles", "Manufacturing Processes"],
    nice: ["CATIA", "ANSYS FEA Analysis", "3D Printing / Rapid Prototyping", "DFM / DFA"],
    jobs: [
      { role: "Design Trainee Engineer", company: "L&T Heavy Engineering", loc: "Hazira Surat", salary: "₹4.2 - ₹6.5 LPA", match: "High" },
      { role: "CAD Drafter & Designer", company: "Elecon Engineering", loc: "Anand / Vallabh Vidyanagar", salary: "₹3.8 - ₹5.5 LPA", match: "High" },
      { role: "Product Design Specialist", company: "Schaeffler India", loc: "Vadodara", salary: "₹4.5 - ₹7.0 LPA", match: "Medium" }
    ],
    roadmap: [
      { month: "Month 1", title: "Engineering Drawing & GD&T", desc: "Master geometric dimensioning & tolerancing, orthographic projections, and ISO standards." },
      { month: "Month 2", title: "2D & 3D Drafting in AutoCAD", desc: "Create parametric 2D mechanical sketches, assembly drawings, and title block specs." },
      { month: "Month 3", title: "3D Parametric Modeling (SolidWorks)", desc: "Build 3D mechanical components, sheet metal designs, and exploded assembly models." },
      { month: "Month 4", title: "Design for Manufacturing (DFM)", desc: "Apply DFM/DFA guidelines for machining, casting, injection molding, and fabrication." }
    ],
    resources: [
      { name: "SolidWorks Official Tutorials", type: "Docs", url: "https://my.solidworks.com/", color: "amber", icon: "📐" },
      { name: "LearnCAD YouTube Channel", type: "YouTube", url: "https://www.youtube.com/", color: "blue", icon: "⚙️" }
    ]
  },

  "production-eng": {
    field: "me",
    title: "Production & Manufacturing Engineer",
    category: "Mechanical & Automobile",
    required: ["CNC Programming & Machining", "Quality Control & 7 QC Tools", "Lean Manufacturing & 5S", "Process Planning", "Supply Chain Basics", "Industrial Safety"],
    nice: ["Six Sigma Green Belt", "ERP / SAP Production Module", "Kaizen & TPM", "Robotic Automation"],
    jobs: [
      { role: "Production Graduate Engineer Trainee", company: "MG Motor India", loc: "Halol Plant (Panchmahal)", salary: "₹4.5 - ₹6.8 LPA", match: "High" },
      { role: "Manufacturing Quality Engineer", company: "Adani Wilmar Industrial", loc: "Mundra / Gandhidham", salary: "₹4.0 - ₹6.2 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Manufacturing Operations & Safety", desc: "Learn shop-floor safety, machining operations, casting, forging, and welding metallurgy." },
      { month: "Month 2", title: "Quality Control & 7 QC Tools", desc: "Apply Pareto charts, Ishikawa fishbone diagrams, control charts, and CMM inspection." },
      { month: "Month 3", title: "Lean Manufacturing & 5S Implementation", desc: "Implement Kaizen continuous improvement, Value Stream Mapping, and 5S workplace setup." },
      { month: "Month 4", title: "CNC G-Code / M-Code Programming", desc: "Write G-code programs for CNC Lathe and VMC milling machines." }
    ],
    resources: [
      { name: "NPTEL Manufacturing Technology", type: "Course", url: "https://nptel.ac.in/", color: "teal", icon: "🏭" },
      { name: "Lean Enterprise Institute", type: "Docs", url: "https://www.lean.org/", color: "amber", icon: "📈" }
    ]
  },

  "auto-eng": {
    field: "me",
    title: "Automobile & EV Systems Engineer",
    category: "Mechanical & Automobile",
    required: ["Automotive Chassis & Powertrain", "Internal Combustion Engines / EV Tech", "Vehicle Dynamics", "AutoCAD / SolidWorks", "Thermodynamics"],
    nice: ["MATLAB / Simulink", "Battery Management Systems (BMS)", "Hybrid Electric Vehicles (HEV)", "ANSYS CFD"],
    jobs: [
      { role: "EV Systems Trainee", company: "Tata Motors Commercial Vehicles", loc: "Sanand Plant Ahmedabad", salary: "₹5.0 - ₹7.5 LPA", match: "High" },
      { role: "Automobile Design Engineer", company: "Hero MotoCorp R&D", loc: "Vadodara", salary: "₹4.8 - ₹7.2 LPA", match: "Medium" }
    ],
    roadmap: [
      { month: "Month 1", title: "Vehicle Subsystems & Powertrains", desc: "Study transmission systems, braking, suspension geometry, and steering mechanisms." },
      { month: "Month 2", title: "Electric Vehicle (EV) Fundamentals", desc: "Understand Lithium-ion battery chemistry, BMS protection circuits, and BLDC motors." },
      { month: "Month 3", title: "Automotive Simulation (MATLAB/Simulink)", desc: "Model vehicle acceleration dynamics, battery state of charge, and regenerative braking." }
    ],
    resources: [
      { name: "NPTEL Electric Vehicles Course", type: "Course", url: "https://nptel.ac.in/", color: "teal", icon: "🚗" }
    ]
  },

  "robotics-mechatronics": {
    field: "me",
    title: "Robotics & Automation Engineer",
    category: "Mechanical & Automobile",
    required: ["Industrial Robotics & Kinematics", "PLC & SCADA Programming", "Microcontrollers & Sensors", "Pneumatics & Hydraulics", "SolidWorks / CAD", "Python / C++ Basics"],
    nice: ["ROS (Robot Operating System)", "Computer Vision (OpenCV)", "Digital Twins", "Automated Guided Vehicles (AGV)"],
    jobs: [
      { role: "Automation Engineer Trainee", company: "Fanuc India / ABB Robotics", loc: "Ahmedabad / Sanand", salary: "₹5.2 - ₹8.0 LPA", match: "High" },
      { role: "Mechatronics Project Engineer", company: "Elecon Industrial Automation", loc: "Vallabh Vidyanagar", salary: "₹4.5 - ₹7.0 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Robotic Kinematics & Coordinate Frames", desc: "Master forward and inverse kinematics, degrees of freedom, and end-effector design." },
      { month: "Month 2", title: "Industrial PLC & Actuators", desc: "Program pneumatic cylinders, servo drives, and robotic pick-and-place routines." },
      { month: "Month 3", title: "Robot Operating System (ROS)", desc: "Build simulation models in Gazebo and interface hardware sensors with ROS nodes." }
    ],
    resources: [
      { name: "ROS Official Tutorials", type: "Docs", url: "http://wiki.ros.org/", color: "blue", icon: "🤖" }
    ]
  },

  // ==========================================
  // 3. CIVIL & INFRASTRUCTURE ENGINEERING
  // ==========================================
  "structural-eng": {
    field: "civil",
    title: "Structural Engineer",
    category: "Civil Engineering",
    required: ["STAAD.Pro / ETABS", "AutoCAD Civil", "RCC & Steel Design (IS 456 & IS 800)", "Structural Analysis", "Building Codes & Specifications", "Concrete Technology"],
    nice: ["Revit Structure (BIM)", "SAFE Foundation Design", "Earthquake Engineering (IS 1893)", "Quantity Surveying"],
    jobs: [
      { role: "Junior Structural Engineer", company: "GIFT City Infrastructure Dev", loc: "Gandhinagar", salary: "₹4.2 - ₹6.5 LPA", match: "High" },
      { role: "Structural Detailing Engineer", company: "L&T Construction (ECC)", loc: "Ahmedabad", salary: "₹4.5 - ₹7.0 LPA", match: "High" },
      { role: "Design Engineer Trainee", company: "Gammon India Consultancy", loc: "Vadodara", salary: "₹3.8 - ₹5.8 LPA", match: "Medium" }
    ],
    roadmap: [
      { month: "Month 1", title: "Indian Standards (IS Codes) & RCC Design", desc: "Master IS 456 RCC design for beams, slabs, columns, and IS 800 steel design limits." },
      { month: "Month 2", title: "Computer Aided Analysis (STAAD.Pro)", desc: "Model multi-story frame structures, apply dead/live loads, wind loads, and shear forces." },
      { month: "Month 3", title: "ETABS & Seismic Analysis (IS 1893)", desc: "Perform equivalent static seismic analysis and dynamic response spectrum analysis." },
      { month: "Month 4", title: "BIM Integration with Revit", desc: "Create 3D structural BIM models and extract reinforcement schedule quantities." }
    ],
    resources: [
      { name: "NPTEL Structural Analysis", type: "Course", url: "https://nptel.ac.in/", color: "blue", icon: "🏢" },
      { name: "Bentley STAAD.Pro Learn", type: "Docs", url: "https://www.bentley.com/", color: "teal", icon: "🏗️" }
    ]
  },

  "construction-eng": {
    field: "civil",
    title: "Site & Construction Engineer",
    category: "Civil Engineering",
    required: ["Site Supervision & Quality Check", "AutoCAD Civil", "Estimation & Quantity Surveying (BOQ)", "Surveying (Total Station)", "Safety Management (HSE)", "Concrete Testing"],
    nice: ["MS Project / Primavera P6", "Contract Management (FIDIC)", "Bar Bending Schedule (BBS)", "BIM Basics"],
    jobs: [
      { role: "Site Engineer Trainee", company: "Adani Infra & Realty", loc: "Ahmedabad / Mundra", salary: "₹4.0 - ₹6.0 LPA", match: "High" },
      { role: "Construction Supervisor", company: "GSRTC Bus Terminal Projects", loc: "Surat / Rajkot", salary: "₹3.5 - ₹5.2 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Surveying & Leveling Instruments", desc: "Operate Total Station, Auto Level, and perform contour mapping and alignment layout." },
      { month: "Month 2", title: "Estimation, BOQ & Bar Bending Schedule", desc: "Calculate concrete volumes, brickwork quantities, steel BBS weight schedules, and BOQ." },
      { month: "Month 3", title: "Quality Control & Field Testing", desc: "Perform slump test, cube strength test, compaction test, and soil bearing tests." }
    ],
    resources: [
      { name: "Civil Engineering Academy", type: "YouTube", url: "https://www.youtube.com/", color: "amber", icon: "👷‍♂️" }
    ]
  },

  "urban-planner": {
    field: "civil",
    title: "Urban Planner & GIS Surveyor",
    category: "Civil Engineering",
    required: ["ArcGIS / QGIS", "AutoCAD Civil 3D", "Urban Development Regulations (GDCR)", "Surveying & Remote Sensing", "Town Planning Rules", "Traffic & Transport Planning"],
    nice: ["Python for GIS", "Drone Surveying & Photogrammetry", "Smart City Infrastructure", "Environmental Impact Assessment"],
    jobs: [
      { role: "Assistant Town Planner", company: "Ahmedabad Urban Dev Authority (AUDA)", loc: "Ahmedabad", salary: "₹4.5 - ₹6.8 LPA", match: "High" },
      { role: "GIS Analyst Trainee", company: "SUDA (Surat Urban Dev)", loc: "Surat", salary: "₹4.0 - ₹6.2 LPA", match: "Medium" }
    ],
    roadmap: [
      { month: "Month 1", title: "QGIS Fundamentals & Spatial Data", desc: "Learn vector/raster spatial data, georeferencing, digitized mapping, and attribute tables." },
      { month: "Month 2", title: "Gujarat GDCR & Town Planning Schemes", desc: "Study FSI regulations, setback rules, zoning laws, and TPS development plans." }
    ],
    resources: [
      { name: "QGIS Official Documentation", type: "Docs", url: "https://www.qgis.org/", color: "teal", icon: "🗺️" }
    ]
  },

  // ==========================================
  // 4. ELECTRICAL & ELECTRONICS (EE / EC)
  // ==========================================
  "electrical-eng": {
    field: "ee_ec",
    title: "Electrical Power Systems Engineer",
    category: "Electrical & Electronics",
    required: ["Power Systems & Switchgear", "Electrical AutoCAD / Single Line Diagrams", "MATLAB / Simulink", "PLC Programming (Ladder Logic)", "Electrical Machines & Drives", "Safety & Earthing Standards"],
    nice: ["ETAP Power Analysis", "SCADA Systems", "Substation Automation (IEC 61850)", "Solar PV Design"],
    jobs: [
      { role: "Electrical GET", company: "Torrent Power Ltd", loc: "Ahmedabad / Surat", salary: "₹4.5 - ₹7.0 LPA", match: "High" },
      { role: "Power System Substation Engineer", company: "GETCO (Gujarat Energy Transmission)", loc: "Vadodara / Rajkot", salary: "₹4.8 - ₹7.2 LPA", match: "High" },
      { role: "Solar Electrical Engineer", company: "Adani Solar / Waree Energy", loc: "Kutch / Surat", salary: "₹4.0 - ₹6.5 LPA", match: "Medium" }
    ],
    roadmap: [
      { month: "Month 1", title: "Single Line Diagrams & AutoCAD Electrical", desc: "Draft control panel schematics, single line diagrams (SLD), and cable tray layouts." },
      { month: "Month 2", title: "Protection Relays & Switchgear", desc: "Understand circuit breakers, transformers, CT/PT ratios, and overcurrent protection." },
      { month: "Month 3", title: "Industrial Automation (PLC & SCADA)", desc: "Program Siemens / Allen-Bradley PLCs using Ladder Logic and build SCADA HMIs." },
      { month: "Month 4", title: "Power System Simulation (MATLAB/ETAP)", desc: "Perform load flow analysis, short circuit calculations, and arc flash assessments." }
    ],
    resources: [
      { name: "NPTEL Power System Engineering", type: "Course", url: "https://nptel.ac.in/", color: "blue", icon: "⚡" },
      { name: "PLC Academy Tutorials", type: "Interactive", url: "https://www.plcacademy.com/", color: "teal", icon: "🔌" }
    ]
  },

  "embedded-sys": {
    field: "ee_ec",
    title: "Embedded Systems & IoT Engineer",
    category: "Electrical & Electronics",
    required: ["Embedded C / C++", "Microcontrollers (ARM Cortex / STM32 / ESP32)", "Communication Protocols (UART, SPI, I2C, CAN)", "RTOS Concepts (FreeRTOS)", "Circuit Design & PCB (KiCAD / Altium)", "Oscilloscope & Debugging"],
    nice: ["Embedded Linux", "IoT Protocols (MQTT, HTTP)", "Firmware Testing", "Bluetooth Low Energy (BLE)"],
    jobs: [
      { role: "Junior Firmware Engineer", company: "eInfochips (Arrow Company)", loc: "Ahmedabad", salary: "₹5.0 - ₹8.0 LPA", match: "High" },
      { role: "Embedded Hardware Trainee", company: "Volansys Technologies", loc: "Ahmedabad", salary: "₹4.5 - ₹7.0 LPA", match: "High" },
      { role: "IoT Device Developer", company: "Matrix Comsec", loc: "Vadodara", salary: "₹4.2 - ₹6.8 LPA", match: "Medium" }
    ],
    roadmap: [
      { month: "Month 1", title: "Embedded C & Microcontroller Peripherals", desc: "Master C pointers, bitwise operations, GPIO control, timers, and interrupts on STM32." },
      { month: "Month 2", title: "Hardware Serial Protocols", desc: "Interface sensors and displays using I2C, SPI, UART, and Automotive CAN bus." },
      { month: "Month 3", title: "Real-Time Operating Systems (FreeRTOS)", desc: "Implement multi-tasking, semaphores, message queues, and task scheduling." },
      { month: "Month 4", title: "PCB Schematic & Layout in KiCAD", desc: "Design 2-layer PCBs, route high-speed tracks, generate Gerber files for manufacturing." }
    ],
    resources: [
      { name: "Quantum Leaps Modern Embedded C", type: "YouTube", url: "https://www.youtube.com/", color: "purple", icon: "📟" },
      { name: "FastBit Embedded Brain Academy", type: "Course", url: "https://fastbitlab.com/", color: "blue", icon: "💾" }
    ]
  },

  "vlsi-design": {
    field: "ee_ec",
    title: "VLSI & Chip Design Engineer",
    category: "Electrical & Electronics",
    required: ["Verilog HDL / SystemVerilog", "Digital Electronics & Logic Design", "CMOS Fundamentals", "FPGA Prototyping (Xilinx / Vivado)", "Static Timing Analysis (STA)", "EDA Tools"],
    nice: ["UVM Verification", "ASIC Synthesis", "Scripting (Tcl / Perl / Python)", "DFT (Design for Testability)"],
    jobs: [
      { role: "RTL Design Engineer Trainee", company: "eInfochips VLSI Center", loc: "Ahmedabad", salary: "₹6.0 - ₹9.5 LPA", match: "High" },
      { role: "VLSI Verification Engineer", company: "Maven Silicon Partner Studio", loc: "Ahmedabad / Remote", salary: "₹5.5 - ₹8.5 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Digital Logic Design & Combinational Circuits", desc: "Master Boolean algebra, FSM finite state machines, setup/hold times, and flip-flops." },
      { month: "Month 2", title: "RTL Coding in Verilog HDL", desc: "Write synthesizable Verilog for ALUs, FIFOs, counters, and memory controllers." },
      { month: "Month 3", title: "FPGA Synthesis & Vivado", desc: "Synthesize and test digital designs on Xilinx Artix-7 / Spartan FPGA boards." }
    ],
    resources: [
      { name: "NPTEL VLSI Design Course", type: "Course", url: "https://nptel.ac.in/", color: "coral", icon: "🔌" }
    ]
  },

  // ==========================================
  // 5. COMMERCE, FINANCE & MANAGEMENT
  // ==========================================
  "accountant": {
    field: "commerce",
    title: "Financial Accountant & Tax Analyst",
    category: "Commerce & Finance",
    required: ["Tally Prime / ERP 9", "GST Compliance & Filing", "Income Tax & TDS Rules", "Financial Accounting Principles", "Advanced MS Excel (VLOOKUP, Pivot Tables)", "Financial Statements (P&L, Balance Sheet)"],
    nice: ["SAP FICO Module", "QuickBooks", "Auditing Standards", "Corporate Finance Basics"],
    jobs: [
      { role: "Junior Accountant", company: "Adani Ports & SEZ Corporate", loc: "Ahmedabad", salary: "₹3.5 - ₹5.5 LPA", match: "High" },
      { role: "GST & Accounts Executive", company: "Deepak Nitrite Ltd", loc: "Vadodara", salary: "₹3.8 - ₹5.8 LPA", match: "High" },
      { role: "Taxation Specialist", company: "KPMG Global Delivery", loc: "Ahmedabad", salary: "₹4.5 - ₹7.0 LPA", match: "Medium" }
    ],
    roadmap: [
      { month: "Month 1", title: "Accounting Fundamentals & Tally Prime", desc: "Master double-entry bookkeeping, voucher entries, ledger posting, and trial balance." },
      { month: "Month 2", title: "GST Laws, Calculation & E-Filing", desc: "Understand IGST/CGST/SGST, input tax credit (ITC) reconciliation, and GSTR-1/3B filing." },
      { month: "Month 3", title: "Advanced Excel for Finance", desc: "Master Pivot Tables, VLOOKUP/XLOOKUP, financial modeling formulas, and audit macros." },
      { month: "Month 4", title: "Income Tax, TDS & Financial Reporting", desc: "Calculate TDS deductions, corporate tax liabilities, and construct Balance Sheets." }
    ],
    resources: [
      { name: "ICAI E-Learning Portal", type: "Docs", url: "https://www.icai.org/", color: "teal", icon: "📊" },
      { name: "CA Rachana Ranade YouTube", type: "YouTube", url: "https://www.youtube.com/", color: "amber", icon: "🎥" }
    ]
  },

  "financial-analyst": {
    field: "commerce",
    title: "Financial Analyst / Equity Research",
    category: "Commerce & Finance",
    required: ["Advanced Microsoft Excel (VLOOKUP, Pivot, Macros)", "Financial Modeling & Valuation (DCF)", "Financial Statement Analysis", "Ratio Analysis", "Corporate Finance", "Business Valuation"],
    nice: ["PowerBI / Tableau", "Python for Finance", "CFA Level 1 Knowledge", "Bloomberg Terminal / Capital IQ"],
    jobs: [
      { role: "Associate Financial Analyst", company: "Motilal Oswal", loc: "Ahmedabad", salary: "₹4.5 - ₹6.8 LPA", match: "High" },
      { role: "Junior Risk Analyst", company: "Adani Enterprises / Wilmar", loc: "Ahmedabad", salary: "₹5.0 - ₹7.5 LPA", match: "High" },
      { role: "Finance Operations Specialist", company: "GIFT City IFSC Units", loc: "GIFT City Gandhinagar", salary: "₹5.5 - ₹8.5 LPA", match: "Medium" }
    ],
    roadmap: [
      { month: "Month 1", title: "Advanced Financial Excel", desc: "Master financial formulas, index/match, sensitivity tables, and dynamic charting." },
      { month: "Month 2", title: "Three-Statement Financial Modeling", desc: "Link Income Statement, Balance Sheet, and Cash Flow statement with dynamic forecast assumptions." },
      { month: "Month 3", title: "Valuation Methodologies (DCF & Comps)", desc: "Perform Discounted Cash Flow (DCF), WACC calculation, and Comparable Company Analysis." },
      { month: "Month 4", title: "Investment Pitch & Presentation", desc: "Build an equity research report on a publicly traded Indian stock with investment recommendation." }
    ],
    resources: [
      { name: "Corporate Finance Institute (CFI)", type: "Docs", url: "https://corporatefinanceinstitute.com/", color: "blue", icon: "📈" },
      { name: "Aswath Damodaran Valuation", type: "YouTube", url: "https://www.youtube.com/", color: "amber", icon: "🏛️" }
    ]
  },

  "digital-marketing": {
    field: "commerce",
    title: "Digital Marketing & Growth Specialist",
    category: "Commerce & Marketing",
    required: ["Search Engine Optimization (SEO)", "Google Ads (PPC)", "Social Media Marketing (Meta Ads)", "Content Writing & Strategy", "Google Analytics 4 (GA4)", "Canva / Basic Graphic Design"],
    nice: ["Email Marketing (Mailchimp)", "WordPress CMS", "Copywriting", "Affiliate & Influencer Marketing"],
    jobs: [
      { role: "Digital Marketing Executive", company: "Shree Rama Multi-Tech", loc: "Ahmedabad", salary: "₹3.5 - ₹5.0 LPA", match: "High" },
      { role: "SEO & Growth Associate", company: "Infibeam Avenues", loc: "GIFT City Gandhinagar", salary: "₹4.0 - ₹6.2 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "SEO On-Page & Off-Page Fundamentals", desc: "Conduct keyword research, optimize meta tags, build backlinks, and fix technical SEO." },
      { month: "Month 2", title: "Social Media Advertising (Meta & LinkedIn)", desc: "Build targeted ad campaigns, custom audiences, retargeting pixels, and A/B test creatives." },
      { month: "Month 3", title: "Google Search Ads & GA4 Analytics", desc: "Set up Google Search & Display campaigns, track conversions, and analyze GA4 user funnels." }
    ],
    resources: [
      { name: "Google Digital Unlocked Certification", type: "Course", url: "https://skillshop.exceedlms.com/", color: "blue", icon: "🎓" }
    ]
  },

  "business-analyst": {
    field: "commerce",
    title: "Business & Operations Analyst",
    category: "Commerce & Management",
    required: ["Advanced Excel & VBA", "SQL Database Queries", "Power BI / Tableau", "Business Requirement Docs (BRD/FRD)", "Process Mapping & Flowcharts", "Data Cleaning"],
    nice: ["Python for Business Analytics", "Agile / Scrum Framework", "JIRA", "Statistical Forecasting"],
    jobs: [
      { role: "Junior Business Analyst", company: "Torrent Pharmaceuticals Corporate", loc: "Ahmedabad", salary: "₹5.0 - ₹7.5 LPA", match: "High" },
      { role: "Data Visualization Specialist", company: "Alembic Pharma", loc: "Vadodara", salary: "₹4.8 - ₹7.0 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Business Analysis & Requirement Gathering", desc: "Learn BRD creation, stakeholder interviews, gap analysis, and BPMN process modeling." },
      { month: "Month 2", title: "SQL for Business Intelligence", desc: "Write complex SQL joins, aggregations, subqueries, and window functions." },
      { month: "Month 3", title: "Power BI Interactive Dashboards", desc: "Connect data sources, write DAX formulas, and design executive KPI dashboards." }
    ],
    resources: [
      { name: "Microsoft Power BI Official Training", type: "Course", url: "https://learn.microsoft.com/", color: "amber", icon: "📊" }
    ]
  },

  "entrepreneur": {
    field: "commerce",
    title: "Business Manager / Startup Lead",
    category: "Commerce & Management",
    required: ["Business Model Canvas (BMC)", "Financial Planning & Cashflow", "Market Research & Validation", "Sales & Negotiation", "Team Leadership & Operations", "Pitch Deck Creation"],
    nice: ["Digital Marketing Basics", "Legal Compliance & Startup India Registration", "Fundraising & Valuation", "Supply Chain Management"],
    jobs: [
      { role: "Management Trainee", company: "Zydus Lifesciences", loc: "Ahmedabad", salary: "₹5.5 - ₹8.0 LPA", match: "High" },
      { role: "Operations Lead", company: "Gujarat State Startup Cell Incubator", loc: "Gandhinagar / iHub", salary: "₹4.5 - ₹7.0 LPA", match: "High" }
    ],
    roadmap: [
      { month: "Month 1", title: "Idea Validation & Business Model Canvas", desc: "Validate customer pain points, build Value Proposition Canvas, and map revenue models." },
      { month: "Month 2", title: "Financial Projections & Cashflow Management", desc: "Project 3-year P&L, calculate unit economics, CAC/LTV, and breakeven point." },
      { month: "Month 3", title: "Sales Execution & Pitching to Investors", desc: "Master B2B/B2C sales funnels, draft investor pitch decks, and present at iHub GTU incubators." }
    ],
    resources: [
      { name: "Startup India Learning Program", type: "Course", url: "https://www.startupindia.gov.in/", color: "teal", icon: "🚀" }
    ]
  }
};

export const ALL_SKILLS_CATALOG = [
  // Web & Frontend
  "HTML/CSS", "JavaScript (ES6+)", "React.js", "TypeScript", "Next.js", "Tailwind CSS",
  // Backend & DB
  "Node.js & Express", "SQL / MySQL", "MongoDB", "REST APIs", "Git/GitHub", "Data Structures & Algo",
  // Data & AI
  "Python", "Pandas & NumPy", "Scikit-Learn", "Statistics & Linear Algebra", "Data Visualization (Matplotlib/Seaborn)", "Machine Learning Algorithms", "Deep Learning (TensorFlow/PyTorch)", "Big Data (PySpark)", "Tableau/PowerBI",
  // DevOps & Cloud
  "Linux / Bash Shell", "Docker & Containerization", "AWS Core Services", "CI/CD Pipelines (GitHub Actions/Jenkins)", "Kubernetes", "Terraform / IaC",
  // Security
  "Network Security & Wireshark", "Linux Security & Kali Linux", "Ethical Hacking & Vulnerability Assessment", "SIEM Tools (Splunk / ELK)", "OWASP Top 10", "Cryptography Basics",
  // Mobile & Native
  "Kotlin", "Android SDK", "Jetpack Compose", "SQLite / Room DB", "Flutter",
  // Design
  "Figma", "User Research & Personas", "Wireframing & Prototyping", "Design Systems & Typography",
  // Mechanical & CAD & Auto & Robotics
  "AutoCAD 2D/3D", "SolidWorks / Creo", "Engineering Drawing (GD&T)", "Material Selection", "Machine Design Principles", "Manufacturing Processes", "CNC Programming & Machining", "Quality Control & 7 QC Tools", "Lean Manufacturing & 5S", "Process Planning", "Industrial Safety", "Automotive Chassis & Powertrain", "Internal Combustion Engines / EV Tech", "Vehicle Dynamics", "Thermodynamics", "Industrial Robotics & Kinematics", "Pneumatics & Hydraulics",
  // Civil & Surveying
  "STAAD.Pro / ETABS", "AutoCAD Civil", "RCC & Steel Design (IS 456 & IS 800)", "Structural Analysis", "Building Codes & Specifications", "Concrete Technology", "Site Supervision & Quality Check", "Estimation & Quantity Surveying (BOQ)", "Surveying (Total Station)", "ArcGIS / QGIS", "AutoCAD Civil 3D", "Urban Development Regulations (GDCR)",
  // Electrical & Embedded & VLSI
  "Power Systems & Switchgear", "Electrical AutoCAD / Single Line Diagrams", "MATLAB / Simulink", "PLC Programming (Ladder Logic)", "Electrical Machines & Drives", "Safety & Earthing Standards", "Embedded C / C++", "Microcontrollers (ARM Cortex / STM32 / ESP32)", "Communication Protocols (UART, SPI, I2C, CAN)", "RTOS Concepts (FreeRTOS)", "Circuit Design & PCB (KiCAD / Altium)", "Verilog HDL / SystemVerilog", "Digital Electronics & Logic Design", "CMOS Fundamentals", "FPGA Prototyping (Xilinx / Vivado)", "Static Timing Analysis (STA)",
  // Commerce & Finance & Management
  "Tally Prime / ERP 9", "GST Compliance & Filing", "Income Tax & TDS Rules", "Financial Accounting Principles", "Advanced MS Excel (VLOOKUP, Pivot Tables)", "Financial Statements (P&L, Balance Sheet)", "Advanced Microsoft Excel (VLOOKUP, Pivot, Macros)", "Financial Modeling & Valuation (DCF)", "Financial Statement Analysis", "Ratio Analysis", "Corporate Finance", "Business Valuation", "Search Engine Optimization (SEO)", "Google Ads (PPC)", "Social Media Marketing (Meta Ads)", "Content Writing & Strategy", "Google Analytics 4 (GA4)", "Advanced Excel & VBA", "SQL Database Queries", "Power BI / Tableau", "Business Requirement Docs (BRD/FRD)", "Process Mapping & Flowcharts", "Business Model Canvas (BMC)", "Financial Planning & Cashflow", "Market Research & Validation", "Sales & Negotiation", "Team Leadership & Operations", "Pitch Deck Creation"
];
