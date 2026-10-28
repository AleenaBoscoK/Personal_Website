// ─────────────────────────────────────────────────────────────
// All the words on the site live in this one file.
// To update the site: edit the text here, save, commit, push.
// Anything in [square brackets] is a placeholder to replace.
// An optional link left as "" is simply not shown.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: "Aleena",
  lastName: "Bosco Kurumthottam",
  status: "Graduating May 2027 · Open to SWE, ML & AI roles",
  pitch:
    "I build retrieval and machine-learning systems, and I study what makes their answers complete.",
  subline:
    "M.S. Computer Science, NYU Tandon · RAG research with Prof. Torsten Suel",
  email: "aleenabosco@gmail.com",
  links: {
    github: "https://github.com/AleenaBoscoK",
    linkedin: "https://www.linkedin.com/in/aleena-bosco/",
    resume: "/resume.pdf", // put the PDF in the /public folder with this name
  },
  route: ["AUH", "MAA", "JFK"],
  currentCity: "New York",
  coordinates: "40.71°N 74.01°W",
};

export const nav = [
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  // { label: "Off the clock", href: "/off-the-clock" },  ← switch on once that page exists
  { label: "Contact", href: "#contact" },
];

// ── Journey (education) ─────────────────────────────────────

export type Involvement = {
  role: string; // e.g. "Head of Event Management"
  org: string; // e.g. "Dance Club, VIT Chennai"
  detail?: string; // one line on what you did (optional)
};

export type Stop = {
  code: string;
  title: string;
  city: string;
  cityShort: string;
  coords: string;
  years: string;
  text: string;
  involvementLabel?: string; // dropdown title; defaults to "Leadership & clubs"
  involvement: Involvement[]; // leave [] to hide the dropdown
  stamp: {
    shape: "circle" | "rect" | "oval"; // passport-stamp outline
    label: string; // small text on the stamp
    date: string; // e.g. "2019–2023"
    tilt: number; // rotation in degrees
  };
};

export const journey: Stop[] = [
  {
    code: "AUH",
    title: "School",
    city: "Abu Dhabi, UAE",
    cityShort: "Abu Dhabi",
    coords: "24.45°N 54.38°E",
    years: "2007 — 2021",
    text: "St. Joseph's School · 95.2% in CBSE Grades X and XII, school topper in mathematics.",
    stamp: { shape: "circle", label: "SCHOOL", date: "2007–2021", tilt: -8 },
    involvement: [
      {
        role: "House Captain · Vice Captain",
        org: "Bluebell House, 2017 – 2019",
        detail: "Led the house through inter-house events and trained the team for the sports-day march-past.",
      },
      {
        role: "Cultural Secretary · Assistant Cultural Secretary",
        org: "St. Joseph's School, 2019 – 2021",
        detail: "Ran cultural programmes and competitions, and helped bring dance and music classes into the school.",
      },
      {
        role: "Delegate of the UAE, UN Women",
        org: "Model United Nations, 2020",
        detail: "Received a special mention for performance.",
      },
      {
        role: "Inter-school dance",
        org: "ASIANET YOU'Fest, 2016 & 2017",
        detail: "Runner-up in the inter-emirate group dance competition, two years running.",
      },
    ],
  },
  {
    code: "MAA",
    title: "Undergraduate",
    city: "Chennai, India",
    cityShort: "Chennai",
    coords: "13.08°N 80.27°E",
    years: "2021 — 2025",
    text: "B.Tech in Computer Science & Engineering (AI & ML), Vellore Institute of Technology · CGPA 9.13 / 10.",
    stamp: { shape: "rect", label: "B.TECH · CSE", date: "2021–2025", tilt: 5 },
    involvement: [
      {
        role: "Head of Event Management",
        org: "Dance Club, VIT Chennai · 2023 – 2024",
        detail: "Led around 30 events and an inter-university competition with dance teams from 20 universities.",
      },
      {
        role: "Advisory Member",
        org: "Dance Club, VIT Chennai · 2024 – 2025",
        detail: "Mentored the next team and guided event planning.",
      },
      {
        role: "Dancer, Team Xemius",
        org: "Western dance crew, VIT Chennai · 2021 – 2024",
      },
      {
        role: "Management Team",
        org: "Google Developer Student Club · 2023 – 2024",
        detail: "Planned technical events including GDSC WOW Chennai and a FOSS open-source event.",
      },
    ],
  },
  {
    code: "JFK",
    title: "Master's",
    city: "New York, USA",
    cityShort: "New York",
    coords: "40.71°N 74.01°W",
    years: "2025 — May 2027",
    text: "M.S. Computer Science, NYU Tandon School of Engineering · GPA 3.89 / 4.0.",
    stamp: { shape: "oval", label: "M.S. CS · NYU", date: "2025–2027", tilt: -4 },
    involvementLabel: "Beyond the classroom",
    involvement: [
      {
        role: "Advanced Project (CS-GY 9963)",
        org: "NYU Tandon · Fall 2026",
        detail: "Continuing my RAG research with Prof. Torsten Suel as a for-credit research course.",
      },
      {
        role: "Attendee, WE26",
        org: "Society of Women Engineers conference · Boston, Nov 2026",
      },
    ],
  },
];

// ── Experience ──────────────────────────────────────────────

export type Job = {
  role: string;
  org: string;
  dates: string;
  code: string; // airport code of the city it happened in
  place: string;
  bullets: string[];
  note?: string; // small line under the title
  tags?: string[]; // e.g. ["Teaching"], ["Published"]
};

export const experience: Job[] = [
  {
    role: "Student Researcher, Retrieval-Augmented Generation",
    org: "NYU Tandon School of Engineering · Prof. Torsten Suel",
    dates: "Jun 2026 — Present",
    code: "JFK",
    place: "New York",
    note: "Summer research role, continued in Fall 2026 as an Advanced Project course (CS-GY 9963).",
    tags: ["Current"],
    bullets: [
      "Built a coverage-aware RAG pipeline: an LLM splits each question into sub-questions, a fine-tuned cross-encoder predicts which documents cover which, and greedy selection picks the 10 that jointly cover the most.",
      "Fine-tuned ModernBERT bi- and cross-encoders on LLM-distilled labels, raising α-nDCG@10 on TREC RAG 2024 from 0.625 to 0.702 with no loss in relevance.",
      "Added a self-critique loop that steers the generator to under-used evidence, lifting vital-fact coverage from 0.34 to 0.42.",
    ],
  },
  {
    role: "Deep Learning Research Intern",
    org: "VIT Centre for Cyber-Physical Systems",
    dates: "Jun 2024 — Jul 2024",
    code: "MAA",
    place: "Chennai · hybrid",
    tags: ["Published"],
    bullets: [
      "Benchmarked 3 CNN architectures on 1,457 dermatology images across 4 severity grades; CenterNet reached 79.45% accuracy, about 7% above YOLO baselines.",
      "Validated robustness with 5-fold cross-validation on a class-imbalanced dataset; co-authored the resulting paper in Connection Science (Taylor & Francis).",
    ],
  },
  {
    role: "Summer Research Intern",
    org: "Vellore Institute of Technology",
    dates: "Summer 2024",
    code: "MAA",
    place: "Chennai · hybrid",
    tags: ["Published"],
    bullets: [
      "Built an app that tracks expiry dates on documents and products using Google ML Kit's OCR engine, with Redux and MongoDB.",
      "Generated recommendations from the extracted data; the work was published at an IEEE conference (2025).",
    ],
  },
  {
    role: "Teaching Assistant, Database Systems",
    org: "Vellore Institute of Technology · mentor Dr. Leninisha Shanmugham",
    dates: "Jan 2024 — May 2024",
    code: "MAA",
    place: "Chennai",
    tags: ["Teaching"],
    bullets: [
      "Tutored students who needed extra support, identified through internal exam results, alongside the course faculty.",
      "Created study materials and led online doubt sessions on ER modelling, SQL, normalisation, indexing, transactions and query optimisation.",
    ],
  },
  {
    role: "Research & Development Intern",
    org: "Bayanat, Geospatial Intelligence Solutions",
    dates: "Oct 2023",
    code: "AUH",
    place: "Abu Dhabi",
    bullets: [
      "Fused Sentinel-1 SAR imagery with AIS signals across 6 datasets to flag likely dark vessels (ships moving with their transponders off).",
      "Used Z-score outlier detection and Haversine matching for 1:1 AIS-to-detection assignment across 200+ vessel records.",
      "Built an interactive Folium dashboard that replaced manual AIS cross-referencing.",
    ],
  },
];

// Shorter, older roles shown as a compact list under the cards.
export const earlierExperience = [
  { role: "Winter Intern", org: "AyuSynk (Ayu Devices), IIT Bombay", dates: "Nov — Dec 2023", line: "Web scraping with Selenium and SerpAPI, EDA and clustering for customer prediction." },
  { role: "Summer Intern", org: "Aldar Projects, Digital Transformation", dates: "Jul — Sep 2022", line: "Remote site-supervision tools (OpenSpace, Time-Lapse) and Power BI reporting." },
  { role: "AI Intern", org: "Acmegrade", dates: "Apr — Jun 2022", line: "Built a chatbot with NumPy, TensorFlow and Keras." },
];

// ── Research (featured) ─────────────────────────────────────

export const research = {
  label: "Field notes · NYU Tandon · 2026",
  collaborators: "with He Tu & Prof. Torsten Suel",
  title: "Coverage-Aware Retrieval-Augmented Generation",
  question:
    "Retrievers rank documents by relevance, so the top 10 often repeat each other. Do they, together, cover everything a good answer needs?",
  approach:
    "Break the question into sub-questions, predict which documents cover which with a fine-tuned ModernBERT cross-encoder, then greedily pick the set that covers the most. A self-critique loop then pushes the generator to use evidence it skipped.",
  results: [
    { label: "Retrieval coverage (α-nDCG@10)", before: 0.625, after: 0.702, max: 0.8, note: "gold-nugget ceiling 0.718" },
    { label: "Vital-fact coverage in answers", before: 0.34, after: 0.42, max: 0.6, note: "with the self-critique loop" },
  ],
  context: "Evaluated on TREC RAG 2024 (56 queries, 113.5M passages) with a Qwen2.5-7B generator.",
  stack: ["Python", "PyTorch", "ModernBERT", "LLMs", "TREC RAG 2024"],
  margin: "relevance ≠ coverage. That idea became my research.",
  links: { poster: "", code: "" }, // add URLs to show the buttons
};

// ── Projects ────────────────────────────────────────────────

export type Category = "llm" | "web" | "ml";

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "llm", label: "LLMs & agents" },
  { id: "web", label: "Full-stack" },
  { id: "ml", label: "Applied ML" },
];

export type Project = {
  title: string;
  category: Category;
  when: string;
  description: string;
  stack: string[];
  badge?: string; // e.g. "Team of 5", "Published"
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "TaxiScope NYC",
    category: "web",
    when: "Fall 2026",
    badge: "Team of 5",
    description:
      "A Django app for NYC taxi trips. I built the import pipeline that cleans 11.9M trips into 1.3M PostgreSQL route statistics, made imports idempotent and transactional, and shipped the fare-range REST API and UI with 115 unit tests.",
    stack: ["Django", "PostgreSQL", "pandas", "AWS"],
    github: "https://github.com/gcivil-nyu-org/team5-mon-fall26",
  },
  {
    title: "Snickr",
    category: "web",
    when: "Spring 2026",
    badge: "Team project",
    description:
      "A Slack-style real-time messaging app: a 17-table PostgreSQL schema with row-level security, live messages over Supabase Realtime, typing indicators over Broadcast and GIN-indexed full-text search.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/shaahid-ahmed/snickr",
  },
  {
    title: "Moot Courtroom Multi-Agent Simulation",
    category: "llm",
    when: "Jul 2025",
    badge: "Google ADK hackathon",
    description:
      "AI agents on Google Cloud that argue both sides of a moot-court case, each grounded in case law retrieved from 1,000+ files through a Qdrant RAG layer.",
    stack: ["Python", "Google ADK", "Qdrant", "RAG"],
  },
  {
    title: "Speech-Based Disease Detection",
    category: "ml",
    when: "Jan — Apr 2025",
    description:
      "An acoustic feature pipeline (MFCCs, jitter, shimmer, RPDE) over 1,100+ recordings to detect Parkinson's and Alzheimer's. XGBoost reached 91.1% accuracy, and SHAP surfaced the voice features that drive each prediction.",
    stack: ["Python", "XGBoost", "SHAP"],
  },
  {
    title: "Solar Power Forecasting",
    category: "ml",
    when: "Jul — Nov 2024",
    badge: "Published · IEEE Access",
    description:
      "A rolling 30-day-window ARIMA that cut RMSE by 71.9% against an attention-LSTM and 60.6% against Prophet, on PVGIS-SARAH and ERA5 data from two regions.",
    stack: ["Python", "ARIMA", "LSTM", "Prophet"],
    github: "https://github.com/tejaswini8213/Solar-forecasting",
  },
  {
    title: "TremorXAI",
    category: "ml",
    when: "Jul — Nov 2024",
    badge: "Team project",
    description:
      "Explains a VGG-19 Parkinson's classifier with layer-wise relevance heatmaps, then distils the relevances into approximate linear weights for transparent reasoning.",
    stack: ["PyTorch", "VGG-19", "LRP"],
    github: "https://github.com/shaahid-ahmed/TremorXAI",
  },
  {
    title: "Smart Walking Stick",
    category: "ml",
    when: "Apr 2024",
    description:
      "Ultrasonic sensors and a camera running YOLOv8 object detection, with spoken feedback to help visually impaired users move around independently.",
    stack: ["Python", "YOLOv8", "Sensors"],
  },
];

// ── Publications ────────────────────────────────────────────

export const publications = [
  {
    title: "An Enhanced Time Series Based Solar Power Forecast for Microgrid System",
    venue: "IEEE Access",
    year: "2025",
    note: "Journal",
    link: "https://doi.org/10.1109/ACCESS.2025.3588666",
  },
  {
    title: "An Experimental Evaluation of Deep Learning-Based Models for Acne Severity Classification in Humans",
    venue: "Connection Science, Taylor & Francis",
    year: "2025",
    note: "Journal · SCI Q2",
    link: "https://doi.org/10.1080/09540091.2025.2533867",
  },
  {
    title: "Smart Expiry Tracker and Product Recommender Using Google ML Kit OCR Engine",
    venue: "IEEE Xplore",
    year: "2025",
    note: "Conference",
    link: "", // add the IEEE Xplore link to show the button
  },
];

// ── Skills ──────────────────────────────────────────────────

export const skills = [
  { group: "Languages", items: ["Python", "Java", "C / C++", "TypeScript", "JavaScript", "SQL", "Bash"] },
  { group: "ML & AI", items: ["PyTorch", "Hugging Face", "scikit-learn", "XGBoost", "OpenCV", "LLMs", "RAG", "Multi-agent systems"] },
  { group: "Web & data", items: ["Django", "React", "Next.js", "REST APIs", "pandas", "PostgreSQL", "MySQL", "MongoDB", "Qdrant"] },
  { group: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Supabase", "Docker", "Git", "CI/CD", "Linux"] },
];

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", detail: "Valid to Feb 2027" },
];

// ── Contact ─────────────────────────────────────────────────

// Rows on the "Next stop" board. Keep each text short (it's a fixed-width board).
export const departures = [
  { when: "2027", to: "SOFTWARE ENGINEER", status: "OPEN" },
  { when: "2027", to: "ML / AI ENGINEER", status: "OPEN" },
  { when: "NOV", to: "WE26 · BOSTON", status: "SAY HI" },
  { when: "NOW", to: "COFFEE CHAT", status: "BOOK ME" },
];
