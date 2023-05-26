"use client";

import * as React from "react";
import classNames from "classnames";
import Link from "next/link";
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
        <div className=" fixed z-50 top-0 left-1/4 mx-6 mt-3">
          <div className="flex items-center space-x-2">
            <button className="p-2 flex items-center justify-center bg-[--text-bright-accent] rounded-full hover:scale-105 transition-all ease-in-out duration-300">
              <PlayIcon width={25} height={25} className="text-black" />
            </button>
            <h1 className="text-[1.3rem] font-bold text-white ">
              Jpop and Anime
            </h1>
          </div>
        </div>
      ) : null}
      <div className="flex items-center">
        <Link
          href="/download"
          className="text-sm font-bold border-none rounded-full relative inline-block text-center select-none mx-2 self-center hover:scale-105"
        >
          <span
            className={classNames(
              "flex px-4 py-1.5 text-neutral-50 rounded-full items-center justify-center",
              {
                "bg-[--background-elevated-base]":
                  pathname.startsWith("/search"),
                "bg-[--background-base]": !pathname.startsWith("/search"),
              }
            )}
          >
            <span className=" ">
              <svg
                fill="currentColor"
                className="text-white h-4 w-4 mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
              </svg>
            </span>
            <span>Install App</span>
          </span>
        </Link>

        <UserMenu />
      </div>
    </div>
  );
};

export default TopNavbar;
