"use client";

import Link from "next/link";
import * as React from "react";

const LibraryContainer: React.FC = () => {
  return (
    <div className="mt-2 font-medium bg-neutral-900 rounded-lg p-6">
      <Link
        href="#"
        className="text-neutral-400 flex items-center font-semibold hover:text-white transition-colors duration-280 delay-100 ease-in-out"
      >
        <svg
          className="w-7 h-7 text-neutral-300"
          strokeWidth="1.4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
        >
          <path
            d="M21 7.6v12.8a.6.6 0 01-.6.6H7.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 4H4.6a.6.6 0 00-.6.6V18M12.909 11.545a.6.6 0 00-.909.515v3.88a.6.6 0 00.909.515l3.233-1.94a.6.6 0 000-1.03l-3.233-1.94z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-4 text-sm">Your Library</span>
      </Link>
    </div>
  );
};

export default LibraryContainer;
