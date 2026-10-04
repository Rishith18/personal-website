// All site content lives here. Edit this file to update the website —
// no component changes needed.

export type LinkKind = "github" | "live" | "paper";

export type ProjectLink = {
  kind: LinkKind;
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  badge: string;
  period: string;
  blurb: string;
  details: string[];
  skills: string[];
  links: ProjectLink[];
  // Drop a screenshot at /public/projects/<slug>.png (or a clip at <slug>.mp4)
  // and it is picked up automatically — see src/app/page.tsx.
  image?: string;
  video?: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  tools: string[];
  links?: { label: string; href: string }[];
};

export const profile = {
  firstName: "Rishith",
  lastName: "Prathi",
  name: "Rishith Prathi",
  title: "Software Engineer · ML",
  location: "Pittsburgh, PA",
  eyebrow: "CS + Machine Learning @ Carnegie Mellon",
  tagline:
    "I build ML systems and the infrastructure that ships them, from LLM data pipelines to production RAG.",
  email: "rishiprathi18@gmail.com",
  github: "https://github.com/Rishith18",
  githubHandle: "github.com/Rishith18",
  linkedin: "https://www.linkedin.com/in/rishith-prathi",
  linkedinHandle: "linkedin.com/in/rishith-prathi",
  resume: "/resume.pdf",
  headshot: "/headshot.jpg",
};

export const education = {
  school: "Carnegie Mellon University",
  degree: "B.S. in Computer Science",
  concentration: "Concentration in Machine Learning",
  location: "Pittsburgh, PA",
  period: "Expected May 2028",
  gradYear: "2028",
  coursework: [
    { code: "15-259", name: "Probability and Computing" },
    { code: "15-213", name: "Computer Systems" },
    { code: "15-251", name: "Discrete Math" },
    { code: "15-210", name: "Parallel and Sequential Data Structures and Algorithms" },
    { code: "10-301", name: "Machine Learning" },
    { code: "10-714", name: "Deep Learning Systems" },
  ],
};

export const FORGER_PAPER =
  "https://drive.google.com/file/d/1-RIB5-1Edn5o2S4tFTpjMvzokiP9Oea4/view?usp=sharing";

export const experience: Experience[] = [
  {
    company: "Catalyst Lab @ CMU",
    role: "Machine Learning Research Assistant",
    location: "Pittsburgh, PA",
    period: "Aug. 2026 – Present",
    bullets: [
      "Extending PithTrain, a distributed Mixture-of-Experts (MoE) training framework, with RL post-training for 100B+ parameter models.",
      "Built a streaming checkpoint loader that loads Hugging Face model weights directly into a fully sharded data parallel (FSDP) model, eliminating a costly offline conversion step and reducing model startup time from 15–45 to 2–5 minutes.",
    ],
    tools: [
      "Python",
      "PyTorch",
      "FSDP",
      "Mixture of Experts",
      "Reinforcement Learning",
      "Hugging Face",
      "Distributed Training",
    ],
  },
  {
    company: "Adobe",
    role: "Software Engineering Intern",
    location: "San Jose, CA",
    period: "May 2026 – Aug. 2026",
    bullets: [
      "Shipped a production RAG context engine with containerized FastAPI serving 1,000+ users, generating AI recommendations for 20k marketing campaigns via Azure OpenAI embeddings and Cosmos DB vector search.",
      "Created a Scala service, scheduled through Jenkins, that leverages an LLM to cluster AI-agent conversations from Langfuse into weekly Slack reports, saving 10+ engineers a combined 20+ hours/week of manual review.",
      "Migrated database syncing to distributed Temporal workflows with checkpointing and automatic retries, making syncs resumable after failure and eliminating 5 minutes of redundant work per API deploy.",
      "Built an evaluation harness comparing 12+ campaign embedding strategies with LLM-as-judge scoring; the top strategy improved average recommendation accuracy by 27% and surveyed user satisfaction by 8%.",
    ],
    tools: [
      "Python",
      "FastAPI",
      "Scala",
      "Azure OpenAI",
      "Cosmos DB",
      "Temporal",
      "Jenkins",
      "Langfuse",
      "Docker",
    ],
  },
  {
    company: "NeuLab @ Language Technologies Institute, CMU",
    role: "Machine Learning Research Assistant",
    location: "Pittsburgh, PA",
    period: "Jan. 2026 – Jul. 2026",
    bullets: [
      "Co-designed Forger (2nd author, COLM 2026), an open-source framework that provides reusable workflows — web data retrieval + LLM orchestration — for generating LLM training data at scale.",
      "Engineered a thread-safe caching layer sharing GPU-hosted, tensor-parallel LLMs across concurrent evaluation workers, eliminating redundant weight reloads and cutting eval runtime 3x.",
      "Demonstrated Forger-generated data drives a 24-point in-context-learning gain on the HumanEval benchmark through batched vLLM inference with seeded 4-shot subset sampling and bootstrapped confidence intervals.",
    ],
    tools: ["Python", "PyTorch", "vLLM", "LLMs", "Tensor Parallelism", "Hugging Face"],
    links: [
      { label: "Paper", href: FORGER_PAPER },
      { label: "GitHub", href: "https://github.com/viswavi/forger" },
    ],
  },
  {
    company: "Moss Robotics",
    role: "Software Engineering Intern · Seed-Stage Startup",
    location: "Pittsburgh, PA",
    period: "Jul. 2025 – Dec. 2025",
    bullets: [
      "Programmed a point cloud training data generator that improved the company's primary ML model accuracy by 4%.",
      "Boosted YOLO-based neural network performance by 23% by building a C++/Python pipeline that generated and rasterized 5,000+ synthetic images for object detection.",
      "Validated synthetic data at 89% of real-data accuracy, saving 100+ hours of costly real-world data collection.",
    ],
    tools: ["C++", "Python", "YOLO", "Point Clouds", "Synthetic Data", "Computer Vision"],
  },
];

export const projects: Project[] = [
  {
    slug: "forger",
    title: "Forger",
    badge: "COLM 2026 · 2nd Author",
    period: "Jan. 2026 – Jul. 2026",
    blurb:
      "An open-source framework of reusable workflows that combine web data retrieval and LLM orchestration to generate LLM training data at scale.",
    details: [
      "Co-designed Forger at CMU's NeuLab (Language Technologies Institute) — 2nd author on the paper accepted to COLM 2026.",
      "Provides reusable, composable workflows that pair web data retrieval with LLM orchestration to synthesize training data at scale.",
      "Engineered a thread-safe caching layer that shares GPU-hosted, tensor-parallel LLMs across concurrent evaluation workers — no redundant weight reloads, 3x faster evals.",
      "Showed Forger-generated data drives a 24-point in-context-learning gain on HumanEval, using batched vLLM inference, seeded 4-shot subset sampling, and bootstrapped confidence intervals.",
    ],
    skills: ["Python", "LLMs", "vLLM", "PyTorch", "Web Retrieval", "Synthetic Data"],
    links: [
      { kind: "github", label: "GitHub", href: "https://github.com/viswavi/forger" },
      { kind: "paper", label: "Paper", href: FORGER_PAPER },
    ],
  },
  {
    slug: "phantom",
    title: "Phantom",
    badge: "VentureHacks 2026 Winner · Top 2 of 50+",
    period: "Mar. 2026",
    blurb:
      "An AI agent for Meta Ray-Ban smart glasses that handles everyday tasks through voice and vision.",
    details: [
      "Built Phantom, an AI agent for Meta Ray-Ban smart glasses that handles everyday tasks via voice and vision.",
      "Streamed live camera + audio to the Gemini Live API over WebSockets for sub-second multimodal inference.",
      "Engineered an LLM tool-calling pipeline through OpenClaw, routing Gemini function calls to native iOS actions and cutting voice-to-action latency by around 40%.",
      "Won VentureHacks 2026 (invite-only) — top 2 of 50+ teams.",
    ],
    skills: ["Python", "Gemini Live API", "WebSockets", "OpenClaw", "iOS", "Meta Ray-Ban"],
    links: [{ kind: "live", label: "Live Site", href: "https://rishith18.github.io/Phantom/" }],
  },
  {
    slug: "splitpot",
    title: "Splitpot",
    badge: "Distributed CFR Poker Engine",
    period: "Feb. 2026 – Mar. 2026",
    blurb:
      "A Counterfactual Regret Minimization poker engine parallelized across an autoscaling Kubernetes cluster — training in minutes, not hours.",
    details: [
      "Parallelized a Counterfactual Regret Minimization (CFR) poker engine in Python across 66K+ information sets.",
      "Ran training on a Kubernetes cluster of autoscaling worker pods, cutting model training time from hours to minutes.",
      "Built a containerized strategy storage system that aggregates results from parallel workers with checkpointing.",
    ],
    skills: ["Python", "Kubernetes", "Docker", "Distributed Systems", "Game Theory"],
    links: [{ kind: "github", label: "GitHub", href: "https://github.com/Rishith18/PokerApp" }],
  },
  {
    slug: "swifter",
    title: "SwiftER",
    badge: "NexHacks 2026 Winner · Top 3 of 1,000+",
    period: "Jan. 2026",
    blurb:
      "A multi-agent AI pipeline that transcribes live EMT calls and routes STEMI, stroke, and trauma patients to the optimal hospital in real time.",
    details: [
      "Developed a multi-agent AI pipeline with LangChain and GPT-4 that transcribes live EMT voice calls.",
      "Auto-selects the optimal hospital for STEMI, stroke, and trauma cases in real time.",
      "Designed the routing platform with React, FastAPI, PostgreSQL, and Redis for sub-second hospital matching.",
      "Won NexHacks 2026 — top 3 of 1,000+ participants.",
    ],
    skills: ["LangChain", "GPT-4", "React", "FastAPI", "PostgreSQL", "Redis"],
    links: [{ kind: "github", label: "GitHub", href: "https://github.com/NishnathPolav/SwiftER" }],
  },
  {
    slug: "story0",
    title: "Story.0",
    badge: "Novel → Picture Book Web App",
    period: "Jan. 2025 – Mar. 2025",
    blurb:
      "A full-stack web app that turns long PDF novels into illustrated children's picture books with AI-generated captions and artwork.",
    details: [
      "Constructed a full-stack web app with a React front end and Python back end that converts large PDF novels into children's picture books.",
      "The Python back end extracts the novel's text and sends it to the OpenAI API to produce kid-friendly captions for each page.",
      "Leveraged the OpenAI API to generate image prompts for the DALL·E model, refined through iterative prompt engineering to keep illustrations consistent.",
    ],
    skills: ["Python", "React", "OpenAI API", "DALL·E", "HTML"],
    links: [{ kind: "github", label: "GitHub", href: "https://github.com/Rishith18/Story.0" }],
  },
  {
    slug: "carbon-sim",
    title: "Carbon-Sim",
    badge: "CO₂ Policy Simulator",
    period: "Sep. 2024",
    blurb:
      "An interactive CO₂ emissions simulator: adjust environmental policies with sliders and watch long-term projections update in real time.",
    details: [
      "Engineered a CO₂ emissions simulator in React that lets users manipulate emissions policy and see real-time impact analyses, improving decision-making efficiency by ~25%.",
      "Implemented Chart.js for interactive data visualizations and designed custom dynamic sliders for manipulating the environmental policy graph.",
      "Leveraged external APIs for continuously updated baseline data, improving the accuracy of long-term projections.",
    ],
    skills: ["React", "Chart.js", "JavaScript", "CSS", "External APIs"],
    links: [{ kind: "github", label: "GitHub", href: "https://github.com/Pranav-Karra/Carbon-Sim" }],
  },
];

export const contact = {
  heading: "Let's build something",
  note:
    "I'm open to software engineering and ML internships, research collaborations, and ambitious side projects. The fastest way to reach me is email.",
};

export const navItems = [
  { id: "intro", label: "Intro" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
