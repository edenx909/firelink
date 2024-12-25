const Artwork = ({ artworkData }) => {
  return (
    <div className="sticky top-0 -z-10 flex w-screen justify-center overflow-x-clip">
      {artworkData && artworkData[0] && (
        <>
          <div>
            <img
              src={artworkData[0].url.replace("t_thumb", "t_1080p")}
              className="h-[35rem] max-h-[50vh] w-screen object-cover md:h-[25rem]"
              width="1920"
              height="1080"
              alt="Game Artwork"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Artwork;
