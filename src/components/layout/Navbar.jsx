'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Compass,
  BrainCircuit,
  GraduationCap,
  BookOpen,
  User,
  LogOut,
  LogIn
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'smart-campus-life', path: '/smart-campus-life', label: 'Smart Campus Life', icon: Compass },
  { id: 'ai-career', path: '/ai-career', label: 'AI Career & Skill Development', icon: BrainCircuit },
  { id: 'smart-learning', path: '/smart-learning', label: 'Smart Learning & Academics', icon: GraduationCap },
  { id: 'study-resource-hub', path: '/study-resource-hub', label: 'Study Resource Hub', icon: BookOpen }
];

const AVATAR_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#22d3ee"/>
        <stop offset="50%" stop-color="#6366f1"/>
        <stop offset="100%" stop-color="#c084fc"/>
      </linearGradient>
    </defs>
    <rect width="120" height="120" fill="url(#avatarGrad)"/>
    <circle cx="60" cy="46" r="22" fill="#f8fafc"/>
    <path d="M24 108c0-20 16-34 36-34s36 14 36 34" fill="#f8fafc"/>
    <circle cx="52" cy="44" r="2.5" fill="#0f172a"/>
    <circle cx="68" cy="44" r="2.5" fill="#0f172a"/>
    <path d="M54 53c3 3 9 3 12 0" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  </svg>
`)}`;

const getTabFromPath = (pathname) => {
  if (pathname === '/' || pathname === '/home') return 'home';
  const matched = NAV_ITEMS.find((item) => pathname.startsWith(item.path));
  return matched ? matched.id : 'home';
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const activeTab = getTabFromPath(pathname);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [shimmerSweep, setShimmerSweep] = useState(false);

  const navTrackRef = useRef(null);
  const itemRefs = useRef({});
  const profileDropdownRef = useRef(null);
  const [pillCoords, setPillCoords] = useState({ left: 0, width: 0, opacity: 0 });

  const syncPillPosition = () => {
    const activeEl = itemRefs.current[activeTab];
    const trackEl = navTrackRef.current;

    if (activeEl && trackEl) {
      setPillCoords({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1
      });
    } else {
      setPillCoords((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  useEffect(() => {
    syncPillPosition();
    window.addEventListener('resize', syncPillPosition);
    const timer = setTimeout(syncPillPosition, 80);
    return () => {
      window.removeEventListener('resize', syncPillPosition);
      clearTimeout(timer);
    };
  }, [activeTab, pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const triggerSweepAndNavigate = (path, tabId) => {
    if (tabId && itemRefs.current[tabId] && typeof itemRefs.current[tabId].scrollIntoView === 'function') {
      itemRefs.current[tabId].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }

    setShimmerSweep(false);
    requestAnimationFrame(() => {
      setShimmerSweep(true);
    });

    if (pathname !== path) {
      router.push(path);
    }
  };

  return (
    <>
      <style>{`
        @keyframes logoGradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glassSweep {
          0% { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
          40% { opacity: 0.45; }
          100% { transform: translateX(320%) skewX(-20deg); opacity: 0; }
        }
        @keyframes glassDoorSwing {
          0% {
            opacity: 0;
            transform: perspective(1100px) rotateY(-18deg) translateY(-6px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: perspective(1100px) rotateY(0deg) translateY(0px) scale(1);
          }
        }
        .campus-logo-text {
          background: linear-gradient(
            115deg,
            #38bdf8 0%,
            #818cf8 28%,
            #ffffff 50%,
            #22d3ee 72%,
            #c084fc 100%
          );
          background-size: 240% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: logoGradientFlow 4.2s ease-in-out infinite;
        }
        .animate-glass-sweep {
          animation: glassSweep 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-glass-door {
          transform-origin: top right;
          animation: glassDoorSwing 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <header className="sticky top-0 z-50 px-2 sm:px-4 lg:px-6 pt-3 sm:pt-4">
        <nav
          aria-label="Main Navigation"
          className="relative max-w-7xl mx-auto rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.18)] overflow-visible"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            {shimmerSweep && (
              <div
                onAnimationEnd={() => setShimmerSweep(false)}
                className="animate-glass-sweep absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />
            )}
          </div>

          <div className="relative px-2.5 sm:px-4 lg:px-5 h-14 sm:h-16 lg:h-[70px] flex flex-row flex-nowrap items-center justify-between gap-2 sm:gap-3 lg:gap-4">
            {/* 1. BRAND LOGO -> / */}
            <Link
              href="/"
              onClick={() => triggerSweepAndNavigate('/', 'home')}
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none shrink-0"
            >
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 p-[1.5px] shadow-[0_0_18px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_24px_rgba(129,140,248,0.65)] transition-all duration-300">
                <div className="w-full h-full rounded-[7px] sm:rounded-[10px] bg-slate-950/90 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-cyan-300 transition-transform duration-500 group-hover:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
                    <circle cx="12" cy="12" r="3" className="fill-cyan-400/30" />
                  </svg>
                </div>
              </div>

              <span className="text-xs sm:text-base lg:text-lg xl:text-xl font-black tracking-wider campus-logo-text whitespace-nowrap">
                CAMPUS VERSE
              </span>
            </Link>

            {/* 2. NAVIGATION LINKS */}
            <div
              ref={navTrackRef}
              className="min-w-0 flex-1 overflow-x-auto no-scrollbar relative flex flex-row flex-nowrap items-center p-1 rounded-xl bg-slate-950/45 border border-white/[0.08]"
            >
              <div
                className="absolute top-1 bottom-1 rounded-lg bg-gradient-to-r from-cyan-400/20 via-indigo-400/20 to-purple-400/20 border border-cyan-300/35 shadow-[0_0_18px_rgba(56,189,248,0.22),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-md transition-all duration-300 ease-out pointer-events-none"
                style={{
                  left: `${pillCoords.left}px`,
                  width: `${pillCoords.width}px`,
                  opacity: pillCoords.opacity
                }}
              />

              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    ref={(el) => (itemRefs.current[item.id] = el)}
                    onClick={() => triggerSweepAndNavigate(item.path, item.id)}
                    className={`relative z-10 flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs xl:text-[13px] font-medium transition-colors duration-200 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-300/85 hover:text-white'
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-200 shrink-0 ${
                        isActive ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* 3. PROFILE AVATAR DROPDOWN OR LOGIN BUTTON */}
            <div className="flex items-center shrink-0">
              {isLoggedIn ? (
                <div className="relative" ref={profileDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setProfileOpen((prev) => !prev)}
                    aria-label="Profile Menu"
                    className="relative flex items-center justify-center p-0.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all duration-300 focus:outline-none group"
                  >
                    <div className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full p-[1.5px] sm:p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_16px_rgba(56,189,248,0.45)] group-hover:shadow-[0_0_24px_rgba(129,140,248,0.75)] transition-shadow">
                      <img
                        src={AVATAR_SVG}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover bg-slate-900"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 sm:bottom-0.5 sm:right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
                  </button>

                  {profileOpen && (
                    <div className="animate-glass-door absolute right-0 mt-2.5 w-44 rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.18)] p-1.5 z-50">
                      <Link
                        href="/profile"
                        onClick={() => {
                          setProfileOpen(false);
                          triggerSweepAndNavigate('/profile', null);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <User className="w-4 h-4 text-cyan-300" />
                        <span>Profile</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setProfileOpen(false);
                          setIsLoggedIn(false);
                          triggerSweepAndNavigate('/login', null);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-300 hover:text-rose-200 hover:bg-rose-500/15 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => {
                    setIsLoggedIn(true);
                    triggerSweepAndNavigate('/', 'home');
                  }}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.45)] transition-all duration-300 active:scale-95 whitespace-nowrap"
                >
                  <LogIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Auth Preview Switcher */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={() => {
            setProfileOpen(false);
            setIsLoggedIn((prev) => !prev);
          }}
          className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/10 text-slate-400 hover:text-slate-200 transition-colors"
        >
          {isLoggedIn ? 'Switch to Logged Out' : 'Switch to Logged In'}
        </button>
      </div>
    </>
  );
}