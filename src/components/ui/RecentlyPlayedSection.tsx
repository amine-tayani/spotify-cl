"use client";

import * as React from "react";
import ContentCard from "./ContentCard";
import { RecentlyPlayedTrack } from "./GetStartedSection";

const recentlyPlayedTracks: RecentlyPlayedTrack[] = [
  {
    id: 1,
    title: "Splinter Wolf",
    artist: "Kohta Yamamoto",
    thumbnail:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/2hE2ofc7IKD1iQ39HYU5N4/fr/default",
  },
  {
    id: 2,
    title: "Never Stop",
    artist: "Hiroyuki Sawano",
    thumbnail:
      "https://i.scdn.co/image/ab67616d00001e02a3a59aeefbfd2a0635fe9c25",
  },
  {
    id: 3,
    title: "Golden hour",
    artist: "Fuji Kaze",
    thumbnail:
      "https://i.scdn.co/image/ab67706f00000002893fecf1a5f748b71821fd9f",
  },
  {
    id: 4,
    title: "ありがとう",
    artist: "kenjiro sakiya",
    thumbnail:
      "https://i.scdn.co/image/ab67706f00000002eb470d3c9e33416f263ca4ae",
  },
  {
    id: 5,
    title: "Yo salam",
    artist: "SmallX",
    thumbnail:
      "	https://i.scdn.co/image/ab67616d00001e023dec5aad7c37090b9ee7655a",
  },
  {
    id: 6,
    title: "M3a L3echrane",
    artist: "Dizzy DROSS",
    thumbnail:
      "https://i.scdn.co/image/ab67616d00001e02a371d867b3f855947a2307be",
  },
];

interface Props {
  track?: RecentlyPlayedTrack;
}

const RecentlyPlayedSection: React.FC<Props> = () => {
  return (
    <section>
      <div className="px-4 sm:ml-80 justify-center">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mb-4 mr-4">
          {recentlyPlayedTracks.map((track) => (
            <ContentCard track={track} key={track.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyPlayedSection;
