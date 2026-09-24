export const profile = {
  name: "Arpit Saini",
  firstName: "Arpit",
  lastName: "Saini",
  role: "Frontend Developer",
  subRole: "AI Model Response Evaluator",
  location: "Moradabad, India",
  tagline: "I turn ideas into interfaces, and interfaces into instincts.",
  subTagline:
    "Frontend developer shipping fast, accessible React & Next.js products — and an AI evaluator who spends the rest of the day teaching language models what \"good\" actually sounds like.",
  email: "arpitsaini973@gmail.com",
  github: "https://github.com/ArpitSainiX",
  githubHandle: "@ArpitSainiX",
  linkedin: "https://www.linkedin.com/in/arpitsainix/",
  linkedinHandle: "in/arpitsainix",
  resumeUrl: "/Arpit-Saini-Resume.pdf",
  avatar: "/images/arpit.png",
};

export const githubStats = {
  publicRepos: 10,
  followers: 3,
  lastPushRepo: "Leetcode-progress",
  lastPushLabel: "Sep 2026",
  nowBuilding: "this portfolio",
  status: "open to freelance & full-time",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "Moradabad",
};

export const principles = [
  {
    title: "Ship pixel-perfect, not pixel-close",
    description:
      "Design handoffs get followed to the pixel — spacing, states, motion — because the 2px you skip is the first thing a careful user notices.",
  },
  {
    title: "Judge the model like a user would",
    description:
      "Evaluating AI responses all day means holding my own frontend to the same bar: does it actually help, or does it just look like it does.",
  },
  {
    title: "Fast is a feature",
    description:
      "Lighthouse scores, bundle size, load time — performance isn't an afterthought bolted on at the end, it's part of the design brief.",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Python"],
    shippedIn: ["ScoutFlow AI", "LeetCode → GitHub Sync", "Video Editing Portfolio"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui"],
    shippedIn: ["This Portfolio"],
  },
  {
    label: "AI / Data",
    skills: [
      "AI Evaluation",
      "Prompt Engineering",
      "Data Annotation",
      "Text Classification",
      "Sentiment Analysis",
    ],
    shippedIn: ["ScoutFlow AI", "Model Evaluation Work"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Adobe Premiere Pro"],
    shippedIn: ["Every project shipped since 2024"],
  },
];

export const skillTicker = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Python",
  "Prompt Engineering",
  "Data Annotation",
  "Git",
  "Vercel",
  "shadcn/ui",
  "Sentiment Analysis",
];

// Skills rendered as connected nodes in the network cluster (only ones with a
// recognizable mark read well as an icon at a glance).
export const skillNodes = [
  { id: "react", label: "React.js", size: "lg" },
  { id: "nextjs", label: "Next.js", size: "lg" },
  { id: "typescript", label: "TypeScript", size: "md" },
  { id: "javascript", label: "JavaScript", size: "md" },
  { id: "tailwind", label: "Tailwind CSS", size: "lg" },
  { id: "html5", label: "HTML5", size: "sm" },
  { id: "css3", label: "CSS3", size: "sm" },
  { id: "python", label: "Python", size: "md" },
  { id: "git", label: "Git", size: "sm" },
  { id: "github", label: "GitHub", size: "md" },
  { id: "vercel", label: "Vercel", size: "sm" },
] as const;

export type Project = {
  id: string;
  name: string;
  year: string;
  category: string;
  description: string;
  outcome?: string;
  stack: string[];
  liveUrl?: string;
  codeUrl: string;
  screenshot?: string;
};

export const projects: Project[] = [
  {
    id: "scoutflow-ai",
    name: "ScoutFlow AI",
    year: "2025",
    category: "AI recruiting agent",
    description:
      "Takes a job description, extracts role requirements, ranks candidates on Match Score and Interest Score, simulates outreach conversations, and exports a recruiter-ready shortlist. Runs on deterministic fallback logic with zero API key, or gets sharper with Gemini / OpenAI enrichment.",
    outcome: "Full pipeline: JD parsing → ranked shortlist → CSV/JSON export",
    stack: ["Python", "Streamlit", "Gemini API", "OpenAI API", "Pandas"],
    codeUrl: "https://github.com/ArpitSainiX/AI-powered-Talent-Scouting-Engagement-agent",
  },
  {
    id: "leetcode-sync",
    name: "LeetCode → GitHub Sync",
    year: "2025",
    category: "Chrome extension",
    description:
      "Intercepts LeetCode's submission response in-browser, detects an Accepted verdict, pulls the solution straight out of the Monaco editor, and pushes it to a configured GitHub repo via the GitHub API — no copy-paste, ever.",
    outcome: "Zero manual steps between an Accepted verdict and a GitHub commit",
    stack: ["JavaScript", "Chrome Extension API", "GitHub API"],
    codeUrl: "https://github.com/ArpitSainiX/Leetcode-to-github-sync",
  },
  {
    id: "video-portfolio",
    name: "Video Editing Portfolio",
    year: "2024",
    category: "Creative showcase",
    description:
      "A focused, custom-styled portfolio page built to showcase promotional and educational video edits — proof that the same eye for pacing and detail carries over from the timeline to the browser.",
    stack: ["HTML5", "CSS3"],
    liveUrl: "https://arpitsainix.github.io/Portfolio/",
    codeUrl: "https://github.com/ArpitSainiX/Portfolio",
    screenshot: "/projects/video-portfolio.png",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Project Contributor",
    org: "Handshake · Freelance",
    period: "Jul 2026 — Present",
    location: "India · Remote",
    points: ["Contributing to a freelance project built on Python and Docker."],
  },
  {
    role: "AI Evaluation Specialist",
    org: "Deccan AI Experts · Freelance",
    period: "Sep 2025 — Mar 2026",
    location: "Moradabad, India · Remote",
    points: [
      "Focused on improving AI model responses to ensure they're clear, accurate, and easy for users to understand.",
      "Refined how information is structured and how user intent is interpreted across chatbot responses.",
      "Core skills: chatbot response evaluation, prompt engineering.",
    ],
  },
  {
    role: "Contributor",
    org: "Outlier · Part-time",
    period: "Jun 2025 — Aug 2025",
    location: "Remote",
    points: [
      "Performed multilingual data annotation and text classification.",
      "Evaluated chatbot responses and refined prompts for LLM applications.",
    ],
  },
  {
    role: "Freelance Web Developer & Video Editor",
    org: "Self-Employed",
    period: "2024 — Present",
    location: "Remote",
    points: [
      "Designed and developed responsive web pages with a focus on UI/UX and performance.",
      "Built and deployed conversion-focused landing pages hosted on Vercel and GitHub Pages.",
      "Edited 10+ educational and promotional videos in Adobe Premiere Pro for clients and personal projects.",
      "Managed multiple concurrent projects independently, consistently delivering on time.",
    ],
  },
];

export const beyondCode = {
  chess: "Rated 1300 on Chess.com — mentors beginner players",
  competitive: "Active on LeetCode & Codeforces",
};
