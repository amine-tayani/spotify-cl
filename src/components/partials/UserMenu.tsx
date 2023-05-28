"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { useOnClickOutside } from "usehooks-ts";
import { useSession, signOut } from "next-auth/react";

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);
  const { data: session } = useSession();

  //Add required to useSession so the authentification works

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggleOpen = React.useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  return (
    <div ref={ref}>
      <button className="relative mt-1.5 mr-6" onClick={toggleOpen}>
        <figure className="w-8 h-8 mr-1 relative inline-block" title="amine">
          <div className="w-8 h-8" style={{ insetInlineStart: "0px" }}>
            <Image
              className="rounded-full h-full w-full object-cover object-center select-none"
              src="https://i.scdn.co/image/ab6775700000ee85e4f4b98f1b3ee0e84d10026e"
              width={180}
              height={180}
              alt="user profile"
            />
          </div>
        </figure>
      </button>

      {isOpen && (
        <div
          id="dropdownAvatar"
          className="z-10 divide-y absolute rounded-sm shadow-md w-40 overflow-hidden right-6 mt-3 top-12 text-xs bg-[--background-black] divide-neutral-700"
        >
          <ul className="py-2 text-sm text-neutral-200">
            <li>
              <Link
                href="#"
                className="flex px-4 justify-between py-2 hover:bg-[--background-elevated-base] hover:text-white"
              >
                <span>{session?.user?.name}</span>
                <ArrowTopRightOnSquareIcon width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[--background-elevated-base] hover:text-white"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex justify-between px-4 py-2 hover:bg-[--background-elevated-base] hover:text-white"
              >
                <span>Download</span>
                <ArrowTopRightOnSquareIcon width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[--background-elevated-base] hover:text-white"
              >
                Settings
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <Link
              onClick={() => signOut()}
              href="#"
              className="block px-4 py-2 text-sm hover:bg-[--background-elevated-base] text-neutral-200 hover:text-white"
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
