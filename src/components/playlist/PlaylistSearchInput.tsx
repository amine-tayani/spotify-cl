"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { useOnClickOutside } from "usehooks-ts";

interface PlaylistSearchInputProps {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaylistSearchInput: React.FC<PlaylistSearchInputProps> = ({
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const searchRef = React.useRef<HTMLDivElement>(null);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    searchRef?.current?.focus();
  };

  useOnClickOutside(searchRef, () => setIsSearchOpen(false));

  return (
    <div className="mx-2 relative flex items-center" ref={searchRef}>
      <button
        className="p-[6px] text-neutral-200 z-50"
        onClick={handleSearchClick}
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
      <input
        style={{
          padding: isSearchOpen ? "10px 1rem 10px 2rem" : "0",
          visibility: isSearchOpen ? "visible" : "hidden",
          opacity: isSearchOpen ? "1" : "0",
          width: isSearchOpen ? "170px" : "0px",
          transition: isSearchOpen
            ? "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            : "width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, padding 0.3s ease-in-out",
        }}
        type="text"
        className="absolute bg-neutral-800 text-neutral-200 placeholder:text-neutral-500 text-xs outline-none border-none rounded-md "
        placeholder="Search Your Library"
      />
    </div>
  );
};

export default PlaylistSearchInput;
