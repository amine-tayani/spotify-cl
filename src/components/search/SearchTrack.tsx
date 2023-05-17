"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { EllipsisHorizontalIcon, PlayIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const SearchTrack: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative px-3 rounded-md py-2 hover:bg-[--background-elevated-highlight] transition-all duration-300 ease-in-out min-w-[650px]"
    >
      <Link href="#">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <div className="relative flex justify-center items-center">
              <button className="absolute">
                <PlayIcon
                  width={20}
                  height={20}
                  className={` text-neutral-100 ${
                    isHovered ? "block opacity-100" : "hidden opacity-0"
                  }`}
                />
              </button>
              <Image
                width={180}
                height={180}
                className="w-10 h-10 rounded object-cover"
                src="https://i.scdn.co/image/ab67616100005174fbe071f5bc42f38d3485a29a"
                alt="Neil image"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium truncate text-white">
                夜に駆ける
              </p>
              <p className="text-[13px] mt-1 font-medium text-neutral-400 truncate">
                YAOSOBI
              </p>
            </div>
          </div>
          <div className=" flex items-center space-x-4 w-40 justify-self-end mx-4">
            <div className="">
              <HeartIcon
                width={20}
                height={20}
                className={`text-[--text-muted] hover:text-white ${
                  isHovered ? "block" : "hidden"
                }`}
              />
            </div>
            <div className="absolute right-8 text-neutral-400 text-sm tracking-tight font-medium">
              4:45
            </div>
            <div className="px-2">
              <EllipsisHorizontalIcon
                width={20}
                height={20}
                className={`text-[--text-muted] hover:text-white ${
                  isHovered ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SearchTrack;
