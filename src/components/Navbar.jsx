import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

import Waveform from "./macros/Waveform";
import WaveformSlash from "./macros/WaveformSlash";
import bgMusic from "../assets/music/OST.mp3";

const Navbar = () => {
  const [hover, setHover] = useState("");
  const location = useLocation();

  const [audio, setAudio] = useState(null);
  const [icon, setIcon] = useState(<WaveformSlash />);

  const playOST = () => {
    if (audio) {
      audio.pause();
      setIcon(<WaveformSlash />);
      setAudio(null);
    } else {
      const newAudio = new Audio(bgMusic);
      newAudio.loop = true;
      setIcon(<Waveform />);
      newAudio.play();
      setAudio(newAudio);
    }
  };
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        setIcon(<WaveformSlash />);
        setAudio(null);
      }
    };
  }, [audio]);
  return (
    <nav
      className={`fixed ${
        location.pathname !== "/" ? "border-[1px] border-gray-400" : ""
      } left-1/2 top-0 z-50 m-10 mx-auto flex w-[92vw] -translate-x-1/2 transform items-center justify-center rounded-full bg-white px-4 py-4 lg:px-14`}
    >
      <a
        href="/"
        className={`z-20 w-1/2 pt-2 font-trajanpro text-2xl sm:text-4xl ${
          location.pathname !== "/" ? "" : "invisible"
        }`}
      >
        Firelink
      </a>
      <div className="z-20 flex w-1/2 items-center justify-end">
        <div className="flex space-x-1 px-[1.25rem] py-1" onClick={playOST}>
          {icon}
        </div>
        <motion.a
          href="https://edenxrana.vercel.app/"
          target="_blank"
          className="relative flex items-center rounded-full py-2"
          onMouseEnter={() => setHover("portfolio")}
          onMouseLeave={() => setHover("")}
          initial={{ paddingRight: "1.25rem" }}
          animate={{
            paddingRight: hover === "portfolio" ? "2.2rem" : "1.25rem",
          }}
        >
          <p className="z-20 rounded-full bg-transparent py-1">Portfolio</p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 z-10"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            animate={{
              rotate: hover === "portfolio" ? "90deg" : "-25deg",
              opacity: hover === "portfolio" ? 1 : 0,
              size: hover === "portfolio" ? 1 : 0,
            }}
            transition={{ duration: 0.2, ease: "linear" }}
          >
            <path
              fill="black"
              d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
            ></path>
          </motion.svg>
        </motion.a>
        <motion.a
          href="https://github.com/edenx909/"
          target="_blank"
          className="relative hidden items-center rounded-full py-2 sm:flex"
          onMouseEnter={() => setHover("github")}
          onMouseLeave={() => setHover("")}
          initial={{ paddingRight: "1.25rem" }}
          animate={{
            paddingRight: hover === "github" ? "2.2rem" : "1.25rem",
          }}
        >
          <p className="z-20 rounded-full py-1">Github</p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 z-10"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            animate={{
              rotate: hover === "github" ? "90deg" : "-25deg",
              opacity: hover === "github" ? 1 : 0,
              size: hover === "github" ? 1 : 0,
            }}
            transition={{ duration: 0.2, ease: "linear" }}
          >
            <path
              fill="black"
              d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
            ></path>
          </motion.svg>
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
