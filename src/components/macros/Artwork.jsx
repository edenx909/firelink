const Artwork = ({ artworkData }) => {
  return (
    <div className="flex justify-center w-full max-w-[70rem]">
      {artworkData && artworkData[0] && (
        <div>
          <img
            src={artworkData[0].url.replace("t_thumb", "t_1080p")}
            className="rounded-xl w-screen h-[20rem] object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Artwork;
