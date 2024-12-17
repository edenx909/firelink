const Videos = ({ videoData }) => {
  return (
    <div className="max-w-4/5  w-auto rounded-xl max-h-[50vh]">
      <h1>Videos</h1>
      {videoData?.slice(-3).map((video) => (
        <div key={video.checksum} className="flex flex-col items-center">
          <p>{video.name}</p>
          <iframe
            src={`https://www.youtube.com/embed/${video.video_id}`}
            allow="clipboard-write; picture-in-picture"
            allowfullscreen
            className="p-5 h-auto w-full"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Videos;
