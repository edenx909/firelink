const Artwork = ({ artworkData }) => {
  return (
    <div className="flex justify-center w-4/5">
      {artworkData && artworkData[0] && (
        <div>
          <img
            src={artworkData[0].url.replace("t_thumb", "t_1080p")}
            className="rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default Artwork;
