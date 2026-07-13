"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CTA_Buttons from "@/components/CTA_button";
import Footer from "@/components/footer";

/* ── Core Values ─────────────────────────────── */
const CORE_VALUES = [
  { label: "Thinking BIG",        icon: "✓" },
  { label: "Right Innovation",    icon: "✓" },
  { label: "Empowering Talents",  icon: "✓" },
  { label: "Doing Right Things",  icon: "✓" },
];

/* ── Portfolio Table ─────────────────────────── */
const PORTFOLIO = [
  {
    brand: "Jobfactory",
    segment: "Knowledge Process Outsourcing (KPO)",
    specialty: "IT Enterprise Resource Deployment & Recruitment Process Outsourcing (RPO)",
    color: "bg-[#2F3296]/20",
    image: "/images/Jobfac-logo.png",
    href: "/subsidiaries/jobfactory",
  },
  {
    brand: "Verifieze",
    segment: "Data Verification Sector",
    specialty: "Employment Background Screening & Candidate Certification",
    color: "bg-[#2F3296]",
    image: "/images/verifieze-logo.png",
    href: "/subsidiaries/verifieze",
  },
  {
    brand: "SourceOne",
    segment: "Business Process Outsourcing (BPO)",
    specialty: "Modernized Workforce Management, Risk Mitigation & Automation",
    color: "bg-[#2F3296]/20",
    image: "/images/sourceone-logo.png",
    href: "/subsidiaries/sourceone",
  },
  {
    brand: "CodeOne-X",
    segment: "Information Communication Technology (ICT)",
    specialty: "IT Staff Augmentation & Advanced Digital Platform Engineering",
    color: "bg-[#2F3296]",
    image: "/images/codeonex-logo.png",
    href: "/subsidiaries/codeonex",
  },
];

/* ── Subsidiary Details ──────────────────────── */
const SUBSIDIARIES = [
  {
    name: "Jobfactory",
    fullName: "JOBFACTORY KPO (PRIVATE) LIMITED",
    tagline: "KPO & Recruitment Solutions",
    segment: "Knowledge Process Outsourcing",
    badge: "KPO",
    image: "/images/Jobfac-logo.png",
    accent: "#2F3296",
    highlights: [
      { label: "Monthly Revenue", value: "LKR 2.5M+", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polyline points="22 7 13.5 16 8.5 11 2 18" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        ) },
      { label: "Key Accounts", value: "2 Major", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ) },
      { label: "Focus", value: "IT Enterprise", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        ) },
    ],
    points: [
      {
        title: "Strategic Restructuring",
        body: "Executed a swift tactical change by completely dismantling its slow-moving Extreme Sports sector and repurposing its infrastructure into a high-end knowledge services business.",
      },
      {
        title: "Immediate Revenue Performance",
        body: "Within less than two quarters of operation, the newly established JOBFACTORY KPO brand successfully recorded a stellar monthly revenue average of LKR 2.5 million.",
      },
      {
        title: "Short-Term Priorities",
        body: "Deploying high-caliber professional resources for IT enterprise-level projects, attracting key corporate accounts for optimized local RPO services, and operating with minimal infrastructure overheads.",
      },
      {
        title: "Long-Term Framework",
        body: "Building a robust, diversified pool of IT and Non-IT professionals for immediate multi-duration project deployment, alongside complete automation of its resource-matching software platform.",
      },
      {
        title: "Key Achievements",
        body: "Successfully cross-sold solutions to existing corporate clients, secured two major key accounts, and initiated active market potential research to deploy high-value hiring professional lines.",
      },
    ],
  },
  {
    name: "Verifieze",
    fullName: "VERIFIEZE (PRIVATE) LIMITED",
    tagline: "Data Verification & Background Screening",
    segment: "Data Verification Sector",
    badge: "DVS",
    image: "/images/verifieze-logo.png",
    accent: "#2F3296",
    highlights: [
      { label: "Platform", value: "CHECK ENGINE", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ) },
      { label: "Market", value: "Sri Lanka + USA", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ) },
      { label: "Status", value: "Cash Cow Track", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ) },
    ],
    points: [
      {
        title: "Industry Leadership",
        body: "Relaunched as a distinct entity under the new verification umbrella in late 2023, emerging as a leading provider of employment background verification services in Sri Lanka.",
      },
      {
        title: "Platform Launch",
        body: "The first phase of its automated online platform, \"CHECK ENGINE\", was officially launched during the year, powered by the technical capabilities of sibling company CODEONE-X.",
      },
      {
        title: "FinTech & Financial Milestones",
        body: "Seamlessly integrated a secure card payment option via a leading bank and delivered a promising turnaround, generating robust, profitable revenue in its opening cycles.",
      },
      {
        title: "Innovative Credentialing",
        body: "Introduced a new candidate certification program that issues official verification certificates upon successful background validation, elevating candidate hiring prospects.",
      },
      {
        title: "Long-Term Projection",
        body: "Strategically projected to mature into a high-performing cash cow asset within three years, preparing to enter high-demand international markets like the USA.",
      },
    ],
  },
  {
    name: "SourceOne",
    fullName: "SOURCEONE (PRIVATE) LIMITED",
    tagline: "BPO & Workforce Management Solutions",
    segment: "Business Process Outsourcing",
    badge: "BPO",
    image: "/images/Sourceone-logo.png",
    accent: "#2F3296",
    highlights: [
      { label: "Experience", value: "7+ Years", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ) },
      { label: "Clients", value: "15+ Major", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        ) },
      { label: "Status", value: "VAT Registered", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ) },
    ],
    points: [
      {
        title: "Flagship Status",
        body: "Operating as the flagship workforce solutions provider of HRTECH-Z, SourceOne leverages deep operational expertise built over seven consecutive years of sectoral experience.",
      },
      {
        title: "Enterprise Scale",
        body: "Currently supports over 15 major corporate entities with scalable, highly cost-effective outsourcing structures that maximize business efficiency.",
      },
      {
        title: "Elite Client Acquisition",
        body: "Successfully advanced its market-penetration strategy by securing one of the world's largest multinational Energy brands for its client portfolio.",
      },
      {
        title: "Banking Sector Penetration",
        body: "Significantly strengthened its position as a trusted provider by building new strategic partnerships and expanding its service footprint across the local banking sector.",
      },
      {
        title: "Financial Milestone",
        body: "Reflecting massive business volume expansion and maturity, the subsidiary crossed the national VAT registration threshold during the fiscal year 2025/26.",
      },
    ],
  },
  {
    name: "CodeOne-X",
    fullName: "CODEONE-X TECHNOLOGIES (PRIVATE) LIMITED",
    tagline: "ICT & Staff Augmentation Solutions",
    segment: "Information Communication Technology",
    badge: "ICT",
    image: "/images/codeonex-logo.png",
    accent: "#2F3296",
    highlights: [
      { label: "Certification", value: "ISO 27001:2022", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ) },
      { label: "Target Clients", value: "20+ Enterprise", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="1" />
            <line x1="12" y1="12" x2="16.5" y2="7.5" />
          </svg>
        ) },
      { label: "Status", value: "VAT Registered", 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ) },
    ],
    points: [
      {
        title: "Service Scope",
        body: "Specializes in advanced digital platform engineering, technical software development, internal SME testing/SEO infrastructure, and its core delivery engine — IT Staff Augmentation and Dedicated Teams.",
      },
      {
        title: "Market Diversification",
        body: "Successfully expanded its advanced client pipeline across key vertical industries, including education, travel and tourism, insurance, and other emerging sectors.",
      },
      {
        title: "Mitigating Migration Pressures",
        body: "Despite severe macroeconomic talent retention pressures, the brand successfully de-risked operations by securing three new enterprise-level key accounts.",
      },
      {
        title: "Technical Implementations",
        body: "Successfully built and delivered multiple high-performance websites for the group's brands, and completely engineered the backend architecture for Verifieze's CHECK ENGINE verification portal.",
      },
      {
        title: "ISO 27001 Global Certification",
        body: "Reached a critical governance milestone by successfully obtaining the prestigious ISO 27001:2022 certification from Euro Veritas, UK, reinforcing world-class standards in data protection and information security.",
      },
    ],
  },
];

/* ── Resource Allocation ─────────────────────── */
const ALLOCATION = [
  {
    number: "01",
    title: "Strategic Alignment",
    body: "Every resource deployed must directly link back to the group's long-term vision of becoming the premier HR Tech conglomerate, eliminating fragmented operational workflows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Return Maximization",
    body: "Prioritizes corporate capital toward high-yield, scalable initiatives using rigorous, evidence-based ROI, IRR, and thorough cost-benefit analyses.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 16 8.5 11 2 18" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Sustainability-Driven Allocation",
    body: "Balances immediate commercial profitability with strict environmental, social, and governance (ESG) responsibilities to safeguard brand trust.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v12" />
        <path d="M8 10c0-1.5 1-2.5 2-2.5h4c1 0 2 1 2 2.5s-1 2.5-2 2.5h-2c-1 0-2 1-2 2.5s1 2.5 2 2.5h4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Risk-Adjusted Planning",
    body: "Uses advanced portfolio diversification, centralized brand governance, and strict zero-based budgeting to insulate the group from external market volatility.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

/* ── Key Risks ───────────────────────────────── */
const RISKS = [
  {
    risk: "Workforce Attrition and Migration",
    mitigation: "CodeOne-X has dedicated substantial funds toward improving employee welfare, offering competitive compensation, and expanding employee shareholding from 1.5% to 6% to lock in long-term alignment.",
    icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2F3296]">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
  },
  {
    risk: "EOR Client Identity & Compliance",
    mitigation: "SourceOne enforces a rigorous, proactive due diligence framework to thoroughly audit and verify the legal legitimacy of all international prospects prior to onboarding.",
    icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2F3296]">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
  },
  {
    risk: "Technical Bench Overhead",
    mitigation: "CodeOne-X maintains a lean bench system by reallocating unassigned engineers to internal software builds, SEO optimization, and web application prototyping for local SMEs.",
    icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2F3296]">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
  },
  {
    risk: "Operational Disruption",
    mitigation: "The group launched a comprehensive Business Continuity Plan (BCP) and fully established a physical, fully-equipped alternate office to guarantee uninterrupted service delivery.",
    icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2F3296]">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
  },
];

/* ── Future Targets ──────────────────────────── */
const FUTURE_TARGETS = [
  {
    brand: "JFS BPO Services",
    target: "LKR 10M Revenue",
    timeline: "2025/26",
    detail: "Expand core segment revenue to LKR 10 million, scaling its underlying workforce to approximately 200 professional employees.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#2F3296] transition-colors duration-300">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    brand: "CodeOne-X",
    target: "20+ Enterprise Clients",
    timeline: "By 2027",
    detail: "Secure a minimum of 20 active enterprise-level corporate clients and expand its internal developer base to exceed 100 professionals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#2F3296] transition-colors duration-300">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    brand: "Verifieze",
    target: "Global Market Leader",
    timeline: "Long-Term",
    detail: "Backed by the CHECK ENGINE platform, positioned to capture massive local and global demand as Colombo Port City expansion triggers multi-sector compliance mandates.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#2F3296] transition-colors duration-300">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    brand: "HRTECH-Z Group",
    target: "10% Employee Ownership",
    timeline: "2026/27",
    detail: "Expand total employee-owned shareholding stakes to 10%, onboarding a minimum of twenty new internal employee-shareholders.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#2F3296] transition-colors duration-300">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function SubsidiariesPage() {
  const [activeSubsidiary, setActiveSubsidiary] = useState(0);
  const [activeRiskIndex, setActiveRiskIndex] = useState<number | null>(null);

  const [activeBrand, setActiveBrandIndex] = useState(0);
  const brandScrollRef = useRef<HTMLDivElement>(null);
  
  const profileScrollRef = useRef<HTMLDivElement>(null);

  const [activeAllocation, setActiveAllocation] = useState(0);
  const allocationScrollRef = useRef<HTMLDivElement>(null);

  const [activeFutureTarget, setActiveFutureTarget] = useState(0);
  const futuretargetScrollRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <div
      className="min-h-screen flex flex-col bg-white"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section className="w-full bg-black relative overflow-hidden py-18 lg:py-12 px-6 lg:px-12">
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13, 20, 214, 0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,50,150,0.06)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        {/* Glow blobs */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#2F3296]/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#2F3296]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* LEFT: Text */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            {/* Breadcrumb */}
            <div className="hidden lg:flex items-center gap-2 text-sm text-white">
              <Link href="/" className="hover:text-[#2F3296] transition-colors duration-200">Home</Link>
              <span>/</span>
              <span className="text-[#0911F8] font-semibold">Subsidiaries</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="inline-block w-8 h-0.5 bg-[#2F3296]" />
              <p className="text-[#0911F8] text-sm font-semibold tracking-[0.18em] uppercase">The HRTECH-Z Group</p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.3] tracking-tight uppercase">
              Independently{" "}
              <span className="relative inline-block text-[#2F3296]">
                Managed
                <span className="absolute left-0 -bottom-1 h-[4px] w-full bg-[#2F3296]/40 rounded-full" />
              </span>
              {" "}Subsidiaries
            </h1>

            {/* Subheadline */}
            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed text-justify lg:text-left max-w-xl">
              The group manages diversified corporate operations structured across four
              high-growth service sectors: ICT, BPO, KPO, and Data Verification Services.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed text-justify lg:text-left max-w-xl">
              Driven by core operational values — the group aims to become the largest
              HR Tech entity in Sri Lanka.
            </p>

            {/* Core values pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {CORE_VALUES.map((v) => (
                <span key={v.label} className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2F3296]/15 border border-[#2F3296]/70 text-white text-xs font-semibold rounded-full">
                  <span>{v.icon}</span>{v.label}
                </span>
              ))}
            </div>

            <CTA_Buttons
              primaryText="Explore Subsidiaries"
              primaryHref="#portfolio"
              secondaryText="Contact Us"
              secondaryHref="/contact"
            />
          </div>

          {/* RIGHT: 4 sector badges */}
          <div className="flex-1 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-sm sm:max-w-md lg:max-w-none">
            {PORTFOLIO.map((p) => (
              <div
                key={p.brand}
                className={`group flex flex-col gap-3 ${p.color} rounded-2xl p-5 border border-white/10 hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
              >
                <div className="relative w-40 h-15">
                  <Image
                    src={p.image}
                    alt={p.brand}
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-white/60 text-xs leading-snug">{p.segment}</p>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1 text-white/70 hover:text-white text-xs font-semibold mt-auto transition-colors duration-200"
                >
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — Portfolio Breakdown */}
      <section id="portfolio" className="w-full bg-zinc-50 py-16 lg:py-20 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-3">Portfolio Overview</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
              Core <span className="text-[#2F3296]">Subsidiary</span> Brands
            </h2>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-zinc-200 shadow-md shadow-[#090A1E]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-black text-center text-white">
                  <th className="px-6 py-4 text-sm font-bold tracking-wider uppercase">Brand</th>
                  <th className="px-6 py-4 text-sm font-bold tracking-wider uppercase">Operational Segment</th>
                  <th className="px-6 py-4 text-sm font-bold tracking-wider uppercase">Main Specialty Focus</th>
                  <th className="px-6 py-4 text-sm font-bold tracking-wider uppercase">Explore</th>
                </tr>
              </thead>
              <tbody>
                {PORTFOLIO.map((p, i) => (
                  <tr
                    key={p.brand}
                    className={`border-t border-zinc-100 transition-colors duration-200 ${i % 2 === 0 ? "bg-[#090A1E]" : "bg-zinc-50"}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-30 h-15 flex items-center justify-center rounded-lg ${p.color} p-1.5 flex-shrink-0`}>
                          <div className="relative w-full h-full">
                            <Image
                              src={p.image}
                              alt={p.brand}
                              fill
                              sizes="120px"
                              className="object-contain brightness-0 invert"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-zinc-500 text-sm">{p.segment}</td>
                    <td className="px-6 py-4 text-center text-zinc-500 text-sm">{p.specialty}</td>
                    <td className="px-6 py-4">
                      <Link href={p.href} className="inline-flex items-center gap-1.5 text-[#2F3296] text-xs font-bold hover:gap-2.5 transition-all duration-200">
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden flex flex-col gap-4">
            <div 
                ref={brandScrollRef}
                onScroll={() => handleScrollTracking(brandScrollRef, setActiveBrandIndex)}
                className="flex flex-row lg:grid lg:grid-cols-2 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-6 px-4 -mx-4 lg:px-0 lg:mx-auto"
              >
            {PORTFOLIO.map((p) => (
              <div key={p.brand} className="bg-[#090A1E] border border-zinc-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-30 h-15 flex items-center justify-center rounded-xl ${p.color} p-2 flex-shrink-0`}>
                    <div className="relative w-full h-full">
                      <Image
                        src={p.image}
                        alt={p.brand}
                        fill
                        sizes="48px"
                        className="object-contain  brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#2F3296] text-xs font-semibold">{p.segment}</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.specialty}</p>
                <Link href={p.href} className="inline-flex items-center gap-1.5 text-[#2F3296] text-xs font-bold mt-3 hover:gap-2.5 transition-all duration-200">
                  Explore Brand →
                </Link>
              </div>
            ))}
          </div>
          {/* Mobile Indicators for Section 3 — Hidden on Desktop */}
          <div className="flex lg:hidden items-center justify-center gap-2 w-full">
            {PORTFOLIO.map((_, dotIdx) => (
              <div
               key={dotIdx}
               className={`h-1.5 rounded-full transition-all duration-300 ${
               activeBrand === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-300"
               }`}
                />
               ))}
              </div>
          </div>
        </div>
      </section>

      {/* ── SECTIONS 3–6 — Subsidiary Deep Dives (Tabbed) ── */}
      <section className="w-full bg-white py-12 lg:py-10 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-3">Deep Dive</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
              Subsidiary <span className="text-[#2F3296]">Profiles</span>
            </h2>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* Tab bar */}
          <div className="flex flex-row flex-wrap gap-2 border-b border-zinc-200 mb-0">
            {SUBSIDIARIES.map((sub, i) => (
              <button
                key={sub.name}
                onClick={() => setActiveSubsidiary(i)}
                className={`relative flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-t-xl border border-b-0 transition-all duration-200 whitespace-nowrap
                  ${activeSubsidiary === i
                    ? "bg-[#090A1E] text-white -mb-px z-10"
                    : "bg-zinc-50 text-zinc-500 border-[#090A1E] hover:text-[#2F3296] hover:border-[#2F3296]/40"
                  }`}
              >
                <span>{sub.badge}</span>
                <span className="hidden sm:inline">{sub.name}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="bg-[#090A1E] border border-zinc-200 border-t-0 rounded-b-3xl rounded-tr-3xl shadow-sm overflow-hidden">
            {SUBSIDIARIES.map((sub, i) =>
              activeSubsidiary !== i ? null : (
                <div key={sub.name} className="flex flex-col gap-0">

                  {/* Top: gradient header */}
                  <div className="bg-[#090A1E] px-6 lg:px-10 py-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider w-fit">
                        {sub.segment}
                      </span>
                      <div className="relative w-46 h-20">
                        <Image
                          src={sub.image}
                          alt={sub.name}
                          fill
                          sizes="184px"
                          className={`object-contain object-left ${
                            sub.name.toLowerCase() === "verifieze" ? "brightness-0 invert" : ""
                          }`}
                        />
                      </div>
                      <p className="text-white/70 text-sm">{sub.fullName}</p>
                    </div>
                    {/* Highlight badges */}
                    <div className="flex flex-wrap gap-3">
                      {sub.highlights.map((h) => (
                        <div key={h.label} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2">
                          <span className="text-lg">{h.icon}</span>
                          <div>
                            <p className="text-white/60 text-[10px] uppercase tracking-wider font-semibold">{h.label}</p>
                            <p className="text-white font-black text-sm">{h.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: key points — Swappable Carousel on Mobile / Static Grid on Desktop */}
                  <div className="w-full">
                    <div
                      ref={profileScrollRef}
                      className="flex flex-row lg:grid lg:grid-cols-2 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none px-6 lg:px-10 py-8"
                    >
                      {sub.points.map((point, pi) => (
                        <div
                          key={point.title}
                          className={`group relative flex flex-col gap-3 bg-zinc-50 border border-zinc-200 hover:border-[#2F3296] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 min-w-[85%] sm:min-w-[45%] lg:min-w-0 snap-center ${
                            pi === sub.points.length - 1 && sub.points.length % 2 !== 0 ? "lg:col-span-2" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#2F3296]/10 text-[#2F3296] flex-shrink-0">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <h4 className="text-black font-bold text-sm group-hover:text-[#2F3296] transition-colors duration-200">
                              {point.title}
                            </h4>
                          </div>
                          <p className="text-zinc-500 text-sm leading-relaxed">{point.body}</p>
                          </div>
                      ))}
                    </div>

                    {/* Hint text indicator — Only visible on mobile devices to prompt swipes */}
                    <div className="flex lg:hidden justify-center items-center gap-1.5 pb-6 text-zinc-400 text-xs font-medium">
                      <span>Swipe for details</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Market Environment */}
      <section className="w-full bg-black py-16 lg:py-20 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* LEFT */}
            <div className="flex-1 flex flex-col gap-5">
              <p className="text-white text-sm font-semibold tracking-[0.18em] uppercase">Market Environment</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Segment Contributions &{" "}
                <span className="text-[#2F3296]">Market Conditions</span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-[#2F3296]" />
              <p className="text-zinc-400 text-base leading-relaxed">
                Operations were executed within a stabilizing Sri Lankan economy that achieved a
                5% GDP growth rate, an 11% currency appreciation against the USD, and a transition
                into a low-interest deflationary phase by late 2024.
              </p>

              {/* Macro stats */}
              <div className="grid grid-cols-3 gap-4 mt-2">
                {[
                  { value: "5%", label: "GDP Growth" },
                  { value: "11%", label: "LKR Appreciation" },
                  { value: "Low", label: "Interest Phase" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-4">
                    <span className="text-2xl lg:text-3xl font-black text-[#2F3296]">{stat.value}</span>
                    <span className="text-white/60 text-xs mt-1 font-semibold">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Memberships + compliance */}
            <div className="flex-1 flex flex-col gap-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-white font-bold text-sm uppercase tracking-wider">International Compliance</p>
                <div className="flex flex-col gap-2">
                  {["SLFRS/LKAS Standards", "ICASL Corporate Behavior Guidelines", "Global Data Privacy Acts"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-zinc-300 text-sm">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#2F3296]/20 text-[#2F3296] flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-white font-bold text-sm uppercase tracking-wider">Elite Industry Memberships</p>
                <div className="flex flex-wrap gap-3">
                  {["SLASSCOM", "AMCHAM", "ECCSL"].map((org) => (
                    <span key={org} className="inline-flex items-center px-4 py-2 bg-[#2F3296]/20 border border-[#2F3296]/40 text-[#2F3296] text-sm font-black rounded-xl">
                      {org}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#2F3296] rounded-2xl p-6">
                <p className="text-white font-bold text-sm uppercase tracking-wider mb-3">BPO as Growth Engine</p>
                <p className="text-white/75 text-sm leading-relaxed">
                  The BPO division has rapidly evolved into a primary revenue engine for the group,
                  contributing a dominant share of total consolidated group revenue through targeted
                  delivery in banking, finance, insurance, and energy sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Strategic Resource Allocation */}
      <section className="w-full bg-black relative overflow-hidden py-10 lg:py-15 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-white text-sm font-semibold tracking-[0.18em] uppercase mb-3">Framework</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Strategic Resource{" "}
              <span className="text-[#2F3296]">Allocation</span>
            </h2>
            <p className="text-zinc-400 text-base mt-4 max-w-2xl mx-auto">
              A disciplined resource allocation framework across all active subsidiaries based on four core guiding principles.
            </p>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* Flex-Grid responsive track layout container */}
          <div 
            ref={allocationScrollRef}
            onScroll={() => handleScrollTracking(allocationScrollRef, setActiveAllocation)}
            className="w-full flex lg:grid flex-row lg:grid-cols-2 gap-6 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0 items-stretch"
          >
            {ALLOCATION.map((item, index) => {
              const formattedNumber = String(index + 1).padStart(2, "0");
              
              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between gap-5 bg-[#2F3296]/20 border border-white/5 hover:border-[#2F3296]/60 rounded-3xl p-6 lg:p-8 transition-all duration-300 overflow-hidden cursor-default shadow-sm hover:shadow-[0_0_30px_rgba(47,50,150,0.15)] flex-shrink-0 w-[85%] sm:w-[48%] lg:w-full snap-center"
                >
                  {/* Giant Sliding Background Watermark Number */}
                    <span className="absolute -bottom-4 right-4 text-7xl lg:text-8xl font-black text-white/10 group-hover:text-[#2F3296]/80 leading-none select-none tracking-tighter transition-all duration-500 transform group-hover:-translate-y-3">
                      {formattedNumber}
                    </span>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#2F3296] group-hover:text-white group-hover:border-[#2F3296] transition-all duration-300 shadow-inner">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-bold text-base group-hover:text-[#2F3296] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed relative z-10">{item.body}</p>
                  <div className="mt-auto pt-3 border-t border-white/10">
                  </div>
                  {/* Micro Accent Edge Tracker line */}
                  <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#2F3296] to-transparent transition-all duration-500 rounded-b-3xl" />
                </div>
              );
            })}
          </div>

          {/* Mobile Indicators for Section 8 — Hidden on Desktop */}
          <div className="flex lg:hidden items-center justify-center gap-2 mt-6 w-full">
            {ALLOCATION.map((_, dotIdx) => (
              <div
                key={dotIdx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeAllocation === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — Key Risks & Mitigations */}
      <section className="w-full bg-white py-16 lg:py-20 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-3">Risk Management</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
              Key Risks &{" "}
              <span className="text-[#2F3296]">Operational Mitigations</span>
            </h2>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          <div className="flex flex-col gap-4">
            {RISKS.map((item, i) => (
              <div
                key={item.risk}
                onClick={() => setActiveRiskIndex(activeRiskIndex === i ? null : i)}
                className="group cursor-pointer bg-zinc-50 border border-zinc-300 hover:border-[#2F3296] rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Risk header */}
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2F3296]/10 text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-black font-bold text-sm lg:text-base group-hover:text-[#2F3296] transition-colors duration-200">
                      {item.risk}
                    </h3>
                  </div>
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full border-2 flex-shrink-0 transition-all duration-300 ${activeRiskIndex === i ? "border-[#2F3296] bg-[#2F3296] text-white rotate-180" : "border-zinc-300 text-zinc-400"}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Mitigation — expandable */}
                {activeRiskIndex === i && (
                  <div className="px-6 pb-5 border-t border-zinc-200">
                    <div className="flex items-start gap-3 mt-4">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#2F3296] text-xs font-bold uppercase tracking-wider mb-1">Mitigation Strategy</p>
                        <p className="text-zinc-600 text-sm leading-relaxed">{item.mitigation}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — Future Strategic Outlook */}
      <section className="w-full bg-white py-10 lg:py-10 px-6 lg:px-12 relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#2F3296] text-md font-semibold tracking-[0.18em] uppercase mb-3">Looking Ahead</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
              Future Strategic{" "}
              <span className="underline decoration-[#2F3296] underline-offset-4">Outlook</span>
            </h2>
            <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-zinc-400" />
          </div>

          <div className="relative w-full">
            <div 
              ref={futuretargetScrollRef}
              onScroll={() => handleScrollTracking(futuretargetScrollRef, setActiveFutureTarget)}
              className="flex lg:grid flex-row lg:grid-cols-4 gap-5 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0 items-stretch"
            >
              {FUTURE_TARGETS.map((target, index) => {
                const formattedNumber = String(index + 1).padStart(2, "0");
                
                return (
                  <div
                    key={target.brand}
                    className="group relative flex flex-col justify-between gap-6 rounded-3xl p-6 lg:p-8 border border-[#2F3296]/20 shadow-sm shadow-[#2F3296] transition-all duration-300 overflow-hidden text-left flex-shrink-0 w-[85%] sm:w-[48%] lg:w-auto snap-center"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2F3296] text-white group-hover:bg-zinc-300 group-hover:text-white transition-all duration-300">
                    {target.icon}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-[#2F3296] group-hover:bg-zinc-300 text-white group-hover:text-[#2F3296] text-xs font-bold rounded-full transition-all duration-300">
                        {target.timeline}
                      </span>
                    </div>
                    <div>
                      <p className="text-zinc-500 group-hover:text-black/40 text-xs font-semibold uppercase tracking-wider transition-colors duration-300">
                        {target.brand}
                      </p>
                      <h3 className="text-black group-hover:text-[#2F3296] font-black text-xl transition-colors duration-300">
                        {target.target}
                      </h3>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed transition-colors duration-300">
                      {target.detail}
                    </p>
                    <div className="mt-auto pt-1">
                      </div>
                    {/* Micro Accent Edge Tracker line path */}
                    <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#2F3296] to-transparent transition-all duration-500 rounded-b-3xl" />
                  </div>
                );
              })}
            </div>

            {/* Mobile Indicators for Section 10 — Hidden on Desktop */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-4 w-full">
              {FUTURE_TARGETS.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeFutureTarget === dotIdx ? "w-6 bg-[#2F3296]" : "w-1.5 bg-zinc-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — Call to Action */}
      <section className="w-full bg-zinc-800 py-10 px-6 lg:px-12 relative overflow-hidden">
            
        {/* Decorative background circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-10 right-40 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
            
          <div className="relative w-full max-w-4xl mx-auto text-center">
            
            {/* Eyebrow */}
            <p className="text-white text-md font-semibold tracking-[0.18em] uppercase mb-5">
              Be Part of HRTechz
            </p>
            
              {/* Heading */}
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Ready to be part of the{" "}
              <span className="text-[#2F3296] relative inline-block">
                HRTECH-Z growth story
              <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-white/40 rounded-full" />
              </span>
                ?
              </h2>
            
              {/* Subtext */}
              <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Get in Touch with services from HRTECHZ.
              </p>
            
              {/* CTA buttons */}
              <CTA_Buttons
              primaryText="Get in Touch"
              primaryHref="/contact"
              secondaryText="Explore Careers"
              secondaryHref="/about/careers"
              />
          </div>
      </section>

      <Footer />
    </div>
  );
}