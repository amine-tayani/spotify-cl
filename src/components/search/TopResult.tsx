"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const TopResult: React.FC = () => {
  return (
    <section className="p-8 md:p-12 lg:col-span-3">
      <h1 className=" text-white text-2xl font-bold mb-4">Top result</h1>
      <Link href="#">
        <div className="space-y-3 p-6 bg-[--background-black] hover:bg-[--background-elevated-base] rounded-lg transition-colors duration-300 ease-in-out">
          <Image
            src="https://i.scdn.co/image/ab67616100005174fbe071f5bc42f38d3485a29a"
            alt="Search image"
            width={180}
            height={180}
            className="w-24 h-24 rounded-full"
          />
          <h2 className="text-3xl text-white font-bold">YOASOBI</h2>
          <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-neutral-50 hover:text-white bg-[--background-base] rounded-full">
            Artist
          </span>
        </div>
      </Link>
    </section>
  );
};

export default TopResult;
