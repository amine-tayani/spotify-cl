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
            height="24"
            width="24"
            viewBox="0 0 24 24"
            className="text-neutral-400"
          >
            <path
              fill="currentColor"
              d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
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
