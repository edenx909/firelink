const Screenshots = ({ screenshotsData }) => {
  return (
    <div className="space-y-4">
      <h1 className="border px-3 py-2 border-black rounded-xl text-center">
        Screenshots
      </h1>
      <div className="flex flex-col space-y-4">
        {screenshotsData?.slice(-4).map((screenshot) => (
          <img
            key={screenshot.image_id}
            src={screenshot.url.replace("t_thumb", "t_1080p")}
            className="w-auto rounded-xl max-w-[80vw]"
            style={{
              width: "50rem",
              height: "28.125rem",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Screenshots;
