"use client"
import React, { useState, useEffect, useMemo } from 'react';
import {
  GraduationCap, MapPin, Award, BookOpen,
  Code2, Cpu, Layers, GitBranch, Globe, Terminal, ExternalLink, Flame,
  Plus, Trash2, Check, CheckCircle2, RefreshCw,
  Edit3, Save, Menu, X, Sun, Moon,
  FolderGit2, Copy, CheckCheck, Sparkle as SparkleIcon,
  Download, FileText, Upload, BarChart3, Trophy, Medal, Star,
  Briefcase, Calendar, Clock, Shield, Zap, Compass, Target, Bookmark
} from 'lucide-react';

// ============================================================================
// CUSTOM ANIMATIONS & CV EDITORIAL STUDIO DESIGN TOKENS
// ============================================================================
const PROFILE_STYLES = `
  @keyframes pfFloatGentle {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-7px) rotate(1.2deg); }
  }
  @keyframes pfPrismBorder {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes pfSpringUp {
    from { opacity: 0; transform: translateY(14px) scale(0.99); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes pfBarGrow {
    from { width: 0%; }
  }
  @keyframes pfColGrow {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
  }
  @keyframes pfAmbientShift {
    0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.45; }
    50% { transform: translate(12px, -10px) scale(1.06); opacity: 0.78; }
  }

  .pf-float { animation: pfFloatGentle 5.4s ease-in-out infinite; }
  .pf-prism-ring {
    background: linear-gradient(120deg, #FF5A36, #2563EB, #10B981, #F59E0B, #FF5A36);
    background-size: 300% 300%;
    animation: pfPrismBorder 6s ease infinite;
  }
  .pf-slide-up { animation: pfSpringUp 0.42s cubic-bezier(0.22, 1, 0.36, 1) both; }
  .pf-bar-fill { animation: pfBarGrow 0.85s cubic-bezier(0.22, 1, 0.36, 1) both; }
  .pf-col-grow {
    transform-origin: bottom;
    animation: pfColGrow 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .pf-orb { animation: pfAmbientShift 8s ease-in-out infinite; }

  .pf-cv-sheet-light {
    background-color: #FAF7F2;
    background-image: radial-gradient(#CBD5E1 1.15px, transparent 1.15px);
    background-size: 22px 22px;
  }
  .pf-cv-sheet-dark {
    background-color: #0B0D12;
    background-image: radial-gradient(#273043 1.15px, transparent 1.15px);
    background-size: 22px 22px;
  }

  @media print {
    .no-print { display: none !important; }
    body { background: #ffffff !important; color: #000000 !important; }
  }
`;

// ============================================================================
// INLINE SVG ARTWORKS FOR CSE STUDENT SHOWCASE & AVATAR
// ============================================================================
function StudentAvatarSVG({ variant = 'coral', name = 'Rafiqul Islam' }) {
  const palettes = {
    coral: { bg1: '#FF5A36', bg2: '#2563EB', accent: '#10B981', visor: '#111827' },
    cobalt: { bg1: '#2563EB', bg2: '#0EA5E9', accent: '#F59E0B', visor: '#0F172A' },
    emerald: { bg1: '#10B981', bg2: '#059669', accent: '#FF5A36', visor: '#06281E' },
  };
  const p = palettes[variant] || palettes.coral;
  const initials = (name || 'CS')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" role="img" aria-label={name}>
      <defs>
        <linearGradient id={`avWarm-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={p.bg1} />
          <stop offset="100%" stopColor={p.bg2} />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="28" fill={`url(#avWarm-${variant})`} />
      <path d="M12 28 H34 L44 38" stroke="rgba(255,255,255,0.32)" strokeWidth="2" fill="none" />
      <circle cx="12" cy="28" r="3" fill="#fff" opacity="0.8" />
      <path d="M108 92 H84 L74 82" stroke="rgba(255,255,255,0.32)" strokeWidth="2" fill="none" />
      <circle cx="108" cy="92" r="3" fill="#fff" opacity="0.8" />
      <circle cx="60" cy="46" r="19" fill="#ffffff" fillOpacity="0.94" />
      <path d="M26 98 C28 76, 42 68, 60 68 C78 68, 92 76, 94 98 Z" fill="#ffffff" fillOpacity="0.94" />
      <rect x="43" y="40" width="14" height="8" rx="3" fill={p.visor} />
      <rect x="63" y="40" width="14" height="8" rx="3" fill={p.visor} />
      <line x1="57" y1="44" x2="63" y2="44" stroke={p.accent} strokeWidth="2.5" />
      <rect x="78" y="84" width="30" height="22" rx="7" fill={p.visor} stroke={p.accent} strokeWidth="2" />
      <text x="93" y="99" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="monospace">
        {initials}
      </text>
    </svg>
  );
}

function CodingSystemsSVG() {
  return (
    <svg viewBox="0 0 360 165" className="w-full h-40 rounded-2xl" role="img" aria-label="Coding and Systems Lab">
      <defs>
        <linearGradient id="codeBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="55%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="neonBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
      <rect width="360" height="165" rx="18" fill="url(#codeBg)" />
      <rect x="0" y="0" width="360" height="4" fill="url(#neonBar)" />
      <circle cx="22" cy="20" r="4.5" fill="#fb7185" />
      <circle cx="36" cy="20" r="4.5" fill="#fbbf24" />
      <circle cx="50" cy="20" r="4.5" fill="#34d399" />
      <text x="68" y="24" fill="#94a3b8" fontSize="10" fontFamily="monospace">
        algo_engine.py — CSE-241
      </text>

      <rect x="20" y="38" width="95" height="7" rx="3.5" fill="#38bdf8" opacity="0.85" />
      <rect x="34" y="53" width="130" height="7" rx="3.5" fill="#c084fc" opacity="0.8" />
      <rect x="34" y="68" width="110" height="7" rx="3.5" fill="#34d399" opacity="0.8" />
      <rect x="48" y="83" width="120" height="7" rx="3.5" fill="#fbbf24" opacity="0.75" />
      <rect x="20" y="98" width="84" height="7" rx="3.5" fill="#f472b6" opacity="0.85" />

      <line x1="230" y1="54" x2="282" y2="38" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
      <line x1="230" y1="54" x2="286" y2="86" stroke="#c084fc" strokeWidth="2" opacity="0.7" />
      <line x1="230" y1="108" x2="286" y2="86" stroke="#34d399" strokeWidth="2" opacity="0.7" />
      <line x1="282" y1="38" x2="324" y2="62" stroke="#f472b6" strokeWidth="2" opacity="0.7" />
      <line x1="286" y1="86" x2="324" y2="62" stroke="#fbbf24" strokeWidth="2" opacity="0.7" />

      <circle cx="230" cy="54" r="10" fill="#06b6d4" />
      <circle cx="230" cy="108" r="10" fill="#8b5cf6" />
      <circle cx="282" cy="38" r="10" fill="#ec4899" />
      <circle cx="286" cy="86" r="11" fill="#10b981" />
      <circle cx="324" cy="62" r="10" fill="#f59e0b" />

      <rect x="20" y="122" width="165" height="24" rx="12" fill="rgba(16,185,129,0.16)" stroke="#10b981" strokeOpacity="0.4" />
      <text x="102" y="138" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontWeight="700" fontFamily="monospace">
        O(n log n) · 18/18 Tests Passed
      </text>
    </svg>
  );
}

function HardwareCloudSVG() {
  return (
    <svg viewBox="0 0 360 165" className="w-full h-40 rounded-2xl" role="img" aria-label="Hardware and Cloud Architecture">
      <defs>
        <linearGradient id="hwBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#042f2e" />
          <stop offset="55%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect width="360" height="165" rx="18" fill="url(#hwBg)" />
      <rect x="52" y="42" width="76" height="76" rx="14" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2.5" />
      <rect x="68" y="58" width="44" height="44" rx="8" fill="#14b8a6" fillOpacity="0.22" stroke="#5eead4" strokeWidth="1.5" />
      <circle cx="90" cy="80" r="9" fill="#2dd4bf" />
      <line x1="66" y1="28" x2="66" y2="42" stroke="#2dd4bf" strokeWidth="2.5" />
      <line x1="90" y1="28" x2="90" y2="42" stroke="#2dd4bf" strokeWidth="2.5" />
      <line x1="114" y1="28" x2="114" y2="42" stroke="#2dd4bf" strokeWidth="2.5" />
      <line x1="66" y1="118" x2="66" y2="132" stroke="#2dd4bf" strokeWidth="2.5" />
      <line x1="90" y1="118" x2="90" y2="132" stroke="#2dd4bf" strokeWidth="2.5" />
      <line x1="114" y1="118" x2="114" y2="132" stroke="#2dd4bf" strokeWidth="2.5" />

      <path
        d="M148 80 Q168 42, 188 80 T228 80 T268 80"
        stroke="#38bdf8"
        strokeWidth="3"
        fill="none"
      />

      <rect x="278" y="34" width="60" height="28" rx="8" fill="#1d4ed8" fillOpacity="0.45" stroke="#60a5fa" strokeWidth="1.5" />
      <text x="308" y="52" textAnchor="middle" fill="#dbeafe" fontSize="9.5" fontWeight="700" fontFamily="monospace">
        DOCKER
      </text>
      <rect x="278" y="70" width="60" height="28" rx="8" fill="#7e22ce" fillOpacity="0.45" stroke="#c084fc" strokeWidth="1.5" />
      <text x="308" y="88" textAnchor="middle" fill="#f3e8ff" fontSize="9.5" fontWeight="700" fontFamily="monospace">
        LINUX
      </text>
      <rect x="278" y="106" width="60" height="28" rx="8" fill="#0f766e" fillOpacity="0.45" stroke="#5eead4" strokeWidth="1.5" />
      <text x="308" y="124" textAnchor="middle" fill="#ccfbf1" fontSize="9.5" fontWeight="700" fontFamily="monospace">
        POSTGRES
      </text>
    </svg>
  );
}

function AchievementTrophySVG() {
  return (
    <svg viewBox="0 0 360 165" className="w-full h-40 rounded-2xl" role="img" aria-label="Hackathon and Academic Achievements">
      <defs>
        <linearGradient id="trWarmBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1C1427" />
          <stop offset="55%" stopColor="#311C4E" />
          <stop offset="100%" stopColor="#4C1D24" />
        </linearGradient>
        <linearGradient id="prismCup" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#FF5A36" />
        </linearGradient>
      </defs>
      <rect width="360" height="165" rx="18" fill="url(#trWarmBg)" />
      <circle cx="52" cy="40" r="3" fill="#FBBF24" />
      <circle cx="132" cy="34" r="2.5" fill="#FF5A36" />
      <circle cx="138" cy="112" r="3" fill="#10B981" />
      <path
        d="M72 44 H114 V74 C114 88, 104 96, 93 96 C82 96, 72 88, 72 74 Z"
        fill="url(#prismCup)"
      />
      <path d="M72 52 H58 C58 68, 65 76, 73 76" stroke="#FBBF24" strokeWidth="3.5" fill="none" />
      <path d="M114 52 H128 C128 68, 121 76, 113 76" stroke="#FBBF24" strokeWidth="3.5" fill="none" />
      <rect x="88" y="96" width="10" height="16" fill="#FF5A36" />
      <rect x="74" y="112" width="38" height="8" rx="4" fill="#FBBF24" />

      <rect x="160" y="34" width="178" height="44" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
      <text x="174" y="53" fill="#FBBF24" fontSize="10.5" fontWeight="800">
        🏆 1st Runner-Up · Inter-Uni Hackathon
      </text>
      <text x="174" y="68" fill="#E2E8F0" fontSize="9.5">
        AI Study Assistant & Bangla OCR Track
      </text>

      <rect x="160" y="88" width="178" height="44" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
      <text x="174" y="107" fill="#34D399" fontSize="10.5" fontWeight="800">
        🎓 Dean’s Honor List · Sem 3–5
      </text>
      <text x="174" y="122" fill="#E2E8F0" fontSize="9.5">
        CGPA 3.78 / 4.00 · Top 4% of CSE Batch
      </text>
    </svg>
  );
}

// ============================================================================
// STUDENT ACCOUNT PRESETS
// ============================================================================
const STUDENT_PRESETS = {
  rafiq: {
    name: 'Abdullah AL Kawser',
    roleHeadline: 'CSE Undergraduate · Software Engineer, AI OCR & Algorithms',
    studentId: 'CSE-2023-06-042',
    degree: 'B.Sc. in Computer Science & Engineering',
    semester: 'Semester 6',
    batch: 'Batch 23',
    cgpa: '3.78 / 4.00',
    creditsCompleted: '108 / 160',
    email: 'abdullah.cse@campusverse.edu.bd',
    phone: '+880 17XX-XXXXXX',
    location: 'Dhaka, Bangladesh',
    github: 'https://github.com/abdullahalkawser',
    linkedin: 'https://linkedin.com/in/abdullahalkawser',
    portfolio: 'https://abdullahalkawser.dev',
    avatarVariant: 'coral',
    bio:
      'Computer Science & Engineering student building Next.js web platforms, Bangla OCR pipelines, graph/DP solvers, and research-backed academic tools with clean architecture and strong problem-solving habits.',
    openToInternship: true,
  },
  nabila: {
    name: 'Nabila Rahman Tasnim',
    roleHeadline: 'CSE Undergraduate · Distributed Systems, ML & Research',
    studentId: 'CSE-2023-06-089',
    degree: 'B.Sc. in Computer Science & Engineering',
    semester: 'Semester 6',
    batch: 'Batch 23',
    cgpa: '3.89 / 4.00',
    creditsCompleted: '111 / 160',
    email: 'nabila.cse@campusverse.edu.bd',
    phone: '+880 18XX-XXXXXX',
    location: 'Chattogram, Bangladesh',
    github: 'https://github.com/nabila-systems',
    linkedin: 'https://linkedin.com/in/nabila-tasnim',
    portfolio: 'https://nabila.codes',
    avatarVariant: 'cobalt',
    bio:
      'CSE undergraduate researching distributed storage, systems reliability, and applied machine learning for smart education and exam analytics.',
    openToInternship: true,
  },
};

// ============================================================================
// INITIAL CSE SKILLS DATA ("WHAT I LEARNED / SKILL MATRIX")
// ============================================================================
const INITIAL_SKILLS = [
  { id: 1, name: 'JavaScript / TypeScript', category: 'Languages', level: 92, learnedSummary: 'ES6+, async patterns, strict types, React & Next.js apps', tag: 'Expert' },
  { id: 2, name: 'Python', category: 'Languages', level: 88, learnedSummary: 'Data pipelines, NumPy/PyTorch OCR experiments & automation', tag: 'Advanced' },
  { id: 3, name: 'C / C++', category: 'Languages', level: 90, learnedSummary: 'STL, graphs, DP, pointers, OOP & contest problem solving', tag: 'Advanced' },
  { id: 4, name: 'Java & SQL', category: 'Languages', level: 82, learnedSummary: 'OOP design patterns, joins, indexing & transaction queries', tag: 'Proficient' },
  { id: 5, name: 'React / Next.js', category: 'Frameworks & Web', level: 91, learnedSummary: 'App Router, hooks, state design, responsive UI & APIs', tag: 'Expert' },
  { id: 6, name: 'Node.js / Express & REST', category: 'Frameworks & Web', level: 84, learnedSummary: 'RESTful endpoints, auth flows, middleware & JSON APIs', tag: 'Advanced' },
  { id: 7, name: 'Tailwind CSS', category: 'Frameworks & Web', level: 94, learnedSummary: 'Responsive bento grids, dark mode, animations & design tokens', tag: 'Expert' },
  { id: 8, name: 'DSA & Algorithms', category: 'AI / Data / CS Core', level: 89, learnedSummary: 'Trees, graphs, shortest paths, DP, greedy & complexity analysis', tag: 'Advanced' },
  { id: 9, name: 'OOP, OS & DBMS', category: 'AI / Data / CS Core', level: 87, learnedSummary: 'Threads, scheduling, deadlocks, paging, normalization & ACID', tag: 'Advanced' },
  { id: 10, name: 'Machine Learning & OCR', category: 'AI / Data / CS Core', level: 78, learnedSummary: 'Image preprocessing, feature extraction & Bangla/English OCR', tag: 'Intermediate' },
  { id: 11, name: 'Git, GitHub & Linux', category: 'DevOps & Tools', level: 90, learnedSummary: 'Branching, PRs, bash scripting, permissions & CLI workflow', tag: 'Advanced' },
  { id: 12, name: 'Docker & PostgreSQL', category: 'DevOps & Tools', level: 79, learnedSummary: 'Containerized dev environments & relational database schemas', tag: 'Proficient' },
];

// ============================================================================
// 10 AWARDS & HONORS DATA
// ============================================================================
const INITIAL_AWARDS = [
  { id: 1, title: '1st Runner-Up · National EdTech AI Hackathon', issuer: 'Inter-University Tech Fest', year: '2026', badge: 'Hackathon', desc: 'Built an AI Bangla OCR & study pattern prototype in 36 hours.' },
  { id: 2, title: 'Dean’s Honor List (Semesters 3, 4 & 5)', issuer: 'Faculty of CSE', year: '2025–26', badge: 'Academic', desc: 'Awarded for top academic standing and high semester GPA.' },
  { id: 3, title: 'Intra-Departmental Programming Contest — 2nd Place', issuer: 'CSE Coding Club', year: '2025', badge: 'Competitive', desc: 'Solved 6/8 algorithmic graph & DP problems under 3 hours.' },
  { id: 4, title: 'Best Capstone Prototype Award', issuer: 'Campus Innovation Showcase', year: '2026', badge: 'Engineering', desc: 'Recognized for CampusVerse modular student productivity architecture.' },
  { id: 5, title: '42-Day Continuous Coding Streak Medal', issuer: 'CampusVerse Dev Tracker', year: '2026', badge: 'Consistency', desc: 'Maintained daily coding & problem-solving practice for 6 weeks.' },
  { id: 6, title: 'Top 5% in Data Structures & Algorithms Lab', issuer: 'Dept. of CSE', year: '2025', badge: 'Course Honor', desc: 'Perfect lab implementation score across trees, heaps & graphs.' },
  { id: 7, title: 'Best Technical Poster: Bangla Handwritten OCR', issuer: 'Undergraduate Research Symposium', year: '2026', badge: 'Research', desc: 'Presented segmentation & recognition findings for handwritten notes.' },
  { id: 8, title: 'Open-Source Student Contributor Recognition', issuer: 'Campus OSS Collective', year: '2025', badge: 'Open Source', desc: 'Merged 25+ pull requests improving docs, UI & bug fixes.' },
  { id: 9, title: 'CyberSec Web & Crypto CTF Finalist', issuer: 'University InfoSec Society', year: '2025', badge: 'CTF / Sec', desc: 'Completed web auth, SQLi defense & classical/modern crypto challenges.' },
  { id: 10, title: 'Merit Scholarship for Academic Excellence', issuer: 'University Academic Council', year: '2024–26', badge: 'Scholarship', desc: 'Awarded tuition merit recognition for consistent CSE performance.' },
];

// ============================================================================
// CODING TIME SERIES DATA: DAILY, WEEKLY, MONTHLY & 1 YEAR
// ============================================================================
const CODING_TIME_RANGES = {
  day: {
    label: 'Daily (Today · Hourly)',
    totalLabel: '6.5 hrs today',
    subtitle: 'Active coding, debugging & DSA practice across today’s study blocks',
    points: [
      { label: '08h', hours: 1.0, focus: 'Morning DSA' },
      { label: '10h', hours: 1.5, focus: 'Next.js UI' },
      { label: '12h', hours: 0.5, focus: 'Lab Notes' },
      { label: '15h', hours: 1.5, focus: 'API & DB' },
      { label: '18h', hours: 1.0, focus: 'OCR Model' },
      { label: '21h', hours: 1.0, focus: 'Code Review' },
    ],
  },
  week: {
    label: 'Weekly (Mon – Sun)',
    totalLabel: '38.5 hrs / wk',
    subtitle: 'Daily coding hours across the current week (avg 5.5 hrs/day)',
    points: [
      { label: 'Mon', hours: 5.0, focus: 'Algorithms' },
      { label: 'Tue', hours: 6.0, focus: 'React/Next.js' },
      { label: 'Wed', hours: 4.5, focus: 'OS & DBMS Lab' },
      { label: 'Thu', hours: 6.5, focus: 'Full-Stack Build' },
      { label: 'Fri', hours: 5.5, focus: 'Contest & CP' },
      { label: 'Sat', hours: 6.0, focus: 'Research & OCR' },
      { label: 'Sun', hours: 5.0, focus: 'System Design' },
    ],
  },
  month: {
    label: 'Monthly (Weeks 1 – 4 + Current)',
    totalLabel: '154 hrs / mo',
    subtitle: 'Weekly cumulative coding output across the current academic month',
    points: [
      { label: 'Wk 1', hours: 34, focus: 'Core Setup & UI' },
      { label: 'Wk 2', hours: 39, focus: 'Graph & DP Sprint' },
      { label: 'Wk 3', hours: 37, focus: 'Backend & SQL' },
      { label: 'Wk 4', hours: 44, focus: 'Hackathon & OCR' },
    ],
  },
  year: {
    label: '1 Year (12 Months · Jan – Dec)',
    totalLabel: '1,680 hrs / yr',
    subtitle: 'Full 1-year coding & engineering activity bar chart across 12 months',
    points: [
      { label: 'Jan', hours: 120, focus: 'C++ & CP' },
      { label: 'Feb', hours: 132, focus: 'DSA Foundations' },
      { label: 'Mar', hours: 128, focus: 'Web & CSS' },
      { label: 'Apr', hours: 145, focus: 'React Apps' },
      { label: 'May', hours: 138, focus: 'DBMS & SQL' },
      { label: 'Jun', hours: 150, focus: 'Next.js Projects' },
      { label: 'Jul', hours: 142, focus: 'OS & Linux' },
      { label: 'Aug', hours: 156, focus: 'ML & OCR Intro' },
      { label: 'Sep', hours: 134, focus: 'Midterm & Labs' },
      { label: 'Oct', hours: 148, focus: 'Hackathon Prep' },
      { label: 'Nov', hours: 154, focus: 'CampusVerse Hub' },
      { label: 'Dec', hours: 150, focus: 'Capstone & Finals' },
    ],
  },
};

// ============================================================================
// MAIN CSE STUDENT CV & PORTFOLIO PAGE COMPONENT
// ============================================================================
export default function ProfilePage({ onNavigateHub }) {
  const [lang, setLang] = useState('bn'); // 'bn' | 'en'
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('cv'); // 'cv' | 'tools15' | 'edit'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Student Profile State (Last login intentionally omitted per request)
  const [profile, setProfile] = useState(STUDENT_PRESETS.rafiq);
  const [draft, setDraft] = useState(STUDENT_PRESETS.rafiq);
  const [saveBanner, setSaveBanner] = useState(null);

  const notifyBanner = (msg) => {
    setSaveBanner(msg);
    setTimeout(() => setSaveBanner(null), 3200);
  };

  // ==========================================================================
  // FEATURE 1: CODING TIME BAR CHART (DAY / WEEK / MONTH / 1 YEAR)
  // ==========================================================================
  const [timeRange, setTimeRange] = useState('week'); // 'day' | 'week' | 'month' | 'year'
  const currentTimeSeries = CODING_TIME_RANGES[timeRange];
  const maxTimeHours = useMemo(() => {
    return Math.max(...currentTimeSeries.points.map((p) => p.hours), 1);
  }, [currentTimeSeries]);

  // ==========================================================================
  // FEATURE 2: SKILLS & "WHAT I LEARNED" MATRIX + ADD/REMOVE
  // ==========================================================================
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [skillCategory, setSkillCategory] = useState('All');
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCat, setNewSkillCat] = useState('Frameworks & Web');
  const [newSkillLevel, setNewSkillLevel] = useState(86);
  const [newSkillLearned, setNewSkillLearned] = useState('Hands-on projects, debugging & core concepts');

  const categories = ['All', 'Languages', 'Frameworks & Web', 'AI / Data / CS Core', 'DevOps & Tools'];

  const visibleSkills = useMemo(() => {
    if (skillCategory === 'All') return skills;
    return skills.filter((sk) => sk.category === skillCategory);
  }, [skills, skillCategory]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    const lvl = Math.min(100, Math.max(20, Number(newSkillLevel) || 80));
    const tag = lvl >= 90 ? 'Expert' : lvl >= 80 ? 'Advanced' : 'Proficient';
    setSkills((prev) => [
      {
        id: Date.now(),
        name: newSkillName.trim(),
        category: newSkillCat,
        level: lvl,
        learnedSummary: newSkillLearned.trim() || 'Practical coursework & project implementation',
        tag,
      },
      ...prev,
    ]);
    setNewSkillName('');
    notifyBanner(lang === 'bn' ? 'নতুন স্কিল ও "যা শিখেছি" যুক্ত হয়েছে!' : 'Added new skill & learning note to CV!');
  };

  // ==========================================================================
  // FEATURE 3: SKILL CERTIFICATE UPLOAD & VERIFICATION VAULT
  // ==========================================================================
  const [certificates, setCertificates] = useState([
    { id: 1, title: 'Full-Stack Next.js & TypeScript Specialization', skill: 'React / Next.js', issuer: 'Meta / Coursera Track', date: 'Aug 2026', fileName: 'nextjs-cert.pdf', credentialId: 'CV-NX-9041' },
    { id: 2, title: 'Algorithms, Graphs & Dynamic Programming', skill: 'DSA & Algorithms', issuer: 'Stanford / Online CS', date: 'Mar 2026', fileName: 'dsa-algorithms-cert.pdf', credentialId: 'CV-AL-4412' },
    { id: 3, title: 'Applied Machine Learning & OCR Foundations', skill: 'Machine Learning & OCR', issuer: 'DeepLearning Track', date: 'Jul 2026', fileName: 'ml-ocr-cert.png', credentialId: 'CV-ML-7720' },
  ]);
  const [certTitle, setCertTitle] = useState('');
  const [certSkill, setCertSkill] = useState('React / Next.js');
  const [certIssuer, setCertIssuer] = useState('');
  const [certFileName, setCertFileName] = useState('certificate-2026.pdf');

  const handleCertFilePick = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setCertFileName(file.name);
      if (!certTitle.trim()) {
        setCertTitle(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
      }
    }
  };

  const handleUploadCert = (e) => {
    e.preventDefault();
    if (!certTitle.trim()) return;
    setCertificates((prev) => [
      {
        id: Date.now(),
        title: certTitle.trim(),
        skill: certSkill,
        issuer: certIssuer.trim() || 'Verified Skill Credential',
        date: 'Nov 2026',
        fileName: certFileName || 'skill-certificate.pdf',
        credentialId: `CV-${Math.floor(1000 + Math.random() * 9000)}`,
      },
      ...prev,
    ]);
    setCertTitle('');
    setCertIssuer('');
    setCertFileName('certificate-2026.pdf');
    notifyBanner(lang === 'bn' ? 'স্কিল সার্টিফিকেট আপলোড হয়েছে!' : 'Skill certificate uploaded & added to CV!');
  };

  // ==========================================================================
  // FEATURE 4: 10 AWARDS & HONORS SHOWCASE
  // ==========================================================================
  const [awards] = useState(INITIAL_AWARDS);
  const [awardFilter, setAwardFilter] = useState('All');

  const awardCategories = ['All', 'Hackathon', 'Academic', 'Competitive', 'Research'];
  const visibleAwards = useMemo(() => {
    if (awardFilter === 'All') return awards;
    return awards.filter((a) => a.badge === awardFilter);
  }, [awards, awardFilter]);

  // ==========================================================================
  // FEATURE 5: RESEARCH PAPERS TRACKER
  // ==========================================================================
  const [papers, setPapers] = useState([
    {
      id: 1,
      title: 'Hybrid CNN-Transformer Pipeline for Bangla Handwritten & Mathematical Notes',
      venue: 'IEEE Student Conference on AI & Vision (Draft)',
      year: '2026',
      status: 'Under Review',
      abstract: 'Combines stroke-level segmentation and sequence modeling for noisy handwritten academic notebooks.',
    },
    {
      id: 2,
      title: 'Frequency-Weighted Topic Prioritization from Historical Exam Question Banks',
      venue: 'University CSE Undergraduate Research Symposium',
      year: '2026',
      status: 'Published',
      abstract: 'Analyzes multi-year exam patterns to assist students with structured revision schedules.',
    },
  ]);
  const [newPaperTitle, setNewPaperTitle] = useState('');
  const [newPaperVenue, setNewPaperVenue] = useState('');

  const handleAddPaper = (e) => {
    e.preventDefault();
    if (!newPaperTitle.trim()) return;
    setPapers((prev) => [
      {
        id: Date.now(),
        title: newPaperTitle.trim(),
        venue: newPaperVenue.trim() || 'CSE Research Seminar',
        year: '2026',
        status: 'In Progress',
        abstract: 'Undergraduate research paper on applied computer science and intelligent student systems.',
      },
      ...prev,
    ]);
    setNewPaperTitle('');
    setNewPaperVenue('');
    notifyBanner(lang === 'bn' ? 'রিসার্চ পেপার যুক্ত হয়েছে!' : 'Added research paper to CV!');
  };

  // ==========================================================================
  // FEATURE 6: HACKATHONS & COMPETITIVE EVENTS LOG
  // ==========================================================================
  const [hackathons, setHackathons] = useState([
    { id: 1, event: 'National EdTech & AI Buildathon', placement: '1st Runner-Up', stack: 'Next.js, Python, OCR', year: '2026' },
    { id: 2, event: 'Intra-Uni ICPC-Style Algo Sprint', placement: 'Top 5 Teams', stack: 'C++20, Graphs, DP', year: '2025' },
    { id: 3, event: 'Campus Cloud & DevOps Challenge', placement: 'Finalist', stack: 'Docker, Linux, PostgreSQL', year: '2026' },
  ]);

  // ==========================================================================
  // FEATURE 7: LEARNING PROGRESSION & COURSEWORK MASTERY BAR CHART
  // ==========================================================================
  const [learningTracks, setLearningTracks] = useState([
    { id: 1, topic: 'Algorithms & Data Structures', mastery: 90, hours: '260h', color: 'from-[#FF5A36] to-[#F97316]' },
    { id: 2, topic: 'Full-Stack Web (Next.js / React)', mastery: 88, hours: '240h', color: 'from-[#2563EB] to-[#06B6D4]' },
    { id: 3, topic: 'Operating Systems & DBMS', mastery: 85, hours: '190h', color: 'from-[#10B981] to-[#059669]' },
    { id: 4, topic: 'AI, OCR & Applied ML', mastery: 78, hours: '150h', color: 'from-violet-600 to-fuchsia-600' },
  ]);

  const boostTrackMastery = (id) => {
    setLearningTracks((prev) =>
      prev.map((tr) =>
        tr.id === id ? { ...tr, mastery: Math.min(100, tr.mastery + 2) } : tr
      )
    );
    notifyBanner(lang === 'bn' ? 'লার্নিং প্রোগ্রেস আপডেট হয়েছে!' : 'Updated learning track mastery!');
  };

  // ==========================================================================
  // FEATURES 8–15: DSA JUDGE, GITHUB REPOS, LABS, SYS DESIGN, SETUP, SQUAD, EDUCATION & CV EXPORT
  // ==========================================================================
  const [dsaCounts, setDsaCounts] = useState({ easy: 148, medium: 146, hard: 48, rating: 1685, streak: 42 });
  const [newProbTitle, setNewProbTitle] = useState('');
  const [newProbDiff, setNewProbDiff] = useState('Medium');

  const handleLogProblem = (e) => {
    e.preventDefault();
    if (!newProbTitle.trim()) return;
    const k = newProbDiff.toLowerCase();
    setDsaCounts((prev) => ({ ...prev, [k]: (prev[k] || 0) + 1, streak: prev.streak + 1 }));
    setNewProbTitle('');
    notifyBanner(lang === 'bn' ? `DSA ${newProbDiff} প্রবলেম যুক্ত হয়েছে!` : `Logged ${newProbDiff} DSA problem!`);
  };

  const [repos] = useState([
    { name: 'campusverse-next-hub', lang: 'Next.js', stars: 46, commits: 214 },
    { name: 'graph-dp-cpp-toolkit', lang: 'C++20', stars: 31, commits: 168 },
    { name: 'bangla-ocr-reader', lang: 'Python', stars: 22, commits: 95 },
  ]);

  const [labs] = useState([
    { course: 'CSE-312 · OS Lab', title: 'Custom Thread Scheduler & Deadlock Detector', status: '85% Complete' },
    { course: 'CSE-322 · DBMS Lab', title: 'Query Optimizer & Transaction Lock Manager', status: '100% Completed' },
    { course: 'CSE-400 · Capstone', title: 'AI Study Hub & Question Pattern Engine', status: 'Demo Ready' },
  ]);

  const [sysNotes, setSysNotes] = useState([
    { id: 1, topic: 'Consistent Hashing & Load Balancing', done: true },
    { id: 2, topic: 'CAP Theorem, Replication & Sharding', done: true },
    { id: 3, topic: 'Rate Limiting & Redis Cache Strategies', done: false },
  ]);

  const [copiedSetup, setCopiedSetup] = useState(false);
  const devSetup = {
    os: 'Ubuntu 24.04 LTS + Windows 11',
    editor: 'VS Code + Neovim',
    hardware: 'Ryzen 7 · 16GB RAM · 512GB NVMe',
    cli: 'node -v && python3 --version && g++ --version && docker --version',
  };

  const handleCopySetup = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(`${devSetup.os} | ${devSetup.editor} | ${devSetup.hardware} | ${devSetup.cli}`).catch(() => {});
    }
    setCopiedSetup(true);
    notifyBanner(lang === 'bn' ? 'Dev Setup কপি হয়েছে!' : 'Copied Dev Setup & CLI command!');
    setTimeout(() => setCopiedSetup(false), 2000);
  };

  const [squadJoined, setSquadJoined] = useState([2]);
  const squads = [
    { id: 1, title: 'DP & Graph Contest Pair Practice', members: '3/4' },
    { id: 2, title: 'System Design Mock Review Group', members: '4/4' },
    { id: 3, title: 'CSE Research Paper Reading Circle', members: '2/4' },
  ];

  const [educationList] = useState([
    {
      degree: 'B.Sc. in Computer Science & Engineering (CSE)',
      school: 'CampusVerse University of Engineering & Technology',
      period: '2023 – Present (Semester 6 · Batch 23)',
      detail: 'CGPA: 3.78 / 4.00 · Completed 108 / 160 Credits · Dean’s Honor List',
    },
    {
      degree: 'Higher Secondary Certificate (HSC — Science)',
      school: 'Dhaka Residential & Science College',
      period: '2020 – 2022',
      detail: 'GPA: 5.00 / 5.00 · Physics, Higher Math, ICT & Chemistry',
    },
  ]);

  const projects = [
    {
      title: 'CampusVerse Study & Pattern Hub',
      stack: ['Next.js', 'React', 'Tailwind CSS', 'Analytics'],
      desc: 'Semester-wise notes library, smart book finder, question bank, and CSE-111 question pattern frequency analyzer.',
      badge: 'Featured Capstone',
      gradient: 'from-[#FF5A36] to-[#F59E0B]',
    },
    {
      title: 'PathFinder & Graph Visualizer',
      stack: ['C++ / TypeScript', 'Dijkstra', 'A*', 'Canvas'],
      desc: 'Interactive shortest-path, MST, and topological sort playground built for CSE Data Structures & Algorithms lab.',
      badge: 'DSA Lab Tool',
      gradient: 'from-[#2563EB] to-[#06B6D4]',
    },
    {
      title: 'Bangla Handwritten Note OCR',
      stack: ['Python', 'PyTorch', 'OCR', 'PDF Export'],
      desc: 'Converts Bangla & English handwritten lecture sheets and math formulas into editable digital notes.',
      badge: 'AI / ML Project',
      gradient: 'from-[#10B981] to-[#059669]',
    },
  ];

  // ==========================================================================
  // FEATURE 15: DOWNLOAD FULL CV (GENERATES & DOWNLOADS A COMPLETE CV FILE)
  // ==========================================================================
  const handleDownloadCV = () => {
    const totalSolved = dsaCounts.easy + dsaCounts.medium + dsaCounts.hard;
    const cvText = [
      '====================================================================',
      `CURRICULUM VITAE — ${profile.name.toUpperCase()}`,
      `${profile.roleHeadline}`,
      '====================================================================',
      `Student ID : ${profile.studentId} | ${profile.batch} | ${profile.semester}`,
      `Degree     : ${profile.degree}`,
      `CGPA       : ${profile.cgpa} | Credits: ${profile.creditsCompleted}`,
      `Email      : ${profile.email} | Phone: ${profile.phone}`,
      `Location   : ${profile.location}`,
      `GitHub     : ${profile.github} | LinkedIn: ${profile.linkedin} | Web: ${profile.portfolio}`,
      '',
      'PROFILE SUMMARY',
      '--------------------------------------------------------------------',
      profile.bio,
      '',
      'EDUCATION',
      '--------------------------------------------------------------------',
      ...educationList.map((ed) => `• ${ed.degree} — ${ed.school} (${ed.period})\n  ${ed.detail}`),
      '',
      'SKILLS & WHAT I LEARNED',
      '--------------------------------------------------------------------',
      ...skills.map((s) => `• [${s.category}] ${s.name} (${s.level}% · ${s.tag}) — ${s.learnedSummary}`),
      '',
      'CODING TIME & LEARNING PROGRESSION',
      '--------------------------------------------------------------------',
      `• Active Range (${currentTimeSeries.label}): ${currentTimeSeries.totalLabel}`,
      `• DSA Solved: ${totalSolved}+ (Easy: ${dsaCounts.easy}, Medium: ${dsaCounts.medium}, Hard: ${dsaCounts.hard}, Rating: ${dsaCounts.rating}, Streak: ${dsaCounts.streak}d)`,
      ...learningTracks.map((tr) => `• Track "${tr.topic}": ${tr.mastery}% mastery (${tr.hours} logged)`),
      '',
      'PROJECTS & LABS',
      '--------------------------------------------------------------------',
      ...projects.map((p) => `• ${p.title} [${p.badge}] (${p.stack.join(', ')})\n  ${p.desc}`),
      ...labs.map((l) => `• Lab — ${l.course}: ${l.title} (${l.status})`),
      '',
      'RESEARCH PAPERS',
      '--------------------------------------------------------------------',
      ...papers.map((rp) => `• "${rp.title}" — ${rp.venue} (${rp.year} · ${rp.status})\n  ${rp.abstract}`),
      '',
      'HACKATHONS & COMPETITIVE EVENTS',
      '--------------------------------------------------------------------',
      ...hackathons.map((h) => `• ${h.event} — ${h.placement} (${h.stack}, ${h.year})`),
      '',
      'SKILL CERTIFICATES',
      '--------------------------------------------------------------------',
      ...certificates.map((c) => `• ${c.title} [Skill: ${c.skill}] — ${c.issuer} (${c.date}, File: ${c.fileName}, ID: ${c.credentialId})`),
      '',
      'AWARDS & HONORS (10)',
      '--------------------------------------------------------------------',
      ...awards.map((aw, idx) => `${idx + 1}. ${aw.title} — ${aw.issuer} (${aw.year} · ${aw.badge}) | ${aw.desc}`),
      '',
      'SYSTEM DESIGN & DEV SETUP',
      '--------------------------------------------------------------------',
      `OS: ${devSetup.os} | Editor: ${devSetup.editor} | Hardware: ${devSetup.hardware}`,
      `System Design Notes: ${sysNotes.map((sn) => `${sn.topic} [${sn.done ? 'Mastered' : 'In Progress'}]`).join('; ')}`,
      '====================================================================',
    ].join('\n');

    try {
      const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const safeName = (profile.name || 'CSE_Student').toLowerCase().replace(/[^a-z0-9]+/g, '_');
      link.href = url;
      link.download = `${safeName}_CSE_CV.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      notifyBanner(lang === 'bn' ? 'আপনার সম্পূর্ণ CV ডাউনলোড হয়েছে!' : 'Downloaded your complete CSE CV file!');
    } catch {
      notifyBanner('Prepared CV summary for download.');
    }
  };

  const handleSwitchPreset = (presetKey) => {
    const chosen = STUDENT_PRESETS[presetKey];
    if (!chosen) return;
    setProfile(chosen);
    setDraft(chosen);
    notifyBanner(lang === 'bn' ? `CV প্রোফাইল সুইচ হয়েছে: ${chosen.name}` : `Switched CV to ${chosen.name}`);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfile(draft);
    setActiveTab('cv');
    notifyBanner(lang === 'bn' ? 'CV প্রোফাইল আপডেট হয়েছে!' : 'Saved CSE CV profile updates!');
  };

  const totalSolved = dsaCounts.easy + dsaCounts.medium + dsaCounts.hard;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${darkMode ? 'pf-cv-sheet-dark text-slate-100' : 'pf-cv-sheet-light text-slate-900'} transition-colors duration-300 font-sans`}>
        <style>{PROFILE_STYLES}</style>

        {/* Toast Notification */}
        {saveBanner && (
          <div className="no-print fixed bottom-5 right-5 z-50 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-2xl shadow-2xl border border-[#FF5A36]/40 flex items-center gap-2.5 text-xs font-bold pf-slide-up">
            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>{saveBanner}</span>
          </div>
        )}

        {/* STICKY CV TOPBAR (NO LAST LOGIN) */}
        <header className="no-print sticky top-0 z-40 bg-white/88 dark:bg-[#0E121B]/88 backdrop-blur-xl border-b border-stone-200/90 dark:border-slate-800/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 gap-2">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5A36] via-[#F97316] to-[#2563EB] flex items-center justify-center text-white shadow-lg shadow-[#FF5A36]/25 shrink-0 pf-float">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm sm:text-base tracking-tight truncate">
                      CSE Student CV & Portfolio
                    </span>
                    <span className="hidden sm:inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#059669] dark:text-emerald-300">
                      15+ Features
                    </span>
                  </div>
                  <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                    {profile.studentId} · {profile.batch} · {profile.semester}
                  </span>
                </div>
              </div>

              {/* Desktop Tabs */}
              <nav className="hidden lg:flex items-center gap-1 bg-stone-100/90 dark:bg-slate-900/90 p-1 rounded-2xl border border-stone-200/70 dark:border-slate-800">
                {[
                  { id: 'cv', label: lang === 'bn' ? 'CV প্রোফাইল ও চার্ট' : 'CV Sheet & Analytics' },
                  { id: 'tools15', label: lang === 'bn' ? 'সব ১৫+ ফিচার' : 'All 15+ CSE Tools' },
                  { id: 'edit', label: lang === 'bn' ? 'CV এডিট' : 'Edit CV' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      if (t.id === 'edit') setDraft(profile);
                      setActiveTab(t.id);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                      activeTab === t.id
                        ? 'bg-gradient-to-r from-[#FF5A36] to-[#EA580C] text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </nav>

              {/* Right Controls: Lang, Theme, Download CV */}
              <div className="flex items-center gap-2 shrink-0">
                {typeof onNavigateHub === 'function' && (
                  <button
                    onClick={onNavigateHub}
                    className="hidden xl:inline-flex px-3 py-1.5 rounded-xl text-xs font-bold bg-[#2563EB]/10 text-[#2563EB] dark:text-blue-400 hover:bg-[#2563EB]/20 border border-[#2563EB]/20 transition-colors"
                  >
                    Study Hub →
                  </button>
                )}

                <button
                  onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
                  className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 text-xs font-extrabold border border-stone-200 dark:border-slate-700 transition-colors"
                >
                  {lang === 'bn' ? 'EN / বাং' : 'বাং / EN'}
                </button>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-xl bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                </button>

                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#10B981] via-[#059669] to-[#2563EB] hover:opacity-95 text-white text-xs font-extrabold shadow-md shadow-[#10B981]/25 transition-all hover:scale-[1.02]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'ডাউনলোড CV' : 'Download CV'}</span>
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-xl bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-white dark:bg-[#0E121B] border-b border-stone-200 dark:border-slate-800 px-4 py-3 space-y-1.5">
              {[
                { id: 'cv', label: 'CV Sheet, Charts, Skills & 10 Awards' },
                { id: 'tools15', label: 'All 15+ CSE Student Features' },
                { id: 'edit', label: 'Edit CV Profile' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    if (t.id === 'edit') setDraft(profile);
                    setActiveTab(t.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold ${
                    activeTab === t.id
                      ? 'bg-[#FF5A36] text-white'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* MAIN CV DOCUMENT CONTAINER */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-7 space-y-7">
          {/* CV HEADER BANNER (RESUME STYLE) */}
          <section className="rounded-3xl bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-lg pf-slide-up relative overflow-hidden">
            <div className="pf-orb pointer-events-none absolute -right-14 -top-14 w-60 h-60 rounded-full bg-[#FF5A36]/15 blur-3xl" />
            <div className="pf-orb pointer-events-none absolute left-1/3 -bottom-20 w-60 h-60 rounded-full bg-[#2563EB]/15 blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 p-[3px] rounded-[28px] pf-prism-ring shadow-xl pf-float shrink-0">
                  <div className="w-full h-full rounded-[25px] overflow-hidden bg-white dark:bg-slate-900">
                    <StudentAvatarSVG variant={profile.avatarVariant} name={profile.name} />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#FF5A36]/12 text-[#FF5A36] border border-[#FF5A36]/25">
                      CURRICULUM VITAE · CSE
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#2563EB]/12 text-[#2563EB] dark:text-blue-300">
                      {profile.studentId} · {profile.batch} · {profile.semester}
                    </span>
                    {profile.openToInternship && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#059669] dark:text-emerald-300">
                        Available for SWE / AI Internships
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {profile.name}
                  </h1>
                  <p className="text-sm font-bold text-[#FF5A36] mt-0.5">
                    {profile.roleHeadline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
                    {profile.bio}
                  </p>

                  {/* Contact & Social Row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3.5 text-xs text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#FF5A36]" /> {profile.location}</span>
                    <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-amber-500" /> CGPA: <strong className="text-slate-900 dark:text-white">{profile.cgpa}</strong></span>
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-[#2563EB]" /> Credits: <strong className="text-slate-900 dark:text-white">{profile.creditsCompleted}</strong></span>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-[#2563EB] dark:text-blue-400 hover:underline">
                      <GitBranch className="w-3.5 h-3.5" /> GitHub <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-[#2563EB] dark:text-blue-400 hover:underline">
                      <Globe className="w-3.5 h-3.5" /> LinkedIn <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href={profile.portfolio} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-[#10B981] hover:underline">
                      <Terminal className="w-3.5 h-3.5" /> Portfolio <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right CV Action Stack */}
              <div className="no-print flex flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between gap-2.5 shrink-0">
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleSwitchPreset('rafiq')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      profile.studentId.includes('042') ? 'bg-[#FF5A36] text-white' : 'bg-stone-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    Rafiqul CV
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSwitchPreset('nabila')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      profile.studentId.includes('089') ? 'bg-[#2563EB] text-white' : 'bg-stone-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    Nabila CV
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#FF5A36] via-[#EA580C] to-[#2563EB] hover:opacity-95 text-white text-xs font-extrabold shadow-lg shadow-[#FF5A36]/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  {lang === 'bn' ? 'সম্পূর্ণ CV ডাউনলোড করুন' : 'Download Complete CV'}
                </button>
              </div>
            </div>
          </section>

          {/* SECTION SWITCHER TABS */}
          <div className="no-print flex gap-2 overflow-x-auto pb-1">
            {[
              { id: 'cv', label: lang === 'bn' ? 'CV প্রোফাইল, কোডিং চার্ট, স্কিল ও ১০ অ্যাওয়ার্ড' : 'CV Sheet, Coding Charts, Skills & 10 Awards', icon: FileText },
              { id: 'tools15', label: lang === 'bn' ? 'রিসার্চ পেপার, হ্যাকাথন ও ১৫+ ফিচার' : 'Research, Hackathons & All 15+ Features', icon: SparkleIcon },
              { id: 'edit', label: lang === 'bn' ? 'CV তথ্য এডিট করুন' : 'Edit CV Information', icon: Edit3 },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (tab.id === 'edit') setDraft(profile);
                    setActiveTab(tab.id);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold shrink-0 transition-all ${
                    active
                      ? 'bg-gradient-to-r from-[#FF5A36] to-[#EA580C] text-white shadow-lg shadow-[#FF5A36]/25'
                      : 'bg-white dark:bg-[#121620] text-slate-700 dark:text-slate-300 border border-stone-200 dark:border-slate-800 hover:border-[#FF5A36]/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* ================================================================
              TAB 1: CV SHEET, CODING TIME BAR CHART, LEARNING GRAPH, SKILLS, CERTS & 10 AWARDS
             ================================================================ */}
          {activeTab === 'cv' && (
            <div className="space-y-7 pf-slide-up">
              {/* 1. CODING TIME BAR CHART (DAY / WEEK / MONTH / 1 YEAR) + LEARNING PROGRESSION GRAPH */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Bar Chart: Daily, Weekly, Monthly & 1 Year Coding Time */}
                <div className="lg:col-span-7 bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF5A36] flex items-center gap-1.5">
                        <BarChart3 className="w-3.5 h-3.5" /> Coding Time Bar Chart
                      </span>
                      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                        {currentTimeSeries.label} · <span className="text-[#10B981]">{currentTimeSeries.totalLabel}</span>
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {currentTimeSeries.subtitle}
                      </p>
                    </div>

                    {/* Range Selector: Day / Week / Month / 1 Year */}
                    <div className="flex flex-wrap gap-1 bg-stone-100 dark:bg-slate-900 p-1 rounded-2xl border border-stone-200/70 dark:border-slate-800 self-start">
                      {[
                        { id: 'day', label: 'Day' },
                        { id: 'week', label: 'Week' },
                        { id: 'month', label: 'Month' },
                        { id: 'year', label: '1 Year' },
                      ].map((r) => (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setTimeRange(r.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                            timeRange === r.id
                              ? 'bg-gradient-to-r from-[#FF5A36] to-[#2563EB] text-white shadow'
                              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Animated Vertical Bar Chart */}
                  <div key={timeRange} className="pt-4 pb-2 px-2 rounded-2xl bg-stone-50 dark:bg-slate-900/70 border border-stone-200/70 dark:border-slate-800">
                    <div className="h-48 flex items-end justify-between gap-1.5 sm:gap-3 pt-6">
                      {currentTimeSeries.points.map((pt, idx) => {
                        const pct = Math.max(12, Math.round((pt.hours / maxTimeHours) * 100));
                        const barColors = [
                          'from-[#FF5A36] to-[#F97316]',
                          'from-[#2563EB] to-[#06B6D4]',
                          'from-[#10B981] to-[#059669]',
                          'from-violet-600 to-fuchsia-500',
                        ];
                        return (
                          <div key={pt.label} className="flex-1 flex flex-col items-center h-full justify-end group min-w-0">
                            <span className="text-[10px] font-extrabold text-slate-700 dark:text-slate-200 mb-1">
                              {pt.hours}{timeRange === 'day' || timeRange === 'week' ? 'h' : 'h'}
                            </span>
                            <div className="w-full max-w-[36px] flex-1 flex items-end">
                              <div
                                title={`${pt.label}: ${pt.hours} hrs — ${pt.focus}`}
                                className={`w-full rounded-t-xl bg-gradient-to-t ${barColors[idx % barColors.length]} pf-col-grow shadow-sm group-hover:brightness-110 transition-all`}
                                style={{ height: `${pct}%` }}
                              />
                            </div>
                            <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 dark:text-slate-400 mt-2 truncate w-full text-center">
                              {pt.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Learning Graph & Mastery Bars ("What I Learned") */}
                <div className="lg:col-span-5 bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2563EB] dark:text-blue-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" /> Learning Progression Graph
                    </span>
                    <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                      {lang === 'bn' ? 'কী কী স্কিল শিখেছি ও মাস্টারি লেভেল' : 'Learning Growth & Domain Mastery'}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Click any track to log practice & boost mastery.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {learningTracks.map((tr) => (
                      <div
                        key={tr.id}
                        onClick={() => boostTrackMastery(tr.id)}
                        className="p-3 rounded-2xl bg-stone-50 dark:bg-slate-900/70 border border-stone-200/70 dark:border-slate-800 cursor-pointer hover:border-[#2563EB]/50 transition-all"
                      >
                        <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                          <span className="text-slate-900 dark:text-white">{tr.topic}</span>
                          <span className="text-[#2563EB] dark:text-blue-300">{tr.hours} · {tr.mastery}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-stone-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${tr.color} pf-bar-fill`}
                            style={{ width: `${tr.mastery}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. CSE VISUAL ARTWORKS (IMAGES / SVG SCENES) */}
              <div>
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3.5 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#FF5A36]" />
                  {lang === 'bn' ? 'CSE ল্যাব, আর্কিটেকচার ও অ্যাচিভমেন্ট ভিজ্যুয়াল' : 'CSE Systems, Architecture & Achievement Visuals'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    <CodingSystemsSVG />
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mt-3">Algorithms & Systems Lab</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Graph search, DP, complexity analysis & clean code.</p>
                  </div>
                  <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    <HardwareCloudSVG />
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mt-3">Architecture, Linux & Cloud</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Microchips, Docker containers, Linux CLI & SQL databases.</p>
                  </div>
                  <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    <AchievementTrophySVG />
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mt-3">Hackathons & Dean’s Honors</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Inter-university hackathon podium & academic honors.</p>
                  </div>
                </div>
              </div>

              {/* 3. EDUCATION TIMELINE (CV SECTION) */}
              <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#FF5A36]" />
                  {lang === 'bn' ? 'শিক্ষাগত যোগ্যতা (Education)' : 'Education'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {educationList.map((ed, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/70 border border-stone-200/70 dark:border-slate-800">
                      <span className="text-[11px] font-extrabold text-[#2563EB] dark:text-blue-400">{ed.period}</span>
                      <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mt-0.5">{ed.degree}</h3>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">{ed.school}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">{ed.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. SKILLS & "WHAT I LEARNED" MATRIX */}
              <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[#2563EB]" />
                      {lang === 'bn' ? 'স্কিলসমূহ ও আমি কী কী শিখেছি (Skills & What I Learned)' : 'Skills & What I Learned'}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Each skill shows proficiency and what was learned through coursework & projects.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSkillCategory(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          skillCategory === cat
                            ? 'bg-gradient-to-r from-[#2563EB] to-[#FF5A36] text-white shadow'
                            : 'bg-stone-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add Skill Form */}
                <form
                  onSubmit={handleAddSkill}
                  className="no-print grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/70 border border-stone-200/80 dark:border-slate-800"
                >
                  <input
                    type="text"
                    value={newSkillName}
                    onChange={(e) => setNewSkillName(e.target.value)}
                    placeholder="New skill (e.g., Next.js, Docker)..."
                    className="lg:col-span-3 px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-700 text-xs font-semibold"
                  />
                  <select
                    value={newSkillCat}
                    onChange={(e) => setNewSkillCat(e.target.value)}
                    className="lg:col-span-2 px-2.5 py-2 rounded-xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-700 text-xs font-bold"
                  >
                    <option>Languages</option>
                    <option>Frameworks & Web</option>
                    <option>AI / Data / CS Core</option>
                    <option>DevOps & Tools</option>
                  </select>
                  <input
                    type="text"
                    value={newSkillLearned}
                    onChange={(e) => setNewSkillLearned(e.target.value)}
                    placeholder="What you learned..."
                    className="lg:col-span-4 px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-700 text-xs"
                  />
                  <div className="lg:col-span-2 flex items-center gap-1.5">
                    <input
                      type="number"
                      min="20"
                      max="100"
                      value={newSkillLevel}
                      onChange={(e) => setNewSkillLevel(e.target.value)}
                      className="w-full px-2 py-2 rounded-xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-700 text-xs font-extrabold text-center"
                    />
                    <span className="text-xs font-bold">%</span>
                  </div>
                  <button
                    type="submit"
                    className="lg:col-span-1 py-2 px-2.5 rounded-xl bg-[#10B981] hover:opacity-95 text-white text-xs font-extrabold flex items-center justify-center gap-1"
                  >
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {visibleSkills.map((sk) => (
                    <div
                      key={sk.id}
                      className="p-4 rounded-2xl bg-stone-50/90 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 hover:border-[#FF5A36]/50 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase text-[#2563EB] dark:text-blue-400">
                            {sk.category} · {sk.tag}
                          </span>
                          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mt-0.5">
                            {sk.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#FF5A36]/12 text-[#FF5A36]">
                            {sk.level}%
                          </span>
                          <button
                            type="button"
                            onClick={() => setSkills((prev) => prev.filter((item) => item.id !== sk.id))}
                            className="no-print p-1 rounded-lg text-slate-400 hover:text-rose-500 opacity-70 group-hover:opacity-100"
                            title="Delete skill"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="w-full h-2.5 bg-stone-200 dark:bg-slate-800 rounded-full overflow-hidden mt-2.5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#FF5A36] via-[#2563EB] to-[#10B981] pf-bar-fill"
                          style={{ width: `${sk.level}%` }}
                        />
                      </div>

                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 leading-snug">
                        <strong className="text-slate-700 dark:text-slate-200">Learned:</strong> {sk.learnedSummary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. SKILL CERTIFICATE UPLOAD & CREDENTIALS */}
              <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                      <Upload className="w-5 h-5 text-[#10B981]" />
                      {lang === 'bn' ? 'স্কিল সার্টিফিকেট আপলোড (Skill Certificates)' : 'Skill Certificate Upload & Credentials'}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Upload course/skill certificates (PDF/PNG/JPG) linked to your CSE skills.
                    </p>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#10B981]/15 text-[#059669] dark:text-emerald-300 w-fit">
                    {certificates.length} Certificates Attached
                  </span>
                </div>

                <form
                  onSubmit={handleUploadCert}
                  className="no-print grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/70 border border-stone-200/80 dark:border-slate-800"
                >
                  <input
                    type="text"
                    value={certTitle}
                    onChange={(e) => setCertTitle(e.target.value)}
                    placeholder="Certificate title..."
                    className="lg:col-span-3 px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-700 text-xs font-semibold"
                  />
                  <select
                    value={certSkill}
                    onChange={(e) => setCertSkill(e.target.value)}
                    className="lg:col-span-3 px-2.5 py-2 rounded-xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-700 text-xs font-bold"
                  >
                    {skills.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={certIssuer}
                    onChange={(e) => setCertIssuer(e.target.value)}
                    placeholder="Issuer / Platform..."
                    className="lg:col-span-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-700 text-xs"
                  />
                  <label className="lg:col-span-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-dashed border-[#2563EB] text-[11px] font-bold text-[#2563EB] dark:text-blue-300 flex items-center justify-center gap-1 cursor-pointer truncate">
                    <Upload className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{certFileName}</span>
                    <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={handleCertFilePick} className="hidden" />
                  </label>
                  <button
                    type="submit"
                    className="lg:col-span-2 py-2 px-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white text-xs font-extrabold"
                  >
                    Upload Cert
                  </button>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {certificates.map((c) => (
                    <div key={c.id} className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/70 border border-stone-200/70 dark:border-slate-800 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#059669] dark:text-emerald-300">
                            {c.skill}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">{c.credentialId}</span>
                        </div>
                        <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mt-2">{c.title}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">{c.issuer} · {c.date}</p>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-stone-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-[#2563EB] dark:text-blue-400">
                        <span className="truncate">📎 {c.fileName}</span>
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. 10 AWARDS & HONORS GRID */}
              <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-amber-500" />
                      {lang === 'bn' ? '১০টি অ্যাওয়ার্ড, সম্মাননা ও অর্জন (10 Awards & Honors)' : '10 Awards, Honors & Achievements'}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      All 10 academic, hackathon, competitive programming, and research recognitions.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {awardCategories.map((ac) => (
                      <button
                        key={ac}
                        type="button"
                        onClick={() => setAwardFilter(ac)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          awardFilter === ac
                            ? 'bg-amber-500 text-white shadow'
                            : 'bg-stone-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {ac}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                  {visibleAwards.map((aw, idx) => (
                    <div
                      key={aw.id}
                      className="p-4 rounded-2xl bg-gradient-to-b from-stone-50 to-white dark:from-slate-900/80 dark:to-slate-900/40 border border-stone-200/80 dark:border-slate-800 hover:border-amber-500/60 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <span className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-300 text-xs font-extrabold flex items-center justify-center">
                            #{idx + 1}
                          </span>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#FF5A36]/12 text-[#FF5A36]">
                            {aw.badge}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-xs text-slate-900 dark:text-white leading-snug">
                          {aw.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                          {aw.desc}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-stone-200/60 dark:border-slate-800 text-[10px] font-bold text-slate-500 flex items-center justify-between">
                        <span className="truncate">{aw.issuer}</span>
                        <span className="text-amber-600 dark:text-amber-400 shrink-0">{aw.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 2: RESEARCH PAPERS, HACKATHONS & ALL 15+ CSE FEATURES
             ================================================================ */}
          {activeTab === 'tools15' && (
            <div className="space-y-6 pf-slide-up">
              {/* Research Papers & Hackathons */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Research Papers */}
                <div className="lg:col-span-7 bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
                  <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#2563EB]" />
                    {lang === 'bn' ? 'রিসার্চ পেপার ও প্রকাশনা (Research Papers)' : 'Research Papers & Publications'}
                  </h2>

                  <form onSubmit={handleAddPaper} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <input
                      type="text"
                      value={newPaperTitle}
                      onChange={(e) => setNewPaperTitle(e.target.value)}
                      placeholder="Research paper title..."
                      className="sm:col-span-5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs font-semibold"
                    />
                    <input
                      type="text"
                      value={newPaperVenue}
                      onChange={(e) => setNewPaperVenue(e.target.value)}
                      placeholder="Conference / Journal / Venue..."
                      className="sm:col-span-5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs"
                    />
                    <button type="submit" className="sm:col-span-2 py-2 px-3 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold">
                      + Add
                    </button>
                  </form>

                  <div className="space-y-3">
                    {papers.map((rp) => (
                      <div key={rp.id} className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/70 border border-stone-200/70 dark:border-slate-800">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-bold text-[#2563EB] dark:text-blue-400">{rp.venue} · {rp.year}</span>
                          <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#059669] dark:text-emerald-300">
                            {rp.status}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mt-1">{rp.title}</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{rp.abstract}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hackathons & Competitive Events */}
                <div className="lg:col-span-5 bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
                  <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <Medal className="w-5 h-5 text-[#FF5A36]" />
                    {lang === 'bn' ? 'হ্যাকাথন ও প্রতিযোগিতা (Hackathons)' : 'Hackathons & Competitions'}
                  </h2>
                  <div className="space-y-3">
                    {hackathons.map((h) => (
                      <div key={h.id} className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/70 border border-stone-200/70 dark:border-slate-800">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-extrabold text-slate-900 dark:text-white">{h.event}</span>
                          <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#FF5A36]/15 text-[#FF5A36]">
                            {h.placement}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">Tech: {h.stack} · {h.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {projects.map((proj) => (
                  <div key={proj.title} className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className={`inline-block text-[11px] font-extrabold px-3 py-1 rounded-full bg-gradient-to-r ${proj.gradient} text-white mb-3`}>
                        {proj.badge}
                      </span>
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white">{proj.title}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{proj.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-stone-100 dark:border-slate-800">
                      {proj.stack.map((st) => (
                        <span key={st} className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* DSA Tracker, Repos, Labs, System Design, Dev Setup & Peer Squad */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* DSA Problem Logger */}
                <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-3">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center justify-between">
                    <span>DSA Judge Tracker</span>
                    <span className="text-[#FF5A36]">{totalSolved}+ Solved · {dsaCounts.streak}d</span>
                  </h3>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded-xl bg-[#10B981]/12 text-[#059669] dark:text-emerald-300 font-extrabold">Easy: {dsaCounts.easy}</div>
                    <div className="p-2 rounded-xl bg-[#2563EB]/12 text-[#2563EB] dark:text-blue-300 font-extrabold">Med: {dsaCounts.medium}</div>
                    <div className="p-2 rounded-xl bg-[#FF5A36]/12 text-[#FF5A36] font-extrabold">Hard: {dsaCounts.hard}</div>
                  </div>
                  <form onSubmit={handleLogProblem} className="flex gap-1.5">
                    <input
                      type="text"
                      value={newProbTitle}
                      onChange={(e) => setNewProbTitle(e.target.value)}
                      placeholder="Solved problem..."
                      className="flex-1 px-2.5 py-1.5 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs"
                    />
                    <select value={newProbDiff} onChange={(e) => setNewProbDiff(e.target.value)} className="px-2 py-1.5 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs font-bold">
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                    <button type="submit" className="px-3 py-1.5 rounded-xl bg-[#FF5A36] text-white text-xs font-extrabold">+Log</button>
                  </form>
                  <div className="space-y-1.5 pt-1">
                    {repos.map((r) => (
                      <div key={r.name} className="p-2 rounded-xl bg-stone-50 dark:bg-slate-900/70 text-[11px] flex items-center justify-between">
                        <span className="font-mono font-bold truncate">{r.name}</span>
                        <span className="text-slate-500 shrink-0">★ {r.stars} · {r.commits}c</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CSE Labs & System Design Notes */}
                <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-3">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">CSE Labs & System Design</h3>
                  <div className="space-y-2">
                    {labs.map((l) => (
                      <div key={l.title} className="p-2.5 rounded-xl bg-stone-50 dark:bg-slate-900/70 text-xs">
                        <div className="flex justify-between font-bold">
                          <span className="text-[#2563EB] dark:text-blue-400">{l.course}</span>
                          <span className="text-[#10B981]">{l.status}</span>
                        </div>
                        <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{l.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5 pt-1">
                    {sysNotes.map((sn) => (
                      <button
                        key={sn.id}
                        type="button"
                        onClick={() => setSysNotes((prev) => prev.map((x) => (x.id === sn.id ? { ...x, done: !x.done } : x)))}
                        className="w-full flex items-center gap-2 p-2 rounded-xl bg-stone-50 dark:bg-slate-900/70 text-left text-xs"
                      >
                        <span className={`w-4 h-4 rounded flex items-center justify-center ${sn.done ? 'bg-[#10B981] text-white' : 'border border-slate-400'}`}>
                          {sn.done && <Check className="w-3 h-3" />}
                        </span>
                        <span className={sn.done ? 'line-through text-slate-400' : 'font-semibold'}>{sn.topic}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dev Setup & Peer Squad */}
                <div className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Dev Setup & Peer Squad</h3>
                    <button type="button" onClick={handleCopySetup} className="px-2 py-1 rounded-lg bg-stone-100 dark:bg-slate-800 text-[10px] font-bold flex items-center gap-1">
                      {copiedSetup ? <CheckCheck className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                      {copiedSetup ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-slate-900/70 text-[11px] space-y-1">
                    <p><strong>OS:</strong> {devSetup.os}</p>
                    <p><strong>IDE:</strong> {devSetup.editor}</p>
                    <p><strong>Spec:</strong> {devSetup.hardware}</p>
                  </div>
                  <div className="space-y-2">
                    {squads.map((sq) => {
                      const joined = squadJoined.includes(sq.id);
                      return (
                        <div key={sq.id} className="p-2.5 rounded-xl bg-stone-50 dark:bg-slate-900/70 flex items-center justify-between gap-2 text-xs">
                          <span className="font-bold truncate">{sq.title} ({sq.members})</span>
                          <button
                            type="button"
                            onClick={() =>
                              setSquadJoined((prev) =>
                                prev.includes(sq.id) ? prev.filter((x) => x !== sq.id) : [...prev, sq.id]
                              )
                            }
                            className={`px-2 py-1 rounded-lg text-[10px] font-extrabold shrink-0 ${
                              joined ? 'bg-[#10B981] text-white' : 'bg-[#2563EB]/15 text-[#2563EB] dark:text-blue-300'
                            }`}
                          >
                            {joined ? 'Joined' : 'Join'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 3: EDIT CV PROFILE & AVATAR PICKER
             ================================================================ */}
          {activeTab === 'edit' && (
            <form
              onSubmit={handleSaveProfile}
              className="bg-white dark:bg-[#121620] border border-stone-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-6 pf-slide-up"
            >
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-slate-800">
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {lang === 'bn' ? 'CV প্রোফাইল তথ্য এডিট করুন' : 'Edit CSE CV Details'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Changes update your CV sheet and downloadable CV file immediately.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="px-4 py-2 rounded-xl bg-[#10B981] text-white text-xs font-extrabold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download CV
                </button>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2.5">
                  Choose Avatar Artwork
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { id: 'coral', label: 'Warm Coral Prism' },
                    { id: 'cobalt', label: 'Cobalt Systems' },
                    { id: 'emerald', label: 'Emerald Lab' },
                  ].map((av) => (
                    <button
                      key={av.id}
                      type="button"
                      onClick={() => setDraft({ ...draft, avatarVariant: av.id })}
                      className={`p-2.5 rounded-2xl border flex items-center gap-3 transition-all ${
                        draft.avatarVariant === av.id
                          ? 'border-[#FF5A36] bg-[#FF5A36]/10 ring-2 ring-[#FF5A36]/25'
                          : 'border-stone-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden">
                        <StudentAvatarSVG variant={av.id} name={draft.name} />
                      </div>
                      <span className="text-xs font-bold pr-2">{av.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={draft.name}
                    onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">CV Headline</label>
                  <input
                    type="text"
                    value={draft.roleHeadline}
                    onChange={(e) => setDraft({ ...draft, roleHeadline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Student ID</label>
                  <input
                    type="text"
                    value={draft.studentId}
                    onChange={(e) => setDraft({ ...draft, studentId: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">GitHub URL</label>
                  <input
                    type="text"
                    value={draft.github}
                    onChange={(e) => setDraft({ ...draft, github: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={draft.linkedin}
                    onChange={(e) => setDraft({ ...draft, linkedin: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Portfolio URL</label>
                  <input
                    type="text"
                    value={draft.portfolio}
                    onChange={(e) => setDraft({ ...draft, portfolio: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">CV Summary / Bio</label>
                <textarea
                  rows={3}
                  value={draft.bio}
                  onChange={(e) => setDraft({ ...draft, bio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-900 text-xs leading-relaxed"
                />
              </div>

              <div className="flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveTab('cv')}
                  className="px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-800 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5A36] to-[#EA580C] text-white text-xs font-extrabold shadow-lg flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" /> Save CV Updates
                </button>
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}