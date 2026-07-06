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

/* ──  Tech Steps ──────────────── */
const TECH_STEPS = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "Understand your current systems, workflows, and technology goals through in-depth discovery sessions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="13" cy="13" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M19 19l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Solution Design",
    description:
      "Architect a technology solution tailored to your operational needs, team structure, and growth roadmap.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 10h10M9 14h10M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Build and integrate the solution using modern, secure engineering practices aligned to your existing stack.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 12l3 3-3 3M15 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Rigorously test functionality, performance, and security before deployment to ensure a flawless release.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l6 6L23 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Deployment & Ongoing Support",
    description:
      "Launch the solution and provide continuous monitoring, maintenance, and support to keep everything running.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];
 
/* ── Tech Industries ──────────────── */
const TECH_INDUSTRIES = [
  { label: "Information Technology", icon: "🗹" },
  { label: "Banking & Financial Services", icon: "🗹" },
  { label: "Telecommunication", icon: "🗹" },
  { label: "Manufacturing", icon: "🗹" },
  { label: "Retail", icon: "🗹" },
  { label: "Healthcare", icon: "🗹" },
  { label: "Hospitality", icon: "🗹" },
  { label: "Logistics", icon: "🗹" },
  { label: "BPO & Shared Services", icon: "🗹" },
  { label: "Education", icon: "🗹" },
];

/* ── Tech Reasons ──────────────── */
const TECH_REASONS = [
  {
    title: "Proven Expertise",
    description:
      "Experienced engineering teams with deep HR technology domain knowledge built over years of delivery.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M5 24c0-5 4-9 9-9s9 4 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 5l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Faster Delivery",
    description:
      "Agile development practices that accelerate time to launch without compromising quality.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Scalable Solutions",
    description:
      "Technology built to grow with your organization — from startup through to full enterprise scale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="17" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="11" y="11" width="5" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="19" y="5" width="5" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Security Focused",
    description:
      "Solutions designed with data security and compliance as a core priority at every layer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l10 4v8c0 5-4.5 9-10 10C8.5 24 4 20 4 15V7l10-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Integrated HR Ecosystem",
    description:
      "Seamlessly connected with HRTECHZ Hiring and Testing solutions for a unified end-to-end HR platform.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="7"  cy="14" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="21" cy="7"  r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="21" cy="21" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M11 14h2m4-5l-2 2m0 6l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];
 
/* ── Tech Related Solutions ──────────────── */
const TECH_RELATED_SOLUTIONS = [
  {
    title: "Hiring",
    description: "Find and recruit top talent through JobFactory and SourceOne.",
    tagline: "Talent Acquisition",
    href: "/hiring",
  },
  {
    title: "Testing",
    description: "Verify candidate credentials and reduce hiring risks through Verifieze.",
    tagline: "Background Screening",
    href: "/testing",
  },
  {
    title: "Technology",
    description: "Transform HR operations through CODEONE-X technology solutions.",
    tagline: "Digital Transformation",
    href: "/technology",
  },
];
 

export default function TechnologyPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [metricsStarted, setMetricsStarted] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  /* Scroll tracking */
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

    const [activeReasonIndex, setActiveReasonIndex] = useState(0);
    const reasonScrollRef = useRef<HTMLDivElement>(null);

  /* Reusable scroll math helper — identical */
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

      {/* HERO — top section */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#2F3296]/4 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#2F3296]/60 via-[#2F3296]/20 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-12 lg:py-15">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center lg:items-start justify-between w-full">
        
        {/* Decorative background circles */}
        <div className="absolute -bottom-20 -right-50 w-80 h-80 rounded-full bg-[#2F3296]/15 pointer-events-none" />
          <div className="absolute -top-32 -left-18 w-96 h-96 rounded-full bg-[#2F3296]/15 pointer-events-none" />
          <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#2F3296]/15 pointer-events-none" />

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
              className="flex flex-row lg:grid lg:grid-cols-3 gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-1 px-2 -mx-2 lg:px-0 lg:mx-auto"
            >
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="w-[85%] sm:w-[48%] lg:w-auto h-auto flex-shrink-0 snap-center rounded-3xl relative group cursor-pointer bg-zinc-950/20"
                >
                  <div className="group flex flex-col gap-4 bg-[#2F3296]/20 border border-white/20 hover:border-[#2F3296] lg:hover:bg-white/80 rounded-3xl p-4 lg:p-6 shadow-md transition-all duration-300 cursor-default select-none h-full justify-between items-start min-h-[260px] lg:min-h-[280px]">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 flex items-center justify-center mt-2 rounded-xl bg-[#2F3296] text-black gap-2 transition-all duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-2 text-left">
                      <h3 className="text-xl font-bold text-white lg:group-hover:text-[#2F3296] tracking-tight gap-1 leading-snug">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-400 gap-1 lg:group-hover:text-zinc-800 mt-1">
                        {benefit.description}
                      </p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white gap-1 w-full">
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

      {/* SECTION 4 — Powered by CodeOne-X */}
      <section className="w-full bg-black py-16 lg:py-20 px-6 lg:px-12 border-b border-zinc-200">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">

            {/* ── LEFT SIDE: Large Visual Card Display Area (Optimized min-height bounds for mobile views) ── */}
            <div className="w-full lg:w-[48%] flex items-center justify-center bg-[#2F3296] shadow-zinc-700 rounded-3xl p-6 lg:p-12 shadow-xl min-h-[160px] lg:min-h-[400px] relative overflow-hidden">
              {/* Decorative subtle abstract backdrop pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2F3296] to-black pointer-events-none" />
                                    
               {/* Core Verifieze Logo Placement (Scaled down bounds cleanly on mobile viewports) */}
                <div className="relative w-full max-w-[200px] lg:max-w-sm h-16 lg:h-28 z-10 transition-transform duration-300 hover:scale-105">
                  <Image
                  src="/images/codeonex-logo.png"
                  alt="codeonex"
                  fill
                  className="object-contain"
                  />
                </div>
              </div>

            {/* RIGHT: Content & Strengths checklist */}
            <div className="w-full lg:w-[48%] flex flex-col text-center lg:text-left items-center lg:items-start gap-5">

            {/* Logo placeholder — Balanced vertical stack with gap spacing adjustment */}
            <div className="flex flex-col gap-1 items-center lg:items-start mx-auto lg:mx-0 mb-4">
              <p className="text-white text-md font-semibold tracking-[0.18em] uppercase">
                Powered by
              </p>
              <div className="relative w-52 h-12">
                <Image
                  src="/images/codeonex-logo.png"
                  alt="codeonex"
                  fill
                  className="object-contain object-center lg:object-left brightness-50"
                />
              </div>
            </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight text-center lg:text-left w-full">
                Technology<br></br>{" "}
                <span className="underline decoration-[#2F3296] underline-offset-4 text-[#2F3296]">
                  Innovation Hub
                </span>
              </h2>

              <p className="text-white/65 text-lg leading-relaxed text-center lg:text-left">
                CODEONE-X is the dedicated technology arm of HRTECHZ, delivering
                HR software, automation, and AI-driven solutions for organizations
                across industries.
              </p>

              {/* Key Strengths checklist — matches testing/page.tsx check list style */}
              <ul className="flex flex-col gap-3.5 mt-2 w-full">
                {CODEONEX_STRENGTHS.map((checkItem) => (
                  <li key={checkItem} className="flex items-center gap-3 text-zinc-300 text-md font-bold tracking-wide">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#2F3296]/10 border border-[#2F3296]/80 text-[#2F3296] flex-shrink-0 shadow-sm">
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

      {/* SECTION 5 — Our Technology Process */}
      <section className="w-full bg-black py-12 lg:py-10 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
      
          {/* Header */}
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-white text-sm font-semibold tracking-[0.18em] uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              How{" "}
              <span className="text-[#2F3296]">Technology</span>{" "}
              Delivery Works
            </h2>
            <p className="text-zinc-300 text-base lg:text-lg mt-3 max-w-2xl mx-auto">
              A structured, five-step engineering process designed for
              precision, speed, and long-term reliability.
            </p>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>
      
          {/* Two-column — steps list left, detail right */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
      
            {/* LEFT — Horizontal scroll on mobile, vertical list on desktop */}
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-none snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 flex-1">
              {TECH_STEPS.map((step, i) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(i)}
                  className={`group flex items-center gap-4 lg:gap-5 p-4 lg:p-5 rounded-2xl border shadow-[#2F3296] shadow-sm text-left transition-all duration-300 flex-shrink-0 w-[80%] sm:w-[45%] lg:w-full snap-center
                    ${
                      activeStep === i
                        ? "bg-[#2F3296] border-[#2F3296] shadow-lg"
                        : "bg-black border-zinc-200 hover:border-[#2F3296] hover:bg-[#2F3296]/5"
                    }`}
                >
                  {/* Number badge */}
                  <span
                    className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl text-sm lg:text-base font-black transition-colors duration-300
                      ${
                        activeStep === i
                          ? "bg-white text-[#2F3296]"
                          : "bg-[#2F3296]/30 text-zinc-400 group-hover:bg-[#2F3296] group-hover:text-white"
                      }`}
                  >
                    {step.number}
                  </span>
                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-bold text-sm lg:text-base truncate lg:whitespace-normal transition-colors duration-300 ${
                        activeStep === i ? "text-white" : "text-zinc-300 group-hover:text-[#2F3296]"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  {/* Arrow — hidden on mobile */}
                  <svg
                    width="18" height="18" viewBox="0 0 18 18" fill="none"
                    className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${
                      activeStep === i ? "text-white translate-x-1" : "text-zinc-300 group-hover:text-[#2F3296]"
                    }`}
                  >
                    <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
      
            {/* Mobile swipe hint */}
            <p className="text-xs text-white/40 text-center block lg:hidden">
              Swipe steps to navigate your workflow ← →
            </p>
      
            {/* Vertical divider — desktop only */}
            <div className="hidden lg:block w-px bg-[#2F3296] self-stretch mx-2" />
      
            {/* RIGHT — Active step detail panel */}
            <div className="flex-1 flex items-center mt-2 lg:mt-0">
              <div className="w-full min-h-[380px] lg:min-h-[440px] rounded-3xl p-6 lg:p-10 flex flex-col gap-5 lg:gap-6 shadow-xl relative overflow-hidden bg-white border border-[#2F3296]">
      
                {/* Gradient overlay — matches testing/page.tsx exactly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3296]/50 via-black/50 to-black/70 z-0" />
                <div className="absolute inset-0 bg-black mix-blend-overlay z-0" />
      
                {/* Inner content */}
                <div className="relative z-10 flex flex-col gap-4 lg:gap-5 h-full w-full justify-between flex-1">
      
                  {/* Icon */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-2xl bg-[#2F3296]/30 text-white border border-[#2F3296] backdrop-blur-sm shadow-sm">
                    {TECH_STEPS[activeStep].icon}
                  </div>
      
                  {/* Step badge */}
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1 lg:mt-2">
                    <span className="w-6 h-px bg-white" />
                    Step {TECH_STEPS[activeStep].number} of {TECH_STEPS.length}
                  </span>
      
                  {/* Title */}
                  <h3 className="text-xl lg:text-3xl font-black text-white uppercase tracking-tight">
                    {TECH_STEPS[activeStep].title}
                  </h3>
      
                  {/* Description */}
                  <span className="flex items-center gap-3 text-zinc-300 text-sm lg:text-md font-medium lg:font-bold tracking-wide leading-relaxed">
                    {TECH_STEPS[activeStep].description}
                  </span>
      
                  {/* Progress bar */}
                  <div className="mt-auto pt-3 lg:pt-4 w-full">
                    <div className="flex justify-between text-xs text-zinc-400 font-medium mb-2">
                      <span>Module Progress</span>
                      <span>{Math.round(((activeStep + 1) / TECH_STEPS.length) * 100)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((activeStep + 1) / TECH_STEPS.length) * 100}%` }}
                      />
                    </div>
                  </div>
      
                  {/* Navigation dots */}
                  <div className="flex gap-2 pt-1 lg:pt-2">
                    {TECH_STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeStep === i ? "w-8 bg-[#2F3296]" : "w-2 bg-zinc-200 hover:bg-zinc-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Industries We Support */}
      <section className="w-full bg-white py-10 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
      
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-4">
              Industries We Support
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
              Trusted Across{" "}
              <span className="underline decoration-zinc-300 underline-offset-4 text-[#2F3296]">
                Every Sector
              </span>
            </h2>
            <p className="text-zinc-600 text-lg mt-4 max-w-2xl mx-auto">
              Our technology services are trusted by organizations across
              a wide range of industries throughout Sri Lanka and beyond.
            </p>
            <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>
      
          {/* 5×2 industry grid — 1-col mobile, 3-col tablet, 5-col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {TECH_INDUSTRIES.map((industry) => (
              <button
                key={industry.label}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 border text-left shadow-sm shadow-[#2F3296] bg-white border-[#2F3296]/20  text-[#2F3296] hover:border-[#2F3296]/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full"
              >
                <span className="text-xl flex-shrink-0">{industry.icon}</span>
                <span className="text-sm font-semibold leading-snug">
                  {industry.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Why Organizations Choose HRTECHZ tech */}
      <hr className="border-t border-zinc-900" />
      <section className="w-full bg-white py-10 lg:py-16 px-6 lg:px-12 relative overflow-hidden">
      
        {/* Ambient neon radial glow blur */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-[#2F3296]/15 blur-[120px] rounded-full pointer-events-none" />
      
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
      
            {/* LEFT: Sticky headline column */}
            <div className="w-full lg:w-[35%] lg:sticky lg:top-24 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
              <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-1">
                Why Choose Us
              </p>
      
              {/* Desktop headline */}
              <h2 className="hidden lg:block text-5xl font-bold text-black leading-tight tracking-tight">
                Why <br /> Organizations<br /> Choose<br />{" "}
                <span className="relative inline-block text-[#2F3296]">
                  HRTECHZ
                  <span className="absolute left-0 bottom-1 h-[4px] w-full bg-zinc-400 rounded-full" />
                </span>{" "}<br />
                Technology
              </h2>
      
              {/* Mobile headline */}
              <h2 className="block lg:hidden text-3xl font-bold text-black leading-tight tracking-tight text-center">
                Why Organizations Choose{" "}
                <span className="relative inline-block text-[#2F3296]">
                  HRTECHZ
                  <span className="absolute left-0 bottom-1 h-[2px] w-full bg-zinc-400 rounded-full" />
                </span>{" "}
                Technology
              </h2>
      
              <p className="text-zinc-600 text-sm lg:text-base mt-2 max-w-md leading-relaxed text-justify lg:text-left">
                Delivering enterprise-grade technology solutions, agile engineering
                teams, and AI-driven automation to future-proof your HR operations.
              </p>
            </div>
      
            {/* RIGHT: Reason cards — horizontal scroll mobile, 2-col grid desktop */}
            <div className="w-full lg:w-[65%] relative">
              <div
                ref={reasonScrollRef}
                onScroll={() => handleScrollTracking(reasonScrollRef, setActiveReasonIndex)}
                className="w-full flex lg:grid flex-row lg:grid-cols-2 gap-5 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0 items-stretch"
              >
                {TECH_REASONS.map((reason, index) => {
                  const formattedNumber = String(index + 1).padStart(2, "0");
                  return (
                    <div
                      key={reason.title}
                      className={`group relative flex flex-col justify-between gap-5 bg-black border border-white/5 hover:border-[#2F3296]/60 rounded-3xl p-6 lg:p-8 transition-all duration-300 overflow-hidden cursor-default shadow-sm hover:shadow-[0_0_30px_rgba(47,50,150,0.15)] flex-shrink-0 w-[85%] sm:w-[48%] lg:w-auto snap-center
                        ${index === 4 ? "lg:col-span-2" : ""}
                      `}
                    >
                      {/* Giant sliding watermark number */}
                      <span className="absolute -bottom-4 right-4 text-7xl lg:text-8xl font-black text-white/20 group-hover:text-[#2F3296]/80 leading-none select-none tracking-tighter transition-all duration-500 transform group-hover:-translate-y-3">
                        {formattedNumber}
                      </span>
      
                      {/* Icon & title */}
                      <div className="flex flex-col gap-4 relative z-10 text-left">
                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 border border-white/10 text-[#2F3296] group-hover:bg-[#2F3296] group-hover:text-white group-hover:border-[#2F3296] transition-all duration-300 shadow-inner">
                          {reason.icon}
                        </div>
                        <h3 className="text-white font-black text-lg lg:text-xl uppercase tracking-tight group-hover:text-[#2F3296] transition-colors duration-200">
                          {reason.title}
                        </h3>
                      </div>
      
                      {/* Description */}
                      <p className="text-zinc-300 group-hover:text-zinc-300 text-sm leading-relaxed text-left relative z-10 mt-2">
                        {reason.description}
                      </p>
      
                      {/* Bottom accent edge line */}
                      <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#2F3296] to-transparent transition-all duration-500 rounded-b-3xl" />
                    </div>
                  );
                })}
              </div>
      
              {/* Mobile dot indicators */}
              <div className="flex lg:hidden items-center justify-center gap-2 mt-4 w-full">
                {TECH_REASONS.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeReasonIndex === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Related HRTECHZ Solutions */}
      <section className="w-full bg-white pb-10 lg:pb-16 pt-6 lg:pt-10 px-6 lg:px-12 relative overflow-hidden">
      
        {/* Subtle brand blue ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2F3296]/5 blur-[150px] rounded-full pointer-events-none" />
      
        <div className="w-full max-w-7xl mx-auto relative z-10">
      
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-[#2F3296] text-md font-black tracking-[0.25em] uppercase mb-4">
              Ecosystem Overview
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black tracking-tight">
              Related <span className="text-[#2F3296]">HRTECHZ</span> Solutions
            </h2>
            <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>
      
          {/* Solution cards — horizontal scroll mobile, 3-col grid desktop */}
          <div className="relative w-full">
            <div
              ref={relatedScrollRef}
              onScroll={() => handleScrollTracking(relatedScrollRef, setActiveRelatedIndex)}
              className="flex lg:grid flex-row lg:grid-cols-3 gap-5 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0 items-stretch"
            >
              {TECH_RELATED_SOLUTIONS.map((solution, index) => {
                const formattedNumber = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={solution.title}
                    className="group relative flex flex-col justify-between gap-6 rounded-3xl p-6 lg:p-8 border border-[#2F3296]/20 shadow-sm shadow-[#2F3296] transition-all duration-300 overflow-hidden text-left flex-shrink-0 w-[85%] sm:w-[48%] lg:w-auto snap-center"
                  >
                    {/* Giant sliding watermark number */}
                    <span className="absolute -bottom-4 right-4 text-7xl lg:text-8xl font-black text-black/20 group-hover:text-[#2F3296]/20 leading-none select-none tracking-tighter transition-all duration-500 transform group-hover:-translate-y-3">
                      {formattedNumber}
                    </span>
      
                    {/* Content block */}
                    <div className="flex flex-col gap-3 relative z-10">
                      <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                        {solution.tagline}
                      </span>
                      <h3 className="text-zinc-900 font-black text-2xl lg:text-3xl uppercase tracking-tight group-hover:text-[#2F3296] transition-colors duration-200">
                        {solution.title}
                      </h3>
                      <p className="text-zinc-600 text-sm leading-relaxed mt-1">
                        {solution.description}
                      </p>
                    </div>
      
                    {/* Action link */}
                    <div className="pt-4 border-t border-zinc-200/60 mt-auto flex justify-between items-center w-full relative z-10">
                      <Link
                        href={solution.href}
                        className="text-xs font-bold tracking-widest uppercase text-zinc-800 group-hover:text-[#2F3296] transition-colors duration-200 inline-flex items-center gap-2"
                      >
                        Explore System
                      </Link>
                      <svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                        className="text-zinc-400 group-hover:text-[#2F3296] group-hover:translate-x-1 transition-all duration-200"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
      
                    {/* Bottom accent edge line */}
                    <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#2F3296] to-transparent transition-all duration-500 rounded-b-3xl" />
                  </div>
                );
              })}
            </div>
      
            {/* Mobile dot indicators */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-4 w-full">
              {TECH_RELATED_SOLUTIONS.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeRelatedIndex === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Call to Action */}
      <section className="w-full bg-zinc-800 py-10 px-6 lg:px-12 relative overflow-hidden">
      
        {/* Decorative background circles */}
        <div className="absolute -top-20 -right-50 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-32 -left-18 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
              <div className="relative w-full max-w-4xl mx-auto text-center">
                {/* Eyebrow */}
                <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-5">
                  Get Started Today
                </p>
      
                {/* Heading */}
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Ready to Modernize Your {" "}
                  <span className="text-[#2F3296] relative inline-block">
                    HR Operations
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-white/40 rounded-full" />
                  </span>
                  ?
                </h2>
      
                {/* Subtext */}
                <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                  Partner with HRTECHZ to build scalable, secure, and future-ready technology solutions for your workforce.
                </p>
      
              {/* CTA buttons */}
              <CTA_Buttons
              primaryText="Talk to an Expert"
              primaryHref="/consultation"
              secondaryText="Request a Demo"
              secondaryHref="/demo"
              />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}