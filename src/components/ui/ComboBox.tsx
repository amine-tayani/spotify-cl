"use client";

import * as React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useOnClickOutside } from "usehooks-ts";

const ComboBox: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const comboBoxRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(comboBoxRef, () => {
    setIsOpen(false);
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={comboBoxRef} className="relative">
      <button
        onClick={handleOpen}
        className="flex items-center text-sm font-medium text-center text-neutral-500 text-ellipsis overflow-hidden mb-2"
      >
        <span>Recents</span>
        <ChevronDownIcon width={20} height={20} />
      </button>
      <div
        className={` bg-neutral-800 rounded-sm w-36 right-6 absolute top-0${
          isOpen ? " block" : " hidden"
        }`}
      >
        <ul className="py-2 text-sm text-neutral-400">
          <span className="px-4 py-2 text-xs">sort by</span>

          <li>
            <button className="inline-flex w-full px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-500 hover:text-neutral-50">
              <span className="inline-flex items-center">Recents</span>
            </button>
          </li>
          <li>
            <button className="inline-flex w-full px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-500 hover:text-neutral-50">
              <span className="inline-flex items-center">Recently added</span>
            </button>
          </li>
          <li>
            <button className="inline-flex w-full px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-500 hover:text-neutral-50">
              <span className="inline-flex items-center">Alphabetical</span>
            </button>
          </li>
          <li>
            <button className="inline-flex w-full px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-500 hover:text-neutral-50">
              <span className="inline-flex items-center">Creator</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComboBox;
