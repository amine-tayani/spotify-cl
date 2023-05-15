"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const SearchTrack: React.FC = () => {
  return (
    <li className="py-2">
      <Link href="#">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              width={180}
              height={180}
              className="w-10 h-10 rounded object-cover"
              src="https://i.scdn.co/image/ab67616100005174fbe071f5bc42f38d3485a29a"
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-full">
            <p className="text-sm font-medium truncate text-white">
              夜に駆ける
            </p>
            <p className="text-[13px] mt-1 font-medium text-neutral-400 truncate">
              YAOSOBI
            </p>
          </div>
          <div className="inline-flex items-center text-neutral-400 text-sm tracking-tight font-medium">
            4:45
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SearchTrack;
