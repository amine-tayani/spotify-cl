"use client";

import * as React from "react";
import Card from "./Card";

export type SearchResult = {
  id: string;
  title: string;
  thumb: string;
  searchType:
    | "Profile"
    | "Playlist"
    | "Artist"
    | "Album"
    | "Track"
    | "Show"
    | "Episode";
};

const recentSearchResults: SearchResult[] = [
  {
    id: "1",
    title: "YOASOBI",
    searchType: "Artist",
    thumb: "https://i.scdn.co/image/ab67616100005174fbe071f5bc42f38d3485a29a",
  },
  {
    id: "2",
    title: "Nogizaka46",
    searchType: "Profile",
    thumb: "https://i.scdn.co/image/ab6775700000ee8592b97ee05d825acd2028e338",
  },
];

const RecentSearches: React.FC = () => {
  return (
    <section>
      <div className="py-4 sm:ml-64">
        <section className="mb-2 mx-4">
          <h1 className="text-xl text-white font-bold">Recent Searches</h1>
        </section>
      </div>
      <div className="px-4 sm:ml-64 justify-center rounded-lg">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mb-4 mr-4">
          {recentSearchResults.map((result) => (
            <Card key={result.id} result={result} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentSearches;
