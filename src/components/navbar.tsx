import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 z-50 bg-[rgba(0,_0,_0,_0.5)]">
      <div className="flex items-center justify-between px-10 py-2">
        {/* Logo */}
        <Link href="#">
          <Image
            src="/navbar/logo_white_180x100.png"
            alt="Ladang Lima Logo"
            width={140}
            height={80}
            className="h-18 w-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="40" height="14" viewBox="0 0 46 14" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="1" x2="45.5" y2="1" stroke="black" strokeWidth="2" />
            <line x1="0.5" y1="13" x2="45.5" y2="13" stroke="black" strokeWidth="2" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="font-koho hidden md:flex space-x-8 font-medium text-white uppercase pr-6">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <div className="relative group">
            <span className="cursor-pointer">Our Products</span>
            <div className="absolute hidden group-hover:block bg-white shadow-md p-4 mt-2 rounded-md space-y-2">
              <Link href="/flour">Gluten Free Flour</Link>
              <Link href="/cookies">Gluten Free Cookies</Link>
              <Link href="/noodle">Gluten Free Noodle</Link>
              <Link href="/pasta">Gluten Free Pasta</Link>
            </div>
          </div>
          <Link href="/blog">Article</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="https://career.ladanglima.com">Career With Us</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <details>
            <summary className="cursor-pointer">Our Products</summary>
            <div className="pl-4 mt-2 space-y-2">
              <Link href="/flour">Gluten Free Flour</Link>
              <Link href="/cookies">Gluten Free Cookies</Link>
              <Link href="/noodle">Gluten Free Noodle</Link>
              <Link href="/pasta">Gluten Free Pasta</Link>
            </div>
          </details>
          <Link href="/blog">Article</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="https://career.ladanglima.com">Career With Us</Link>
        </nav>
      )}
    </header>
  );
}
