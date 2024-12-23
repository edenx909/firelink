import { useState } from "react";

const Screenshots = ({ screenshotsData }) => {
  const [count, setCount] = useState(4);

  const lengthCheck = screenshotsData?.length > count;
  return (
    <div className="py-10 flex flex-col items-center">
      <h1 className="border py-2 border-black rounded-xl text-center px-6">
        Screenshots
      </h1>
      <div className=" w-[80vw] items-center justify-center p-4 flex flex-wrap gap-4">
        {screenshotsData?.slice(0, count).map((screenshot) => (
          <img
            key={screenshot.image_id}
            src={screenshot.url.replace("t_thumb", "t_1080p")}
            className="max-w-[80vw] w-[45rem] h-[25rem]"
          />
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

export default Screenshots;
