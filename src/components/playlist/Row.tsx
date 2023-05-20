"use client";

import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalIcon, HeartIcon } from "@heroicons/react/24/outline";

const Row: React.FC = () => {
  return (
    <div className="relative">
      <div>
        <div
          className="grid relative rounded-md gap-4 border-transparent select-none h-14 hover:bg-[--background-elevated-highlight] hover:bg-opacity-10"
          style={{
            gridTemplateColumns:
              "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)",
            padding: "0 16px",
          }}
        >
          <div className="flex items-center justify-self-end">
            <div className="relative min-w-[16px] min-h-[16px] w-4 h-4 inline-block text-[#b3b3b3]">
              <span className="absolute -top-1 right-1">1</span>
              <button className="flex justify-center items-center h-full w-full absolute border-0 opacity-0">
                <PlayIcon width={25} height={25} className="text-white" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-self-start">
            <Image
              src="https://i.scdn.co/image/ab67616d00004851c5716278abba6a103ad13aa7"
              alt=""
              className="w-12 h-12 mr-4 flex-shrink-0 object-cover object-center select-none bg-[#282828] rounded-md"
              width={180}
              height={180}
            />
            <div className="pr-2 grid gap-y-1 items-center">
              <a className="text-white " href="/track/3dPtXHP0oXQ4HCWHsOA9js">
                <div className="text-neutral-100">夜に駆ける</div>
              </a>
              <span className="">
                <a
                  href="/artist/64tJ2EAv1R6UaZqc4iOCyj"
                  className="text-neutral-400 text-sm"
                >
                  YOASOBI
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-neutral-400">
              <a
                className="text-[#b3b3b3]"
                href="/album/3GzwPyPZCyrqUTaurTaS23"
              >
                夜に駆ける
              </a>
            </span>
          </div>
          <div className="justify-self-start flex items-center">
            <span className="text-neutral-400">Jan 21, 2021</span>
          </div>
          <div
            style={{ gridColumn: "last" }}
            className="flex justify-self-end items-center"
          >
            <button className="mr-4  border-0 p-0 flex text-[#ffffffb3]">
              <HeartIcon width={25} height={25} className="text-neutral-300" />
            </button>
            <div className="mr-4 text-neutral-300 text-sm flex justify-end w-[5ch]">
              4:21
            </div>
            <button className="flex justify-center items-center bg-transparent border-0 p-0 text-[#ffffffb3]">
              <EllipsisHorizontalIcon
                width={25}
                height={25}
                className="text-neutral-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
