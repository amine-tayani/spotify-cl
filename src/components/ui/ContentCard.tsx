"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { RecentlyPlayedTrack } from "./GetStartedSection";
import { PlayIcon } from "@heroicons/react/24/solid";

interface Props {
  track: RecentlyPlayedTrack;
}

const ContentCard: React.FC<Props> = ({ track }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={`/track/${track.id}`}
      key={track.id}
      className="z-[1] group flex flex-col rounded-lg justify-center bg-[--bg-card-base] hover:bg-[--background-elevated-base] transition-colors ease-in-out duration-300 shadow-md pb-4"
    >
      <div className="p-4 relative">
        <Image
          className="object-cover rounded-lg h-36 ease-in-out duration-300"
          src={track.thumbnail}
          width={180}
          height={180}
          alt={track.title}
        />
        <button
          className={`p-3 bg-green-500 rounded-full hover:scale-105 transform absolute bottom-6 right-6 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all ease-in-out duration-300 delay-150}`}
        >
          <PlayIcon width={25} height={25} className="text-neutral-900" />
        </button>
      </div>
      <div className="px-4 mt-2 mb-4">
        <h1 className="text-neutral-100 mb-1 text-sm font-bold">
          {track.title}
        </h1>
        <p className="text-xs font-medium text-neutral-400">{track.artist}</p>
      </div>
    </Link>
  );
};

export default ContentCard;
