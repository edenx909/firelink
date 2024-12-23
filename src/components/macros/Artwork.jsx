const Artwork = ({ artworkData }) => {
  return (
    <div className="flex justify-center w-full sticky top-20 -z-10 overflow-x-clip">
      {artworkData && artworkData[0] && (
        <>
          <div>
            <img
              src={artworkData[0].url.replace("t_thumb", "t_1080p")}
              className="w-screen object-cover max-h-[50vh]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Artwork;
