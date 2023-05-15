"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import PlaylistSearchInput from "./PlaylistSearchInput";
import ComboBox from "../ui/ComboBox";
import LibHeader from "./LibHeader";
import { SpeakerWaveIcon } from "@heroicons/react/20/solid";

const LibraryContainer: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  return (
    <section className="flex flex-col mt-2 bg-[--background-base] rounded-lg px-2 py-3 min-h-[540px]">
      <LibHeader />
      <div className="flex justify-between items-center relative mt-2">
        <PlaylistSearchInput
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
        />
        <ComboBox
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
        />
      </div>

      <div className="mt-2">
        <ul role="playlist">
          <li
            role="listItem"
            className="p-2 rounded-lg hover:bg-[--background-dark-gray]"
          >
            <Link href="/playlist">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    width={180}
                    height={180}
                    className="w-12 h-12 rounded-lg"
                    src="https://mosaic.scdn.co/640/ab67616d00001e023370924567a0bf816d388653ab67616d00001e0243833c08481a3a77ba94987cab67616d00001e02cb6080eae6c43b7ed1bb44b4ab67616d00001e02f98871b721be4cd034a3904f"
                    alt="playlist image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-white">
                    音楽
                  </p>
                  <p className="text-[13px] font-medium text-neutral-400 truncate ">
                    Playlist <span className="font-bold text-lg">.</span> amine
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-green-500">
                  <SpeakerWaveIcon className="w-5 h-5 mr-2" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LibraryContainer;
