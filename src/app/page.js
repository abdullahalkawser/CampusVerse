"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ArrowRight, ArrowUpRight, ChevronDown, X,
  Sparkles, GraduationCap, Building2, Wallet, Car,
  House, Target, Repeat2, BriefcaseBusiness, Mic, Rocket,
  Users, FileText, CalendarDays, ChartNoAxesCombined,
  MessageCircle, Network, ScanText, BookOpen, Library,
  ClipboardList, BrainCircuit, Layers, Zap, CheckCircle2,
  Code2, Database, Cloud, BookMarked, Lightbulb, Cpu, ShieldCheck
} from "lucide-react";

/* ----------------------------------
   FEATURE DATA
---------------------------------- */

const categories = [
  {
    id: "campus",
    number: "01",
    name: "Smart Campus Life",
    bangla: "ক্যাম্পাস লাইফ",
    description: "ক্যাম্পাসের প্রয়োজনীয় তথ্য, যাতায়াত, খরচ এবং দৈনন্দিন সুবিধা এক জায়গায়।",
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
        description: "একটি AI-powered campus assistant, যেখানে শিক্ষার্থীরা বিশ্ববিদ্যালয়ের যেকোনো তথ্য প্রশ্ন করে জানতে পারবে।",
        example: "CSE Lab কোথায়? আগামীকাল কোন ক্লাস? Midterm notice প্রকাশ হয়েছে কি?",
        features: [
          "AI Campus Chatbot — ক্যাম্পাস সম্পর্কিত প্রশ্নের উত্তর",
          "Classroom & Lab Locator — রুম, ফ্লোর ও লোকেশন খোঁজা",
          "Teacher Information — শিক্ষকের যোগাযোগ ও অফিস সময়",
          "Department & Course Information",
          "Notice Intelligence — বড় নোটিশের সহজ summary",
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
        description: "শিক্ষার্থীদের ব্যক্তিগত খরচ, মাসিক বাজেট, সঞ্চয় এবং tuition fee পরিচালনার স্মার্ট ব্যবস্থা।",
        example: "এই মাসে কত টাকা খরচ হয়েছে? আগামী মাসের সম্ভাব্য খরচ কত?",
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
        description: "ক্যাম্পাসে হারানো বা পাওয়া জিনিসের ছবি ও লোকেশন দিয়ে খুঁজে পাওয়ার প্ল্যাটফর্ম।",
        example: "লাইব্রেরিতে Wallet হারিয়েছে। ছবি upload করলে সম্ভাব্য matching item দেখাবে।",
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
        description: "একই রুটে যাতায়াত করা শিক্ষার্থীদের একসঙ্গে ride share করার ব্যবস্থা।",
        example: "Mirpur থেকে একই সময়ে বিশ্ববিদ্যালয়ে যাওয়া শিক্ষার্থীদের ride match করবে।",
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
        description: "বিশ্ববিদ্যালয়ের কাছে mess, hostel, বাসা এবং roommate খুঁজে পাওয়ার ব্যবস্থা।",
        example: "৩,০০০–৫,০০০ টাকার মধ্যে ক্যাম্পাসের কাছে একটি mess খুঁজে পাওয়া।",
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
    bangla: "ক্যারিয়ার ও স্কিল",
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
        description: "একজন শিক্ষার্থী নিজের জানা দক্ষতা অন্যকে শেখাবে এবং বিনিময়ে নতুন দক্ষতা শিখবে।",
        example: "তুমি Python শেখাবে, অন্য একজন তোমাকে UI/UX Design শেখাবে।",
        features: [
          "Skill Exchange — দক্ষতা বিনিময়",
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
        example: "GitHub connect করলে project information নিয়ে একটি সুন্দর portfolio তৈরি করতে পারবে।",
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
    description: "পড়াশোনা, academic performance, document analysis এবং student collaboration-এর স্মার্ট টুলস।",
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
        description: "একই বিশ্ববিদ্যালয়ের ভালো শিক্ষার্থী বা tutor-এর কাছ থেকে বিষয়ভিত্তিক সাহায্য পাওয়ার ব্যবস্থা।",
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
        description: "AI-এর সাহায্যে assignment, deadline, study plan এবং দৈনন্দিন কাজ গুছিয়ে রাখবে।",
        example: "সকালে কোন assignment জমা দিতে হবে এবং কোন chapter পড়তে হবে—একটি daily briefing দেবে।",
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
        example: "CGPA 3.62 থেকে 3.75 করতে পরের semester-এ কত GPA প্রয়োজন তা হিসাব করবে।",
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
        description: "Senior, alumni ও junior শিক্ষার্থীদের মধ্যে mentorship এবং অভিজ্ঞতা বিনিময়ের সুযোগ তৈরি করবে।",
        example: "একজন junior database course বা internship নিয়ে senior-এর সঙ্গে ৩০ মিনিটের session বুক করবে।",
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
        description: "CV upload করে ATS compatibility, keyword, formatting এবং job description অনুযায়ী উন্নতির পরামর্শ দেবে।",
        example: "একটি job post দিয়ে CV check করলে কোন keyword বা skill যোগ করা উচিত তা দেখাবে।",
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
        description: "Semester 1 থেকে 12 পর্যন্ত course-wise, chapter-wise notes এবং learning resources সাজিয়ে রাখবে।",
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
        description: "Course, topic ও skill level অনুযায়ী উপযুক্ত textbook, reference book এবং free learning resources সাজেস্ট করবে।",
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
        example: "Exam date দিলে প্রতিদিন কোন chapter পড়তে হবে তার একটি preparation plan দেখাবে।",
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
        description: "Course ও topic অনুযায়ী MCQ, short question, broad question এবং previous exam questions-এর collection।",
        example: "Data Structures থেকে ১০টি MCQ quiz দিয়ে সঙ্গে সঙ্গে result ও explanation পাবে।",
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

const heroHighlights = [
  {
    title: "২৩টি স্মার্ট মডিউল",
    desc: "ক্যাম্পাস গাইড, লস্ট অ্যান্ড ফাউন্ড, রাইড শেয়ারিং ও মেস খোঁজা।",
    icon: Sparkles,
    accent: "text-cyan-400"
  },
  {
    title: "AI ক্যারিয়ার ইঞ্জিন",
    desc: "CareerDNA, মক ইন্টারভিউ, রিজিউমি বিশ্লেষণ ও পোর্টফোলিও।",
    icon: BrainCircuit,
    accent: "text-purple-400"
  },
  {
    title: "একাডেমিক ও রিসোর্স হাব",
    desc: "সেমিস্টার নোটস, প্রশ্নব্যাংক, প্যাটার্ন অ্যানালাইসিস ও CGPA ট্র্যাকার।",
    icon: GraduationCap,
    accent: "text-blue-400"
  },
  {
    title: "স্মার্ট নোট ও বাজেট",
    desc: "হাতে লেখা নোট OCR, PDF সামারি ও স্টুডেন্ট খরচ হিসাব।",
    icon: ScanText,
    accent: "text-emerald-400"
  },
  {
    title: "পিয়ার মেন্টরশিপ ও ফোরাম",
    desc: "SkillSwap, সিনিয়র-জুনিয়র কানেক্ট ও কোর্সভিত্তিক প্রশ্নোত্তর।",
    icon: Users,
    accent: "text-pink-400"
  },
  {
    title: "বাংলা ও ইংরেজি সাপোর্ট",
    desc: "সহজ ইন্টারফেস, ভয়েস অ্যাসিস্ট্যান্ট ও রেসপন্সিভ ড্যাশবোর্ড।",
    icon: Zap,
    accent: "text-amber-400"
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b16] text-white selection:bg-cyan-400/30">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 top-1/4 h-[520px] w-[520px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* =================================================================
          HEADER / HERO SECTION (3D ANIMATED SHOWCASE + EXPANDED FEATURES)
      ================================================================== */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* LEFT COLUMN: WHY WE BUILT THIS & EXPANDED FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            {/* Team & University Pill */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-xl">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Team Byteslab · BUBT CSE 57 (Section 4)</span>
            </div>

            <h1 className="text-3xl font-black leading-[1.18] tracking-tight text-white sm:text-5xl">
              কেন আমরা{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                CampusVerse
              </span>{" "}
              সফটওয়্যারটি তৈরি করেছি?
            </h1>

            <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
              বিশ্ববিদ্যালয় জীবনে শিক্ষার্থীদের প্রতিদিনের একাডেমিক পড়াশোনা, ক্যাম্পাস তথ্য, নোট সংগ্রহ, খরচ ব্যবস্থাপনা এবং ক্যারিয়ার প্রস্তুতি—সবকিছু ভিন্ন ভিন্ন জায়গায় ছড়িয়ে থাকায় অনেক সময় নষ্ট হয়।{" "}
              <span className="font-semibold text-cyan-300">
                “Turning Ideas into Impact”
              </span>{" "}
              লক্ষ্য নিয়ে আমরা এমন একটি অল-ইন-ওয়ান AI স্টুডেন্ট ইকোসিস্টেম তৈরি করেছি, যেখানে একটি প্ল্যাটফর্মেই ক্যাম্পাস লাইফ থেকে শুরু করে জব প্রিপারেশন পর্যন্ত সব সমাধান মিলবে।
            </p>

            {/* WHAT WE HAVE DONE / BUILT HIGHLIGHTS */}
            <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-300">
                  <Cpu size={16} /> এই সফটওয়্যারে যা যা করা হয়েছে
                </span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">
                  6 CORE HIGHLIGHTS
                </span>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 transition hover:border-cyan-400/25 hover:bg-white/[0.05]"
                    >
                      <Icon size={18} className={`mt-0.5 shrink-0 ${item.accent}`} />
                      <div>
                        <p className="text-xs font-bold text-white">{item.title}</p>
                        <p className="mt-0.5 text-[11px] leading-5 text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => goTo("features-section")}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-500"
              >
                সব ফিচার দেখুন <ArrowRight size={17} />
              </button>

              <button
                type="button"
                onClick={() => goTo("roadmap-section")}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
              >
                ডেভেলপমেন্ট রোডম্যাপ
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3D ORBITAL RINGS, FLOATING BADGES & FULL SHOWCASE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-2xl py-6 [perspective:1400px]">
              {/* Ambient Glow & Rotating 3D Aura Rings Behind Image */}
              <div className="pointer-events-none absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500/25 via-blue-600/20 to-purple-600/25 blur-2xl" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-6 hidden rounded-[44px] border border-dashed border-cyan-400/20 sm:block"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-10 hidden rounded-[52px] border border-purple-400/15 sm:block"
              />

              {/* 3D Floating & Interactive Tilt Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{
                  rotateY: -6,
                  rotateX: 5,
                  scale: 1.015,
                  transition: { duration: 0.35 }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative overflow-hidden rounded-[28px] border border-cyan-400/35 bg-[#0d1527]/95 p-2.5 shadow-[0_30px_80px_-15px_rgba(6,182,212,0.4)] backdrop-blur-2xl"
              >
                {/* Top Browser/Showcase Header Bar */}
                <div className="mb-2.5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-cyan-300">
                    TEAM BYTESLAB · SOFTWARE SHOWCASE
                  </span>
                  <motion.span
                    animate={{ opacity: [0.65, 1, 0.65] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-md bg-cyan-500/20 px-2 py-0.5 text-[10px] font-semibold text-cyan-200"
                  >
                    LIVE VISION
                  </motion.span>
                </div>

                {/* Main Showcase Image (object-contain ensures full image without cropping) */}
                <div className="relative overflow-hidden rounded-2xl bg-[#070d1a]">
                  <img
                    src="/1.png"
                    alt="Team Byteslab - Software Showcase Team (BUBT CSE 57 Section 4)"
                    className="block h-auto w-full object-contain transition duration-500 hover:scale-[1.02]"
                  />

                  {/* Subtle Bottom Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070b16]/75 via-transparent to-transparent" />
                </div>

                {/* Image Bottom Caption Strip */}
                <div className="mt-2.5 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                  <motion.div whileHover={{ y: -2 }} className="transition">
                    <div className="text-xs font-black text-emerald-400">PLAN</div>
                    <div className="text-[11px] text-slate-400">Project Strategy</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} className="border-x border-white/10 transition">
                    <div className="text-xs font-black text-cyan-400">BUILD</div>
                    <div className="text-[11px] text-slate-400">Full-Stack & AI</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} className="transition">
                    <div className="text-xs font-black text-purple-400">INNOVATE</div>
                    <div className="text-[11px] text-slate-400">UI/UX & System</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating 3D Badge (Top Right) */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [-1, 1.5, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 top-1 hidden rounded-2xl border border-purple-400/35 bg-[#111a30]/95 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:flex sm:items-center sm:gap-2.5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">23+ AI Modules</div>
                  <div className="text-[10px] text-cyan-300">Built for Students</div>
                </div>
              </motion.div>

              {/* Floating 3D Badge (Bottom Left) */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [1, -1.5, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1 -left-3 hidden rounded-2xl border border-cyan-400/35 bg-[#111a30]/95 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:flex sm:items-center sm:gap-2.5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
                  <BrainCircuit size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">BUBT CSE 57 · Sec 4</div>
                  <div className="text-[10px] text-emerald-300">Smart Campus Vision</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================================
          CATEGORY OVERVIEW CARDS
      ================================================================== */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          label="ECOSYSTEM PILLARS"
          title="চারটি মূল বিভাগে সাজানো সম্পূর্ণ প্ল্যাটফর্ম"
          description="ক্যাম্পাস জীবন থেকে শুরু করে পড়াশোনা, রিসোর্স ও ক্যারিয়ার গঠনের প্রতিটি ধাপকে আলাদা চারটি ক্যাটাগরিতে ভাগ করা হয়েছে।"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  goTo("features-section");
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#10182a]/80 p-6 text-left backdrop-blur-2xl transition hover:border-white/25 hover:bg-[#162138]"
              >
                <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full ${cat.glow} blur-[50px]`} />
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} text-white shadow-lg`}>
                    <Icon size={23} />
                  </div>
                  <span className="text-xs font-black tracking-widest text-slate-500">
                    {cat.number}
                  </span>
                </div>

                <div className="mt-5">
                  <span className="text-xs font-semibold text-cyan-300">{cat.bangla}</span>
                  <h3 className="mt-1 text-lg font-bold text-white group-hover:text-cyan-200">
                    {cat.name}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold text-slate-300">
                  <span>{cat.features.length} Features</span>
                  <span className="inline-flex items-center gap-1 text-cyan-300">
                    Filter <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* =================================================================
          ALL 23 FEATURES EXPLORER (SEARCH + FILTER + GRID)
      ================================================================== */}
      <section id="features-section" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          label="FEATURE DIRECTORY"
          title="সকল ২৩টি ফিচার ও বিস্তারিত কার্যকারিতা"
          description="যেকোনো ফিচার কার্ডে ক্লিক করে তার বাস্তব উদাহরণ ও মূল সুবিধাসমূহ বিস্তারিত দেখুন।"
        />

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#10182a]/80 p-4 backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
          {/* CATEGORY TABS */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
              }`}
            >
              All ({allFeatures.length})
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg`
                    : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
                }`}
              >
                {cat.bangla} ({cat.features.length})
              </button>
            ))}
          </div>

          {/* SEARCH INPUT */}
          <div className="relative w-full lg:w-80">
            <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ফিচার বা টপিক খুঁজুন..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.05] py-2.5 pl-10 pr-9 text-xs text-white placeholder-slate-400 outline-none transition focus:border-cyan-400/50 focus:bg-white/[0.08]"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* FEATURE GRID */}
        {filteredFeatures.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.name}
                feature={feature}
                index={index}
                onOpen={setSelectedFeature}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-[#10182a]/70 p-12 text-center backdrop-blur-xl">
            <p className="text-base font-bold text-white">কোনো ফিচার খুঁজে পাওয়া যায়নি</p>
            <p className="mt-2 text-xs text-slate-400">অন্য কোনো শব্দ দিয়ে সার্চ করুন অথবা ফিল্টার রিসেট করুন।</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearch("");
              }}
              className="mt-5 rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* =================================================================
          DEVELOPMENT ROADMAP (3 PHASES)
      ================================================================== */}
      <section id="roadmap-section" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          label="IMPLEMENTATION ROADMAP"
          title="তিনটি ধাপে বাস্তবায়ন পরিকল্পনা"
          description="সম্পূর্ণ প্ল্যাটফর্মটি ধাপে ধাপে তৈরি করা হবে যাতে শুরু থেকেই কার্যকর MVP ব্যবহার করা যায়।"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10182a]/80 p-7 backdrop-blur-2xl"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${phase.color}`} />

              <span className={`inline-block rounded-full bg-gradient-to-r ${phase.color} px-3.5 py-1 text-[10px] font-black tracking-widest text-slate-950`}>
                {phase.number}
              </span>

              <h3 className="mt-4 text-2xl font-black text-white">{phase.title}</h3>
              <p className="mt-1 text-xs text-slate-400">{phase.subtitle}</p>

              <ul className="mt-6 space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="shrink-0 text-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================================================================
          TECHNOLOGY STACK
      ================================================================== */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          label="ARCHITECTURE & STACK"
          title="আধুনিক ও স্কেলেবল টেকনোলজি স্ট্যাক"
          description="দ্রুতগতির পারফরম্যান্স, রিয়েল-টাইম ডেটা এবং AI ইন্টিগ্রেশনের জন্য নির্বাচিত প্রযুক্তিসমূহ।"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#10182a]/80 p-5 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-[#162138]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{tech.name}</div>
                  <div className="text-xs text-slate-400">{tech.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =================================================================
          FAQ SECTION
      ================================================================== */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          label="FREQUENTLY ASKED QUESTIONS"
          title="সাধারণ জিজ্ঞাসা ও উত্তর"
          description="CampusVerse-এর পরিকল্পনা, ফিচার এবং ভবিষ্যৎ রোডম্যাপ সম্পর্কে প্রয়োজনীয় তথ্য।"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#10182a]/80 backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-sm font-bold text-white sm:text-base">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-cyan-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/10 px-6 pb-6 pt-4 text-sm leading-7 text-slate-400">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================================================
          FOOTER
      ================================================================== */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050811] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <div>
            <div className="text-lg font-black tracking-tight text-white">CampusVerse</div>
            <p className="mt-1 text-xs text-slate-400">
              AI-Powered Unified Student Ecosystem & Smart Campus Platform
            </p>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CampusVerse. All rights reserved.
          </p>
        </div>
      </footer>

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