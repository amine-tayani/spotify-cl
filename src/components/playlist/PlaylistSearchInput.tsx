"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { useOnClickOutside } from "usehooks-ts";

function PlaylistSearchInput() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const searchRef = React.useRef(null);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useOnClickOutside(searchRef, () => setIsSearchOpen(false));

  return (
    <div className="relative flex items-center" ref={searchRef}>
      <button
        className="p-[6px] text-neutral-200 z-50"
        onClick={handleSearchClick}
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
      <input
        style={{
          padding: isSearchOpen ? "6px 0.5rem 6px 1.8rem" : "0",
          visibility: isSearchOpen ? "visible" : "hidden",
          opacity: isSearchOpen ? "1" : "0",
          width: isSearchOpen ? "150px" : "0px",
          transition: isSearchOpen
            ? "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            : "width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, padding 0.3s ease-in-out",
        }}
        type="text"
        className="absolute bg-neutral-800 text-neutral-200 placeholder:text-neutral-500 text-xs outline-none border-none rounded-sm"
        placeholder="Search Your Library"
      />
    </div>
  );
}

export default PlaylistSearchInput;
