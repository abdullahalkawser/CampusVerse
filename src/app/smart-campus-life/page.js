"use client";
import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Boxes,
  Wallet,
  ScanSearch,
  GraduationCap,
  Home,
  ArrowUpRight,
  ArrowLeft,
  Navigation,
  Users,
  Wifi,
  Snowflake,
  PlusCircle,
  CheckCircle2,
  MapPin,
  Bookmark,
  ShieldCheck,
  Clock,
  Cpu,
  SlidersHorizontal,
  X,
  PhoneCall,
  Calendar,
  Compass,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

// ============================================================================
// 1. REUSABLE 3D PERSPECTIVE TILT CARD COMPONENT
// ============================================================================
const Tilt3DCard = ({ children, onClick, className = '', glowColor = 'cyan' }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState(
    'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  );
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransformStyle(
      `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.02, 1.02, 1.02)`
    );
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowBorders = {
    cyan: 'border-cyan-500/30 hover:border-cyan-400/80 hover:shadow-cyan-500/25',
    amber: 'border-amber-500/30 hover:border-amber-400/80 hover:shadow-amber-500/25',
    fuchsia: 'border-fuchsia-500/30 hover:border-fuchsia-400/80 hover:shadow-fuchsia-500/25',
    violet: 'border-violet-500/30 hover:border-violet-400/80 hover:shadow-violet-500/25',
    emerald: 'border-emerald-500/35 hover:border-emerald-400/80 hover:shadow-emerald-500/25'
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease'
      }}
      className={`group cursor-pointer relative rounded-3xl bg-[#101629]/75 backdrop-blur-xl border shadow-2xl overflow-hidden ${glowBorders[glowColor]} ${className}`}
    >
      {/* Dynamic Mouse Glare Reflection */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.45), transparent 60%)`
        }}
      />
      {children}
    </div>
  );
};

// ============================================================================
// 2. MODULE 01 DETAIL: CAMPUSIQ 3D INTERACTIVE CAMPUS MAP
// ============================================================================
const CAMPUS_BUILDINGS = [
  {
    id: 'ab1',
    code: 'AB-01',
    name: 'Academic Building 1',
    subtitle: 'CSE, Software Engineering & AI Labs · 10 Floors',
    occupancy: 64,
    emptyRooms: ['402', '504', '701', '803'],
    acStatus: 'Central AC Active (22°C)',
    wifiSpeed: '540 Mbps',
    crowdTag: 'Moderate',
    color: 'from-cyan-400 to-blue-600',
    accentText: 'text-cyan-300',
    heightClass: 'h-36',
    positionClass: 'top-8 left-8 sm:left-14',
    facilities: 'Smart Projectors, High-Speed Elevators, Robotics Lab, Prayer Zone (4th Floor).'
  },
  {
    id: 'lib',
    code: 'LIB-3D',
    name: 'Central Digital Library',
    subtitle: 'Silent Study Zones, E-Journal Hub & Archive · 6 Floors',
    occupancy: 41,
    emptyRooms: ['38 Study Pods Open', 'Quiet Hall B'],
    acStatus: 'Chilled Zone (21°C)',
    wifiSpeed: '780 Mbps',
    crowdTag: 'Quiet & Spacious',
    color: 'from-fuchsia-500 to-purple-600',
    accentText: 'text-fuchsia-300',
    heightClass: 'h-32',
    positionClass: 'top-6 right-8 sm:right-14',
    facilities: '24/7 Exam Reading Floor, Thesis Archive, Group Discussion Pods, Coffee Vending.'
  },
  {
    id: 'tsc',
    code: 'TSC-HUB',
    name: 'TSC & Student Cafeteria',
    subtitle: 'Food Court, Cultural Club Rooms & Student Lounge',
    occupancy: 86,
    emptyRooms: ['Rooftop Patio', 'Corner Booth 4'],
    acStatus: 'Ventilated + Hall AC',
    wifiSpeed: '310 Mbps',
    crowdTag: 'Peak Lunch Rush',
    color: 'from-amber-400 to-orange-600',
    accentText: 'text-amber-300',
    heightClass: 'h-24',
    positionClass: 'bottom-10 left-10 sm:left-16',
    facilities: 'Subsidized Student Meals, Juice & Tea Bar, Auditorium, Debating & Cultural Clubs.'
  },
  {
    id: 'eng',
    code: 'ENG-LAB',
    name: 'Engineering & Innovation Lab',
    subtitle: 'EEE, IoT Makerspace, GPU Cluster & Fabrication',
    occupancy: 35,
    emptyRooms: ['IoT Lab 2', 'Hardware Bench 5'],
    acStatus: 'Precision Cooling (20°C)',
    wifiSpeed: '920 Mbps',
    crowdTag: 'Low Crowd',
    color: 'from-emerald-400 to-teal-600',
    accentText: 'text-emerald-300',
    heightClass: 'h-28',
    positionClass: 'bottom-8 right-10 sm:right-16',
    facilities: 'NVIDIA AI Workstations, 3D Printers, Oscilloscopes, Drone Testing Arena.'
  },
  {
    id: 'hall',
    code: 'HALL-01',
    name: 'Residential Student Hall',
    subtitle: 'On-Campus Dormitory, Indoor Games & Medical Bay',
    occupancy: 72,
    emptyRooms: ['Common Room', 'Indoor Table Tennis'],
    acStatus: 'Common Lounge AC',
    wifiSpeed: '450 Mbps',
    crowdTag: 'Normal',
    color: 'from-indigo-400 to-violet-600',
    accentText: 'text-indigo-300',
    heightClass: 'h-32',
    positionClass: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    facilities: '24/7 Campus Medical Center, Gymnasium, Indoor Games, Dining Hall.'
  }
];

const CampusIQView = ({ notify }) => {
  const [selectedBldg, setSelectedBldg] = useState(CAMPUS_BUILDINGS[0]);
  const [mapAngle, setMapAngle] = useState({ rotateX: 52, rotateZ: -28 });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="rounded-3xl p-6 sm:p-9 bg-gradient-to-br from-cyan-950/60 via-[#0e152b] to-blue-950/50 border border-cyan-500/30 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Boxes className="w-3.5 h-3.5" /> 01 · CampusIQ Spatial Digital Twin
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              Interactive 3D Campus Map & Crowd Radar
            </h1>
            <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
              Click any 3D extruded building block on the campus grid to inspect real-time room vacancies, AC status, Wi-Fi throughput, and crowd density.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400">Overall Crowd</div>
              <div className="text-lg font-extrabold text-cyan-300">59% Moderate</div>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400">Empty Classrooms</div>
              <div className="text-lg font-extrabold text-emerald-300">14 Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Isometric Interactive Map + Telemetry Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive 3D Isometric Stage */}
        <div className="lg:col-span-2 rounded-3xl bg-[#0b1021]/90 border border-white/10 p-5 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-sm font-bold text-white">3D Isometric Campus Grid</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMapAngle({ rotateX: 52, rotateZ: -28 })}
                className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-cyan-200 transition"
              >
                Isometric View
              </button>
              <button
                onClick={() => setMapAngle({ rotateX: 25, rotateZ: 0 })}
                className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-200 transition"
              >
                Top Overview
              </button>
            </div>
          </div>

          {/* 3D Perspective Viewport */}
          <div
            className="relative w-full h-[360px] sm:h-[420px] rounded-2xl bg-[#060914] border border-cyan-500/20 overflow-hidden flex items-center justify-center"
            style={{ perspective: '1100px' }}
          >
            {/* Tilted 3D Campus Plane */}
            <div
              style={{
                transform: `rotateX(${mapAngle.rotateX}deg) rotateZ(${mapAngle.rotateZ}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
              className="relative w-[310px] h-[310px] sm:w-[390px] sm:h-[390px] rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d162c] to-slate-950 border-2 border-cyan-500/40 shadow-[0_30px_70px_rgba(6,182,212,0.25)]"
            >
              {/* Campus Roads & Grid Lines */}
              <div
                className="absolute inset-0 opacity-30 rounded-3xl"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(34,211,238,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.25) 1px, transparent 1px)',
                  backgroundSize: '36px 36px'
                }}
              />
              {/* Central Campus Pathway Cross */}
              <div className="absolute top-1/2 left-0 right-0 h-5 -translate-y-1/2 bg-slate-800/90 border-y border-cyan-400/20" />
              <div className="absolute left-1/2 top-0 bottom-0 w-5 -translate-x-1/2 bg-slate-800/90 border-x border-cyan-400/20" />

              {/* 5 Interactive 3D Extruded Building Blocks */}
              {CAMPUS_BUILDINGS.map((b) => {
                const isSelected = selectedBldg.id === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => {
                      setSelectedBldg(b);
                      notify(`Selected ${b.name}`, 'cyan');
                    }}
                    style={{
                      transform: isSelected ? 'translateZ(38px) scale(1.08)' : 'translateZ(18px)',
                      transformStyle: 'preserve-3d',
                      transition: 'all 0.3s ease'
                    }}
                    className={`absolute ${b.positionClass} w-24 sm:w-28 p-2.5 rounded-2xl bg-gradient-to-br ${b.color} text-white shadow-xl border ${
                      isSelected ? 'border-white ring-4 ring-white/30' : 'border-white/30 opacity-90 hover:opacity-100'
                    } flex flex-col items-center justify-center text-center`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded-md mb-1">
                      {b.code}
                    </span>
                    <span className="text-[11px] font-bold leading-tight line-clamp-2">{b.name}</span>
                    <span className="mt-1 text-[10px] font-extrabold bg-white/20 px-1.5 py-0.5 rounded">
                      {b.occupancy}% Full
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Quick Building Selector Pills */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap justify-center gap-1.5 z-20">
              {CAMPUS_BUILDINGS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBldg(b)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold backdrop-blur-md border transition ${
                    selectedBldg.id === b.id
                      ? 'bg-cyan-500 text-slate-950 border-cyan-300'
                      : 'bg-slate-900/80 text-slate-300 border-white/15 hover:bg-slate-800'
                  }`}
                >
                  {b.code}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Telemetry Inspector */}
        <div className="rounded-3xl bg-[#101629]/85 border border-cyan-500/30 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300">
                {selectedBldg.code} Telemetry
              </span>
              <span className="text-xs font-semibold text-emerald-400">● {selectedBldg.crowdTag}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-1">{selectedBldg.name}</h3>
            <p className="text-xs text-slate-400 mb-5">{selectedBldg.subtitle}</p>

            <div className="space-y-3.5">
              {/* Occupancy Bar */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" /> Live Occupancy
                  </span>
                  <span className={`font-extrabold ${selectedBldg.accentText}`}>{selectedBldg.occupancy}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${selectedBldg.color} rounded-full transition-all duration-500`}
                    style={{ width: `${selectedBldg.occupancy}%` }}
                  />
                </div>
              </div>

              {/* AC & Wi-Fi */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                    <Snowflake className="w-3.5 h-3.5 text-sky-400" /> AC Status
                  </div>
                  <div className="text-xs font-bold text-white">{selectedBldg.acStatus}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                    <Wifi className="w-3.5 h-3.5 text-emerald-400" /> Eduroam Wi-Fi
                  </div>
                  <div className="text-sm font-extrabold text-emerald-300">{selectedBldg.wifiSpeed}</div>
                </div>
              </div>

              {/* Empty Classrooms */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400 mb-2">Available Rooms / Study Zones</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedBldg.emptyRooms.map((room) => (
                    <span
                      key={room}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-cyan-500/15 text-cyan-200 border border-cyan-500/30"
                    >
                      {room}
                    </span>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400 mb-1">Building Facilities</div>
                <p className="text-xs text-slate-200 leading-relaxed">{selectedBldg.facilities}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => notify(`AR Indoor Navigation started to ${selectedBldg.name}!`, 'cyan')}
            className="mt-5 w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" /> Start AR Walking Path
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. MODULE 02 DETAIL: POCKETCAMPUS EXPENSE TRACKER & BILL SPLITTER (৳ BDT)
// ============================================================================
const PocketCampusView = ({ notify }) => {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Mess Lunch (Chicken & Dal)', category: 'Mess Meal', amount: 85, time: 'Today, 1:45 PM' },
    { id: 2, title: 'Campus Gate Rickshaw Fare', category: 'Rickshaw/Bus', amount: 40, time: 'Today, 9:10 AM' },
    { id: 3, title: 'TSC Canteen Singara & Tea', category: 'Canteen', amount: 45, time: 'Yesterday' },
    { id: 4, title: 'Lab Report Print & Spiral', category: 'Print/Photocopy', amount: 110, time: 'Yesterday' },
    { id: 5, title: 'Mess Dinner Meal', category: 'Mess Meal', amount: 75, time: '2 days ago' }
  ]);
  const [filterCat, setFilterCat] = useState('All');
  const [titleInput, setTitleInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [catInput, setCatInput] = useState('Mess Meal');

  // Hangout Bill Splitter State
  const [billTotal, setBillTotal] = useState(640);
  const [friendCount, setFriendCount] = useState(4);

  const monthlyBudget = 6000;
  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const budgetPct = Math.min(100, Math.round((totalSpent / monthlyBudget) * 100));

  const categories = ['All', 'Mess Meal', 'Rickshaw/Bus', 'Canteen', 'Print/Photocopy'];
  const filteredExpenses =
    filterCat === 'All' ? expenses : expenses.filter((item) => item.category === filterCat);

  const categoryTotals = ['Mess Meal', 'Rickshaw/Bus', 'Canteen', 'Print/Photocopy'].map((cat) => {
    const sum = expenses.filter((e) => e.category === cat).reduce((acc, cur) => acc + cur.amount, 0);
    return { cat, sum, pct: totalSpent > 0 ? Math.round((sum / totalSpent) * 100) : 0 };
  });

  const handleAddExpense = (e) => {
    e.preventDefault();
    const amt = parseInt(amountInput, 10);
    if (!titleInput.trim() || isNaN(amt) || amt <= 0) return;

    setExpenses([
      {
        id: Date.now(),
        title: titleInput.trim(),
        category: catInput,
        amount: amt,
        time: 'Just now'
      },
      ...expenses
    ]);
    setTitleInput('');
    setAmountInput('');
    notify(`Logged ৳${amt} under ${catInput}`, 'amber');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero */}
      <div className="rounded-3xl p-6 sm:p-9 bg-gradient-to-br from-amber-950/60 via-[#0e152b] to-orange-950/50 border border-amber-500/30 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Wallet className="w-3.5 h-3.5" /> 02 · PocketCampus Student FinTech
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              Daily Expense Tracker & Mess Bill Splitter
            </h1>
            <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
              Keep your monthly student allowance on track in BDT (৳). Log mess meals, rickshaw fares, and split group adda bills in seconds.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400">Total Spent</div>
              <div className="text-xl font-extrabold text-amber-300">৳ {totalSpent}</div>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400">Remaining</div>
              <div className="text-xl font-extrabold text-emerald-300">৳ {Math.max(0, monthlyBudget - totalSpent)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Log Expense + Hangout Bill Splitter */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-[#101629]/85 border border-amber-500/25 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-amber-400" /> Add Campus Expense
            </h3>
            <form onSubmit={handleAddExpense} className="space-y-3.5">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Description</label>
                <input
                  type="text"
                  required
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  placeholder="e.g., Bus Fare to Mirpur / Tea"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Amount (৳)</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    placeholder="75"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Category</label>
                  <select
                    value={catInput}
                    onChange={(e) => setCatInput(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#131a30] border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Mess Meal">Mess Meal</option>
                    <option value="Rickshaw/Bus">Rickshaw/Bus</option>
                    <option value="Canteen">Canteen</option>
                    <option value="Print/Photocopy">Print/Photocopy</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-500/25 transition"
              >
                + Record Expense (৳)
              </button>
            </form>
          </div>

          {/* Hangout Bill Splitter */}
          <div className="rounded-3xl bg-[#101629]/85 border border-orange-500/25 p-6">
            <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-400" /> Hangout / Mess Bazar Splitter
            </h3>
            <p className="text-xs text-slate-400 mb-4">Split group snacks or mess bazar instantly</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Total Bill (৳)</label>
                <input
                  type="number"
                  min="0"
                  value={billTotal}
                  onChange={(e) => setBillTotal(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-sm font-bold text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Friends / Members</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={friendCount}
                  onChange={(e) => setFriendCount(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-sm font-bold text-white"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-200">Per Person Share:</span>
              <span className="text-xl font-extrabold text-amber-300">
                ৳ {Math.ceil((billTotal || 0) / Math.max(1, friendCount))}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Category Breakdown & Ledger */}
        <div className="lg:col-span-2 rounded-3xl bg-[#101629]/85 border border-white/10 p-6 flex flex-col justify-between">
          <div>
            {/* Monthly Budget Meter */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white">Monthly Allowance Usage (৳{monthlyBudget} Limit)</span>
              <span className="text-xs font-extrabold text-amber-300">{budgetPct}% Used</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden mb-6">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${budgetPct}%` }}
              />
            </div>

            {/* Category Breakdown Bars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {categoryTotals.map((item) => (
                <div key={item.cat} className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[11px] text-slate-400 truncate">{item.cat}</div>
                  <div className="text-base font-extrabold text-white mt-0.5">৳{item.sum}</div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Recent Transactions</h4>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCat(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                      filterCat === cat
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Transaction List */}
            <div className="space-y-2.5 max-h-[280px] overflow-y-auto pr-1">
              {filteredExpenses.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-300 flex items-center justify-center font-extrabold">
                      ৳
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.title}</div>
                      <div className="text-xs text-slate-400">
                        {item.category} · {item.time}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-amber-300">- ৳{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. MODULE 03 DETAIL: FINDIT AI LOST & FOUND HUB
// ============================================================================
const FindItAIView = ({ notify }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      status: 'FOUND',
      title: 'Apple AirPods Pro (White Case)',
      location: 'Central Library 3rd Floor',
      time: '14 mins ago',
      aiScore: '98% Match',
      finder: 'Tanvir Ahmed (CSE-22)'
    },
    {
      id: 2,
      status: 'LOST',
      title: 'Casio fx-991EX Scientific Calculator',
      location: 'AB-01 Room 504',
      time: '45 mins ago',
      aiScore: '92% Visual Match',
      finder: 'Nusrat Jahan (EEE-23)'
    },
    {
      id: 3,
      status: 'FOUND',
      title: 'University Student ID Card & Lanyard',
      location: 'TSC Cafeteria Table 8',
      time: '2 hours ago',
      aiScore: '99% OCR ID Match',
      finder: 'Campus Security Desk 2'
    },
    {
      id: 4,
      status: 'LOST',
      title: 'Baseus 20,000mAh Black Powerbank',
      location: 'Main Gate Shuttle Stop',
      time: '4 hours ago',
      aiScore: 'Scanning Logs...',
      finder: 'Rafiul Islam (BBA-21)'
    }
  ]);

  const [tab, setTab] = useState('ALL');
  const [statusInput, setStatusInput] = useState('LOST');
  const [titleInput, setTitleInput] = useState('');
  const [locInput, setLocInput] = useState('');
  const [claimModalItem, setClaimModalItem] = useState(null);

  const visibleItems = tab === 'ALL' ? items : items.filter((i) => i.status === tab);

  const handlePostItem = (e) => {
    e.preventDefault();
    if (!titleInput.trim() || !locInput.trim()) return;
    setItems([
      {
        id: Date.now(),
        status: statusInput,
        title: titleInput.trim(),
        location: locInput.trim(),
        time: 'Just now',
        aiScore: '95% AI Match',
        finder: 'You (Verified Student)'
      },
      ...items
    ]);
    setTitleInput('');
    setLocInput('');
    notify('AI Vision scanned campus reports & published your alert!', 'fuchsia');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero */}
      <div className="rounded-3xl p-6 sm:p-9 bg-gradient-to-br from-fuchsia-950/60 via-[#0e152b] to-purple-950/50 border border-fuchsia-500/30 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/15 border border-fuchsia-400/30 text-fuchsia-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <ScanSearch className="w-3.5 h-3.5" /> 03 · FindIt AI Smart Recovery
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              AI-Powered Campus Lost & Found
            </h1>
            <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
              Misplaced your ID card, calculator, charger, or earbuds? Post an alert and let our AI match descriptions across campus security posts and student reports.
            </p>
          </div>
          <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-400">Recovery Success Rate</div>
            <div className="text-xl font-extrabold text-fuchsia-300">94.6% Returned</div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Post Form */}
        <div className="rounded-3xl bg-[#101629]/85 border border-fuchsia-500/25 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-fuchsia-400" /> Post Lost or Found Item
          </h3>
          <form onSubmit={handlePostItem} className="space-y-3.5">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Report Type</label>
              <select
                value={statusInput}
                onChange={(e) => setStatusInput(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#131a30] border border-white/15 text-sm text-white"
              >
                <option value="LOST">I Lost an Item</option>
                <option value="FOUND">I Found an Item</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Item Name & Identifying Details</label>
              <input
                type="text"
                required
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                placeholder="e.g., Blue Hydro Flask or Lenovo Charger"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-400"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Last Seen / Found Location</label>
              <input
                type="text"
                required
                value={locInput}
                onChange={(e) => setLocInput(e.target.value)}
                placeholder="e.g., Central Library 2nd Floor"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-fuchsia-500/25 transition"
            >
              Run AI Match & Publish
            </button>
          </form>
        </div>

        {/* Feed */}
        <div className="lg:col-span-2 rounded-3xl bg-[#101629]/85 border border-white/10 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h3 className="text-lg font-bold text-white">Live Campus Feed</h3>
            <div className="flex gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
              {['ALL', 'LOST', 'FOUND'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition ${
                    tab === t ? 'bg-fuchsia-500 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-fuchsia-400/40 transition"
              >
                <div className="flex items-start gap-3.5">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase shrink-0 ${
                      item.status === 'FOUND'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {item.status}
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      📍 {item.location} · {item.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-end sm:self-center">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/25">
                    {item.aiScore}
                  </span>
                  <button
                    onClick={() => setClaimModalItem(item)}
                    className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-fuchsia-500 hover:text-white text-xs font-bold text-white transition"
                  >
                    Claim / Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Claim / Contact Modal */}
      {claimModalItem && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full rounded-3xl bg-[#12182d] border border-fuchsia-500/40 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-fuchsia-500/20 text-fuchsia-300">
                Verified Handover Protocol
              </span>
              <button
                onClick={() => setClaimModalItem(null)}
                className="p-1.5 rounded-xl bg-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{claimModalItem.title}</h3>
            <p className="text-xs text-slate-400 mb-4">
              Reported by <span className="text-white font-semibold">{claimModalItem.finder}</span> at{' '}
              {claimModalItem.location}
            </p>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 mb-5">
              To prevent false claims, enter one unique detail (e.g., wallpaper, sticker, or Student ID digits) to unlock direct campus chat.
            </div>
            <button
              onClick={() => {
                notify(`Verification ping sent to ${claimModalItem.finder}!`, 'fuchsia');
                setClaimModalItem(null);
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold text-sm"
            >
              Send Verification & Unlock Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 5. MODULE 04 DETAIL: EDUPULSE AI 75% ATTENDANCE PREDICTOR & ROUTINE
// ============================================================================
const EduPulseView = ({ notify }) => {
  const [courses, setCourses] = useState([
    { code: 'CSE-311', name: 'Artificial Intelligence', attended: 22, total: 26, room: 'AB1-502', slot: 'Sun/Tue 10:00 AM' },
    { code: 'EEE-205', name: 'Digital Logic Design', attended: 17, total: 22, room: 'AB1-304', slot: 'Mon/Wed 11:30 AM' },
    { code: 'MAT-201', name: 'Linear Algebra & Differential Eq.', attended: 15, total: 20, room: 'AB2-201', slot: 'Sun/Tue 02:00 PM' },
    { code: 'ENG-102', name: 'Technical Writing & Presentation', attended: 19, total: 21, room: 'LIB-401', slot: 'Thu 09:30 AM' }
  ]);

  const markClass = (idx, isPresent) => {
    setCourses((prev) =>
      prev.map((c, i) =>
        i === idx
          ? { ...c, total: c.total + 1, attended: isPresent ? c.attended + 1 : c.attended }
          : c
      )
    );
    notify(
      `${isPresent ? 'Marked Present' : 'Marked Absent'} for ${courses[idx].code}`,
      isPresent ? 'emerald' : 'amber'
    );
  };

  // Calculate how many consecutive classes can be safely skipped while staying >= 75%
  const calcSafeBunks = (attended, total) => {
    // attended / (total + bunks) >= 0.75  => bunks <= (attended / 0.75) - total
    const maxBunks = Math.floor(attended / 0.75 - total);
    return maxBunks;
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero */}
      <div className="rounded-3xl p-6 sm:p-9 bg-gradient-to-br from-violet-950/60 via-[#0e152b] to-indigo-950/50 border border-violet-500/30 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" /> 04 · EduPulse AI Academic Guard
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              75% Attendance Predictor & Smart Routine
            </h1>
            <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
              Tap <span className="text-emerald-300 font-semibold">+ Present</span> or{' '}
              <span className="text-rose-300 font-semibold">+ Absent</span> on any course below to instantly compute your attendance percentage and safe bunk allowance before finals.
            </p>
          </div>
          <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-400">Exam Eligibility Threshold</div>
            <div className="text-xl font-extrabold text-violet-300">75.0% Mandatory</div>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, idx) => {
          const pct = Math.round((course.attended / course.total) * 100);
          const safeBunks = calcSafeBunks(course.attended, course.total);
          const isSafe = pct >= 75;
          const classesNeeded = isSafe ? 0 : Math.ceil((0.75 * course.total - course.attended) / 0.25);

          return (
            <div
              key={course.code}
              className="rounded-3xl bg-[#101629]/85 border border-violet-500/25 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-violet-500/20 text-violet-300 border border-violet-400/30">
                    {course.code}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-violet-400" /> {course.slot} · {course.room}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{course.name}</h3>

                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400">
                    Attended <strong className="text-white">{course.attended}</strong> of{' '}
                    <strong className="text-white">{course.total}</strong> classes
                  </span>
                  <span className={`text-sm font-extrabold ${isSafe ? 'text-emerald-300' : 'text-rose-400'}`}>
                    {pct}%
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden mb-4">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isSafe ? 'bg-gradient-to-r from-violet-500 to-emerald-400' : 'bg-rose-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                {/* Safe Bunk / Recovery Insight */}
                <div
                  className={`p-3 rounded-2xl border text-xs mb-5 flex items-center gap-2 ${
                    isSafe
                      ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-200'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                  }`}
                >
                  {isSafe ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        {safeBunks > 0
                          ? `Safe Zone: You can skip up to ${safeBunks} next class(es) and stay ≥ 75%.`
                          : 'On the Borderline: Attend the next class to maintain 75%.'}
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>
                        Warning: Attend the next <strong>{classesNeeded}</strong> class(es) straight to reach 75%!
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => markClass(idx, true)}
                  className="flex-1 py-2.5 rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/35 text-emerald-300 font-bold text-xs sm:text-sm transition"
                >
                  + Present
                </button>
                <button
                  onClick={() => markClass(idx, false)}
                  className="flex-1 py-2.5 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/35 text-rose-300 font-bold text-xs sm:text-sm transition"
                >
                  + Absent
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================================
// 6. MODULE 05 DETAIL: STAYMATE — বাসা ও মেস খোঁজা (DHAKA STUDENT HOUSING)
// ============================================================================
const STAY_LISTINGS = [
  {
    id: 'dh1',
    name: 'GreenView Student Mess (ব্যাচেলর মেস)',
    area: 'Dhanmondi',
    distance: '4 mins walk from Dhanmondi Campus Gate',
    gender: 'Male',
    type: 'Mess Seat',
    rent: 3400,
    mealRate: '৳55 / meal (মিল সিস্টেম · 3 times)',
    seatsLeft: 2,
    badge: 'Student Favorite',
    amenities: ['100 Mbps Fiber Wi-Fi', 'IPS & Generator', 'Filter Water', 'Maid & Chef']
  },
  {
    id: 'dh2',
    name: 'Niribili Girls Sublet & Studio',
    area: 'Bashundhara',
    distance: '5 mins walk from Bashundhara Gate 2',
    gender: 'Female',
    type: 'Sublet / Flat',
    rent: 4800,
    mealRate: 'Shared Kitchen / Optional Tiffin',
    seatsLeft: 1,
    badge: 'Verified Safe',
    amenities: ['24/7 Guard & CCTV', 'Attached Balcony', 'Wi-Fi + Gas Included', 'Generator']
  },
  {
    id: 'dh3',
    name: 'Scholars Den Shared Apartment',
    area: 'Uttara',
    distance: '6 mins walk from Uttara Sector-7 Campus',
    gender: 'Male',
    type: 'Shared Flat',
    rent: 3900,
    mealRate: '৳60 / meal (Bazar System)',
    seatsLeft: 3,
    badge: 'Instant Move-In',
    amenities: ['Tiled Floor', 'Wi-Fi + Generator', 'Rooftop Access', '24/7 Lift']
  },
  {
    id: 'dh4',
    name: 'Shanti Niketon Ladies Hostel & Mess',
    area: 'Mohammadpur',
    distance: '3 mins rickshaw from Mohammadpur / Dhanmondi',
    gender: 'Female',
    type: 'Mess Seat',
    rent: 3200,
    mealRate: '৳50 / meal (Fixed Menu)',
    seatsLeft: 2,
    badge: 'Budget Friendly',
    amenities: ['Biometric Entry', 'Study Hall', 'High-Speed Wi-Fi', 'Generator']
  },
  {
    id: 'dh5',
    name: 'Metro Side Bachelor Mess (মেট্রো মেস)',
    area: 'Mirpur',
    distance: '2 mins from Mirpur-10 Metro & Campus',
    gender: 'Male',
    type: 'Mess Seat',
    rent: 2900,
    mealRate: '৳52 / meal (মিল সিস্টেম)',
    seatsLeft: 2,
    badge: 'Near Metro',
    amenities: ['Wi-Fi Included', '24/7 Water', 'Fridge & Filter', 'No Broker Fee']
  }
];

const StayMateView = ({ notify }) => {
  const [genderFilter, setGenderFilter] = useState('ALL');
  const [areaFilter, setAreaFilter] = useState('ALL');
  const [maxBudget, setMaxBudget] = useState(5500);
  const [bookingStay, setBookingStay] = useState(null);
  const [visitDate, setVisitDate] = useState('Tomorrow, 4:00 PM');
  const [studentPhone, setStudentPhone] = useState('');

  const areas = ['ALL', 'Dhanmondi', 'Uttara', 'Mirpur', 'Mohammadpur', 'Bashundhara'];

  const filteredStays = STAY_LISTINGS.filter((s) => {
    const matchGender = genderFilter === 'ALL' || s.gender === genderFilter;
    const matchArea = areaFilter === 'ALL' || s.area === areaFilter;
    const matchRent = s.rent <= maxBudget;
    return matchGender && matchArea && matchRent;
  });

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    notify(`Visit booked for ${bookingStay.name} (${visitDate})! Owner number unlocked.`, 'emerald');
    setBookingStay(null);
    setStudentPhone('');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero */}
      <div className="rounded-3xl p-6 sm:p-9 bg-gradient-to-br from-emerald-950/65 via-[#0e152b] to-teal-950/55 border border-emerald-500/35 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Home className="w-3.5 h-3.5" /> 05 · StayMate Student Housing Portal
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              StayMate — বাসা ও মেস খোঁজা (Basha & Mess Finder)
            </h1>
            <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
              Zero broker commission! Find verified student mess seats, sublets, and bachelor flats across Dhanmondi, Uttara, Mirpur, Mohammadpur & Bashundhara with clear meal system rates.
            </p>
          </div>
          <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-400">Verified Dhaka Seats</div>
            <div className="text-xl font-extrabold text-emerald-300">{filteredStays.length} Matching Seats</div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="rounded-3xl bg-[#101629]/85 border border-white/10 p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Gender Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" /> Seat For:
            </span>
            {['ALL', 'Male', 'Female'].map((g) => (
              <button
                key={g}
                onClick={() => setGenderFilter(g)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition ${
                  genderFilter === g
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {g === 'ALL' ? 'All Seats' : `${g} Mess / Sublet`}
              </button>
            ))}
          </div>

          {/* Max Rent Slider */}
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-slate-300 whitespace-nowrap">
              Max Seat Rent: <span className="text-emerald-300 text-sm">৳{maxBudget}</span>
            </label>
            <input
              type="range"
              min="2500"
              max="6000"
              step="100"
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="accent-emerald-400 cursor-pointer w-36 sm:w-44"
            />
          </div>
        </div>

        {/* Dhaka Area Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10">
          <span className="text-xs font-bold text-slate-400 mr-1">Campus Area:</span>
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setAreaFilter(area)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                areaFilter === area
                  ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/50'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {area === 'ALL' ? 'All Dhaka Areas' : area}
            </button>
          ))}
        </div>
      </div>

      {/* Stay Listings Grid */}
      {filteredStays.length === 0 ? (
        <div className="rounded-3xl bg-[#101629]/80 border border-white/10 p-10 text-center">
          <p className="text-slate-300 font-semibold mb-2">No seats match your exact filter right now.</p>
          <button
            onClick={() => {
              setGenderFilter('ALL');
              setAreaFilter('ALL');
              setMaxBudget(6000);
            }}
            className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStays.map((stay) => (
            <div
              key={stay.id}
              className="rounded-3xl bg-[#101629]/85 border border-emerald-500/25 hover:border-emerald-400/70 p-6 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-emerald-500/20 text-emerald-300">
                      {stay.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/10 text-slate-200">
                      {stay.area} · {stay.gender}
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-amber-300">{stay.seatsLeft} Seat(s) Open</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{stay.name}</h3>
                <p className="text-xs text-slate-400 mb-4 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> {stay.distance}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-slate-400">Seat Rent / Month</div>
                    <div className="text-lg font-extrabold text-emerald-300">
                      ৳{stay.rent} <span className="text-xs font-normal text-slate-400">/mo</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-slate-400">মিল সিস্টেম (Meal Rate)</div>
                    <div className="text-xs font-bold text-white mt-1">{stay.mealRate}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {stay.amenities.map((a) => (
                    <span key={a} className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] text-slate-300">
                      ✓ {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setBookingStay(stay)}
                  className="flex-1 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition"
                >
                  Book Seat Visit (সিট বুক করুন)
                </button>
                <button
                  onClick={() => notify(`Saved "${stay.name}" to your shortlist!`, 'emerald')}
                  className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition"
                  title="Bookmark"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Book Seat Visit Interactive Modal */}
      {bookingStay && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full rounded-3xl bg-[#11192e] border border-emerald-500/40 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300">
                Zero-Broker Seat Visit
              </span>
              <button
                onClick={() => setBookingStay(null)}
                className="p-1.5 rounded-xl bg-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{bookingStay.name}</h3>
            <p className="text-xs text-slate-400 mb-4">
              {bookingStay.area} · Rent: <strong className="text-emerald-300">৳{bookingStay.rent}/mo</strong>
            </p>

            <form onSubmit={handleConfirmBooking} className="space-y-3.5">
              <div>
                <label className="block text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Preferred Visit Time
                </label>
                <select
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#16203a] border border-white/15 text-sm text-white"
                >
                  <option>Today, 5:30 PM (After Classes)</option>
                  <option>Tomorrow, 4:00 PM</option>
                  <option>Friday Morning, 11:00 AM</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> Your Mobile / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  placeholder="017XX-XXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25"
              >
                Confirm Visit & Unlock Mess Manager Contact
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 7. MAIN APPLICATION SHELL (3D LANDING HUB + SMOOTH DETAIL ROUTER)
// ============================================================================
export default function App() {
  const [activeModule, setActiveModule] = useState(null); // null = Hub, or 'campusiq' | 'pocketcampus' | 'findit' | 'edupulse' | 'staymate'
  const [toasts, setToasts] = useState([]);

  const notify = (message, accent = 'indigo') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, accent }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const openModule = (modKey) => {
    setActiveModule(modKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const modulesMeta = [
    { key: 'campusiq', label: '01 · CampusIQ', color: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/15' },
    { key: 'pocketcampus', label: '02 · PocketCampus', color: 'text-amber-300 border-amber-500/30 bg-amber-500/15' },
    { key: 'findit', label: '03 · FindIt AI', color: 'text-fuchsia-300 border-fuchsia-500/30 bg-fuchsia-500/15' },
    { key: 'edupulse', label: '04 · EduPulse', color: 'text-violet-300 border-violet-500/30 bg-violet-500/15' },
    { key: 'staymate', label: '05 · StayMate', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/15' }
  ];

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      {/* Ambient Colorful Gradient Mesh Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-fuchsia-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-[30rem] h-[30rem] bg-emerald-500/15 rounded-full blur-3xl" />
      </div>

      {/* Floating Toast Stack */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => {
          const borderMap = {
            cyan: 'border-cyan-400/50 bg-[#0b1f29]/95 text-cyan-100',
            amber: 'border-amber-400/50 bg-[#241a0d]/95 text-amber-100',
            fuchsia: 'border-fuchsia-400/50 bg-[#231026]/95 text-fuchsia-100',
            emerald: 'border-emerald-400/50 bg-[#0d221c]/95 text-emerald-100',
            indigo: 'border-indigo-400/50 bg-[#12172b]/95 text-indigo-100'
          };
          return (
            <div
              key={t.id}
              className={`pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-2xl backdrop-blur-xl text-sm font-medium ${
                borderMap[t.accent] || borderMap.indigo
              }`}
            >
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{t.message}</span>
            </div>
          );
        })}
      </div>

      {/* Sticky Glass Header */}
      <header className="sticky top-0 z-40 bg-[#0c1122]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <button
            onClick={() => openModule(null)}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0b0f1e] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-fuchsia-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-white via-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Smart Campus Life
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  3D OS
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                স্মার্ট ক্যাম্পাস ইকোসিস্টেম · All-in-One Student Hub
              </p>
            </div>
          </button>

          {/* Desktop Quick Module Switcher */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => openModule(null)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeModule === null
                  ? 'bg-white/15 text-white shadow'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Hub Overview
            </button>
            {modulesMeta.map((m) => (
              <button
                key={m.key}
                onClick={() => openModule(m.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                  activeModule === m.key
                    ? 'bg-white/15 text-white shadow'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {m.label}
              </button>
            ))}
          </nav>

          {/* Live Pulse Pill */}
          <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-300 hidden sm:inline">Campus Live:</span>
            <span className="font-extrabold text-emerald-300">2,480 Online</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeModule === null ? (
          /* ================================================================
             LANDING DASHBOARD: 3D BENTO GRID OF 5 CAMPUS MODULES
             ================================================================ */
          <section>
            {/* Hero Banner */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-indigo-300 mb-5">
                <Cpu className="w-4 h-4 text-fuchsia-400" />
                <span>Next-Gen University Experience · স্মার্ট ক্যাম্পাস লাইফ</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5">
                Everything Your Campus Needs,
                <span className="block bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                  Reimagined in 3D & AI.
                </span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Click any project card below to launch its interactive workspace—navigate campus buildings in 3D, track daily mess & pocket expenses in ৳, recover lost items with AI, guard your 75% attendance, or find verified student housing (
                <span className="text-emerald-300 font-semibold">বাসা ও মেস</span>).
              </p>
            </div>

            {/* 3D Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-7">
              {/* 01 · CampusIQ */}
              <Tilt3DCard
                onClick={() => openModule('campusiq')}
                glowColor="cyan"
                className="lg:col-span-3 p-6 sm:p-8"
              >
                <div className="absolute -right-12 -top-12 w-52 h-52 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                        01 · CampusIQ
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                        <Boxes className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      3D Campus Map & Crowd Digital Twin
                    </h2>
                    <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-6">
                      Explore interactive 3D campus buildings, check empty classrooms, AC status, and real-time crowd density across libraries and cafeterias.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-cyan-200/80">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5">Interactive 3D Grid</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5">Live Telemetry</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-300 group-hover:translate-x-1.5 transition-transform">
                      Open 3D Map <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Tilt3DCard>

              {/* 02 · PocketCampus */}
              <Tilt3DCard
                onClick={() => openModule('pocketcampus')}
                glowColor="amber"
                className="lg:col-span-3 p-6 sm:p-8"
              >
                <div className="absolute -right-12 -top-12 w-52 h-52 bg-gradient-to-br from-amber-500/30 to-orange-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-amber-500/15 text-amber-300 border border-amber-400/30">
                        02 · PocketCampus
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300">
                        <Wallet className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      Expense Tracker & Hangout Bill Splitter
                    </h2>
                    <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-6">
                      Log daily mess meals, rickshaw fares, and printouts in BDT (৳). View category spending bars and split group adda bills automatically.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-amber-200/80">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5">৳ Budget Meter</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5">Friend Split</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-300 group-hover:translate-x-1.5 transition-transform">
                      Open Tracker <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Tilt3DCard>

              {/* 03 · FindIt AI */}
              <Tilt3DCard
                onClick={() => openModule('findit')}
                glowColor="fuchsia"
                className="lg:col-span-2 p-6 sm:p-7"
              >
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gradient-to-br from-fuchsia-500/30 to-purple-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-400/30">
                        03 · FindIt AI
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                        <ScanSearch className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
                      AI Lost & Found Hub
                    </h3>
                    <p className="text-slate-300/90 text-sm leading-relaxed mb-5">
                      Lost your ID card, AirPods, or calculator? Post alerts and match found items across campus with AI similarity scoring.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-fuchsia-200/80 font-semibold">98% AI Match Rate</span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-fuchsia-300 group-hover:translate-x-1.5 transition-transform">
                      Explore <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Tilt3DCard>

              {/* 04 · EduPulse AI */}
              <Tilt3DCard
                onClick={() => openModule('edupulse')}
                glowColor="violet"
                className="lg:col-span-2 p-6 sm:p-7"
              >
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gradient-to-br from-violet-500/30 to-indigo-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-violet-500/15 text-violet-300 border border-violet-400/30">
                        04 · EduPulse AI
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      75% Attendance Predictor
                    </h3>
                    <p className="text-slate-300/90 text-sm leading-relaxed mb-5">
                      Track course-wise attendance interactively and calculate how many classes you can safely skip above the 75% exam limit.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-violet-200/80 font-semibold">Smart Routine Sync</span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-violet-300 group-hover:translate-x-1.5 transition-transform">
                      Explore <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Tilt3DCard>

              {/* 05 · StayMate */}
              <Tilt3DCard
                onClick={() => openModule('staymate')}
                glowColor="emerald"
                className="lg:col-span-2 p-6 sm:p-7"
              >
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gradient-to-br from-emerald-500/30 to-teal-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                        05 · StayMate
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                        <Home className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                      StayMate · বাসা ও মেস খোঁজা
                    </h3>
                    <p className="text-slate-300/90 text-sm leading-relaxed mb-5">
                      Verified student mess & sublets across Dhanmondi, Uttara, Mirpur & Bashundhara with meal system rates (মিল সিস্টেম).
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-emerald-200/80 font-semibold">Zero Broker Fee</span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-300 group-hover:translate-x-1.5 transition-transform">
                      Find Seat <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Tilt3DCard>
            </div>
          </section>
        ) : (
          /* ================================================================
             DETAIL VIEW ROUTER WITH BACK BUTTON & QUICK SWITCHER TABS
             ================================================================ */
          <section>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <button
                onClick={() => openModule(null)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#101629]/90 hover:bg-white/10 border border-white/15 text-sm font-bold text-white transition group"
              >
                <ArrowLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Campus Hub</span>
              </button>

              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
                {modulesMeta.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => openModule(m.key)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition whitespace-nowrap ${
                      activeModule === m.key
                        ? `${m.color} ring-2 ring-white/25`
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {activeModule === 'campusiq' && <CampusIQView notify={notify} />}
            {activeModule === 'pocketcampus' && <PocketCampusView notify={notify} />}
            {activeModule === 'findit' && <FindItAIView notify={notify} />}
            {activeModule === 'edupulse' && <EduPulseView notify={notify} />}
            {activeModule === 'staymate' && <StayMateView notify={notify} />}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-6 mt-12 bg-[#0b1021]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span>Smart Campus Life · Built with React JSX & Tailwind CSS</span>
          </div>
          <div>
            <span>CampusIQ · PocketCampus · FindIt AI · EduPulse AI · StayMate (বাসা ও মেস খোঁজা)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}