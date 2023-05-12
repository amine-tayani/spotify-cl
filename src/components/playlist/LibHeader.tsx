"use client";

import * as React from "react";
import Link from "next/link";
import { PlusIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const LibHeader: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-2">
        <Link
          href="#"
          className="text-[--text-muted] flex items-center text-sm font-semibold hover:text-white transition-colors duration-300 ease-in-out"
        >
          <svg
            className="w-7 h-7"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
          >
            <path
              d="M21 7.6v12.8a.6.6 0 01-.6.6H7.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 4H4.6a.6.6 0 00-.6.6V18M12.909 11.545a.6.6 0 00-.909.515v3.88a.6.6 0 00.909.515l3.233-1.94a.6.6 0 000-1.03l-3.233-1.94z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2">Your Library</span>
        </Link>
        <div className="inline-flex space-x-1">
          <Link
            href="#"
            className="text-neutral-300 hover:text-white p-2 hover:bg-neutral-800 rounded-full transition duration-300 ease-in-out"
          >
            <PlusIcon width={20} height={20} />
          </Link>
          <Link
            href="#"
            className="text-neutral-300 hover:text-white p-2 hover:bg-neutral-800 rounded-full transition duration-300 ease-in-out"
          >
            <ArrowRightIcon width={20} height={20} />
          </Link>
        </div>
      </div>
      <Link href="#" className="mt-6 mb-3 mx-2 text-[0.875rem]">
        <span className=" px-2.5 py-2 w-[70px] font-[400] text-center rounded-full bg-neutral-800 text-neutral-50 hover:bg-neutral-800/80 hover:text-white ">
          Playlists
        </span>
      </Link>
    </>
  );
};

export default LibHeader;
