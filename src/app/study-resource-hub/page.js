"use client"
import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen, Video, FileText, CheckSquare, BarChart3, MessageSquare,
  Users, FileCheck, ScanLine, Sparkles, Search, Bell, Globe, Moon, Sun,
  Menu, X, ChevronRight, Star, ShieldCheck, Calendar, Clock, Send,
  Play, Mic, MicOff, VideoOff, PhoneOff, Upload, Download, CheckCircle2,
  AlertCircle, Plus, ArrowRight, ArrowLeft, Award, Filter, ThumbsUp,
  ThumbsDown, Flag, Bookmark, GraduationCap, Briefcase, Wand2, Eye,
  Layers, Sliders, Calculator, Trash2, Edit3, RefreshCw, Zap, Brain,
  FolderOpen, FileSpreadsheet, Languages, HelpCircle, Share2, Printer,
  Library, BookMarked, Timer, ClipboardCheck, TrendingUp, Flame,
  FileQuestion, Check, ExternalLink, Layers as LayersIcon, Compass
} from 'lucide-react';

// ============================================================================
// EDUVERSE AI & CAMPUSVERSE STUDY RESOURCE HUB (MODULES 11-23)
// ============================================================================

const MODULES_META = [
  {
    id: 'tutor-connect',
    num: '11',
    title: 'TutorConnect',
    subtitle: 'Online Learning',
    bnDesc: 'শিক্ষক ও শিক্ষার্থীদের মধ্যে Online Tutoring Platform।',
    color: 'from-indigo-500 to-blue-600',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    icon: Video,
    features: [
      'Teacher/Tutor Profile & Verification',
      'Subject-wise Tutor Search',
      'Online Video Class',
      'Live Chat & Doubt Solving',
      'Class Booking & Scheduling',
      'Tutor Rating & Reviews',
      'Session History',
      'AI Tutor Recommendation',
    ],
  },
  {
    id: 'documind',
    num: '12',
    title: 'DocuMind',
    subtitle: 'AI Document Intelligence',
    bnDesc: 'PDF, DOCX, PPT এবং অন্যান্য শিক্ষামূলক ফাইল নিয়ে AI-এর মাধ্যমে কাজ করা।',
    color: 'from-violet-500 to-purple-600',
    badgeBg: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
    icon: FileText,
    features: [
      'PDF/DOCX/PPT Upload',
      'AI Document Summarization',
      'Ask Questions from PDF',
      'Important Topic Extraction',
      'Automatic MCQ Generation',
      'Chapter-wise Notes',
      'Text Translation (Bangla ↔ English)',
      'Key Points & Definitions',
      'Document Search',
    ],
  },
  {
    id: 'taskflow',
    num: '13',
    title: 'TaskFlow AI',
    subtitle: 'Smart Productivity',
    bnDesc: 'শিক্ষার্থীদের Assignment, Project ও Daily Study Task পরিচালনা।',
    color: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    icon: CheckSquare,
    features: [
      'Create & Manage Tasks',
      'AI Task Planning',
      'Smart Deadline Reminder',
      'Priority Management',
      'Kanban Board (To Do / Doing / Done)',
      'Assignment Tracking',
      'Study Schedule Generator',
      'Progress Analytics',
      'AI Time Management Suggestions',
    ],
  },
  {
    id: 'academic-tracker',
    num: '14',
    title: 'Academic Performance Tracker',
    subtitle: 'Academic Analytics',
    bnDesc: 'শিক্ষার্থীদের Academic Result ও Performance বিশ্লেষণ।',
    color: 'from-cyan-500 to-sky-600',
    badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    icon: BarChart3,
    features: [
      'Semester-wise GPA/CGPA Tracker',
      'Course-wise Grade Tracking',
      'Attendance Monitoring',
      'Quiz & CT Marks Tracking',
      'Assignment & Presentation Marks',
      'Academic Progress Charts',
      'Weak Subject Detection',
      'AI Performance Analysis',
      'Target CGPA Calculator',
      'Result Prediction (Estimated)',
    ],
  },
  {
    id: 'forum',
    num: '15',
    title: 'Student Discussion Forum',
    subtitle: 'Student Community',
    bnDesc: 'শিক্ষার্থীরা একে অপরের সঙ্গে Academic Discussion করতে পারবে।',
    color: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    icon: MessageSquare,
    features: [
      'Create Discussion Posts',
      'Ask Academic Questions',
      'Answer & Reply',
      'Upvote / Downvote',
      'Subject-wise Discussion',
      'Tag & Category System',
      'Image / PDF Attachment',
      'Search & Filter Discussions',
      'Best Answer Selection',
      'Report & Moderation System',
    ],
  },
  {
    id: 'senior-junior',
    num: '16',
    title: 'Senior-Junior Connect',
    subtitle: 'Mentorship Network',
    bnDesc: 'University Senior ও Junior শিক্ষার্থীদের মধ্যে যোগাযোগের মাধ্যম।',
    color: 'from-pink-500 to-rose-600',
    badgeBg: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
    icon: Users,
    features: [
      'Senior/Junior Profile',
      'Department & Batch-wise Search',
      'Mentor-Mentee Matching',
      'Career Guidance',
      'Academic Mentorship',
      'Private Messaging',
      'Experience Sharing',
      'Resource & Notes Sharing',
      'Mentorship Request',
      'Alumni Networking',
    ],
  },
  {
    id: 'resume-ai',
    num: '17',
    title: 'Resume & CV Intelligence',
    subtitle: 'AI Career Documents',
    bnDesc: 'AI-এর সাহায্যে Professional Resume ও CV তৈরি এবং বিশ্লেষণ।',
    color: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    icon: FileCheck,
    features: [
      'AI Resume Builder',
      'Multiple Professional Templates',
      'Resume PDF Export',
      'AI CV Review',
      'ATS Compatibility Checker',
      'Grammar & Spelling Correction',
      'Job Description Matching',
      'Skill Gap Analysis',
      'AI Resume Improvement Suggestions',
      'Cover Letter Generator',
    ],
  },
  {
    id: 'ocr-scanner',
    num: '18',
    title: 'Handwritten Note Scanner',
    subtitle: 'AI OCR Technology',
    bnDesc: 'হাতে লেখা নোটকে Digital Text ও Searchable Document-এ রূপান্তর।',
    color: 'from-teal-500 to-emerald-600',
    badgeBg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
    icon: ScanLine,
    features: [
      'Camera / Image Upload',
      'Handwriting Recognition (OCR)',
      'Image to Editable Text',
      'Bangla & English Recognition',
      'Mathematical Equation Recognition',
      'Auto Text Correction',
      'Handwritten Notes to PDF',
      'AI Note Summarization',
      'Searchable Notes Library',
      'Organized Subject-wise Storage',
    ],
  },
  {
    id: 'semester-notes',
    num: '19',
    title: 'Semester-wise Notes',
    subtitle: 'Digital Study Library',
    bnDesc: 'প্রতিটি Semester ও Course অনুযায়ী সব Study Materials সাজানো থাকবে।',
    color: 'from-fuchsia-500 via-purple-600 to-indigo-600',
    badgeBg: 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/20',
    icon: Library,
    features: [
      '1st–12th Semester Organization',
      'Department-wise Notes',
      'Course-wise PDF Notes',
      'Chapter-wise Study Materials',
      'Lecture Slides & Handouts',
      'Teacher-provided Materials',
      'Student-uploaded Notes',
      'Search & Filter System',
      'Download & Bookmark',
      'Recently Viewed Materials',
      'Upload & Resource Contribution',
      'File Preview (PDF / DOCX / PPT)',
    ],
  },
  {
    id: 'book-recommendation',
    num: '20',
    title: 'Book Recommendation',
    subtitle: 'Smart Book Discovery',
    bnDesc: 'শিক্ষার্থীর Department, Semester ও Course অনুযায়ী বই সাজেস্ট করবে।',
    color: 'from-amber-500 via-orange-500 to-rose-500',
    badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    icon: BookMarked,
    features: [
      'Course-wise Book Recommendation',
      'Recommended Textbooks',
      'Reference Books',
      'Author & Publisher Information',
      'Book Description & Cover',
      'Beginner / Intermediate / Advanced Level',
      'Book Rating & Reviews',
      'Reading List',
      'Favorite Books',
      'AI-based Book Suggestions',
      'Legal Purchase & Library Links',
    ],
  },
  {
    id: 'exam-prep',
    num: '21',
    title: 'Midterm & Final Preparation',
    subtitle: 'Exam Preparation Center',
    bnDesc: 'Midterm ও Final পরীক্ষার জন্য একটি Complete Preparation System।',
    color: 'from-emerald-500 via-teal-500 to-cyan-600',
    badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    icon: ClipboardCheck,
    features: [
      'Midterm Preparation Section',
      'Final Preparation Section',
      'Course-wise Syllabus',
      'Chapter-wise Important Topics',
      'Short & Broad Questions',
      'MCQ Practice',
      'Model Test',
      'Previous Exam Questions',
      'Exam Countdown',
      'Daily Study Planner',
      'Preparation Progress Tracker',
      'AI Study Plan Generator',
      'AI Topic Explanation',
    ],
  },
  {
    id: 'question-bank',
    num: '22',
    title: 'Question Bank',
    subtitle: 'Academic Question Repository',
    bnDesc: 'Previous Year Questions ও Practice Questions-এর সংগ্রহ।',
    color: 'from-sky-500 via-blue-600 to-indigo-700',
    badgeBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
    icon: FileQuestion,
    features: [
      'Department-wise Questions',
      'Semester-wise Questions',
      'Course-wise Question Bank',
      'Midterm & Final Questions',
      'CT / Quiz Questions',
      'MCQ Question Repository',
      'Short & Broad Questions',
      'Topic-wise Question Filtering',
      'Question PDF Download',
      'Student Question Submission',
      'Answer & Solution Upload',
      'Bookmark Important Questions',
      'Practice Quiz Mode',
    ],
  },
  {
    id: 'pattern-analysis',
    num: '23',
    title: 'Question Pattern Analysis',
    subtitle: 'AI-powered Exam Analytics',
    bnDesc: 'আগের বছরের প্রশ্ন বিশ্লেষণ করে পরীক্ষার প্রস্তুতিতে সাহায্য করবে।',
    color: 'from-rose-500 via-pink-600 to-purple-700',
    badgeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    icon: TrendingUp,
    features: [
      'Previous Year Question Analysis',
      'Topic-wise Question Frequency',
      'Chapter-wise Marks Distribution',
      'Repeated Question Detection',
      'Common Topic Identification',
      'Short vs Broad Question Analysis',
      'MCQ Pattern Analysis',
      'Year-wise Question Comparison',
      'Topic Importance Ranking',
      'AI-generated Practice Questions',
      'Question Trend Visualization',
      'Preparation Priority Suggestions',
    ],
  },
];

// Custom keyframe animations & colorful UI helper styles injected cleanly
const ANIMATION_STYLES = `
  @keyframes cvFloatSlow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(1.2deg); }
  }
  @keyframes cvPulseGlow {
    0%, 100% { opacity: 0.55; transform: scale(1); }
    50% { opacity: 0.9; transform: scale(1.06); }
  }
  @keyframes cvSlideUp {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes cvBarGrow {
    from { width: 0%; }
  }
  .cv-float { animation: cvFloatSlow 5.5s ease-in-out infinite; }
  .cv-glow { animation: cvPulseGlow 4s ease-in-out infinite; }
  .cv-slide-up { animation: cvSlideUp 0.42s cubic-bezier(0.22, 1, 0.36, 1) both; }
  .cv-bar-grow { animation: cvBarGrow 0.85s cubic-bezier(0.22, 1, 0.36, 1) both; }
`;

// ============================================================================
// REUSABLE FEATURE BREAKDOWN BANNER & CHECKLIST COMPONENT
// ============================================================================
function ModuleHeaderAndFeatures({ mod, lang, onBack, extraAction, onTriggerFeature }) {
  const [showFeatures, setShowFeatures] = useState(true);
  const Icon = mod.icon;

  return (
    <div className="mb-6 space-y-4 cv-slide-up">
      <div className="relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 shadow-lg">
        <div className={`pointer-events-none absolute -right-12 -top-12 w-44 h-44 rounded-full bg-gradient-to-br ${mod.color} opacity-15 blur-2xl cv-glow`} />
        <div className="flex items-start sm:items-center gap-4 relative z-10">
          <button
            onClick={onBack}
            className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-slate-700 dark:text-slate-200 transition-all duration-200 shrink-0 shadow-sm"
            title="Back to Hub"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className={`w-13 h-13 p-3 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white shadow-lg shrink-0 cv-float`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full border ${mod.badgeBg}`}>
                Module {mod.num} · {mod.subtitle}
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                ● {mod.features.length}/{mod.features.length} Interactive Features Live
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              {mod.title}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              {mod.bnDesc}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 relative z-10">
          {extraAction}
          <button
            onClick={() => setShowFeatures(!showFeatures)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-800/80 text-slate-800 dark:text-slate-200 hover:scale-[1.02] transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-fuchsia-500" />
            {showFeatures
              ? (lang === 'bn' ? 'ফিচার লিস্ট লুকান' : 'Hide Feature Breakdown')
              : (lang === 'bn' ? 'সব ফিচার দেখুন' : 'Show Feature Breakdown')}
          </button>
        </div>
      </div>

      {showFeatures && (
        <div className={`bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-5 border border-white/10 shadow-xl cv-slide-up`}>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {lang === 'bn'
                ? `মডিউল ${mod.num} (${mod.title}) — যুক্ত করা সকল ফিচার ও ফাংশন (${mod.features.length}টি)`
                : `Module ${mod.num} (${mod.title}) — Complete Feature & Function Breakdown (${mod.features.length} Items)`}
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-300">
              Click any item to highlight/jump
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {mod.features.map((feat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onTriggerFeature && onTriggerFeature(feat)}
                className="flex items-center justify-between gap-2 bg-white/5 hover:bg-white/15 active:scale-[0.99] border border-white/10 hover:border-cyan-400/40 rounded-2xl px-3.5 py-2.5 text-xs font-semibold text-slate-100 transition-all text-left group"
              >
                <span className="flex items-center gap-2 truncate">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-extrabold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate" title={feat}>{feat}</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MODULE 19: SEMESTER-WISE NOTES (DIGITAL STUDY LIBRARY)
// ============================================================================
function SemesterNotesModule({ lang, onBack, showToast }) {
  const mod = MODULES_META.find((m) => m.id === 'semester-notes');
  const semesters = ['All', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
  const [selectedSem, setSelectedSem] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');
  const [sourceFilter, setSourceFilter] = useState('All'); // 'All' | 'Teacher' | 'Student'
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState([1, 3]);
  const [recentlyViewed, setRecentlyViewed] = useState([
    { id: 1, title: 'Data Structures & Trees Complete Notes', format: 'PDF', viewedAt: '12m ago' },
  ]);
  const [previewNote, setPreviewNote] = useState(null);
  const [previewPage, setPreviewPage] = useState(1);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Upload form state
  const [upTitle, setUpTitle] = useState('');
  const [upDept, setUpDept] = useState('CSE');
  const [upSem, setUpSem] = useState('3rd');
  const [upCourse, setUpCourse] = useState('CSE-201 Algorithms');
  const [upFormat, setUpFormat] = useState('PDF');

  const [notesList, setNotesList] = useState([
    {
      id: 1,
      title: 'Data Structures & Trees Complete Notes',
      course: 'CSE-201 · Data Structures',
      chapter: 'Ch 4–6: AVL, Red-Black & Segment Trees',
      dept: 'CSE',
      semester: '3rd',
      source: 'Teacher',
      author: 'Dr. Kamrul Hasan',
      format: 'PDF',
      pages: 18,
      downloads: 420,
      accent: 'from-fuchsia-500 to-purple-600',
      samplePages: [
        'Page 1 — Binary Search Tree & Height Balancing: AVL trees maintain a balance factor in {-1, 0, +1} after every insertion and deletion using single/double rotations.',
        'Page 2 — Segment Trees for Range Queries: Build O(n), Query O(log n), Point/Range Lazy Update O(log n) with clean recursion templates.',
      ],
    },
    {
      id: 2,
      title: 'AC Circuits & Phasor Analysis Lecture Slides',
      course: 'EEE-203 · Circuit Analysis II',
      chapter: 'Ch 3: Sinusoidal Steady-State & Resonance',
      dept: 'EEE',
      semester: '2nd',
      source: 'Teacher',
      author: 'Prof. Farida Begum',
      format: 'PPT',
      pages: 32,
      downloads: 315,
      accent: 'from-amber-500 to-orange-600',
      samplePages: [
        'Slide 1 — Phasor Representation: Converting v(t) = Vm cos(ωt + θ) into complex phasor V = Vm∠θ simplifies differential equations into phasor algebra.',
        'Slide 2 — Series vs Parallel Resonance: Quality factor Q = ω₀L/R determines bandwidth BW = ω₀/Q.',
      ],
    },
    {
      id: 3,
      title: 'Marketing Management Case Handout & Summary',
      course: 'MKT-302 · Strategic Marketing',
      chapter: 'Ch 2: STP & Brand Positioning Frameworks',
      dept: 'BBA',
      semester: '5th',
      source: 'Student',
      author: 'Tanvir Sadiq (Batch 22)',
      format: 'DOCX',
      pages: 11,
      downloads: 198,
      accent: 'from-emerald-500 to-teal-600',
      samplePages: [
        'Section 1 — Segmentation & Targeting: Demographic, psychographic, and behavioral variables tailored for FMCG & EdTech markets.',
        'Section 2 — Perceptual Mapping: Positioning value propositions against competitors using price vs differentiation axes.',
      ],
    },
    {
      id: 4,
      title: 'Modernist Poetry & Literary Criticism Notes',
      course: 'ENG-401 · 20th Century Literature',
      chapter: 'Ch 1: T.S. Eliot, W.B. Yeats & Symbolism',
      dept: 'English',
      semester: '7th',
      source: 'Student',
      author: 'Mehjabin Kabir',
      format: 'PDF',
      pages: 14,
      downloads: 142,
      accent: 'from-cyan-500 to-blue-600',
      samplePages: [
        'Page 1 — Objective Correlative & Tradition: How modernist poets compressed myth, fragment, and urban alienation into dense imagery.',
        'Page 2 — Key Exam Quotes & Critical Analysis: Annotated passages with thematic breakdowns.',
      ],
    },
  ]);

  const filteredNotes = notesList.filter((n) => {
    const semOk = selectedSem === 'All' || n.semester === selectedSem;
    const deptOk = selectedDept === 'All' || n.dept === selectedDept;
    const srcOk = sourceFilter === 'All' || n.source === sourceFilter;
    const q = searchQuery.toLowerCase();
    const qOk =
      !q ||
      n.title.toLowerCase().includes(q) ||
      n.course.toLowerCase().includes(q) ||
      n.chapter.toLowerCase().includes(q) ||
      n.author.toLowerCase().includes(q);
    return semOk && deptOk && srcOk && qOk;
  });

  const openPreview = (note) => {
    setPreviewNote(note);
    setPreviewPage(1);
    setRecentlyViewed((prev) => [
      { id: note.id, title: note.title, format: note.format, viewedAt: 'Just now' },
      ...prev.filter((item) => item.id !== note.id).slice(0, 4),
    ]);
  };

  const toggleBookmark = (id) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    showToast('Updated bookmarked study materials!');
  };

  const handleDownload = (note) => {
    setNotesList((prev) =>
      prev.map((item) => (item.id === note.id ? { ...item, downloads: item.downloads + 1 } : item))
    );
    showToast(`Downloading "${note.title}" (${note.format})...`);
  };

  const handleContributeUpload = (e) => {
    e.preventDefault();
    if (!upTitle.trim()) return;
    const created = {
      id: Date.now(),
      title: upTitle,
      course: upCourse,
      chapter: 'Chapter 1–3: Complete Study Material',
      dept: upDept,
      semester: upSem,
      source: 'Student',
      author: 'You (Contributor)',
      format: upFormat,
      pages: 12,
      downloads: 1,
      accent: 'from-indigo-500 via-purple-500 to-pink-500',
      samplePages: [
        `Page 1 — ${upTitle}: Contributed by You for ${upDept} (${upSem} Semester) — ${upCourse}.`,
        'Page 2 — Summary Points & Practice Exercises: Key takeaways organized for quick revision.',
      ],
    };
    setNotesList([created, ...notesList]);
    setUpTitle('');
    setShowUploadModal(false);
    showToast(`Published "${created.title}" to Semester-wise Notes Library!`);
  };

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        onTriggerFeature={(feat) => {
          if (feat.toLowerCase().includes('upload')) setShowUploadModal(true);
          else if (feat.toLowerCase().includes('preview') && notesList[0]) openPreview(notesList[0]);
          else showToast(`Feature active: ${feat}`);
        }}
        extraAction={
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:scale-[1.02]"
          >
            <Upload className="w-4 h-4" />
            Upload & Contribute Note
          </button>
        }
      />

      {/* 1st - 12th Semester Pill Strip */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 mb-5 shadow-sm">
        <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-slate-500">
          <LayersIcon className="w-3.5 h-3.5 text-fuchsia-500" />
          1st – 12th Semester Organization
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {semesters.map((sem) => (
            <button
              key={sem}
              onClick={() => setSelectedSem(sem)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedSem === sem
                  ? 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-md shadow-fuchsia-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {sem === 'All' ? 'All Semesters' : `${sem} Sem`}
            </button>
          ))}
        </div>
      </div>

      {/* Department, Source Type & Search Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by course, chapter, topic, or author..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 shadow-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', 'CSE', 'EEE', 'BBA', 'English'].map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedDept === dept
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {dept === 'All' ? 'All Depts' : dept}
            </button>
          ))}
        </div>

        <div className="flex gap-1.5 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
          {[
            { id: 'All', label: 'All Sources' },
            { id: 'Teacher', label: 'Teacher Provided' },
            { id: 'Student', label: 'Student Uploaded' },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setSourceFilter(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                sourceFilter === s.id
                  ? 'bg-fuchsia-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid + Recently Viewed Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredNotes.map((note) => {
            const isBookmarked = bookmarkedIds.includes(note.id);
            return (
              <div
                key={note.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-fuchsia-500/50 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cv-slide-up"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${note.accent} text-white`}>
                        {note.format} · {note.pages}p
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {note.dept} · {note.semester} Sem
                      </span>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        note.source === 'Teacher'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                      }`}>
                        {note.source}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleBookmark(note.id)}
                      className={`p-2 rounded-xl transition-colors ${
                        isBookmarked
                          ? 'bg-amber-500/15 text-amber-500'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-amber-500'
                      }`}
                      title="Bookmark Note"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>

                  <p className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400">{note.course}</p>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white mt-0.5">{note.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5">{note.chapter}</p>
                  <p className="text-[11px] text-slate-500 mt-2">
                    By <strong className="text-slate-700 dark:text-slate-300">{note.author}</strong> · {note.downloads} downloads
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => openPreview(note)}
                    className="flex-1 py-2 px-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> Preview {note.format}
                  </button>
                  <button
                    onClick={() => handleDownload(note)}
                    className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Sidebar: Recently Viewed & Bookmarked Count */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-fuchsia-500" /> Recently Viewed Materials
            </h3>
            <div className="space-y-2.5">
              {recentlyViewed.map((rv, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">
                  <p className="font-bold text-slate-800 dark:text-slate-200 line-clamp-1">{rv.title}</p>
                  <span className="text-[11px] text-slate-500">{rv.format} · {rv.viewedAt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-600 to-purple-700 text-white rounded-3xl p-5 shadow-lg">
            <div className="text-xs font-bold uppercase tracking-wider text-fuchsia-200">Saved Bookmarks</div>
            <div className="text-3xl font-extrabold mt-1">{bookmarkedIds.length} Notes</div>
            <p className="text-xs text-fuchsia-100 mt-1 opacity-90">
              Quick access to your starred lecture slides, handouts, and chapter notes.
            </p>
          </div>
        </div>
      </div>

      {/* File Preview Modal (PDF / DOCX / PPT) */}
      {previewNote && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl cv-slide-up">
            <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-fuchsia-500/15 text-fuchsia-600">
                  {previewNote.format} Document Viewer
                </span>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mt-1">{previewNote.title}</h3>
                <p className="text-xs text-slate-500">{previewNote.course} · {previewNote.author}</p>
              </div>
              <button onClick={() => setPreviewNote(null)} className="p-1.5 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-5 p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-800/80 border border-amber-200/70 dark:border-slate-700 min-h-[180px] flex flex-col justify-between">
              <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                {previewNote.samplePages[(previewPage - 1) % previewNote.samplePages.length]}
              </p>
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-700 text-xs">
                <span className="font-bold text-slate-500">
                  Page {previewPage} of {previewNote.samplePages.length} (Preview)
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPreviewPage(1)}
                    className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 font-bold"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => setPreviewPage(previewPage === 1 ? 2 : 1)}
                    className="px-3 py-1 rounded-lg bg-fuchsia-600 text-white font-bold"
                  >
                    Next Page
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleDownload(previewNote)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" /> Download {previewNote.format}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload & Contribute Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl cv-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Upload & Contribute Study Note</h3>
              <button onClick={() => setShowUploadModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleContributeUpload} className="space-y-3">
              <input
                type="text"
                value={upTitle}
                onChange={(e) => setUpTitle(e.target.value)}
                placeholder="Note or slide title..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white"
              />
              <input
                type="text"
                value={upCourse}
                onChange={(e) => setUpCourse(e.target.value)}
                placeholder="Course code & name..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
              />
              <div className="grid grid-cols-3 gap-2">
                <select value={upDept} onChange={(e) => setUpDept(e.target.value)} className="px-2.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                  <option>CSE</option>
                  <option>EEE</option>
                  <option>BBA</option>
                  <option>English</option>
                </select>
                <select value={upSem} onChange={(e) => setUpSem(e.target.value)} className="px-2.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                  {semesters.filter((s) => s !== 'All').map((s) => <option key={s}>{s}</option>)}
                </select>
                <select value={upFormat} onChange={(e) => setUpFormat(e.target.value)} className="px-2.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                  <option>PDF</option>
                  <option>DOCX</option>
                  <option>PPT</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold text-xs">
                Publish to Library
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MODULE 20: BOOK RECOMMENDATION (SMART BOOK DISCOVERY)
// ============================================================================
function BookRecommendationModule({ lang, onBack, showToast }) {
  const mod = MODULES_META.find((m) => m.id === 'book-recommendation');
  const [levelFilter, setLevelFilter] = useState('All');
  const [deptFilter, setDeptFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [readingList, setReadingList] = useState([1]);
  const [favorites, setFavorites] = useState([1, 2]);
  const [activeBookDetail, setActiveBookDetail] = useState(null);
  const [aiSuggestion, setAiSuggestion] = useState(null);

  const books = [
    {
      id: 1,
      title: 'Introduction to Algorithms (CLRS)',
      author: 'Cormen, Leiserson, Rivest & Stein',
      publisher: 'MIT Press',
      category: 'Recommended Textbook',
      dept: 'CSE',
      semester: '3rd–4th Sem',
      course: 'CSE-201 · Algorithms',
      level: 'Intermediate',
      rating: 4.9,
      coverGradient: 'from-amber-500 via-orange-600 to-rose-600',
      description: 'Comprehensive guide to modern algorithms covering dynamic programming, graph algorithms, greedy methods, and NP-completeness.',
      reviews: ['Gold standard for algorithm proofs and interview prep.', 'Clear pseudocode and asymptotic complexity analysis.'],
      libraryLink: 'Central University Library · Shelf A-14',
      purchaseLabel: 'Official MIT Press / Legal E-Book',
    },
    {
      id: 2,
      title: 'Fundamentals of Electric Circuits',
      author: 'Charles K. Alexander & Matthew N. O. Sadiku',
      publisher: 'McGraw-Hill Education',
      category: 'Recommended Textbook',
      dept: 'EEE',
      semester: '1st–2nd Sem',
      course: 'EEE-101 · Circuit Analysis',
      level: 'Beginner',
      rating: 4.8,
      coverGradient: 'from-cyan-500 via-blue-600 to-indigo-700',
      description: 'Accessible introduction to nodal/mesh analysis, operational amplifiers, AC phasors, and Laplace transforms with rich worked examples.',
      reviews: ['Best starter book for circuit theorems.', 'Great end-of-chapter problems for exam practice.'],
      libraryLink: 'Engineering Wing · Shelf E-08',
      purchaseLabel: 'McGraw-Hill Digital / Campus Store',
    },
    {
      id: 3,
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      publisher: "O'Reilly Media",
      category: 'Reference Book',
      dept: 'CSE',
      semester: '7th–8th Sem',
      course: 'CSE-410 · Distributed Systems',
      level: 'Advanced',
      rating: 4.97,
      coverGradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      description: 'Deep dive into replication, partitioning, consensus, batch & stream processing, and reliable distributed storage engines.',
      reviews: ['Essential reading for modern software architecture.', 'Crystal-clear explanations of CAP, Raft, and Paxos.'],
      libraryLink: 'Research Reference Desk · Shelf R-22',
      purchaseLabel: "O'Reilly Learning Platform",
    },
    {
      id: 4,
      title: 'Principles of Corporate Finance',
      author: 'Brealey, Myers & Allen',
      publisher: 'McGraw-Hill',
      category: 'Reference Book',
      dept: 'BBA',
      semester: '5th–6th Sem',
      course: 'FIN-301 · Corporate Finance',
      level: 'Intermediate',
      rating: 4.7,
      coverGradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      description: 'Covers valuation, capital budgeting, risk and return, capital structure, and corporate governance using real-world financial cases.',
      reviews: ['Strong foundation for finance majors and case competitions.', 'Practical NPV & WACC walkthroughs.'],
      libraryLink: 'Business Library · Shelf B-05',
      purchaseLabel: 'Authorized Academic Edition',
    },
  ];

  const filteredBooks = books.filter((b) => {
    const lvlOk = levelFilter === 'All' || b.level === levelFilter;
    const deptOk = deptFilter === 'All' || b.dept === deptFilter;
    const q = search.toLowerCase();
    const qOk =
      !q ||
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.course.toLowerCase().includes(q);
    return lvlOk && deptOk && qOk;
  });

  const generateAiBookSuggestion = () => {
    setAiSuggestion({
      book: 'Clean Code & Pragmatic Problem Solving Companion',
      reason:
        'Based on your selected CSE & Intermediate track, pairing CLRS with hands-on system design & code craftsmanship accelerates both course grades and internship readiness.',
    });
    showToast('AI Book Suggestion generated for your academic profile!');
  };

  const toggleReadingList = (id) => {
    setReadingList((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    showToast('Updated Reading List!');
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    showToast('Updated Favorite Books!');
  };

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        onTriggerFeature={(feat) => {
          if (feat.toLowerCase().includes('ai')) generateAiBookSuggestion();
          else if (books[0]) setActiveBookDetail(books[0]);
        }}
        extraAction={
          <button
            onClick={generateAiBookSuggestion}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-lg shadow-amber-500/25 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            AI Book Suggestion
          </button>
        }
      />

      {aiSuggestion && (
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-rose-500/15 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cv-slide-up">
          <div>
            <span className="text-[11px] font-extrabold uppercase text-amber-600 dark:text-amber-400">
              ✨ AI Smart Book Pick
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{aiSuggestion.book}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{aiSuggestion.reason}</p>
          </div>
          <button
            onClick={() => setAiSuggestion(null)}
            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Search, Department & Difficulty Level Filters */}
      <div className="flex flex-col lg:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books by title, author, or course..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', 'CSE', 'EEE', 'BBA'].map((d) => (
            <button
              key={d}
              onClick={() => setDeptFilter(d)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                deptFilter === d
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {d === 'All' ? 'All Depts' : d}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                levelFilter === lvl
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBooks.map((book) => {
          const inList = readingList.includes(book.id);
          const isFav = favorites.includes(book.id);
          return (
            <div
              key={book.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-4 cv-slide-up"
            >
              {/* Illustrated Book Cover */}
              <div className={`w-full sm:w-32 h-40 sm:h-auto rounded-2xl bg-gradient-to-br ${book.coverGradient} p-4 text-white flex flex-col justify-between shrink-0 shadow-md`}>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black/25 px-2 py-0.5 rounded w-fit">
                  {book.level}
                </span>
                <div>
                  <BookOpen className="w-6 h-6 mb-1.5 opacity-90" />
                  <p className="text-xs font-extrabold leading-snug line-clamp-3">{book.title}</p>
                </div>
                <span className="text-[10px] opacity-85 font-semibold">{book.dept}</span>
              </div>

              {/* Book Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                      {book.category} · {book.course}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-extrabold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500" /> {book.rating}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white mt-1">{book.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {book.author} · <span className="font-semibold">{book.publisher}</span> ({book.semester})
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">{book.description}</p>
                  <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold mt-2">
                    🏛️ {book.libraryLink}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => toggleReadingList(book.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      inList
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {inList ? '✓ Reading List' : '+ Reading List'}
                  </button>
                  <button
                    onClick={() => toggleFavorite(book.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      isFav
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {isFav ? '♥ Favorite' : '♡ Favorite'}
                  </button>
                  <button
                    onClick={() => setActiveBookDetail(book)}
                    className="ml-auto px-3 py-1.5 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 text-xs font-bold hover:bg-amber-500/25"
                  >
                    Reviews & Links →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Book Reviews & Legal Purchase/Library Drawer Modal */}
      {activeBookDetail && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl cv-slide-up">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="text-xs font-bold text-amber-600">{activeBookDetail.category}</span>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">{activeBookDetail.title}</h3>
                <p className="text-xs text-slate-500">{activeBookDetail.author} · {activeBookDetail.publisher}</p>
              </div>
              <button onClick={() => setActiveBookDetail(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 mb-4">{activeBookDetail.description}</p>
            <h4 className="text-xs font-extrabold uppercase text-slate-500 mb-2">Student & Peer Reviews</h4>
            <div className="space-y-2 mb-4">
              {activeBookDetail.reviews.map((rev, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs text-slate-700 dark:text-slate-300">
                  “{rev}”
                </div>
              ))}
            </div>
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between gap-2 text-xs">
              <div>
                <p className="font-bold text-indigo-700 dark:text-indigo-300">{activeBookDetail.libraryLink}</p>
                <p className="text-slate-600 dark:text-slate-400">{activeBookDetail.purchaseLabel}</p>
              </div>
              <button
                onClick={() => showToast(`Opened legal resource link for "${activeBookDetail.title}"`)}
                className="px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-bold flex items-center gap-1 shrink-0"
              >
                Access <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MODULE 21: MIDTERM & FINAL PREPARATION (EXAM PREPARATION CENTER)
// ============================================================================
function ExamPrepModule({ lang, onBack, showToast }) {
  const mod = MODULES_META.find((m) => m.id === 'exam-prep');
  const [examStage, setExamStage] = useState('midterm'); // 'midterm' | 'final'
  const [prepProgress, setPrepProgress] = useState(68);
  const [selectedMcq, setSelectedMcq] = useState({});
  const [aiExplanation, setAiExplanation] = useState(
    'Deadlock occurs when four Coffman conditions hold simultaneously: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Breaking any one condition prevents deadlock.'
  );
  const [aiStudyPlan, setAiStudyPlan] = useState(null);
  const [studyTasks, setStudyTasks] = useState([
    { id: 1, label: 'Complete Syllabus Ch 1–3 Summary & Formula Sheet', done: true },
    { id: 2, label: 'Solve 25 MCQs + 3 Broad Questions from Previous Exam', done: false },
    { id: 3, label: 'Take Timed Model Test & Review Weak Topics', done: false },
  ]);

  const mcqs = [
    {
      q: 'Which scheduling algorithm can cause starvation without aging?',
      options: ['Round Robin', 'Shortest Job First (SJF)', 'First Come First Served', 'FIFO'],
      ans: 1,
    },
    {
      q: 'In relational databases, Boyce-Codd Normal Form (BCNF) eliminates anomalies caused by:',
      options: ['Non-trivial functional dependencies where LHS is not a superkey', 'Multi-valued attributes only', 'Foreign key cascades', 'Index fragmentation'],
      ans: 0,
    },
  ];

  const generatePlan = () => {
    setAiStudyPlan([
      `Day 1 (${examStage.toUpperCase()}): Master Syllabus High-Weightage Chapters + AI Topic Explanations.`,
      `Day 2 (${examStage.toUpperCase()}): Practice Short & Broad Questions + Past Papers.`,
      `Day 3 (${examStage.toUpperCase()}): Full Model Test + Error Log Revision.`,
    ]);
    showToast(`Generated ${examStage.toUpperCase()} AI Study Plan!`);
  };

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        onTriggerFeature={(feat) => {
          if (feat.toLowerCase().includes('plan')) generatePlan();
          else showToast(`Exam Prep feature ready: ${feat}`);
        }}
        extraAction={
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
            <button
              onClick={() => setExamStage('midterm')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                examStage === 'midterm'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Midterm Prep
            </button>
            <button
              onClick={() => setExamStage('final')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                examStage === 'final'
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Final Prep
            </button>
          </div>
        }
      />

      {/* Countdown + Progress Tracker Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-5 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">
              {examStage === 'midterm' ? 'Midterm Exam Countdown' : 'Final Exam Countdown'}
            </span>
            <div className="text-3xl font-extrabold mt-1">
              {examStage === 'midterm' ? '06 Days : 14 Hrs' : '19 Days : 08 Hrs'}
            </div>
            <p className="text-xs text-emerald-100 mt-1">Course-wise Syllabus & Past Papers Ready</p>
          </div>
          <Timer className="w-10 h-10 text-emerald-200 cv-float shrink-0" />
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-extrabold uppercase text-slate-500">Preparation Progress</span>
            <span className="text-xl font-extrabold text-emerald-600">{prepProgress}%</span>
          </div>
          <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500" style={{ width: `${prepProgress}%` }} />
          </div>
          <button
            onClick={() => setPrepProgress(Math.min(100, prepProgress + 8))}
            className="text-xs font-bold text-emerald-600 hover:underline"
          >
            + Log Completed Study Block (+8%)
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-extrabold uppercase text-slate-500">AI Study Plan Generator</span>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Build a focused {examStage} revision roadmap with model tests & previous questions.
            </p>
          </div>
          <button
            onClick={generatePlan}
            className="mt-3 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <Wand2 className="w-4 h-4" /> Generate {examStage.toUpperCase()} Study Plan
          </button>
        </div>
      </div>

      {aiStudyPlan && (
        <div className="mb-6 p-5 rounded-3xl bg-emerald-500/10 border border-emerald-500/25 cv-slide-up">
          <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-300 mb-2">
            ✨ Personalized {examStage.toUpperCase()} AI Study Plan
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
            {aiStudyPlan.map((step, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {step}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Syllabus, Important Topics, Short/Broad & Daily Planner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
            Course-wise Syllabus & Chapter-wise Important Topics
          </h3>
          {[
            { ch: 'Unit 1: Process Synchronization & Deadlocks', qType: 'Short & Broad Qs · Previous 2024/2025' },
            { ch: 'Unit 2: Virtual Memory, Paging & Page Replacement', qType: 'Broad Qs + Numerical Model Test' },
            { ch: 'Unit 3: Normalization (1NF–BCNF) & Transactions', qType: 'High-Priority Topic · Previous Exam' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <div>
                <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{item.ch}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{item.qType}</p>
              </div>
              <button
                onClick={() => {
                  setAiExplanation(`AI Explanation for "${item.ch}": Focus on core definitions, step-by-step diagrams, and edge cases seen in previous ${examStage} papers.`);
                  showToast('AI Topic Explanation updated!');
                }}
                className="px-3 py-1.5 rounded-xl bg-teal-600/15 text-teal-700 dark:text-teal-300 text-xs font-bold shrink-0"
              >
                AI Explain
              </button>
            </div>
          ))}

          <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
            <span className="text-[11px] font-extrabold uppercase text-indigo-600 dark:text-indigo-400">
              AI Topic Explanation
            </span>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">{aiExplanation}</p>
          </div>
        </div>

        {/* MCQ Practice & Daily Study Planner */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">MCQ Practice & Model Test</h3>
              <button
                onClick={() => showToast('Model Test Mode started — 15 Questions · 20 Mins!')}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
              >
                Start Model Test
              </button>
            </div>
            <div className="space-y-4">
              {mcqs.map((m, qIdx) => (
                <div key={qIdx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                  <p className="text-xs font-bold text-slate-900 dark:text-white mb-2">
                    {qIdx + 1}. {m.q}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {m.options.map((opt, oIdx) => {
                      const chosen = selectedMcq[qIdx];
                      const right = oIdx === m.ans;
                      let cls = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
                      if (chosen !== undefined) {
                        if (right) cls = 'bg-emerald-600 text-white border-emerald-600';
                        else if (chosen === oIdx) cls = 'bg-rose-600 text-white border-rose-600';
                      }
                      return (
                        <button
                          key={oIdx}
                          onClick={() => setSelectedMcq({ ...selectedMcq, [qIdx]: oIdx })}
                          className={`p-2 rounded-xl border text-left text-[11px] font-semibold ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-3">Daily Study Planner Checklist</h3>
            <div className="space-y-2">
              {studyTasks.map((st) => (
                <button
                  key={st.id}
                  onClick={() =>
                    setStudyTasks(studyTasks.map((item) => (item.id === st.id ? { ...item, done: !item.done } : item)))
                  }
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-left text-xs"
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center ${st.done ? 'bg-emerald-600 text-white' : 'border border-slate-300 dark:border-slate-600'}`}>
                    {st.done && <Check className="w-3.5 h-3.5" />}
                  </span>
                  <span className={st.done ? 'line-through text-slate-400' : 'font-semibold text-slate-800 dark:text-slate-200'}>
                    {st.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MODULE 22: QUESTION BANK (ACADEMIC QUESTION REPOSITORY)
// ============================================================================
function QuestionBankModule({ lang, onBack, showToast }) {
  const mod = MODULES_META.find((m) => m.id === 'question-bank');
  const [examTypeFilter, setExamTypeFilter] = useState('All'); // 'All' | 'Midterm' | 'Final' | 'CT/Quiz'
  const [formatFilter, setFormatFilter] = useState('All'); // 'All' | 'MCQ' | 'Short' | 'Broad'
  const [topicSearch, setTopicSearch] = useState('');
  const [bookmarkedQ, setBookmarkedQ] = useState([1]);
  const [newQText, setNewQText] = useState('');
  const [newQSol, setNewQSol] = useState('');
  const [newQExam, setNewQExam] = useState('Midterm');
  const [newQFormat, setNewQFormat] = useState('Broad');
  const [quizMode, setQuizMode] = useState(false);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      dept: 'CSE',
      semester: '2nd Sem',
      course: 'CSE-111 · OOP',
      examType: 'Final',
      format: 'Broad',
      topic: 'Polymorphism & Virtual Functions',
      year: '2025',
      question: 'Explain runtime polymorphism with a C++/Java example showing dynamic method dispatch and memory overhead.',
      solution: 'Runtime polymorphism resolves method calls dynamically via vtable/dynamic dispatch based on the actual object type at runtime.',
    },
    {
      id: 2,
      dept: 'EEE',
      semester: '3rd Sem',
      course: 'EEE-205 · Signals & Systems',
      examType: 'Midterm',
      format: 'Short',
      topic: 'Fourier Transform Properties',
      year: '2025',
      question: 'State and prove the time-shifting property of Continuous-Time Fourier Transform.',
      solution: 'If x(t) ⇄ X(jω), then x(t - t₀) ⇄ e^(-jωt₀) X(jω) by substituting τ = t - t₀ in the synthesis/analysis integral.',
    },
    {
      id: 3,
      dept: 'CSE',
      semester: '2nd Sem',
      course: 'CSE-111 · OOP',
      examType: 'CT/Quiz',
      format: 'MCQ',
      topic: 'Constructors & Encapsulation',
      year: '2024',
      question: 'Which access modifier restricts member access strictly within the declaring class?',
      solution: 'private access modifier restricts visibility to members of the same class.',
    },
  ]);

  const filteredQuestions = questions.filter((q) => {
    const exOk = examTypeFilter === 'All' || q.examType === examTypeFilter;
    const fmtOk = formatFilter === 'All' || q.format === formatFilter;
    const s = topicSearch.toLowerCase();
    const sOk =
      !s ||
      q.question.toLowerCase().includes(s) ||
      q.topic.toLowerCase().includes(s) ||
      q.course.toLowerCase().includes(s);
    return exOk && fmtOk && sOk;
  });

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (!newQText.trim()) return;
    setQuestions([
      {
        id: Date.now(),
        dept: 'CSE',
        semester: '2nd Sem',
        course: 'CSE-111 · OOP',
        examType: newQExam,
        format: newQFormat,
        topic: 'Student Contributed Topic',
        year: '2026',
        question: newQText,
        solution: newQSol.trim() || 'Community solution pending verification.',
      },
      ...questions,
    ]);
    setNewQText('');
    setNewQSol('');
    showToast('Added new question & solution to Question Bank!');
  };

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        onTriggerFeature={(feat) => {
          if (feat.toLowerCase().includes('quiz')) setQuizMode(!quizMode);
          else if (feat.toLowerCase().includes('pdf')) showToast('Preparing Question Bank PDF Sheet...');
          else showToast(`Question Bank feature: ${feat}`);
        }}
        extraAction={
          <div className="flex gap-2">
            <button
              onClick={() => setQuizMode(!quizMode)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md"
            >
              <Play className="w-4 h-4" />
              {quizMode ? 'Exit Quiz Mode' : 'Practice Quiz Mode'}
            </button>
            <button
              onClick={() => {
                showToast('Exporting filtered questions to PDF...');
                window.print();
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
            >
              <Download className="w-4 h-4" /> PDF
            </button>
          </div>
        }
      />

      {quizMode && (
        <div className="mb-6 p-5 rounded-3xl bg-gradient-to-r from-sky-600/15 via-blue-600/15 to-indigo-600/15 border border-sky-500/30 cv-slide-up">
          <h3 className="font-extrabold text-sm text-sky-700 dark:text-sky-300 mb-2">
            🎯 Interactive Practice Quiz Mode Active ({filteredQuestions.length} Questions Loaded)
          </h3>
          <p className="text-xs text-slate-700 dark:text-slate-300">
            Attempt each question mentally or on paper, then click <strong>“Reveal Solution”</strong> on any card below to verify your answer.
          </p>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={topicSearch}
            onChange={(e) => setTopicSearch(e.target.value)}
            placeholder="Filter by topic, course, or question keywords..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {['All', 'Midterm', 'Final', 'CT/Quiz'].map((ex) => (
            <button
              key={ex}
              onClick={() => setExamTypeFilter(ex)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold ${
                examTypeFilter === ex
                  ? 'bg-sky-600 text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {ex}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {['All', 'MCQ', 'Short', 'Broad'].map((fmt) => (
            <button
              key={fmt}
              onClick={() => setFormatFilter(fmt)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold ${
                formatFilter === fmt
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Submit Question & Solution Form */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 h-fit shadow-sm">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Plus className="w-4 h-4 text-sky-500" /> Student Question & Solution Submission
          </h3>
          <form onSubmit={handleSubmitQuestion} className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <select value={newQExam} onChange={(e) => setNewQExam(e.target.value)} className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                <option>Midterm</option>
                <option>Final</option>
                <option>CT/Quiz</option>
              </select>
              <select value={newQFormat} onChange={(e) => setNewQFormat(e.target.value)} className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                <option>Broad</option>
                <option>Short</option>
                <option>MCQ</option>
              </select>
            </div>
            <textarea
              rows={3}
              value={newQText}
              onChange={(e) => setNewQText(e.target.value)}
              placeholder="Enter previous year or practice question..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
            />
            <textarea
              rows={2}
              value={newQSol}
              onChange={(e) => setNewQSol(e.target.value)}
              placeholder="Answer / solution explanation (optional)..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
            />
            <button type="submit" className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold">
              Submit to Question Bank
            </button>
          </form>
        </div>

        {/* Questions List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredQuestions.map((item) => {
            const isBm = bookmarkedQ.includes(item.id);
            return (
              <QuestionCardItem
                key={item.id}
                item={item}
                isBookmarked={isBm}
                defaultShowSol={quizMode}
                onToggleBookmark={() => {
                  setBookmarkedQ((prev) =>
                    prev.includes(item.id) ? prev.filter((x) => x !== item.id) : [...prev, item.id]
                  );
                  showToast('Bookmarked question updated!');
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function QuestionCardItem({ item, isBookmarked, defaultShowSol, onToggleBookmark }) {
  const [showSol, setShowSol] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm cv-slide-up">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-400">
            {item.course} · {item.year}
          </span>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            {item.examType} · {item.format}
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {item.topic}
          </span>
        </div>
        <button
          onClick={onToggleBookmark}
          className={`p-2 rounded-xl ${isBookmarked ? 'bg-amber-500/15 text-amber-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
        </button>
      </div>

      <p className="font-bold text-sm text-slate-900 dark:text-white mt-2 leading-relaxed">{item.question}</p>

      <div className="mt-3 flex items-center justify-between">
        <button
          onClick={() => setShowSol(!showSol)}
          className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
        >
          {showSol ? 'Hide Solution' : defaultShowSol ? 'Reveal Solution' : 'View Solution'}
        </button>
      </div>

      {showSol && (
        <div className="mt-3 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
          <strong className="text-emerald-700 dark:text-emerald-300">Solution:</strong> {item.solution}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MODULE 23: QUESTION PATTERN ANALYSIS (AI-POWERED EXAM ANALYTICS)
// ============================================================================
function QuestionPatternAnalysisModule({ lang, onBack, showToast }) {
  const mod = MODULES_META.find((m) => m.id === 'pattern-analysis');
  const [courseKey, setCourseKey] = useState('CSE 111');
  const [customInput, setCustomInput] = useState('');
  const [animKey, setAnimKey] = useState(0);

  const datasets = {
    'CSE 111': {
      courseTitle: 'CSE 111 – Object Oriented Programming',
      repeatedTopicsCount: 12,
      yearsAnalyzed: 5,
      shortVsBroad: '40% Short Questions · 60% Broad Questions',
      mcqPattern: 'Concept + Output Prediction (35%) · Code Snippet Analysis (40%) · Definitions (25%)',
      yearComparison: '2022–2024 focused heavily on basic classes & constructors; 2025–2026 increased emphasis on Polymorphism, Abstract/Interface & Exception/Operator patterns.',
      priorityRank: ['1. Inheritance (90%)', '2. Polymorphism (80%)', '3. Encapsulation (70%)', '4. Constructor (60%)', '5. Operator Overloading (45%)'],
      frequencies: [
        { topic: 'Inheritance', freq: 90, marks: '22 Marks', gradient: 'from-rose-500 to-pink-600' },
        { topic: 'Polymorphism', freq: 80, marks: '18 Marks', gradient: 'from-fuchsia-500 to-purple-600' },
        { topic: 'Encapsulation', freq: 70, marks: '14 Marks', gradient: 'from-indigo-500 to-blue-600' },
        { topic: 'Constructor', freq: 60, marks: '10 Marks', gradient: 'from-cyan-500 to-teal-500' },
        { topic: 'Operator Overloading', freq: 45, marks: '8 Marks', gradient: 'from-amber-500 to-orange-500' },
      ],
      aiPracticeQuestions: [
        'Trace the execution order of base and derived class constructors during multi-level inheritance.',
        'Write a program demonstrating runtime polymorphism with base class pointer/reference.',
        'Overload binary + and stream insertion (<<) operators cleanly while preserving encapsulation.',
      ],
      recommendations: [
        'প্রথমে Inheritance ও Polymorphism পড়ো।',
        'Constructor এবং Encapsulation ভালোভাবে অনুশীলন করো।',
        'Previous Year Questions দিয়ে Practice করো।',
      ],
    },
    'CSE 221': {
      courseTitle: 'CSE 221 – Algorithms & Complexity',
      repeatedTopicsCount: 9,
      yearsAnalyzed: 5,
      shortVsBroad: '30% Short Questions · 70% Broad Questions',
      mcqPattern: 'Time/Space Complexity (50%) · Recurrence & Graph Properties (50%)',
      yearComparison: 'DP & Graph shortest paths appear consistently every year with slight parameter twists.',
      priorityRank: ['1. Dynamic Programming (88%)', '2. Graph & Shortest Path (82%)', '3. Divide & Conquer (75%)', '4. Greedy Algorithms (65%)'],
      frequencies: [
        { topic: 'Dynamic Programming', freq: 88, marks: '24 Marks', gradient: 'from-rose-500 to-orange-500' },
        { topic: 'Graph & Shortest Path', freq: 82, marks: '20 Marks', gradient: 'from-purple-600 to-indigo-600' },
        { topic: 'Divide & Conquer', freq: 75, marks: '15 Marks', gradient: 'from-cyan-500 to-blue-600' },
        { topic: 'Greedy Algorithms', freq: 65, marks: '11 Marks', gradient: 'from-emerald-500 to-teal-600' },
      ],
      aiPracticeQuestions: [
        'Formulate state & recurrence for 0/1 Knapsack and Longest Common Subsequence.',
        'Compare Dijkstra vs Bellman-Ford when negative edge weights exist.',
      ],
      recommendations: [
        'প্রথমে Dynamic Programming ও Graph Traversal/Shortest Path অনুশীলন করো।',
        'Recurrence relation ও complexity proof বারবার লিখে practice করো।',
        'Previous Year Questions দিয়ে Practice করো।',
      ],
    },
  };

  const activeData = datasets[courseKey];

  const handleAnalyzeCustom = (e) => {
    e.preventDefault();
    setAnimKey((k) => k + 1);
    showToast('Updated AI Question Pattern Analytics & animated frequency bars!');
  };

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        onTriggerFeature={(feat) => {
          setAnimKey((k) => k + 1);
          showToast(`Pattern Analysis active: ${feat}`);
        }}
        extraAction={
          <div className="flex gap-2">
            {Object.keys(datasets).map((k) => (
              <button
                key={k}
                onClick={() => {
                  setCourseKey(k);
                  setAnimKey((prev) => prev + 1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  courseKey === k
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        }
      />

      {/* AI Question Analysis Sample Dashboard Header & Metrics */}
      <div className="bg-gradient-to-br from-slate-950 via-rose-950/80 to-indigo-950 text-white rounded-3xl p-6 mb-6 border border-rose-500/25 shadow-xl cv-slide-up">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30">
              AI Question Analysis – Sample Dashboard
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold mt-2">
              COURSE: {activeData.courseTitle}
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              উপরের সংখ্যাগুলো UI demonstration-এর জন্য কাল্পনিক; বাস্তব প্রশ্ন বিশ্লেষণ থেকে তৈরি হবে।
            </p>
          </div>
          <button
            onClick={() => setAnimKey((k) => k + 1)}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold flex items-center gap-1.5 self-start md:self-auto"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Replay Trend Animation
          </button>
        </div>

        {/* Highlighted KPIs: 12 Repeated Topics, 5 Years Analyzed */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs text-rose-300 font-bold">Repeated Topics</span>
            <div className="text-3xl font-extrabold text-white mt-1">{activeData.repeatedTopicsCount}</div>
            <span className="text-[11px] text-slate-400">Detected across past papers</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs text-cyan-300 font-bold">Years Analyzed</span>
            <div className="text-3xl font-extrabold text-white mt-1">{activeData.yearsAnalyzed}</div>
            <span className="text-[11px] text-slate-400">Historical exam cycles</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs text-amber-300 font-bold">Question Mix</span>
            <div className="text-sm font-extrabold text-white mt-2">{activeData.shortVsBroad}</div>
            <span className="text-[11px] text-slate-400">Short vs Broad distribution</span>
          </div>
        </div>
      </div>

      {/* Topic-wise Frequency Bars + AI Recommendation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        <div key={animKey} className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-rose-500" />
            Topic-wise Frequency & Chapter Marks Distribution
          </h3>
          <div className="space-y-4">
            {activeData.frequencies.map((item) => (
              <div key={item.topic} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-900 dark:text-white">{item.topic}</span>
                  <span className="text-slate-500">
                    {item.marks} · <strong className="text-rose-600 dark:text-rose-400">{item.freq}%</strong>
                  </span>
                </div>
                <div className="w-full h-3.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${item.gradient} cv-bar-grow`}
                    style={{ width: `${item.freq}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60">
              <span className="font-extrabold text-indigo-600 dark:text-indigo-400 block mb-1">MCQ Pattern Analysis</span>
              <p className="text-slate-600 dark:text-slate-300">{activeData.mcqPattern}</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60">
              <span className="font-extrabold text-fuchsia-600 dark:text-fuchsia-400 block mb-1">Year-wise Comparison</span>
              <p className="text-slate-600 dark:text-slate-300">{activeData.yearComparison}</p>
            </div>
          </div>
        </div>

        {/* AI Recommendation + Topic Importance Ranking + Practice Questions */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white dark:bg-slate-900 border border-rose-500/30 rounded-3xl p-6 shadow-sm">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-500" /> AI Recommendation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              {activeData.recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <Flame className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-2">
                Topic Importance Ranking
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeData.priorityRank.map((pr, idx) => (
                  <span key={idx} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {pr}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
            <h4 className="font-extrabold text-xs uppercase text-indigo-600 dark:text-indigo-400 mb-2">
              AI-generated Practice Questions
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {activeData.aiPracticeQuestions.map((pq, i) => (
                <li key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  {i + 1}. {pq}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Paste/Upload Past Questions Box + Mandatory Disclaimer */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
        <form onSubmit={handleAnalyzeCustom} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Paste previous year questions or topics to re-run pattern analysis..."
            className="flex-1 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
          />
          <button type="submit" className="px-5 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold">
            Analyze Pattern
          </button>
        </form>

        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
          <strong>গুরুত্বপূর্ণ:</strong> AI কখনো নিশ্চিতভাবে বলতে পারবে না কোন প্রশ্ন পরীক্ষায় আসবে। এটি শুধু পূর্ববর্তী প্রশ্নের ভিত্তিতে সম্ভাব্য গুরুত্বপূর্ণ Topic ও Pattern শনাক্ত করবে।
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN APPLICATION SHELL (NEXT.JS STYLE MULTI-PAGE ROUTER + NAVBAR)
// ============================================================================
export default function App() {
  const [activeRoute, setActiveRoute] = useState('overview'); // 'overview' or module id
  const [lang, setLang] = useState('bn'); // 'bn' | 'en'
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeRoute]);

  const navigateTo = (routeId) => {
    setActiveRoute(routeId);
    setMobileMenuOpen(false);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
        <style>{ANIMATION_STYLES}</style>
        {/* Toast Notification Banner */}
        {toastMsg && (
          <div className="fixed bottom-5 right-5 z-50 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-2xl shadow-2xl border border-indigo-500/30 flex items-center gap-2.5 text-xs font-bold animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* STICKY GLASSMORPHIC TOP NAVBAR */}
        <header className="sticky top-0 z-40 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Brand Logo */}
              <button
                onClick={() => navigateTo('overview')}
                className="flex items-center gap-2.5 text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    EduVerse AI
                  </span>
                  <span className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 -mt-1">
                    শিক্ষাAI · Academic Suite
                  </span>
                </div>
              </button>

              {/* Desktop Quick Module Switcher */}
              <nav className="hidden xl:flex items-center gap-1">
                <button
                  onClick={() => navigateTo('overview')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeRoute === 'overview'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Hub ({MODULES_META.length})
                </button>
                {MODULES_META.slice(-5).map((m) => (
                  <button
                    key={m.id}
                    onClick={() => navigateTo(m.id)}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeRoute === m.id
                        ? 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {m.num}·{m.title.split(' ')[0]}
                  </button>
                ))}
              </nav>

              {/* Right Controls: Language Toggle, Theme Toggle, Mobile Drawer Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
                  className="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-extrabold border border-indigo-500/20 transition-colors"
                  title="Switch Bangla / English"
                >
                  {lang === 'bn' ? 'EN / বাং' : 'বাং / EN'}
                </button>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  title="Toggle Dark/Light Theme"
                >
                  {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="xl:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Responsive Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-1.5">
              <button
                onClick={() => navigateTo('overview')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold ${
                  activeRoute === 'overview'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                🏠 Platform Hub — All Study & Academic Modules
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                {MODULES_META.map((m) => {
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.id}
                      onClick={() => navigateTo(m.id)}
                      className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left ${
                        activeRoute === m.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{m.num} · {m.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        {/* MAIN PAGE CONTENT ROUTER */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {activeRoute === 'overview' && (
            <div className="space-y-8 cv-slide-up">
              {/* Hero Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-fuchsia-950 text-white p-6 sm:p-10 border border-fuchsia-500/30 shadow-2xl">
                <div className="pointer-events-none absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/20 blur-3xl cv-glow" />
                <div className="relative z-10 max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-cyan-300 mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    {lang === 'bn'
                      ? 'CampusVerse Study Resource Hub (১৯–২৩) ও সম্পূর্ণ একাডেমিক স্যুট'
                      : 'CampusVerse · Study Resource Hub (Modules 19–23) & Academic Suite'}
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    {lang === 'bn'
                      ? 'নোট, বই, পরীক্ষার প্রস্তুতি, প্রশ্নব্যাংক ও AI প্যাটার্ন অ্যানালাইসিস — সব একসাথে'
                      : 'Notes Library, Smart Books, Exam Center, Question Bank & AI Pattern Analytics'}
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                    {lang === 'bn'
                      ? 'নিচের যেকোনো মডিউলে ক্লিক করলে সরাসরি সেই মডিউলের পূর্ণাঙ্গ ইন্টারঅ্যাক্টিভ পেজে চলে যাবেন এবং সকল ফিচার সরাসরি ব্যবহার করতে পারবেন।'
                      : 'Click any Study Resource Hub module (19–23) or academic module below to open its interactive workspace with full feature breakdowns.'}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button
                      onClick={() => navigateTo('semester-notes')}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-fuchsia-500/30 transition-all flex items-center gap-2"
                    >
                      19 · Semester-wise Notes <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigateTo('pattern-analysis')}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-rose-500/30 transition-all"
                    >
                      23 · AI Question Pattern Analysis
                    </button>
                  </div>
                </div>
              </div>

              {/* All Modules Interactive Directory Grid */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {lang === 'bn' ? 'সকল মডিউলসমূহ (ক্লিক করে ওপেন করুন)' : 'All Platform Modules (Click to Launch)'}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Every card opens a dedicated interactive page containing all listed features.
                    </p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit">
                    ✓ Animated UI · Responsive All Devices
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {MODULES_META.map((mod) => {
                    const Icon = mod.icon;
                    return (
                      <div
                        key={mod.id}
                        onClick={() => navigateTo(mod.id)}
                        className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-fuchsia-500/60 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full border ${mod.badgeBg}`}>
                              #{mod.num}
                            </span>
                          </div>

                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            {mod.subtitle}
                          </span>
                          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {mod.title}
                          </h3>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                            {mod.bnDesc}
                          </p>

                          {/* Top Features Preview */}
                          <ul className="mt-4 space-y-1.5 border-t border-slate-100 dark:border-slate-800 pt-3">
                            {mod.features.slice(0, 4).map((f, i) => (
                              <li key={i} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                <span className="truncate">{f}</span>
                              </li>
                            ))}
                            <li className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 pl-5">
                              + {mod.features.length - 4} more features inside...
                            </li>
                          </ul>
                        </div>

                        <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                          <span>{lang === 'bn' ? 'মডিউল ওপেন করুন' : 'Open Workspace'}</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeRoute === 'tutor-connect' && (
            <TutorConnectModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'documind' && (
            <DocuMindModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'taskflow' && (
            <TaskFlowModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'academic-tracker' && (
            <AcademicTrackerModule lang={lang} onBack={() => navigateTo('overview')} />
          )}
          {activeRoute === 'forum' && (
            <DiscussionForumModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'senior-junior' && (
            <SeniorJuniorModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'resume-ai' && (
            <ResumeIntelligenceModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'ocr-scanner' && (
            <HandwrittenOcrModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'semester-notes' && (
            <SemesterNotesModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'book-recommendation' && (
            <BookRecommendationModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'exam-prep' && (
            <ExamPrepModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'question-bank' && (
            <QuestionBankModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
          {activeRoute === 'pattern-analysis' && (
            <QuestionPatternAnalysisModule lang={lang} onBack={() => navigateTo('overview')} showToast={showToast} />
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 py-6 text-center text-xs text-slate-500">
          CampusVerse · Study Resource Hub (Modules 19–23) & EduVerse AI Academic Platform
        </footer>
      </div>
    </div>
  );
}