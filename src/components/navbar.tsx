"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setProductMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <header className="top-0 z-50 w-full bg-[rgba(0,_0,_0,_0.1)]">
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

        {/* Mobile strip buton */}
        <button
          className="md:hidden cursor-pointer text-white"
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
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="0.5"
              y1="13"
              x2="45.5"
              y2="13"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="font-raleway hidden space-x-8 pr-6 font-medium text-white uppercase md:flex">
          <Link href="/" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Home</Link>
          <Link href="/about-us" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About Us</Link>

          {/* Dropdownn */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductMenuOpen(!productMenuOpen)}
              className="cursor-pointer uppercase relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
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
                  href="/our-products/cookies"
                  className="block w-full rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Gluten Free Cookies
                </Link>
                <Link
                  href="/our-products/noodle"
                  className="block w-full rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Gluten Free Noodle
                </Link>
                <Link
                  href="/our-products/pasta"
                  className="block w-full rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Gluten Free Pasta
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog-list" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Blog List</Link>
          <Link href="/contact-us" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact Us</Link>
        </nav>
      </div>

      {/* Mobile nav portfolio */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] right-6 z-50 w-40 rounded-md border border-gray-600 bg-gray-600 text-white shadow-md md:hidden">
          <ul className="flex flex-col py-2 text-center">
            <li className="border-b border-gray-700 py-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="border-b border-gray-700 py-2">
              <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="border-b border-gray-700 py-2">
              <details className="group">
                <summary className="cursor-pointer">Our Products</summary>
                <div className="mt-2 space-y-1 text-sm text-white">
                  <Link
                    href="/our-products/flour"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    Flour
                  </Link>
                  <Link
                    href="/our-products/cookies"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    Cookies
                  </Link>
                  <Link
                    href="/our-products/noodle"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    Noodle
                  </Link>
                  <Link
                    href="/our-products/pasta"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    Pasta
                  </Link>
                </div>
              </details>
            </li>
            <li className="border-b border-gray-700 py-2">
              <Link href="/blog-list" onClick={() => setMobileMenuOpen(false)}>
                Blog List
              </Link>
            </li>
            <li className="border-b border-gray-700 py-2">
              <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
