"use client";

import * as React from "react";
import Link from "next/link";
import {
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import {
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  Bars3BottomLeftIcon,
  HomeIcon as HomeIconOutline,
} from "@heroicons/react/24/outline";
import LibraryContainer from "@/components/ui/LibraryContainer";

type NavLink = {
  href: string;
  name: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
};

const navLinks: NavLink[] = [
  {
    href: "/",
    name: "Home",
    icon: <HomeIconOutline width={28} />,
    activeIcon: <HomeIconSolid width={28} />,
  },
  {
    href: "/search",
    name: "Search",
    icon: <MagnifyingGlassIconOutline width={30} />,
    activeIcon: <MagnifyingGlassIconSolid width={28} />,
  },
];

const Sidenav: React.FC = () => {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  };

  return (
    <div>
      <button className="inline-flex items-center p-2 mt-2 ml-4 text-xs font-semibold text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <Bars3BottomLeftIcon width={25} />
      </button>

      <aside className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-2 overflow-y-auto bg-black">
          <ul className="space-y-5 font-medium bg-neutral-900 rounded-lg p-6">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${
                      isActive ? "text-neutral-50" : "text-neutral-400"
                    } flex items-center font-semibold hover:text-white transition-colors duration-280 delay-100 ease-in-out`}
                  >
                    {isActive ? link.activeIcon : link.icon}
                    <span className="ml-4">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <LibraryContainer />
        </div>
      </aside>
    </div>
  );
};

export default Sidenav;
