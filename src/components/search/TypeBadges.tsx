"use client";

import * as React from "react";
import Link from "next/link";

const types = [
  "All",
  "Podcast & Shows",
  "Playlists",
  "Profiles",
  "Artists",
  "Songs",
  "Genres & Moods",
  "Albums",
];

const TypeBadges: React.FC<{ keyword: string }> = ({ keyword }) => {
  return (
    <div className="">
      <ul className="flex justify-center mx-20 items-center h-12  ">
        {types.map((type, id) => (
          <li key={id}>
            <Link
              href={`/search/${encodeURIComponent(keyword)}/${type}`}
              className={`flex items-center px-4 py-1.5 mr-2 text-sm ${
                id === 0
                  ? "ml-10 bg-neutral-200 text-black hover:bg-white"
                  : "text-neutral-50 hover:text-white bg-[--background-elevated-base] hover:bg-[--background-elevated-highlight]"
              }  rounded-full`}
            >
              {type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypeBadges;
