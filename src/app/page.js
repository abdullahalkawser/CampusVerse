
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ArrowRight, ArrowUpRight, ChevronDown, Menu, X,
  Sparkles, GraduationCap, Building2, Wallet, MapPin, Car,
  House, Target, Repeat2, BriefcaseBusiness, Mic, Rocket,
  Users, FileText, CalendarDays, ChartNoAxesCombined,
  MessageCircle, Network, ScanText, BookOpen, Library,
  ClipboardList, BrainCircuit, Bot, ShieldCheck, Play,
  Layers, Zap, CheckCircle2, Code2, Database, Cloud,
  Smartphone, Clock3, Award, Compass, Bookmark,
  BookMarked, Video, Camera, Send, Lightbulb, Star
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

/* ----------------------------------
   FEATURE DATA
---------------------------------- */

const categories = [
  {
    id: "campus",
    number: "01",
    name: "Smart Campus Life",
    bangla: "ক্যাম্পাস লাইফ",
    description: "ক্যাম্পাসের প্রয়োজনীয় তথ্য, যাতায়াত, খরচ এবং দৈনন্দিন সুবিধা এক জায়গায়।",
    icon: Building2,
    color: "cyan",
    gradient: "from-cyan-500 to-blue-600",
    glow: "bg-cyan-500/20",
    features: [
      {
        name: "CampusIQ",
        subtitle: "AI Campus Guide",
        icon: BrainCircuit,
        phase: 1,
        tag: "AI Powered",
        description: "একটি AI-powered campus assistant, যেখানে শিক্ষার্থীরা বিশ্ববিদ্যালয়ের যেকোনো তথ্য প্রশ্ন করে জানতে পারবে।",
        example: "CSE Lab কোথায়? আগামীকাল কোন ক্লাস? Midterm notice প্রকাশ হয়েছে কি?",
        features: [
          "AI Campus Chatbot — ক্যাম্পাস সম্পর্কিত প্রশ্নের উত্তর",
          "Classroom & Lab Locator — রুম, ফ্লোর ও লোকেশন খোঁজা",
          "Teacher Information — শিক্ষকের যোগাযোগ ও অফিস সময়",
          "Department & Course Information",
          "Notice Intelligence — বড় নোটিশের সহজ summary",
          "Campus Event Finder — ইভেন্ট ও reminder",
          "Bangla + English Voice Assistant",
          "Live Campus Map Navigation"
        ]
      },
      {
        name: "PocketCampus",
        subtitle: "Student Finance Manager",
        icon: Wallet,
        phase: 2,
        tag: "Finance",
        description: "শিক্ষার্থীদের ব্যক্তিগত খরচ, মাসিক বাজেট, সঞ্চয় এবং tuition fee পরিচালনার স্মার্ট ব্যবস্থা।",
        example: "এই মাসে কত টাকা খরচ হয়েছে? আগামী মাসের সম্ভাব্য খরচ কত?",
        features: [
          "Daily Expense Tracking — প্রতিদিনের খরচ লিখে রাখা",
          "AI Budget Planner — মাসিক বাজেট তৈরি",
          "Monthly Expense Prediction",
          "Tuition Fee Reminder",
          "Shared Group Expenses — বন্ধুদের সঙ্গে বিল ভাগ",
          "Financial Analytics — খরচের চার্ট",
          "Savings Goals & Challenges",
          "Receipt Scanner (OCR)"
        ]
      },
      {
        name: "FindIt AI",
        subtitle: "Campus Lost & Found",
        icon: Search,
        phase: 1,
        tag: "AI Vision",
        description: "ক্যাম্পাসে হারানো বা পাওয়া জিনিসের ছবি ও লোকেশন দিয়ে খুঁজে পাওয়ার প্ল্যাটফর্ম।",
        example: "লাইব্রেরিতে Wallet হারিয়েছে। ছবি upload করলে সম্ভাব্য matching item দেখাবে।",
        features: [
          "Lost Item Reporting — হারানো জিনিসের রিপোর্ট",
          "AI Image Matching — ছবির মিল খোঁজা",
          "Found Item Upload",
          "Smart Matching Notifications",
          "Claim Verification — মালিকানা যাচাই",
          "Location-based Search",
          "QR Tags for Valuables",
          "Campus Lost-item Heatmap"
        ]
      },
      {
        name: "UniRide",
        subtitle: "Student Ride Sharing",
        icon: Car,
        phase: 3,
        tag: "Transport",
        description: "একই রুটে যাতায়াত করা শিক্ষার্থীদের একসঙ্গে ride share করার ব্যবস্থা।",
        example: "Mirpur থেকে একই সময়ে বিশ্ববিদ্যালয়ে যাওয়া শিক্ষার্থীদের ride match করবে।",
        features: [
          "Route Matching — একই রুটের যাত্রী খোঁজা",
          "Ride Sharing — আসন offer বা join করা",
          "AI Route Suggestions",
          "Travel Cost Calculator",
          "Group Ride Management",
          "Verified Student Profiles",
          "Live Ride Tracking & SOS",
          "Savings & Eco Impact Tracker"
        ]
      },
      {
        name: "StayMate",
        subtitle: "Student Accommodation Finder",
        icon: House,
        phase: 3,
        tag: "Accommodation",
        description: "বিশ্ববিদ্যালয়ের কাছে mess, hostel, বাসা এবং roommate খুঁজে পাওয়ার ব্যবস্থা।",
        example: "৩,০০০–৫,০০০ টাকার মধ্যে ক্যাম্পাসের কাছে একটি mess খুঁজে পাওয়া।",
        features: [
          "Mess & Hostel Search",
          "Roommate Matching",
          "Budget-based Filtering",
          "Campus Distance Filter",
          "Verified Accommodation Listings",
          "AI Accommodation Assistant",
          "Virtual 360° Room Tour",
          "Rent & Bill Splitter"
        ]
      }
    ]
  },
  {
    id: "career",
    number: "02",
    name: "AI Career & Skill Development",
    bangla: "ক্যারিয়ার ও স্কিল",
    description: "নিজের দক্ষতা তৈরি, career planning, interview practice ও project collaboration।",
    icon: Target,
    color: "purple",
    gradient: "from-purple-500 to-fuchsia-600",
    glow: "bg-purple-500/20",
    features: [
      {
        name: "CareerDNA",
        subtitle: "AI Career Intelligence",
        icon: Target,
        phase: 1,
        tag: "AI Powered",
        description: "শিক্ষার্থীর বর্তমান দক্ষতা, আগ্রহ এবং লক্ষ্য বিশ্লেষণ করে উপযুক্ত career path ও learning roadmap তৈরি করবে।",
        example: "একজন CSE student Data Analyst হতে চাইলে কোন skill শিখতে হবে এবং কীভাবে শুরু করবে তা দেখাবে।",
        features: [
          "Skill Assessment — নিজের দক্ষতা যাচাই",
          "AI Career Prediction",
          "Career Roadmap — ধাপে ধাপে পরিকল্পনা",
          "Skill Gap Analysis",
          "Job Role Recommendation",
          "Progress Tracking",
          "Live Job & Internship Feed",
          "Course & Certificate Suggestions"
        ]
      },
      {
        name: "SkillSwap",
        subtitle: "Student Skill Exchange",
        icon: Repeat2,
        phase: 2,
        tag: "Community",
        description: "একজন শিক্ষার্থী নিজের জানা দক্ষতা অন্যকে শেখাবে এবং বিনিময়ে নতুন দক্ষতা শিখবে।",
        example: "তুমি Python শেখাবে, অন্য একজন তোমাকে UI/UX Design শেখাবে।",
        features: [
          "Skill Exchange — দক্ষতা বিনিময়",
          "Student Mentor Matching",
          "Online & Offline Learning Sessions",
          "Skill Portfolio Showcase",
          "Peer Reviews & Ratings",
          "AI Skill Matching",
          "Skill Badges & Certificates",
          "Live Video Learning Rooms"
        ]
      },
      {
        name: "PortfolioX",
        subtitle: "AI Portfolio Intelligence",
        icon: BriefcaseBusiness,
        phase: 2,
        tag: "Portfolio",
        description: "শিক্ষার্থীদের জন্য professional portfolio তৈরি এবং project, skill ও GitHub profile প্রদর্শনের ব্যবস্থা।",
        example: "GitHub connect করলে project information নিয়ে একটি সুন্দর portfolio তৈরি করতে পারবে।",
        features: [
          "AI Portfolio Builder",
          "GitHub Project Import",
          "Resume Analyzer",
          "Project Description Generator",
          "Skill Visualization",
          "Portfolio Score & Suggestions",
          "One-click Portfolio Link & QR",
          "Recruiter View Analytics"
        ]
      },
      {
        name: "InterviewX",
        subtitle: "AI Interview Simulator",
        icon: Mic,
        phase: 2,
        tag: "AI Practice",
        description: "বাস্তব চাকরির interview-এর মতো voice ও technical interview practice করার ব্যবস্থা।",
        example: "AI interviewer প্রশ্ন করবে, তুমি উত্তর দেবে এবং শেষে feedback পাবে।",
        features: [
          "Voice Interview Practice",
          "Technical Interview Questions",
          "Behavioral & HR Questions",
          "AI Answer Evaluation",
          "Confidence & Communication Analysis",
          "Interview Performance Report",
          "Company-specific Question Sets",
          "Bangla & English Interview Modes"
        ]
      },
      {
        name: "ProjectHub",
        subtitle: "Student Innovation Network",
        icon: Rocket,
        phase: 3,
        tag: "Innovation",
        description: "শিক্ষার্থীরা নিজেদের project idea, research এবং innovation প্রকাশ করবে এবং team তৈরি করতে পারবে।",
        example: "একজন ML developer খুঁজছে, অন্যজন Flutter developer খুঁজছে—AI তাদের team match করবে।",
        features: [
          "Project Publishing",
          "Team Member Finding",
          "AI Team Matching",
          "Project Tasks, Chat & File Sharing",
          "GitHub Integration",
          "Innovation Leaderboard",
          "Hackathon & Competition Finder",
          "AI Idea Validation Score"
        ]
      }
    ]
  },
  {
    id: "learning",
    number: "03",
    name: "Smart Learning & Academics",
    bangla: "লার্নিং ও একাডেমিক",
    description: "পড়াশোনা, academic performance, document analysis এবং student collaboration-এর স্মার্ট টুলস।",
    icon: GraduationCap,
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    glow: "bg-blue-500/20",
    features: [
      {
        name: "TutorConnect",
        subtitle: "Peer Learning Network",
        icon: Users,
        phase: 2,
        tag: "Learning",
        description: "একই বিশ্ববিদ্যালয়ের ভালো শিক্ষার্থী বা tutor-এর কাছ থেকে বিষয়ভিত্তিক সাহায্য পাওয়ার ব্যবস্থা।",
        example: "Data Structures বুঝতে সমস্যা হলে অভিজ্ঞ senior-এর সঙ্গে tutoring session বুক করতে পারবে।",
        features: [
          "Find Student Tutors",
          "Subject-wise Matching",
          "Session Booking",
          "Online Tutoring & Video Sessions",
          "Tutor Rating & Reviews",
          "AI Tutor Matching",
          "Group Study Rooms",
          "Tutor Verification by Results"
        ]
      },
      {
        name: "DocuMind",
        subtitle: "AI Document Intelligence",
        icon: FileText,
        phase: 2,
        tag: "AI Powered",
        description: "PDF, বই, lecture notes ও academic documents upload করে সেগুলোর তথ্য খোঁজা এবং বুঝতে সাহায্য করবে।",
        example: "১০০ পৃষ্ঠার PDF upload করে জিজ্ঞেস করবে: Deadlock কী? উত্তর ও page reference দেখাবে।",
        features: [
          "PDF Intelligence — PDF upload ও analysis",
          "Document Comparison",
          "Semantic Smart Search",
          "Information Extraction",
          "Document Classification",
          "AI Q&A with Page References",
          "Bangla & English Summaries",
          "Flashcards & Quiz Maker"
        ]
      },
      {
        name: "TaskFlow AI",
        subtitle: "Autonomous Student Workflow",
        icon: ClipboardList,
        phase: 3,
        tag: "Productivity",
        description: "AI-এর সাহায্যে assignment, deadline, study plan এবং দৈনন্দিন কাজ গুছিয়ে রাখবে।",
        example: "সকালে কোন assignment জমা দিতে হবে এবং কোন chapter পড়তে হবে—একটি daily briefing দেবে।",
        features: [
          "Smart Task Scheduling",
          "Deadline Monitoring & Alerts",
          "Workflow Automation",
          "Teacher Email Draft Assistant",
          "Calendar Integration",
          "Daily AI Briefing",
          "Focus Mode & Pomodoro Timer",
          "Mobile Reminders"
        ]
      },
      {
        name: "Academic Performance Tracker",
        subtitle: "Results & CGPA Analytics",
        icon: ChartNoAxesCombined,
        phase: 1,
        tag: "Analytics",
        description: "Semester-wise result, GPA, CGPA এবং course performance track করার ব্যবস্থা।",
        example: "CGPA 3.62 থেকে 3.75 করতে পরের semester-এ কত GPA প্রয়োজন তা হিসাব করবে।",
        features: [
          "CGPA Calculator",
          "Semester-wise Results",
          "Grade Tracking",
          "Course Performance Analysis",
          "Weak Subject Detection",
          "Academic Progress Analytics",
          "Target CGPA Planner",
          "Shareable Progress Report"
        ]
      },
      {
        name: "Student Discussion Forum",
        subtitle: "Course-wise Q&A Community",
        icon: MessageCircle,
        phase: 2,
        tag: "Community",
        description: "প্রতিটি course-এর জন্য আলাদা discussion space, যেখানে প্রশ্ন, উত্তর ও academic discussion হবে।",
        example: "Dijkstra algorithm বুঝতে সমস্যা হলে প্রশ্ন post করে senior ও classmates-এর উত্তর পাবে।",
        features: [
          "Course-wise Discussion",
          "Ask Questions with Images",
          "Answer Sharing",
          "Senior-Junior Help",
          "Upvote & Best Answer",
          "AI Answer Assistant",
          "Anonymous Posting",
          "Reputation Points & Badges"
        ]
      },
      {
        name: "Senior-Junior Connect",
        subtitle: "Student Mentorship Network",
        icon: Network,
        phase: 3,
        tag: "Mentorship",
        description: "Senior, alumni ও junior শিক্ষার্থীদের মধ্যে mentorship এবং অভিজ্ঞতা বিনিময়ের সুযোগ তৈরি করবে।",
        example: "একজন junior database course বা internship নিয়ে senior-এর সঙ্গে ৩০ মিনিটের session বুক করবে।",
        features: [
          "Senior Mentor Search",
          "Subject-wise Mentorship",
          "Experience Sharing",
          "One-to-one Mentor Booking",
          "Verified Student Profiles",
          "Alumni Career Stories",
          "Group Q&A Sessions",
          "Mentor Rating & Feedback"
        ]
      },
      {
        name: "Resume & CV Intelligence",
        subtitle: "AI Resume Analyzer",
        icon: FileText,
        phase: 2,
        tag: "Career AI",
        description: "CV upload করে ATS compatibility, keyword, formatting এবং job description অনুযায়ী উন্নতির পরামর্শ দেবে।",
        example: "একটি job post দিয়ে CV check করলে কোন keyword বা skill যোগ করা উচিত তা দেখাবে।",
        features: [
          "Resume Upload & Parsing",
          "ATS Score Checker",
          "Keyword Optimization",
          "AI Rewrite Suggestions",
          "Professional CV Templates",
          "Job Description Matching",
          "Cover Letter Generator",
          "LinkedIn Profile Optimizer"
        ]
      },
      {
        name: "Handwritten Note Scanner",
        subtitle: "Notes to Searchable Text",
        icon: ScanText,
        phase: 3,
        tag: "OCR",
        description: "হাতে লেখা class note-এর ছবি থেকে text বের করে digital, searchable ও shareable note তৈরি করবে।",
        example: "Stack ও Queue-এর handwritten note-এর ছবি দিলে typed text এবং summary তৈরি করবে।",
        features: [
          "Camera & Photo Capture",
          "Bangla and English Handwriting OCR",
          "Auto Crop, Clean-up & Enhancement",
          "Searchable Digital Notes",
          "AI Note Summary",
          "Export to PDF",
          "Lecture Voice-to-Note",
          "Private Classmate Note Sharing"
        ]
      }
    ]
  },
  {
    id: "resources",
    number: "04",
    name: "Study Resource Hub",
    bangla: "স্টাডি রিসোর্স হাব",
    description: "Semester-wise notes, books, previous questions ও exam preparation-এর সম্পূর্ণ resource center।",
    icon: Library,
    color: "pink",
    gradient: "from-pink-500 to-rose-600",
    glow: "bg-pink-500/20",
    features: [
      {
        name: "Semester-wise Notes",
        subtitle: "Academic Notes Library",
        icon: BookOpen,
        phase: 1,
        tag: "Resources",
        description: "Semester 1 থেকে 12 পর্যন্ত course-wise, chapter-wise notes এবং learning resources সাজিয়ে রাখবে।",
        example: "Semester 5 নির্বাচন করে Algorithms course-এর chapter notes ও senior notes download করতে পারবে।",
        features: [
          "Semester 1–12 Organization",
          "Course-wise PDF Notes",
          "Chapter-wise Notes",
          "Senior Student Notes",
          "AI Notes Summarizer",
          "Offline Download Mode",
          "Note Rating & Contributor Points",
          "Bookmarks & Highlights"
        ]
      },
      {
        name: "Book Recommendation",
        subtitle: "Smart Reading Guide",
        icon: BookMarked,
        phase: 2,
        tag: "Books",
        description: "Course, topic ও skill level অনুযায়ী উপযুক্ত textbook, reference book এবং free learning resources সাজেস্ট করবে।",
        example: "CSE 221 নির্বাচন করে Beginner, Intermediate অথবা Advanced level-এর বই খুঁজে পাবে।",
        features: [
          "Recommended Books by Course",
          "Beginner to Advanced Levels",
          "Reference Book Collection",
          "Free Legal E-books & Resources",
          "AI Book Recommendation",
          "Reading Progress Tracker",
          "Library Availability Check",
          "Wishlists & Shared Lists"
        ]
      },
      {
        name: "Midterm & Final Preparation",
        subtitle: "Exam Preparation Center",
        icon: CalendarDays,
        phase: 1,
        tag: "Exam Prep",
        description: "Midterm ও final পরীক্ষার জন্য previous questions, important topics এবং personalized study plan তৈরি করবে।",
        example: "Exam date দিলে প্রতিদিন কোন chapter পড়তে হবে তার একটি preparation plan দেখাবে।",
        features: [
          "Midterm Question Collection",
          "Final Exam Question Collection",
          "Previous Year Questions",
          "Important Topic Identification",
          "Chapter-wise Preparation Guide",
          "AI Day-by-day Study Plan",
          "Exam Countdown & Reminders",
          "Mock Exam Timer Mode"
        ]
      },
      {
        name: "Question Bank",
        subtitle: "Practice & Generate",
        icon: Library,
        phase: 2,
        tag: "Practice",
        description: "Course ও topic অনুযায়ী MCQ, short question, broad question এবং previous exam questions-এর collection।",
        example: "Data Structures থেকে ১০টি MCQ quiz দিয়ে সঙ্গে সঙ্গে result ও explanation পাবে।",
        features: [
          "Course-wise Questions",
          "Topic-wise Questions",
          "MCQ with Instant Checking",
          "Short Questions",
          "Broad / Descriptive Questions",
          "Previous Exam Questions",
          "AI Question Generator",
          "Timed Practice Tests"
        ]
      },
      {
        name: "Question Pattern Analysis",
        subtitle: "Exam Intelligence",
        icon: ChartNoAxesCombined,
        phase: 2,
        tag: "AI Analysis",
        description: "আগের বছরের প্রশ্ন বিশ্লেষণ করে কোন chapter থেকে বেশি প্রশ্ন আসে এবং কোন topic গুরুত্বপূর্ণ তা দেখাবে।",
        example: "গত ৮ বছরের প্রশ্ন বিশ্লেষণ করে কোন chapter থেকে বেশি marks এসেছে তা বুঝতে পারবে।",
        features: [
          "Previous Year Question Analysis",
          "Frequently Repeated Questions",
          "Chapter-wise Question Frequency",
          "Marks Distribution",
          "Midterm vs Final Pattern",
          "Important Topic Identification",
          "Predicted Questions with Probability",
          "Personal Weak-topic Advice"
        ]
      }
    ]
  }
];

const allFeatures = categories.flatMap((category) =>
  category.features.map((feature, index) => ({
    ...feature,
    category: category.name,
    categoryId: category.id,
    categoryGradient: category.gradient,
    categoryGlow: category.glow,
    number: String(
      categories
        .slice(0, categories.indexOf(category))
        .reduce((sum, item) => sum + item.features.length, 0) + index + 1
    ).padStart(2, "0")
  }))
);

const phases = [
  {
    number: "PHASE 01",
    title: "MVP — Core Demo",
    subtitle: "প্রথমে যে ফিচারগুলো তৈরি হবে",
    color: "from-cyan-400 to-blue-500",
    items: [
      "CampusIQ",
      "FindIt AI",
      "CareerDNA",
      "Academic Performance Tracker",
      "Semester-wise Notes",
      "Midterm & Final Preparation"
    ]
  },
  {
    number: "PHASE 02",
    title: "Growth — AI & Community",
    subtitle: "পরবর্তী ধাপে যুক্ত হবে",
    color: "from-purple-400 to-pink-500",
    items: [
      "PocketCampus",
      "SkillSwap",
      "PortfolioX",
      "InterviewX",
      "TutorConnect",
      "DocuMind",
      "Student Discussion Forum",
      "Resume & CV Intelligence",
      "Book Recommendation",
      "Question Bank",
      "Question Pattern Analysis"
    ]
  },
  {
    number: "PHASE 03",
    title: "Scale — Advanced",
    subtitle: "সম্পূর্ণ ecosystem সম্প্রসারণ",
    color: "from-emerald-400 to-cyan-500",
    items: [
      "UniRide",
      "StayMate",
      "ProjectHub",
      "TaskFlow AI",
      "Senior-Junior Connect",
      "Handwritten Note Scanner"
    ]
  }
];

const technologies = [
  { name: "Next.js", desc: "Frontend Framework", icon: Code2 },
  { name: "React", desc: "Interactive UI", icon: Layers },
  { name: "Tailwind CSS", desc: "Modern Styling", icon: Zap },
  { name: "Node.js", desc: "Backend Services", icon: Database },
  { name: "PostgreSQL", desc: "Database", icon: Database },
  { name: "Firebase", desc: "Authentication & Storage", icon: Cloud },
  { name: "AI / ML", desc: "Intelligent Features", icon: BrainCircuit },
  { name: "OCR", desc: "Text Recognition", icon: ScanText }
];

const faqs = [
  {
    q: "What is CampusVerse?",
    a: "CampusVerse is an AI-powered student ecosystem that aims to connect campus services, academic resources, career development and student communities in one platform."
  },
  {
    q: "How many features are planned?",
    a: "The proposal includes 23 features divided into four categories: Smart Campus Life, AI Career & Skill Development, Smart Learning & Academics and Study Resource Hub."
  },
  {
    q: "Will all features be available at launch?",
    a: "No. The development plan is divided into three phases. Phase 1 focuses on a working MVP, Phase 2 expands AI and community tools, and Phase 3 introduces advanced campus services."
  },
  {
    q: "Will the platform support Bangla?",
    a: "Bangla support is planned for relevant AI tools, including the campus assistant, document summaries, interview practice and handwriting recognition."
  },
  {
    q: "Can students use the platform on mobile?",
    a: "The website will be responsive for desktop, tablet and mobile screens. Dedicated mobile app support can be added as the project grows."
  },
  {
    q: "Are the AI features already connected?",
    a: "The homepage currently presents the proposed features and their intended functionality. AI APIs, authentication, database and individual modules will need to be implemented."
  }
];

/* ----------------------------------
   SMALL COMPONENTS
---------------------------------- */

function SectionTitle({ label, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-widest text-cyan-300 backdrop-blur-xl">
        <Sparkles size={14} />
        {label}
      </div>
      <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/10 backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  );
}

function FeatureCard({ feature, onOpen, index }) {
  const Icon = feature.icon;

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(feature)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#10182a]/80 p-6 text-left shadow-xl shadow-black/10 backdrop-blur-2xl transition-all duration-300 hover:border-white/25 hover:bg-[#172238]"
    >
      <div className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${feature.categoryGlow} opacity-50 blur-[65px] transition duration-500 group-hover:opacity-100`} />

      <div className="relative flex items-start justify-between">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.categoryGradient} text-white shadow-lg`}>
          <Icon size={26} />
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold text-slate-300">
          {feature.phase === 1 ? "PHASE 01" : feature.phase === 2 ? "PHASE 02" : "PHASE 03"}
        </span>
      </div>

      <div className="relative mt-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
          FEATURE {feature.number}
        </div>
        <h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-cyan-200">
          {feature.name}
        </h3>
        <p className="mt-1 text-xs font-semibold text-cyan-300">
          {feature.subtitle}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {feature.description}
        </p>
      </div>

      <div className="relative mt-auto flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-xs text-slate-500">{feature.tag}</span>
        <span className="inline-flex items-center gap-2 text-xs font-bold text-white transition group-hover:text-cyan-300">
          Explore Details <ArrowUpRight size={15} />
        </span>
      </div>
    </motion.button>
  );
}

function FeatureModal({ feature, onClose }) {
  if (!feature) return null;

  const Icon = feature.icon;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/15 bg-[#101a2d] shadow-2xl"
      >
        <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${feature.categoryGradient}`} />
        <div className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full ${feature.categoryGlow} blur-[90px]`} />

        <div className="relative p-6 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.categoryGradient} text-white`}>
                <Icon size={27} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                  FEATURE {feature.number}
                </span>
                <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  {feature.name}
                </h2>
                <p className="mt-1 text-sm text-slate-400">{feature.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close details"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Lightbulb size={15} /> What is this feature?
            </div>
            <p className="text-sm leading-8 text-slate-300">
              {feature.description}
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-purple-400/20 bg-purple-400/[0.06] p-5">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-300">
              <MessageCircle size={15} /> Example Use Case
            </div>
            <p className="text-sm leading-7 text-slate-300">
              {feature.example}
            </p>
          </div>

          <div className="mt-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white">What You Can Do</h3>
              <span className={`rounded-full bg-gradient-to-r ${feature.categoryGradient} px-3 py-1.5 text-[10px] font-bold text-white`}>
                {feature.phase === 1 ? "MVP · PHASE 1" : feature.phase === 2 ? "GROWTH · PHASE 2" : "SCALE · PHASE 3"}
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {feature.features.map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${feature.categoryGradient} text-[10px] font-black text-white`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-xs text-slate-500">{feature.category}</span>
            <button
              onClick={onClose}
              className="rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Close Details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ----------------------------------
   MAIN HOMEPAGE
---------------------------------- */

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const filteredFeatures = useMemo(() => {
    const query = search.toLowerCase().trim();

    return allFeatures.filter((feature) => {
      const categoryMatch =
        activeCategory === "all" ||
        feature.categoryId === activeCategory;

      const searchMatch =
        !query ||
        feature.name.toLowerCase().includes(query) ||
        feature.subtitle.toLowerCase().includes(query) ||
        feature.description.toLowerCase().includes(query) ||
        feature.category.toLowerCase().includes(query) ||
        feature.features.some((item) => item.toLowerCase().includes(query));

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b16] text-white selection:bg-cyan-400/30">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-52 top-0 h-[550px] w-[550px] rounded-full bg-cyan-600/[0.12] blur-[150px]" />
        <div className="absolute -right-52 top-[450px] h-[550px] w-[550px] rounded-full bg-purple-600/[0.12] blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-pink-600/[0.07] blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      <div className="relative z-10">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080d19]/80 backdrop-blur-2xl">
       
          


          <Navbar></Navbar>


          

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-white/10 bg-[#0b1221] lg:hidden"
              >
                <div className="flex flex-col gap-1 p-5">
                  {[
                    ["Home", "home"],
                    ["Features", "features"],
                    ["About", "about"],
                    ["Roadmap", "roadmap"],
                    ["FAQ", "faq"]
                  ].map(([label, id]) => (
                    <button
                      key={id}
                      onClick={() => goTo(id)}
                      className="rounded-xl px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* HERO */}
        <section id="home" className="px-5 pb-24 pt-20 sm:pt-28 lg:px-8 lg:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-cyan-300 backdrop-blur-xl sm:text-xs">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  UNIVERSITY HACKATHON 2026
                  <Sparkles size={13} />
                </span>
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
                className="mt-8 max-w-3xl text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-[72px]"
              >
                One Platform.
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Every Student Need.
                </span>
              </motion.h1>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
                className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
              >
                CampusVerse is an AI-powered student ecosystem that brings
                campus life, academic resources, career development and
                student communities together in one intelligent platform.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <button
                  onClick={() => goTo("features")}
                  className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-black text-[#07111e] shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:shadow-cyan-500/30"
                >
                  Explore 23 Features
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => goTo("about")}
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/10"
                >
                  <Play size={17} className="text-cyan-300" />
                  Discover CampusVerse
                </button>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8"
              >
                {[
                  ["23+", "Smart Features"],
                  ["04", "Core Categories"],
                  ["03", "Development Phases"]
                ].map(([number, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-black text-white sm:text-4xl">{number}</div>
                    <div className="mt-2 text-[10px] font-medium text-slate-500 sm:text-xs">{label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* HERO DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[540px]"
            >
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl" />

              <GlassCard className="relative p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">
                      <GraduationCap size={23} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black">CampusVerse</h3>
                      <p className="text-[10px] text-slate-500">Student Ecosystem Preview</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[9px] font-bold text-emerald-300">
                    CONCEPT UI
                  </span>
                </div>

                <div className="mt-7">
                  <p className="text-xs text-slate-500">WELCOME TO YOUR DIGITAL CAMPUS</p>
                  <h3 className="mt-2 text-2xl font-black">Everything in one place.</h3>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { title: "Campus Life", sub: "Services & information", icon: Building2, color: "from-cyan-500 to-blue-600" },
                    { title: "AI Career", sub: "Skills & opportunities", icon: Target, color: "from-purple-500 to-pink-600" },
                    { title: "Smart Learning", sub: "Academic assistance", icon: BrainCircuit, color: "from-blue-500 to-indigo-600" },
                    { title: "Study Hub", sub: "Notes & resources", icon: BookOpen, color: "from-pink-500 to-rose-600" }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]">
                        <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}>
                          <Icon size={21} />
                        </div>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="mt-1 text-[10px] text-slate-500">{item.sub}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500">
                      <Sparkles size={21} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">One Connected Ecosystem</p>
                      <p className="mt-1 text-[10px] text-slate-400">Campus · Learning · Career · Community</p>
                    </div>
                    <ArrowUpRight size={20} className="text-cyan-300" />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Designed for Students</span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    Concept Preview
                  </span>
                </div>
              </GlassCard>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-7 top-24 hidden rounded-2xl border border-white/10 bg-[#18243a]/90 p-4 shadow-2xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-purple-500/20 p-2.5 text-purple-300">
                    <Bot size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold">AI Powered</p>
                    <p className="text-[10px] text-slate-500">Smart Assistance</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute -right-5 bottom-20 hidden rounded-2xl border border-white/10 bg-[#18243a]/90 p-4 shadow-2xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-500/20 p-2.5 text-cyan-300">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold">23 Smart Tools</p>
                    <p className="text-[10px] text-slate-500">One Ecosystem</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-y border-white/[0.07] bg-white/[0.018] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              label="THE PROBLEM & THE SOLUTION"
              title="University Life Should Be Simpler"
              description="শিক্ষার্থীদের campus information, study materials, career guidance এবং daily services বিভিন্ন জায়গায় ছড়িয়ে থাকে। CampusVerse এগুলোকে একটি connected platform-এ আনার পরিকল্পনা।"
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Layers,
                  number: "01",
                  title: "Scattered Information",
                  desc: "ক্লাসের নোটিশ, course materials, campus information এবং student services বিভিন্ন platform-এ থাকে।",
                  gradient: "from-cyan-400 to-blue-500"
                },
                {
                  icon: Clock3,
                  number: "02",
                  title: "Wasted Time & Effort",
                  desc: "সঠিক information, পড়াশোনার resource এবং প্রয়োজনীয় service খুঁজতে অনেক সময় নষ্ট হয়।",
                  gradient: "from-purple-400 to-pink-500"
                },
                {
                  icon: Target,
                  number: "03",
                  title: "Career Confusion",
                  desc: "অনেক শিক্ষার্থী জানে না কোন skill শিখবে, কীভাবে portfolio বানাবে বা interview-এর প্রস্তুতি নেবে।",
                  gradient: "from-emerald-400 to-cyan-500"
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <GlassCard key={item.number} className="group relative overflow-hidden p-7 transition hover:-translate-y-2 hover:border-white/20">
                    <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 blur-3xl transition group-hover:opacity-25`} />
                    <div className="relative flex items-center justify-between">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white`}>
                        <Icon size={25} />
                      </div>
                      <span className="text-4xl font-black text-white/10">{item.number}</span>
                    </div>
                    <h3 className="relative mt-7 text-xl font-bold">{item.title}</h3>
                    <p className="relative mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
                  </GlassCard>
                );
              })}
            </div>

            <div className="mt-7 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-7 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">THE CAMPUSVERSE SOLUTION</span>
                  <h3 className="mt-3 text-2xl font-black sm:text-3xl">One Platform. Every Student Need.</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    Campus services, academic tools, career development এবং
                    student community—সবকিছুর জন্য একটি unified digital experience।
                  </p>
                </div>
                <button
                  onClick={() => goTo("features")}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-xs font-black text-slate-950 transition hover:bg-cyan-100"
                >
                  Explore Solutions <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              label="FOUR CORE CATEGORIES"
              title="Explore the Ecosystem"
              description="CampusVerse-এর ২৩টি feature চারটি প্রধান বিভাগে সাজানো। প্রতিটি বিভাগ শিক্ষার্থীদের আলাদা প্রয়োজন পূরণ করার জন্য তৈরি।"
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSearch("");
                      goTo("features");
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-2xl transition hover:-translate-y-2 hover:border-white/25"
                  >
                    <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${category.glow} blur-3xl transition group-hover:scale-150`} />
                    <div className="relative">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}>
                        <Icon size={26} />
                      </div>
                      <p className="mt-6 text-[10px] font-bold tracking-[0.2em] text-slate-500">
                        CATEGORY {category.number}
                      </p>
                      <h3 className="mt-2 text-lg font-black text-white">{category.name}</h3>
                      <p className="mt-2 text-xs text-cyan-300">{category.bangla}</p>
                      <p className="mt-4 min-h-[70px] text-sm leading-6 text-slate-400">{category.description}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-xs text-slate-400">{category.features.length} Features</span>
                        <ArrowUpRight size={18} className="text-slate-400 transition group-hover:text-white" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ALL FEATURES */}
        <section id="features" className="border-y border-white/[0.07] bg-[#0b1220]/70 px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              label="23 SMART TOOLS"
              title="Everything Students Need"
              description="প্রতিটি feature-এর বিস্তারিত জানতে কার্ডে click করো। এখানে feature-এর কাজ, বাস্তব উদাহরণ এবং কী কী functionality থাকবে তা দেওয়া হয়েছে।"
            />

            {/* FILTERS */}
            <div className="mb-8 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`rounded-xl px-4 py-3 text-xs font-bold transition ${
                    activeCategory === "all"
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/15"
                      : "border border-white/10 bg-white/[0.04] text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  All Features · 23
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-xl px-4 py-3 text-xs font-bold transition ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                        : "border border-white/10 bg-white/[0.04] text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full sm:max-w-md">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search features, tools or functionality..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.045] py-3.5 pl-11 pr-4 text-sm text-white outline-none backdrop-blur-xl placeholder:text-slate-600 focus:border-cyan-400/50"
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                      <X size={16} />
                    </button>
                  )}
                </div>
                <p className="text-xs text-slate-500">
                  Showing <span className="font-bold text-cyan-300">{filteredFeatures.length}</span> of 23 features
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + search}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filteredFeatures.map((feature, index) => (
                  <FeatureCard
                    key={feature.name}
                    feature={feature}
                    index={index}
                    onOpen={setSelectedFeature}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredFeatures.length === 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] py-20 text-center">
                <Search size={35} className="mx-auto text-slate-600" />
                <h3 className="mt-5 text-lg font-bold">No features found</h3>
                <p className="mt-2 text-sm text-slate-500">Try another search term or category.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("all");
                  }}
                  className="mt-5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-xs font-black text-slate-950"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* AI SHOWCASE */}
        <section className="px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs font-bold tracking-widest text-purple-300">
                <BrainCircuit size={15} /> AI-POWERED ECOSYSTEM
              </span>
              <h2 className="mt-7 text-3xl font-black leading-tight sm:text-5xl">
                Intelligence That
                <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                  Supports Your Journey.
                </span>
              </h2>
              <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
                AI শুধু chatbot নয়। CampusVerse-এ AI ব্যবহার হবে document
                understanding, smart matching, prediction, career guidance,
                handwriting recognition এবং personalized learning-এর মতো কাজে।
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Academic questions and document understanding",
                  "Career prediction and skill gap analysis",
                  "Smart matching for tutors, rides and teams",
                  "Handwriting OCR and intelligent summaries",
                  "Personalized study plans and recommendations"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className="shrink-0 text-cyan-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-[90px]" />
              <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500">
                    <Bot size={23} />
                  </div>
                  <div>
                    <p className="text-sm font-black">Campus AI Assistant</p>
                    <p className="text-[10px] text-slate-500">Interface Concept</p>
                  </div>
                </div>
                <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-[9px] font-bold text-purple-300">
                  AI CONCEPT
                </span>
              </div>

              <div className="relative mt-7 space-y-5">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-blue-500/30 to-purple-500/20 p-4 text-sm leading-7 text-slate-200">
                  How can I prepare for my Data Structures final exam?
                </div>
                <div className="max-w-[95%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.05] p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-bold text-purple-300">
                    <Sparkles size={15} /> Campus AI
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    Let's create a focused revision plan. Start with these important topics:
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      ["01", "Arrays & Linked Lists"],
                      ["02", "Stack & Queue"],
                      ["03", "Searching & Sorting"],
                      ["04", "Trees & Graphs"]
                    ].map(([n, text]) => (
                      <div key={n} className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3">
                        <span className="rounded-lg bg-purple-400/15 px-2 py-1 text-[10px] font-bold text-purple-300">{n}</span>
                        <span className="text-xs text-slate-300">{text}</span>
                        <CheckCircle2 size={15} className="ml-auto text-cyan-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-[#080d18] px-4 py-4">
                <span className="flex-1 text-xs text-slate-600">Ask your academic assistant...</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
                  <Send size={16} />
                </div>
              </div>
              <p className="mt-3 text-center text-[10px] text-slate-600">
                Illustrative UI only · AI integration planned
              </p>
            </GlassCard>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="border-y border-white/[0.07] bg-white/[0.018] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              label="DEVELOPMENT PLAN"
              title="From Vision to Reality"
              description="একসঙ্গে ২৩টি feature তৈরি না করে ধাপে ধাপে development করা হবে। প্রথমে core demo, এরপর AI ও community tools, তারপর advanced services।"
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {phases.map((phase, index) => (
                <GlassCard key={phase.number} className="relative overflow-hidden p-6 sm:p-7">
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${phase.color}`} />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-[0.2em] text-slate-400">{phase.number}</span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${phase.color} text-sm font-black text-white`}>
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-black">{phase.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">{phase.subtitle}</p>
                  <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-xs text-slate-300">
                        <CheckCircle2 size={15} className="shrink-0 text-cyan-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-[10px] text-slate-500">
                    {phase.items.length} planned modules
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              label="TECHNOLOGY FOUNDATION"
              title="Powered by Modern Technology"
              description="প্রস্তাবিত technology stack দিয়ে responsive frontend, scalable backend, secure data management এবং AI-powered services তৈরি করা হবে।"
            />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-300">
                      <Icon size={23} />
                    </div>
                    <h3 className="mt-4 text-sm font-black">{tech.name}</h3>
                    <p className="mt-1 text-[10px] text-slate-500">{tech.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y border-white/[0.07] bg-[#0b1220]/70 px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              label="FREQUENTLY ASKED QUESTIONS"
              title="Everything You Should Know"
              description="CampusVerse-এর পরিকল্পনা, feature এবং development নিয়ে সাধারণ প্রশ্নের উত্তর।"
            />

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-sm font-bold text-slate-200 sm:text-base">{faq.q}</span>
                    <ChevronDown size={19} className={`shrink-0 text-cyan-300 transition-transform ${activeFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-white/10 px-5 py-5 text-sm leading-8 text-slate-400 sm:px-6">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 py-24 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/15 via-blue-600/15 to-purple-600/20 px-6 py-16 text-center sm:px-12">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-xl shadow-cyan-500/20">
                <GraduationCap size={31} />
              </div>
              <p className="mt-7 text-xs font-black tracking-[0.25em] text-cyan-300">
                BUILT BY STUDENTS, FOR STUDENTS
              </p>
              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                The Future of
                <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  Campus Life Starts Here.
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300/70">
                A smarter way to learn, connect, discover opportunities and
                experience university life through one connected ecosystem.
              </p>
              <button
                onClick={() => goTo("features")}
                className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-100"
              >
                Discover All 23 Features <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-[#060a13] px-5 pb-8 pt-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600">
                  <GraduationCap size={24} />
                </div>
                <span className="text-xl font-black">
                  Campus<span className="text-cyan-300">Verse</span>
                </span>
              </div>
              <p className="mt-5 max-w-md text-sm leading-8 text-slate-500">
                An AI-powered student ecosystem connecting campus life,
                career development, smart learning and academic resources
                in one platform.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                <Sparkles size={14} className="text-cyan-300" />
                One Platform. Every Student Need.
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-black">Quick Links</h4>
              <div className="space-y-3">
                {[
                  ["Home", "home"],
                  ["About", "about"],
                  ["Features", "features"],
                  ["Roadmap", "roadmap"],
                  ["FAQ", "faq"]
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => goTo(id)}
                    className="block text-sm text-slate-500 transition hover:text-cyan-300"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-black">Categories</h4>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSearch("");
                      goTo("features");
                    }}
                    className="block text-left text-sm text-slate-500 transition hover:text-cyan-300"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/[0.07] pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-xs text-slate-600">
              {/* © {new Date().getFullYear()} CampusVerse. All rights reserved. */}
            </p>
            <p className="text-xs text-slate-600">
              Created & Presented by Abdullah Al Kawser
            </p>
          </div>
        </footer>
      </div>

      {/* FEATURE DETAILS MODAL */}
      <AnimatePresence>
        {selectedFeature && (
          <FeatureModal
            feature={selectedFeature}
            onClose={() => setSelectedFeature(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
