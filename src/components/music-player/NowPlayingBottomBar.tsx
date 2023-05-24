"use client";

import * as React from "react";
import Image from "next/image";
import { HeartIcon, QueueListIcon } from "@heroicons/react/24/outline";
import TrackPlayer from "@/components/music-player/TrackPlayer";
import VolumeBar from "@/components/music-player/VolumeBar";

const NowPlayingBottomBar: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 px-4 z-50 bg-black py-4">
      <div className="flex items-center justify-between relative">
        <div className="flex items-center text-neutral-400">
          <Image
            src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2hE2ofc7IKD1iQ39HYU5N4/fr/default"
            alt="Album cover"
            className="w-16 h-16 rounded-lg object-cover"
            width={180}
            height={180}
          />
          <div className="mx-4">
            <p className="text-white font-medium">Barricades</p>
            <p className="text-neutral-400 text-xs font-medium">
              Kohta Yamamoto
            </p>
          </div>
          <HeartIcon
            width={18}
            height={18}
            strokeWidth={2}
            className="hover:text-white"
          />
        </div>
        <TrackPlayer />
        <section className="flex items-center text-neutral-400">
          <button className="mr-4">
            <svg className="w-4 h-4 text-neutral-400 fill-current">
              <path
                strokeWidth={2}
                d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"
              />
            </svg>
          </button>
          <QueueListIcon width={18} height={18} strokeWidth={1.5} />
          <button className="mx-4">
            <svg
              className="w-4 h-4 text-neutral-400"
              strokeWidth="2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 21h15M21 21h1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 16.4V3.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
          <VolumeBar />
        </section>
      </div>
    </footer>
  );
};

export default NowPlayingBottomBar;
