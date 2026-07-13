"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTA_Buttons from "@/components/CTA_button";
import Footer from "@/components/footer";

/* ── Our Approach ────────────────────────────── */
const APPROACH = [
  {
    title: "Client-Centric Solutions",
    description:
      "Tailored services designed to meet each client's unique requirements and business objectives.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M4 26c0-5 4.5-9 10-9s10 4 10 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous quality control measures to ensure consistent excellence in service delivery.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l6 6L23 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    description:
      "Ongoing refinement of processes and methodologies to enhance operational efficiency.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-8 5 5 4-6 5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Technology Integration",
    description:
      "Leveraging cutting-edge tools and platforms to streamline workflow and boost productivity.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 14l3 3-3 3M16 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ── Our Values ──────────────────────────────── */
const VALUES = [
  { title: "Innovation",          description: "Pushing boundaries of technological solutions.",             icon: "🗹" },
  { title: "Global Perspective",  description: "Understanding diverse markets and cultural nuances.",        icon: "🗹" },
  { title: "Precision",           description: "Delivering excellence with meticulous attention to detail.", icon: "🗹" },
  { title: "Collaboration",       description: "Fostering teamwork and collective growth.",                  icon: "🗹" },
];

/* ── Metrics ─────────────────────────────────── */
const METRICS = [
  { value: 12,  suffix: "+", label: "Years Experience",  unit: ""   },
  { value: 100, suffix: "+", label: "Team Members",      unit: ""   },
  { value: 50,  suffix: "+", label: "Global Clients",    unit: ""   },
  { value: 24,  suffix: "/7", label: "Global Support",   unit: ""   },
];

/* ── Team data ───────────────────────────────── */
const BOARD_DIRECTORS = [
  { name: "Madhushan Raigamage", role: "Director / CXO",  image: "/images/team/madhushan.jpg" },
  { name: "Chamalee Dilrukshi",  role: "Director",         image: "/images/team/chamalee.jpg"  },
];

const HOLDING_BOARD = [
  { name: "Madhushan Raigamage", role: "Chairperson",                      image: "/images/team/madhushan.jpg"  },
  { name: "Chamalee Dilrukshi",  role: "Non Executive / Non Independent",   image: "/images/team/chamalee.jpg"   },
  { name: "Nuwan Withanage",     role: "Non Executive, Independent",        image: "/images/team/nuwan-w.jpg"    },
  { name: "Nilantha Perera",     role: "Non Executive, Independent",        image: "/images/team/nilantha.jpg"   },
  { name: "Nuwan Widyapathige",  role: "Non Executive, Independent",        image: "/images/team/nuwan-wi.jpg"   },
];

const TEAMS = [
  {
    name: "Operations Team",
    members: [
      { name: "Nirmala Dasanayake", role: "Team Member", image: "/images/team/nirmala.jpg"  },
      { name: "Guwani Madusha",     role: "Team Member", image: "/images/team/guwani.jpg"   },
      { name: "Jithmi Anuththara",  role: "Team Member", image: "/images/team/jithmi.jpg"   },
    ],
  },
  {
    name: "HR Team",
    members: [
      { name: "Avinash Rohith", role: "Team Member", image: "/images/team/avinash.jpg" },
    ],
  },
  {
    name: "Payroll Team",
    members: [
      { name: "Nimmi Kaushalya",  role: "Team Member", image: "/images/team/nimmi.jpg"   },
      { name: "Sachini Ananda",   role: "Team Member", image: "/images/team/sachini.jpg" },
    ],
  },
  {
    name: "Talent Acquisition Team",
    members: [
      { name: "Dushari Rupasinghe", role: "Team Member", image: "/images/team/dushari.jpg" },
    ],
  },
  {
    name: "Tech Team",
    members: [
      { name: "Raveen Anuradha", role: "IT Infrastructure", image: "/images/team/raveen.jpg"  },
      { name: "Akindu Sandeev",  role: "Development",       image: "/images/team/akindu.jpg"  },
    ],
  },
  {
    name: "Finance Team",
    members: [
      { name: "Yohan Jayalal",       role: "Team Member", image: "/images/team/yohan.jpg"     },
      { name: "Kavindri Siriwardena", role: "Team Member", image: "/images/team/kavindri.jpg" },
      { name: "Nimeshika Kumari",    role: "Team Member", image: "/images/team/nimeshika.jpg" },
    ],
  },
];
function ApproachCard({ item, index }: { item: { title: string; description: string; icon: React.ReactNode }; index: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped((v) => !v)}
      className="relative cursor-pointer"
      style={{ perspective: "1000px", minHeight: "160px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "160px",
        }}
      >
        {/* FRONT */}
        <div
          className="group relative flex flex-col gap-4 bg-white border border-[#2F3296]/20 hover:border-[#2F3296] rounded-2xl p-3 shadow-md shadow-[#2F3296] transition-all duration-300 overflow-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <span className="absolute -bottom-4 right-4 text-6xl lg:text-7xl font-black text-black/20 group-hover:text-[#2F3296]/50 leading-none select-none tracking-tighter transition-all duration-500 transform group-hover:-translate-y-3">
                      {String(index + 1).padStart(2, "0")}
                    </span>
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2F3296]/10 text-[#2F3296] flex-shrink-0">
            {item.icon}
          </div>
          <h3 className="text-black font-bold text-md leading-snug">{item.title}</h3>
          <p className="text-[#2F3296]/50 text-[10px] mt-auto font-medium">Tap to learn more ↩</p>
          <div className="hidden lg:block mt-auto pt-2 border-t border-zinc-100">
            {/* Bottom accent sweep */}
            <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#2F3296] to-transparent transition-all duration-500 rounded-b-3xl" />

            <div className="w-0 group-hover:w-full h-0.5 bg-[#2F3296] rounded-full transition-all duration-500" />
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#2F3296] border-2 border-[#2F3296] rounded-2xl p-5 shadow-md"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          
          <p className="text-white/80 text-xs leading-relaxed text-center relative z-10">{item.description}</p>
          <p className="text-white/40 text-[10px] mt-auto font-medium">Tap to close ↩</p>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ value }: { value: { title: string; description: string; icon: string } }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped((v) => !v)}
      className="relative cursor-pointer"
      style={{ perspective: "1000px", minHeight: "160px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "160px",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#2F3296] hover:bg-[#1a1d6e] border-2 border-[#2F3296] rounded-2xl p-6 shadow-md shadow-[#1a1d6e] transition-colors duration-300"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <span className="text-5xl text-zinc-300 group-hover:text-black">{value.icon}</span>
          <h3 className="text-white group-hover:text-[#2F3296] font-bold text-center text-md leading-snug transition-colors duration-300">
            {value.title}</h3>
          <p className="text-white/40 text-[10px] mt-auto font-medium">Tap to learn more ↩</p>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white border-2 border-[#2F3296] rounded-2xl p-5 shadow-md"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-zinc-500 text-xs leading-relaxed text-center">{value.description}</p>
          <p className="block lg:hidden text-zinc-300 text-[10px] mt-auto font-medium">Tap to close ↩</p>
        </div>
      </div>
    </div>
  );
}

/* ── Animated counter ────────────────────────── */
function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

/* ── Member card ─────────────────────────────── */
function MemberCard({ member, large = false }: { member: { name: string; role: string; image: string }; large?: boolean }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`group flex flex-col items-center text-center gap-3 bg-[#2F3296]/20 hover:border-[#2F3296] rounded-2xl p-3 shadow-sm hover:shadow-lg transition-all duration-300 ${large ? "p-7" : ""}`}>
      {/* Avatar */}
      <div className={`relative rounded-2xl overflow-hidden bg-zinc-100 flex-shrink-0 ${large ? "w-36 h-36" : "w-30 h-30"}`}>
        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes={"256px"} // 💡 Fixes the missing sizes warning
            className="object-cover z-10 relative" // 💡 Elevates image over fallback layer
            onError={() => setImageError(true)} // 💡 Switches to fallback state on error
          />
        ) : null}
        
        {/* Fallback initials — Only acts as background layer or explicit fallback */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2F3296] to-[#1a1d6e] text-white font-black text-xl z-0">
          {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
        </div>
      </div>
      {/* Name */}
      <div>
        <p className={`text-white font-bold group-hover:text-[#2F3296] transition-colors duration-200 leading-tight ${large ? "text-base" : "text-sm"}`}>
          {member.name}
        </p>
        <p className={`text-zinc-400 mt-0.5 ${large ? "text-sm" : "text-xs"}`}>{member.role}</p>
      </div>
      {/* Bottom accent */}
      <div className="w-0 group-hover:w-10 h-0.5 bg-[#2F3296] rounded-full transition-all duration-300" />
    </div>
  );
}

/* Single metric card */
function MetricCard({
  metric,
  started,
}: {
  metric: (typeof METRICS)[0];
  started: boolean;
}) {
  const count = useCountUp(metric.value, 2000, started);

  const display =
    metric.value >= 1000
      ? count >= 1000
        ? (count / 1000).toFixed(0) + "k"
        : count.toString()
      : count.toString();

  return (
    <div className="group flex flex-col items-center justify-center text-center p-6 transition-all duration-300 cursor-default">
      <span className="text-4xl lg:text-5xl font-black text-[#2F3296] group-hover:text-black transition-colors duration-300 leading-none">
        {display}
        {metric.suffix}
      </span>
      <span className="mt-3 text-sm font-semibold text-black/70 group-hover:text-[#2F3296] transition-colors duration-300 leading-snug">
        {metric.label}
      </span>
    </div>
  );
}

export default function LeadershipPage() {
    const [metricsStarted, setMetricsStarted] = useState(false);
    const metricsRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setMetricsStarted(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    if (metricsRef.current) observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col bg-white"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      <Navbar />

      {/* HERO */}
      <section className="w-full bg-black relative overflow-hidden py-20 lg:py-18 px-6 lg:px-12">
        <div className="absolute -bottom-20 -right-50 w-80 h-80 rounded-full bg-[#2F3296]/15 pointer-events-none" />
          <div className="absolute -top-32 -left-18 w-96 h-96 rounded-full bg-[#2F3296]/15 pointer-events-none" />
          <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#2F3296]/15 pointer-events-none" />
        {/* Glow blobs */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#2F3296]/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#2F3296]/10 blur-[100px] rounded-full pointer-events-none" />
        {/* Decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(47,50,150,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(47,50,150,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

          {/* Breadcrumb */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-zinc-400"> 
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#2F3296] transition-colors duration-200">About</Link>
            <span>/</span>
            <span className="text-[#0911F8] font-semibold">Leadership</span>
          </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-0.5 bg-[#2F3296]" />
            <p className="text-[#0911F8] text-sm font-semibold tracking-[0.18em] uppercase">
              Meet the Team
            </p>
            <span className="inline-block w-8 h-0.5 bg-[#2F3296]" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase">
            Our{" "}
            <span className="relative inline-block text-[#2F3296]">
              Leadership
              <span className="absolute left-0 -bottom-1 h-[4px] w-full bg-[#2F3296]/40 rounded-full" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
            Meet the dedicated professionals that drive our success and deliver
            excellence to our clients.
          </p>

          {/* Founding year badge */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {["Est. 2012", "12+ Years", "100+ Professionals", "Global Reach"].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F3296]/15 border border-[#2F3296]/60 text-white text-xs font-bold rounded-full tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F3296]" />
                {tag}
              </span>
            ))}
          </div>
          {/* CTA */}
            <div className="mt-4">
              <CTA_Buttons
                primaryText="Get Started"
                primaryHref="/contact"
                secondaryText="View Our Services"
                secondaryHref="/solutions"
                />
                </div>
        </div>
      </section>

      {/* SECTION 2 — Our Story + Approach + Values */}
      <section className="w-full bg-white py-10 lg:py-20 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-20">

          {/* ── Our Story ── */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left: text */}
            <div className="flex-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase">Our Story</p>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
                From Two People to a{" "}
                <span className="text-[#2F3296]">Powerhouse</span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-[#2F3296]" />
              <p className="text-zinc-500 text-base lg:text-lg leading-relaxed text-justify lg:text-left">
                Established in 2012, our company has made an indelible mark on the
                industries we serve, thanks to our unwavering commitment to excellence.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed text-justify lg:text-left">
                From humble beginnings with only two employees, HRTECHZ has experienced
                an unprecedented level of growth, earning us a reputation as a powerhouse
                in our subsidiaries. Our rise to success has been nothing short of
                awe-inspiring, achieved within a remarkably short period of time.
              </p>

              {/* Timeline milestones */}
              <div className="flex flex-col gap-3 mt-2 w-full">
                {[
                  { year: "2012", event: "Founded with 2 employees" },
                  { year: "2015", event: "Expanded to multiple HR verticals" },
                  { year: "2019", event: "Launched technology subsidiary CodeOne-X" },
                  { year: "2024", event: "100+ team members, 50+ global clients" },
                ].map((item) => (
                  <div key={item.year} className="flex items-center gap-4 group">
                    <span className="flex-shrink-0 w-14 h-8 flex items-center justify-center rounded-lg bg-[#2F3296]/10 border border-[#2F3296]/20 text-[#2F3296] text-xs font-black">
                      {item.year}
                    </span>
                    <div className="flex-1 h-px bg-zinc-100 group-hover:bg-[#2F3296]/30 transition-colors duration-300" />
                    <span className="text-zinc-600 text-sm font-medium">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: decorative card */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="bg-[#2F3296] rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/15">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 3l10 4v8c0 5-4.5 9-10 10C8.5 24 4 20 4 15V7l10-4z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M9 14l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-black text-lg">HRTECHZ</p>
                      <p className="text-white/60 text-xs uppercase tracking-wider">Since 2012</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Team Growth", pct: 98 },
                      { label: "Client Retention", pct: 95 },
                      { label: "Service Excellence", pct: 100 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-white/70 text-xs font-semibold">{item.label}</span>
                          <span className="text-white font-black text-xs">{item.pct}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                          <div className="h-full bg-white rounded-full" style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Floating badge */}
                  <div className="bg-white/15 rounded-2xl px-4 py-3 flex items-center justify-between">
                    <span className="text-white/70 text-xs">Overall Performance</span>
                    <span className="text-white font-black text-lg">Excellent</span>
                  </div>
                </div>
                {/* Floating chip */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2">
                  <span className="text-lg">🏆</span>
                  <div>
                    <p className="text-black font-bold text-xs">Industry Leader</p>
                    <p className="text-zinc-400 text-[10px]">HR Ecosystem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Our Approach + Our Values — side by side ── */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          
            {/* left — Our Values 2×2 grid */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="text-center lg:text-left">
                <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-2">
                  Our Values
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-black">
                  What We{" "}
                  <span className="text-[#2F3296]">Stand For</span>
                </h2>
                <div className="mx-auto lg:mx-0 mt-3 w-16 h-1 rounded-full bg-[#2F3296]" />
              </div>

              {/* 2×2 grid */}
              <div className="grid grid-cols-2 gap-4">
                {VALUES.map((value) => (
                <ValueCard key={value.title} value={value} />
                ))}
              </div>
            </div>

          {/* Vertical divider — desktop only */}
            <div className="hidden lg:block w-px bg-zinc-200 self-stretch mx-1" />

            {/* Right — Our Approach 2×2 grid */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="text-center lg:text-left">
                <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-2">
                  Our Approach
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-black">
                  How We Deliver{" "}
                  <span className="text-[#2F3296]">Excellence</span>
                </h2>
                <div className="mx-auto lg:mx-0 mt-3 w-16 h-1 rounded-full bg-[#2F3296]" />
              </div>

              {/* 2×2 grid */}
              <div className="grid grid-cols-2 gap-4">
                {APPROACH.map((item, i) => (
                  <ApproachCard key={item.title} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Our Team — Pinned with full-bleed brand-blue grid background patterns */}
      <section className="w-full bg-black relative overflow-hidden py-12 lg:py-20 px-6 lg:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(47,50,150,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(47,50,150,0.15)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2F3296]/10 blur-[130px] rounded-full pointer-events-none z-0" />
        {/* Relative z-10 container forces your headers, tabs, and dark cards to stay perfectly on top */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-16">
          
          {/* Header */}
          <div className="text-center">
            <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-3">Our Team</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              The People Behind{" "}
              <span className="text-[#2F3296]">HRTECHZ</span>
            </h2>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* ── Board of Directors — centered large cards ── */}
          <div className="flex flex-col gap-8">

            {/* Board label */}
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#2F3296] text-white text-xs font-bold rounded-full uppercase tracking-[0.18em]">
                Board of Directors
              </span>
              <div className="w-px h-6 bg-white/80" />
            </div>

            {/* Board of Directors cards */}
            <div className="flex flex-row flex-wrap justify-center gap-6">
              {BOARD_DIRECTORS.map((member) => (
                <div key={member.name} className="w-52 lg:w-60">
                  <div className="group flex flex-col items-center text-center gap-4 bg-[#2F3296]/20 border-2 border-[#2F3296]/20 hover:border-[#2F3296] rounded-3xl p-4 shadow-md hover:shadow-xl transition-all duration-300">
                    {/* Avatar */}
                    {/* For BOARD_DIRECTORS map block */}
                    <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-zinc-100 flex-shrink-0 ring-4 ring-[#2F3296]/10 group-hover:ring-[#2F3296]/30 transition-all duration-300">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        sizes="512px"
                        className="object-cover z-10 relative" 
                        onError={() => {}} 
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2F3296] to-[#1a1d6e] text-white font-black text-2xl z-0">
                        {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                    </div>
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-bold text-base group-hover:text-[#2F3296] transition-colors duration-200 leading-tight">
                        {member.name}
                      </p>
                      <span className="inline-block px-3 py-1 bg-[#2F3296]/10 text-[#2F3296] text-xs font-semibold rounded-full">
                        {member.role}
                      </span>
                    </div>
                    <div className="w-0 group-hover:w-12 h-0.5 bg-[#2F3296] rounded-full transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Connector to holding board */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-6 bg-white/80" />
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-[#2F3296]/30 text-[#2F3296] text-xs font-bold rounded-full uppercase tracking-[0.18em]">
                Board of Directors – Holding Company
              </span>
              <div className="w-px h-6 bg-white/80" />
            </div>

            {/* Holding board cards */}
            <div className="flex flex-row flex-wrap justify-center gap-5">
              {HOLDING_BOARD.map((member) => (
                <div key={member.name} className="w-44 lg:w-48">
                  <div className="group flex flex-col items-center text-center gap-3 bg-[#2F3296]/20 hover:border-[#2F3296] rounded-2xl p-3 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative w-36 h-36 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0 ring-2 ring-[#2F3296]/10 group-hover:ring-[#2F3296]/30 transition-all duration-300">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        sizes="256px"
                        className="object-cover z-10 relative" 
                        onError={() => {}} 
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2F3296] to-[#1a1d6e] text-white font-black text-lg z-0">
                        {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-bold text-sm group-hover:text-[#2F3296] transition-colors duration-200 leading-tight">
                        {member.name}
                      </p>
                      <p className="text-zinc-400 text-xs">{member.role}</p>
                    </div>
                    <div className="w-0 group-hover:w-8 h-0.5 bg-[#2F3296] rounded-full transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Department Teams — Tabbed View ── */}
          <div className="flex flex-col gap-6">

            {/* Section label */}
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 rounded-full bg-[#2F3296]" />
              <h3 className="text-white font-bold text-xl uppercase tracking-wider">Department Teams</h3>
            </div>

            {/* Tab bar */}
            <div className="flex flex-row flex-wrap gap-2 border-b border-zinc-200 pb-0 justify-center items-stretch">
              {TEAMS.map((team, i) => (
                <button
                  key={team.name}
                  onClick={() => setActiveTab(i)}
                  className={`relative px-4 py-2.5 text-sm font-semibold rounded-t-xl border border-b-0 transition-all duration-200 whitespace-nowrap
                    ${activeTab === i
                      ? "bg-[#2F3296] text-white border-[#2F3296] -mb-px z-10"
                      : "bg-white text-zinc-500 border-zinc-200 hover:text-[#2F3296] hover:border-[#2F3296]/40"
                    }`}
                >
                  {team.name}
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            <div className="bg-[#2F3296]/20 border border-zinc-600 rounded-b-2xl rounded-tr-2xl p-6 lg:p-8 shadow-sm min-h-[220px]">
              <div className="flex flex-col gap-5">

                {/* Active team header */}
                <div className="flex justify-center items-stretch">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2F3296] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {TEAMS[activeTab].name}
                    </span>
                  </div>
                </div>

                {/* Members row — Aligned and centered cleanly */}
                <div className="flex flex-row flex-wrap gap-6 justify-center items-stretch w-full mx-auto">
                  {TEAMS[activeTab].members.map((member) => (
                    <div key={member.name} className="w-36 lg:w-40 flex">
                      <div className="w-full flex flex-col justify-between">
                        <MemberCard member={member} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

            {/* SECTION 8 — Success Metrics */}
      <section className="w-full bg-white py-10 lg:py-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Soft Ambient Brand Glow Behind Metrics */}
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#2F3296]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-1">
              By the Numbers
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
              Our <span className="relative inline-block text-[#2F3296]">Track Record</span> Metrics
            </h2>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* ── METRICS GRID TRACK (Balanced 2x2 Grid on Mobile / Fluid Flex Row on Desktop) ── */}
          <div 
            ref={metricsRef} 
            className="grid grid-cols-2 divide-x divide-y divide-[#2F3296]/20 sm:divide-x-0 sm:divide-y-0 sm:flex sm:flex-row sm:items-stretch mb-16 border-b border-r border-[#2F3296]/10 sm:border-0"
          >
            {METRICS.map((metric, i) => (
              <div 
                key={metric.label} 
                className={`flex flex-col sm:flex-row sm:flex-1 items-stretch col-span-1
                  /* Reset top/left borders for the first row/column cells to align perfectly */
                  ${i < 2 ? "!border-t-0" : ""}
                  ${i % 2 === 0 ? "!border-l-0" : ""}
                `}
              >
                {/* Main Metric Card Asset */}
                <div className="w-full">
                  <MetricCard metric={metric} started={metricsStarted} />
                </div>
                
                {/* High-fidelity Vertical Divider — ONLY shown on Desktop */}
                {i < METRICS.length - 1 && (
                  <div className="hidden sm:block w-px bg-[#2F3296]/30 self-stretch mx-4" />
                )}
              </div>
            ))}
          </div>
          </div>
      </section>

    {/* SECTION 5 — Call to Action */}
      <section className="w-full bg-zinc-800 py-10 px-6 lg:px-12 relative overflow-hidden">
      
        {/* Decorative background circles */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-10 right-40 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
        
        <div className="relative w-full max-w-4xl mx-auto text-center">
                {/* Eyebrow */}
                <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-5">
                  Join the Journey
                </p>
      
                {/* Heading */}
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Ready to Transform{" "}
                  <span className="text-[#2F3296] relative inline-block">
                    Your Workforce?
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-white/40 rounded-full" />
                  </span>
                  ?
                </h2>
      
                {/* Subtext */}
                <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                  Partner with HRTECHZ to streamline hiring, strengthen verification, and accelerate digital transformation.
                </p>
      
              {/* CTA buttons */}
              <CTA_Buttons
                primaryText="Get Started"
                primaryHref="/contact"
                secondaryText="View Our Services"
                secondaryHref="/solutions"
                />
         </div>
      </section>

      <Footer />
    </div>
  );
}