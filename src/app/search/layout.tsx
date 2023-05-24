"use client";

import * as React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import useScroll from "@/hooks/useScroll";

export default function SearchLayout({
  content,
  results,
  children,
}: {
  content: React.ReactNode;
  results: React.ReactNode;
  children: React.ReactNode;
}) {
  const [keyword, setKeyword] = React.useState("");

  const router = useRouter();
  const scrolled = useScroll(10);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setKeyword(value);
  };

  React.useEffect(() => {
    if (keyword) {
      router.push(`/search/${encodeURIComponent(keyword)}`);
    } else {
      router.push(`/search`);
    }
  }, [keyword]);

  return (
    <div className="flex items-center">
      <div className="fixed z-50 top-0 left-96 mx-6 mt-6 w-[400px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <MagnifyingGlassIcon className="h-6 w-6 text-neutral-300" />
        </div>
        <input
          onChange={onChange}
          value={keyword}
          type="search"
          className="bg-[--background-elevated-base] hover:bg-[--background-elevated-highlight] hover:ring-1 hover:ring-neutral-600 border-none text-neutral-300 placeholder:text-neutral-500 text-sm outline-none rounded-full block w-full pl-12 p-3.5 focus:ring-2 focus:ring-neutral-200"
          placeholder="What do you want to listen to?"
        />
      </div>
      {keyword ? results : content}
    </div>
  );
}
