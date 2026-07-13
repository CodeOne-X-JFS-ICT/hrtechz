"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTA_Buttons from "@/components/CTA_button";
import Footer from "@/components/footer";
import { useState, useEffect, useRef } from "react";
import React from "react";

  /* statistics bar */
  const STATS = [
  { value: "10,000+", label: "Candidates Onboarded" },
  { value: "500+",    label: "Corporate Clients" },
  { value: "95%",     label: "Client Retention" },
  { value: "24/7",    label: "Digital Support" },
  ];

  /* Solution cards */
  const SOLUTIONS = [
  {
    number: "01",
    title: "Hiring",
    description: "Attract, and Hire top Talents faster.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="9" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 26c0-5 4-9 9-9s9 4 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 14l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    services: [
      "AI Powered Executive Search",
      "Augmentation (Project Gaps Filling)",
      "Contract Staffing",
      "EOR Services",
    ],
  },
  {
    number: "02",
    title: "Testing",
    description: "Make confident hiring decisions with reliable Screening, Testing and Assessments.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M11 12h10M11 17h10M11 22h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 2v4M12 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    services: [
      "Psychometric Tests",
      "Background Verification",
    ],
  },
  {
    number: "03",
    title: "Managing Performance",
    description: "Assist HR Managers to get neutral assessments on the workforce from outside agencies.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 24l8-8 5 5 11-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="26" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    services: [
      "Employee Engagement Surveys",
      "Talent Management",
    ],
  },
  {
    number: "04",
    title: "Technology",
    description: "Build future-ready HR operations through digital innovation.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 28h12M16 24v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 15l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    services: [
      "HR Analytics and BI",
      "HR Audits",
      "Digital Training Modules",
      "Data Processing",
    ],
  },
];

/* subsidiaries cards */
const SUBSIDIARIES = [
  {
    logo: "/images/Jobfac-logo.png",
    name: "JobFactory",
    description:
      "Provides Talent Acquisition and Recruitment solutions to companies since 2012.",
    href: "/subsidiaries/jobfactory",
    accent: "#2F3296",
  },
  {
    logo: "/images/verifieze-logo.png",
    name: "Verifieze",
    description:
      "Comprehensive Background Verification and Screening services to ensure secure hiring for companies.",
    href: "/subsidiaries/verifieze",
    accent: "#2F3296",
  },
  {
    logo: "/images/codeonex-logo.png",
    name: "CodeOne-X",
    description:
      "Technology innovation hub delivering Augmentation, HR Software, Automation, Data, and AI-driven HR solutions.",
    href: "/subsidiaries/codeonex",
    accent: "#2F3296",
  },
  {
    logo: "/images/Sourceone-logo.png",
    name: "SourceOne",
    description:
      "Providing alternative hiring solutions like Contract Staffing, EOR Services, Payroll Outsourcing, and Staff Outsourcing to local and overseas entities.",
    href: "/subsidiaries/sourceone",
    accent: "#2F3296",
  },
];

/* Benifits grid */
const BENEFITS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h20M14 4v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "End-to-End Tech Solutions",
    description: "From Sourcing candidates to Exit.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Faster Hiring",
    description: "Reduce onboarding timelines through automation and AI-driven sourcing.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l6 6L23 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Better Hiring Decisions",
    description: "Leverage Assessments and Verification services.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="16" width="5" height="9" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="11" y="10" width="5" height="15" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="19" y="4" width="5" height="21" rx="1" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Scalable Technology",
    description: "Technology solutions, designed to shift your organization to the next level.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="9" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 24c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 17c2.5.5 5 2.5 5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Industry Expertise",
    description: "Specialized knowledge across multiple industries.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-8 5 5 4-6 5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Data-Driven Insights",
    description: "Actionable analytics for workforce Management and Planning.",
  },
];

/* Industries grid */
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

/* Process Steps */
const STEPS = [
  {
    number: "01",
    title: "Discover",
    short: "Understand your needs",
    description:
      "Diagnose your requirement clearly, then the workforce challenges and business objectives.",
    image: "/images/process-discover.jpg",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Propose",
    short: "Craft the right solution",
    description:
      "Design and propose our technological support tailored to the HR Manager's specific context and goals.",
    image: "/images/process-design.jpg",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M10 16h12M10 11h8M10 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Deliver",
    short: "Execute with precision",
    description:
      "Deliver on time maintaining TAT/SLAs intact, ensuring every commitment is honoured.",
    image: "/images/process-deliver.jpg",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 16l8 8L26 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Optimize",
    short: "Continuously improve",
    description:
      "Continuously improve our delivery through analytics, feedback loops, and proactive support.",
    image: "/images/process-optimize.jpg",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 22l7-9 5 5 5-7 7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="8" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

/* Success Metrics */
const METRICS = [
  { value: 100000, suffix: "+", label: "Candidate Profiles", prefix: "" },
  { value: 50000,  suffix: "+", label: "Verification Checks", prefix: "" },
  { value: 5000,   suffix: "+", label: "Successful Onboards", prefix: "" },
  { value: 100,    suffix: "%", label: "Verification Accuracy", prefix: "" },
  { value: 20,     suffix: "+", label: "Industry Verticals Served", prefix: "" },
];

/* Testimonials data */
const TESTIMONIALS = [
  {
    quote:
      "HRTECHZ helped us reduce our hiring time by 40% while improving candidate quality significantly across all departments.",
    initial: "S",
  },
  {
    quote:
      "The verification process is fast, reliable, and highly professional. We now onboard with absolute confidence.",
    initial: "J",
  },
  {
    quote:
      "Their technology solutions completely transformed our recruitment operations. A true end-to-end HR partner.",
    initial: "A",
  },
];

/* Articles data */
const ARTICLES = [
  {
    image: "/images/article-ai-recruitment.png",
    tag: "AI & Recruitment",
    title: "The Future of AI in Recruitment",
    excerpt:
      "How artificial intelligence is reshaping the way organisations attract, screen, and retain top talent.",
    href: "/insights/future-of-ai-recruitment",
  },
  {
    image: "/images/article-verification.png",
    tag: "Background Verification",
    title: "Why Background Verification Matters",
    excerpt:
      "A deep dive into why rigorous background checks protect your organisation and build a culture of trust.",
    href: "/insights/background-verification-matters",
  },
  {
    image: "/images/article-data-hiring.png",
    tag: "HR Strategy",
    title: "Building a Data-Driven Hiring Strategy",
    excerpt:
      "Leveraging analytics and workforce data to make smarter, faster, and more confident hiring decisions.",
    href: "/insights/data-driven-hiring-strategy",
  },
  {
    image: "/images/article-hr-trends.png",
    tag: "HR Technology",
    title: "HR Technology Trends for 2026",
    excerpt:
      "The key technology shifts every HR leader needs to watch and act on this year to stay competitive.",
    href: "/insights/hr-technology-trends-2026",
  },
];

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
        ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 0) + "k"
        : count.toString()
      : count.toString();

  return (
    <div className="group flex flex-col items-center justify-center text-center p-8 transition-all duration-300 cursor-default">
      <span className="text-4xl lg:text-5xl font-black text-white group-hover:text-[#2F3296] transition-colors duration-300 leading-none">
        {metric.prefix}
        {display}
        {metric.suffix}
      </span>
      <span className="mt-3 text-sm font-semibold text-white/70 group-hover:text-zinc-500 transition-colors duration-300 leading-snug">
        {metric.label}
      </span>
    </div>
  );
}

/* Star rating */
function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#2F3296">
          <path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [metricsStarted, setMetricsStarted] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const solutionScrollRef = useRef<HTMLDivElement>(null);

  const [activeArticalIndex, setActiveArticalIndex] = useState(0);
  const articalScrollRef = useRef<HTMLDivElement>(null);

  const [activeSubsidiaryIndex, setActiveSubsidairyIndex] = useState(0);
  const subsidiaryScrollRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.3 }
    );
    if (metricsRef.current) observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
      className="w-full bg-white text-center"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
    
      {/* ── Main hero content ── */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
        {/* ── decorative circles ── */}
        <div className="absolute top-50 left-30 w-40 h-40 rounded-full bg-[#2F3296]/15 pointer-events-none" />
          <div className="absolute -top-32 -left-18 w-96 h-96 rounded-full bg-[#2F3296]/15 pointer-events-none" />
          <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#2F3296]/15 pointer-events-none" />
        {/* Decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(47,50,150,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(47,50,150,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Headline */}
        <h1 className="text-4xl lg:text-6xl font-bold uppercase leading-tight tracking-tight text-black mb-6">
            Transforming <span className="text-[#2F3296]">HR</span> for the{" "}
            <span className="relative inline-block text-[#2F3296]">
            Modern Workplace
        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#2F3296] rounded-full"aria-hidden="true"/></span>
        </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-x text-zinc-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            HRTECHZ is an integrated HR technology ecosystem helping organizations
            hire better talents, test them accurately, verify candidates' backgrounds
            faster, and leverage technology to build high-performing teams.
          </p>

          {/* CTA Buttons */}
          <CTA_Buttons
            primaryText="Request a Demo"
            primaryHref="/demo"
            secondaryText="Talk to an Expert"
            secondaryHref="/contact"
          />
        </div>
      </div>

      {/* ── Statistics bar ── */}
      <div className="w-full">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  i !== STATS.length - 1
                    ? "lg:border-r lg:border-[#2F3296]/20 lg:pr-8"
                    : ""
                }`}
              >
                <span className="text-3xl lg:text-4xl font-bold text-[#2F3296] leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-zinc-500 font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
    {/*Section 2 - Ecosystem */}
    <section
      className="w-full bg-black py-10 px-6 lg:px-12"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-4">
            Our Ecosystem
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2F3296]/200 leading-tight mb-6">
            One Platform.{" "}
            <span className="relative inline-block">
              <span className="text-white underline decoration-white/40 underline-offset-4">
                FOUR
              </span>
            </span>{" "}
            Core Solutions.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            At HRTECHZ, we combine recruitment expertise, advanced verification
            services, and innovative technology solutions to simplify People
            Management.
          </p>
        </div>

          {/* ── Solution cards grid ── */}
          <div
            ref={solutionScrollRef}
            onScroll={() => handleScrollTracking(solutionScrollRef, setActiveSolutionIndex)}
            className="flex flex-row lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-6 px-4 -mx-4 lg:px-0 lg:mx-auto"
          >
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.title}
              className="group relative flex flex-col bg-[#2F3296]/20 hover:bg-white/80 border border-white/20 hover:border-white rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden w-[85%] sm:w-[48%] lg:w-auto flex-shrink-0 snap-center"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-6xl font-black text-white/80 group-hover:text-[#2F3296]/100 leading-none select-none transition-colors duration-300">
                {solution.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/15 group-hover:bg-white text-white group-hover:text-[#2F3296] mb-5 transition-all duration-300">
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-white group-hover:text-[#2F3296] text-xl font-bold mb-3 transition-colors duration-300">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-white group-hover:text-zinc-800 text-sm leading-relaxed mb-5 transition-colors duration-300">
                {solution.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/20 group-hover:bg-[#2F3296]/60 mb-5 transition-colors duration-300" />

              {/* Services list */}
              <ul className="flex flex-col gap-2 mt-auto">
                {solution.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2 text-white/80 group-hover:text-zinc-700 text-sm transition-colors duration-300"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#2F3296] flex-shrink-0 transition-colors duration-300" />
                    {service}
                  </li>
                ))}
              </ul>
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
    </section>
    
    {/* Section 3 - Subsidiaries */}
    <section
      className="w-full bg-white py-10 px-6 lg:px-12"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-4">
            Our Subsidiaries
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
            Powered by{" "}
            <span className="text-[#2F3296]">Specialized Brands</span>
          </h2>
          {/* Blue accent line */}
          <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
        </div>

          {/* 2×2 Card Grid on Desktop / Swipeable Carousel on Mobile */}
          <div
            ref={subsidiaryScrollRef}
            onScroll={() => handleScrollTracking(subsidiaryScrollRef, setActiveSubsidairyIndex)}
            className="flex flex-row sm:grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none pb-6 px-4 -mx-4 sm:px-0 sm:mx-auto"
          >
          {SUBSIDIARIES.map((sub) => (
            <div
              key={sub.name}
              className="group flex flex-col border border-zinc-200 bg-white hover:border-[#2F3296] rounded-2xl overflow-hidden shadow-xl shadow:[#2F3296] hover:shadow-xl transition-all duration-300 w-[85%] sm:w-auto flex-shrink-0 snap-center"
            >
              {/* Top coloured bar */}
              <div className="h-2 w-full bg-[#2F3296] opacity-20 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col flex-1 p-4">

                {/* Logo placeholder */}
                <div className="w-full h-20 flex items-center justify-center mb-6">
                  <div className="relative w-full h-28 rounded-lg bg-[#090A1E] flex items-center justify-center">
                    <Image
                      src={sub.logo}
                      alt={`${sub.name} logo`}
                      fill
                      /* dynamically force the verifieze asset to invert to clear white */
                      className={`object-contain p-2 ${
                        sub.name === "Verifieze" ? "brightness-0 invert" : ""
                      }`}
                      onError={(e) => {
                        // Fallback: hide broken image, show text
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Company name */}
                <h3 className="text-xl font-bold text-black group-hover:text-[#2F3296] mb-3 transition-colors duration-300">
                  {sub.name}
                </h3>

                {/* Description */}
                <p className="text-zinc-800 text-sm leading-relaxed flex-1 mb-6">
                  {sub.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-[#090A1E]/40 mb-6" />

                {/* Learn More CTA */}
                <Link
                  href={sub.href}
                  className="inline-flex items-center gap-2 text-[#2F3296] font-semibold text-sm tracking-wide uppercase hover:gap-3 transition-all duration-200"
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex lg:hidden items-center justify-center gap-2 mt-2 w-full">
              {SUBSIDIARIES.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSubsidiaryIndex === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-300"
                  }`}
                />
              ))}
        </div>
      </div>
    </section>
    
    {/* Section 4 Why choose HRTECHZ, Section 5 Industries we serve  */}

    <section className="w-full bg-zinc-50 py-10 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">

          {/* ── LEFT: Why Choose HRTECHZ ── */}
          <div className="flex-1 flex flex-col">
            <div className="mb-10">
              <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-3">
                Why Choose HRTECHZ
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-3">
                The Complete{" "}
                <span className="text-[#2F3296]">HR Technology</span> Partner
              </h2>
              <p className="text-zinc-500 text-base">
                We assist HR Managers to reach tomorrow's technology today.
              </p>
              <div className="mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group flex flex-col gap-3 bg-white border border-zinc-200 hover:border-[#2F3296] hover:scale-[1.02] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2F3296]/10 text-[#2F3296] group-hover:bg-[#2F3296] group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-black font-bold text-sm group-hover:text-[#2F3296] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-[#2F3296] self-stretch mx-2" />

          {/* ── RIGHT: Industries We Serve ── */}
          <div className="flex-1 flex flex-col">
            <div className="mb-10">
              <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-3">
                Industries We Serve
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-3">
                Trusted Across{" "}
                <span className="text-[#2F3296]">Many Leading</span> Industries
              </h2>
              <p className="text-zinc-500 text-base">
                Delivering specialized HR solutions across diverse sectors.
              </p>
              <div className="mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
            </div>

            <div className="grid grid-cols-2 gap-3 flex-1 content-start">
              {INDUSTRIES.map((industry) => (
                <button
                  key={industry.label}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3 border text-left 
                    hover:text-[#2F3296] shadow-lg bg-white border-zinc-200 text-black hover:border-[#2F3296] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    `}
                >
                  <span className="text-xl flex-shrink-0">{industry.icon}</span>
                  <span className="text-sm font-semibold leading-snug">
                    {industry.label}
                  </span>
                </button>
              ))}
            </div>
            
              <div className="mt-6 p-4 rounded-xl bg-[#2F3296]/10 border border-[#2F3296]/20">
                <p className="text-[#2F3296] text-sm font-medium">
                  ✓ HRTECHZ delivers specialized HR solutions for all above services.
                </p>
              </div>
          </div>

        </div>
      </section>

      
      {/* SECTION 6 — Process (left) | Detail (right) */}
      <section className="w-full bg-black py-10 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-3">
              Our Process
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2F3296] leading-tight">
              How We Help Organizations {" "}
              <span className="text-white underline decoration-white/40 underline-offset-4">Grow</span>
            </h2>
            <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch justify-center max-w-6xl mx-auto w-full">

            {/* LEFT — Step list (Scrollable row on mobile, Vertical stack on desktop) */}
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-none pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory">
              {STEPS.map((step, i) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(i)}
                  className={`group flex items-center gap-4 lg:gap-5 p-4 lg:p-5 rounded-2xl border text-left transition-all duration-300 flex-shrink-0 w-[75%] sm:w-[45%] lg:w-full snap-center
                    ${
                      activeStep === i
                        ? "bg-[#2F3296] border-[#2F3296] shadow-lg"
                        : "bg-black border-zinc-200 hover:border-[#2F3296] hover:bg-[#2F3296]/40"
                    }`}
                >
                  {/* Step number */}
                  <span
                    className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl text-base lg:text-lg font-black transition-colors duration-300
                      ${
                        activeStep === i
                          ? "bg-white text-[#2F3296]"
                          : "bg-black text-white group-hover:bg-white group-hover:text-black"
                      }`}
                  >
                    {step.number}
                  </span>

                  {/* Title + short */}
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-bold text-sm lg:text-base truncate transition-colors duration-300 ${
                        activeStep === i ? "text-white" : "text-white/60 group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`text-xs lg:text-sm truncate transition-colors duration-300 ${
                        activeStep === i ? "text-white/70" : "text-zinc-400"
                      }`}
                    >
                      {step.short}
                    </p>
                  </div>

                  {/* Arrow — Hidden on mobile tabs, visible on desktop */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className={`hidden lg:block ml-auto flex-shrink-0 transition-all duration-300 ${
                      activeStep === i
                        ? "text-white translate-x-1"
                        : "text-zinc-300 group-hover:text-black"
                    }`}
                  >
                    <path
                      d="M4 9h10M10 5l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Responsive hint text */}
            <p className="text-xs text-zinc-400 text-center block lg:hidden -mt-2">
              Swipe steps to navigate your workflow ← →
            </p>

            {/* Vertical divider — kept exactly the same for desktop */}
            <div className="hidden lg:block w-px bg-zinc-100 self-stretch mx-2" />

            {/* RIGHT — active step detail */}
            <div className="flex-1 flex items-center justify-center lg:max-w-2xl lg:mx-auto w-full">
              <div className="w-full rounded-3xl bg-[#2F3296]/10 border border-zinc-200 p-10 flex flex-col gap-6 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                
                {/* Dynamic Background Image Layer — Changes automatically with each activeStep */}
                <div className="absolute inset-0 z-30 pointer-events-none opacity-20 mix-blend-overlay transition-all duration-500">
                  <img 
                    src={STEPS[activeStep].image}
                    alt="" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>

                {/* Content Elements wrapped in a relative z-10 index to stay cleanly on top */}
                <div className="relative z-10 flex flex-col gap-6 w-full">
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white text-[#2F3296] shadow-md">
                    {STEPS[activeStep].icon}
                  </div>

                  {/* Step badge */}
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest">
                    <span className="w-6 h-px bg-white" />
                    Step {STEPS[activeStep].number}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-black text-white leading-tight">
                    {STEPS[activeStep].title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-base leading-relaxed">
                    {STEPS[activeStep].description}
                  </p>

                  {/* Progress dots */}
                  <div className="flex gap-2 mt-auto pt-4">
                    {STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeStep === i
                            ? "w-8 bg-[#2F3296]"
                            : "w-2 bg-zinc-300 hover:bg-[#2F3296]/50"
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

      {/* SECTION 7 — Success Metrics */}
      <section
        ref={metricsRef}
        className="w-full bg-black py-10 px-6 lg:px-12"
      >
        <div className="w-full max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-3">
              Success Metrics
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2F3296] leading-tight">
              Delivering{" "}
              <span className="text-white underline decoration-white/40 underline-offset-4">
                Measurable Results
              </span>
            </h2>
            <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* Metrics grid — Balanced Grid on Mobile, Row on Desktop */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-stretch gap-y-4 sm:gap-y-0">
            {METRICS.map((metric, i) => (
              <div 
                key={metric.label} 
                className={`flex flex-col sm:flex-row sm:flex-1 items-stretch ${
                  i === METRICS.length - 1 ? "col-span-2 sm:col-span-1" : "col-span-1"
                }`}
              >
                
                {/* Main Metric Card Asset */}
                <div className="w-full">
                  <MetricCard metric={metric} started={metricsStarted} />
                </div>
                
                {/* High-fidelity Vertical Divider — ONLY shown on Desktop */}
                {i < METRICS.length - 1 && (
                  <div className="hidden sm:block w-px bg-[#2F3296]/40 self-stretch mx-8" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom tagline */}
          <p className="text-center text-white/50 text-sm mt-12">
            Numbers that reflect our commitment to excellence and client success.
          </p>
        </div>
      </section>
      
      {/* SECTION 8 — Client Testimonials*/}
      <section className="w-full bg-white py-10 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-3">
              Client Testimonials
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
              What Our{" "}
              <span className="text-[#2F3296]">
                Clients Say
              </span>
            </h2>
            <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* Single sliding testimonial */}
            <div className="relative flex items-center gap-6 max-w-3xl mx-auto">

            {/* Left arrow */}
            <button
                onClick={() => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#2F3296] text-black hover:bg-black/50 hover:text-white transition-all duration-300"
            >
                ‹
            </button>

            {/* Card */}
                <div className="flex-1 flex flex-col items-center text-center gap-5 py-8 px-6">
                    <p className="text-black font-semibold text-lg leading-relaxed italic">
                    "{TESTIMONIALS[active].quote}"
                    </p>
                    <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="18" height="18" viewBox="0 0 16 16" fill="#FFD700">
                        <path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Right arrow */}
            <button
                onClick={() => setActive((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#2F3296] text-black hover:bg-black/50 hover:text-white transition-all duration-300"
            >
                ›
            </button>
            </div>
        </div>
      </section>

      {/* SECTION 9 — Insights & Resources */}
      <section className="w-full bg-white py-10 px-6 lg:px-12 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#2F3296] text-sm font-semibold tracking-[0.18em] uppercase mb-3">
                Insights & Resources
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
                Latest HR &{" "}
                <span className="text-[#2F3296]">Technology</span> Insights
              </h2>
              <div className="mt-5 w-16 h-1 rounded-full bg-[#2F3296]" />
            </div>

            {/* View All button — desktop */}
            <Link
              href="/insights"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 border-2 border-[#2F3296] text-[#2F3296] font-semibold rounded-xl hover:bg-[#2F3296] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              View All Articles
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Articles grid — Swipeable Row on Mobile, 2 Columns on Desktop */}
          <div
              ref={articalScrollRef}
              onScroll={() => handleScrollTracking(articalScrollRef, setActiveArticalIndex)}
              className="flex flex-row sm:grid sm:grid-cols-2 gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none pb-6 px-4 -mx-4 sm:px-0 sm:mx-auto">
            {ARTICLES.map((article) => (
              <div
                key={article.title}
                className="group flex flex-col sm:flex-row  shadow-xl hover:bg-zinc-50 hover:scale-[1.01] rounded-3xl border border-[#2F3296]/20 hover:border-[#2F3296] transition-all duration-300 overflow-hidden w-[88%] sm:w-auto flex-shrink-0 snap-center"
              >

                {/* Cleaned Image Container — left side */}
                <div className="relative w-full sm:w-48 md:w-64 h-48 sm:h-auto flex-shrink-0 bg-zinc-100 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content — right side */}
                <div className="flex flex-col justify-center gap-2 py-4 px-6 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 bg-[#2F3296]/10 text-[#2F3296] text-xs font-semibold rounded-full">
                      {article.tag}
                    </span>
                  </div>
                  <h3 className="text-black font-bold text-xl leading-snug group-hover:text-[#2F3296] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-[#2F3296] font-semibold text-sm mt-2 hover:gap-3 transition-all duration-200"
                  >
                    Read More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile dot indicators */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-2 w-full">
              {ARTICLES.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeArticalIndex === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-300"
                  }`}
                />
              ))}
            </div>
            
          {/* View All button — mobile */}
          <div className="mt-6 flex sm:hidden justify-center">
            <Link
              href="/insights"
              className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#2F3296] text-[#2F3296] font-semibold rounded-xl hover:bg-[#2F3296] hover:text-white transition-all duration-300"
            >
              View All Articles
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* SECTION 10 — Call to Action */}
      <section className="w-full bg-zinc-800 py-10 px-6 lg:px-12 relative overflow-hidden">

        {/* Decorative background circles */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-10 right-40 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative w-full max-w-4xl mx-auto text-center">

          {/* Eyebrow */}
          <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-5">
            Get Started Today
          </p>

          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Transform{" "}
            <span className="text-[#2F3296] relative inline-block">
              Your Workforce
              <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-white/40 rounded-full" />
            </span>
            ?
          </h2>

          {/* Subtext */}
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Partner with HRTECHZ to streamline hiring, strengthen verification,
            and accelerate digital transformation.
          </p>

          {/* CTA buttons */}
            <CTA_Buttons
            primaryText="Schedule a Consultation"
            primaryHref="/consultation"
            secondaryText="Request a Demo"
            secondaryHref="/demo"
            />
        </div>
      </section>

      <Footer />
    </>
  );
}
