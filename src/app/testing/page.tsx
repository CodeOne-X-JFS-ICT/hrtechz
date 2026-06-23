import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTA_Buttons from "@/components/CTA_button";

/* Trust badges */
const TRUST_BADGES = [
  { label: "Background Verified", icon: "✓" },
  { label: "Identity Validated", icon: "✓" },
  { label: "Compliant Processes", icon: "✓" },
  { label: "Accurate & Reliable", icon: "✓" },
];


export default function TestingPage() {
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
    </div>
  );
}