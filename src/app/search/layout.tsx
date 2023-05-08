"use client";

import * as React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchLayout({
  content,
  results,
  children,
}: {
  content: React.ReactNode;
  results: React.ReactNode;
  children: React.ReactNode;
}) {
  const [search, setSearch] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="absolute z-50 top-0 left-0 right-0 mx-auto mt-4 w-[400px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-6 w-6 text-neutral-300" />
        </div>
        <input
          onChange={onChange}
          value={search}
          type="search"
          className="bg-neutral-800 border-none text-neutral-300 placeholder:text-neutral-500 text-xs outline-none rounded-full block w-full pl-10 p-3 focus:ring-2 focus:ring-neutral-200"
          placeholder="What do you want to listen to?"
        />
      </div>
      {search !== "" ? results : content}
      <div>{children}</div>
    </div>
  );
}
