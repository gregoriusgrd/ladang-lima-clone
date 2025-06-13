"use client";

import Image from "next/image";
import Link from "next/link";

import { BsFillPlayCircleFill } from "react-icons/bs";

export default function VideoSection() {
  return (
    <section className="bg-white px-6 pb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        
        {/* Left */}
        <Link
          href="https://youtu.be/1jLPySqKjdU"
          target="_blank"
          className="group relative w-full max-w-[500px]"
        >
          <Image
            src="/home/video/Cover-Video-COMPRO.webp"
            alt="Video Thumbnail 1"
            width={528}
            height={595}
            className="rounded shadow-md transition duration-300 group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg transition group-hover:scale-105">
              <svg
                className="h-10 w-10 text-gray-800 "
                fill="currentcolor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Right */}
        <Link
          href="https://www.youtube.com/watch?v=OTrhopJB4ig"
          target="_blank"
          className="group relative w-full max-w-[500px]"
        >
          <Image
            src="/home/video/Cover-Video-PK.webp"
            alt="Video Thumbnail 2"
            width={528}
            height={595}
            className="rounded shadow-md transition duration-300 group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg transition group-hover:scale-105">
              <svg
                className="h-10 w-10 text-gray-800 "
                fill="currentcolor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
