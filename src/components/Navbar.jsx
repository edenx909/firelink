import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const [hover, setHover] = useState("");
  const location = useLocation();
  return (
    <nav className="fixed top-0 w-full flex z-50 bg-white items-center justify-center p-3 px-6">
      <a
        href="/"
        className={`w-1/2 text-3xl bg-transparent font-silk font-bold ${
          location.pathname !== "/" ? "" : "hidden"
        }`}
      >
        Firelink
      </a>
      <div className="w-full flex justify-end items-end bg-transparent">
        <motion.a
          href="https://edenxrana.vercel.app/"
          target="_blank"
          className="flex rounded-full  py-2 relative items-center"
          onMouseEnter={() => setHover("portfolio")}
          onMouseLeave={() => setHover("")}
          initial={{ paddingRight: "1.25rem" }}
          animate={{
            paddingRight: hover === "portfolio" ? "2.2rem" : "1.25rem",
          }}
        >
          <p className="bg-white z-20 rounded-full py-1">Portfolio</p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className=" absolute right-3 z-10"
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
          className="flex rounded-full  py-2 relative items-center"
          onMouseEnter={() => setHover("github")}
          onMouseLeave={() => setHover("")}
          initial={{ paddingRight: "1.25rem" }}
          animate={{
            paddingRight: hover === "github" ? "2.2rem" : "1.25rem",
          }}
        >
          <p className="bg-white z-20 rounded-full py-1">Github</p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className=" absolute right-3 z-10"
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
