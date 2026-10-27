export const profile = {
  firstName: "Aleena",
  lastName: "[Last Name]",
  status: "Open to ML / AI engineering roles · [Start date]",
  pitch:
    "I build retrieval and machine-learning systems, and I study what makes their answers complete.",
  subline:
    "M.S. Computer Science, NYU Tandon (May 2027) · Research with Prof. Torsten Suel",
  email: "[email]",
  links: {
    github: "https://github.com/AleenaBoscoK",
    linkedin: "[LinkedIn URL]",
    resume: "/resume.pdf", 
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
  { label: "Off the clock", href: "/off-the-clock" },
  { label: "Contact", href: "#contact" },
];

export type Stop = {
  code: string;
  title: string;
  city: string;
  cityShort: string;
  years: string;
  text: string;
  moments: string[];
};

export const journey: Stop[] = [
  {
    code: "AUH",
    title: "School",
    city: "Abu Dhabi, UAE",
    cityShort: "Abu Dhabi",
    years: "[Year] — [Year]",
    text: "[One line on what this chapter gave you]",
    moments: ["[Key moment]", "[Key moment]"],
  },
  {
    code: "MAA",
    title: "Undergraduate",
    city: "Chennai, India",
    cityShort: "Chennai",
    years: "[Year] — [Year]",
    text: "B.Tech in Computer Science & Engineering, AI/ML specialization, VIT.",
    moments: [
      "Two journal publications",
      "Database Systems teaching assistant",
      "Dance Club event head, 30+ events",
    ],
  },
  {
    code: "JFK",
    title: "Master's",
    city: "New York, USA",
    cityShort: "New York",
    years: "[Year] — May 2027",
    text: "M.S. Computer Science, NYU Tandon · GPA 3.889 / 4.0.",
    moments: [
      "Coverage-aware RAG research",
      "Software Engineering & Big Data coursework",
    ],
  },
];

export type Job = {
  dates: string;
  city: string;
  role: string;
  org: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    dates: "Apr 2026 — Present",
    city: "New York",
    role: "Research Assistant",
    org: "NYU Tandon · with Prof. Torsten Suel",
    bullets: [
      "Building coverage-aware retrieval for RAG: query decomposition, bi-encoder recall and max-marginal-coverage selection, evaluated on RAG24.",
      "[Second bullet with a metric]",
    ],
  },
  {
    dates: "[Dates]",
    city: "UAE",
    role: "Research Intern, Data Science",
    org: "Bayanat",
    bullets: ["[What you built, with a number]", "[Second bullet]"],
  },
  {
    dates: "Jan 2024 — May 2024",
    city: "Chennai",
    role: "Teaching Assistant, Database Systems",
    org: "Vellore Institute of Technology",
    bullets: ["[What you ran: labs, office hours, grading]"],
  },
];

export const research = {
  label: "Field notes · NYU Tandon · 2026",
  collaborators: "with He Tu & Prof. Torsten Suel",
  title: "Coverage-Aware Retrieval-Augmented Generation",
  question:
    "Do the top retrieved documents, together, cover everything a good answer needs?",
  approach:
    "LLM query decomposition, bi-encoder recall and max-marginal-coverage selection, then grounded iterative refinement.",
  result: "Evaluated on RAG24 with a Qwen2.5-7B generator · [Headline result]",
  stack: ["Python", "LLMs", "Bi-encoders", "RAG24"],
  margin: "relevance ≠ coverage. That idea became my research.",
  links: { poster: "[Poster URL]", code: "[Code URL]" },
};

export type Category = "rag" | "cv" | "xai" | "web";

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "rag", label: "RAG & LLMs" },
  { id: "cv", label: "Computer vision" },
  { id: "xai", label: "Explainable AI" },
  { id: "web", label: "Full-stack" },
];

export type Project = {
  title: string;
  category: Category;
  city: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Dark Vessel Detection",
    category: "cv",
    city: "Chennai",
    description:
      "Fuses SAR satellite imagery with AIS transponder data to flag ships that go dark.",
    stack: ["Python", "SAR", "AIS"],
    github: "[GitHub URL]",
  },
  {
    title: "Multi-agent Legal Assistant",
    category: "rag",
    city: "[City]",
    description:
      "Agents that retrieve and reason over legal documents, backed by a Qdrant vector store.",
    stack: ["LLMs", "Qdrant", "RAG"],
    github: "[GitHub URL]",
  },
  {
    title: "TremorXAI",
    category: "xai",
    city: "Chennai",
    description:
      "Layer-wise relevance propagation on VGG-19 to show what a Parkinson's classifier is looking at.",
    stack: ["VGG-19", "LRP", "XAI"],
    github: "[GitHub URL]",
  },
  {
    title: "Speech-based Disease Detection",
    category: "xai",
    city: "[City]",
    description:
      "Neurological disease detection from speech using MFCC features and XGBoost, explained with SHAP.",
    stack: ["MFCC", "XGBoost", "SHAP"],
    github: "[GitHub URL]",
  },
  {
    title: "Snickr",
    category: "web",
    city: "New York",
    description:
      "A Slack-inspired messaging app with real-time channels on a 17-table PostgreSQL schema.",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    github: "[GitHub URL]",
  },
  {
    title: "TaxiScope NYC",
    category: "web",
    city: "New York",
    description:
      "[One line on what it does] · team build with sprints, PR reviews and CI/CD to AWS.",
    stack: ["AWS", "CI/CD", "Scrum"],
    github: "[GitHub URL]",
  },
];

export const publications = [
  {
    title:
      "Solar power forecasting with rolling-window ARIMA and LSTM on SARAH and ERA5 data",
    venue: "IEEE Access",
    year: "[Year]",
    doi: "[DOI URL]",
  },
  {
    title: "CNN-based classification of acne severity",
    venue: "Connection Science",
    year: "[Year]",
    doi: "[DOI URL]",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "SQL", "TypeScript", "[more]"] },
  {
    group: "ML & retrieval",
    items: ["LLMs", "RAG", "Bi-encoders", "Qdrant", "CNNs", "LSTM", "SHAP", "LRP"],
  },
  {
    group: "Build & ship",
    items: ["Next.js", "React", "Supabase", "AWS", "CI/CD", "Git"],
  },
];

export const departures = [
  { from: "2027", role: "ML ENGINEER", status: "OPEN" },
  { from: "2027", role: "AI / RAG ENGINEER", status: "OPEN" },
  { from: "2027", role: "DATA SCIENTIST", status: "OPEN" },
  { from: "NOW", role: "COFFEE CHAT", status: "BOOK ME" },
];