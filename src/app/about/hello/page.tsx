"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CTA_Buttons from "@/components/CTA_button";
import Footer from "@/components/footer";

/* ── Contact Info ────────────────────────────── */
const CONTACT_INFO = [
  {
    label: "Email",
    value: "hello@hrtechz.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@hrtechz.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "011 274 6010",
    sub: "Feel free to call us",
    href: "tel:0112746010",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "01 Lake Cres, Colombo 02",
    sub: "Sri Lanka",
    href: "https://maps.app.goo.gl/MT49tnfR1BMA7PBs7",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM",
    sub: "Weekend support available",
    href: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

/* ── Service badges ──────────────────────────── */
const SERVICE_BADGES = [
  "Hiring Solutions",
  "Background Verification",
  "HR Technology",
  "IT Augmentation",
  "Performance Management",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-white"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      <Navbar />

      {/* HERO */}
<section className="w-full bg-zinc-900 relative overflow-hidden py-20 lg:py-18 px-6 lg:px-12">
    <div className="absolute -top-20 -right-30 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
    <div className="absolute -bottom-12 -left-28 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
    <div className="absolute top-30 right-20 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
        {/* Decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(47,50,150,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(47,50,150,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
{/* Breadcrumb — Hidden on mobile, flex on desktop */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-zinc-400"> 
          <Link href="/" className="hover:text-white transition-colors duration-200">
            Home
            </Link>
            <span>/</span>
            <span className="text-[#0911F8] font-semibold">Contact</span>
        </div>

  {/* Ambient glow blobs */}
  <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#2F3296]/20 blur-[120px] rounded-full pointer-events-none" />
  <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#2F3296]/10 blur-[100px] rounded-full pointer-events-none" />

  <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

    {/* Centered content */}
    <div className="flex flex-col gap-5 text-center items-center max-w-3xl mx-auto">

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-3">
        <span className="inline-block w-8 h-0.5 bg-[#2F3296]" />
        <p className="text-[#0911F8] text-sm font-semibold tracking-[0.18em] uppercase">
          Get in Touch
        </p>
        <span className="inline-block w-8 h-0.5 bg-[#2F3296]" />
      </div>

      {/* Headline */}
      <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase">
        Contact{" "}
        <span className="relative inline-block text-[#2F3296]">
          Us
          <span className="absolute left-0 -bottom-1 h-[4px] w-full bg-white/40 rounded-full" />
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-zinc-400 text-md leading-relaxed max-w-lg text-center">
        Get in touch with HRTECHZ. We're here to provide expert HR
        services — from talent acquisition to technology transformation.
      </p>

      {/* Service badges */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {SERVICE_BADGES.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-2 px-8 py-1.5 bg-[#2F3296]/15 border border-[#2F3296]/60 text-white/70 text-xs sm:text-sm font-semibold rounded-2xl lg:rounded-full w-full lg:w-auto min-h-[44px] lg:min-h-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F3296]" />
            {badge}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-4">
        <CTA_Buttons
          primaryText="Talk to an Expert"
          primaryHref="/consultation"
          secondaryText="Request a Demo"
          secondaryHref="/demo"
        />
      </div>
    </div>
  </div>
  </section>

      {/* SECTION 2 — Connect via */}
      <section className="w-full bg-zinc-50 py-16 px-6 lg:px-12 border-b border-zinc-200">
        <div className="w-full max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#2F3296] text-sm font-semibold tracking-[0.18em] uppercase mb-3">
              Connect With Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
              Multiple Ways to{" "}
              <span className="text-[#2F3296]">Reach Us</span>
            </h2>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#2F3296]" />
          </div>

          {/* Info cards — 4 col desktop, 2 col tablet, 1 col mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_INFO.map((info, i) => (
              <div
                key={info.label}
                className="group relative flex flex-col gap-4 bg-white border border-[#2F3296]/20 hover:border-[#2F3296] rounded-2xl p-6 shadow-md shadow-[#2F3296] transition-all duration-300 overflow-hidden"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-300 text-[#2F3296] group-hover:bg-[#2F3296] group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>

                {/* Label */}
                <p className="text-[#2F3296] text-xs font-bold uppercase tracking-widest">
                  {info.label}
                </p>

                {/* Value */}
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-black font-bold text-sm leading-snug hover:text-[#2F3296] transition-colors duration-200 relative z-10"
                  >
                    {info.value}
                    {info.sub && (
                      <span className="block text-zinc-500 font-normal mt-0.5">
                        {info.sub}
                      </span>
                    )}
                  </a>
                ) : (
                  <div className="relative z-10">
                    <p className="text-black font-bold text-sm leading-snug">{info.value}</p>
                    {info.sub && (
                      <p className="text-zinc-500 text-xs font-normal mt-0.5">{info.sub}</p>
                    )}
                  </div>
                )}

                {/* Bottom accent sweep */}
                  <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#2F3296] to-transparent transition-all duration-500 rounded-b-3xl" />
                </div>
            ))}
          </div>
        </div>
      </section>

      {/*  SECTION 3 — Map LEFT + send msg */}
      <section className="w-full bg-white py-16 lg:py-20 px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

            {/* ── LEFT: Google Map ── */}
            <div className="flex-1 flex flex-col gap-5">
              {/* Map header */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#2F3296] text-white flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-black font-bold text-xl">Our Location</h3>
                    <p className="text-zinc-400 text-sm">Visit us at our office in Colombo</p>
                  </div>
                </div>
                <div className="w-16 h-1 rounded-full bg-[#2F3296] mt-3" />
              </div>

              {/* Map iframe */}
              <div className="flex-1 min-h-[320px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm shadow-[#2F3296] hover:border-[#2F3296]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.1941094320698!2d79.85706936946673!3d6.917310030911024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250f570ee4b07%3A0x70dd97607288155!2sJFS%20Holdings!5e0!3m2!1sen!2slk!4v1783323643050!5m2!1sen!2slk" 
                width="600" 
                height="450" 
                style={{ border: 0, minHeight: "100%", display: "block" }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"/>
              </div>

              {/* Address badge below map */}
              <a
                href="https://maps.app.goo.gl/MT49tnfR1BMA7PBs7"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-3 bg-zinc-50 shadow-sm shadow-[#2F3296] border border-zinc-200 hover:border-[#2F3296] hover:bg-[#2F3296]/5 rounded-xl transition-all duration-300"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#2F3296]/10 text-[#2F3296] flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-black text-sm font-semibold group-hover:text-[#2F3296] transition-colors duration-200">
                    01 Lake Cres, Colombo 02, Sri Lanka
                  </p>
                  <p className="text-zinc-400 text-xs">Open in Google Maps →</p>
                </div>
              </a>
            </div>

            {/* Vertical divider — desktop only */}
            <div className="hidden lg:block w-px bg-zinc-300 self-stretch mx-2" />

            {/* ── RIGHT: Contact Form ── */}
            <div className="flex-1 flex flex-col gap-5">

              {/* Form header */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#2F3296] text-white flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-black font-bold text-xl">Send Us a Message</h3>
                    <p className="text-zinc-400 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                <div className="w-16 h-1 rounded-full bg-[#2F3296] mt-3" />
              </div>

              {submitted ? (
                /* Success state */
                <div className="flex-1 flex flex-col items-center justify-center gap-5 py-16 rounded-2xl bg-[#2F3296]/5 border border-[#2F3296]/20">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2F3296] text-white shadow-xl">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M6 16l7 7L26 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-black font-black text-xl mb-2">Message Sent!</h4>
                    <p className="text-zinc-500 text-sm max-w-xs">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" }); }}
                    className="px-6 py-2.5 bg-[#2F3296] text-white font-semibold text-sm rounded-xl hover:bg-[#1a1d6e] transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form fields */
                <div className="flex flex-col gap-4 flex-1 py-5 px-6 lg:px-12 bg-white border border-zinc-200 hover:border-[#2F3296] hover:bg-[#2F3296]/5 shadow-md shadow-[#2F3296] rounded-xl transition-all duration-300">

                  {/* Name + Company row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-black text-sm font-semibold">
                        Full Name <span className="text-[#2F3296]">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-[#2F3296] focus:bg-white rounded-xl text-sm text-black placeholder-zinc-400 outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-black text-sm font-semibold">
                        Company Name
                      </label>
                      <input
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-[#2F3296] focus:bg-white rounded-xl text-sm text-black placeholder-zinc-400 outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-black text-sm font-semibold">
                        Email Address <span className="text-[#2F3296]">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-[#2F3296] focus:bg-white rounded-xl text-sm text-black placeholder-zinc-400 outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-black text-sm font-semibold">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+94 123 456 789"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-[#2F3296] focus:bg-white rounded-xl text-sm text-black placeholder-zinc-400 outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Service select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-black text-sm font-semibold">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-[#2F3296] focus:bg-white rounded-xl text-sm text-black outline-none transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      <option value="hiring">Hiring Solutions</option>
                      <option value="testing">Background Verification</option>
                      <option value="technology">HR Technology</option>
                      <option value="augmentation">IT Augmentation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-black text-sm font-semibold">
                      Message <span className="text-[#2F3296]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-[#2F3296] focus:bg-white rounded-xl text-sm text-black placeholder-zinc-400 outline-none transition-all duration-200 resize-none flex-1"
                    />
                  </div>

                  {/* Required note */}
                  <p className="text-zinc-400 text-xs">
                    Fields marked with <span className="text-[#2F3296] font-bold">*</span> are required
                  </p>

                  {/* Submit button */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !formData.name || !formData.email || !formData.message}
                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 shadow-lg
                      ${
                        loading || !formData.name || !formData.email || !formData.message
                          ? "bg-zinc-200 text-zinc-400 cursor-not-allowed shadow-none"
                          : "bg-[#2F3296] text-white hover:bg-[#1a1d6e] hover:shadow-xl cursor-pointer"
                      }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="12" strokeLinecap="round" />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}