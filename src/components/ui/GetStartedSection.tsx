"use client";

import * as React from "react";
import ContentCard from "./ContentCard";

export type RecentlyPlayedTrack = {
  id: number;
  title: string;
  artist: string;
  thumbnail: string;
};

const recentlyPlayedTracks: RecentlyPlayedTrack[] = [
  {
    id: 1,
    title: "Sur la route",
    artist: "Jul, Abduh",
    thumbnail:
      "https://i.scdn.co/image/ab67616d00001e0254fb70557d8e88eed86eda0e",
  },
  {
    id: 2,
    title: "Omerta",
    artist: "7ari",
    thumbnail:
      "https://i.scdn.co/image/ab67616d00001e0227268d7c3081b091c3709720",
  },
  {
    id: 3,
    title: "SID mix",
    artist: "SID",
    thumbnail:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/24b231EnCM3BkpiuWs5VBE/en/default",
  },
  {
    id: 4,
    title: "Sunset",
    artist: "Tokyo Rising",
    thumbnail:
      "https://i.scdn.co/image/ab67706f00000002893fecf1a5f748b71821fd9f",
  },
  {
    id: 5,
    title: "Kick Back",
    artist: "Kenshi Yonezu",
    thumbnail:
      "https://i.scdn.co/image/ab67616d00001e02303d8545fce8302841c39859",
  },
  {
    id: 6,
    title: "Dramaturgy",
    artist: "Eve",
    thumbnail:
      "https://i.scdn.co/image/ab67706c0000da84b79803704ff054f64a320945",
  },
];

const GetStartedSection: React.FC = () => {
  return (
    <section>
      <div className="py-4 sm:ml-80">
        <section className="mb-2 mx-4">
          <h1 className="text-xl text-white font-bold">To get you started</h1>
        </section>
      </div>
      <div className="px-4 sm:ml-80 justify-center ">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mb-4 mr-4">
          {recentlyPlayedTracks.map((track) => (
            <ContentCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
