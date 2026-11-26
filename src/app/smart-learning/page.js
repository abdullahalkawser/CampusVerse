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
  FolderOpen, FileSpreadsheet, Languages, HelpCircle, Share2, Printer
} from 'lucide-react';


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
];

// ============================================================================
// REUSABLE FEATURE BREAKDOWN BANNER & CHECKLIST COMPONENT
// ============================================================================
function ModuleHeaderAndFeatures({ mod, lang, onBack, extraAction }) {
  const [showFeatures, setShowFeatures] = useState(true);
  const Icon = mod.icon;

  return (
    <div className="mb-6 space-y-4 animate-fadeIn">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
        <div className="flex items-start sm:items-center gap-4">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shrink-0"
            title="Back to All Modules"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${mod.badgeBg}`}>
                Module {mod.num} · {mod.subtitle}
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                ● {mod.features.length}/{mod.features.length} Features Active
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

        <div className="flex flex-wrap items-center gap-2.5">
          {extraAction}
          <button
            onClick={() => setShowFeatures(!showFeatures)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            {showFeatures
              ? (lang === 'bn' ? 'ফিচার লিস্ট লুকান' : 'Hide Feature Breakdown')
              : (lang === 'bn' ? 'সব ফিচার দেখুন' : 'View Feature Breakdown')}
          </button>
        </div>
      </div>

      {showFeatures && (
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-5 border border-indigo-500/30 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {lang === 'bn'
                ? `মডিউল ${mod.num}-এ যুক্ত করা সকল ফিচারসমূহ (${mod.features.length}টি)`
                : `Implemented Module ${mod.num} Feature Architecture (${mod.features.length} Features)`}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">Interactive & Ready to Use</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {mod.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-3 py-2 text-xs font-medium text-slate-100 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate" title={feat}>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MODULE 11: TUTORCONNECT (ONLINE LEARNING)
// ============================================================================
function TutorConnectModule({ lang, onBack, showToast }) {
  const mod = MODULES_META[0];
  const [search, setSearch] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('tutors'); // 'tutors' | 'live-class' | 'history'
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [bookingSlot, setBookingSlot] = useState('Today, 7:00 PM');
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Dr. Tanvir Ahmed (Tutor)', text: 'স্বাগতম! আজকের Calculus ও Integration নিয়ে কোনো প্রশ্ন থাকলে এখানে লিখো।', time: '10:02 AM', isTutor: true },
    { sender: 'You (Student)', text: 'Sir, ∫ x·e^x dx এর Integration by Parts নিয়মটা একটু আবার বুঝিয়ে দেবেন?', time: '10:03 AM', isTutor: false },
  ]);

  const tutors = [
    {
      id: 1,
      name: 'Dr. Tanvir Ahmed',
      subject: 'Mathematics',
      uni: 'BUET · PhD in Applied Math',
      rating: 4.98,
      reviews: 214,
      rate: '৳650/hr',
      verified: true,
      aiMatch: 98,
      aiReason: 'Matches your Calculus & Linear Algebra weak area from Module 14',
      tags: ['Calculus', 'Linear Algebra', 'HSC & Uni Math'],
      avatar: 'TA',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Nusrat Jahan Chowdhury',
      subject: 'Programming',
      uni: 'DU · MSc in Computer Science',
      rating: 4.95,
      reviews: 189,
      rate: '৳700/hr',
      verified: true,
      aiMatch: 94,
      aiReason: 'Top rated for Data Structures & Python problem solving',
      tags: ['Python', 'Data Structures', 'Next.js & React'],
      avatar: 'NJ',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 3,
      name: 'Prof. Mahmudul Hasan',
      subject: 'Physics',
      uni: 'SUST · Senior Lecturer',
      rating: 4.91,
      reviews: 156,
      rate: '৳600/hr',
      verified: true,
      aiMatch: 89,
      aiReason: 'Interactive visual explanations for Electromagnetism',
      tags: ['Mechanics', 'Electromagnetism', 'Quantum Basics'],
      avatar: 'MH',
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: 4,
      name: 'Sadia Afrin',
      subject: 'English',
      uni: 'North South University · IELTS 8.5',
      rating: 4.97,
      reviews: 310,
      rate: '৳550/hr',
      verified: true,
      aiMatch: 92,
      aiReason: 'Recommended for Academic Writing & IELTS Speaking',
      tags: ['IELTS Prep', 'Academic Writing', 'Spoken English'],
      avatar: 'SA',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  const [sessionHistory, setSessionHistory] = useState([
    { id: 'S-104', tutor: 'Dr. Tanvir Ahmed', subject: 'Differential Calculus', date: 'Nov 22, 2026', duration: '60 mins', status: 'Completed', rating: 5 },
    { id: 'S-103', tutor: 'Nusrat Jahan Chowdhury', subject: 'Binary Search Trees', date: 'Nov 18, 2026', duration: '45 mins', status: 'Completed', rating: 5 },
    { id: 'S-102', tutor: 'Sadia Afrin', subject: 'Academic Essay Structure', date: 'Nov 14, 2026', duration: '60 mins', status: 'Completed', rating: 5 },
  ]);

  const filteredTutors = tutors.filter((t) => {
    const matchesSub = subjectFilter === 'All' || t.subject === subjectFilter;
    const matchesQuery =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.subject.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesSub && matchesQuery;
  });

  const handleBookSession = () => {
    if (!selectedTutor) return;
    setSessionHistory([
      {
        id: `S-${105 + sessionHistory.length}`,
        tutor: selectedTutor.name,
        subject: `${selectedTutor.subject} 1-on-1 Session`,
        date: bookingSlot,
        duration: '60 mins',
        status: 'Scheduled',
        rating: 5,
      },
      ...sessionHistory,
    ]);
    showToast(`Booked 1-on-1 class with ${selectedTutor.name} for ${bookingSlot}!`);
    setSelectedTutor(null);
  };

  const sendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = { sender: 'You (Student)', text: chatInput, time: 'Just now', isTutor: false };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'Dr. Tanvir Ahmed (Tutor)',
          text: 'চমৎকার প্রশ্ন! সূত্রটি হলো: ∫ u dv = uv - ∫ v du। এখানে u = x এবং dv = e^x dx ধরলে উত্তর হবে x·e^x - e^x + C।',
          time: 'Just now',
          isTutor: true,
        },
      ]);
    }, 700);
  };

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        extraAction={
          <button
            onClick={() => setActiveTab('live-class')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 transition-all"
          >
            <Video className="w-4 h-4" />
            Join Live Demo Class
          </button>
        }
      />

      {/* Sub-navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: 'tutors', label: 'Find Verified Tutors & AI Match', icon: Search },
          { id: 'live-class', label: 'Online Video Classroom & Doubt Chat', icon: Video },
          { id: 'history', label: `Session History & Reviews (${sessionHistory.length})`, icon: Clock },
        ].map((tab) => {
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <TabIcon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === 'tutors' && (
        <div className="space-y-6">
          {/* AI Recommendation Banner */}
          <div className="bg-gradient-to-r from-indigo-600/10 via-blue-600/10 to-violet-600/10 border border-indigo-500/25 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-600 text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  AI Tutor Recommendation Engine Active
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Based on your recent Academic Tracker scores, <strong>Dr. Tanvir Ahmed (98% Match)</strong> is recommended for Multivariate Calculus.
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedTutor(tutors[0])}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shrink-0 transition-colors"
            >
              Book Top AI Match
            </button>
          </div>

          {/* Search & Subject Filter */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tutor by name, subject, or topic (e.g. Calculus, Python, IELTS)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', 'Mathematics', 'Programming', 'Physics', 'English'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSubjectFilter(sub)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    subjectFilter === sub
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Tutor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredTutors.map((tutor) => (
              <div
                key={tutor.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tutor.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                        {tutor.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-slate-900 dark:text-white">{tutor.name}</h3>
                          {tutor.verified && (
                            <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                              <ShieldCheck className="w-3.5 h-3.5" /> Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{tutor.uni}</p>
                        <div className="flex items-center gap-3 mt-1.5 text-xs">
                          <span className="flex items-center gap-1 font-bold text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-amber-500" /> {tutor.rating} ({tutor.reviews} reviews)
                          </span>
                          <span className="font-bold text-indigo-600 dark:text-indigo-400">{tutor.rate}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                      {tutor.aiMatch}% AI Match
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-2.5 mt-3.5 border border-slate-100 dark:border-slate-800">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500 inline mr-1" />
                    {tutor.aiReason}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {tutor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedTutor(tutor)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4" /> Book & Schedule
                  </button>
                  <button
                    onClick={() => setActiveTab('live-class')}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" /> Ask Doubt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'live-class' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Interactive Video Stage */}
          <div className="lg:col-span-2 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between min-h-[420px]">
            <div className="p-4 flex items-center justify-between bg-slate-900/80 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-white text-sm font-bold">Live Class: Differential & Integral Calculus</span>
              </div>
              <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg">HD 1080p · Whiteboard Active</span>
            </div>

            {/* Simulated Digital Whiteboard + Tutor PIP */}
            <div className="relative flex-1 p-6 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900">
              <div className="bg-white/95 text-slate-900 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-indigo-200">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
                  Interactive Smart Whiteboard
                </div>
                <p className="font-mono text-sm sm:text-base font-bold text-slate-800">
                  ∫ x · eˣ dx = x·eˣ - ∫ eˣ · 1 dx
                </p>
                <p className="font-mono text-sm sm:text-base font-bold text-emerald-600 mt-2">
                  = eˣ(x - 1) + C
                </p>
                <p className="text-xs text-slate-500 mt-3">
                  Rule: LIATE Priority (Algebraic before Exponential)
                </p>
              </div>

              {/* Tutor Webcam Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4 bg-slate-800/95 border border-slate-700 rounded-xl p-3 flex items-center gap-3 shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                  TA
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Dr. Tanvir Ahmed</p>
                  <p className="text-[11px] text-emerald-400">● Speaking...</p>
                </div>
              </div>
            </div>

            {/* Video Controls */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-center gap-3">
              <button
                onClick={() => setMicOn(!micOn)}
                className={`p-3 rounded-xl transition-colors ${micOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-rose-600 text-white'}`}
              >
                {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setCamOn(!camOn)}
                className={`p-3 rounded-xl transition-colors ${camOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-rose-600 text-white'}`}
              >
                {camOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </button>
              <button
                onClick={() => {
                  setActiveTab('tutors');
                  showToast('Left live classroom session.');
                }}
                className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-2"
              >
                <PhoneOff className="w-4 h-4" /> Leave Class
              </button>
            </div>
          </div>

          {/* Live Chat & Doubt Solving Panel */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col h-[460px]">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-500" />
                Live Chat & Doubt Solving
              </h3>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                Bangla + English
              </span>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((m, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-2xl text-xs max-w-[88%] ${
                    m.isTutor
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 text-slate-800 dark:text-slate-200 border border-indigo-100 dark:border-indigo-900'
                      : 'bg-indigo-600 text-white ml-auto'
                  }`}
                >
                  <div className="font-bold text-[10px] opacity-75 mb-1">{m.sender} · {m.time}</div>
                  <p className="leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={sendChat} className="p-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask your doubt in Bangla or English..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white">Session History & Tutor Reviews</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-5 py-3">Session ID</th>
                  <th className="px-5 py-3">Tutor</th>
                  <th className="px-5 py-3">Topic</th>
                  <th className="px-5 py-3">Date & Time</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {sessionHistory.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="px-5 py-3.5 font-mono text-xs font-bold text-indigo-600">{s.id}</td>
                    <td className="px-5 py-3.5 font-semibold text-slate-900 dark:text-white">{s.tutor}</td>
                    <td className="px-5 py-3.5 text-slate-600 dark:text-slate-300">{s.subject}</td>
                    <td className="px-5 py-3.5 text-slate-500 text-xs">{s.date} ({s.duration})</td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        s.status === 'Scheduled'
                          ? 'bg-amber-500/10 text-amber-600'
                          : 'bg-emerald-500/10 text-emerald-600'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-amber-500 font-bold text-xs">
                      {'★'.repeat(s.rating)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Class Booking Modal */}
      {selectedTutor && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Schedule 1-on-1 Session</h3>
              <button onClick={() => setSelectedTutor(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Booking with <strong className="text-slate-900 dark:text-white">{selectedTutor.name}</strong> ({selectedTutor.subject}) · {selectedTutor.rate}
            </p>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Select Available Time Slot</label>
            <div className="grid grid-cols-2 gap-2 mb-5">
              {['Today, 7:00 PM', 'Today, 9:00 PM', 'Tomorrow, 4:30 PM', 'Tomorrow, 8:00 PM'].map((slot) => (
                <button
                  key={slot}
                  onClick={() => setBookingSlot(slot)}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    bookingSlot === slot
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <button
              onClick={handleBookSession}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-colors"
            >
              Confirm Class Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MODULE 12: DOCUMIND (AI DOCUMENT INTELLIGENCE)
// ============================================================================
function DocuMindModule({ lang, onBack, showToast }) {
  const mod = MODULES_META[1];
  const [selectedDocIndex, setSelectedDocIndex] = useState(0);
  const [activeTool, setActiveTool] = useState('summary'); // summary | qa | mcq | notes | definitions
  const [docLang, setDocLang] = useState('en'); // 'en' | 'bn'
  const [docSearch, setDocSearch] = useState('');
  const [pdfQuestion, setPdfQuestion] = useState('');
  const [pdfAnswers, setPdfAnswers] = useState([
    { q: 'What is the time complexity of Merge Sort?', a: 'According to Section 3.2 of the uploaded lecture slides, Merge Sort guarantees O(n log n) time complexity in best, average, and worst cases.' },
  ]);
  const [mcqSelected, setMcqSelected] = useState({});

  const docs = [
    {
      name: 'Algorithms_Lecture_04_Divide_and_Conquer.pdf',
      type: 'PDF · 24 Pages',
      summaryEn: 'This lecture covers the Divide & Conquer paradigm, breaking complex problems into independent subproblems, solving them recursively, and combining solutions. Key case studies include Merge Sort, Quick Sort, and Binary Search with Master Theorem recurrence analysis.',
      summaryBn: 'এই লেকচারে Divide & Conquer পদ্ধতি আলোচনা করা হয়েছে, যেখানে জটিল সমস্যাকে ছোট উপ-সমস্যায় ভাগ করে রিকার্সিভলি সমাধান করা হয়। মূল উদাহরণ হিসেবে Merge Sort, Quick Sort এবং Master Theorem বিশ্লেষণ দেখানো হয়েছে।',
      topics: ['Divide & Conquer Paradigm', 'Master Theorem', 'Merge Sort Recurrence', 'Quick Sort Pivot Partitioning', 'Strassen Matrix Multiplication'],
      chapters: [
        { ch: 'Chapter 1: Recursion Trees', note: 'Visualizes cost at each level of recursion. Total work = sum of work across all log₂(n) levels.' },
        { ch: 'Chapter 2: Master Theorem Cases', note: 'Solves T(n) = aT(n/b) + f(n) by comparing f(n) against n^(log_b a).' },
        { ch: 'Chapter 3: Sorting Efficiency', note: 'Merge Sort uses O(n) auxiliary space; Quick Sort sorts in-place with O(n log n) average time.' },
      ],
      definitions: [
        { term: 'Divide & Conquer', def: 'An algorithm design paradigm based on multi-branched recursion.' },
        { term: 'Recurrence Relation', def: 'An equation that defines a sequence recursively in terms of preceding terms.' },
        { term: 'Asymptotic Tight Bound (Θ)', def: 'Bounds a function from both above and below within constant factors.' },
      ],
      mcqs: [
        {
          q: 'Which recurrence relation represents Merge Sort?',
          options: ['T(n) = 2T(n/2) + O(n)', 'T(n) = T(n-1) + O(1)', 'T(n) = 4T(n/2) + O(n²)', 'T(n) = T(n/2) + O(1)'],
          ans: 0,
        },
        {
          q: 'What is the worst-case time complexity of Quick Sort?',
          options: ['O(n log n)', 'O(n²)', 'O(log n)', 'O(n)'],
          ans: 1,
        },
      ],
    },
    {
      name: 'Macroeconomics_Monetary_Policy_2026.pptx',
      type: 'PPTX · 38 Slides',
      summaryEn: 'Analyzes central bank monetary policy tools including repo rates, open market operations, inflation targeting, and GDP growth trade-offs in emerging economies like Bangladesh.',
      summaryBn: 'কেন্দ্রীয় ব্যাংকের মুদ্রানীতি যেমন রেপো রেট, ওপেন মার্কেট অপারেশন, মুদ্রাস্ফীতি নিয়ন্ত্রণ এবং বাংলাদেশের মতো উন্নয়নশীল অর্থনীতিতে জিডিপি প্রবৃদ্ধির প্রভাব বিশ্লেষণ করা হয়েছে।',
      topics: ['Inflation Targeting', 'Central Bank Repo Rate', 'Open Market Operations', 'Liquidity Trap', 'Exchange Rate Stability'],
      chapters: [
        { ch: 'Slide Deck 1: Money Supply M1 & M2', note: 'Defines narrow and broad money aggregates controlled by central banking authorities.' },
        { ch: 'Slide Deck 2: Contractionary Policy', note: 'Raising policy interest rates reduces aggregate demand to curb high inflation.' },
      ],
      definitions: [
        { term: 'Repo Rate', def: 'The rate at which the central bank lends short-term money to commercial banks.' },
        { term: 'CPI Inflation', def: 'Measures average price changes in a basket of consumer goods and services.' },
      ],
      mcqs: [
        {
          q: 'When a central bank increases the Repo Rate, what happens to borrowing costs?',
          options: ['Borrowing becomes more expensive', 'Borrowing becomes free', 'Money supply doubles immediately', 'Taxes drop to zero'],
          ans: 0,
        },
      ],
    },
  ];

  const currentDoc = docs[selectedDocIndex];

  const handleSimulatedUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      showToast(`Uploaded "${file.name}" — AI indexed 100% of pages!`);
    }
  };

  const askPdf = (e) => {
    e.preventDefault();
    if (!pdfQuestion.trim()) return;
    setPdfAnswers((prev) => [
      {
        q: pdfQuestion,
        a: `AI Extraction from "${currentDoc.name}": Based on key concepts (${currentDoc.topics.slice(0, 2).join(', ')}), this concept optimizes performance by systematically decomposing problem constraints.`,
      },
      ...prev,
    ]);
    setPdfQuestion('');
  };

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        extraAction={
          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-500/20 transition-all">
            <Upload className="w-4 h-4" />
            Upload PDF / DOCX / PPT
            <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" onChange={handleSimulatedUpload} className="hidden" />
          </label>
        }
      />

      {/* Document Switcher + Search + Bangla/English Toggle */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {docs.map((d, idx) => (
            <button
              key={d.name}
              onClick={() => {
                setSelectedDocIndex(idx);
                setMcqSelected({});
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                selectedDocIndex === idx
                  ? 'bg-violet-600 text-white border-violet-600 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span className="truncate max-w-[200px]">{d.name}</span>
              <span className="opacity-75 text-[10px]">({d.type})</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative flex-1 sm:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={docSearch}
              onChange={(e) => setDocSearch(e.target.value)}
              placeholder="Search inside document..."
              className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
            />
          </div>
          <button
            onClick={() => setDocLang(docLang === 'en' ? 'bn' : 'en')}
            className="px-3.5 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 text-xs font-bold flex items-center gap-1.5"
          >
            <Languages className="w-4 h-4" />
            {docLang === 'en' ? 'Translate to বাংলা' : 'Switch to English'}
          </button>
        </div>
      </div>

      {/* Tool Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: 'summary', label: 'AI Summary & Important Topics' },
          { id: 'qa', label: 'Ask Questions from PDF' },
          { id: 'mcq', label: 'Auto MCQ Generator (Quiz)' },
          { id: 'notes', label: 'Chapter-wise Notes' },
          { id: 'definitions', label: 'Key Points & Definitions' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === t.id
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Active Tool Workspace */}
      {activeTool === 'summary' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-500" />
                AI Executive Summary ({docLang === 'en' ? 'English' : 'বাংলা অনুবাদ'})
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              {docLang === 'en' ? currentDoc.summaryEn : currentDoc.summaryBn}
            </p>
            {docSearch && (
              <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300">
                Search Match for <strong>"{docSearch}"</strong>: Found in Summary & 2 Chapter Sections.
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Important Topic Extraction</h3>
            <div className="space-y-2">
              {currentDoc.topics.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-violet-500/5 border border-violet-500/15 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <span>#{i + 1} {topic}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-violet-600 text-white">High Yield</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTool === 'qa' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-3xl">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">Chat & Ask Questions from "{currentDoc.name}"</h3>
          <form onSubmit={askPdf} className="flex gap-2 mb-5">
            <input
              type="text"
              value={pdfQuestion}
              onChange={(e) => setPdfQuestion(e.target.value)}
              placeholder="Ask anything about this document..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none"
            />
            <button type="submit" className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold">
              Ask AI
            </button>
          </form>
          <div className="space-y-3">
            {pdfAnswers.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <p className="text-xs font-bold text-violet-600 dark:text-violet-400">Q: {item.q}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTool === 'mcq' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-3xl space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 dark:text-white">Automatic AI MCQ Quiz Generator</h3>
            <span className="text-xs font-semibold text-violet-600">Click an option to test yourself</span>
          </div>
          {currentDoc.mcqs.map((qItem, qIdx) => (
            <div key={qIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <p className="font-bold text-sm text-slate-900 dark:text-white mb-3">
                {qIdx + 1}. {qItem.q}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {qItem.options.map((opt, oIdx) => {
                  const chosen = mcqSelected[qIdx];
                  const isCorrect = oIdx === qItem.ans;
                  let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
                  if (chosen !== undefined) {
                    if (isCorrect) btnStyle = 'bg-emerald-600 text-white border-emerald-600';
                    else if (chosen === oIdx) btnStyle = 'bg-rose-600 text-white border-rose-600';
                  }
                  return (
                    <button
                      key={oIdx}
                      onClick={() => setMcqSelected({ ...mcqSelected, [qIdx]: oIdx })}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTool === 'notes' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentDoc.chapters.map((c, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
              <span className="text-xs font-bold text-violet-600">Structured Note #{idx + 1}</span>
              <h4 className="font-bold text-slate-900 dark:text-white mt-1 mb-2">{c.ch}</h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{c.note}</p>
            </div>
          ))}
        </div>
      )}

      {activeTool === 'definitions' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentDoc.definitions.map((d, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
              <span className="px-2.5 py-1 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-bold">
                {d.term}
              </span>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 mt-3">{d.def}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MODULE 13: TASKFLOW AI (SMART PRODUCTIVITY & KANBAN)
// ============================================================================
function TaskFlowModule({ lang, onBack, showToast }) {
  const mod = MODULES_META[2];
  const [tasks, setTasks] = useState([
    { id: 1, title: 'CSE-301 Data Structures Assignment', type: 'Assignment', priority: 'High', due: 'Tomorrow, 11:59 PM', status: 'todo' },
    { id: 2, title: 'Revise Calculus Integration Formulas', type: 'Daily Study', priority: 'Medium', due: 'Today, 8:00 PM', status: 'doing' },
    { id: 3, title: 'Database ER Diagram Group Project', type: 'Project', priority: 'High', due: 'Nov 29, 2026', status: 'doing' },
    { id: 4, title: 'Submit Physics Lab Report #4', type: 'Assignment', priority: 'Low', due: 'Completed', status: 'done' },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState('High');
  const [newType, setNewType] = useState('Assignment');
  const [generatedSchedule, setGeneratedSchedule] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setTasks([
      { id: Date.now(), title: newTitle, type: newType, priority: newPriority, due: 'In 2 Days', status: 'todo' },
      ...tasks,
    ]);
    setNewTitle('');
    showToast('Task added to To Do board!');
  };

  const moveTask = (id, nextStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: nextStatus } : t)));
  };

  const generateAISchedule = () => {
    setGeneratedSchedule([
      { time: '04:00 PM - 05:30 PM', activity: 'Deep Focus: CSE-301 Data Structures Assignment (Pomodoro 3x25m)' },
      { time: '06:00 PM - 07:00 PM', activity: 'Active Recall: Calculus Integration Practice Problems' },
      { time: '08:30 PM - 09:30 PM', activity: 'Team Sync: Database ER Diagram Review' },
    ]);
    showToast('AI Study Schedule generated based on task deadlines!');
  };

  const doneCount = tasks.filter((t) => t.status === 'done').length;
  const progressPct = Math.round((doneCount / Math.max(tasks.length, 1)) * 100);

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        extraAction={
          <button
            onClick={generateAISchedule}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/20 transition-all"
          >
            <Wand2 className="w-4 h-4" />
            AI Study Schedule Generator
          </button>
        }
      />

      {/* Analytics + AI Time Management Suggestions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-500">Progress Analytics</span>
            <span className="text-lg font-extrabold text-emerald-600">{progressPct}%</span>
          </div>
          <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {doneCount} of {tasks.length} study tasks completed · 2 urgent deadlines approaching.
          </p>
        </div>

        <div className="lg:col-span-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-5 flex flex-col justify-between">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">AI Time Management & Smart Deadline Reminder</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                ⚠️ <strong>Smart Reminder:</strong> Your <em>CSE-301 Assignment</em> is due tomorrow at 11:59 PM. AI suggests starting a 50-minute focus block now to avoid last-minute rush.
              </p>
            </div>
          </div>
          {generatedSchedule && (
            <div className="mt-3 pt-3 border-t border-emerald-500/20 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {generatedSchedule.map((slot, idx) => (
                <div key={idx} className="bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-xl text-xs">
                  <div className="font-bold text-emerald-600">{slot.time}</div>
                  <div className="text-slate-700 dark:text-slate-300 mt-0.5">{slot.activity}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Create Task Form */}
      <form onSubmit={addTask} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add new assignment, project, or study task..."
          className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none"
        />
        <select
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
          className="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200"
        >
          <option>Assignment</option>
          <option>Project</option>
          <option>Daily Study</option>
        </select>
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          className="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button type="submit" className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5">
          <Plus className="w-4 h-4" /> Create Task
        </button>
      </form>

      {/* Interactive Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { key: 'todo', label: 'To Do', badge: 'bg-slate-500/10 text-slate-600 dark:text-slate-300' },
          { key: 'doing', label: 'Doing (In Progress)', badge: 'bg-amber-500/10 text-amber-600' },
          { key: 'done', label: 'Done (Completed)', badge: 'bg-emerald-500/10 text-emerald-600' },
        ].map((col) => {
          const colTasks = tasks.filter((t) => t.status === col.key);
          return (
            <div key={col.key} className="bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{col.label}</h3>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${col.badge}`}>{colTasks.length}</span>
              </div>
              <div className="space-y-3">
                {colTasks.map((task) => (
                  <div key={task.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        {task.type}
                      </span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        task.priority === 'High'
                          ? 'bg-rose-500/10 text-rose-600'
                          : task.priority === 'Medium'
                          ? 'bg-amber-500/10 text-amber-600'
                          : 'bg-emerald-500/10 text-emerald-600'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{task.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {task.due}
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {col.key !== 'todo' && (
                        <button
                          onClick={() => moveTask(task.id, 'todo')}
                          className="text-[11px] font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                        >
                          ← To Do
                        </button>
                      )}
                      {col.key !== 'doing' && (
                        <button
                          onClick={() => moveTask(task.id, 'doing')}
                          className="text-[11px] font-semibold px-2 py-1 rounded bg-amber-500/10 text-amber-600 hover:bg-amber-500/20"
                        >
                          Doing
                        </button>
                      )}
                      {col.key !== 'done' && (
                        <button
                          onClick={() => moveTask(task.id, 'done')}
                          className="text-[11px] font-semibold px-2 py-1 rounded bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 ml-auto"
                        >
                          ✓ Done
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// MODULE 14: ACADEMIC PERFORMANCE TRACKER (ACADEMIC ANALYTICS)
// ============================================================================
function AcademicTrackerModule({ lang, onBack }) {
  const mod = MODULES_META[3];
  const [targetCgpa, setTargetCgpa] = useState(3.85);
  const [nextSemCredits, setNextSemCredits] = useState(18);

  const currentCgpa = 3.74;
  const completedCredits = 96;

  // Target CGPA Calculator Logic
  const requiredNextGpa = useMemo(() => {
    const totalPointsNeeded = targetCgpa * (completedCredits + nextSemCredits);
    const currentPoints = currentCgpa * completedCredits;
    const req = (totalPointsNeeded - currentPoints) / nextSemCredits;
    return req.toFixed(2);
  }, [targetCgpa, nextSemCredits]);

  const semesters = [
    { sem: 'Sem 1', gpa: 3.55 },
    { sem: 'Sem 2', gpa: 3.64 },
    { sem: 'Sem 3', gpa: 3.71 },
    { sem: 'Sem 4', gpa: 3.68 },
    { sem: 'Sem 5', gpa: 3.82 },
    { sem: 'Sem 6', gpa: 3.88 },
  ];

  const courses = [
    { code: 'CSE-311', name: 'Database Management Systems', quiz: '19/20', assign: '14/15', attendance: 96, predicted: 'A+', weak: false },
    { code: 'MAT-205', name: 'Multivariate Calculus', quiz: '13/20', assign: '10/15', attendance: 82, predicted: 'B', weak: true },
    { code: 'CSE-315', name: 'Operating Systems', quiz: '18/20', assign: '15/15', attendance: 94, predicted: 'A+', weak: false },
    { code: 'ECO-101', name: 'Principles of Economics', quiz: '16/20', assign: '13/15', attendance: 89, predicted: 'A', weak: false },
  ];

  return (
    <div>
      <ModuleHeaderAndFeatures mod={mod} lang={lang} onBack={onBack} />

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
          <span className="text-xs font-bold text-slate-500">Current Cumulative CGPA</span>
          <div className="text-3xl font-extrabold text-cyan-600 mt-1">{currentCgpa} <span className="text-sm font-medium text-slate-400">/ 4.00</span></div>
          <span className="text-xs text-emerald-600 font-semibold mt-1 inline-block">↑ +0.06 from last semester</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
          <span className="text-xs font-bold text-slate-500">Overall Attendance Rate</span>
          <div className="text-3xl font-extrabold text-emerald-600 mt-1">90.2%</div>
          <span className="text-xs text-slate-500 mt-1 inline-block">Eligible for all Final Exams</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
          <span className="text-xs font-bold text-slate-500">Estimated Final Result</span>
          <div className="text-3xl font-extrabold text-indigo-600 mt-1">3.81 <span className="text-sm font-medium text-slate-400">GPA</span></div>
          <span className="text-xs text-indigo-500 font-semibold mt-1 inline-block">AI Predictive Projection</span>
        </div>

        <div className="bg-rose-500/10 border border-rose-500/25 rounded-2xl p-5">
          <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> Weak Subject Detection
          </span>
          <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">MAT-205 Calculus</div>
          <span className="text-xs text-rose-600 dark:text-rose-400 mt-1 inline-block">Quiz avg 65% — Needs revision</span>
        </div>
      </div>

      {/* Semester-wise GPA Chart + Target CGPA Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">Semester-wise GPA Progress Chart</h3>
          <div className="grid grid-cols-6 gap-3 items-end h-48 pt-6 px-2">
            {semesters.map((s) => {
              const heightPct = ((s.gpa - 3.0) / 1.0) * 100;
              return (
                <div key={s.sem} className="flex flex-col items-center h-full justify-end">
                  <span className="text-xs font-extrabold text-cyan-600 mb-1.5">{s.gpa}</span>
                  <div
                    className="w-full max-w-[44px] rounded-t-xl bg-gradient-to-t from-cyan-600 to-sky-400 transition-all duration-500"
                    style={{ height: `${Math.max(heightPct, 20)}%` }}
                  />
                  <span className="text-xs font-semibold text-slate-500 mt-2">{s.sem}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300">
            <strong>AI Performance Analysis:</strong> Your upward GPA trajectory (+0.33 since Sem 1) places you in the top 8% of your department. Improving <em>MAT-205</em> quiz scores by 15% can raise your projected semester GPA to 3.90.
          </div>
        </div>

        {/* Interactive Target CGPA Calculator */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-cyan-600" />
              Target CGPA Calculator
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-500">Desired Target CGPA</span>
                  <span className="text-cyan-600">{targetCgpa}</span>
                </div>
                <input
                  type="range"
                  min="3.50"
                  max="4.00"
                  step="0.01"
                  value={targetCgpa}
                  onChange={(e) => setTargetCgpa(parseFloat(e.target.value))}
                  className="w-full accent-cyan-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Next Semester Credits</label>
                <input
                  type="number"
                  value={nextSemCredits}
                  onChange={(e) => setNextSemCredits(Math.max(3, parseInt(e.target.value) || 15))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-slate-900 text-white text-center">
            <span className="text-xs text-slate-400">Required Next Semester GPA</span>
            <div className={`text-3xl font-extrabold mt-1 ${parseFloat(requiredNextGpa) > 4.0 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {requiredNextGpa}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {parseFloat(requiredNextGpa) > 4.0
                ? 'Requires more credits to reach this target'
                : 'Achievable with consistent A/A+ grades!'}
            </p>
          </div>
        </div>
      </div>

      {/* Course-wise Grade, Quiz, Assignment & Attendance Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-white">Course-wise Marks, Attendance & Result Prediction</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-5 py-3">Course</th>
                <th className="px-5 py-3">Quiz & CT</th>
                <th className="px-5 py-3">Assignment & Pres.</th>
                <th className="px-5 py-3">Attendance</th>
                <th className="px-5 py-3">Estimated Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {courses.map((c) => (
                <tr key={c.code}>
                  <td className="px-5 py-3.5">
                    <div className="font-bold text-slate-900 dark:text-white">{c.code}: {c.name}</div>
                    {c.weak && <span className="text-[11px] font-bold text-rose-500">⚠️ Weak Subject Flagged</span>}
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-slate-700 dark:text-slate-300">{c.quiz}</td>
                  <td className="px-5 py-3.5 font-semibold text-slate-700 dark:text-slate-300">{c.assign}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${c.attendance < 85 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${c.attendance}%` }} />
                      </div>
                      <span className="text-xs font-bold">{c.attendance}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-extrabold text-xs">
                      {c.predicted}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MODULE 15: STUDENT DISCUSSION FORUM (COMMUNITY)
// ============================================================================
function DiscussionForumModule({ lang, onBack, showToast }) {
  const mod = MODULES_META[4];
  const [search, setSearch] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('All');
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const [newSubject, setNewSubject] = useState('Computer Science');
  const [replyInputs, setReplyInputs] = useState({});

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Rafiqul Islam · CSE 3rd Year',
      subject: 'Computer Science',
      tags: ['Dynamic Programming', 'Algorithms', 'Exam Prep'],
      title: 'How do you identify overlapping subproblems in DP vs Greedy problems?',
      body: 'আমি Knapsack এবং Coin Change সমস্যায় প্রায়ই কনফিউজড হয়ে যাই কখন Greedy কাজ করবে আর কখন DP লাগবে। কেউ সহজ উদাহরণ দিয়ে বুঝিয়ে দেবেন?',
      attachment: 'DP_State_Transition_Diagram.pdf',
      votes: 42,
      replies: [
        {
          id: 101,
          author: 'Farhana Yasmin · Teaching Assistant',
          text: 'Greedy works when local optimal choice leads to global optimum (e.g., standard currency coins). When denominations are arbitrary like {1, 3, 4} for target 6, Greedy picks 4+1+1 (3 coins) while DP finds 3+3 (2 coins)!',
          isBest: true,
        },
      ],
    },
    {
      id: 2,
      author: 'Nabila Tabassum · EEE 2nd Year',
      subject: 'Physics & Circuits',
      tags: ['Thevenin Theorem', 'Circuit Analysis'],
      title: 'Thevenin Equivalent Resistance with Dependent Sources',
      body: 'When a circuit has a dependent current source and no independent sources, we apply a 1V test source. Attached my handwritten schematic PDF for review.',
      attachment: 'Circuit_Schematic_Scan.png',
      votes: 28,
      replies: [
        {
          id: 102,
          author: 'Tariq Aziz · Senior',
          text: 'Your KCL equation at Node A is spot on! Just remember R_th = V_test / I_test.',
          isBest: false,
        },
      ],
    },
  ]);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newBody.trim()) return;
    setPosts([
      {
        id: Date.now(),
        author: 'You · Student Member',
        subject: newSubject,
        tags: [newSubject, 'Question'],
        title: newTitle,
        body: newBody,
        attachment: null,
        votes: 1,
        replies: [],
      },
      ...posts,
    ]);
    setNewTitle('');
    setNewBody('');
    showToast('Discussion post published to the student community!');
  };

  const toggleBestAnswer = (postId, replyId) => {
    setPosts(
      posts.map((p) =>
        p.id === postId
          ? {
              ...p,
              replies: p.replies.map((r) => (r.id === replyId ? { ...r, isBest: !r.isBest } : r)),
            }
          : p
      )
    );
    showToast('Updated Best Answer selection!');
  };

  const addReply = (postId) => {
    const txt = replyInputs[postId];
    if (!txt?.trim()) return;
    setPosts(
      posts.map((p) =>
        p.id === postId
          ? {
              ...p,
              replies: [...p.replies, { id: Date.now(), author: 'You · Student', text: txt, isBest: false }],
            }
          : p
      )
    );
    setReplyInputs({ ...replyInputs, [postId]: '' });
  };

  const filteredPosts = posts.filter((p) => {
    const subOk = subjectFilter === 'All' || p.subject === subjectFilter;
    const qOk =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.body.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return subOk && qOk;
  });

  return (
    <div>
      <ModuleHeaderAndFeatures mod={mod} lang={lang} onBack={onBack} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Create Discussion Post */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 h-fit">
          <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Plus className="w-4 h-4 text-amber-500" /> Ask Academic Question
          </h3>
          <form onSubmit={handleCreatePost} className="space-y-3">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Question title..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
            />
            <select
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200"
            >
              <option>Computer Science</option>
              <option>Physics & Circuits</option>
              <option>Mathematics</option>
              <option>Business & Economics</option>
            </select>
            <textarea
              rows={4}
              value={newBody}
              onChange={(e) => setNewBody(e.target.value)}
              placeholder="Describe your academic doubt in English or Bangla..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors"
            >
              Post Discussion
            </button>
          </form>
        </div>

        {/* Right: Search, Filter & Discussion Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search discussions, tags, topics..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
              />
            </div>
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200"
            >
              <option value="All">All Subjects</option>
              <option>Computer Science</option>
              <option>Physics & Circuits</option>
              <option>Mathematics</option>
            </select>
          </div>

          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{post.author}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600">{post.subject}</span>
                  <button
                    onClick={() => showToast('Post flagged for academic moderator review.')}
                    className="text-slate-400 hover:text-rose-500"
                    title="Report & Moderation"
                  >
                    <Flag className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h4 className="font-bold text-base text-slate-900 dark:text-white">{post.title}</h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{post.body}</p>

              {post.attachment && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <FileText className="w-3.5 h-3.5" /> Attachment: {post.attachment}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setPosts(posts.map((p) => (p.id === post.id ? { ...p, votes: p.votes + 1 } : p)))
                    }
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-bold"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" /> {post.votes}
                  </button>
                  <button
                    onClick={() =>
                      setPosts(posts.map((p) => (p.id === post.id ? { ...p, votes: p.votes - 1 } : p)))
                    }
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500"
                  >
                    <ThumbsDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Replies & Best Answer Selection */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                {post.replies.map((rep) => (
                  <div
                    key={rep.id}
                    className={`p-3 rounded-xl text-xs border ${
                      rep.isBest
                        ? 'bg-emerald-500/10 border-emerald-500/30'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200">{rep.author}</span>
                      <button
                        onClick={() => toggleBestAnswer(post.id, rep.id)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          rep.isBest ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {rep.isBest ? '✓ Best Answer' : 'Mark Best Answer'}
                      </button>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{rep.text}</p>
                  </div>
                ))}

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={replyInputs[post.id] || ''}
                    onChange={(e) => setReplyInputs({ ...replyInputs, [post.id]: e.target.value })}
                    placeholder="Write a helpful answer..."
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
                  />
                  <button
                    onClick={() => addReply(post.id)}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MODULE 16: SENIOR-JUNIOR CONNECT (MENTORSHIP NETWORK)
// ============================================================================
function SeniorJuniorModule({ lang, onBack, showToast }) {
  const mod = MODULES_META[5];
  const [deptFilter, setDeptFilter] = useState('All');
  const [requestedIds, setRequestedIds] = useState([]);
  const [activeChatMentor, setActiveChatMentor] = useState(null);
  const [dmText, setDmText] = useState('');
  const [dmHistory, setDmHistory] = useState([
    { from: 'Mentor', text: 'Hi! Feel free to ask about thesis supervision, internship prep, or course selection.' },
  ]);

  const mentors = [
    {
      id: 1,
      name: 'Tahmidul Karim',
      role: 'Alumni · Software Engineer at Pathao',
      dept: 'CSE',
      batch: 'Batch 18',
      match: 97,
      focus: ['Career Guidance', 'System Design', 'Thesis Mentorship'],
      resource: 'Shared: 40+ BD Tech Interview Prep Notes.pdf',
      experience: 'Transitioned from competitive programming to backend engineering; happy to review junior CVs!',
    },
    {
      id: 2,
      name: 'Maliha Rahman',
      role: 'Final Year Senior · Research Assistant',
      dept: 'EEE',
      batch: 'Batch 20',
      match: 91,
      focus: ['Academic Mentorship', 'VLSI & Embedded', 'Scholarship Guide'],
      resource: 'Shared: EEE 3rd Year Lab & Project Repository',
      experience: 'Secured fully funded Masters offer; guiding juniors on SOP writing and IEEE papers.',
    },
    {
      id: 3,
      name: 'Sajid Al Mahmud',
      role: 'Alumni · Product Analyst',
      dept: 'BBA',
      batch: 'Batch 17',
      match: 88,
      focus: ['Business Case Comp', 'Finance Internships', 'Alumni Networking'],
      resource: 'Shared: Financial Modeling Excel Templates',
      experience: 'National Business Case Champion; mentoring 1st & 2nd year BBA students.',
    },
  ];

  const filtered = mentors.filter((m) => deptFilter === 'All' || m.dept === deptFilter);

  const sendDm = (e) => {
    e.preventDefault();
    if (!dmText.trim()) return;
    setDmHistory([...dmHistory, { from: 'You', text: dmText }]);
    setDmText('');
  };

  return (
    <div>
      <ModuleHeaderAndFeatures mod={mod} lang={lang} onBack={onBack} />

      {/* Department & Batch Search Filter */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          {['All', 'CSE', 'EEE', 'BBA'].map((d) => (
            <button
              key={d}
              onClick={() => setDeptFilter(d)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                deptFilter === d
                  ? 'bg-pink-600 text-white shadow-md shadow-pink-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {d === 'All' ? 'All Departments & Batches' : `Dept: ${d}`}
            </button>
          ))}
        </div>
        <span className="text-xs font-semibold text-pink-600 bg-pink-500/10 px-3 py-1.5 rounded-xl">
          ✨ AI Mentor-Mentee Matching Enabled
        </span>
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filtered.map((m) => {
          const isReq = requestedIds.includes(m.id);
          return (
            <div key={m.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-600">
                      {m.dept} · {m.batch}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mt-2">{m.name}</h3>
                    <p className="text-xs text-slate-500">{m.role}</p>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                    {m.match}% Match
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl">
                  “{m.experience}”
                </p>

                <div className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <FolderOpen className="w-3.5 h-3.5 shrink-0" /> {m.resource}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {m.focus.map((f) => (
                    <span key={f} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    if (!isReq) {
                      setRequestedIds([...requestedIds, m.id]);
                      showToast(`Mentorship request sent to ${m.name}!`);
                    }
                  }}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                    isReq
                      ? 'bg-emerald-600 text-white'
                      : 'bg-pink-600 hover:bg-pink-700 text-white'
                  }`}
                >
                  {isReq ? '✓ Request Sent' : 'Request Mentorship'}
                </button>
                <button
                  onClick={() => setActiveChatMentor(m)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold"
                >
                  Message
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Private Messaging Drawer Modal */}
      {activeChatMentor && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Private Mentorship Chat</h4>
                <p className="text-xs text-slate-500">{activeChatMentor.name} ({activeChatMentor.dept})</p>
              </div>
              <button onClick={() => setActiveChatMentor(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-56 overflow-y-auto py-3 space-y-2">
              {dmHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl text-xs max-w-[85%] ${
                    msg.from === 'You'
                      ? 'bg-pink-600 text-white ml-auto'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={sendDm} className="flex gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <input
                type="text"
                value={dmText}
                onChange={(e) => setDmText(e.target.value)}
                placeholder="Write a private message..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
              />
              <button type="submit" className="px-4 py-2 rounded-xl bg-pink-600 text-white text-xs font-bold">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MODULE 17: RESUME & CV INTELLIGENCE (AI CAREER DOCUMENTS)
// ============================================================================
function ResumeIntelligenceModule({ lang, onBack, showToast }) {
  const mod = MODULES_META[6];
  const [template, setTemplate] = useState('modern'); // modern | executive | minimal
  const [fullName, setFullName] = useState('Ahsan Habib');
  const [roleTitle, setRoleTitle] = useState('Junior Full-Stack Developer & CS Undergrad');
  const [summary, setSummary] = useState(
    'Passionate Computer Science undergraduate with hands-on experience building scalable Next.js, React, and AI-powered web applications. Strong foundation in Data Structures, Algorithms, and REST APIs.'
  );
  const [skills, setSkills] = useState('Next.js, React, TypeScript, Python, SQL, Tailwind CSS, Git');
  const [jobDesc, setJobDesc] = useState('Looking for a Frontend React / Next.js Intern with TypeScript and API integration skills.');
  const [coverLetter, setCoverLetter] = useState('');

  // Dynamic ATS Score calculation
  const atsScore = useMemo(() => {
    let score = 74;
    if (skills.toLowerCase().includes('next.js')) score += 6;
    if (skills.toLowerCase().includes('typescript')) score += 6;
    if (summary.length > 80) score += 6;
    return Math.min(score, 98);
  }, [skills, summary]);

  const generateCoverLetter = () => {
    setCoverLetter(
      `Dear Hiring Manager,\n\nI am excited to apply for the ${roleTitle} position. With proven experience in ${skills}, I have built full-stack academic and production platforms that align directly with your job requirements. I look forward to contributing to your engineering team.\n\nSincerely,\n${fullName}`
    );
    showToast('AI Cover Letter generated tailored to your Job Description!');
  };

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        extraAction={
          <button
            onClick={() => {
              showToast('Preparing Print / PDF Resume Export...');
              window.print();
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
          >
            <Printer className="w-4 h-4" />
            Export Resume PDF
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Editor + ATS & Job Matcher (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* ATS Score & AI Review */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-slate-500">ATS Compatibility & JD Match</span>
              <span className="text-xl font-extrabold text-emerald-600">{atsScore}/100</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-emerald-500 transition-all" style={{ width: `${atsScore}%` }} />
            </div>
            <div className="space-y-1.5 text-xs">
              <p className="text-emerald-600 font-semibold">✓ Grammar & Spelling Check: 0 errors detected</p>
              <p className="text-amber-600 font-semibold">⚡ Skill Gap Suggestion: Add "Docker" or "Unit Testing" to boost JD match to 99%</p>
            </div>
          </div>

          {/* Resume Builder Inputs */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">AI Resume Builder Details</h3>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
              placeholder="Full Name"
            />
            <input
              type="text"
              value={roleTitle}
              onChange={(e) => setRoleTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
              placeholder="Target Role"
            />
            <textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
            />
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
            />

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="block text-xs font-bold text-slate-500 mb-1">Target Job Description (JD Matching)</label>
              <textarea
                rows={2}
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
              />
              <button
                onClick={generateCoverLetter}
                className="mt-2.5 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Wand2 className="w-4 h-4" /> Generate AI Cover Letter
              </button>
            </div>
          </div>
        </div>

        {/* Right Live Resume Template Preview (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3">
            <span className="text-xs font-bold text-slate-500 px-2">Professional Templates:</span>
            <div className="flex gap-2">
              {['modern', 'executive', 'minimal'].map((tpl) => (
                <button
                  key={tpl}
                  onClick={() => setTemplate(tpl)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                    template === tpl
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {tpl}
                </button>
              ))}
            </div>
          </div>

          {/* Paper Sheet Preview */}
          <div className="bg-white text-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 min-h-[420px]">
            <div
              className={`pb-4 mb-4 ${
                template === 'modern'
                  ? 'border-b-2 border-blue-600'
                  : template === 'executive'
                  ? 'bg-slate-900 text-white -mx-7 -mt-7 p-7 rounded-t-2xl'
                  : 'border-b border-slate-300'
              }`}
            >
              <h2 className="text-2xl font-extrabold tracking-tight">{fullName}</h2>
              <p className={`text-sm font-semibold mt-0.5 ${template === 'executive' ? 'text-blue-300' : 'text-blue-600'}`}>
                {roleTitle}
              </p>
              <p className={`text-xs mt-1 ${template === 'executive' ? 'text-slate-300' : 'text-slate-500'}`}>
                Dhaka, Bangladesh · ahsan.habib@eduverse.ai · github.com/ahsanhabib
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-extrabold uppercase tracking-wider text-slate-500 mb-1">Professional Summary</h4>
                <p className="leading-relaxed text-slate-700">{summary}</p>
              </div>

              <div>
                <h4 className="font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Technical Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.split(',').map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-semibold">
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-extrabold uppercase tracking-wider text-slate-500 mb-1">Academic Projects & Education</h4>
                <p className="font-bold text-slate-900">B.Sc. in Computer Science & Engineering · CGPA 3.74 / 4.00</p>
                <p className="text-slate-600 mt-0.5">• Built EduVerse AI Multi-Module Learning Platform with Next.js & AI OCR.</p>
              </div>
            </div>
          </div>

          {coverLetter && (
            <div className="bg-white dark:bg-slate-900 border border-indigo-500/30 rounded-2xl p-5">
              <h4 className="font-bold text-xs uppercase text-indigo-500 mb-2">Generated Cover Letter</h4>
              <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {coverLetter}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MODULE 18: HANDWRITTEN NOTE SCANNER (AI OCR TECHNOLOGY)
// ============================================================================
function HandwrittenOcrModule({ lang, onBack, showToast }) {
  const mod = MODULES_META[7];
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [extractedText, setExtractedText] = useState(
    'নিউটনের গতির দ্বিতীয় সূত্র (Newton’s Second Law):\nকোনো বস্তুর ভরবেগের পরিবর্তনের হার এর ওপর প্রযুক্ত বলের সমানুপাতিক।\n\nMathematical Equation:\nF = dp/dt = m · (dv/dt) = m · a\nWhere m = 5 kg, a = 4 m/s² ⇒ F = 20 N.'
  );
  const [noteSummary, setNoteSummary] = useState('');
  const [librarySearch, setLibrarySearch] = useState('');

  const presets = [
    {
      label: 'Bangla + English Physics Note',
      subject: 'Physics',
      handwritingPreview: 'নিউটনের গতির ২য় সূত্র: F = m · a (Bangla + Math Cursive)',
      ocrResult:
        'নিউটনের গতির দ্বিতীয় সূত্র (Newton’s Second Law):\nকোনো বস্তুর ভরবেগের পরিবর্তনের হার এর ওপর প্রযুক্ত বলের সমানুপাতিক।\n\nMathematical Equation:\nF = dp/dt = m · (dv/dt) = m · a\nWhere m = 5 kg, a = 4 m/s² ⇒ F = 20 N.',
    },
    {
      label: 'Calculus Integration Sheet',
      subject: 'Mathematics',
      handwritingPreview: '∫₀¹ (3x² + 2x) dx = [x³ + x²]₀¹ = 2',
      ocrResult:
        'Definite Integral Evaluation:\n∫₀¹ (3x² + 2x) dx\n= [x³ + x²] evaluated from 0 to 1\n= (1³ + 1²) - (0) = 2.0 (Auto-verified by Math OCR)',
    },
  ];

  const [savedLibrary, setSavedLibrary] = useState([
    { id: 1, title: 'Newtonian Mechanics Lecture 02', subject: 'Physics', date: 'Nov 24, 2026', snippet: 'F = dp/dt = m · a ...' },
    { id: 2, title: 'Definite Integrals Practice', subject: 'Mathematics', date: 'Nov 21, 2026', snippet: '∫₀¹ (3x² + 2x) dx = 2' },
    { id: 3, title: 'Bangla Sahitya Romanticism Notes', subject: 'Bangla', date: 'Nov 19, 2026', snippet: 'রবীন্দ্রনাথ ঠাকুরের গীতাঞ্জলি কাব্যগ্রন্থ...' },
  ]);

  const runOcrScan = (idx) => {
    setSelectedPreset(idx);
    setIsScanning(true);
    setNoteSummary('');
    setTimeout(() => {
      setIsScanning(false);
      setExtractedText(presets[idx].ocrResult);
      showToast('AI OCR completed with Auto Text & Equation Correction!');
    }, 850);
  };

  const saveToLibrary = () => {
    setSavedLibrary([
      {
        id: Date.now(),
        title: presets[selectedPreset].label,
        subject: presets[selectedPreset].subject,
        date: 'Just now',
        snippet: extractedText.slice(0, 48) + '...',
      },
      ...savedLibrary,
    ]);
    showToast('Saved digital note to Subject-wise Searchable Library!');
  };

  const filteredLib = savedLibrary.filter(
    (item) =>
      item.title.toLowerCase().includes(librarySearch.toLowerCase()) ||
      item.subject.toLowerCase().includes(librarySearch.toLowerCase()) ||
      item.snippet.toLowerCase().includes(librarySearch.toLowerCase())
  );

  return (
    <div>
      <ModuleHeaderAndFeatures
        mod={mod}
        lang={lang}
        onBack={onBack}
        extraAction={
          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-500/20">
            <Upload className="w-4 h-4" />
            Camera / Upload Handwritten Note
            <input
              type="file"
              accept="image/*"
              onChange={() => runOcrScan(0)}
              className="hidden"
            />
          </label>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left: Handwritten Image Simulator */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase text-slate-500">1. Handwritten Sample / Camera Input</span>
              <div className="flex gap-1.5">
                {presets.map((p, idx) => (
                  <button
                    key={p.label}
                    onClick={() => runOcrScan(idx)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                      selectedPreset === idx
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    Sample {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Notebook Paper */}
            <div className="relative rounded-2xl p-6 bg-amber-50/90 border-2 border-dashed border-amber-300 text-slate-800 min-h-[220px] flex flex-col justify-center overflow-hidden">
              {isScanning && (
                <div className="absolute inset-0 bg-teal-500/20 backdrop-blur-[1px] flex items-center justify-center z-10">
                  <div className="px-4 py-2 rounded-full bg-slate-900 text-teal-300 text-xs font-bold flex items-center gap-2 animate-pulse">
                    <ScanLine className="w-4 h-4" /> Scanning Bangla, English & Equations...
                  </div>
                </div>
              )}
              <p className="text-xs font-bold uppercase text-amber-700 mb-2">Simulated Handwritten Notebook Page</p>
              <p className="font-serif italic text-lg text-slate-900 leading-relaxed">
                “{presets[selectedPreset].handwritingPreview}”
              </p>
              <p className="text-[11px] text-slate-500 mt-4">
                Supports Cursive English, Bangla Script (বাংলা হাতের লেখা), and LaTeX Math Equations.
              </p>
            </div>
          </div>

          <button
            onClick={() => runOcrScan(selectedPreset)}
            className="mt-4 w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center justify-center gap-2"
          >
            <ScanLine className="w-4 h-4" /> Re-Scan & Auto-Correct Text
          </button>
        </div>

        {/* Right: Editable Digital Text Output & Actions */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase text-emerald-600">2. Editable Digital Text & Equations</span>
              <span className="text-[11px] font-semibold text-slate-400">Auto-Corrected</span>
            </div>
            <textarea
              rows={7}
              value={extractedText}
              onChange={(e) => setExtractedText(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-sm font-mono text-slate-900 dark:text-white focus:outline-none"
            />
            {noteSummary && (
              <div className="mt-3 p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs text-slate-700 dark:text-slate-200">
                <strong>AI Note Summary:</strong> {noteSummary}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() =>
                setNoteSummary('Key Formula Extracted: F = m·a (20N) & Definite Integral evaluates to 2.0.')
              }
              className="px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> AI Summarize
            </button>
            <button
              onClick={saveToLibrary}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <FolderOpen className="w-3.5 h-3.5" /> Save to Subject Folder
            </button>
            <button
              onClick={() => {
                showToast('Exporting clean digital note to PDF...');
                window.print();
              }}
              className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Searchable Notes Library & Subject-wise Storage */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="font-bold text-slate-900 dark:text-white">Searchable Notes Library (Subject-wise Storage)</h3>
          <div className="relative sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={librarySearch}
              onChange={(e) => setLibrarySearch(e.target.value)}
              placeholder="Search digitized notes..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredLib.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-bold px-2 py-0.5 rounded bg-teal-500/10 text-teal-600">{item.subject}</span>
                <span className="text-slate-400">{item.date}</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1">{item.title}</h4>
              <p className="text-xs text-slate-500 mt-1 truncate">{item.snippet}</p>
            </div>
          ))}
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
                  All Modules (8)
                </button>
                {MODULES_META.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => navigateTo(m.id)}
                    className={`px-2.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeRoute === m.id
                        ? 'bg-indigo-600 text-white shadow-sm'
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
                🏠 Platform Overview — All 8 Modules
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
            <div className="space-y-8 animate-fadeIn">
              {/* Hero Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950 text-white p-6 sm:p-10 border border-indigo-500/30 shadow-xl">
                <div className="relative z-10 max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-cyan-300 mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    {lang === 'bn'
                      ? 'সম্পূর্ণ ৮টি মডিউল ও ৭৬+ ফিচারসহ AI শিক্ষা প্ল্যাটফর্ম'
                      : 'Next-Gen AI Learning & Academic Ecosystem · 8 Modules'}
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    {lang === 'bn'
                      ? 'শিক্ষার্থী ও শিক্ষকদের জন্য স্মার্ট AI একাডেমিক প্ল্যাটফর্ম'
                      : 'All-in-One AI Academic, Mentorship & Career Intelligence Suite'}
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                    {lang === 'bn'
                      ? 'নিচের যেকোনো মডিউলে ক্লিক করলে সরাসরি সেই মডিউলের পূর্ণাঙ্গ ইন্টারঅ্যাক্টিভ পেজে চলে যাবেন এবং সকল ফিচার সরাসরি ব্যবহার করতে পারবেন।'
                      : 'Click any module card below or use the top navigation bar to launch its dedicated interactive workspace with complete feature breakdowns and live AI tools.'}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button
                      onClick={() => navigateTo('tutor-connect')}
                      className="px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2"
                    >
                      Explore Module 11: TutorConnect <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigateTo('documind')}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/15 transition-all"
                    >
                      Try DocuMind AI PDF
                    </button>
                  </div>
                </div>
              </div>

              {/* All 8 Modules Interactive Directory Grid */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {lang === 'bn' ? 'সকল একাডেমিক মডিউলসমূহ (ক্লিক করে ওপেন করুন)' : 'Learning & Academic Modules (Click to Launch)'}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Every card opens a dedicated interactive page containing all listed features.
                    </p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit">
                    ✓ 100% Interactive & Responsive
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {MODULES_META.map((mod) => {
                    const Icon = mod.icon;
                    return (
                      <div
                        key={mod.id}
                        onClick={() => navigateTo(mod.id)}
                        className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 py-6 text-center text-xs text-slate-500">
          EduVerse AI (শিক্ষাAI) — Complete 8-Module Learning, Mentorship & Academic Intelligence Platform
        </footer>
      </div>
    </div>
  );
}