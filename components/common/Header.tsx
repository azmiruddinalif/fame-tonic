"use client";

import { Logo } from "@/public/svg/Logo";
import Link from "next/link";
import GridRow from "@/components/common/GridRow";
import Container from "@/components/common/Container";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className="w-full bg-black text-white mt-2">
      <Container>
        <GridRow className="py-6 relative">
          <div className="col-span-12 md:col-span-5 md:col-start-2 flex justify-center md:justify-start">
            <Link href="/" className="text-3xl font-bold font-urbanist">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex col-span-5 justify-end">
            <nav className="flex gap-8 text-lg font-medium font-figTree text-ash">
              <Link href="/about">About us</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">
            <button aria-label="Open Menu">
              <HiMenu size={30} className="text-white" />
            </button>
          </div>
        </GridRow>
      </Container>
    </header>
  );
};

export default Header;
