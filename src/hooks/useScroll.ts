"use client";

import { useState } from "react";

export const useScroll = () => {
  const [isScrolling, setScroll] = useState(false);

  const changeScroll = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeScroll);

  return isScrolling;
};
