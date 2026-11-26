<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CampusVerse — AI Career & Skill Development (5 Modules)</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Plus Jakarta Sans & Hind Siliguri for crisp English + Bengali rendering -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"Hind Siliguri"', 'sans-serif'],
            bengali: ['"Hind Siliguri"', '"Plus Jakarta Sans"', 'sans-serif'],
          },
          animation: {
            'blob': 'blob 9s infinite',
            'float': 'float 4s ease-in-out infinite',
            'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'fade-in-up': 'fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          },
          keyframes: {
            blob: {
              '0%': { transform: 'translate(0px, 0px) scale(1)' },
              '33%': { transform: 'translate(25px, -35px) scale(1.08)' },
              '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
              '100%': { transform: 'translate(0px, 0px) scale(1)' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-8px)' },
            },
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(16px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            }
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', 'Hind Siliguri', sans-serif;
      background-color: #070913;
      color: #f8fafc;
      overflow-x: hidden;
    }

    /* Vibrant Glassmorphism */
    .glass-card {
      background: rgba(17, 24, 39, 0.68);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 12px 38px -8px rgba(0, 0, 0, 0.55);
    }

    .glass-card-hover {
      transition: all 0.32s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .glass-card-hover:hover {
      transform: translateY(-6px) scale(1.01);
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 22px 48px -10px rgba(99, 102, 241, 0.28);
    }

    /* Animated Mesh Gradient Background */
    .bg-grid-pattern {
      background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
      background-size: 28px 28px;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #070913;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #6366f1, #ec4899);
      border-radius: 9999px;
    }

    /* Voice Wave Bars Animation */
    .wave-bar {
      animation: soundWave 0.9s ease-in-out infinite alternate;
    }
    .wave-bar:nth-child(2) { animation-delay: 0.15s; }
    .wave-bar:nth-child(3) { animation-delay: 0.3s; }
    .wave-bar:nth-child(4) { animation-delay: 0.45s; }
    .wave-bar:nth-child(5) { animation-delay: 0.6s; }
    .wave-bar:nth-child(6) { animation-delay: 0.2s; }

    @keyframes soundWave {
      0% { height: 6px; }
      100% { height: 28px; }
    }
  </style>
</head>
<body class="min-h-screen relative selection:bg-indigo-500 selection:text-white">

  <!-- Ambient Animated Glow Orbs -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/25 rounded-full blur-3xl animate-blob"></div>
    <div class="absolute top-1/3 -right-24 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-blob" style="animation-delay: 2s;"></div>
    <div class="absolute -bottom-24 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob" style="animation-delay: 4s;"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-60"></div>
  </div>

  <!-- Toast Notification Container (No alert() used anywhere) -->
  <div id="toast-container" class="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <!-- Top Navigation Bar -->
  <header class="sticky top-0 z-40 border-b border-white/10 bg-[#070913]/85 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Brand Logo -->
        <button onclick="navigateTo('home')" class="flex items-center gap-3 text-left group focus:outline-none">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            <i data-lucide="sparkles" class="w-5 h-5 text-white"></i>
          </div>
          <div>
            <span class="text-xs font-bold tracking-widest uppercase text-indigo-400 block leading-none">CampusVerse</span>
            <span class="text-base sm:text-lg font-extrabold bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent">Career & Skill Hub</span>
          </div>
        </button>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10">
          <button onclick="navigateTo('home')" id="nav-home" class="nav-pill px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow">
            Home
          </button>
          <button onclick="navigateTo('careerdna')" id="nav-careerdna" class="nav-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            06 · CareerDNA
          </button>
          <button onclick="navigateTo('skillswap')" id="nav-skillswap" class="nav-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            07 · SkillSwap
          </button>
          <button onclick="navigateTo('portfoliox')" id="nav-portfoliox" class="nav-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            08 · PortfolioX
          </button>
          <button onclick="navigateTo('interviewx')" id="nav-interviewx" class="nav-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            09 · InterviewX
          </button>
          <button onclick="navigateTo('projecthub')" id="nav-projecthub" class="nav-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            10 · ProjectHub
          </button>
        </nav>

        <!-- Mobile Menu Toggle -->
        <div class="flex items-center gap-2 lg:hidden">
          <button onclick="toggleMobileMenu()" class="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition" aria-label="Toggle Menu">
            <i data-lucide="menu" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div id="mobile-menu" class="hidden lg:hidden border-t border-white/10 bg-[#0b0f1e]/95 px-4 py-3 space-y-1.5">
      <button onclick="navigateTo('home'); toggleMobileMenu()" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">🏠 Home Dashboard</button>
      <button onclick="navigateTo('careerdna'); toggleMobileMenu()" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10">🧬 06 · CareerDNA</button>
      <button onclick="navigateTo('skillswap'); toggleMobileMenu()" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10">🤝 07 · SkillSwap</button>
      <button onclick="navigateTo('portfoliox'); toggleMobileMenu()" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10">🎨 08 · PortfolioX</button>
      <button onclick="navigateTo('interviewx'); toggleMobileMenu()" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10">🎙️ 09 · InterviewX</button>
      <button onclick="navigateTo('projecthub'); toggleMobileMenu()" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10">🚀 10 · ProjectHub</button>
    </div>
  </header>

  <!-- MAIN APPLICATION CONTAINER -->
  <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

    <!-- ========================================================= -->
    <!-- VIEW 0: HOME DASHBOARD (FEATURE DASHBOARD DESIGN)         -->
    <!-- ========================================================= -->
    <section id="view-home" class="view-section animate-fade-in-up space-y-12">
      <!-- Hero Banner -->
      <div class="relative overflow-hidden rounded-3xl glass-card p-6 sm:p-10 lg:p-12 border border-white/15">
        <div class="absolute -right-16 -top-16 w-72 h-72 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-2xl pointer-events-none"></div>
        <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div class="space-y-4 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              BUILD YOUR FUTURE · CAMPUSVERSE
            </div>
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span class="bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent">AI Career & Skill</span>
              <span class="block bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">Development</span>
            </h1>
            <p class="text-slate-300 text-base sm:text-lg leading-relaxed font-bengali">
              তোমার ক্যারিয়ার প্ল্যানিং, পিয়ার-টু-পিয়ার স্কিল এক্সচেঞ্জ, নো-কোড পোর্টফোলিও, এআই মক ইন্টারভিউ এবং রিয়েল-ওয়ার্ল্ড টিম প্রজেক্ট—সবকিছু এক প্ল্যাটফর্মে! যেকোনো মডিউলে ক্লিক করে বিস্তারিত এক্সপ্লোর করো।
            </p>
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <span class="px-4 py-2 rounded-2xl bg-white/10 border border-white/15 text-sm font-bold text-cyan-300 flex items-center gap-2">
                <i data-lucide="layers" class="w-4 h-4"></i> 5 Modules Included
              </span>
              <button onclick="navigateTo('careerdna')" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:to-pink-400 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2">
                Start with 06 · CareerDNA <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Interactive Mini Stats Card -->
          <div class="grid grid-cols-2 gap-3 sm:gap-4 lg:w-96 shrink-0">
            <div class="p-4 rounded-2xl bg-indigo-500/15 border border-indigo-400/25">
              <div class="text-xs font-bold uppercase tracking-wider text-indigo-300">AI Career Paths</div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white mt-1">12+</div>
              <div class="text-xs text-slate-400 mt-1">AI/ML, SWE, Web, Cyber</div>
            </div>
            <div class="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/25">
              <div class="text-xs font-bold uppercase tracking-wider text-emerald-300">Active Swappers</div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white mt-1">1,480+</div>
              <div class="text-xs text-slate-400 mt-1">Peer Skill Sessions</div>
            </div>
            <div class="p-4 rounded-2xl bg-amber-500/15 border border-amber-400/25">
              <div class="text-xs font-bold uppercase tracking-wider text-amber-300">Live Portfolios</div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white mt-1">4 Themes</div>
              <div class="text-xs text-slate-400 mt-1">Zero Coding Needed</div>
            </div>
            <div class="p-4 rounded-2xl bg-rose-500/15 border border-rose-400/25">
              <div class="text-xs font-bold uppercase tracking-wider text-rose-300">AI Mock Drills</div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white mt-1">500+ Qs</div>
              <div class="text-xs text-slate-400 mt-1">Tech + HR Voice Eval</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-cyan-400">Interactive Ecosystem</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-1">Explore All 5 Career & Skill Modules</h2>
        </div>
        <p class="text-sm text-slate-400">Click any module card below to open its full interactive workspace</p>
      </div>

      <!-- 5 Colorful Module Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Module 06: CareerDNA -->
        <div onclick="navigateTo('careerdna')" role="button" tabindex="0"
             class="cursor-pointer group relative rounded-3xl glass-card glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-indigo-500 flex flex-col justify-between">
          <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/35 transition-all"></div>
          <div>
            <div class="flex items-center justify-between mb-5">
              <span class="px-3 py-1 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold tracking-wider">
                06 · CareerDNA
              </span>
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:rotate-6 transition-transform">
                <i data-lucide="dna" class="w-6 h-6 text-white"></i>
              </div>
            </div>
            <h3 class="text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">06 · CareerDNA</h3>
            <p class="text-indigo-200 font-semibold text-sm mt-1">Discover your career path with AI.</p>
            <p class="text-slate-400 text-sm mt-3 font-bengali leading-relaxed">
              নিজের interest ও skill অনুযায়ী career analysis, Skill Gap Analysis, Personalized Roadmap ও AI Career Advisor।
            </p>
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">AI Assessment</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">Skill Gap</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">Roadmap</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">7 Features</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-indigo-400 group-hover:text-cyan-300">
            <span>Open CareerDNA Page</span>
            <span class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </span>
          </div>
        </div>

        <!-- Module 07: SkillSwap -->
        <div onclick="navigateTo('skillswap')" role="button" tabindex="0"
             class="cursor-pointer group relative rounded-3xl glass-card glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-emerald-500 flex flex-col justify-between">
          <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/35 transition-all"></div>
          <div>
            <div class="flex items-center justify-between mb-5">
              <span class="px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold tracking-wider">
                07 · SkillSwap
              </span>
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:rotate-6 transition-transform">
                <i data-lucide="repeat" class="w-6 h-6 text-white"></i>
              </div>
            </div>
            <h3 class="text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">07 · SkillSwap</h3>
            <p class="text-emerald-200 font-semibold text-sm mt-1">Learn and exchange skills.</p>
            <p class="text-slate-400 text-sm mt-3 font-bengali leading-relaxed">
              একজন শিক্ষার্থী অন্য শিক্ষার্থীকে skill শেখাবে—আমি C++ শেখাব, তুমি আমাকে English শেখাবে। Live sessions ও reviews।
            </p>
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">Skill Exchange</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">Partner Finder</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">7 Features</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-emerald-400 group-hover:text-teal-300">
            <span>Open SkillSwap Page</span>
            <span class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </span>
          </div>
        </div>

        <!-- Module 08: PortfolioX -->
        <div onclick="navigateTo('portfoliox')" role="button" tabindex="0"
             class="cursor-pointer group relative rounded-3xl glass-card glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-amber-500 flex flex-col justify-between">
          <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/35 transition-all"></div>
          <div>
            <div class="flex items-center justify-between mb-5">
              <span class="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-extrabold tracking-wider">
                08 · PortfolioX
              </span>
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:rotate-6 transition-transform">
                <i data-lucide="layout-template" class="w-6 h-6 text-white"></i>
              </div>
            </div>
            <h3 class="text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">08 · PortfolioX</h3>
            <p class="text-amber-200 font-semibold text-sm mt-1">Build your professional identity.</p>
            <p class="text-slate-400 text-sm mt-3 font-bengali leading-relaxed">
              কোনো coding ছাড়াই Professional Portfolio তৈরি—AI Generator, 4 Templates, GitHub Integration ও AI Portfolio Review।
            </p>
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">No-Code AI</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">4 Templates</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">7 Features</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-amber-400 group-hover:text-orange-300">
            <span>Open PortfolioX Page</span>
            <span class="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </span>
          </div>
        </div>

        <!-- Module 09: InterviewX -->
        <div onclick="navigateTo('interviewx')" role="button" tabindex="0"
             class="cursor-pointer group relative rounded-3xl glass-card glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-rose-500 flex flex-col justify-between">
          <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-rose-500/20 rounded-full blur-2xl group-hover:bg-rose-500/35 transition-all"></div>
          <div>
            <div class="flex items-center justify-between mb-5">
              <span class="px-3 py-1 rounded-xl bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-extrabold tracking-wider">
                09 · InterviewX
              </span>
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-rose-500/30 group-hover:rotate-6 transition-transform">
                <i data-lucide="mic" class="w-6 h-6 text-white"></i>
              </div>
            </div>
            <h3 class="text-2xl font-extrabold text-white group-hover:text-rose-300 transition-colors">09 · InterviewX</h3>
            <p class="text-rose-200 font-semibold text-sm mt-1">Practice interviews with AI.</p>
            <p class="text-slate-400 text-sm mt-3 font-bengali leading-relaxed">
              Real Interview-এর আগে AI-এর সঙ্গে Practice—Technical (C++, DSA, OOP, SQL), HR, Voice Interview ও Score Analysis।
            </p>
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">AI Mock</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">Voice Eval</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">8 Features</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-rose-400 group-hover:text-pink-300">
            <span>Open InterviewX Page</span>
            <span class="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </span>
          </div>
        </div>

        <!-- Module 10: ProjectHub -->
        <div onclick="navigateTo('projecthub')" role="button" tabindex="0"
             class="cursor-pointer group relative rounded-3xl glass-card glass-card-hover p-6 sm:p-7 overflow-hidden border-t-4 border-t-sky-500 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
          <div class="absolute -right-10 -bottom-10 w-56 h-56 bg-sky-500/20 rounded-full blur-2xl group-hover:bg-sky-500/35 transition-all"></div>
          <div>
            <div class="flex items-center justify-between mb-5">
              <span class="px-3 py-1 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-extrabold tracking-wider">
                10 · ProjectHub
              </span>
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:rotate-6 transition-transform">
                <i data-lucide="rocket" class="w-6 h-6 text-white"></i>
              </div>
            </div>
            <h3 class="text-2xl font-extrabold text-white group-hover:text-sky-300 transition-colors">10 · ProjectHub</h3>
            <p class="text-sky-200 font-semibold text-sm mt-1">Collaborate, build real-world projects and showcase your work.</p>
            <p class="text-slate-400 text-sm mt-3 font-bengali leading-relaxed max-w-2xl">
              Team তৈরি করে Real-world Project Development—Project Marketplace, 2–5 জনের Team Formation, Find Teammates, Task Management, GitHub Integration ও Mentor Feedback।
            </p>
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">Marketplace</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">2–5 Team Formation</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">Task Board</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">Mentor Feedback</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">9 Features</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-sky-400 group-hover:text-cyan-300">
            <span>Open ProjectHub Page</span>
            <span class="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </span>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- VIEW 1: 06 · CareerDNA                                    -->
    <!-- ========================================================= -->
    <section id="view-careerdna" class="view-section hidden animate-fade-in-up space-y-8">
      <!-- Top Back to Home Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-indigo-600 text-white font-bold text-sm border border-white/15 transition-all shadow-md">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
        </button>
        <span class="px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
          Module 06 of 10 · AI Career Intelligence
        </span>
      </div>

      <!-- Module Hero Banner -->
      <div class="rounded-3xl glass-card p-6 sm:p-10 border-l-4 border-l-indigo-500 bg-gradient-to-br from-indigo-950/60 via-slate-900/70 to-cyan-950/40">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 text-indigo-400 font-extrabold text-sm uppercase tracking-widest">
              <i data-lucide="dna" class="w-5 h-5"></i> 06 · CareerDNA
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white">Discover your career path with AI.</h1>
            <p class="text-slate-300 font-bengali text-base max-w-2xl">
              তোমার বর্তমান স্কিল, আগ্রহ ও জব মার্কেট ডিমান্ড বিশ্লেষণ করে AI তৈরি করবে তোমার পারফেক্ট ক্যারিয়ার রোডম্যাপ।
            </p>
          </div>
          <div class="px-5 py-4 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 text-center shrink-0">
            <div class="text-xs text-indigo-300 font-bold uppercase">AI Match Engine</div>
            <div class="text-2xl font-extrabold text-white mt-0.5">98.4% Accuracy</div>
          </div>
        </div>
      </div>

      <!-- Interactive Demo: AI Career Assessment + Skill Gap + Roadmap -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Left: AI Career Assessment & Path Finder -->
        <div class="lg:col-span-7 rounded-3xl glass-card p-6 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-extrabold text-white flex items-center gap-2">
                <i data-lucide="cpu" class="w-5 h-5 text-indigo-400"></i> Interactive AI Career Assessment & Path Finder
              </h2>
              <p class="text-xs text-slate-400 font-bengali mt-0.5">নিজের interest ও skill সিলেক্ট করে live career analysis দেখো</p>
            </div>
          </div>

          <!-- Path Selector Buttons -->
          <div>
            <label class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Choose Target Career Path:</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="career-path-buttons">
              <button onclick="selectCareerPath('aiml')" data-path="aiml" class="career-tab px-3 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white border border-indigo-400 shadow">🤖 AI / ML</button>
              <button onclick="selectCareerPath('swe')" data-path="swe" class="career-tab px-3 py-2.5 rounded-xl text-xs font-bold bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10">💻 Software Eng.</button>
              <button onclick="selectCareerPath('web')" data-path="web" class="career-tab px-3 py-2.5 rounded-xl text-xs font-bold bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10">🌐 Web Dev</button>
              <button onclick="selectCareerPath('cyber')" data-path="cyber" class="career-tab px-3 py-2.5 rounded-xl text-xs font-bold bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10">🛡️ Cybersecurity</button>
            </div>
          </div>

          <!-- Dynamic Result Box -->
          <div id="career-dynamic-output" class="p-5 rounded-2xl bg-slate-900/80 border border-indigo-500/30 space-y-5">
            <!-- Populated by JS -->
          </div>
        </div>

        <!-- Right: AI Career Advisor Chat + Career Goal Tracker -->
        <div class="lg:col-span-5 space-y-6">
          <!-- AI Career Advisor -->
          <div class="rounded-3xl glass-card p-6 space-y-4">
            <h3 class="text-lg font-extrabold text-white flex items-center gap-2">
              <i data-lucide="bot" class="w-5 h-5 text-cyan-400"></i> AI Career Advisor
            </h3>
            <p class="text-xs text-slate-400 font-bengali">Career-related যেকোনো প্রশ্ন করো বা নিচের প্রশ্নগুলোতে ক্লিক করো:</p>
            <div id="advisor-chat-box" class="h-44 overflow-y-auto p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 space-y-2.5 text-xs">
              <div class="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-400/20 text-indigo-100">
                <strong>CareerDNA AI:</strong> হাই! আমি তোমার AI Career Advisor। তুমি কোন ক্যারিয়ার পাথ বা স্কিল নিয়ে জানতে চাও?
              </div>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <button onclick="askCareerAdvisor('AI/ML শুরু করতে কী কী শিখব?')" class="text-[11px] px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 hover:bg-cyan-500/25">AI/ML শুরু করব কীভাবে?</button>
              <button onclick="askCareerAdvisor('২০২৬ সালে কোন স্কিলের চাহিদা বেশি?')" class="text-[11px] px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/25 hover:bg-purple-500/25">কোন স্কিলের demand বেশি?</button>
            </div>
            <form onsubmit="handleAdvisorSubmit(event)" class="flex gap-2">
              <input id="advisor-input" type="text" placeholder="তোমার প্রশ্ন লিখো..." class="flex-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400" />
              <button type="submit" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold">Ask AI</button>
            </form>
          </div>

          <!-- Career Goal Tracker -->
          <div class="rounded-3xl glass-card p-6 space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-extrabold text-white flex items-center gap-2">
                <i data-lucide="target" class="w-5 h-5 text-emerald-400"></i> Career Goal Tracker
              </h3>
              <span id="goal-progress-badge" class="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300">2/4 Done</span>
            </div>
            <p class="text-xs text-slate-400 font-bengali">নিজের career goals track করো (ক্লিক করে চেক/আনচেক করো):</p>
            <div id="career-goals-list" class="space-y-2 text-sm">
              <!-- Populated by JS -->
            </div>
          </div>
        </div>
      </div>

      <!-- All 7 Features Complete Overview Grid -->
      <div class="space-y-4">
        <h3 class="text-xl font-extrabold text-white">All Features in 06 · CareerDNA</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-indigo-500">
            <h4 class="font-bold text-white">1. AI Career Assessment</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">নিজের interest ও skill অনুযায়ী career analysis।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-cyan-500">
            <h4 class="font-bold text-white">2. Career Path Finder</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">AI/ML, Software Engineering, Web Development, Cybersecurity ইত্যাদি career path।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-rose-500">
            <h4 class="font-bold text-white">3. Skill Gap Analysis</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">কোন skill কম আছে তা identify করা।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-purple-500">
            <h4 class="font-bold text-white">4. Personalized Roadmap</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">Beginner থেকে Professional হওয়ার step-by-step roadmap।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-emerald-500">
            <h4 class="font-bold text-white">5. Career Goal Tracker</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">নিজের career goals track করা।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-amber-500">
            <h4 class="font-bold text-white">6. Job Market Insights</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">কোন skill-এর demand বেশি তা দেখা।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-fuchsia-500 sm:col-span-2 lg:col-span-3">
            <h4 class="font-bold text-white">7. AI Career Advisor</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">Career-related প্রশ্নের তাৎক্ষণিক উত্তর ও মেন্টরশিপ গাইডলাইন।</p>
          </div>
        </div>
      </div>

      <!-- Bottom Back to Home Button -->
      <div class="pt-4 flex justify-center">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/30 transition-all">
          <i data-lucide="home" class="w-4 h-4"></i> ← Back to Home Dashboard
        </button>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- VIEW 2: 07 · SkillSwap                                    -->
    <!-- ========================================================= -->
    <section id="view-skillswap" class="view-section hidden animate-fade-in-up space-y-8">
      <!-- Top Back to Home Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-emerald-600 text-white font-bold text-sm border border-white/15 transition-all shadow-md">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
        </button>
        <span class="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
          Module 07 of 10 · Peer-to-Peer Learning
        </span>
      </div>

      <!-- Hero Banner -->
      <div class="rounded-3xl glass-card p-6 sm:p-10 border-l-4 border-l-emerald-500 bg-gradient-to-br from-emerald-950/60 via-slate-900/70 to-teal-950/40">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 text-emerald-400 font-extrabold text-sm uppercase tracking-widest">
              <i data-lucide="repeat" class="w-5 h-5"></i> 07 · SkillSwap
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white">Learn and exchange skills.</h1>
            <p class="text-slate-300 font-bengali text-base max-w-2xl">
              একজন শিক্ষার্থী অন্য শিক্ষার্থীকে skill শেখাবে — <span class="text-emerald-300 font-bold">"আমি C++ শেখাব, তুমি আমাকে English শেখাবে।"</span> কোনো টাকা ছাড়াই একে অপরের সাথে স্কিল এক্সচেঞ্জ করো!
            </p>
          </div>
          <div class="px-5 py-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-center shrink-0">
            <div class="text-xs text-emerald-300 font-bold uppercase">Learning Progress</div>
            <div class="text-2xl font-extrabold text-white mt-0.5">18.5 Hours Swapped</div>
          </div>
        </div>
      </div>

      <!-- Interactive Skill Exchange Matchmaker -->
      <div class="rounded-3xl glass-card p-6 space-y-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-extrabold text-white flex items-center gap-2">
              <i data-lucide="users" class="w-5 h-5 text-emerald-400"></i> Find a Learning Partner (Skill Exchange Matchmaker)
            </h2>
            <p class="text-xs text-slate-400 font-bengali">তুমি কী শেখাতে পারো এবং কী শিখতে চাও তা সিলেক্ট করো</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <select id="swap-teach" onchange="filterSkillPartners()" class="px-3.5 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs font-bold text-emerald-300 focus:outline-none">
              <option value="all">I Can Teach: Any Skill</option>
              <option value="C++">I Can Teach: C++</option>
              <option value="Python">I Can Teach: Python</option>
              <option value="UI/UX Design">I Can Teach: UI/UX Design</option>
            </select>
            <select id="swap-learn" onchange="filterSkillPartners()" class="px-3.5 py-2 rounded-xl bg-slate-900 border border-teal-500/40 text-xs font-bold text-teal-300 focus:outline-none">
              <option value="all">I Want to Learn: Any Skill</option>
              <option value="English">I Want to Learn: English</option>
              <option value="React">I Want to Learn: React</option>
              <option value="Public Speaking">I Want to Learn: Public Speaking</option>
            </select>
          </div>
        </div>

        <!-- Student Skill Profiles Grid -->
        <div id="skill-partners-grid" class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- Live Session + Community Discussion + Progress -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Live Learning Sessions & Progress -->
        <div class="rounded-3xl glass-card p-6 space-y-5">
          <h3 class="text-lg font-extrabold text-white flex items-center gap-2">
            <i data-lucide="video" class="w-5 h-5 text-rose-400"></i> Live Learning Sessions & Progress
          </h3>
          <div class="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-400/30 flex items-center justify-between gap-4">
            <div>
              <span class="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300">
                <span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span> LIVE ROOM
              </span>
              <h4 class="font-bold text-white mt-1.5">C++ STL ↔ Spoken English Practice</h4>
              <p class="text-xs text-slate-300 mt-0.5">With Nusrat Jahan (CSE, BUET) · 45 mins session</p>
            </div>
            <button onclick="showToast('Joined Live SkillSwap Room! Audio & Whiteboard connected.')" class="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shrink-0">
              Join Room
            </button>
          </div>

          <!-- Learning Progress Bars -->
          <div class="space-y-3 pt-2">
            <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Your Learning Progress Tracker</div>
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-emerald-300">Spoken English (Learned from Nusrat)</span>
                <span class="text-white">75%</span>
              </div>
              <div class="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style="width: 75%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-cyan-300">C++ & Problem Solving (Taught to Peers)</span>
                <span class="text-white">90% · ⭐ 4.9 Rating</span>
              </div>
              <div class="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-full" style="width: 90%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Community Discussion -->
        <div class="rounded-3xl glass-card p-6 space-y-4">
          <h3 class="text-lg font-extrabold text-white flex items-center gap-2">
            <i data-lucide="message-square" class="w-5 h-5 text-teal-400"></i> Community Discussion (প্রশ্ন, উত্তর ও আলোচনা)
          </h3>
          <div id="community-thread" class="space-y-2.5 max-h-48 overflow-y-auto pr-1">
            <div class="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs">
              <div class="font-bold text-emerald-300">Tanvir Ahmed · 10 mins ago</div>
              <p class="text-slate-200 mt-1 font-bengali">কেউ কি আমাকে IELTS Speaking-এ হেল্প করতে পারবে? বিনিময়ে আমি Python ও Django শেখাব!</p>
            </div>
            <div class="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs">
              <div class="font-bold text-cyan-300">Sadia Islam · 4 mins ago</div>
              <p class="text-slate-200 mt-1 font-bengali">আমি রাজি! প্রতিদিন রাত ৯টায় ৩০ মিনিট করে প্র্যাকটিস করতে পারি।</p>
            </div>
          </div>
          <form onsubmit="postCommunityReply(event)" class="flex gap-2">
            <input id="community-input" type="text" placeholder="আলোচনায় তোমার মতামত বা অফার লিখো..." class="flex-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400" />
            <button type="submit" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold">Post</button>
          </form>
        </div>
      </div>

      <!-- All 7 Features Overview -->
      <div class="space-y-4">
        <h3 class="text-xl font-extrabold text-white">All Features in 07 · SkillSwap</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-emerald-500">
            <h4 class="font-bold text-white">1. Skill Exchange</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">আমি C++ শেখাব, তুমি আমাকে English শেখাবে।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-teal-500">
            <h4 class="font-bold text-white">2. Find a Learning Partner</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">নিজের পছন্দ অনুযায়ী partner খোঁজা।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-cyan-500">
            <h4 class="font-bold text-white">3. Student Skill Profiles</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">কে কোন skill জানে তা দেখা।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-rose-500">
            <h4 class="font-bold text-white">4. Live Learning Sessions</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">শেখা ও শেখানোর interactive live session।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-indigo-500">
            <h4 class="font-bold text-white">5. Community Discussion</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">প্রশ্ন, উত্তর ও আলোচনা।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-amber-500">
            <h4 class="font-bold text-white">6. Skill Rating & Reviews</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">Learning partner-কে review দেওয়া।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-lime-500 sm:col-span-2 lg:col-span-3">
            <h4 class="font-bold text-white">7. Learning Progress</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">কতটুকু শিখলে তা রিয়েল-টাইমে track করা।</p>
          </div>
        </div>
      </div>

      <!-- Bottom Back to Home Button -->
      <div class="pt-4 flex justify-center">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/30 transition-all">
          <i data-lucide="home" class="w-4 h-4"></i> ← Back to Home Dashboard
        </button>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- VIEW 3: 08 · PortfolioX                                   -->
    <!-- ========================================================= -->
    <section id="view-portfoliox" class="view-section hidden animate-fade-in-up space-y-8">
      <!-- Top Back to Home Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-amber-600 text-white font-bold text-sm border border-white/15 transition-all shadow-md">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
        </button>
        <span class="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider">
          Module 08 of 10 · No-Code AI Portfolio Builder
        </span>
      </div>

      <!-- Hero Banner -->
      <div class="rounded-3xl glass-card p-6 sm:p-10 border-l-4 border-l-amber-500 bg-gradient-to-br from-amber-950/50 via-slate-900/70 to-orange-950/40">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 text-amber-400 font-extrabold text-sm uppercase tracking-widest">
              <i data-lucide="layout-template" class="w-5 h-5"></i> 08 · PortfolioX
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white">Build your professional identity.</h1>
            <p class="text-slate-300 font-bengali text-base max-w-2xl">
              কোনো coding ছাড়াই Professional Portfolio তৈরি করো — নিজের তথ্য দাও, পছন্দের টেমপ্লেট বাছো, GitHub ও Resume যুক্ত করো এবং পাও Live Portfolio URL।
            </p>
          </div>
          <button onclick="copyPortfolioUrl()" class="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shrink-0 shadow-lg shadow-amber-500/25">
            <i data-lucide="link" class="w-4 h-4"></i> Copy Live URL
          </button>
        </div>
      </div>

      <!-- Interactive Live No-Code Portfolio Builder -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Controls Panel -->
        <div class="lg:col-span-5 rounded-3xl glass-card p-6 space-y-4">
          <h2 class="text-lg font-extrabold text-white flex items-center gap-2">
            <i data-lucide="wand-2" class="w-5 h-5 text-amber-400"></i> AI Portfolio Generator Controls
          </h2>

          <div>
            <label class="text-xs font-bold text-slate-400 block mb-1">Your Full Name</label>
            <input id="px-name" oninput="updatePortfolioPreview()" type="text" value="Arafat Rahman" class="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400" />
          </div>

          <div>
            <label class="text-xs font-bold text-slate-400 block mb-1">Headline / Role</label>
            <input id="px-role" oninput="updatePortfolioPreview()" type="text" value="Full-Stack Developer & AI Enthusiast" class="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400" />
          </div>

          <div>
            <label class="text-xs font-bold text-slate-400 block mb-1.5">Multiple Templates (Click to Switch)</label>
            <div class="grid grid-cols-2 gap-2">
              <button onclick="setPortfolioTemplate('modern')" class="px-3 py-2 rounded-xl bg-indigo-500/20 border border-indigo-400/40 text-xs font-bold text-indigo-200 hover:bg-indigo-500/30">✨ Modern</button>
              <button onclick="setPortfolioTemplate('minimal')" class="px-3 py-2 rounded-xl bg-slate-700/40 border border-slate-500/40 text-xs font-bold text-slate-200 hover:bg-slate-700/60">🤍 Minimal</button>
              <button onclick="setPortfolioTemplate('developer')" class="px-3 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-xs font-bold text-emerald-200 hover:bg-emerald-500/30">💻 Developer</button>
              <button onclick="setPortfolioTemplate('creative')" class="px-3 py-2 rounded-xl bg-pink-500/20 border border-pink-400/40 text-xs font-bold text-pink-200 hover:bg-pink-500/30">🎨 Creative</button>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 pt-1">
            <button onclick="showToast('GitHub Repositories Synced! 4 pinned projects imported.')" class="flex-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5">
              <i data-lucide="github" class="w-4 h-4"></i> Sync GitHub
            </button>
            <button onclick="showToast('Resume_Arafat_2026.pdf attached to portfolio!')" class="flex-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5">
              <i data-lucide="file-text" class="w-4 h-4"></i> Upload CV
            </button>
          </div>

          <button onclick="runAiPortfolioReview()" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs shadow-lg">
            ✨ Run AI Portfolio Review
          </button>

          <div id="px-ai-review-box" class="hidden p-3.5 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-xs text-amber-100 space-y-1">
            <div class="font-extrabold text-amber-300">AI Portfolio Score: 92/100 🌟</div>
            <p>• Strong project showcase with GitHub live links.</p>
            <p>• Suggestion: Add quantified metrics (e.g., "Reduced API latency by 40%") to stand out to recruiters.</p>
          </div>
        </div>

        <!-- Live Preview Canvas -->
        <div class="lg:col-span-7">
          <div id="px-preview-card" class="rounded-3xl p-6 sm:p-8 border border-white/20 bg-gradient-to-br from-indigo-900/70 via-slate-900 to-purple-900/70 shadow-2xl transition-all duration-300 space-y-5">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-4">
              <span id="px-live-url" class="text-xs font-mono px-3 py-1 rounded-full bg-black/40 text-amber-300 border border-white/10">
                https://campusverse.io/p/arafat-rahman
              </span>
              <span id="px-template-badge" class="text-xs font-bold uppercase px-3 py-1 rounded-full bg-white/10 text-white">
                Template: Modern
              </span>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-pink-500 flex items-center justify-center text-2xl font-extrabold text-slate-950 shadow-lg">
                AR
              </div>
              <div>
                <h3 id="px-preview-name" class="text-2xl font-extrabold text-white">Arafat Rahman</h3>
                <p id="px-preview-role" class="text-sm text-amber-300 font-semibold">Full-Stack Developer & AI Enthusiast</p>
                <div class="flex items-center gap-2 mt-1.5 text-xs text-slate-300">
                  <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">✓ GitHub Connected</span>
                  <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-semibold">✓ Resume Attached</span>
                </div>
              </div>
            </div>

            <!-- Project Showcase Preview -->
            <div class="space-y-2.5">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Featured Project Showcase</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="p-4 rounded-2xl bg-black/35 border border-white/10">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-sm text-white">Smart Traffic AI</span>
                    <span class="text-[11px] text-amber-300">★ 48 GitHub</span>
                  </div>
                  <p class="text-xs text-slate-300 mt-1">YOLOv8 based Dhaka traffic density analyzer with real-time dashboard.</p>
                </div>
                <div class="p-4 rounded-2xl bg-black/35 border border-white/10">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-sm text-white">EduTrack App</span>
                    <span class="text-[11px] text-cyan-300">Live Demo ↗</span>
                  </div>
                  <p class="text-xs text-slate-300 mt-1">Full-stack student attendance & routine tracker built with React & Node.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- All 7 Features Overview -->
      <div class="space-y-4">
        <h3 class="text-xl font-extrabold text-white">All Features in 08 · PortfolioX</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-amber-500">
            <h4 class="font-bold text-white">1. AI Portfolio Generator</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">তথ্য দিয়ে automatic portfolio তৈরি।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-orange-500">
            <h4 class="font-bold text-white">2. Multiple Templates</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">Modern, Minimal, Developer, Creative।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-indigo-500">
            <h4 class="font-bold text-white">3. GitHub Integration</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">GitHub projects showcase।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-pink-500">
            <h4 class="font-bold text-white">4. Project Showcase</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">নিজের projects, screenshots ও descriptions।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-cyan-500">
            <h4 class="font-bold text-white">5. Resume Upload</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">CV/Resume যুক্ত করা।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-emerald-500">
            <h4 class="font-bold text-white">6. Live Portfolio URL</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">নিজের shareable portfolio link।</p>
          </div>
          <div class="p-5 rounded-2xl glass-card border-l-4 border-l-yellow-400 sm:col-span-2 lg:col-span-3">
            <h4 class="font-bold text-white">7. AI Portfolio Review</h4>
            <p class="text-sm text-slate-300 font-bengali mt-1">Portfolio-এর quality ও improvement suggestions।</p>
          </div>
        </div>
      </div>

      <!-- Bottom Back to Home Button -->
      <div class="pt-4 flex justify-center">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/30 transition-all">
          <i data-lucide="home" class="w-4 h-4"></i> ← Back to Home Dashboard
        </button>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- VIEW 4: 09 · InterviewX                                   -->
    <!-- ========================================================= -->
    <section id="view-interviewx" class="view-section hidden animate-fade-in-up space-y-8">
      <!-- Top Back to Home Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-rose-600 text-white font-bold text-sm border border-white/15 transition-all shadow-md">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
        </button>
        <span class="px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-extrabold uppercase tracking-wider">
          Module 09 of 10 · AI Mock Interview Studio
        </span>
      </div>

      <!-- Hero Banner -->
      <div class="rounded-3xl glass-card p-6 sm:p-10 border-l-4 border-l-rose-500 bg-gradient-to-br from-rose-950/60 via-slate-900/70 to-fuchsia-950/40">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 text-rose-400 font-extrabold text-sm uppercase tracking-widest">
              <i data-lucide="mic" class="w-5 h-5"></i> 09 · InterviewX
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white">Practice interviews with AI.</h1>
            <p class="text-slate-300 font-bengali text-base max-w-2xl">
              Real Interview-এর আগে AI-এর সঙ্গে Practice করো — Technical (C++, DSA, OOP, DBMS, SQL, Python), HR Interview ও Voice-Based উত্তর দিয়ে তাৎক্ষণিক Score ও Feedback পাও।
            </p>
          </div>
          <div class="px-5 py-4 rounded-2xl bg-rose-500/15 border border-rose-400/30 text-center shrink-0">
            <div class="text-xs text-rose-300 font-bold uppercase">Latest Interview Score</div>
            <div id="ix-top-score" class="text-2xl font-extrabold text-white mt-0.5">86 / 100</div>
          </div>
        </div>
      </div>

      <!-- Interactive AI Mock Interview Simulator -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-7 rounded-3xl glass-card p-6 space-y-5">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h2 class="text-xl font-extrabold text-white flex items-center gap-2">
              <i data-lucide="bot" class="w-5 h-5 text-rose-400"></i> AI Mock Interview Simulator
            </h2>
            <div class="flex gap-2">
              <button onclick="setInterviewTrack('tech')" id="ix-btn-tech" class="px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold">Technical (DSA/OOP/SQL)</button>
              <button onclick="setInterviewTrack('hr')" id="ix-btn-hr" class="px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 text-xs font-bold">HR Interview</button>
            </div>
          </div>

          <!-- AI Question Prompt -->
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-rose-500/30 space-y-2">
            <span id="ix-track-label" class="text-[11px] font-bold uppercase tracking-wider text-rose-400">Technical Track · OOP & C++</span>
            <p id="ix-question-text" class="text-base font-bold text-white">
              "Explain the difference between Compile-time Polymorphism and Run-time Polymorphism in C++ with a real-world example."
            </p>
          </div>

          <!-- Voice-Based Interview Mic Toggle + Text Answer -->
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
              <button onclick="toggleVoiceRecording()" id="ix-mic-btn" class="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/40 text-rose-200 text-xs font-bold flex items-center gap-2">
                <i data-lucide="mic" class="w-4 h-4"></i> <span id="ix-mic-label">Start Voice Answer</span>
              </button>
              <!-- Animated Voice Waveform -->
              <div id="ix-waveform" class="hidden items-center gap-1 h-7 px-3">
                <span class="wave-bar w-1 bg-rose-400 rounded-full"></span>
                <span class="wave-bar w-1 bg-pink-400 rounded-full"></span>
                <span class="wave-bar w-1 bg-fuchsia-400 rounded-full"></span>
                <span class="wave-bar w-1 bg-rose-400 rounded-full"></span>
                <span class="wave-bar w-1 bg-amber-400 rounded-full"></span>
                <span class="wave-bar w-1 bg-rose-400 rounded-full"></span>
              </div>
              <button onclick="fillSampleInterviewAnswer()" class="text-xs text-cyan-300 hover:underline font-semibold">Auto-fill Sample Answer</button>
            </div>

            <textarea id="ix-answer-input" rows="3" placeholder="Type or speak your interview answer here..." class="w-full p-3.5 rounded-2xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-rose-400"></textarea>

            <button onclick="evaluateInterviewAnswer()" class="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-fuchsia-600 hover:from-rose-500 hover:to-fuchsia-500 text-white font-extrabold text-sm shadow-lg shadow-rose-500/25">
              Evaluate Answer with AI
            </button>
          </div>
        </div>

        <!-- Evaluation, Communication Feedback & Question Bank -->
        <div class="lg:col-span-5 space-y-6">
          <div class="rounded-3xl glass-card p-6 space-y-4">
            <h3 class="text-lg font-extrabold text-white flex items-center gap-2">
              <i data-lucide="award" class="w-5 h-5 text-amber-400"></i> Answer Evaluation & Communication Feedback
            </h3>
            <div id="ix-eval-result" class="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3 text-xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-slate-300">Interview Score:</span>
                <span class="text-lg font-extrabold text-emerald-400">86 / 100</span>
              </div>
              <div class="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-200">
                <strong>Answer Evaluation:</strong> Clear explanation of function overloading vs virtual functions. Good technical depth!
              </div>
              <div class="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/25 text-cyan-200">
                <strong>Communication Feedback:</strong> Confident English structure. Tip: Slow down slightly when giving code examples.
              </div>
            </div>
          </div>

          <!-- Question Bank -->
          <div class="rounded-3xl glass-card p-6 space-y-3">
            <h3 class="text-lg font-extrabold text-white flex items-center gap-2">
              <i data-lucide="book-open" class="w-5 h-5 text-fuchsia-400"></i> Previous Question Bank
            </h3>
            <div class="space-y-2 text-xs">
              <div class="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <span class="text-slate-200 font-semibold">1. ACID Properties in DBMS & SQL Indexing</span>
                <span class="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">DBMS</span>
              </div>
              <div class="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <span class="text-slate-200 font-semibold">2. Time Complexity of QuickSort vs MergeSort</span>
                <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">DSA</span>
              </div>
              <div class="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <span class="text-slate-200 font-semibold">3. Tell me about a conflict in your project team.</span>
                <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">HR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- All 8 Features Overview -->
      <div class="space-y-4">
        <h3 class="text-xl font-extrabold text-white">All Features in 09 · InterviewX</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-rose-500">
            <h4 class="font-bold text-white text-sm">1. AI Mock Interview</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">AI interviewer-এর সঙ্গে practice।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-indigo-500">
            <h4 class="font-bold text-white text-sm">2. Technical Interview</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">C++, DSA, OOP, DBMS, SQL, Python ইত্যাদি।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-amber-500">
            <h4 class="font-bold text-white text-sm">3. HR Interview</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">Common HR questions ও behavioral prep।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-pink-500">
            <h4 class="font-bold text-white text-sm">4. Voice-Based Interview</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">Microphone দিয়ে উত্তর দেওয়া।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-emerald-500">
            <h4 class="font-bold text-white text-sm">5. Answer Evaluation</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">উত্তরের quality analysis।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-cyan-500">
            <h4 class="font-bold text-white text-sm">6. Communication Feedback</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">English communication improvement।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-purple-500">
            <h4 class="font-bold text-white text-sm">7. Interview Score</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">প্রতিটি interview-এর performance score।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-fuchsia-500">
            <h4 class="font-bold text-white text-sm">8. Question Bank</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">Previous interview questions archive।</p>
          </div>
        </div>
      </div>

      <!-- Bottom Back to Home Button -->
      <div class="pt-4 flex justify-center">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-fuchsia-600 hover:from-rose-500 hover:to-fuchsia-500 text-white font-extrabold text-sm shadow-lg shadow-rose-500/30 transition-all">
          <i data-lucide="home" class="w-4 h-4"></i> ← Back to Home Dashboard
        </button>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- VIEW 5: 10 · ProjectHub                                   -->
    <!-- ========================================================= -->
    <section id="view-projecthub" class="view-section hidden animate-fade-in-up space-y-8">
      <!-- Top Back to Home Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-sky-600 text-white font-bold text-sm border border-white/15 transition-all shadow-md">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
        </button>
        <span class="px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-extrabold uppercase tracking-wider">
          Module 10 of 10 · Real-World Team Collaboration
        </span>
      </div>

      <!-- Hero Banner -->
      <div class="rounded-3xl glass-card p-6 sm:p-10 border-l-4 border-l-sky-500 bg-gradient-to-br from-sky-950/60 via-slate-900/70 to-indigo-950/40">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 text-sky-400 font-extrabold text-sm uppercase tracking-widest">
              <i data-lucide="rocket" class="w-5 h-5"></i> 10 · ProjectHub
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white">Collaborate, build real-world projects and showcase your work.</h1>
            <p class="text-slate-300 font-bengali text-base max-w-2xl">
              ২–৫ জনের Team তৈরি করে Real-world Project Development করো — Project Marketplace, Find Teammates, Task Management, GitHub Integration ও Mentor Feedback।
            </p>
          </div>
          <div class="px-5 py-4 rounded-2xl bg-sky-500/15 border border-sky-400/30 text-center shrink-0">
            <div class="text-xs text-sky-300 font-bold uppercase">Active Sprint Progress</div>
            <div id="ph-progress-text" class="text-2xl font-extrabold text-white mt-0.5">67% Complete</div>
          </div>
        </div>
      </div>

      <!-- Interactive Workspace: Marketplace, Team Formation, Task Board & Mentor Feedback -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Left: Project Marketplace & Proposal Submission -->
        <div class="lg:col-span-6 rounded-3xl glass-card p-6 space-y-5">
          <h2 class="text-xl font-extrabold text-white flex items-center gap-2">
            <i data-lucide="folder-kanban" class="w-5 h-5 text-sky-400"></i> Project Marketplace & Team Formation (2–5 Members)
          </h2>

          <div class="space-y-3">
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Team: 3/5 Members</span>
                <h4 class="font-bold text-white mt-1">MediQuick — AI Telemedicine & Prescription App</h4>
                <p class="text-xs text-slate-400 mt-0.5">Looking for: <span class="text-sky-300 font-semibold">React Dev, UI/UX Designer</span></p>
              </div>
              <button onclick="showToast('Join request sent to MediQuick Team!')" class="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0">
                Join Team
              </button>
            </div>

            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300">Team: 2/4 Members</span>
                <h4 class="font-bold text-white mt-1">KrishiBondhu — Smart Crop Disease Detector</h4>
                <p class="text-xs text-slate-400 mt-0.5">Looking for: <span class="text-sky-300 font-semibold">Python ML, Flutter Dev</span></p>
              </div>
              <button onclick="showToast('Join request sent to KrishiBondhu Team!')" class="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0">
                Join Team
              </button>
            </div>
          </div>

          <!-- Submit Project Proposal -->
          <form onsubmit="submitProjectProposal(event)" class="pt-2 border-t border-white/10 space-y-2.5">
            <div class="text-xs font-bold uppercase tracking-wider text-sky-300">Submit New Project Proposal</div>
            <div class="flex gap-2">
              <input id="ph-proposal-title" type="text" placeholder="Project Idea Title (e.g., Campus Bus Tracker)..." class="flex-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400" />
              <button type="submit" class="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shrink-0">
                Submit Idea
              </button>
            </div>
          </form>
        </div>

        <!-- Right: Task Management, GitHub Integration & Mentor Feedback -->
        <div class="lg:col-span-6 rounded-3xl glass-card p-6 space-y-5">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-extrabold text-white flex items-center gap-2">
              <i data-lucide="check-square" class="w-5 h-5 text-emerald-400"></i> Task Management & Progress
            </h2>
            <span class="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 flex items-center gap-1.5">
              <i data-lucide="github" class="w-3.5 h-3.5"></i> github.com/campusverse/mediquick
            </span>
          </div>

          <!-- Progress Bar -->
          <div>
            <div class="w-full h-3 rounded-full bg-white/10 overflow-hidden">
              <div id="ph-progress-bar" class="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-300" style="width: 67%"></div>
            </div>
          </div>

          <!-- Interactive Task Checkboxes -->
          <div id="ph-tasks-list" class="space-y-2 text-xs">
            <!-- Populated by JS -->
          </div>

          <!-- Mentor Feedback Box -->
          <div class="p-4 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 space-y-1">
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold text-indigo-300">👨‍🏫 Experienced Mentor Feedback</span>
              <span class="text-[11px] text-slate-400">Engr. Mahfuzur Rahman (Senior SWE)</span>
            </div>
            <p class="text-xs text-slate-200 font-bengali">
              "তোমাদের API আর্কিটেকচার খুব ক্লিন হয়েছে! এখন JWT Authentication এবং Unit Testing যোগ করলে প্রজেক্টটি প্রোডাকশন-রেডি হয়ে যাবে।"
            </p>
          </div>
        </div>
      </div>

      <!-- All 9 Features Overview -->
      <div class="space-y-4">
        <h3 class="text-xl font-extrabold text-white">All Features in 10 · ProjectHub</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-sky-500">
            <h4 class="font-bold text-white text-sm">1. Project Marketplace</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">বিভিন্ন project idea খুঁজে পাওয়া।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-indigo-500">
            <h4 class="font-bold text-white text-sm">2. Team Formation</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">2–5 জনের project team তৈরি।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-cyan-500">
            <h4 class="font-bold text-white text-sm">3. Find Teammates</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">skill অনুযায়ী team member খোঁজা।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-amber-500">
            <h4 class="font-bold text-white text-sm">4. Project Proposal</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">Project idea ও proposal submit।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-emerald-500">
            <h4 class="font-bold text-white text-sm">5. Task Management</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">কাজ ভাগ করে দেওয়া।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-purple-500">
            <h4 class="font-bold text-white text-sm">6. GitHub Integration</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">Repository connect করা।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-teal-500">
            <h4 class="font-bold text-white text-sm">7. Progress Tracking</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">Project কতটুকু complete হয়েছে।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-pink-500">
            <h4 class="font-bold text-white text-sm">8. Project Showcase</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">Completed projects showcase।</p>
          </div>
          <div class="p-4 rounded-2xl glass-card border-l-4 border-l-rose-500">
            <h4 class="font-bold text-white text-sm">9. Mentor Feedback</h4>
            <p class="text-xs text-slate-300 font-bengali mt-1">Experienced mentor-এর feedback।</p>
          </div>
        </div>
      </div>

      <!-- Bottom Back to Home Button -->
      <div class="pt-4 flex justify-center">
        <button onclick="navigateTo('home')" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-sky-500/30 transition-all">
          <i data-lucide="home" class="w-4 h-4"></i> ← Back to Home Dashboard
        </button>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="relative z-10 border-t border-white/10 mt-16 py-8 text-center text-xs text-slate-400">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="font-bold text-slate-300">BUILD YOUR FUTURE · CAMPUSVERSE — AI Career & Skill Development</div>
      <div>5 Integrated Modules: CareerDNA · SkillSwap · PortfolioX · InterviewX · ProjectHub</div>
    </div>
  </footer>

  <!-- Interactive Application Logic -->
  <script>
    // ==========================================
    // 1. SPA ROUTING & NAVIGATION
    // ==========================================
    function navigateTo(viewId) {
      // Hide all view sections
      document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.add('hidden');
      });

      // Show requested view
      const target = document.getElementById('view-' + viewId);
      if (target) {
        target.classList.remove('hidden');
        // Re-trigger animation
        target.classList.remove('animate-fade-in-up');
        void target.offsetWidth;
        target.classList.add('animate-fade-in-up');
      }

      // Update top navbar active state
      document.querySelectorAll('.nav-pill').forEach(pill => {
        pill.className = 'nav-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all';
      });
      const activePill = document.getElementById('nav-' + viewId);
      if (activePill) {
        activePill.className = 'nav-pill px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow';
      }

      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      lucide.createIcons();
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    // Custom Toast Notification (Never uses alert())
    function showToast(message) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'pointer-events-auto px-4 py-3 rounded-2xl bg-slate-900/95 border border-indigo-400/40 text-white text-xs font-bold shadow-2xl flex items-center gap-2.5 animate-fade-in-up';
      toast.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span><span>${message}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 3200);
    }

    // ==========================================
    // 2. MODULE 06 · CareerDNA INTERACTIVITY
    // ==========================================
    const careerData = {
      aiml: {
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
          'Step 2 (Intermediate): React, State Management & TypeScript',
          'Step 3 (Advanced): Node.js, PostgreSQL/MongoDB & Auth',
          'Step 4 (Professional): Full-Stack SaaS Architecture & CI/CD'
        ]
      },
      cyber: {
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

    function selectCareerPath(key) {
      document.querySelectorAll('.career-tab').forEach(btn => {
        if (btn.dataset.path === key) {
          btn.className = 'career-tab px-3 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white border border-indigo-400 shadow';
        } else {
          btn.className = 'career-tab px-3 py-2.5 rounded-xl text-xs font-bold bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10';
        }
      });

      const d = careerData[key];
      const out = document.getElementById('career-dynamic-output');
      out.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div>
            <h3 class="text-lg font-extrabold text-white">${d.title}</h3>
            <div class="text-xs text-cyan-300 font-semibold mt-0.5">Job Market Insights: ${d.demand} · Avg: ${d.salary}</div>
          </div>
          <span class="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold">${d.match}</span>
        </div>

        <div class="space-y-2.5">
          <div class="text-xs font-bold uppercase tracking-wider text-rose-300">Skill Gap Analysis (কোন skill কম আছে তা identify করা)</div>
          ${d.gaps.map(g => `
            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-200 font-semibold">${g.skill}</span>
                <span class="${g.level < 60 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}">${g.level}% (${g.status})</span>
              </div>
              <div class="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div class="h-full rounded-full ${g.level < 60 ? 'bg-gradient-to-r from-rose-500 to-amber-400' : 'bg-gradient-to-r from-emerald-500 to-cyan-400'}" style="width: ${g.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="space-y-2 pt-1">
          <div class="text-xs font-bold uppercase tracking-wider text-indigo-300">Personalized Roadmap (Beginner → Professional)</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${d.roadmap.map(step => `
              <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">${step}</div>
            `).join('')}
          </div>
        </div>
      `;
    }

    function askCareerAdvisor(question) {
      const box = document.getElementById('advisor-chat-box');
      let reply = 'তোমার আগ্রহের উপর ভিত্তি করে প্রতিদিন ২ ঘণ্টা প্রজেক্ট-বেসড লার্নিং এবং গিটহাবে কোড পুশ করার পরামর্শ দিচ্ছি!';
      if (question.includes('AI/ML')) {
        reply = 'AI/ML শুরু করতে প্রথমে Python, NumPy, Pandas এবং বেসিক Statistics শেখো। এরপর Scikit-Learn দিয়ে ছোট প্রেডিকশন মডেল তৈরি করো!';
      } else if (question.includes('demand')) {
        reply = 'বর্তমানে AI Engineering, Full-Stack TypeScript, Cloud DevOps এবং Cybersecurity স্কিলের জব মার্কেট ডিমান্ড সবচেয়ে বেশি (+40% গ্রোথ)।';
      }
      box.innerHTML += `
        <div class="p-2.5 rounded-xl bg-white/10 text-white text-right"><strong>You:</strong> ${question}</div>
        <div class="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-400/20 text-indigo-100"><strong>CareerDNA AI:</strong> ${reply}</div>
      `;
      box.scrollTop = box.scrollHeight;
    }

    function handleAdvisorSubmit(e) {
      e.preventDefault();
      const input = document.getElementById('advisor-input');
      if (!input.value.trim()) return;
      askCareerAdvisor(input.value.trim());
      input.value = '';
    }

    const careerGoals = [
      { text: 'Complete Data Structures & 50 LeetCode Problems', done: true },
      { text: 'Build 2 Full-Stack AI Projects for Portfolio', done: true },
      { text: 'Score 85+ in InterviewX Mock Technical Round', done: false },
      { text: 'Collaborate on 1 Real-World Team Project in ProjectHub', done: false }
    ];

    function renderCareerGoals() {
      const list = document.getElementById('career-goals-list');
      const doneCount = careerGoals.filter(g => g.done).length;
      document.getElementById('goal-progress-badge').textContent = `${doneCount}/${careerGoals.length} Done`;
      list.innerHTML = careerGoals.map((g, idx) => `
        <button onclick="toggleCareerGoal(${idx})" class="w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-2.5 text-xs ${g.done ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200 line-through' : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'}">
          <span class="w-4 h-4 rounded flex items-center justify-center border ${g.done ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold' : 'border-slate-500'}">${g.done ? '✓' : ''}</span>
          <span>${g.text}</span>
        </button>
      `).join('');
    }

    function toggleCareerGoal(idx) {
      careerGoals[idx].done = !careerGoals[idx].done;
      renderCareerGoals();
    }

    // ==========================================
    // 3. MODULE 07 · SkillSwap INTERACTIVITY
    // ==========================================
    const skillPartners = [
      { name: 'Nusrat Jahan', uni: 'CSE, BUET', teaches: 'English', wants: 'C++', rating: '4.9', reviews: 28, bio: 'IELTS 8.0 scorer. Will help you speak fluent English in exchange for C++ STL!' },
      { name: 'Rafiqul Hasan', uni: 'SWE, DU', teaches: 'React', wants: 'Python', rating: '4.8', reviews: 19, bio: 'Frontend developer. Looking to learn Python automation & scripting.' },
      { name: 'Maliha Tasnim', uni: 'CSE, NSU', teaches: 'Public Speaking', wants: 'UI/UX Design', rating: '5.0', reviews: 34, bio: 'National debate champion. Want to learn Figma prototyping!' }
    ];

    function filterSkillPartners() {
      const teachFilter = document.getElementById('swap-teach').value;
      const learnFilter = document.getElementById('swap-learn').value;
      const grid = document.getElementById('skill-partners-grid');

      const filtered = skillPartners.filter(p => {
        const matchTeach = teachFilter === 'all' || p.wants === teachFilter;
        const matchLearn = learnFilter === 'all' || p.teaches === learnFilter;
        return matchTeach && matchLearn;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-3 p-6 rounded-2xl bg-white/5 text-center text-sm text-slate-300">No exact match for this filter combination—try selecting "Any Skill"!</div>`;
        return;
      }

      grid.innerHTML = filtered.map(p => `
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/25 flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center justify-between">
              <span class="font-extrabold text-white">${p.name}</span>
              <span class="text-xs font-bold text-amber-300">⭐ ${p.rating} (${p.reviews})</span>
            </div>
            <div class="text-[11px] text-slate-400">${p.uni}</div>
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold">Teaches: ${p.teaches}</span>
              <span class="text-[11px] px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold">Wants: ${p.wants}</span>
            </div>
            <p class="text-xs text-slate-300 mt-3 leading-relaxed">${p.bio}</p>
          </div>
          <button onclick="showToast('SkillSwap request sent to ${p.name}!')" class="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition">
            Request Skill Exchange
          </button>
        </div>
      `).join('');
    }

    function postCommunityReply(e) {
      e.preventDefault();
      const input = document.getElementById('community-input');
      if (!input.value.trim()) return;
      const thread = document.getElementById('community-thread');
      thread.innerHTML += `
        <div class="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 text-xs">
          <div class="font-bold text-emerald-300">You · Just now</div>
          <p class="text-white mt-1 font-bengali">${input.value.trim()}</p>
        </div>
      `;
      input.value = '';
      thread.scrollTop = thread.scrollHeight;
      showToast('Reply posted to SkillSwap Community!');
    }

    // ==========================================
    // 4. MODULE 08 · PortfolioX INTERACTIVITY
    // ==========================================
    function updatePortfolioPreview() {
      const name = document.getElementById('px-name').value || 'Your Name';
      const role = document.getElementById('px-role').value || 'Your Role';
      document.getElementById('px-preview-name').textContent = name;
      document.getElementById('px-preview-role').textContent = role;
      const slug = name.toLowerCase().trim().replace(/\s+/g, '-');
      document.getElementById('px-live-url').textContent = `https://campusverse.io/p/${slug}`;
    }

    function setPortfolioTemplate(tpl) {
      const card = document.getElementById('px-preview-card');
      const badge = document.getElementById('px-template-badge');
      const themes = {
        modern: 'rounded-3xl p-6 sm:p-8 border border-white/20 bg-gradient-to-br from-indigo-900/70 via-slate-900 to-purple-900/70 shadow-2xl transition-all duration-300 space-y-5',
        minimal: 'rounded-3xl p-6 sm:p-8 border border-slate-400/30 bg-slate-900 shadow-2xl transition-all duration-300 space-y-5',
        developer: 'rounded-3xl p-6 sm:p-8 border border-emerald-400/30 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 shadow-2xl transition-all duration-300 space-y-5',
        creative: 'rounded-3xl p-6 sm:p-8 border border-pink-400/30 bg-gradient-to-br from-fuchsia-950 via-rose-950/80 to-amber-950/70 shadow-2xl transition-all duration-300 space-y-5'
      };
      card.className = themes[tpl];
      badge.textContent = 'Template: ' + tpl.charAt(0).toUpperCase() + tpl.slice(1);
      showToast(`Switched to ${tpl.toUpperCase()} Portfolio Template!`);
    }

    function runAiPortfolioReview() {
      const box = document.getElementById('px-ai-review-box');
      box.classList.remove('hidden');
      showToast('AI Portfolio Review Complete!');
    }

    function copyPortfolioUrl() {
      const urlText = document.getElementById('px-live-url').textContent;
      const tempInput = document.createElement('input');
      tempInput.value = urlText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast('Copied Live Portfolio URL: ' + urlText);
    }

    // ==========================================
    // 5. MODULE 09 · InterviewX INTERACTIVITY
    // ==========================================
    let currentTrack = 'tech';
    let isRecording = false;

    function setInterviewTrack(track) {
      currentTrack = track;
      const techBtn = document.getElementById('ix-btn-tech');
      const hrBtn = document.getElementById('ix-btn-hr');
      const label = document.getElementById('ix-track-label');
      const qText = document.getElementById('ix-question-text');

      if (track === 'tech') {
        techBtn.className = 'px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold';
        hrBtn.className = 'px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 text-xs font-bold';
        label.textContent = 'Technical Track · OOP & C++';
        qText.textContent = '"Explain the difference between Compile-time Polymorphism and Run-time Polymorphism in C++ with a real-world example."';
      } else {
        hrBtn.className = 'px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold';
        techBtn.className = 'px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 text-xs font-bold';
        label.textContent = 'HR Track · Behavioral & Leadership';
        qText.textContent = '"Why should we hire you over other candidates, and how do you handle tight project deadlines?"';
      }
    }

    function toggleVoiceRecording() {
      isRecording = !isRecording;
      const wave = document.getElementById('ix-waveform');
      const lbl = document.getElementById('ix-mic-label');
      if (isRecording) {
        wave.classList.remove('hidden');
        wave.classList.add('flex');
        lbl.textContent = 'Listening... Click to Stop';
        showToast('Microphone active! Speak your interview answer.');
      } else {
        wave.classList.add('hidden');
        wave.classList.remove('flex');
        lbl.textContent = 'Start Voice Answer';
        fillSampleInterviewAnswer();
      }
    }

    function fillSampleInterviewAnswer() {
      const box = document.getElementById('ix-answer-input');
      if (currentTrack === 'tech') {
        box.value = 'Compile-time polymorphism happens during compilation via function or operator overloading, whereas run-time polymorphism uses virtual functions and inheritance so the method call is resolved dynamically at runtime.';
      } else {
        box.value = 'I combine strong problem-solving fundamentals with hands-on team project delivery. Under tight deadlines, I break tasks into prioritized milestones and communicate clearly with my team.';
      }
    }

    function evaluateInterviewAnswer() {
      const ans = document.getElementById('ix-answer-input').value.trim();
      if (!ans) {
        showToast('Please enter or record an answer first!');
        return;
      }
      const score = Math.min(98, Math.max(78, 72 + Math.floor(ans.length / 8)));
      document.getElementById('ix-top-score').textContent = `${score} / 100`;
      document.getElementById('ix-eval-result').innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-bold text-slate-300">Interview Score:</span>
          <span class="text-lg font-extrabold text-emerald-400">${score} / 100</span>
        </div>
        <div class="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-200">
          <strong>Answer Evaluation:</strong> Well-structured response addressing core concepts accurately (${ans.split(' ').length} words analyzed).
        </div>
        <div class="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/25 text-cyan-200">
          <strong>Communication Feedback:</strong> Professional tone and clear English grammar. Ready for real interviews!
        </div>
      `;
      showToast(`AI Evaluation Complete! Score: ${score}/100`);
    }

    // ==========================================
    // 6. MODULE 10 · ProjectHub INTERACTIVITY
    // ==========================================
    const projectTasks = [
      { title: 'Setup GitHub Repo & Database Schema (Assigned: Arafat)', done: true },
      { title: 'Build Responsive Dashboard & API Integration (Assigned: Nusrat)', done: true },
      { title: 'Implement AI Model Inference & Mentor Review Fixes (Assigned: Tanvir)', done: false }
    ];

    function renderProjectTasks() {
      const list = document.getElementById('ph-tasks-list');
      const doneCount = projectTasks.filter(t => t.done).length;
      const pct = Math.round((doneCount / projectTasks.length) * 100);
      document.getElementById('ph-progress-bar').style.width = pct + '%';
      document.getElementById('ph-progress-text').textContent = `${pct}% Complete`;

      list.innerHTML = projectTasks.map((t, idx) => `
        <button onclick="toggleProjectTask(${idx})" class="w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-2 ${t.done ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200' : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'}">
          <span class="flex items-center gap-2.5">
            <span class="w-4 h-4 rounded flex items-center justify-center border ${t.done ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold' : 'border-slate-500'}">${t.done ? '✓' : ''}</span>
            <span class="${t.done ? 'line-through' : ''}">${t.title}</span>
          </span>
          <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded ${t.done ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">${t.done ? 'Done' : 'In Progress'}</span>
        </button>
      `).join('');
    }

    function toggleProjectTask(idx) {
      projectTasks[idx].done = !projectTasks[idx].done;
      renderProjectTasks();
    }

    function submitProjectProposal(e) {
      e.preventDefault();
      const input = document.getElementById('ph-proposal-title');
      if (!input.value.trim()) return;
      showToast(`Proposal "${input.value.trim()}" published to Project Marketplace!`);
      input.value = '';
    }

    // Initialize Interactive States on Window Load
    window.onload = function () {
      selectCareerPath('aiml');
      renderCareerGoals();
      filterSkillPartners();
      renderProjectTasks();
      lucide.createIcons();
    };
  </script>
</body>
</html>