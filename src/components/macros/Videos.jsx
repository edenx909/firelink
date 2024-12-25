import { useState } from "react";
import { motion } from "motion/react";

const Videos = ({ videoData }) => {
  const [count, setCount] = useState(2);
  const [buttonHover, setButtonHover] = useState(false);

  const lengthCheck = videoData?.length > count;
  return (
    <div className="flex flex-col items-center">
      {lengthCheck > 0 && (
        <>
          <h1 className="border-b border-black px-[30vw] py-2 text-center">
            Videos
          </h1>

          <div className="flex flex-col flex-wrap items-center justify-center gap-4 p-4 xl:flex-row">
            {videoData?.slice(0, count).map((video) => (
              <div key={video.id} className="flex items-center justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/${video.video_id}`}
                  allow="clipboard-write; picture-in-picture"
                  allowFullScreen
                  className="aspect-video h-[56.25vw] w-full xl:h-[22.5vw]"
                  title={`${video.name}`}
                ></iframe>
              </div>
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

export default Videos;
