import React from "react";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";
import heroPng from "../../assets/hero.png"

const Banner = () => {
  return (
    <div className="text-center p-4 lg:p-20 pb-0 lg:pb-0 space-y-4">
      <h1 className="text-6xl font-bold">
        We Build <br /> <span className="text-blue-900">Productive</span> Apps
      </h1>
      <p className="w-1/2 mx-auto">
        At APP.CHAI, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="space-x-2">
        <a
          className="btn font-bold"
          target="_blank"
          href="https://play.google.com/"
        >
          <span className="text-xl">
            <FaGooglePlay />
          </span>{" "}
          Google Play
        </a>
        <a
          className="btn font-bold"
          target="_blank"
          href="https://www.apple.com/app-store/"
        >
          <span className="text-xl">
            <FaAppStore />
          </span>{" "}
          App Store
        </a>
      </div>
      <div className="w-2/3 mx-auto pt-8">
        <img src={heroPng} alt="hero image" />
      </div>
    </div>
  );
};

export default Banner;
