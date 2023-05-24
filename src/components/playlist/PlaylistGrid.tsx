"use client";

import React from "react";
import Row from "./Row";
import { ClockIcon } from "@heroicons/react/24/outline";

const PlaylistGrid: React.FC = () => {
  return (
    <div className="m-0 max-w-[1955px] min-h-screen">
      <div className="border-transparent rounded-md outline-none">
        <div className="top-20 h-10 sticky z-50 mt-0 mb-4 py-0">
          <div
            className="relative grid gap-4 px-5 text-[#b3b3b3] h-8 border-b-[1px] bg-[--background-black] items-center border-[#282828]"
            style={{
              gridTemplateColumns:
                "[index] 75px [first] 5fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)",
            }}
          >
            <div className="ml-[60px]">#</div>
            <div className="justify-self-start ">
              <div className="items-center flex justify-center border-none">
                <span className="text-sm">Title</span>
              </div>
            </div>
            <div className="justify-self-start">
              <div className="items-center flex justify-center border-none">
                <span className="text-sm">Album</span>
              </div>
            </div>
            <div className="justify-self-start -ml-3">
              <div className="items-center flex justify-center border-none">
                <span className="text-sm">Date added</span>
              </div>
            </div>
            <div>
              <div className="items-center flex justify-center -ml-20 border-none">
                <ClockIcon
                  width={25}
                  height={25}
                  className="text-neutral-300"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {[...Array(20)].map((_, i) => (
            <Row key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistGrid;
