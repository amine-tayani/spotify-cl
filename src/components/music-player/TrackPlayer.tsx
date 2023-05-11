"use client";

import * as React from "react";
import { useHover } from "usehooks-ts";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const TrackPlayer: React.FC = () => {
  const progressBarRef = React.useRef<HTMLInputElement>(null);
  const [currentTime, setCurrentTime] = React.useState(0);
  const isHover = useHover(progressBarRef);

  const changePlayerCurrentTime = () => {
    if (progressBarRef.current) {
      const value = progressBarRef.current.value;
      if (value) {
        const parsedValue = parseInt(value, 10);
        setCurrentTime(Math.round(parsedValue));
        const maxWidth = Number(progressBarRef.current.max);
        const width = (parsedValue / maxWidth) * 100;
        progressBarRef.current.style.setProperty(
          "--seek-before-width",
          `${width}%`
        );
      }
    }
  };

  const leadingZero = (time: number) => {
    return time < 10 ? "0" + time : +time;
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center">
        <button className="mr-4">
          <svg
            className="w-5 h-5 text-neutral-600"
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
          >
            <path
              d="M22 7c-3 0-8.5 0-10.5 5.5S5 18 2 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 5l2 2-2 2M22 18c-3 0-8.5 0-10.5-5.5S5 7 2 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M20 20l2-2-2-2"
              stroke="#currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="mr-4">
          <svg
            className="w-5 h-5 text-neutral-400"
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
          >
            <path
              d="M6 7v10M17.028 5.267a.6.6 0 01.972.471v12.524a.6.6 0 01-.972.47l-7.931-6.261a.6.6 0 010-.942l7.931-6.262z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="mr-4">
          <PlayCircleIcon
            width={35}
            height={35}
            color="#ffff"
            className="hover:scale-105"
          />
        </button>
        <button className="mr-4">
          <svg
            className="w-5 h-5 text-neutral-400"
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
          >
            <path
              d="M18 7v10M6.972 5.267A.6.6 0 006 5.738v12.524a.6.6 0 00.972.47l7.931-6.261a.6.6 0 000-.942L6.972 5.267z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button>
          <svg
            className="w-5 h-5 text-neutral-600"
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
          >
            <path
              d="M17 17H8c-1.667 0-5-1-5-5s3.333-5 5-5h8c1.667 0 5 1 5 5 0 1.494-.465 2.57-1.135 3.331"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 14.5L17 17l-2.5 2.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-3 select-none">
        <div className="text-neutral-400 text-[10px] tracking-tight font-medium">
          {`${leadingZero(
            currentTime % 60 === currentTime ? 0 : Math.trunc(currentTime / 60)
          )}:${leadingZero(currentTime % 60)}`}
        </div>
        <div className="relative">
          <audio preload="metadata" />
          <input
            ref={progressBarRef}
            onChange={changePlayerCurrentTime}
            type="range"
            min="0"
            max="100"
            step="0.01"
            defaultValue="0"
            style={{
              background: `${
                isHover
                  ? `linear-gradient(to right, #1db954 0%, #1db954 ${currentTime}%, #535353 ${currentTime}%, #535353 100%)`
                  : `linear-gradient(to right, #ddd 0%, #ddd ${currentTime}%, #535353 ${currentTime}%, #535353 100%)`
              }`,
            }}
            className=" min-w-[500px] h-1 cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neutral-100 [&::-webkit-slider-thumb]:hidden hover:[&::-webkit-slider-thumb]:block "
          />
        </div>
        <div className="text-neutral-400 text-[10px] tracking-tight font-medium">
          3.30
        </div>
      </div>
    </section>
  );
};

export default TrackPlayer;
