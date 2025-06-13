"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-raleway bg-white px-6 py-20 text-black text-sm md:text-base">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-y-12 px-4">
        {/* Column 1 */}
        <div>
          <h2 className="mb-4 text-xl md:text-2xl font-semibold">
            <Link href="mailto:export@ladanglima.com">
              export@ladanglima.com
            </Link>
          </h2>
          <p className="max-w-sm text-gray-600 leading-relaxed">
            Indonesia’s Pioneer of Gluten Free food products since 2013, Ladang Lima provides tasty and healthy gluten free foods from sourced local cassava into your table.
          </p>
        </div>

        {/* Column 2 */}
        <div className="md:border-l md:pl-6 space-y-3 mt-8 md:mt-0 text-gray-700">
          <p>
            <Link
              href="https://maps.app.goo.gl/RQiwS9WxE4oeN1nC9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              Rungkut Industri III No. 30A, Kel. Kutisari, Kec. Tenggilis Mejoyo, Kota Surabaya, East Java, Indonesia (60291)
            </Link>
          </p>
          <p>
            <Link href="tel:+623121000733" className="text-black">
              +623121000733
            </Link>{" "}
            <span className="text-gray-400">(office)</span>
          </p>
          <p>
            <Link href="tel:+6281394429393" className="text-black">
              +6281394429393
            </Link>{" "}
            <span className="text-gray-400">(export)</span>
          </p>
          <p>
            <Link href="mailto:export@ladanglima.com" className="text-black">
              export@ladanglima.com
            </Link>
          </p>
          <p className="pt-4 text-black">
            © 2024{" "}
            <Link
              href="https://ladanglima.com"
              className="hover:underline"
              target="_blank"
            >
              PT Ladang Sehat Indonesia
            </Link>
          </p>
        </div>

        {/* Column 3 */}
        <div className="md:border-l md:pl-6 space-y-3 mt-8 md:mt-0 text-gray-700">
          <p>
            <Link href="https://www.instagram.com/ladanglima.id/" target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
          </p>
          <p>
            <Link href="https://www.linkedin.com/company/qode-themes" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </p>
          <p>
            <Link href="https://www.youtube.com/@ladanglima.id" target="_blank" rel="noopener noreferrer">
              YouTube
            </Link>
          </p>
          <p>
            <Link href="https://www.behance.net/qodeinteractive" target="_blank" rel="noopener noreferrer">
              TikTok
            </Link>
          </p>
          <p className="pt-2">
            <a href="https://bridge511.qodeinteractive.com/contact/">Join our newsletter</a>
          </p>
          <p>
            <Link href="https://ladanglima.com/privacy-policy/">Privacy Policy</Link>
          </p>
          <p>
            <Link href="https://ladanglima.com/terms-and-conditions/">Terms and Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
