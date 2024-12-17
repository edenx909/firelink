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
            className="max-w-4/5  w-auto rounded-xl max-h-[50vh]"
          />
        ))}
      </div>
    </div>
  );
};

export default Screenshots;
