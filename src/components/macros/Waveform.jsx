import { motion } from "motion/react";

const Waveform = () => {
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 bg-transparent"
        viewBox="0 0 256 256"
        animate={{
          scaleY: ["100%", "60%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <path
          fill="currentColor"
          d="M52 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m36-68a4 4 0 0 0-4 4v192a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m40 32a4 4 0 0 0-4 4v128a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m40 32a4 4 0 0 0-4 4v64a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4m40-16a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4"
        ></path>
      </motion.svg>
    </>
  );
};

export default Waveform;
