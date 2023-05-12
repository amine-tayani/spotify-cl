"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const recentlyPlayedTracks: {
  id: number;
  title: string;
  artist: string;
  thumbnail: string;
}[] = [
  {
    id: 1,
    title: "Electric Love",
    artist: "Night Visions",
    thumbnail:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1685&q=80",
  },
  {
    id: 2,
    title: "さようなら Goodbye",
    artist: "Yuki Nakamura",
    thumbnail:
      "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    title: "Sakura Kiss",
    artist: "unohana yoshida",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1664478317203-dbd4a6a2e168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    title: "ありがとう Love",
    artist: "Sakura Tanaka",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    title: "Midnight Memories",
    artist: "The Neon Lights",
    thumbnail:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 6,
    title: "You & Me 君と私",
    artist: "Kaito Matsuda",
    thumbnail:
      "https://images.unsplash.com/photo-1542211183455-2afe6f173cdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGphcGFuZXNlJTIwcG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const RecentlyPlayedSection: React.FC = () => {
  return (
    <section>
      <div className="px-4 sm:ml-80 justify-center rounded-lg">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mb-4 mr-4">
          {recentlyPlayedTracks.map((track) => (
            <Link
              href={`/track/${track.id}`}
              key={track.id}
              className="group flex flex-col justify-center rounded bg-[--background-base] hover:bg-[--background-elevated-base] transition-all ease-in-out duration-300 shadow-md pb-4"
            >
              <div className="p-4">
                <Image
                  className="object-cover rounded-lg h-40 group-hover:scale-105 group-hover:translate-y-2 transition-all ease-in-out duration-300"
                  src={track.thumbnail}
                  width={180}
                  height={180}
                  alt={track.title}
                />
              </div>
              <div className="px-4 mt-2 mb-4">
                <h1 className="text-neutral-100 mb-1 text-sm font-bold">
                  {track.title}
                </h1>
                <p className="text-xs font-medium text-neutral-400">
                  {track.artist}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyPlayedSection;
