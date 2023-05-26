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
            className="w-14 h-14 rounded object-cover"
            width={180}
            height={180}
          />
          <div className="mx-4">
            <p className="text-white text-sm font-normal">Barricades</p>
            <p className="text-neutral-400 text-[11px] font-medium">
              Kohta Yamamoto
            </p>
          </div>
          <HeartIcon
            width={18}
            height={18}
            strokeWidth={2}
            className="hover:text-white"
          />
          <svg
            className="ml-4"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path
                d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                fillRule="nonzero"
              />
              <path d="M10 8h4v3h-4z"></path>
            </g>
          </svg>
        </div>
        <TrackPlayer />
        <section className="flex items-center text-neutral-400">
          <button>
            <svg
              className="fill-neutral-400 hover:fill-white"
              height="16"
              width="16"
              viewBox="0 0 16 16"
            >
              <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z" />
            </svg>
          </button>
          <button className="mx-4">
            <svg
              className="fill-neutral-400 hover:fill-white"
              height="16"
              width="16"
              viewBox="0 0 16 16"
            >
              <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z" />
            </svg>
          </button>
          <button className="mr-4">
            <svg
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="fill-neutral-400 hover:fill-white"
            >
              <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z" />
              <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </button>
          <VolumeBar />
        </section>
      </div>
    </footer>
  );
};

export default NowPlayingBottomBar;
