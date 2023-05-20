"use client";

import React from "react";
import { PlayIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

const PlaylistActionBar: React.FC = () => {
  return (
    <div className="flex bg-[#03232c] space-x-6 items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-[calc(100vw-300px)] mx-auto relative z-10">
      <div>
        <button className="p-3.5 bg-green-500 rounded-full hover:scale-105 transition-all ease-in-out duration-300 delay-150">
          <PlayIcon width={30} height={30} className="text-neutral-900" />
        </button>
      </div>
      <button>
        <HeartIcon
          width={40}
          height={40}
          className="text-neutral-400 hover:text-white transition-all ease-in-out duration-300 "
        />
      </button>
      <button>
        <EllipsisHorizontalIcon
          width={35}
          height={35}
          className="text-neutral-500 hover:text-white transition-all ease-in-out duration-300 "
        />
      </button>
    </div>
  );
};

export default PlaylistActionBar;
