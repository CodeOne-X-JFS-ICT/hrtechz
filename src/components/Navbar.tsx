"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "TESTING", href: "/testing" },
  /*{ label: "GENERATED AI", href: "/generated-ai" },
  { label: "PERFORMANCE MANAGEMENT", href: "/performance-management" },*/
  { label: "TECHNICAL", href: "/technical" },
  { label: "SUBSIDIARY", href: "/subsidiary" },
  {
    label: "ABOUT",
    href: "/about",
    children: [
      /*{ label: "Careers", href: "/about/careers" },
      { label: "Investing", href: "/about/investing" },
      { label: "Complain", href: "/about/complain" },*/
      { label: "Blog", href: "/about/blog" },
      /*{ label: "Case Studies", href: "/about/case-studies" },*/
      { label: "Leadership", href: "/about/leadership" },
      { label: "Hello", href: "/about/hello" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ── Desktop / Tablet navbar ── */}
      <nav className="w-full sticky top-0 z-50 flex items-center h-16 px-6 gap-4 bg-[#ffffff] shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
           style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center mr-8">
          <Link href="/" className="flex items-center">
            <Image src="/images/hrtechz-logo.png" alt="HRTechz" width={200} height={100} priority />
          </Link>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex flex-1 items-center justify-center list-none m-0 p-0 gap-0.5 flex-nowrap">
          {/*Temporary nav item right coner untill stage 2,3 */}
          <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 lg:py-28"></div>
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <li key={item.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className="flex items-center px-2.5 py-2 text-black text-[12px] font-semibold tracking-wider whitespace-nowrap no-underline rounded hover:text-#2F3296 hover:underline decoration-[#2F3296] transition-colors duration-150"
                >
                  {item.label}
                  <span className="text-[8px] opacity-75" aria-hidden="true">
                    {dropdownOpen ? "▲" : "▼"}
                  </span>
                </button>

                {dropdownOpen && (
                  <ul
                    role="menu"
                    className="absolute top-[calc(100%+8px)] left-0 min-w-[170px] bg-white border-t-[3px] border-[#2F3296] rounded-b-md shadow-[0_8px_24px_rgba(0,0,0,0.18)] list-none m-0 py-1.5 z-[200]"
                  >
                    {item.children.map((child) => (
                      <li key={child.label} role="none">
                        <Link
                          href={child.href}
                          role="menuitem"
                          onClick={() => setDropdownOpen(false)}
                          className="block px-[18px] py-2 text-black text-[13px] font-medium no-underline hover:bg-[#2F3296] hover:text-white transition-colors duration-100"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center px-2.5 py-2 text-black text-[12px] font-semibold tracking-wider whitespace-nowrap no-underline rounded hover:text-[#2F3296] hover:underline decoration-[#2F3296] transition-colors duration-150"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Login — desktop
        <div className="hidden lg:flex flex-shrink-0 items-center gap-2 ml-auto">
          <span className="text-[#2F3296] text-xs font-semibold tracking-wider whitespace-nowrap">
            Log in
          </span>
          <div className="flex items-center gap-0.5 border border-[#2F3296] hover:bg-[#ffffff] rounded-md px-1.5 py-0.5">
            <Link href="/login/corporate" className="text-[#2F3296] no-underline text-xs font-medium px-1.5 py-1 rounded hover:bg-[#2F3296] hover:text-[#ffffff] transition-colors duration-100">
              Corporate
            </Link>
            <span className="text-black/40 text-xs" aria-hidden="true">|</span>
            <Link href="/login/public" className="text-[#2F3296] no-underline text-xs font-medium px-1.5 py-1 rounded hover:bg-[#2F3296] hover:text-[#ffffff] transition-colors duration-100">
              Public
            </Link>
          </div>
        </div> */}

        {/* Hamburger — mobile */}
        <button
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1.5 ml-auto"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="block w-6 h-0.5 bg-black rounded" />
          <span className="block w-6 h-0.5 bg-black rounded" />
          <span className="block w-6 h-0.5 bg-black rounded" />
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-[#ffffff] border-t border-white/15 py-3"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
        >
          <ul className="list-none m-0 p-0">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    onClick={() => setMobileAboutOpen((v) => !v)}
                    className="flex justify-between items-center w-full px-6 py-3 text-black text-[13px] font-semibold tracking-wider bg-transparent border-0 cursor-pointer text-left hover:bg-white/10 transition-colors duration-100"
                  >
                    {item.label}
                    <span className="text-[10px]">{mobileAboutOpen ? "▲" : "▼"}</span>
                  </button>
                  {mobileAboutOpen && (
                    <ul className="list-none m-0 p-0 bg-black/20">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-10 py-2.5 text-[#2F3296] text-[13px] no-underline bg-zinc-5 transition-colors duration-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3 text-black text-[13px] font-semibold tracking-wider no-underline hover:bg-[#2F3296] hover:text-#2F3296 transition-colors duration-100"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Login — mobile
          <div className="flex items-center gap-2 px-6 pt-3 mt-1 border-t border-[#2F3296]/15 text-black text-[13px]">
            <span className="font-semibold">Log in:</span>
            <Link href="/login/corporate" onClick={() => setMobileOpen(false)} className="text-[#2F3296] no-underline text-[13px] px-1.5 py-1 rounded hover:bg-white/20 transition-colors duration-100">
              Corporate
            </Link>
            <span className="text-white/50" aria-hidden="true">|</span>
            <Link href="/login/public" onClick={() => setMobileOpen(false)} className="text-[#2F3296] no-underline text-[13px] px-1.5 py-1 rounded hover:bg-white/20 transition-colors duration-100">
              Public
            </Link>
          </div> */}
        </div>
      )}
    </>
  );
}