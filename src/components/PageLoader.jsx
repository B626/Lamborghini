import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import logoWhite from "../assets/img/lamborghini-white.svg"

const PageLoader = () => {
  const loaderRef = useRef(null);
  const progressBar = useRef(null);
  const progressDisplay = useRef(null);
  const body = document.querySelector("body");

  useEffect(() => {
    let progressValue = 0;

    progressDisplay.textContent = "0";

    let interval = setInterval(() => {
      if (progressValue < 100) {
        body.style.overflow = "hidden";
        progressValue = progressValue + 1;
        progressDisplay.current.textContent = progressValue + "%";
      } else if (progressValue == 100) {
        setTimeout(() => {
          body.style.overflow = "visible";
          loaderRef.current.style.display = "none";
        }, 500);
      }
    }, 20);
    setTimeout(() => {
      clearInterval(interval);
      body.style.overflow = "visible";
    }, 2500);
  }, [loaderRef, progressBar, progressDisplay]);

  useGSAP(() => {
    gsap.to(progressBar.current, {
      width: "100%",
      duration: 2,
    });
  });

  return (
    <div className="loader" ref={loaderRef}>
      <img src={logoWhite} alt="" />
      <div className="loader__full-bar">
        <div className="loader__progress-bar" ref={progressBar}>
          <p className="loader__progress-display" ref={progressDisplay}></p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
