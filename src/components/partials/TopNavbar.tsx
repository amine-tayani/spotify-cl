"use client";

import * as React from "react";
import classNames from "classnames";
import { useRouter, usePathname } from "next/navigation";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useScroll from "@/hooks/useScroll";
import UserMenu from "@/components/partials/UserMenu";

const TopNavbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const scrolled = useScroll(10);

  return (
    <div
      className={classNames(
        "flex items-center sticky top-0 z-20 justify-between h-16 text-white transition-colors duration-300 ease-in-out sm:ml-72",
        {
          "bg-[#03232c]": scrolled && pathname.startsWith("/playlist"),
          "bg-[--background-black]":
            scrolled && !pathname.startsWith("/playlist"),
          "bg-transparent": !scrolled && !pathname.startsWith("/playlist"),
        }
      )}
    >
      <div className="flex ml-10">
        <button
          onClick={() => router.back()}
          className="flex justify-center items-center w-8 h-8 bg-[--bg-card-base] hover:bg-[--background-elevated-base] hover:text-white text-neutral-400 rounded-full mr-2"
        >
          <ChevronLeftIcon width={25} />
        </button>
        <button
          onClick={() => router.forward()}
          className="flex justify-center items-center w-8 h-8 bg-[--bg-card-base] hover:bg-[--background-elevated-base] hover:text-white text-neutral-400 rounded-full"
        >
          <ChevronRightIcon width={25} />
        </button>
      </div>
      {scrolled && pathname.startsWith("/playlist") ? (
        <div className=" fixed z-50 top-0 left-1/4 mx-6 mt-4">
          <div className="flex items-center space-x-2">
            <button className="p-2.5 flex items-center justify-center bg-[--text-bright-accent] rounded-full hover:scale-105 transition-all ease-in-out duration-300">
              <PlayIcon width={25} height={25} className="text-black" />
            </button>
            <h1 className="text-[1.5rem] font-bold text-white ">
              Jpop and Anime
            </h1>
          </div>
        </div>
      ) : null}
      <div className="inline-flex mr-4">
        <button className="focus:outline-none font-bold tracking-wide hover:scale-105 hover:bg-neutral-100 rounded-full text-[13px] px-3 py-1.5 mr-2 mb-2 bg-neutral-50 text-neutral-950 ">
          Upgrade
        </button>
        <UserMenu />
      </div>
    </div>
  );
};

export default TopNavbar;
