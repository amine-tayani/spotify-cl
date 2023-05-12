"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import UserMenu from "@/components/partials/UserMenu";

const TopNavbar: React.FC = () => {
  const [isSticky, setIsSticky] = React.useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div
      className="flex items-center z-50 mt-2 justify-between transition-colors duration-300 ease-in-out py-2 sm:ml-72 text-white sticky top-0 left-0"
      style={
        isSticky ? { backgroundColor: "#000" } : { backgroundColor: "#121212" }
      }
    >
      <div className="ml-10 my-2">
        <button
          onClick={() => router.back()}
          className="inline-flex justify-center items-center p-1 bg-[var(--background-dark-gray)] hover:bg-[var(--background-elevated-highlight)] hover:text-white text-neutral-400 rounded-full mr-2"
        >
          <ChevronLeftIcon width={25} />
        </button>
        <button
          onClick={() => router.forward()}
          className="inline-flex justify-center items-center p-1 bg-[var(--background-dark-gray)] hover:bg-[var(--background-elevated-highlight)] hover:text-white rounded-full text-neutral-400"
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
