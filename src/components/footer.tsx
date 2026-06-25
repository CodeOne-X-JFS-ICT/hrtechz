import Link from "next/link";
import Image from "next/image";

/* ─── Footer link columns ───────────────────── */
const FOOTER_LINKS = [
  {
    heading: "Solutions",
    links: [
      { label: "Hiring", href: "/solutions/hiring" },
      { label: "Testing", href: "/solutions/testing" },
      { label: "Technology", href: "/solutions/technology" },
    ],
  },
  {
    heading: "Subsidiaries",
    links: [
      { label: "JobFactory", href: "/subsidiaries/jobfactory" },
      { label: "Verifieze", href: "/subsidiaries/verifieze" },
      { label: "CodeOne-X", href: "/subsidiaries/codeonex" },
      { label: "SourceOne", href: "/subsidiaries/sourceone" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/insights/blog" },
      { label: "Case Studies", href: "/insights/case-studies" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/* ─── Social icons ──────────────────────────── */
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <div
      className="w-full"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      
      {/* FOOTER */}
      <footer className="w-full bg-black text-white">

        {/* ── Main footer content ── */}
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">

            {/* Brand column */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Logo */}
              <div className="relative w-44 h-12">
                <Image
                  src="/images/hrtechz-logo.png"
                  alt="HRTECHZ"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>

              {/* Tagline */}
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Empowering the Future of Work Through Hiring, Testing &
                Technology.
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href="tel:+94000000000"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  +94 (0) 11 2121 172
                </a>

                <a
                  href="mailto:info@hrtechz.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  info@hrtechz.com
                </a>

                <div className="flex items-start gap-3 text-zinc-400 text-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>No. 01, Lake Crescent,<br />Colombo 02, Sri Lanka</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-3 mt-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-zinc-400 hover:bg-[#2F3296] hover:text-white transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns — 2-Column Grid on Mobile, 4 columns inline on Desktop */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {FOOTER_LINKS.map((col) => (
                <div key={col.heading} className="flex flex-col gap-4">
                  <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                    {col.heading}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} HRTECHZ. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-zinc-500 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-500 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}