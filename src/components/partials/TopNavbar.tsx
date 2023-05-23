"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import UserMenu from "@/components/partials/UserMenu";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useScroll } from "@/hooks/useScroll";
import classNames from "classnames";

const TopNavbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isScrolling = useScroll();
  return (
    <div
      className={classNames(
        "flex items-center sticky top-0 z-20 justify-between h-20 mt-2 text-white transition-colors duration-300 ease-in-out sm:ml-72",
        {}
      )}
      style={{
        backdropFilter: pathname.startsWith("/playlist")
          ? "blur(20px)"
          : "blur(0px)",
      }}
    >
      <div className="flex ml-10 my-2">
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
