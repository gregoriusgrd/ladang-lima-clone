"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NavbarDark() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if(dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setProductMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return() => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  })

  return (
    <header className="top-0 z-50 w-full bg-[rgba(0,_0,_0,_0.5)]">
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
          <svg
            width="40"
            height="14"
            viewBox="0 0 46 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="1"
              x2="45.5"
              y2="1"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="0.5"
              y1="13"
              x2="45.5"
              y2="13"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="font-raleway hidden space-x-8 pr-6 font-medium text-black uppercase md:flex">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>

          {/* Dropdown disini */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductMenuOpen(!productMenuOpen)}
              className="font-raleway cursor-pointer font-medium text-white uppercase"
            >
              Our Products
            </button>
            {productMenuOpen && (
              <div className="absolute left-0 z-50 mt-2 min-w-[250px] space-y-2 rounded-md bg-white p-4 shadow-md">
                <Link
                  href="/our-products/flour"
                  className="block w-full rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Gluten Free Flour
                </Link>
                <Link
                  href="#"
                  className="block w-full rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Gluten Free Cookies
                </Link>
                <Link
                  href="#"
                  className="block w-full rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Gluten Free Noodle
                </Link>
                <Link
                  href="#"
                  className="block w-full rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Gluten Free Pasta
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog">Article</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="https://career.ladanglima.com">Career With Us</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="space-y-3 border-t border-gray-200 bg-white px-6 py-4 text-gray-700 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <details>
            <summary className="cursor-pointer">Our Products</summary>
            <div className="mt-2 space-y-2 pl-4">
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
