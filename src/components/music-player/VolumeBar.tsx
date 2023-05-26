"use client";

import * as React from "react";
import { useHover } from "usehooks-ts";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";

const VolumeBar: React.FC = () => {
  const [volume, setVolume] = React.useState(0.5);
  const [muted, setMuted] = React.useState(false);
  const volumeRef = React.useRef<HTMLInputElement>(null);

  const isHover = useHover(volumeRef);
  const changeVolume = () => {
    if (volumeRef.current) {
      const value = volumeRef.current.value;
      if (value) {
        const parsedValue = parseInt(value, 10);
        setVolume(Math.round(parsedValue));
        const maxWidth = Number(volumeRef.current.max);
        const width = (parsedValue / maxWidth) * 100;
        volumeRef.current.style.setProperty("--seek-before-width", `${width}%`);
      }
    }
  };

  const muteVolume = () => {
    if (volumeRef.current) {
      volumeRef.current.value = "0";
      setVolume(0);
      setMuted(true);
      volumeRef.current.style.setProperty("--seek-before-width", `0%`);
    }
    if (volume === 0 && volumeRef.current) {
      volumeRef.current.value = "50";
      setVolume(50);
      setMuted(false);
      volumeRef.current.style.setProperty("--seek-before-width", `50%`);
    }
  };

  return (
    <section className="flex items-center">
      <button onClick={() => setMuted(!muted)}>
        {muted ? (
          <SpeakerMuteIcon />
        ) : (
          <SpeakerWaveIcon
            className="text-neutral-400 hover:text-white"
            width={18}
            height={18}
            strokeWidth={2}
            onClick={muteVolume}
          />
        )}
      </button>
      <input
        ref={volumeRef}
        onChange={changeVolume}
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        style={{
          background: `${
            isHover
              ? `linear-gradient(to right, #1db954 0%, #1db954 ${volume}%, #535353 ${volume}%, #535353 100%)`
              : `linear-gradient(to right, #ddd 0%, #ddd ${volume}%, #535353 ${volume}%, #535353 100%)`
          }`,
        }}
        step="0.01"
        className="mx-2 w-24 h-[3px] &::-webkit-slider-thumb &::-moz-range-thumb &::-ms-thumb appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neutral-100 [&::-webkit-slider-thumb]:hidden hover:[&::-webkit-slider-thumb]:block cursor-pointer"
      />
    </section>
  );
};

export const SpeakerMuteIcon: React.FC = () => {
  return (
    <svg
      className="w-5 h-5 text-neutral-400 hover:text-white"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor;"
    >
      <g
        ip-path="url(#sound-off_svg__clip0_3173_16686)"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M18 14l2-2m2-2l-2 2m0 0l-2-2m2 2l2 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path d="M2 13.857v-3.714a2 2 0 012-2h2.9a1 1 0 00.55-.165l6-3.956a1 1 0 011.55.835v14.286a1 1 0 01-1.55.835l-6-3.956a1 1 0 00-.55-.165H4a2 2 0 01-2-2z"></path>
      </g>
      <defs>
        <clipPath id="sound-off_svg__clip0_3173_16686">
          <path fill="#fff" d="M0Wh24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VolumeBar;
