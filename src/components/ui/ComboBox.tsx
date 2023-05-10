"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useOnClickOutside } from "usehooks-ts";

interface ComboBoxProps {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ComboBox: React.FC<ComboBoxProps> = ({
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Recents");
  const comboBoxRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(comboBoxRef, () => {
    setIsOpen(false);
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChoise = (choise: string) => {
    setSelected(choise);
    setIsOpen(false);
  };

  const comboChoises = ["Recents", "Recently added", "Alphabetical", "Creator"];

  return (
    <div ref={comboBoxRef} className="relative">
      <button
        onClick={handleOpen}
        className="flex items-center text-[13px] font-medium text-neutral-400 text-ellipsis overflow-hidden hover:text-neutral-200"
      >
        <span>{isSearchOpen ? selected.slice(0, 3) : selected}</span>
        {isOpen ? (
          <ChevronDownIcon width={20} height={20} />
        ) : (
          <ChevronUpIcon width={20} height={20} />
        )}
      </button>
      <div
        className={` bg-[#202020] rounded-md w-40 mt-8 right-0 absolute top-0${
          isOpen ? " block" : " hidden"
        }`}
      >
        <ul className="py-2 text-sm">
          <div className="text-xs py-3 px-4">
            <span className="text-neutral-400 font-semibold">Sort by</span>
          </div>
          {comboChoises.map((choise, idx) => (
            <li onClick={() => handleChoise(choise)} key={idx}>
              <button className="inline-flex w-full px-4 py-2.5 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-neutral-50">
                <span className="inline-flex items-center">{choise}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComboBox;
