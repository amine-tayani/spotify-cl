"use client";

import * as React from "react";
import Link from "next/link";

const MainContent: React.FC = () => {
  return (
    <div className="py-4 sm:ml-80">
      <section className="mb-2">
        <div className="flex items-center justify-between mx-4">
          <Link
            href="/"
            className="text-xl hover:underline-offset-2 hover:underline text-white font-bold"
          >
            Recently played
          </Link>
          <Link
            href="/"
            className="text-sm text-neutral-400 font-semibold tracking-tight hover:underline-offset-2 hover:underline mr-4"
          >
            Show all
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
