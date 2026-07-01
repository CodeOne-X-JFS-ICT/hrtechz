"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTA_Buttons from "@/components/CTA_button";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/footer";

/* ── Tech Badges ─────────────────────────────── */
const TECH_BADGES = [
  { label: "Custom HR Software", icon: "✦" },
  { label: "AI-Driven Solutions", icon: "✦" },
  { label: "Workflow Automation", icon: "✦" },
  { label: "Digital Transformation", icon: "✦" },
];

/* ── Why Technology Matters — Benefits ───────── */
const BENEFITS = [
  {
    title: "Automate Manual Processes",
    description:
      "Eliminate repetitive HR tasks through intelligent automation, freeing your team to focus on what matters most.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Improve Data Accuracy",
    description:
      "Ensure reliable, accessible workforce data across all HR functions with structured digital systems.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l6 6L23 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scale Without Overhead",
    description:
      "Grow your operations confidently without proportionally increasing administrative burden or headcount.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="17" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="11" y="11" width="5" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="19" y="5" width="5" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Strengthen Digital Security",
    description:
      "Reinforce digital infrastructure with secure, compliant architecture designed for modern HR environments.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l10 4v8c0 5-4.5 9-10 10C8.5 24 4 20 4 15V7l10-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Real-Time Decision Making",
    description:
      "Accelerate strategic decisions with live analytics and dashboards that surface workforce insights instantly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-8 5 5 4-6 5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Long-Term Digital Transformation",
    description:
      "Support sustained organizational evolution with technology solutions built to adapt and grow with you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ── Technology Solutions ─────────────────────── */
const SOLUTIONS = [
  {
    number: "01",
    title: "IT Augmentation",
    bgImage: "/images/tech-augmentation.jpg",
    description:
      "Extend your in-house capabilities with skilled technology professionals deployed on demand.",
    items: [
      "On-Demand Tech Talent",
      "Project-Based Deployment",
      "Flexible Engagement Models",
      "Domain-Specific Specialists",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M4 28c0-5 3.6-8 8-8s8 3 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 14l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Dedicated Teams",
    bgImage: "/images/tech-dedicated.jpg",
    description:
      "Build long-term, fully dedicated engineering and support teams aligned to your product roadmap.",
    items: [
      "Full-Time Dedicated Engineers",
      "Roadmap-Aligned Delivery",
      "Integrated Team Structure",
      "Ongoing Technical Support",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M2 26c0-4 3.6-7 8-7h12c4.4 0 8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Web Design / Development",
    bgImage: "/images/tech-webdev.jpg",
    description:
      "Design and develop modern, responsive websites and web applications tailored to your business needs.",
    items: [
      "UI/UX Design",
      "Responsive Web Development",
      "Custom Web Applications",
      "Performance Optimization",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 28h12M16 24v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 14l3 3-3 3M16 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Data Processing",
    bgImage: "/images/tech-data.jpg",
    description:
      "Structure, clean, and manage large volumes of workforce and business data for accurate reporting and analysis.",
    items: [
      "Data Structuring & Cleaning",
      "Workforce Analytics",
      "Reporting Dashboards",
      "Data Quality Management",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="8" rx="10" ry="4" stroke="currentColor" strokeWidth="2" />
        <path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="currentColor" strokeWidth="2" />
        <path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

/* ── CodeOne-X Key Strengths ─────────────────── */
const CODEONEX_STRENGTHS = [
  "Skilled Engineering Talent",
  "Agile Delivery Methodology",
  "Secure, Scalable Architecture",
  "AI & Automation Expertise",
  "Ongoing Technical Support",
];

/* ── Floating Visual Tech Stack ──────────────── */
const TECH_STACK = [
  { label: "AI & Machine Learning", pct: 95 },
  { label: "HR Automation", pct: 92 },
  { label: "Cloud Infrastructure", pct: 88 },
  { label: "Data & Analytics", pct: 90 },
];



export default function TechnologyPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [metricsStarted, setMetricsStarted] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  /* Scroll tracking — matches testing/page.tsx */
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
  const benefitScrollRef = useRef<HTMLDivElement>(null);
  const handleBenefitScroll = () => {
    if (benefitScrollRef.current) {
      const { scrollLeft, clientWidth } = benefitScrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveBenefitIndex(index);
    }
  };

  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const solutionScrollRef = useRef<HTMLDivElement>(null);

  const [activeRelatedIndex, setActiveRelatedIndex] = useState(0);
  const relatedScrollRef = useRef<HTMLDivElement>(null);

  /* Reusable scroll math helper — identical to testing/page.tsx */
  const handleScrollTracking = (
    scrollRef: React.RefObject<HTMLDivElement | null>,
    setIndexState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setIndexState(index);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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

      {/* HERO — Technology Page*/}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#2F3296]/4 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#2F3296]/60 via-[#2F3296]/20 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-12 lg:py-15">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center lg:items-start justify-between w-full">

            {/* LEFT: Headline & Badges */}
            <div className="w-full lg:w-[50%] flex flex-col gap-3 lg:gap-4 text-center lg:text-left items-center lg:items-start">
              <div className="hidden lg:flex items-center gap-2 text-sm text-zinc-400">
                <Link href="/" className="hover:text-[#2F3296] transition-colors duration-200">Home</Link>
                <span>/</span>
                <span className="text-[#2F3296] font-semibold">Technology</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="inline-block w-8 h-0.5 bg-[#2F3296]" />
                <p className="text-[#2F3296] text-sm font-semibold tracking-[0.18em] uppercase">Powered by CodeOne-X</p>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black leading-[1.3] tracking-tight text-black uppercase">
                Building{" "}
                <span className="text-[#2F3296]">Future-Ready</span>{" "}
                HR Operations Through{" "}
                <span className="relative inline-block text-[#2F3296]">
                  Digital Innovation
                  <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#2F3296] rounded-full" />
                </span>
              </h1>
              <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-start gap-3 lg:gap-4 pt-2 w-full">
                {TECH_BADGES.map((badge) => (
                  <span key={badge.label} className="inline-flex items-center lg:justify-start gap-2 px-2.5 sm:px-4 py-2 bg-[#2F3296]/8 border border-[#2F3296]/20 text-[#2F3296] text-xs sm:text-sm font-semibold rounded-2xl lg:rounded-full w-full lg:w-auto min-h-[44px] lg:min-h-0">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#2F3296] text-white text-[10px] font-black flex-shrink-0">{badge.icon}</span>
                    <span className="leading-tight text-left break-words">{badge.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: Descriptions & CTAs */}
            <div className="w-full lg:w-[50%] flex flex-col gap-4 lg:gap-6 text-center lg:text-left items-center lg:items-start">
              <div className="space-y-4 py-2 lg:py-10">
                <p className="text-base text-zinc-600 leading-relaxed text-justify">
                  At HRTECHZ, our Technology division, powered by{" "}
                  <span className="text-[#2F3296] font-semibold">CodeOne-X</span>,
                  helps organizations modernize HR operations through custom software,
                  automation, and AI-driven digital solutions.
                </p>
                <p className="text-base lg:text-lg text-zinc-600 leading-relaxed text-justify">
                  We combine deep HR domain expertise with modern engineering practices
                  to design, build, and support technology that scales with your workforce
                  needs — from IT augmentation to full-scale digital transformation.
                </p>
              </div>
              <div className="mt-2 w-full flex justify-center lg:justify-start sm:w-auto">
                <CTA_Buttons
                  primaryText="Explore Technology Solutions"
                  primaryHref="/technology/solutions"
                  secondaryText="Request a Demo"
                  secondaryHref="/demo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-width black dashboard strip */}
        <div className="w-full bg-black border-t border-white/10 px-6 lg:px-12 py-8 mt-4">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            <div className="flex-shrink-0 lg:w-64 text-center lg:text-left">
              <p className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-1">CodeOne-X Capabilities</p>
              <p className="text-white font-black text-lg leading-tight">Technology That Scales</p>
            </div>
            <div className="hidden lg:block w-px h-16 bg-white/10 mx-10 flex-shrink-0" />
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {TECH_STACK.map((item) => (
                <div key={item.label} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-xs font-semibold">{item.label}</span>
                    <span className="text-[#2F3296] text-xs font-black">{item.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#2F3296] rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block w-px h-16 bg-white/10 mx-10 flex-shrink-0" />
            <div className="flex-shrink-0 flex flex-row lg:flex-col gap-3">
              {["ISO Compliant", "Agile Delivery", "24/7 Support"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-[#2F3296]" />
                  <span className="text-white text-xs font-semibold whitespace-nowrap">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why Technology Matters*/}
      <section className="w-full bg-black py-10 px-6 lg:px-12">
        <div className="w-full max-w-6xl mx-auto">

          {/* Mobile header */}
          <div className="block lg:hidden text-center mb-10">
            <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-3">
              Why Technology Matters
            </p>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Organizations That Don't Modernize{" "}
              <span className="text-[#2F3296]">Fall Behind</span>
            </h2>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-zinc-50" />
            <p className="text-zinc-400 text-base leading-relaxed text-justify mt-6">
              HR operations are becoming increasingly data-driven and digital-first.
              Organizations that fail to modernize risk slower decision-making,
              inconsistent processes, and lost competitive advantage.
            </p>
          </div>

          {/* Desktop header — split two-column, matches testing/page.tsx pattern */}
          <div className="hidden lg:flex flex-row gap-12 mb-14 items-start">
            <div className="flex-1">
              <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-4">
                Why Technology Matters
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Organizations That Don't Modernize{" "}
                <span className="text-[#2F3296]">Fall Behind</span>
              </h2>
              <div className="mt-5 w-16 h-1 rounded-full bg-zinc-50" />
            </div>
            <div className="flex-1 flex items-center py-10">
              <p className="text-zinc-400 text-lg leading-relaxed">
                HR operations are becoming increasingly data-driven and
                digital-first. Organizations that fail to modernize risk
                slower decision-making, inconsistent processes, and lost
                competitive advantage. Our technology solutions help you
                stay ahead.
              </p>
            </div>
          </div>

          {/* Benefits grid — horizontal scroll on mobile, 3-col grid on desktop */}
          <div className="relative w-full">
            <div
              ref={benefitScrollRef}
              onScroll={() => handleScrollTracking(benefitScrollRef, setActiveBenefitIndex)}
              className="flex flex-row lg:grid lg:grid-cols-2 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-6 px-4 -mx-4 lg:px-0 lg:mx-auto"
            >
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="w-[85%] sm:w-[48%] lg:w-auto h-[480px] lg:h-[420px] flex-shrink-0 snap-center rounded-3xl overflow-hidden shadow-md relative group cursor-pointer bg-[#090A1E] border border-white/10"
                >
                  <div className="group flex flex-col gap-3 lg:gap-4 bg-[#2F3296]/20 border border-white/20 hover:border-[#2F3296] lg:hover:bg-white/80 rounded-2xl p-5 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-default select-none h-full justify-between items-start">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#2F3296] text-black transition-all duration-300 lg:group-hover:bg-[#2F3296] lg:group-hover:text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-left text-white lg:group-hover:text-[#2F3296] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-left text-white/60 lg:group-hover:text-zinc-800 transition-colors duration-300">
                      {benefit.description}
                    </p>
                    <div className="mt-auto pt-2 border-t border-zinc-100/10 lg:border-zinc-100 w-full">
                      <div className="h-0.5 bg-[#2F3296] rounded-full transition-all duration-500 lg:w-0 lg:group-hover:w-full w-0" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile dot indicators */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-2 w-full">
              {BENEFITS.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeBenefitIndex === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Technology Solutions */}
      <section className="w-full bg-white py-12 lg:py-10 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-4">
              Our Solutions
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
              Technology &{" "}
              <span className="text-[#2F3296]">Digital Solutions</span>
            </h2>
            <p className="text-zinc-500 text-lg mt-4 max-w-2xl mx-auto">
              End-to-end technology services designed to modernize HR
              operations and drive sustainable digital transformation.
            </p>
            <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* Solutions grid track — horizontal scroll mobile, 2-col grid desktop */}
          <div className="relative w-full">
            <div
              ref={solutionScrollRef}
              onScroll={() => handleScrollTracking(solutionScrollRef, setActiveSolutionIndex)}
              className="flex flex-row lg:grid lg:grid-cols-2 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-6 px-4 -mx-4 lg:px-0 lg:mx-auto"
            >
              {SOLUTIONS.map((solution) => (
                <div
                  key={solution.title}
                  className="w-[85%] sm:w-[48%] lg:w-auto h-[480px] lg:h-[420px] flex-shrink-0 snap-center rounded-3xl overflow-hidden shadow-md relative group cursor-pointer bg-[#090A1E] border border-white/10"
                >
                  {/* Background image layer */}
                  <img
                    src={solution.bgImage}
                    alt={solution.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.15] group-hover:scale-105 transition-all duration-500 ease-out z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 mix-blend-multiply z-0" />
                  <div className="absolute inset-0 bg-[#2F3296]/10 mix-blend-color group-hover:bg-[#2F3296]/30 transition-all duration-500 z-0" />

                  {/* Card content */}
                  <div className="absolute inset-0 p-6 lg:p-8 z-10 flex flex-col justify-between items-start text-left h-full">
                    <div className="flex justify-between items-start w-full">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white border border-white/20 backdrop-blur-sm group-hover:bg-[#2F3296] group-hover:border-[#2F3296] transition-all duration-300">
                        {solution.icon}
                      </div>
                      <span className="text-4xl lg:text-5xl font-black text-white/80 tracking-tighter leading-none select-none group-hover:text-[#2F3296] transition-colors duration-300">
                        {solution.number}
                      </span>
                    </div>

                    <div className="w-full flex flex-col text-left">
                      <div className="flex items-center gap-3 mb-1 group-hover:opacity-0 transition-opacity duration-300">
                        <span className="w-6 h-0.5 bg-[#2F3296]" />
                        <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Solution Module</span>
                      </div>
                      <h3 className="text-white text-xl lg:text-2xl font-black tracking-tight uppercase transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                        {solution.title}
                      </h3>

                      {/* Revealed content on hover */}
                      <div className="h-0 opacity-0 transform translate-y-8 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-0 overflow-hidden transition-all duration-500 ease-out mt-0 group-hover:mt-3">
                        <p className="text-white/80 text-xs lg:text-sm leading-relaxed border-t border-white/10 pt-3">
                          {solution.description}
                        </p>
                        <ul className="flex flex-col gap-2 w-full mb-4">
                          {solution.items.map((item) => (
                            <li key={item} className="flex items-center gap-2.5 text-white text-xs lg:text-sm font-medium text-left">
                              <span className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full bg-[#2F3296]/30 border border-[#2F3296] flex-shrink-0">
                                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="lg:w-2.5 lg:h-2.5">
                                  <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                              <span className="truncate lg:whitespace-normal text-white/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-2 border-t border-white/10 flex justify-between items-center w-full">
                          <span className="inline-flex items-center gap-2 text-white/60 text-xs font-bold tracking-widest uppercase">Learn More</span>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#2F3296]">
                            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      <p className="text-white/30 text-[10px] mt-1.5 block lg:hidden group-hover:opacity-0 transition-opacity duration-200">
                        Tap card to reveal details
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile dot indicators */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-2 w-full">
              {SOLUTIONS.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSolutionIndex === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — Powered by CodeOne-X
      ══════════════════════════════════════════ */}
      <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
      <section className="w-full bg-zinc-30 py-16 lg:py-20 px-6 lg:px-12 border-b border-zinc-200">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">

            {/* LEFT: Visual card */}
            <div className="w-full lg:w-[48%] flex items-center justify-center bg-white shadow-[#2F3296] rounded-3xl p-6 lg:p-12 shadow-xl min-h-[160px] lg:min-h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-[#2F3296]/5 pointer-events-none" />

              {/* CodeOne-X visual — tech grid pattern */}
              <div className="relative z-10 w-full flex flex-col items-center gap-6">
                {/* Icon mark */}
                <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-[#2F3296] shadow-2xl">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="4" y="8" width="32" height="24" rx="3" stroke="white" strokeWidth="2" />
                    <path d="M14 18l4 4-4 4M20 22h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {/* Wordmark */}
                <div className="text-center">
                  <p className="text-[#2F3296] font-black text-3xl lg:text-4xl tracking-tight">CODEONE-X</p>
                  <p className="text-zinc-400 text-sm font-semibold tracking-[0.18em] uppercase mt-1">Technology Innovation Hub</p>
                </div>
                {/* Mini tech tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {["AI", "Automation", "Cloud", "Data", "Web"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#2F3296]/10 border border-[#2F3296]/20 text-[#2F3296] text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Content & Strengths checklist */}
            <div className="w-full lg:w-[48%] flex flex-col text-center lg:text-left items-center lg:items-start gap-5">

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="inline-block w-8 h-0.5 bg-[#2F3296]" />
                <p className="text-[#2F3296] text-sm font-semibold tracking-[0.18em] uppercase">Powered by</p>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight text-center lg:text-left w-full">
                Technology{" "}
                <span className="underline decoration-[#2F3296] underline-offset-4 text-[#2F3296]">
                  Innovation Hub
                </span>
              </h2>

              <p className="text-black/75 text-lg leading-relaxed text-justify lg:text-left">
                CODEONE-X is the dedicated technology arm of HRTECHZ, delivering
                HR software, automation, and AI-driven solutions for organizations
                across industries.
              </p>

              {/* Key Strengths checklist — matches testing/page.tsx check list style */}
              <ul className="flex flex-col gap-3.5 mt-2 w-full">
                {CODEONEX_STRENGTHS.map((checkItem) => (
                  <li key={checkItem} className="flex items-center gap-3 text-zinc-800 text-md font-bold tracking-wide">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#2F3296]/10 border border-[#2F3296]/30 text-[#2F3296] flex-shrink-0 shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-current" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {checkItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Remaining sections will be added here ── */}

      <Footer />
    </div>
  );
}