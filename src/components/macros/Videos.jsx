import { useState } from "react";

const Videos = ({ videoData }) => {
  const [count, setCount] = useState(2);

  const lengthCheck = videoData?.length > count;
  return (
    <div className="py-10 flex flex-col items-center">
      <h1 className="border py-2 border-black rounded-xl text-center px-6">
        Videos
      </h1>
      <div className=" w-[80vw] items-center justify-center p-4 flex flex-wrap gap-4">
        {videoData?.slice(0, count).map((video) => (
          <div
            key={video.id}
            className="flex flex-col items-center justify-center"
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.video_id}`}
              allow="clipboard-write; picture-in-picture"
              allowFullScreen
              className="max-w-[80vw] w-[45rem] h-[25rem]"
            ></iframe>
          </div>
        ))}
      </div>
      {lengthCheck && (
        <button
          className="border px-2 py-1 rounded-xl border-black"
          onClick={() => setCount(count + 2)}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Videos;
