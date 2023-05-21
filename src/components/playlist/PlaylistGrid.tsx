"use client";

import React from "react";
import Row from "./Row";
import { ClockIcon } from "@heroicons/react/24/outline";

const PlaylistGrid: React.FC = () => {
  return (
    <div className="m-0 max-w-[1955px] min-h-screen p-6">
      <div className="border-transparent rounded-md outline-none">
        <div className="top-16 h-10 sticky z-[2] mt-0 mb-4 py-0">
          <div
            className="grid gap-4 text-[#b3b3b3] h-9 border-b-[1px] items-center bg-[--background-base] border-[#282828]"
            style={{
              gridTemplateColumns:
                "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)",
              padding: "0 16px",
            }}
          >
            <div>#</div>
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
            <div className="justify-self-start">
              <div className="items-center flex justify-center border-none">
                <span className="text-sm">Date added</span>
              </div>
            </div>
            <div>
              <div className="items-center flex justify-center ml-5 border-none">
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
