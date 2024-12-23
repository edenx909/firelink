import { useState } from "react";
import { motion } from "motion/react";

const Videos = ({ videoData }) => {
  const [count, setCount] = useState(2);
  const [buttonHover, setButtonHover] = useState(false);

  const lengthCheck = videoData?.length > count;
  return (
    <div className="flex flex-col items-center">
      {videoData && (
        <h1 className="border-b py-2 border-black text-center px-96">Videos</h1>
      )}

      <div className=" items-center justify-center p-4 flex flex-wrap gap-4">
        {videoData?.slice(0, count).map((video) => (
          <div
            key={video.id}
            className="flex flex-col items-center justify-center"
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.video_id}`}
              allow="clipboard-write; picture-in-picture"
              allowFullScreen
              className="w-full h-[56.25vw] md:w-[40vw] md:h-[22.5vw] aspect-video"
            ></iframe>
          </div>
        ))}
      </div>
      {lengthCheck && (
        <button
          className="rounded-xl border-[1px] py-2 flex space-x-2 items-start px-4"
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
              className="rotate-[-90deg] w-4 h-4"
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
