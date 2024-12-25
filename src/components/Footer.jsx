import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="mx-10vw flex items-center justify-center space-x-1 border-t border-black py-6 md:mx-[30vw]">
        <a
          href="https://edenxrana.vercel.app/"
          target="_blank"
          className="flex flex-row text-blue-600"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: hover ? 360 : 0 }}
            transition={{ duration: 0.2 }}
            className="mr-1 text-blue-600"
          >
            ©
          </motion.span>
          Made by Eden
        </a>
        <p> using the </p>
        <a
          href="https://api-docs.igdb.com/#getting-started"
          target="_blank"
          className="flex text-blue-600"
        >
          IGDB API{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-45"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#2563eb"
              d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}
