"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

const GradientBackground: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {!pathname.startsWith("/search") && (
        <div
          style={{
            zIndex: 0,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.6) 0,var(--background-base) 100%),var(--background-noise)",
          }}
          className="bg-[rgb(83,83,83)] h-[332px] -mt-16 absolute w-full"
        />
      )}
    </>
  );
};

export default GradientBackground;
