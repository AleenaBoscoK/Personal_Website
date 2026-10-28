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
  route: ["Abu Dhabi", "Chennai", "New York"],
  currentCity: "New York",
  coordinates: "40.71°N 74.01°W",
};

// Links in the top menu. "/#journey" works from every page.
export const nav = [
  { label: "Journey", href: "/#journey" },
  { label: "Experience", href: "/#experience" },
  { label: "Research", href: "/#research" },
  { label: "Projects", href: "/#projects" },
  { label: "Publications", href: "/#publications" },
  { label: "Off the clock", href: "/off-the-clock" },
  { label: "Contact", href: "/#contact" },
];

// ── Journey (education) ─────────────────────────────────────
// Each stop's `involvement` list becomes that city's chapter on the Off the clock page.

export type Involvement = {
  role: string; // e.g. "Head of Event Management"
  org: string; // e.g. "Dance Club, VIT Chennai"
  dates?: string; // e.g. "2023 – 2024" (leave out to hide)
  story?: string; // a few lines in your own words
  icon?: "flag" | "masks" | "globe" | "dancer" | "dancers" | "spotlight" | "mentor" | "code" | "ticket"; // shown until you add a photo
  photo?: string; // e.g. "/journal/xemius.jpg" (put the file in public/journal/)
  caption?: string; // handwritten caption under the photo
};

export type Stop = {
  id: string; // used in links, e.g. /off-the-clock#chennai
  title: string;
  city: string;
  cityShort: string;
  coords: string;
  years: string;
  school: string; // first line
  degree: string; // second line
  grade: string; // third line
  chapter: string; // chapter title on the Off the clock page
  note?: string; // handwritten note for that chapter
  involvementLink: string; // link text under the stop, e.g. "Clubs & leadership"
  involvement: Involvement[];
  stamp: {
    shape: "circle" | "rect" | "oval"; // passport-stamp outline
    label: string; // small text on the stamp
    date: string; // e.g. "2019–2023"
    tilt: number; // rotation in degrees
  };
};

export const journey: Stop[] = [
  {
    id: "abu-dhabi",
    title: "School",
    city: "Abu Dhabi, UAE",
    cityShort: "Abu Dhabi",
    coords: "24.45°N 54.38°E",
    years: "2007 — 2021",
    school: "St. Joseph's School",
    degree: "CBSE, Grades X and XII",
    grade: "95.2%, school topper in mathematics",
    chapter: "Where it all started",
    note: "first stage, first team, first time leading one.",
    involvementLink: "Clubs & leadership",
    stamp: { shape: "circle", label: "SCHOOL", date: "2007–2021", tilt: -8 },
    involvement: [
      {
        role: "House Captain and Vice Captain",
        org: "Bluebell House, St. Joseph's School",
        dates: "2017 – 2019",
        story: "Led the house through inter-house events and trained the team for the sports-day march-past.",
        icon: "flag",
        caption: "Bluebell House",
      },
      {
        role: "Cultural Secretary and Assistant Cultural Secretary",
        org: "St. Joseph's School",
        dates: "2019 – 2021",
        story: "Ran cultural programmes and competitions, and helped bring dance and music classes into the school.",
        icon: "masks",
        caption: "cultural programmes",
      },
      {
        role: "Delegate of the UAE, UN Women",
        org: "Model United Nations",
        dates: "2020",
        story: "Represented the UAE on the UN Women committee and received a special mention for performance.",
        icon: "globe",
        caption: "MUN, 2020",
      },
    ],
  },
  {
    id: "chennai",
    title: "Undergraduate",
    city: "Chennai, India",
    cityShort: "Chennai",
    coords: "13.08°N 80.27°E",
    years: "2021 — 2025",
    school: "Vellore Institute of Technology",
    degree: "B.Tech, Computer Science & Engineering (AI & ML)",
    grade: "CGPA 9.13 / 10",
    chapter: "Learning to run the show",
    note: "on stage and behind the scenes.",
    involvementLink: "Clubs & leadership",
    stamp: { shape: "rect", label: "B.TECH · CSE", date: "2021–2025", tilt: 5 },
    involvement: [
      {
        role: "Head of Event Management",
        org: "Dance Club, VIT Chennai",
        dates: "2023 – 2024",
        story: "Led around 30 events and an inter-university competition with dance teams from 20 universities.",
        icon: "spotlight",
        caption: "Dance Club events",
      },
      {
        role: "Advisory Member",
        org: "Dance Club, VIT Chennai",
        dates: "2024 – 2025",
        story: "Mentored the next team and guided their event planning.",
        icon: "mentor",
        caption: "passing it on",
      },
      {
        role: "Team Xemius Member",
        org: "Western dance crew, VIT Chennai",
        dates: "2021 – 2024",
        story: "Danced with the university's western dance crew through three years of shows and competitions.",
        icon: "dancers",
        caption: "Team Xemius",
      },
      {
        role: "Management Team Member",
        org: "Google Developer Student Club, VIT Chennai",
        dates: "2023 – 2024",
        story: "Planned technical events including GDSC WOW Chennai and a FOSS open-source event.",
        icon: "code",
        caption: "GDSC WOW Chennai",
      },
    ],
  },
  {
    id: "new-york",
    title: "Master's",
    city: "New York, USA",
    cityShort: "New York",
    coords: "40.71°N 74.01°W",
    years: "2025 — May 2027",
    school: "NYU Tandon School of Engineering",
    degree: "M.S. Computer Science",
    grade: "GPA 3.89 / 4.0",
    chapter: "The next chapter",
    note: "still being written.",
    involvementLink: "Conferences",
    stamp: { shape: "oval", label: "M.S. CS · NYU", date: "2025–2027", tilt: -4 },
    involvement: [
      {
        role: "Attendee, WE26",
        org: "Society of Women Engineers conference, Boston",
        dates: "Nov 2026",
        story: "Heading to Boston for the Society of Women Engineers' annual conference. If you're there too, say hi.",
        icon: "ticket",
        caption: "WE26, Boston",
      },
    ],
  },
];


// ── Experience ──────────────────────────────────────────────

export type Job = {
  role: string;
  org: string;
  dates: string;
  place: string; // city, country (add " · Hybrid" if it was)
  bullets: string[];
  note?: string; // small line under the title
  tags?: string[]; // e.g. ["Teaching"], ["Published"]
  open?: boolean; // true = shown unfolded when the page loads
};

export const experience: Job[] = [
  {
    role: "Student Researcher, Retrieval-Augmented Generation",
    org: "NYU Tandon School of Engineering · Prof. Torsten Suel",
    dates: "Jun 2026 — Present",
    place: "New York, USA",
    note: "Summer research role, continued in Fall 2026 as an Advanced Project course (CS-GY 9963).",
    tags: ["Current"],
    open: true,
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
    place: "Chennai, India · Hybrid",
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
    place: "Chennai, India · Hybrid",
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
    place: "Chennai, India",
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
    place: "Abu Dhabi, UAE",
    bullets: [
      "Fused Sentinel-1 SAR imagery with AIS signals across 6 datasets to flag likely dark vessels (ships moving with their transponders off).",
      "Used Z-score outlier detection and Haversine matching for 1:1 AIS-to-detection assignment across 200+ vessel records.",
      "Built an interactive Folium dashboard that replaced manual AIS cross-referencing.",
    ],
  },
];

// Shorter, older roles, folded into one "Earlier roles" entry at the end of the logbook.
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
    "Retrievers score each document on its own, so the top 10 often repeat the same facts. For a long answer, do the documents together cover every part of the question?",
  // The method, as short steps (shown side by side)
  approach: [
    {
      step: "Decompose",
      text: "An LLM breaks the question into ten self-contained subquestions, one for each thing a complete answer needs.",
    },
    {
      step: "Estimate",
      text: "A fine-tuned ModernBERT cross-encoder predicts which candidate documents answer which subquestions, giving a document × subquestion coverage map.",
    },
    {
      step: "Select",
      text: "Greedy selection builds the 10-document context one pick at a time, always adding the document that covers the most subquestions still uncovered.",
    },
    {
      step: "Refine",
      text: "The model reviews its first answer, names the evidence it under-used and writes again from the same documents, with no answer key and no extra retrieval.",
    },
  ],
  results: [
    { label: "Retrieval coverage (α-nDCG@10)", before: 0.625, after: 0.702, max: 0.8, note: "gold-nugget ceiling 0.718" },
    { label: "Vital-fact coverage in answers", before: 0.34, after: 0.42, max: 0.6, note: "after two self-feedback passes" },
  ],
  context: "Evaluated on TREC RAG 2024 (56 queries, 113.5M passages) with a Qwen2.5-7B generator.",
  stack: ["Python", "PyTorch", "ModernBERT", "LLMs", "TREC RAG 2024"],
  margin: "relevance ≠ coverage. That became our research idea.",
  links: { poster: "", code: "" }, // add URLs to show the buttons
};

// ── Projects ────────────────────────────────────────────────

export type Category = "llm" | "web" | "ml";

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "llm", label: "LLMs & agents" },
  { id: "web", label: "Software" },
  { id: "ml", label: "Applied ML" },
];

export type Project = {
  title: string;
  category: Category;
  when: string; // the date on the postmark
  summary: string; // one line, shown on the front of the postcard
  description: string; // the full story, on the back
  stack: string[];
  badge?: string; // e.g. "Team project", "Published"
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "TaxiScope NYC",
    category: "web",
    when: "Fall 2026",
    badge: "In progress · course project",
    summary: "A live web app that maps NYC taxi demand, fares and trip times by zone, day and hour.",
    description:
      "My team's Software Engineering project (CS-GY 6063), built in Scrum sprints and live on AWS. It turns 11.2M cleaned NYC taxi trips from March–May 2026 into a demand heatmap, fare ranges, typical trip times and the cheapest and fastest hours for a route. I built the trip-import pipeline (11.9M rows into 1.3M route statistics, in one transaction and safe to re-run), the taxi-zone map shapes and the fare-range API. User accounts are next.",
    stack: ["Django", "PostgreSQL", "Leaflet", "pandas", "AWS"],
    github: "https://github.com/gcivil-nyu-org/team5-mon-fall26",
    live: "http://taxiscope-env.eba-gfaktp8z.us-east-2.elasticbeanstalk.com/",
  },
  {
    title: "Snickr",
    category: "web",
    when: "Spring 2026",
    badge: "Team project",
    summary: "A Slack-style messaging app with live messages, typing indicators and search.",
    description:
      "A Slack-style real-time messaging app: a 17-table PostgreSQL schema with row-level security, live messages over Supabase Realtime, typing indicators over Broadcast and GIN-indexed full-text search.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/shaahid-ahmed/snickr",
  },
  {
    title: "Moot Courtroom Multi-Agent Simulation",
    category: "llm",
    when: "Jul 2025",
    badge: "Google ADK",
    summary: "AI agents that argue both sides of a moot-court case, grounded in real case law.",
    description:
      "AI agents on Google Cloud that argue both sides of a moot-court case, each grounded in case law retrieved from 1,000+ files through a Qdrant RAG layer.",
    stack: ["Python", "Google ADK", "Qdrant", "RAG"],
  },
  {
    title: "Interactive DXF Editor",
    category: "web",
    when: "Jul — Nov 2024",
    badge: "Team project",
    summary: "A lightweight desktop editor for CAD drawings, built to pull out railway route maps.",
    description:
      "A desktop tool for viewing and editing DXF drawings without heavyweight CAD software, built to extract railway route maps. Select entities with a drag, then move, rotate, delete or annotate them and export the view as an image.",
    stack: ["Python", "PyQt5", "ezdxf", "Matplotlib"],
    github: "https://github.com/shaahid-ahmed/Interactive-DXF-Editor",
  },
  {
    title: "Speech-Based Disease Detection",
    category: "ml",
    when: "Jan — Apr 2025",
    badge: "B.Tech thesis · team of 3",
    summary: "Detects Parkinson's and Alzheimer's from voice recordings, with 91.1% accuracy.",
    description:
      "An acoustic feature pipeline (MFCCs, jitter, shimmer, RPDE) over voice recordings to detect Parkinson's and Alzheimer's. XGBoost reached 91.1% accuracy, and SHAP surfaced the voice features that drive each prediction.",
    stack: ["Python", "XGBoost", "SHAP"],
  },
  {
    title: "Solar Power Forecasting",
    category: "ml",
    when: "Jul — Nov 2024",
    badge: "Published · IEEE Access",
    summary: "A rolling-window ARIMA with 71.9% lower forecast error than an attention-LSTM.",
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
    summary: "Makes a Parkinson's image classifier explain itself with relevance heatmaps.",
    description:
      "Explains a VGG-19 Parkinson's classifier with layer-wise relevance heatmaps, then distils the relevances into approximate linear weights for transparent reasoning.",
    stack: ["PyTorch", "VGG-19", "LRP"],
    github: "https://github.com/shaahid-ahmed/TremorXAI",
  },
  {
    title: "Smart Walking Stick",
    category: "ml",
    when: "Apr 2024",
    summary: "A walking stick that spots obstacles and talks back, for visually impaired users.",
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
    link: "https://ieeexplore.ieee.org/document/10864414",
  },
];

// ── Skills ──────────────────────────────────────────────────
// Each tool shows its logo (see components/icon-paths.ts).

export const skills = [
  { group: "Languages", items: ["Python", "Java", "C / C++", "TypeScript", "JavaScript", "SQL", "Bash"] },
  { group: "ML & AI", items: ["PyTorch", "Hugging Face", "scikit-learn", "XGBoost", "OpenCV", "LLMs", "RAG", "Multi-agent systems"] },
  { group: "Web & data", items: ["Django", "React", "Next.js", "REST APIs", "pandas", "PostgreSQL", "MySQL", "MongoDB", "Qdrant"] },
  { group: "Cloud & tools", items: ["AWS", "Google Cloud", "Supabase", "Docker", "Git", "GitHub", "CI/CD", "Linux"] },
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
  { when: "NOW", to: "COFFEE CHAT", status: "ANYTIME" },
];
