"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTA_Buttons from "@/components/CTA_button";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/footer";

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
      "Academic Credentials Verification",
      "Professional Qualifications Verification",
      "Employment History Verification",
      "Education Verification",
      "Identity Verification",
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

/* Process Steps */
const STEPS = [
  {
    number: "01",
    title: "Candidate Submission",
    description: "Submit candidate details through our secure platform.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Verification Initiation",
    description: "Our verification specialists begin the screening process.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Information Validation",
    description: "Data is collected and verified directly from trusted sources.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l6 6L23 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Quality Assurance Review",
    description: "Every report undergoes quality checks to ensure accuracy and consistency.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 12h10M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="4" fill="white" stroke="currentColor" strokeWidth="2" />
        <path d="M18.5 20l1 1 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Final Report Delivery",
    description: "Receive a comprehensive verification report with actionable insights.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="3" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 10h10M9 14h10M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 18l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* Industries */
const INDUSTRIES = [
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

/* Why Choose reasons */
const REASONS = [
  {
    title: "Reliable Results",
    description:
      "Accurate verification processes supported by experienced professionals.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M4 15l7 7L26 8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Faster Hiring",
    description:
      "Reduce delays and make informed hiring decisions quickly.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="11" stroke="currentColor" strokeWidth="2" />
        <path d="M15 9v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Scalable Services",
    description:
      "Support for startups, SMEs, and enterprise organizations.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="3" y="18" width="6" height="9" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="12" y="12" width="6" height="15" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="21" y="5" width="6" height="22" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Compliance Driven",
    description:
      "Verification processes aligned with industry standards and best practices.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M15 3l11 4v9c0 6-5 10-11 11-6-1-11-5-11-11V7l11-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M10 15l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Integrated HR Ecosystem",
    description:
      "Seamlessly connected with HRTECHZ Hiring and Technology solutions.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="8"  cy="15" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="8"  r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="22" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M12 15h2m4-5l-2 2m0 6l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* Success Metrics */
const METRICS = [
  { value: 50000, suffix: "+", label: "Verification Checks Completed", prefix: "" },
  { value: 98, suffix: "%", label: "Verification Accuracy", prefix: "" },
  { value: 500, suffix: "+", label: "Corporate Clients Supported", prefix: "" },
  { value: 24, suffix: "h", label: "Digital Support", prefix: "" },
];

const HIGHLIGHTS = [
  {
    title: "Multi-Industry Expertise",
    description: "Tailored validation parameters spanning across banking, IT, retail, and manufacturing sectors.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

/* Related Solutions Data Block */
const RELATED_SOLUTIONS = [
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
    description: "Transform HR operations through CodeOne-X technology solutions.",
    tagline: "Digital Transformation",
    href: "/technology",
  },
];

/* ─── Responsive Benefit Card for Section 2 ─── */
function InteractiveBenefitCard({ benefit }: { benefit: { title: string; description: string; icon: React.ReactNode } }) {
  return (
    <div
      className="group flex flex-col gap-3 lg:gap-4 bg-[#2F3296]/20 border border-white/20 hover:border-[#2F3296] lg:hover:bg-white/80 rounded-2xl p-5 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-default select-none flex-shrink-0 w-[85%] sm:w-[48%] lg:w-auto snap-center"
    >
      {/* Icon Wrapper */}
      <div className="flex items-center justify-between">
        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#2F3296] text-black transition-all duration-300 lg:group-hover:bg-[#2F3296] lg:group-hover:text-white">
          {benefit.icon}
        </div>
      </div>

      {/* Benefit Title */}
      <h3 className="text-xl font-bold text-left text-white lg:group-hover:text-[#2F3296] transition-colors duration-300">
        {benefit.title}
      </h3>

      {/* Description Area */}
      <p className="text-sm leading-relaxed text-left text-white/60 lg:group-hover:text-zinc-800 transition-colors duration-300">
        {benefit.description}
      </p>

      {/* Animated Card Footer bar */}
      <div className="mt-auto pt-2 border-t border-zinc-100/10 lg:border-zinc-100">
        <div className="h-0.5 bg-[#2F3296] rounded-full transition-all duration-500 lg:w-0 lg:group-hover:w-full w-0" />
      </div>
    </div>
  );
}

/* Animated counter hook */
function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
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
        {metric.prefix}
        {display}
        {metric.suffix}
      </span>
      <span className="mt-3 text-sm font-semibold text-black/70 group-hover:text-[#2F3296] transition-colors duration-300 leading-snug">
        {metric.label}
      </span>
    </div>
  );
}

export default function TestingPage() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [metricsStarted, setMetricsStarted] = useState(false);
    const metricsRef = useRef<HTMLDivElement>(null);
    
    // ── BENEFITS TRACKING (Section 2) ──
    const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
    const benefitScrollRef = useRef<HTMLDivElement>(null);

    const handleBenefitScroll = () => {
      if (benefitScrollRef.current) {
        const { scrollLeft, clientWidth } = benefitScrollRef.current;
        const index = Math.round(scrollLeft / (clientWidth * 0.85));
        setActiveBenefitIndex(index);
      }
    };

    // State & Refs for Sections 3, 7, and 9 Scroll Tracking
    const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
    const solutionScrollRef = useRef<HTMLDivElement>(null);

    const [activeReasonIndex, setActiveReasonIndex] = useState(0);
    const reasonScrollRef = useRef<HTMLDivElement>(null);

    const [activeRelatedIndex, setActiveRelatedIndex] = useState(0);
    const relatedScrollRef = useRef<HTMLDivElement>(null);

    // Reusable scroll math compiler helper function
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
        
      {/* Shared Navbar */}
      <Navbar />

      {/* Top Section */}
      <section className="w-full relative overflow-hidden bg-white">

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-12 lg:py-20">
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

            {/* ── BENEFITS GRID: Swappable Row on Mobile / Standard Grid on Desktop ── */}
            <div className="relative w-full">
              <div 
                ref={benefitScrollRef}
                onScroll={handleBenefitScroll}
                className="flex flex-row lg:grid lg:grid-cols-3 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-6 px-4 -mx-4 lg:px-0 lg:mx-auto"
              >
                {BENEFITS.map((benefit) => (
                  <InteractiveBenefitCard key={benefit.title} benefit={benefit} />
                ))}
              </div>

              {/* Mobile Carousel Page Indicators UI — Hidden completely on Desktop */}
              <div className="flex lg:hidden items-center justify-center gap-2 mt-2 w-full">
                {BENEFITS.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeBenefitIndex === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-700"
                    }`}
                  />
                ))}
              </div>
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
                    {/* ── BACKGROUND IMAGE LAYER ── */}
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
                        <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white border border-white/20 backdrop-blur-sm group-hover:bg-[#2F3296] group-hover:border-[#2F3296] transition-all duration-300">
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
                            <p className="text-white/80 text-xs lg:text-sm leading-relaxed border-t border-white/10 pt-3">
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
                {/* Mobile Indicators for Section 3 — Hidden on Desktop */}
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
        
        {/* SECTION 4 — Powered by Verifieze */}
              <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
                <section className="w-full bg-zinc-30 py-16 lg:py-20 px-6 lg:px-12 border-b border-zinc-200">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
                    
                    {/* ── LEFT SIDE: Large Visual Card Display Area (Optimized min-height bounds for mobile views) ── */}
                    <div className="w-full lg:w-[48%] flex items-center justify-center bg-white shadow-[#2F3296] rounded-3xl p-6 lg:p-12 shadow-xl min-h-[160px] lg:min-h-[400px] relative overflow-hidden">
                        {/* Decorative subtle abstract backdrop pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-[#2F3296]/5 pointer-events-none" />
                        
                        {/* Core Verifieze Logo Placement (Scaled down bounds cleanly on mobile viewports) */}
                        <div className="relative w-full max-w-[200px] lg:max-w-sm h-16 lg:h-28 z-10 transition-transform duration-300 hover:scale-105">
                        <Image
                            src="/images/verifieze-logo.png"
                            alt="Verifieze Verification Arm"
                            fill
                            className="object-contain"
                        />
                        </div>
                    </div>
        
                    {/* ── RIGHT SIDE: Context Typography Content & Compliance Checklist ── */}
                    <div className="w-full lg:w-[48%] flex flex-col text-center lg:text-left items-center lg:items-start gap-5">
                        {/* Logo placeholder — Centered on mobile viewports */}
                        <div className="relative w-52 h-16 mx-auto lg:mx-0">
                        <p className="text-zinc-600 text-md font-semibold tracking-[0.18em] uppercase mb-8 gap-2">
                            Powered by
                            <Image
                            src="/images/verifieze-logo.png"
                            alt="Verifieze"
                            fill
                            className="object-contain object-center lg:object-left brightness-500 invert"
                            />
                        </p>
                        </div>
                        
                        {/* Core Headline — Centered on mobile viewports */}
                        <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight text-center lg:text-left w-full">
                        Trusted Verification{" "}
                        <span className="underline decoration-[#2F3296] underline-offset-4 text-[#2F3296]">
                            Specialists
                        </span>
                        </h2>
        
                        {/* Clean Subheadline Description Paragraph — Justified on mobile, standard layout on desktop */}
                        <p className="text-black/75 text-lg leading-relaxed text-justify lg:text-left">
                        Verifieze is the dedicated verification arm of HRTECHZ,
                        delivering reliable screening services for organisations
                        across multiple industries. Our commitment to accuracy,
                        speed, and compliance sets us apart.
                        </p>
        
                        {/* Dynamic Compliance Validation Checks Grid Stack */}
                        <ul className="flex flex-col gap-3.5 mt-2 w-full">
                        {[
                            "Fast Turnaround Times",
                            "High Verification Accuracy",
                            "Secure Digital Reports",
                            "Dedicated Support Team",
                        ].map((checkItem) => (
                            <li
                            key={checkItem}
                            className="flex items-center gap-3 text-zinc-800 text-md font-bold tracking-wide"
                            >
                            {/* Dynamic Clean Brand Blue Check Circle Icon */}
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
        
              {/* SECTION 5 — Our Verification Process */}
              <section className="w-full bg-zinc-50 py-12 lg:py-10 px-6 lg:px-12">
                <div className="w-full max-w-7xl mx-auto">
        
                  {/* Header */}
                  <div className="text-center mb-10 lg:mb-14">
                    <p className="text-[#2F3296] text-sm font-semibold tracking-[0.18em] uppercase mb-4">
                      Our Process
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
                      How{" "}
                      <span className="text-[#2F3296]">Verification</span>{" "}
                      Works
                    </h2>
                    <p className="text-zinc-500 text-base lg:text-lg mt-3 max-w-2xl mx-auto">
                      A streamlined, transparent five-step process designed for
                      accuracy, speed, and complete peace of mind.
                    </p>
                    <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
                  </div>
        
                  {/* Two-column — steps list left, detail right */}
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
        
                    {/* LEFT — Clickable step list track (Upgraded to clear horizontal swipe selection bar on mobile touch views) */}
                    <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-none snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 flex-1">
                      {STEPS.map((step, i) => (
                        <button
                          key={step.title}
                          onClick={() => setActiveStep(i)}
                          className={`group flex items-center gap-4 lg:gap-5 p-4 lg:p-5 rounded-2xl border shadow-[#2F3296] shadow-sm text-left transition-all duration-300 flex-shrink-0 w-[80%] sm:w-[45%] lg:w-full snap-center
                            ${
                              activeStep === i
                                ? "bg-[#2F3296] border-[#2F3296] shadow-lg"
                                : "bg-white border-zinc-200 hover:border-[#2F3296] hover:bg-[#2F3296]/5"
                            }`}
                        >
                          {/* Number badge */}
                          <span
                            className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl text-sm lg:text-base font-black transition-colors duration-300
                              ${
                                activeStep === i
                                  ? "bg-white text-[#2F3296]"
                                  : "bg-[#2F3296]/10 text-[#2F3296] group-hover:bg-[#2F3296] group-hover:text-white"
                              }`}
                          >
                            {step.number}
                          </span>
        
                          {/* Title */}
                          <div className="flex-1 min-w-0">
                            <p
                              className={`font-bold text-sm lg:text-base truncate lg:whitespace-normal transition-colors duration-300 ${
                                activeStep === i ? "text-white" : "text-black group-hover:text-[#2F3296]"
                              }`}
                            >
                              {step.title}
                            </p>
                          </div>
        
                          {/* Arrow (Hidden on mobile row to preserve space) */}
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
                    {/* Responsive hint text */}
                    <p className="text-xs text-black/40 text-center block lg:hidden">
                      Swipe steps to navigate your workflow ← →
                    </p>
                    {/* Vertical divider */}
                    <div className="hidden lg:block w-px bg-[#2F3296] self-stretch mx-2" />
        
                    {/* RIGHT — active step detail */}
                    <div className="flex-1 flex items-center mt-2 lg:mt-0">
                    <div className="w-full min-h-[380px] lg:min-h-[440px] rounded-3xl p-6 lg:p-10 flex flex-col gap-5 lg:gap-6 shadow-xl relative overflow-hidden bg-white border border-zinc-200">
                        
                        {/* Clean White Linear-to-Radial Fade Mask */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2F3296]/50 via-white/50 to-white/40 z-0" />
                        <div className="absolute inset-0 bg-[#2F3296] mix-blend-overlay z-0" />
        
                        {/* ── INNER TEXT DATA CONTENT CONTAINER ── */}
                        <div className="relative z-10 flex flex-col gap-4 lg:gap-5 h-full w-full justify-between flex-1">
                        
                        {/* Icon Row (Swapped text to theme blue to pop on white) */}
                        <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-2xl bg-[#2F3296]/10 text-[#2F3296] border border-[#2F3296]/20 backdrop-blur-sm shadow-sm">
                            {STEPS[activeStep].icon}
                        </div>
        
                        {/* Step Badge Metadata */}
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-widest mt-1 lg:mt-2">
                            <span className="w-6 h-px bg-black" />
                            Step {STEPS[activeStep].number} of {STEPS.length}
                        </span>
        
                        {/* Title */}
                        <h3 className="text-xl lg:text-3xl font-black text-black uppercase tracking-tight">
                            {STEPS[activeStep].title}
                        </h3>
        
                        {/* Description */}
                        <span className="flex items-center gap-3 text-zinc-800 text-sm lg:text-md font-medium lg:font-bold tracking-wide leading-relaxed">
                            {STEPS[activeStep].description}
                        </span>
        
                        {/* Progress & UI Controls Track */}
                        <div className="mt-auto pt-3 lg:pt-4 w-full">
                            <div className="flex justify-between text-xs text-zinc-600 font-medium mb-2">
                            <span>Module Progress</span>
                            <span>{Math.round(((activeStep + 1) / STEPS.length) * 100)}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-black rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
                            />
                            </div>
                        </div>
        
                        {/* Navigation dots */}
                        <div className="flex gap-2 pt-1 lg:pt-2">
                            {STEPS.map((_, i) => (
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
      <section className="w-full bg-black py-10 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-4">
              Industries We Support
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Trusted Across{" "}
              <span className="underline decoration-zinc-300 underline-offset-4 text-[#2F3296]">
                Every Sector
              </span>
            </h2>
            <p className="text-zinc-300 text-lg mt-4 max-w-2xl mx-auto">
              Our verification services are trusted by organisations across
              a wide range of industries throughout Sri Lanka and beyond.
            </p>
            <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* 5×2 industry grid — Fixed layout toggles to single column on mobile viewports */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {INDUSTRIES.map((industry) => (
              <button
                key={industry.label}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 border text-left shadow-lg bg-[#2F3296]/20 border-zinc-200 text-white hover:border-zinc-300 hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full"
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

      {/* SECTION 7 — Why Choose HRTECHZ Testing */}
      <hr className="border-t border-zinc-900" />
      <section className="w-full bg-black py-10 lg:py-24 px-6 lg:px-12 relative overflow-hidden">
        
        {/* Ambient Neon Radial Glow Blur */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-[#2F3296]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* ── LEFT SIDE: Sticky / Pinned Headline Column (40% Width) ── */}
            <div className="w-full lg:w-[35%] lg:sticky lg:top-24 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
              <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-1">
                Why Choose Us
              </p>
              
              {/* DESKTOP HEADLINE (Preserves Break lines layout completely) */}
              <h2 className="hidden lg:block text-5xl font-bold text-white leading-tight tracking-tight">
                Why <br /> Organizations<br /> Choose<br />{" "}
                <span className="relative inline-block text-[#2F3296]">
                  HRTECHZ
                  <span className="absolute left-0 bottom-1 h-[4px] w-full bg-white/40 rounded-full" />
                </span>{" "}<br />
                Testing
              </h2>

              {/* MOBILE HEADLINE (Completely flat and clean line breaks layout tracking) */}
              <h2 className="block lg:hidden text-3xl font-bold text-white leading-tight tracking-tight text-center">
                Why Organizations Choose{" "}
                <span className="relative inline-block text-[#2F3296]">
                  HRTECHZ
                  <span className="absolute left-0 bottom-1 h-[2px] w-full bg-white/40 rounded-full" />
                </span>{" "}
                Testing
              </h2>

              <p className="text-zinc-300 text-sm lg:text-base mt-2 max-w-md leading-relaxed text-justify lg:text-left">
                Delivering enterprise-grade accuracy, uncompromised background checks, and automated screening workflows to safeguard your workplace integrity.
              </p>
            </div>

            {/* ── RIGHT SIDE: Grid Track (with responsive fluid touch swipe structures on mobile) ── */}
            <div className="w-full lg:w-[65%] relative">
              <div 
                ref={reasonScrollRef}
                onScroll={() => handleScrollTracking(reasonScrollRef, setActiveReasonIndex)}
                className="w-full flex lg:grid flex-row lg:grid-cols-2 gap-5 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0 items-stretch"
              >
                {REASONS.map((reason, index) => {
                  const formattedNumber = String(index + 1).padStart(2, "0");
                  
                  return (
                    <div
                      key={reason.title}
                      className={`group relative flex flex-col justify-between gap-5 bg-[#2F3296]/20 border border-white/5 hover:border-[#2F3296]/60 rounded-3xl p-6 lg:p-8 transition-all duration-300 overflow-hidden cursor-default shadow-sm hover:shadow-[0_0_30px_rgba(47,50,150,0.15)] flex-shrink-0 w-[85%] sm:w-[48%] lg:w-auto snap-center
                        ${index === 4 ? "lg:col-span-2" : ""} 
                      `}
                    >
                    {/* Giant Sliding Background Watermark Number */}
                    <span className="absolute -bottom-4 right-4 text-7xl lg:text-8xl font-black text-white/10 group-hover:text-[#2F3296]/80 leading-none select-none tracking-tighter transition-all duration-500 transform group-hover:-translate-y-3">
                      {formattedNumber}
                    </span>

                    {/* Icon & Title Row */}
                    <div className="flex flex-col gap-4 relative z-10 text-left">
                      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#2F3296] group-hover:text-white group-hover:border-[#2F3296] transition-all duration-300 shadow-inner">
                        {reason.icon}
                      </div>
                      
                      <h3 className="text-white font-black text-lg lg:text-xl uppercase tracking-tight group-hover:text-[#2F3296] transition-colors duration-200">
                        {reason.title}
                      </h3>
                    </div>

                    {/* Description Content Layer */}
                    <p className="text-zinc-300 group-hover:text-zinc-300 text-sm leading-relaxed text-left relative z-10 mt-2">
                      {reason.description}
                    </p>

                    {/* Micro Accent Edge Tracker line */}
                    <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#2F3296] to-transparent transition-all duration-500 rounded-b-3xl" />
                  </div>
                );
              })}
            </div>
            {/* Mobile Indicators for Section 7 — Hidden on Desktop */}
              <div className="flex lg:hidden items-center justify-center gap-2 mt-4 w-full">
                {REASONS.map((_, dotIdx) => (
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
      {/* SECTION 8 — Success Metrics */}
      <section className="w-full bg-white py-10 lg:py-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Soft Ambient Brand Glow Behind Metrics */}
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#2F3296]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-1">
              Performance Track
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
              Our <span className="relative inline-block text-[#2F3296]">Success</span> Metrics
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

          {/* Bottom Row: Support & Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-4xl mx-auto w-full">
            {HIGHLIGHTS.map((item) => (
              <div 
                key={item.title}
                className="group flex gap-5 bg-white border border-[#2F3296]/25 shadow-md shadow-[#2F3296] :hover:border-[#2F3296]/40 rounded-3xl p-6 lg:p-8 transition-all duration-300 items-start text-left hover:scale-[1.02]"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white/5 border border-black/40 text-[#2F3296] group-hover:text-black transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-black font-black text-md lg:text-lg uppercase tracking-tight mb-1 group-hover:text-[#2F3296] transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-black/50 text-xs lg:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — Related HRTECHZ Solutions */}
      <section className="w-full bg-white pb-10 lg:pb-24 pt-6 lg:pt-10 px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle Brand Blue Ambient Glow Base */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2F3296]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#2F3296] text-md font-black tracking-[0.25em] uppercase mb-4">
              Ecosystem Overview
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black tracking-tight">
              Related <span className="text-[#2F3296]">HRTECHZ</span> Solutions
            </h2>
            <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* Solutions Interactive Cards Track — with swappable touch rows for mobile views */}
          <div className="relative w-full">
            <div 
              ref={relatedScrollRef}
              onScroll={() => handleScrollTracking(relatedScrollRef, setActiveRelatedIndex)}
              className="flex lg:grid flex-row lg:grid-cols-3 gap-5 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0 items-stretch"
            >
              {RELATED_SOLUTIONS.map((solution, index) => {
                const formattedNumber = String(index + 1).padStart(2, "0");
                
                return (
                  <div
                    key={solution.title}
                    className="group relative flex flex-col justify-between gap-6 rounded-3xl p-6 lg:p-8 border border-[#2F3296]/20 shadow-sm shadow-[#2F3296] transition-all duration-300 overflow-hidden text-left flex-shrink-0 w-[85%] sm:w-[48%] lg:w-auto snap-center"
                  >
                  {/* Giant Sliding Background Watermark Number */}
                  <span className="absolute -bottom-4 right-4 text-7xl lg:text-8xl font-black text-black/20 group-hover:text-[#2F3296]/20 leading-none select-none tracking-tighter transition-all duration-500 transform group-hover:-translate-y-3">
                    {formattedNumber}
                  </span>

                  {/* Content Block */}
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

                  {/* Interactive Action Trigger Link */}
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

                  {/* Micro Accent Edge Tracker line path */}
                  <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#2F3296] to-transparent transition-all duration-500 rounded-b-3xl" />
                </div>
              );
            })}
          </div>
          {/* Mobile Indicators for Section 9 — Hidden on Desktop */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-4 w-full">
              {RELATED_SOLUTIONS.map((_, dotIdx) => (
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

      {/* SECTION 10 — Call to Action */}
            <section className="w-full bg-zinc-800 py-10 px-6 lg:px-12 relative overflow-hidden">
      
              {/* Decorative background circles */}
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute top-10 right-40 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
      
              <div className="relative w-full max-w-4xl mx-auto text-center">
      
                {/* Eyebrow */}
                <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-5">
                  Get Started Today
                </p>
      
                {/* Heading */}
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Ready to Make{" "}
                  <span className="text-[#2F3296] relative inline-block">
                    Better Hiring Decisions
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-white/40 rounded-full" />
                  </span>
                  ?
                </h2>
      
                {/* Subtext */}
                <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                  Strengthen your recruitment process with trusted verification and screening services from HRTECHZ.
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