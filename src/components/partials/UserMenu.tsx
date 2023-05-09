"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { useOnClickOutside } from "usehooks-ts";

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggleOpen = React.useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  return (
    <div ref={ref}>
      <button
        onClick={toggleOpen}
        className="focus:outline-none relative font-semibold rounded-full px-2.5 py-2 text-sm mr-2 mb-2 bg-black text-white text-center inline-flex items-center"
      >
        <Image
          className="rounded-full mr-2"
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1685&q=80"
          width={20}
          height={20}
          alt="user profile"
        />
        <span>mitomaru</span>
        <ChevronDownIcon width={17} />
      </button>
      {isOpen && (
        <div
          id="dropdownAvatar"
          className="z-10 divide-y absolute rounded-sm shadow-md w-40 overflow-hidden right-6 mt-1 top-12 text-xs bg-neutral-800 divide-neutral-700"
        >
          <ul className="py-2 text-sm text-neutral-200">
            <li>
              <Link
                href="#"
                className="flex px-4 justify-between py-2 hover:bg-neutral-900/70 hover:text-white"
              >
                <span>Account</span>
                <ArrowTopRightOnSquareIcon width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-neutral-900/70 hover:text-white"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex justify-between px-4 py-2 hover:bg-neutral-900/70 hover:text-white"
              >
                <span>Download</span>
                <ArrowTopRightOnSquareIcon width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-neutral-900/70 hover:text-white"
              >
                Settings
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <Link
              href="#"
              className="block px-4 py-2 text-sm hover:bg-neutral-900/70 text-neutral-200 hover:text-white"
            >
              Log out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
