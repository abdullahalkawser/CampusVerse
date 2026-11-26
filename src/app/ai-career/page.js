'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Layers,
  ArrowRight,
  ArrowLeft,
  Home,
  Dna,
  Repeat,
  LayoutTemplate,
  Mic,
  Rocket,
  Cpu,
  Bot,
  Target,
  Users,
  Video,
  MessageSquare,
  Wand2,
Gift,
  FileText,
  Link as LinkIcon,
  Award,
  BookOpen,
  FolderKanban,
  CheckSquare,
  Menu,
  X,
  Check
} from 'lucide-react';

/**
 * Static data definitions for CareerDNA paths, SkillSwap peers, and Module feature lists
 */
const CAREER_PATHS = {
  aiml: {
    label: '🤖 AI / ML',
    title: 'AI / Machine Learning Engineer',
    match: '94% Match',
    demand: 'High Demand (+42% YoY)',
    salary: '৳65,000 – ৳1,80,000/mo',
    gaps: [
      { skill: 'Python & NumPy/Pandas', level: 85, status: 'Strong' },
      { skill: 'PyTorch / Deep Learning', level: 45, status: 'Skill Gap Identified' },
      { skill: 'LLM Fine-Tuning & RAG', level: 30, status: 'Priority Gap' }
    ],
    roadmap: [
      'Step 1 (Beginner): Python, Linear Algebra & Statistics',
      'Step 2 (Intermediate): Scikit-Learn, Supervised & Unsupervised ML',
      'Step 3 (Advanced): Neural Networks, PyTorch & Transformers',
      'Step 4 (Professional): Deploy End-to-End AI Apps & MLOps'
    ]
  },
  swe: {
    label: '💻 Software Eng.',
    title: 'Software Engineer (Backend & Systems)',
    match: '91% Match',
    demand: 'Very High Demand (+35% YoY)',
    salary: '৳55,000 – ৳1,60,000/mo',
    gaps: [
      { skill: 'C++ / Java & DSA', level: 80, status: 'Strong' },
      { skill: 'System Design & Microservices', level: 40, status: 'Skill Gap Identified' },
      { skill: 'Docker & Kubernetes', level: 35, status: 'Priority Gap' }
    ],
    roadmap: [
      'Step 1 (Beginner): C++/Java, OOP & Data Structures',
      'Step 2 (Intermediate): Algorithms, DBMS, SQL & REST APIs',
      'Step 3 (Advanced): Caching (Redis), Message Queues & Docker',
      'Step 4 (Professional): High-Scale Distributed System Design'
    ]
  },
  web: {
    label: '🌐 Web Dev',
    title: 'Full-Stack Web Developer',
    match: '96% Match',
    demand: 'Consistent High Demand (+30% YoY)',
    salary: '৳45,000 – ৳1,40,000/mo',
    gaps: [
      { skill: 'HTML, Tailwind CSS & JavaScript', level: 90, status: 'Strong' },
      { skill: 'Next.js & TypeScript', level: 55, status: 'Moderate Gap' },
      { skill: 'Cloud Deployment (AWS/Vercel)', level: 40, status: 'Skill Gap Identified' }
    ],
    roadmap: [
      'Step 1 (Beginner): Semantic HTML, CSS, Tailwind & Modern JS',
      'Step 2 (Intermediate): React, Next.js & TypeScript',
      'Step 3 (Advanced): Node.js, PostgreSQL/MongoDB & Auth',
      'Step 4 (Professional): Full-Stack SaaS Architecture & CI/CD'
    ]
  },
  cyber: {
    label: '🛡️ Cybersecurity',
    title: 'Cybersecurity & Ethical Hacker',
    match: '88% Match',
    demand: 'Explosive Demand (+48% YoY)',
    salary: '৳60,000 – ৳1,75,000/mo',
    gaps: [
      { skill: 'Linux & Computer Networking', level: 75, status: 'Strong' },
      { skill: 'Web App Pentesting (OWASP)', level: 40, status: 'Skill Gap Identified' },
      { skill: 'SOC & Threat Intelligence', level: 25, status: 'Priority Gap' }
    ],
    roadmap: [
      'Step 1 (Beginner): Networking (TCP/IP), Linux & Bash Scripting',
      'Step 2 (Intermediate): Cryptography, Wireshark & Burp Suite',
      'Step 3 (Advanced): Penetration Testing & Bug Bounty Hunting',
      'Step 4 (Professional): Security Operations (SOC) & Incident Response'
    ]
  }
};

const SKILL_PARTNERS = [
  {
    name: 'Nusrat Jahan',
    uni: 'CSE, BUET',
    teaches: 'English',
    wants: 'C++',
    rating: '4.9',
    reviews: 28,
    bio: 'IELTS 8.0 scorer. Will help you speak fluent English in exchange for C++ STL!'
  },
  {
    name: 'Rafiqul Hasan',
    uni: 'SWE, DU',
    teaches: 'React',
    wants: 'Python',
    rating: '4.8',
    reviews: 19,
    bio: 'Frontend developer. Looking to learn Python automation & scripting.'
  },
  {
    name: 'Maliha Tasnim',
    uni: 'CSE, NSU',
    teaches: 'Public Speaking',
    wants: 'UI/UX Design',
    rating: '5.0',
    reviews: 34,
    bio: 'National debate champion. Want to learn Figma prototyping!'
  }
];

/**
 * Reusable Top & Bottom Back-to-Home Bar for Sub-Pages
 */
function BackToHomeButton({ onBack, gradient = 'from-indigo-600 to-cyan-600', variant = 'top' }) {
  if (variant === 'top') {
    return (
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all shadow-md active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>
    );
  }
  return (
    <div className="pt-6 flex justify-center">
      <button
        onClick={onBack}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r ${gradient} hover:opacity-95 text-white font-extrabold text-sm shadow-lg transition-all active:scale-95`}
      >
        <Home className="w-4 h-4" /> ← Back to Home Dashboard
      </button>
    </div>
  );
}

/**
 * Main Next.js / React Application Component
 */
export default function App() {
  // Active View State ('home' | 'careerdna' | 'skillswap' | 'portfoliox' | 'interviewx' | 'projecthub')
  const [activeView, setActiveView] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // 06 · CareerDNA States
  const [selectedCareer, setSelectedCareer] = useState('aiml');
  const [advisorInput, setAdvisorInput] = useState('');
  const [advisorMessages, setAdvisorMessages] = useState([
    {
      sender: 'ai',
      text: 'হাই! আমি তোমার AI Career Advisor। তুমি কোন ক্যারিয়ার পাথ বা স্কিল নিয়ে জানতে চাও?'
    }
  ]);
  const [careerGoals, setCareerGoals] = useState([
    { text: 'Complete Data Structures & 50 LeetCode Problems', done: true },
    { text: 'Build 2 Full-Stack AI Projects for Portfolio', done: true },
    { text: 'Score 85+ in InterviewX Mock Technical Round', done: false },
    { text: 'Collaborate on 1 Real-World Team Project in ProjectHub', done: false }
  ]);

  // 07 · SkillSwap States
  const [swapTeach, setSwapTeach] = useState('all');
  const [swapLearn, setSwapLearn] = useState('all');
  const [communityInput, setCommunityInput] = useState('');
  const [communityThread, setCommunityThread] = useState([
    {
      author: 'Tanvir Ahmed',
      time: '10 mins ago',
      color: 'text-emerald-300',
      text: 'কেউ কি আমাকে IELTS Speaking-এ হেল্প করতে পারবে? বিনিময়ে আমি Python ও Django শেখাব!'
    },
    {
      author: 'Sadia Islam',
      time: '4 mins ago',
      color: 'text-cyan-300',
      text: 'আমি রাজি! প্রতিদিন রাত ৯টায় ৩০ মিনিট করে প্র্যাকটিস করতে পারি।'
    }
  ]);

  // 08 · PortfolioX States
  const [pxName, setPxName] = useState('Arafat Rahman');
  const [pxRole, setPxRole] = useState('Full-Stack Developer & AI Enthusiast');
  const [pxTemplate, setPxTemplate] = useState('modern');
  const [pxShowReview, setPxShowReview] = useState(false);

  // 09 · InterviewX States
  const [ixTrack, setIxTrack] = useState('tech');
  const [ixRecording, setIxRecording] = useState(false);
  const [ixAnswer, setIxAnswer] = useState('');
  const [ixScore, setIxScore] = useState(86);
  const [ixEvalFeedback, setIxEvalFeedback] = useState({
    quality: 'Clear explanation of function overloading vs virtual functions. Good technical depth!',
    comm: 'Confident English structure. Tip: Slow down slightly when giving code examples.'
  });

  // 10 · ProjectHub States
  const [phProposalTitle, setPhProposalTitle] = useState('');
  const [phTasks, setPhTasks] = useState([
    { title: 'Setup GitHub Repo & Database Schema (Assigned: Arafat)', done: true },
    { title: 'Build Responsive Dashboard & API Integration (Assigned: Nusrat)', done: true },
    { title: 'Implement AI Model Inference & Mentor Review Fixes (Assigned: Tanvir)', done: false }
  ]);

  // Helper: Trigger non-blocking Toast notification
  const triggerToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // Helper: Switch pages smoothly and scroll to top
  const navigateTo = (view) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // CareerDNA Handlers
  const handleAskAdvisor = (questionText) => {
    const q = questionText.trim();
    if (!q) return;
    let reply =
      'তোমার আগ্রহের উপর ভিত্তি করে প্রতিদিন ২ ঘণ্টা প্রজেক্ট-বেসড লার্নিং এবং গিটহাবে কোড পুশ করার পরামর্শ দিচ্ছি!';
    if (q.includes('AI/ML')) {
      reply =
        'AI/ML শুরু করতে প্রথমে Python, NumPy, Pandas এবং বেসিক Statistics শেখো। এরপর Scikit-Learn দিয়ে ছোট প্রেডিকশন মডেল তৈরি করো!';
    } else if (q.includes('demand')) {
      reply =
        'বর্তমানে AI Engineering, Full-Stack TypeScript, Cloud DevOps এবং Cybersecurity স্কিলের জব মার্কেট ডিমান্ড সবচেয়ে বেশি (+40% গ্রোথ)।';
    }
    setAdvisorMessages((prev) => [
      ...prev,
      { sender: 'user', text: q },
      { sender: 'ai', text: reply }
    ]);
    setAdvisorInput('');
  };

  const toggleCareerGoal = (index) => {
    setCareerGoals((prev) =>
      prev.map((g, i) => (i === index ? { ...g, done: !g.done } : g))
    );
  };

  // SkillSwap Filtered Partners
  const filteredPartners = SKILL_PARTNERS.filter((p) => {
    const matchTeach = swapTeach === 'all' || p.wants === swapTeach;
    const matchLearn = swapLearn === 'all' || p.teaches === swapLearn;
    return matchTeach && matchLearn;
  });

  const handleCommunityPost = (e) => {
    e.preventDefault();
    if (!communityInput.trim()) return;
    setCommunityThread((prev) => [
      ...prev,
      {
        author: 'You',
        time: 'Just now',
        color: 'text-amber-300',
        text: communityInput.trim()
      }
    ]);
    setCommunityInput('');
    triggerToast('Reply posted to SkillSwap Community!');
  };

  // PortfolioX Template Styling Map
  const portfolioTemplateStyles = {
    modern: 'from-indigo-900/75 via-slate-900 to-purple-900/75 border-white/20',
    minimal: 'from-slate-900 via-slate-900 to-zinc-900 border-slate-400/30',
    developer: 'from-emerald-950 via-slate-950 to-teal-950 border-emerald-400/35',
    creative: 'from-fuchsia-950 via-rose-950/85 to-amber-950/75 border-pink-400/35'
  };

  const livePortfolioSlug = (pxName || 'your-name')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
  const livePortfolioUrl = `https://campusverse.io/p/${livePortfolioSlug}`;

  const handleCopyUrl = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(livePortfolioUrl).catch(() => {});
    }
    triggerToast(`Copied Live Portfolio URL: ${livePortfolioUrl}`);
  };

  // InterviewX Handlers
  const fillSampleAnswer = () => {
    if (ixTrack === 'tech') {
      setIxAnswer(
        'Compile-time polymorphism happens during compilation via function or operator overloading, whereas run-time polymorphism uses virtual functions and inheritance so the method call is resolved dynamically at runtime.'
      );
    } else {
      setIxAnswer(
        'I combine strong problem-solving fundamentals with hands-on team project delivery. Under tight deadlines, I break tasks into prioritized milestones and communicate clearly with my team.'
      );
    }
  };

  const handleToggleMic = () => {
    if (!ixRecording) {
      setIxRecording(true);
      triggerToast('Microphone active! Speak your interview answer.');
    } else {
      setIxRecording(false);
      fillSampleAnswer();
      triggerToast('Voice captured and transcribed!');
    }
  };

  const handleEvaluateInterview = () => {
    if (!ixAnswer.trim()) {
      triggerToast('Please type or record an answer first!');
      return;
    }
    const calculatedScore = Math.min(
      98,
      Math.max(78, 72 + Math.floor(ixAnswer.trim().length / 8))
    );
    setIxScore(calculatedScore);
    setIxEvalFeedback({
      quality: `Well-structured response addressing core concepts accurately (${
        ixAnswer.trim().split(/\s+/).length
      } words analyzed).`,
      comm: 'Professional tone and clear English grammar. Ready for real interviews!'
    });
    triggerToast(`AI Evaluation Complete! Score: ${calculatedScore}/100`);
  };

  // ProjectHub Progress Calculation
  const phCompletedCount = phTasks.filter((t) => t.done).length;
  const phProgressPercent = Math.round((phCompletedCount / phTasks.length) * 100);

  const toggleProjectTask = (index) => {
    setPhTasks((prev) =>
      prev.map((t, i) => (i === index ? { ...t, done: !t.done } : t))
    );
  };

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    if (!phProposalTitle.trim()) return;
    triggerToast(`Proposal "${phProposalTitle.trim()}" published to Project Marketplace!`);
    setPhProposalTitle('');
  };

  const currentCareer = CAREER_PATHS[selectedCareer];
  const completedGoalsCount = careerGoals.filter((g) => g.done).length;

  return (
    <div className="min-h-screen bg-[#070913] text-slate-50 relative overflow-x-hidden font-sans selection:bg-indigo-500 selection:text-white">
      {/* Custom Keyframe Animations & Glassmorphism Utility Styles */}
      <style>{`
        @keyframes blobFloat {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(24px, -30px) scale(1.07); }
          66% { transform: translate(-18px, 18px) scale(0.95); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes soundWave {
          0% { height: 6px; }
          100% { height: 26px; }
        }
        .animate-blob { animation: blobFloat 9s infinite ease-in-out; }
        .animate-fade-in-up { animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .glass-panel {
          background: rgba(17, 24, 39, 0.72);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 12px 38px -8px rgba(0, 0, 0, 0.55);
        }
        .glass-card-hover {
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .glass-card-hover:hover {
          transform: translateY(-6px) scale(1.01);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 22px 48px -10px rgba(99, 102, 241, 0.28);
        }
        .wave-bar { animation: soundWave 0.75s ease-in-out infinite alternate; }
      `}</style>

      {/* Ambient Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/25 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute top-1/3 -right-24 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-24 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Floating Toast Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto px-4 py-3 rounded-2xl bg-slate-900/95 border border-indigo-400/40 text-white text-xs font-bold shadow-2xl flex items-center gap-2.5 animate-fade-in-up"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070913]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-indigo-400 block leading-none">
                  CampusVerse
                </span>
                <span className="text-base sm:text-lg font-extrabold bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent">
                  Career & Skill Hub
                </span>
              </div>
            </button>

            {/* Desktop Nav Pills */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10">
              {[
                { id: 'home', label: 'Home' },
                { id: 'careerdna', label: '06 · CareerDNA' },
                { id: 'skillswap', label: '07 · SkillSwap' },
                { id: 'portfoliox', label: '08 · PortfolioX' },
                { id: 'interviewx', label: '09 · InterviewX' },
                { id: 'projecthub', label: '10 · ProjectHub' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs transition-all ${
                    activeView === item.id
                      ? 'font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow'
                      : 'font-semibold text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0b0f1e]/95 px-4 py-3 space-y-1.5">
            {[
              { id: 'home', label: '🏠 Home Dashboard' },
              { id: 'careerdna', label: '🧬 06 · CareerDNA' },
              { id: 'skillswap', label: '🤝 07 · SkillSwap' },
              { id: 'portfoliox', label: '🎨 08 · PortfolioX' },
              { id: 'interviewx', label: '🎙️ 09 · InterviewX' },
              { id: 'projecthub', label: '🚀 10 · ProjectHub' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  activeView === item.id
                    ? 'bg-indigo-500/25 text-indigo-200 border border-indigo-400/30 font-bold'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* ========================================================= */}
        {/* VIEW 0: HOME DASHBOARD                                    */}
        {/* ========================================================= */}
        {activeView === 'home' && (
          <section className="animate-fade-in-up space-y-12">
            {/* Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-white/15">
              <div className="absolute -right-16 -top-16 w-72 h-72 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    BUILD YOUR FUTURE · CAMPUSVERSE
                  </div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent">
                      AI Career & Skill
                    </span>
                    <span className="block bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                      Development
                    </span>
                  </h1>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    তোমার ক্যারিয়ার প্ল্যানিং, পিয়ার-টু-পিয়ার স্কিল এক্সচেঞ্জ, নো-কোড পোর্টফোলিও, এআই মক ইন্টারভিউ এবং রিয়েল-ওয়ার্ল্ড টিম প্রজেক্ট—সবকিছু এক প্ল্যাটফর্মে! যেকোনো মডিউলে ক্লিক করে বিস্তারিত এক্সপ্লোর করো।
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="px-4 py-2 rounded-2xl bg-white/10 border border-white/15 text-sm font-bold text-cyan-300 flex items-center gap-2">
                      <Layers className="w-4 h-4" /> 5 Modules Included
                    </span>
                    <button
                      onClick={() => navigateTo('careerdna')}
                      className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2"
                    >
                      Start with 06 · CareerDNA <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Mini Ecosystem Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-96 shrink-0">
                  <div className="p-4 rounded-2xl bg-indigo-500/15 border border-indigo-400/25">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                      AI Career Paths
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">12+</div>
                    <div className="text-xs text-slate-400 mt-1">AI/ML, SWE, Web, Cyber</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/25">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Active Swappers
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">1,480+</div>
                    <div className="text-xs text-slate-400 mt-1">Peer Skill Sessions</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-400/25">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Live Portfolios
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">4 Themes</div>
                    <div className="text-xs text-slate-400 mt-1">Zero Coding Needed</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-rose-500/15 border border-rose-400/25">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-300">
                      AI Mock Drills
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">500+ Qs</div>
                    <div className="text-xs text-slate-400 mt-1">Tech + HR Voice Eval</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Heading */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Interactive Ecosystem
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Explore All 5 Career & Skill Modules
                </h2>
              </div>
              <p className="text-sm text-slate-400">
                Click any module card below to open its full interactive workspace
              </p>
            </div>

            {/* 5 Colorful Module Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 06 · CareerDNA */}
              <div
                onClick={() => navigateTo('careerdna')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigateTo('careerdna')}
                className="cursor-pointer group relative rounded-3xl glass-panel glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-indigo-500 flex flex-col justify-between"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/35 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold tracking-wider">
                      06 · CareerDNA
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:rotate-6 transition-transform">
                      <Dna className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                    06 · CareerDNA
                  </h3>
                  <p className="text-indigo-200 font-semibold text-sm mt-1">
                    Discover your career path with AI.
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    নিজের interest ও skill অনুযায়ী career analysis, Skill Gap Analysis, Personalized Roadmap ও AI Career Advisor।
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {['AI Assessment', 'Skill Gap', 'Roadmap', '7 Features'].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-indigo-400 group-hover:text-cyan-300">
                  <span>Open CareerDNA Page</span>
                  <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* 07 · SkillSwap */}
              <div
                onClick={() => navigateTo('skillswap')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigateTo('skillswap')}
                className="cursor-pointer group relative rounded-3xl glass-panel glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-emerald-500 flex flex-col justify-between"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/35 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold tracking-wider">
                      07 · SkillSwap
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:rotate-6 transition-transform">
                      <Repeat className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    07 · SkillSwap
                  </h3>
                  <p className="text-emerald-200 font-semibold text-sm mt-1">
                    Learn and exchange skills.
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    একজন শিক্ষার্থী অন্য শিক্ষার্থীকে skill শেখাবে—আমি C++ শেখাব, তুমি আমাকে English শেখাবে। Live sessions ও reviews।
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {['Skill Exchange', 'Partner Finder', '7 Features'].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-emerald-400 group-hover:text-teal-300">
                  <span>Open SkillSwap Page</span>
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* 08 · PortfolioX */}
              <div
                onClick={() => navigateTo('portfoliox')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigateTo('portfoliox')}
                className="cursor-pointer group relative rounded-3xl glass-panel glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-amber-500 flex flex-col justify-between"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/35 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-extrabold tracking-wider">
                      08 · PortfolioX
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:rotate-6 transition-transform">
                      <LayoutTemplate className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    08 · PortfolioX
                  </h3>
                  <p className="text-amber-200 font-semibold text-sm mt-1">
                    Build your professional identity.
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    কোনো coding ছাড়াই Professional Portfolio তৈরি—AI Generator, 4 Templates, GitHub Integration ও AI Portfolio Review।
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {['No-Code AI', '4 Templates', '7 Features'].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-amber-400 group-hover:text-orange-300">
                  <span>Open PortfolioX Page</span>
                  <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* 09 · InterviewX */}
              <div
                onClick={() => navigateTo('interviewx')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigateTo('interviewx')}
                className="cursor-pointer group relative rounded-3xl glass-panel glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-rose-500 flex flex-col justify-between"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-rose-500/20 rounded-full blur-2xl group-hover:bg-rose-500/35 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-xl bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-extrabold tracking-wider">
                      09 · InterviewX
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-rose-500/30 group-hover:rotate-6 transition-transform">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-rose-300 transition-colors">
                    09 · InterviewX
                  </h3>
                  <p className="text-rose-200 font-semibold text-sm mt-1">
                    Practice interviews with AI.
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    Real Interview-এর আগে AI-এর সঙ্গে Practice—Technical (C++, DSA, OOP, SQL), HR, Voice Interview ও Score Analysis।
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {['AI Mock', 'Voice Eval', '8 Features'].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-rose-400 group-hover:text-pink-300">
                  <span>Open InterviewX Page</span>
                  <span className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* 10 · ProjectHub */}
              <div
                onClick={() => navigateTo('projecthub')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigateTo('projecthub')}
                className="cursor-pointer group relative rounded-3xl glass-panel glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-sky-500 md:col-span-2 lg:col-span-2 flex flex-col justify-between"
              >
                <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-sky-500/20 rounded-full blur-2xl group-hover:bg-sky-500/35 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-extrabold tracking-wider">
                      10 · ProjectHub
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:rotate-6 transition-transform">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-sky-300 transition-colors">
                    10 · ProjectHub
                  </h3>
                  <p className="text-sky-200 font-semibold text-sm mt-1">
                    Collaborate, build real-world projects and showcase your work.
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-2xl">
                    Team তৈরি করে Real-world Project Development—Project Marketplace, 2–5 জনের Team Formation, Find Teammates, Task Management, GitHub Integration ও Mentor Feedback।
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {[
                      'Marketplace',
                      '2–5 Team Formation',
                      'Task Board',
                      'Mentor Feedback',
                      '9 Features'
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-sky-400 group-hover:text-cyan-300">
                  <span>Open ProjectHub Page</span>
                  <span className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* VIEW 1: 06 · CareerDNA                                    */}
        {/* ========================================================= */}
        {activeView === 'careerdna' && (
          <section className="animate-fade-in-up space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackToHomeButton onBack={() => navigateTo('home')} variant="top" />
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
                Module 06 of 10 · AI Career Intelligence
              </span>
            </div>

            {/* Module Header */}
            <div className="rounded-3xl glass-panel p-6 sm:p-10 border-l-4 border-l-indigo-500 bg-gradient-to-br from-indigo-950/60 via-slate-900/70 to-cyan-950/40">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-indigo-400 font-extrabold text-sm uppercase tracking-widest">
                    <Dna className="w-5 h-5" /> 06 · CareerDNA
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Discover your career path with AI.
                  </h1>
                  <p className="text-slate-300 text-base max-w-2xl">
                    তোমার বর্তমান স্কিল, আগ্রহ ও জব মার্কেট ডিমান্ড বিশ্লেষণ করে AI তৈরি করবে তোমার পারফেক্ট ক্যারিয়ার রোডম্যাপ।
                  </p>
                </div>
                <div className="px-5 py-4 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 text-center shrink-0">
                  <div className="text-xs text-indigo-300 font-bold uppercase">AI Match Engine</div>
                  <div className="text-2xl font-extrabold text-white mt-0.5">98.4% Accuracy</div>
                </div>
              </div>
            </div>

            {/* Interactive Assessment + Advisor + Goal Tracker */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 rounded-3xl glass-panel p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-400" /> Interactive AI Career Assessment & Path Finder
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    নিজের interest ও skill সিলেক্ট করে live career analysis দেখো
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Choose Target Career Path:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {Object.entries(CAREER_PATHS).map(([key, item]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCareer(key)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-bold transition ${
                          selectedCareer === key
                            ? 'bg-indigo-600 text-white border border-indigo-400 shadow'
                            : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Career Output */}
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-indigo-500/30 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <h3 className="text-lg font-extrabold text-white">{currentCareer.title}</h3>
                      <div className="text-xs text-cyan-300 font-semibold mt-0.5">
                        Job Market Insights: {currentCareer.demand} · Avg: {currentCareer.salary}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold">
                      {currentCareer.match}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-300">
                      Skill Gap Analysis (কোন skill কম আছে তা identify করা)
                    </div>
                    {currentCareer.gaps.map((g) => (
                      <div key={g.skill}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-200 font-semibold">{g.skill}</span>
                          <span
                            className={
                              g.level < 60
                                ? 'text-rose-400 font-bold'
                                : 'text-emerald-400 font-bold'
                            }
                          >
                            {g.level}% ({g.status})
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              g.level < 60
                                ? 'bg-gradient-to-r from-rose-500 to-amber-400'
                                : 'bg-gradient-to-r from-emerald-500 to-cyan-400'
                            }`}
                            style={{ width: `${g.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                      Personalized Roadmap (Beginner → Professional)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentCareer.roadmap.map((step) => (
                        <div
                          key={step}
                          className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200"
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: AI Advisor + Goal Tracker */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl glass-panel p-6 space-y-4">
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <Bot className="w-5 h-5 text-cyan-400" /> AI Career Advisor
                  </h3>
                  <p className="text-xs text-slate-400">
                    Career-related যেকোনো প্রশ্ন করো বা নিচের প্রশ্নগুলোতে ক্লিক করো:
                  </p>
                  <div className="h-44 overflow-y-auto p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 space-y-2.5 text-xs">
                    {advisorMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-xl ${
                          msg.sender === 'ai'
                            ? 'bg-indigo-500/20 border border-indigo-400/20 text-indigo-100'
                            : 'bg-white/10 text-white text-right'
                        }`}
                      >
                        <strong>{msg.sender === 'ai' ? 'CareerDNA AI: ' : 'You: '}</strong>
                        {msg.text}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => handleAskAdvisor('AI/ML শুরু করতে কী কী শিখব?')}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 hover:bg-cyan-500/25"
                    >
                      AI/ML শুরু করব কীভাবে?
                    </button>
                    <button
                      onClick={() => handleAskAdvisor('২০২৬ সালে কোন স্কিলের চাহিদা বেশি?')}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/25 hover:bg-purple-500/25"
                    >
                      কোন স্কিলের demand বেশি?
                    </button>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleAskAdvisor(advisorInput);
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={advisorInput}
                      onChange={(e) => setAdvisorInput(e.target.value)}
                      placeholder="তোমার প্রশ্ন লিখো..."
                      className="flex-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold"
                    >
                      Ask AI
                    </button>
                  </form>
                </div>

                {/* Career Goal Tracker */}
                <div className="rounded-3xl glass-panel p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-emerald-400" /> Career Goal Tracker
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300">
                      {completedGoalsCount}/{careerGoals.length} Done
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    নিজের career goals track করো (ক্লিক করে চেক/আনচেক করো):
                  </p>
                  <div className="space-y-2 text-sm">
                    {careerGoals.map((g, idx) => (
                      <button
                        key={g.text}
                        onClick={() => toggleCareerGoal(idx)}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-2.5 text-xs ${
                          g.done
                            ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200 line-through'
                            : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            g.done
                              ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold'
                              : 'border-slate-500'
                          }`}
                        >
                          {g.done && <Check className="w-3 h-3" />}
                        </span>
                        <span>{g.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* All 7 Features Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">All Features in 06 · CareerDNA</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: '1. AI Career Assessment',
                    desc: 'নিজের interest ও skill অনুযায়ী career analysis।',
                    border: 'border-l-indigo-500'
                  },
                  {
                    title: '2. Career Path Finder',
                    desc: 'AI/ML, Software Engineering, Web Development, Cybersecurity ইত্যাদি career path।',
                    border: 'border-l-cyan-500'
                  },
                  {
                    title: '3. Skill Gap Analysis',
                    desc: 'কোন skill কম আছে তা identify করা।',
                    border: 'border-l-rose-500'
                  },
                  {
                    title: '4. Personalized Roadmap',
                    desc: 'Beginner থেকে Professional হওয়ার step-by-step roadmap।',
                    border: 'border-l-purple-500'
                  },
                  {
                    title: '5. Career Goal Tracker',
                    desc: 'নিজের career goals track করা।',
                    border: 'border-l-emerald-500'
                  },
                  {
                    title: '6. Job Market Insights',
                    desc: 'কোন skill-এর demand বেশি তা দেখা।',
                    border: 'border-l-amber-500'
                  },
                  {
                    title: '7. AI Career Advisor',
                    desc: 'Career-related প্রশ্নের তাৎক্ষণিক উত্তর ও মেন্টরশিপ গাইডলাইন।',
                    border: 'border-l-fuchsia-500 sm:col-span-2 lg:col-span-3'
                  }
                ].map((f) => (
                  <div key={f.title} className={`p-5 rounded-2xl glass-panel border-l-4 ${f.border}`}>
                    <h4 className="font-bold text-white">{f.title}</h4>
                    <p className="text-sm text-slate-300 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <BackToHomeButton
              onBack={() => navigateTo('home')}
              gradient="from-indigo-600 to-cyan-600"
              variant="bottom"
            />
          </section>
        )}

        {/* ========================================================= */}
        {/* VIEW 2: 07 · SkillSwap                                    */}
        {/* ========================================================= */}
        {activeView === 'skillswap' && (
          <section className="animate-fade-in-up space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackToHomeButton onBack={() => navigateTo('home')} variant="top" />
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
                Module 07 of 10 · Peer-to-Peer Learning
              </span>
            </div>

            <div className="rounded-3xl glass-panel p-6 sm:p-10 border-l-4 border-l-emerald-500 bg-gradient-to-br from-emerald-950/60 via-slate-900/70 to-teal-950/40">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-emerald-400 font-extrabold text-sm uppercase tracking-widest">
                    <Repeat className="w-5 h-5" /> 07 · SkillSwap
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Learn and exchange skills.
                  </h1>
                  <p className="text-slate-300 text-base max-w-2xl">
                    একজন শিক্ষার্থী অন্য শিক্ষার্থীকে skill শেখাবে —{' '}
                    <span className="text-emerald-300 font-bold">
                      &quot;আমি C++ শেখাব, তুমি আমাকে English শেখাবে।&quot;
                    </span>{' '}
                    কোনো টাকা ছাড়াই একে অপরের সাথে স্কিল এক্সচেঞ্জ করো!
                  </p>
                </div>
                <div className="px-5 py-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-center shrink-0">
                  <div className="text-xs text-emerald-300 font-bold uppercase">Learning Progress</div>
                  <div className="text-2xl font-extrabold text-white mt-0.5">18.5 Hours Swapped</div>
                </div>
              </div>
            </div>

            {/* Partner Matchmaker */}
            <div className="rounded-3xl glass-panel p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-400" /> Find a Learning Partner (Skill Exchange Matchmaker)
                  </h2>
                  <p className="text-xs text-slate-400">
                    তুমি কী শেখাতে পারো এবং কী শিখতে চাও তা সিলেক্ট করো
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <select
                    value={swapTeach}
                    onChange={(e) => setSwapTeach(e.target.value)}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs font-bold text-emerald-300 focus:outline-none"
                  >
                    <option value="all">I Can Teach: Any Skill</option>
                    <option value="C++">I Can Teach: C++</option>
                    <option value="Python">I Can Teach: Python</option>
                    <option value="UI/UX Design">I Can Teach: UI/UX Design</option>
                  </select>
                  <select
                    value={swapLearn}
                    onChange={(e) => setSwapLearn(e.target.value)}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 border border-teal-500/40 text-xs font-bold text-teal-300 focus:outline-none"
                  >
                    <option value="all">I Want to Learn: Any Skill</option>
                    <option value="English">I Want to Learn: English</option>
                    <option value="React">I Want to Learn: React</option>
                    <option value="Public Speaking">I Want to Learn: Public Speaking</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {filteredPartners.length === 0 ? (
                  <div className="col-span-3 p-6 rounded-2xl bg-white/5 text-center text-sm text-slate-300">
                    No exact match for this filter combination—try selecting &quot;Any Skill&quot;!
                  </div>
                ) : (
                  filteredPartners.map((p) => (
                    <div
                      key={p.name}
                      className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/25 flex flex-col justify-between space-y-4"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-white">{p.name}</span>
                          <span className="text-xs font-bold text-amber-300">
                            ⭐ {p.rating} ({p.reviews})
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400">{p.uni}</div>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          <span className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold">
                            Teaches: {p.teaches}
                          </span>
                          <span className="text-[11px] px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold">
                            Wants: {p.wants}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-3 leading-relaxed">{p.bio}</p>
                      </div>
                      <button
                        onClick={() => triggerToast(`SkillSwap request sent to ${p.name}!`)}
                        className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition"
                      >
                        Request Skill Exchange
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Live Sessions & Community Discussion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-3xl glass-panel p-6 space-y-5">
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <Video className="w-5 h-5 text-rose-400" /> Live Learning Sessions & Progress
                </h3>
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-400/30 flex items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" /> LIVE ROOM
                    </span>
                    <h4 className="font-bold text-white mt-1.5">
                      C++ STL ↔ Spoken English Practice
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      With Nusrat Jahan (CSE, BUET) · 45 mins session
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      triggerToast('Joined Live SkillSwap Room! Audio & Whiteboard connected.')
                    }
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shrink-0"
                  >
                    Join Room
                  </button>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Learning Progress Tracker
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-emerald-300">Spoken English (Learned from Nusrat)</span>
                      <span className="text-white">75%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                        style={{ width: '75%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-cyan-300">
                        C++ & Problem Solving (Taught to Peers)
                      </span>
                      <span className="text-white">90% · ⭐ 4.9 Rating</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-full"
                        style={{ width: '90%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Discussion */}
              <div className="rounded-3xl glass-panel p-6 space-y-4">
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-teal-400" /> Community Discussion (প্রশ্ন, উত্তর ও আলোচনা)
                </h3>
                <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                  {communityThread.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs"
                    >
                      <div className={`font-bold ${item.color}`}>
                        {item.author} · {item.time}
                      </div>
                      <p className="text-slate-200 mt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleCommunityPost} className="flex gap-2">
                  <input
                    type="text"
                    value={communityInput}
                    onChange={(e) => setCommunityInput(e.target.value)}
                    placeholder="আলোচনায় তোমার মতামত বা অফার লিখো..."
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>

            {/* All 7 Features Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">All Features in 07 · SkillSwap</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: '1. Skill Exchange',
                    desc: 'আমি C++ শেখাব, তুমি আমাকে English শেখাবে।',
                    border: 'border-l-emerald-500'
                  },
                  {
                    title: '2. Find a Learning Partner',
                    desc: 'নিজের পছন্দ অনুযায়ী partner খোঁজা।',
                    border: 'border-l-teal-500'
                  },
                  {
                    title: '3. Student Skill Profiles',
                    desc: 'কে কোন skill জানে তা দেখা।',
                    border: 'border-l-cyan-500'
                  },
                  {
                    title: '4. Live Learning Sessions',
                    desc: 'শেখা ও শেখানোর interactive live session।',
                    border: 'border-l-rose-500'
                  },
                  {
                    title: '5. Community Discussion',
                    desc: 'প্রশ্ন, উত্তর ও আলোচনা।',
                    border: 'border-l-indigo-500'
                  },
                  {
                    title: '6. Skill Rating & Reviews',
                    desc: 'Learning partner-কে review দেওয়া।',
                    border: 'border-l-amber-500'
                  },
                  {
                    title: '7. Learning Progress',
                    desc: 'কতটুকু শিখলে তা রিয়েল-টাইমে track করা।',
                    border: 'border-l-lime-500 sm:col-span-2 lg:col-span-3'
                  }
                ].map((f) => (
                  <div key={f.title} className={`p-5 rounded-2xl glass-panel border-l-4 ${f.border}`}>
                    <h4 className="font-bold text-white">{f.title}</h4>
                    <p className="text-sm text-slate-300 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <BackToHomeButton
              onBack={() => navigateTo('home')}
              gradient="from-emerald-600 to-teal-600"
              variant="bottom"
            />
          </section>
        )}

        {/* ========================================================= */}
        {/* VIEW 3: 08 · PortfolioX                                   */}
        {/* ========================================================= */}
        {activeView === 'portfoliox' && (
          <section className="animate-fade-in-up space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackToHomeButton onBack={() => navigateTo('home')} variant="top" />
              <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider">
                Module 08 of 10 · No-Code AI Portfolio Builder
              </span>
            </div>

            <div className="rounded-3xl glass-panel p-6 sm:p-10 border-l-4 border-l-amber-500 bg-gradient-to-br from-amber-950/50 via-slate-900/70 to-orange-950/40">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-amber-400 font-extrabold text-sm uppercase tracking-widest">
                    <LayoutTemplate className="w-5 h-5" /> 08 · PortfolioX
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Build your professional identity.
                  </h1>
                  <p className="text-slate-300 text-base max-w-2xl">
                    কোনো coding ছাড়াই Professional Portfolio তৈরি করো — নিজের তথ্য দাও, পছন্দের টেমপ্লেট বাছো, GitHub ও Resume যুক্ত করো এবং পাও Live Portfolio URL।
                  </p>
                </div>
                <button
                  onClick={handleCopyUrl}
                  className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shrink-0 shadow-lg shadow-amber-500/25"
                >
                  <LinkIcon className="w-4 h-4" /> Copy Live URL
                </button>
              </div>
            </div>

            {/* Live Builder Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 rounded-3xl glass-panel p-6 space-y-4">
                <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-amber-400" /> AI Portfolio Generator Controls
                </h2>

                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    value={pxName}
                    onChange={(e) => setPxName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">
                    Headline / Role
                  </label>
                  <input
                    type="text"
                    value={pxRole}
                    onChange={(e) => setPxRole(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1.5">
                    Multiple Templates (Click to Switch)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'modern', label: '✨ Modern', cls: 'bg-indigo-500/20 border-indigo-400/40 text-indigo-200' },
                      { id: 'minimal', label: '🤍 Minimal', cls: 'bg-slate-700/40 border-slate-500/40 text-slate-200' },
                      { id: 'developer', label: '💻 Developer', cls: 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200' },
                      { id: 'creative', label: '🎨 Creative', cls: 'bg-pink-500/20 border-pink-400/40 text-pink-200' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setPxTemplate(t.id);
                          triggerToast(`Switched to ${t.id.toUpperCase()} Portfolio Template!`);
                        }}
                        className={`px-3 py-2 rounded-xl border text-xs font-bold hover:opacity-90 ${t.cls}`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={() =>
                      triggerToast('GitHub Repositories Synced! 4 pinned projects imported.')
                    }
                    className="flex-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5"
                  >
                    <Gift className="w-4 h-4" /> Sync GitHub Gift
                  </button>
                  <button
                    onClick={() =>
                      triggerToast('Resume_Arafat_2026.pdf attached to portfolio!')
                    }
                    className="flex-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-4 h-4" /> Upload CV
                  </button>
                </div>

                <button
                  onClick={() => {
                    setPxShowReview(true);
                    triggerToast('AI Portfolio Review Complete!');
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-95 text-slate-950 font-extrabold text-xs shadow-lg"
                >
                  ✨ Run AI Portfolio Review
                </button>

                {pxShowReview && (
                  <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-xs text-amber-100 space-y-1">
                    <div className="font-extrabold text-amber-300">
                      AI Portfolio Score: 92/100 🌟
                    </div>
                    <p>• Strong project showcase with GitHub live links.</p>
                    <p>
                      • Suggestion: Add quantified metrics (e.g., &quot;Reduced API latency by 40%&quot;) to stand out to recruiters.
                    </p>
                  </div>
                )}
              </div>

              {/* Live Preview Canvas */}
              <div className="lg:col-span-7">
                <div
                  className={`rounded-3xl p-6 sm:p-8 border bg-gradient-to-br ${portfolioTemplateStyles[pxTemplate]} shadow-2xl transition-all duration-300 space-y-5`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/40 text-amber-300 border border-white/10">
                      {livePortfolioUrl}
                    </span>
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-white/10 text-white">
                      Template: {pxTemplate.charAt(0).toUpperCase() + pxTemplate.slice(1)}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-pink-500 flex items-center justify-center text-2xl font-extrabold text-slate-950 shadow-lg">
                      {(pxName || 'AR')
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        {pxName || 'Your Name'}
                      </h3>
                      <p className="text-sm text-amber-300 font-semibold">
                        {pxRole || 'Your Professional Headline'}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-300">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                          ✓ GitHub Connected
                        </span>
                        <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-semibold">
                          ✓ Resume Attached
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Featured Project Showcase
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-2xl bg-black/35 border border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-white">Smart Traffic AI</span>
                          <span className="text-[11px] text-amber-300">★ 48 GitHub</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          YOLOv8 based Dhaka traffic density analyzer with real-time dashboard.
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-black/35 border border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-white">EduTrack App</span>
                          <span className="text-[11px] text-cyan-300">Live Demo ↗</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          Full-stack student attendance & routine tracker built with Next.js & Node.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All 7 Features Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">All Features in 08 · PortfolioX</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: '1. AI Portfolio Generator',
                    desc: 'তথ্য দিয়ে automatic portfolio তৈরি।',
                    border: 'border-l-amber-500'
                  },
                  {
                    title: '2. Multiple Templates',
                    desc: 'Modern, Minimal, Developer, Creative।',
                    border: 'border-l-orange-500'
                  },
                  {
                    title: '3. GitHub Integration',
                    desc: 'GitHub projects showcase।',
                    border: 'border-l-indigo-500'
                  },
                  {
                    title: '4. Project Showcase',
                    desc: 'নিজের projects, screenshots ও descriptions।',
                    border: 'border-l-pink-500'
                  },
                  {
                    title: '5. Resume Upload',
                    desc: 'CV/Resume যুক্ত করা।',
                    border: 'border-l-cyan-500'
                  },
                  {
                    title: '6. Live Portfolio URL',
                    desc: 'নিজের shareable portfolio link।',
                    border: 'border-l-emerald-500'
                  },
                  {
                    title: '7. AI Portfolio Review',
                    desc: 'Portfolio-এর quality ও improvement suggestions।',
                    border: 'border-l-yellow-400 sm:col-span-2 lg:col-span-3'
                  }
                ].map((f) => (
                  <div key={f.title} className={`p-5 rounded-2xl glass-panel border-l-4 ${f.border}`}>
                    <h4 className="font-bold text-white">{f.title}</h4>
                    <p className="text-sm text-slate-300 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <BackToHomeButton
              onBack={() => navigateTo('home')}
              gradient="from-amber-500 to-orange-600"
              variant="bottom"
            />
          </section>
        )}

        {/* ========================================================= */}
        {/* VIEW 4: 09 · InterviewX                                   */}
        {/* ========================================================= */}
        {activeView === 'interviewx' && (
          <section className="animate-fade-in-up space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackToHomeButton onBack={() => navigateTo('home')} variant="top" />
              <span className="px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-extrabold uppercase tracking-wider">
                Module 09 of 10 · AI Mock Interview Studio
              </span>
            </div>

            <div className="rounded-3xl glass-panel p-6 sm:p-10 border-l-4 border-l-rose-500 bg-gradient-to-br from-rose-950/60 via-slate-900/70 to-fuchsia-950/40">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-rose-400 font-extrabold text-sm uppercase tracking-widest">
                    <Mic className="w-5 h-5" /> 09 · InterviewX
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Practice interviews with AI.
                  </h1>
                  <p className="text-slate-300 text-base max-w-2xl">
                    Real Interview-এর আগে AI-এর সঙ্গে Practice করো — Technical (C++, DSA, OOP, DBMS, SQL, Python), HR Interview ও Voice-Based উত্তর দিয়ে তাৎক্ষণিক Score ও Feedback পাও।
                  </p>
                </div>
                <div className="px-5 py-4 rounded-2xl bg-rose-500/15 border border-rose-400/30 text-center shrink-0">
                  <div className="text-xs text-rose-300 font-bold uppercase">
                    Latest Interview Score
                  </div>
                  <div className="text-2xl font-extrabold text-white mt-0.5">{ixScore} / 100</div>
                </div>
              </div>
            </div>

            {/* Simulator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 rounded-3xl glass-panel p-6 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Bot className="w-5 h-5 text-rose-400" /> AI Mock Interview Simulator
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIxTrack('tech')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                        ixTrack === 'tech' ? 'bg-rose-600 text-white' : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      Technical (DSA/OOP/SQL)
                    </button>
                    <button
                      onClick={() => setIxTrack('hr')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                        ixTrack === 'hr' ? 'bg-rose-600 text-white' : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      HR Interview
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-rose-500/30 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                    {ixTrack === 'tech'
                      ? 'Technical Track · OOP & C++'
                      : 'HR Track · Behavioral & Leadership'}
                  </span>
                  <p className="text-base font-bold text-white">
                    {ixTrack === 'tech'
                      ? '"Explain the difference between Compile-time Polymorphism and Run-time Polymorphism in C++ with a real-world example."'
                      : '"Why should we hire you over other candidates, and how do you handle tight project deadlines?"'}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <button
                      onClick={handleToggleMic}
                      className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/40 text-rose-200 text-xs font-bold flex items-center gap-2"
                    >
                      <Mic className="w-4 h-4" />
                      <span>{ixRecording ? 'Listening... Click to Stop' : 'Start Voice Answer'}</span>
                    </button>

                    {ixRecording && (
                      <div className="flex items-center gap-1 h-7 px-3">
                        {[0, 0.15, 0.3, 0.45, 0.6, 0.2].map((delay, i) => (
                          <span
                            key={i}
                            className="wave-bar w-1 bg-rose-400 rounded-full"
                            style={{ animationDelay: `${delay}s` }}
                          />
                        ))}
                      </div>
                    )}

                    <button
                      onClick={fillSampleAnswer}
                      className="text-xs text-cyan-300 hover:underline font-semibold"
                    >
                      Auto-fill Sample Answer
                    </button>
                  </div>

                  <textarea
                    rows={3}
                    value={ixAnswer}
                    onChange={(e) => setIxAnswer(e.target.value)}
                    placeholder="Type or speak your interview answer here..."
                    className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-rose-400"
                  />

                  <button
                    onClick={handleEvaluateInterview}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-fuchsia-600 hover:opacity-95 text-white font-extrabold text-sm shadow-lg shadow-rose-500/25"
                  >
                    Evaluate Answer with AI
                  </button>
                </div>
              </div>

              {/* Evaluation & Question Bank */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl glass-panel p-6 space-y-4">
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" /> Answer Evaluation & Communication Feedback
                  </h3>
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-300">Interview Score:</span>
                      <span className="text-lg font-extrabold text-emerald-400">
                        {ixScore} / 100
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-200">
                      <strong>Answer Evaluation:</strong> {ixEvalFeedback.quality}
                    </div>
                    <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/25 text-cyan-200">
                      <strong>Communication Feedback:</strong> {ixEvalFeedback.comm}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl glass-panel p-6 space-y-3">
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-fuchsia-400" /> Previous Question Bank
                  </h3>
                  <div className="space-y-2 text-xs">
                    {[
                      {
                        q: '1. ACID Properties in DBMS & SQL Indexing',
                        tag: 'DBMS',
                        cls: 'bg-indigo-500/20 text-indigo-300'
                      },
                      {
                        q: '2. Time Complexity of QuickSort vs MergeSort',
                        tag: 'DSA',
                        cls: 'bg-rose-500/20 text-rose-300'
                      },
                      {
                        q: '3. Tell me about a conflict in your project team.',
                        tag: 'HR',
                        cls: 'bg-amber-500/20 text-amber-300'
                      }
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center"
                      >
                        <span className="text-slate-200 font-semibold">{item.q}</span>
                        <span className={`px-2 py-0.5 rounded ${item.cls}`}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* All 8 Features Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">All Features in 09 · InterviewX</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: '1. AI Mock Interview',
                    desc: 'AI interviewer-এর সঙ্গে practice।',
                    border: 'border-l-rose-500'
                  },
                  {
                    title: '2. Technical Interview',
                    desc: 'C++, DSA, OOP, DBMS, SQL, Python ইত্যাদি।',
                    border: 'border-l-indigo-500'
                  },
                  {
                    title: '3. HR Interview',
                    desc: 'Common HR questions ও behavioral prep।',
                    border: 'border-l-amber-500'
                  },
                  {
                    title: '4. Voice-Based Interview',
                    desc: 'Microphone দিয়ে উত্তর দেওয়া।',
                    border: 'border-l-pink-500'
                  },
                  {
                    title: '5. Answer Evaluation',
                    desc: 'উত্তরের quality analysis।',
                    border: 'border-l-emerald-500'
                  },
                  {
                    title: '6. Communication Feedback',
                    desc: 'English communication improvement।',
                    border: 'border-l-cyan-500'
                  },
                  {
                    title: '7. Interview Score',
                    desc: 'প্রতিটি interview-এর performance score।',
                    border: 'border-l-purple-500'
                  },
                  {
                    title: '8. Question Bank',
                    desc: 'Previous interview questions archive।',
                    border: 'border-l-fuchsia-500'
                  }
                ].map((f) => (
                  <div key={f.title} className={`p-4 rounded-2xl glass-panel border-l-4 ${f.border}`}>
                    <h4 className="font-bold text-white text-sm">{f.title}</h4>
                    <p className="text-xs text-slate-300 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <BackToHomeButton
              onBack={() => navigateTo('home')}
              gradient="from-rose-600 to-fuchsia-600"
              variant="bottom"
            />
          </section>
        )}

        {/* ========================================================= */}
        {/* VIEW 5: 10 · ProjectHub                                   */}
        {/* ========================================================= */}
        {activeView === 'projecthub' && (
          <section className="animate-fade-in-up space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackToHomeButton onBack={() => navigateTo('home')} variant="top" />
              <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-extrabold uppercase tracking-wider">
                Module 10 of 10 · Real-World Team Collaboration
              </span>
            </div>

            <div className="rounded-3xl glass-panel p-6 sm:p-10 border-l-4 border-l-sky-500 bg-gradient-to-br from-sky-950/60 via-slate-900/70 to-indigo-950/40">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-sky-400 font-extrabold text-sm uppercase tracking-widest">
                    <Rocket className="w-5 h-5" /> 10 · ProjectHub
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Collaborate, build real-world projects and showcase your work.
                  </h1>
                  <p className="text-slate-300 text-base max-w-2xl">
                    ২–৫ জনের Team তৈরি করে Real-world Project Development করো — Project Marketplace, Find Teammates, Task Management, GitHub Integration ও Mentor Feedback।
                  </p>
                </div>
                <div className="px-5 py-4 rounded-2xl bg-sky-500/15 border border-sky-400/30 text-center shrink-0">
                  <div className="text-xs text-sky-300 font-bold uppercase">
                    Active Sprint Progress
                  </div>
                  <div className="text-2xl font-extrabold text-white mt-0.5">
                    {phProgressPercent}% Complete
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Team Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6 rounded-3xl glass-panel p-6 space-y-5">
                <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <FolderKanban className="w-5 h-5 text-sky-400" /> Project Marketplace & Team Formation (2–5 Members)
                </h2>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                        Team: 3/5 Members
                      </span>
                      <h4 className="font-bold text-white mt-1">
                        MediQuick — AI Telemedicine & Prescription App
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Looking for:{' '}
                        <span className="text-sky-300 font-semibold">React Dev, UI/UX Designer</span>
                      </p>
                    </div>
                    <button
                      onClick={() => triggerToast('Join request sent to MediQuick Team!')}
                      className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0"
                    >
                      Join Team
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                        Team: 2/4 Members
                      </span>
                      <h4 className="font-bold text-white mt-1">
                        KrishiBondhu — Smart Crop Disease Detector
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Looking for:{' '}
                        <span className="text-sky-300 font-semibold">Python ML, Flutter Dev</span>
                      </p>
                    </div>
                    <button
                      onClick={() => triggerToast('Join request sent to KrishiBondhu Team!')}
                      className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0"
                    >
                      Join Team
                    </button>
                  </div>
                </div>

                {/* Proposal Submission */}
                <form
                  onSubmit={handleProposalSubmit}
                  className="pt-2 border-t border-white/10 space-y-2.5"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Submit New Project Proposal
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={phProposalTitle}
                      onChange={(e) => setPhProposalTitle(e.target.value)}
                      placeholder="Project Idea Title (e.g., Campus Bus Tracker)..."
                      className="flex-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shrink-0"
                    >
                      Submit Idea
                    </button>
                  </div>
                </form>
              </div>

              {/* Right: Task Board, GitHub & Mentor Feedback */}
              <div className="lg:col-span-6 rounded-3xl glass-panel p-6 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-emerald-400" /> Task Management & Progress
                  </h2>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5" /> github.com/campusverse/mediquick
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-300"
                    style={{ width: `${phProgressPercent}%` }}
                  />
                </div>

                <div className="space-y-2 text-xs">
                  {phTasks.map((t, idx) => (
                    <button
                      key={t.title}
                      onClick={() => toggleProjectTask(idx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                        t.done
                          ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200'
                          : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            t.done
                              ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold'
                              : 'border-slate-500'
                          }`}
                        >
                          {t.done && <Check className="w-3 h-3" />}
                        </span>
                        <span className={t.done ? 'line-through' : ''}>{t.title}</span>
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded shrink-0 ${
                          t.done
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}
                      >
                        {t.done ? 'Done' : 'In Progress'}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-indigo-300">
                      👨‍🏫 Experienced Mentor Feedback
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Engr. Mahfuzur Rahman (Senior SWE)
                    </span>
                  </div>
                  <p className="text-xs text-slate-200">
                    &quot;তোমাদের API আর্কিটেকচার খুব ক্লিন হয়েছে! এখন JWT Authentication এবং Unit Testing যোগ করলে প্রজেক্টটি প্রোডাকশন-রেডি হয়ে যাবে।&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* All 9 Features Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">All Features in 10 · ProjectHub</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: '1. Project Marketplace',
                    desc: 'বিভিন্ন project idea খুঁজে পাওয়া।',
                    border: 'border-l-sky-500'
                  },
                  {
                    title: '2. Team Formation',
                    desc: '2–5 জনের project team তৈরি।',
                    border: 'border-l-indigo-500'
                  },
                  {
                    title: '3. Find Teammates',
                    desc: 'skill অনুযায়ী team member খোঁজা।',
                    border: 'border-l-cyan-500'
                  },
                  {
                    title: '4. Project Proposal',
                    desc: 'Project idea ও proposal submit।',
                    border: 'border-l-amber-500'
                  },
                  {
                    title: '5. Task Management',
                    desc: 'কাজ ভাগ করে দেওয়া।',
                    border: 'border-l-emerald-500'
                  },
                  {
                    title: '6. GitHub Integration',
                    desc: 'Repository connect করা।',
                    border: 'border-l-purple-500'
                  },
                  {
                    title: '7. Progress Tracking',
                    desc: 'Project কতটুকু complete হয়েছে।',
                    border: 'border-l-teal-500'
                  },
                  {
                    title: '8. Project Showcase',
                    desc: 'Completed projects showcase।',
                    border: 'border-l-pink-500'
                  },
                  {
                    title: '9. Mentor Feedback',
                    desc: 'Experienced mentor-এর feedback।',
                    border: 'border-l-rose-500'
                  }
                ].map((f) => (
                  <div key={f.title} className={`p-4 rounded-2xl glass-panel border-l-4 ${f.border}`}>
                    <h4 className="font-bold text-white text-sm">{f.title}</h4>
                    <p className="text-xs text-slate-300 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <BackToHomeButton
              onBack={() => navigateTo('home')}
              gradient="from-sky-600 to-indigo-600"
              variant="bottom"
            />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-16 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-bold text-slate-300">
            BUILD YOUR FUTURE · CAMPUSVERSE — AI Career & Skill Development
          </div>
          <div>
            5 Integrated Modules: CareerDNA · SkillSwap · PortfolioX · InterviewX · ProjectHub
          </div>
        </div>
      </footer>
    </div>
  );
}