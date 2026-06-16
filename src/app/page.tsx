"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTA_Buttons from "@/components/CTA_button";
import React from "react";

export default function Home() {
  const STATS = [
  { value: "10,000+", label: "Candidates Onboarded" },
  { value: "500+",    label: "Corporate Clients" },
  { value: "95%",     label: "Client Retention" },
  { value: "24/7",    label: "Digital Support" },
  ];

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

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
      className="w-full bg-white text-center "
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
    
      {/* ── Main hero content ── */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
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
      <div className="w-full border-t border-zinc-100 bg-zinc-50">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  i !== STATS.length - 1
                    ? "lg:border-r lg:border-zinc-200 lg:pr-8"
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
      className="w-full bg-black py-20 px-6 lg:px-12"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.title}
              className="group relative flex flex-col bg-[#2F3296]/20 hover:bg-white/80 border border-white/20 hover:border-white rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden"
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
              <p className="text-white/80 group-hover:text-zinc-800 text-sm leading-relaxed mb-5 transition-colors duration-300">
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
      </div>
    </section>
    
    {/* Secsion 3 - Subsidiaries */}
    <section
      className="w-full bg-white py-20 px-6 lg:px-12"
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

        {/* ── 2×2 Card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SUBSIDIARIES.map((sub) => (
            <div
              key={sub.name}
              className="group flex flex-col border border-zinc-200 bg-black hover:border-[#2F3296] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Top coloured bar */}
              <div className="h-1.5 w-full bg-[#2F3296] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col flex-1 p-8">

                {/* Logo placeholder */}
                <div className="w-full h-20 flex items-center justify-center mb-6">
                  <div className="relative w-100 h-28 rounded-lg flex items-center justify-center">
                    <Image
                      src={sub.logo}
                      alt={`${sub.name} logo`}
                      fill
                      className="object-contain p-2"
                      onError={(e) => {
                        // Fallback: hide broken image, show text
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Company name */}
                <h3 className="text-xl font-bold text-white/50 group-hover:text-[#2F3296] mb-3 transition-colors duration-300">
                  {sub.name}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">
                  {sub.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-zinc-100 mb-6" />

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
      </div>
    </section>
    </>
  );
}
