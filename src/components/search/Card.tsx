import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { SearchResult } from "./RecentSearches";

interface CardProps {
  result: SearchResult;
}

const Card: React.FC<CardProps> = ({ result }) => {
  const { id, searchType, thumb, title } = result;

  return (
    <Link
      href="#"
      className="relative group flex flex-col justify-center rounded bg-[--background-elevated-base] hover:bg-[--background-elevated-highlight]"
    >
      <div className="absolute top-2 right-2 flex items-center justify-center p-[1px] text-neutral-200 bg-neutral-900 rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
        <XMarkIcon
          width={25}
          height={25}
          className="group-hover:text-neutral-100"
        />
      </div>
      <div className="p-4">
        <Image
          className="object-cover rounded-full h-36"
          src={thumb}
          width={180}
          height={180}
          alt={title}
        />
      </div>
      <div className="px-4 mt-2 mb-4">
        <h1 className="text-neutral-100 mb-1 text-sm font-bold">{title}</h1>
        <p className="text-xs font-medium text-neutral-400">{searchType}</p>
      </div>
    </Link>
  );
};

export default Card;
