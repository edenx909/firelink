const Artwork = ({ artworkData }) => {
  return (
    <div className="flex justify-center w-full sticky top-16 -z-10">
      {artworkData && artworkData[0] && (
        <>
          <div>
            <img
              src={artworkData[0].url.replace("t_thumb", "t_1080p")}
              className="w-screen h-[30rem] object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Artwork;
