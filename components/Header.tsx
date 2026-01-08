import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#E2E8F0] shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* BRAND */}
        <Link href="/" className="text-2xl font-black text-[#0B3A63] tracking-tight">
          Certif-Scope
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#334155]">
          <Link href="/#how" className="hover:text-[#1FB6C1] transition">How it Works</Link>
          <Link href="/why-required" className="hover:text-[#1FB6C1] transition">Why Required</Link>
          <Link href="/methodology" className="hover:text-[#1FB6C1] transition">Methodology</Link>
          <Link href="/verify" className="hover:text-[#1FB6C1] transition">Verify</Link>

          {/* PRIMARY CTA */}
          <Link
            href="/#assessment"
            className="ml-4 bg-[#1FB6C1] text-white px-5 py-2 rounded-lg shadow-sm hover:bg-[#17A2AC] transition"
          >
            Generate Attestation
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 text-[#0B3A63] border border-[#CBD5E1] rounded-lg"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-4 py-4 flex flex-col gap-4 text-sm font-semibold text-[#334155]">
          <Link href="/#how" onClick={() => setOpen(false)}>How it Works</Link>
          <Link href="/why-required" onClick={() => setOpen(false)}>Why Required</Link>
          <Link href="/methodology" onClick={() => setOpen(false)}>Methodology</Link>
          <Link href="/verify" onClick={() => setOpen(false)}>Verify</Link>

          <Link
            href="/#assessment"
            onClick={() => setOpen(false)}
            className="bg-[#1FB6C1] text-white text-center px-5 py-3 rounded-lg shadow hover:bg-[#17A2AC] transition mt-2"
          >
            Generate Attestation
          </Link>
        </div>
      )}
    </header>
  );
}
