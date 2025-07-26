"use client";

import { Logo } from "@/public/svg/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold font-urbanist tracking-wide leading-tight"
        >
          <Logo />
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-sm font-medium text-white">
          <Link href="/about" className="hover:text-accent transition">
            About us
          </Link>
          <Link href="/contact" className="hover:text-accent transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
