const Videos = ({ videoData }) => {
  return (
    <div className="">
      {videoData?.slice(-3).map((video) => (
        <div
          key={video.checksum}
          className="flex flex-col items-center mb-4 py-8"
        >
          <p>{video.name}</p>
          <iframe
            src={`https://www.youtube.com/embed/${video.video_id}`}
            allow="clipboard-write; picture-in-picture"
            allowFullScreen
            className="rounded-xl pt-4"
            style={{
              width: "50rem",
              height: "28.125rem",
            }}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Videos;
