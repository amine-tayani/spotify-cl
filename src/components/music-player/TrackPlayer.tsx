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
        <button className="mr-6 text-neutral-400">
          <svg fill="currentColor" height="16" width="16" viewBox="0 0 16 16">
            <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z" />
            <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z" />
          </svg>
        </button>
        <button className="mr-6">
          <svg
            className="fill-neutral-400"
            height="16"
            width="16"
            viewBox="0 0 16 16"
          >
            <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" />
          </svg>
        </button>
        <button className="flex items-center justify-center mr-6 p-2 rounded-full bg-neutral-100">
          <svg
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="fill-neutral-900 "
          >
            <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
          </svg>
        </button>
        <button className="mr-6">
          <svg
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="fill-neutral-400"
          >
            <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z" />
          </svg>
        </button>
        <button>
          <svg
            className="fill-neutral-400"
            height="16"
            width="16"
            viewBox="0 0 16 16"
          >
            <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-3 select-none">
        <div className="text-neutral-400 text-[11px] tracking-tight font-medium">
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
        <div className="text-neutral-400 text-[11px] tracking-tight font-medium">
          3.30
        </div>
      </div>
    </section>
  );
};

export default TrackPlayer;
