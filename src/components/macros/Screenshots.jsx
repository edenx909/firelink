import { useState } from "react";
import { motion } from "motion/react";

const Screenshots = ({ screenshotsData }) => {
  const [count, setCount] = useState(4);
  const [buttonHover, setButtonHover] = useState(false);
  // more checks
  const lengthCheck = screenshotsData?.length > count;
  return (
    <div className="flex flex-col items-center py-10">
      {lengthCheck > 0 && (
        <>
          <h1 className="border-b border-black px-[30vw] py-2 text-center">
            Screenshots
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            {screenshotsData?.slice(0, count).map((screenshot, index) => (
              <img
                key={screenshot.image_id}
                src={screenshot.url.replace("t_thumb", "t_1080p")}
                className="h-[100vw/(16*9)] w-full xl:h-[40vw/(16*9)] xl:w-[40vw]"
                alt={`Screenshot ${index + 1}`}
                loading="lazy"
                width="400"
                height="225"
              />
            ))}
          </div>
        </>
      )}
      {lengthCheck && (
        <button
          className="flex items-start space-x-2 rounded-xl border-[1px] px-4 py-2"
          onClick={() => setCount(count + 2)}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          <p>Show More</p>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: buttonHover ? 4 : 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 rotate-[-90deg]"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="m4.296 12l8.492-8.727a.75.75 0 1 0-1.075-1.046l-9 9.25a.75.75 0 0 0 0 1.046l9 9.25a.75.75 0 1 0 1.075-1.046z"
              ></path>
            </svg>
          </motion.div>
        </button>
      )}
    </div>
  );
};

export default Screenshots;
