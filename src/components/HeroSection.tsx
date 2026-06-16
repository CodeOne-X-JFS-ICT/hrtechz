import CTA_Buttons from "@/components/CTA_button";

const STATS = [
  { value: "10,000+", label: "Candidates Onboarded" },
  { value: "500+",    label: "Corporate Clients" },
  { value: "95%",     label: "Client Retention" },
  { value: "24/7",    label: "Digital Support" },
];

export default function HeroSection() {
  return (
    <section
      className="w-full bg-white text-center "
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      {/* ── Main hero content ── */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
        <div className="max-w-3xl mx-auto text-center">

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold uppercase leading-tight tracking-tight text-black mb-6">
  Transforming <span className="text-[#2F3296]">HR</span> for the{" "}
  <span className="relative inline-block text-[#2F3296]">
    Modern Workplace
    <span
      className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#2F3296] rounded-full"
      aria-hidden="true"
    />
  </span>
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
  );
}