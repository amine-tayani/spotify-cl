"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type Genre = {
  id: number;
  title: string;
  thumbnail: string;
  bg?: string;
};

const genres: Genre[] = [
  {
    id: 1,
    title: "Podcasts",
    thumbnail:
      "https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588",
    bg: "#e13300",
  },
  {
    id: 2,
    title: "Live Events",
    thumbnail:
      "	https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
    bg: "#7358ff",
  },
  {
    id: 3,
    title: "Pop",
    thumbnail: "	https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
    bg: "#0d73ec",
  },
  {
    id: 4,
    title: "New Releases",
    thumbnail:
      "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
    bg: "#e91429",
  },
  {
    id: 5,
    title: "Metal",
    thumbnail:
      "https://i.scdn.co/image/ab67fb8200005cafefa737b67ec51ec989f5a51d",
    bg: "#148a08",
  },
  {
    id: 6,
    title: "Made For You",
    thumbnail: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
    bg: "#0d23ec",
  },
  {
    id: 7,
    title: "Latin",
    thumbnail:
      "https://i.scdn.co/image/ab67fb8200005cafa59f90c077c9f618fd0dde30",
    bg: "#e91429",
  },
  {
    id: 8,
    title: "K-Pop",
    thumbnail:
      "https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a",
    bg: "#cfcd0d",
  },
];

const BrowseAllCategories: React.FC = () => {
  return (
    <section>
      <div className="py-4 sm:ml-64">
        <section className="mb-2 mx-4">
          <h1 className="text-xl text-white font-bold">Browse all</h1>
        </section>
      </div>
      <div className="px-4 sm:ml-64 justify-center rounded-lg mb-48">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mb-4 mr-4">
          {genres.map((genre) => (
            <Link
              href={`/genre/${genre.id}`}
              key={genre.id}
              style={{ backgroundColor: genre.bg }}
              className="group justify-center rounded-lg w-full overflow-hidden h-52 relative"
            >
              <div className="p-2">
                <Image
                  className="object-cover w-24 absolute bottom-0 right-0 transform rotate-[25deg] translate-x-[18%] -translate-y-[2%]"
                  src={genre.thumbnail}
                  width={180}
                  height={180}
                  alt={genre.title}
                />
              </div>
              <div className="px-4 ">
                <h1 className="text-neutral-100 mb-1 text-xl font-bold">
                  {genre.title}
                </h1>
                <p className="text-xs font-medium text-neutral-400"></p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseAllCategories;
