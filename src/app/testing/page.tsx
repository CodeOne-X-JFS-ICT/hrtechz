"use client";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import CTA_Buttons from "@/components/CTA_button";

/* Trust badges */
const TRUST_BADGES = [
  { label: "Background Verified", icon: "✓" },
  { label: "Identity Validated", icon: "✓" },
  { label: "Compliant Processes", icon: "✓" },
  { label: "Accurate & Reliable", icon: "✓" },
];

/* benifits card */
const BENEFITS = [
  {
    title: "Validate Candidate Credentials",
    description:
      "Confirm academic qualifications, professional certifications, and employment history with precision.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l6 6L23 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Reduce Recruitment Risks",
    description:
      "Minimise exposure to fraudulent credentials, identity misrepresentation, and compliance violations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l10 4v8c0 5-4.5 9-10 10C8.5 24 4 20 4 15V7l10-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Improve Workforce Quality",
    description:
      "Build high-performing teams by ensuring every hire meets the highest standards of integrity.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M2 24c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 17c2.5.5 5 2.5 5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Strengthen Compliance Processes",
    description:
      "Stay compliant with industry regulations and legal requirements throughout the hiring process.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="3" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 10h10M9 14h10M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Protect Business Reputation",
    description:
      "Safeguard your organisation's brand by ensuring every team member upholds your values.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Accelerate Hiring Decisions",
    description:
      "Speed up onboarding with fast, reliable verification results delivered within agreed timelines.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v10l6 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

/* solution cards */
const SOLUTIONS = [
  {
    number: "01",
    title: "Record Checks",
    bgImage: "/images/Solution-record.jpg", // Using matching assets from home page style
    description:
      "Validate candidate records across multiple dimensions to build a complete and accurate profile.",
    items: [
      "Address Verification",
      "Academic Credentials",
      "Professional Qualifications",
      "Employment History",
      "Education",
      "Identity",
      "Driving Qualifications",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="3" width="22" height="26" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 12h12M10 17h12M10 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Criminal Clearance",
    bgImage: "/images/Solution-criminal.jpg",
    description:
      "Comprehensive criminal background screening to ensure your workplace remains safe and secure.",
    items: [
      "Basic Police Clearance",
      "Advanced Police Clearance",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3l12 5v10c0 6-5 11-12 12C9 29 4 24 4 18V8l12-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Database Checks",
    bgImage: "/images/Solution-database.jpg",
    description:
      "Cross-reference candidates against regulatory and financial databases for full compliance assurance.",
    items: [
      "CRIB Check",
      "Anti Money Laundering",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="8" rx="10" ry="4" stroke="currentColor" strokeWidth="2" />
        <path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="currentColor" strokeWidth="2" />
        <path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Reference Checks",
    bgImage: "/images/Solution-reference.jpg",
    description:
      "Gather objective, independent feedback from previous employers and professional contacts.",
    items: [
      "Referee Feedback",
      "Character Confirmations",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M4 28c0-5 3.6-8 8-8s8 3 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 14l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ─── Interactive Mobile Accordion Card for Benefits ─── */
function InteractiveBenefitCard({ benefit }: { benefit: { title: string; description: string; icon: React.ReactNode } }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`group flex flex-col gap-3 lg:gap-4 bg-[#2F3296]/20 border rounded-2xl p-5 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer select-none
        ${isOpen ? "bg-white/90 border-[#2F3296]" : "text-black border-white/20 hover:border-[#2F3296] lg:hover:bg-white/80"}
      `}
    >
      {/* Icon + Chevron Layout Wrapper */}
      <div className="flex items-center justify-between">
        <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-[#2F3296] text-black transition-all duration-300
          lg:group-hover:bg-[#2F3296] lg:group-hover:text-white
          ${isOpen ? "bg-[#2F3296] text-white" : ""}
        `}>
          {benefit.icon}
        </div>

        {/* Mobile Accordion Chevron Trigger */}
        <div className={`block lg:hidden transition-transform duration-300 ${isOpen ? "rotate-180 text-[#2F3296]" : "text-white/40"}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 7.5l5 5 5-5" />
          </svg>
        </div>
      </div>

      {/* Benefit Title */}
      <h3 className={`text-xl font-bold text-left transition-colors duration-300
        lg:group-hover:text-[#2F3296]
        ${isOpen ? "text-[#2F3296]" : "text-white"}
      `}>
        {benefit.title}
      </h3>

      {/* Description Area — CSS Accordion Slide Animation */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden text-left
        lg:h-auto lg:opacity-100 lg:visible
        ${isOpen ? "max-h-[200px] opacity-100 visible mt-1" : "max-h-0 opacity-0 lg:max-h-none invisible lg:visible"}
      `}>
        <p className={`text-sm leading-relaxed text-justify lg:text-left
          lg:group-hover:text-zinc-800
          ${isOpen ? "text-zinc-800" : "text-white/50"}
        `}>
          {benefit.description}
        </p>
      </div>

      {/* Animated Card Footer bar */}
      <div className="mt-auto pt-2 border-t border-zinc-100/10 lg:border-zinc-100">
        <div className={`h-0.5 bg-[#2F3296] rounded-full transition-all duration-500
          lg:w-0 lg:group-hover:w-full
          ${isOpen ? "w-full" : "w-0"}
        `} />
      </div>
    </div>
  );
}

export default function TestingPage() {
    const [isOpen, setIsOpen] = React.useState(false);


  return (
    <div
      className="min-h-screen flex flex-col bg-white"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
        
      {/* Shared Navbar */}
      <Navbar />

      {/* Top Section */}
      <section className="w-full relative overflow-hidden bg-white">

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-12 lg:py-15">
        {/* Dynamic alignment layout parent wrapper: Tightened gaps on mobile */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center lg:items-start justify-between w-full">    
        
        {/*  LEFT SIDE: Headline & Badges (Centered on mobile, left on desktop) */}
        <div className="w-full lg:w-[50%] flex flex-col gap-3 lg:gap-4 text-center lg:text-left items-center lg:items-start">
      
            {/* Breadcrumb — Hidden on mobile, flex on desktop */}
            <div className="hidden lg:flex items-center gap-2 text-sm text-zinc-400"> <Link href="/" className="hover:text-[#2F3296] transition-colors duration-200">
            Home
            </Link>
            <span>/</span>
            <span className="text-[#2F3296] font-semibold">Testing</span>
        </div>

            {/* Eyebrow — Centered on mobile */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="inline-block w-8 h-0.5 bg-[#2F3296]" />
                <p className="text-[#2F3296] text-sm font-semibold tracking-[0.18em] uppercase">
                Powered by Verifieze
                </p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-black leading-[1.3] tracking-tight text-black uppercase">
                Hire with{" "}
                <span className="text-[#2F3296]">Confidence</span>{" "}
                Through Trusted{" "}
                <span className="relative inline-block text-[#2F3296] ">
                Verification
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#2F3296] rounded-full" />
                </span>
            </h1>

            {/* Trust Badges — 2x2 Grid on Mobile, Balanced Inline Row on Desktop */}
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-start gap-3 lg:gap-6 pt-2 w-full">
                {TRUST_BADGES.map((badge) => (
                <span
                    key={badge.label}
                    className="inline-flex items-center lg:justify-start gap-2 px-2.5 sm:px-4 py-2 bg-[#2F3296]/8 border border-[#2F3296]/20 text-[#2F3296] text-xs sm:text-sm font-semibold rounded-2xl lg:rounded-full w-full lg:w-auto min-h-[44px] lg:min-h-0"
                >
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#2F3296] text-white text-[10px] font-black flex-shrink-0">
                    {badge.icon}
                    </span>
                    <span className="leading-tight text-left break-words">{badge.label}</span>
                </span>
                ))}
            </div>
        </div>

            {/* RIGHT SIDE: Descriptions & CTAs (Centered on mobile, left on desktop) */}
            <div className="w-full lg:w-[50%] flex flex-col gap-4 lg:gap-6 text-center lg:text-left items-center lg:items-start">
            
            {/* Subheadlines — Removed py-20 giant padding on mobile */}
            <div className="space-y-4 py-2 lg:py-10">
            <p className="text-base text-zinc-600 leading-relaxed text-justify">
                At HRTECHZ, our Testing division, powered by{" "}
                <span className="text-[#2F3296] font-semibold">Verifieze</span>,
                helps organizations reduce hiring risks through comprehensive
                background verification, identity validation, and candidate
                screening solutions.
            </p>
            <p className="text-base lg:text-lg text-zinc-600 leading-relaxed text-justify">
                We ensure that every hiring decision is supported by accurate,
                reliable, and compliant verification processes, allowing
                businesses to build trustworthy and high-performing teams.
            </p>
            </div>

            {/* CTA Buttons — Flex wrapper handles mobile centering nicely */}
            <div className="mt-2 w-full flex justify-center lg:justify-start sm:w-auto">
                <CTA_Buttons
                primaryText="Explore Verification Services"
                primaryHref="/testing/services"
                secondaryText="Request a Demo"
                secondaryHref="/demo"
                />
            </div>
        </div>
        </div>
        </div>
        </section>

        {/* SECTION 2 — Why Verification Matters */}
        <section className="w-full bg-black py-10 px-6 lg:px-12">
            <div className="w-full max-w-6xl mx-auto">

            {/* MOBILE HEADER*/}
            <div className="block lg:hidden text-center mb-10">
                <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-3">
                Why Verification Matters
                </p>
                <h2 className="text-3xl font-bold text-white leading-tight">
                One Wrong Hire Can <span className="text-[#2F3296]">Cost Everything</span>
                </h2>
                <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-zinc-50" />
                <p className="text-zinc-400 text-base leading-relaxed text-justify mt-6">
                Hiring is one of the most important investments an organisation
                makes. A single incorrect hiring decision can impact
                productivity, compliance, company culture, and reputation.
                Our verification solutions protect you at every step.
                </p>
            </div>

            {/* DESKTOP HEADER */}
            <div className="hidden lg:flex flex-row gap-12 mb-14 items-start">
                <div className="flex-1">
                <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-4">
                    Why Verification Matters
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                    One Wrong Hire Can <span className="text-[#2F3296]">Cost Everything</span>
                </h2>
                <div className="mt-5 w-16 h-1 rounded-full bg-zinc-50" />
                </div>
                <div className="flex-1 flex items-center py-10">
                <p className="text-zinc-400 text-lg leading-relaxed">
                    Hiring is one of the most important investments an organisation
                    makes. A single incorrect hiring decision can impact
                    productivity, compliance, company culture, and reputation.
                    Our verification solutions protect you at every step.
                </p>
                </div>
            </div>

            {/* ── BENEFITS GRID ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((benefit) => (
                <InteractiveBenefitCard key={benefit.title} benefit={benefit} />
            ))}
            </div>
        </div>
        </section>

        {/* SECTION 3 — Testing & Verification Solutions */}
        <section className="w-full bg-white py-12 lg:py-10 px-6 lg:px-12">
            <div className="w-full max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-14">
                <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-4">
                Our Solutions
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
                Testing & <span className="text-[#2F3296]">Verification Solutions</span>
                </h2>
                <p className="text-zinc-500 text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive checks designed to give you the full picture of
                every candidate before they join your team.
                </p>
                <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
            </div>

            {/* Solutions Grid Track */}
                <div className="flex flex-row lg:grid lg:grid-cols-2 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-6 px-4 -mx-4 lg:px-0 lg:mx-auto">
                {SOLUTIONS.map((solution) => (
                    <div
                    key={solution.title}
                    className="w-[85%] sm:w-[48%] lg:w-auto h-[480px] lg:h-[420px] flex-shrink-0 snap-center rounded-3xl overflow-hidden shadow-md relative group cursor-pointer bg-[#090A1E] border border-white/10"
                    >
                    
                    {/* ── BACKGROUND IMAGE LAYER (Smoothly blurs and darkens on hover) ── */}
                    <img
                        src={solution.bgImage}
                        alt={solution.title}
                        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.15] group-hover:scale-105 transition-all duration-500 ease-out z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 mix-blend-multiply z-0" />
                    <div className="absolute inset-0 bg-[#2F3296]/10 mix-blend-color group-hover:bg-[#2F3296]/30 transition-all duration-500 z-0" />

                    {/* ── FLASHCARD CORE CONTAINER ── */}
                    <div className="absolute inset-0 p-6 lg:p-8 z-10 flex flex-col justify-between items-start text-left h-full">
                        
                        {/* TOP BLOCK: Icon & Watermark Number (Stays visible) */}
                        <div className="flex justify-between items-start w-full">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-2xl bg-white/10 text-white border border-white/20 backdrop-blur-sm group-hover:bg-[#2F3296] group-hover:border-[#2F3296] transition-all duration-300">
                            {solution.icon}
                        </div>
                        <span className="text-4xl lg:text-5xl font-black text-white/80 tracking-tighter leading-none select-none group-hover:text-[#2F3296] transition-colors duration-300">
                            {solution.number}
                        </span>
                        </div>

                        {/* BOTTOM BLOCK: Title & Hidden Checklist Content */}
                        <div className="w-full flex flex-col text-left">
                        
                        {/* Module Sub-eyebrow Header */}
                        <div className="flex items-center gap-3 mb-1 group-hover:opacity-0 transition-opacity duration-300">
                            <span className="w-6 h-0.5 bg-[#2F3296]" />
                            <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Solution Module</span>
                        </div>

                        {/* Solution Title (Stays beautifully visible, moves up slightly on hover) */}
                        <h3 className="text-white text-xl lg:text-2xl font-black tracking-tight uppercase transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                            {solution.title}
                        </h3>

                        {/* ── REVEALED CONTENT CONTAINER (Slides up and fades in seamlessly) ── */}
                        <div className="h-0 opacity-0 transform translate-y-8 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-0 overflow-hidden transition-all duration-500 ease-out mt-0 group-hover:mt-3">
                            
                            {/* Description Block */}
                            <p className="text-white/80 text-xs lg:text-sm leading-relaxed mb-4 border-t border-white/10 pt-3">
                            {solution.description}
                            </p>

                            {/* Strict Vertical Stack Checklist Items */}
                            <ul className="flex flex-col gap-2 w-full mb-4">
                            {solution.items.map((item) => (
                                <li
                                key={item}
                                className="flex items-center gap-2.5 text-white text-xs lg:text-sm font-medium text-left"
                                >
                                <span className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full bg-[#2F3296]/30 border border-[#2F3296] flex-shrink-0">
                                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="lg:w-2.5 lg:h-2.5">
                                    <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="truncate lg:whitespace-normal text-white/90">{item}</span>
                                </li>
                            ))}
                            </ul>

                            {/* Footer Action Anchor */}
                            <div className="pt-2 border-t border-white/10 flex justify-between items-center w-full">
                            <span className="inline-flex items-center gap-2 text-white/60 text-xs font-bold tracking-widest uppercase">
                                Learn More
                            </span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#2F3296]">
                                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </div>

                        </div>

                        {/* Tap/Hover Helper Indicator — Only visible on base state for mobile views */}
                        <p className="text-white/30 text-[10px] mt-1.5 block lg:hidden group-hover:opacity-0 transition-opacity duration-200">
                            Tap card to reveal details
                        </p>

                        </div>

                    </div>
                    </div>
                ))}
                </div>

            </div>
        </section>

    </div>
  );
}