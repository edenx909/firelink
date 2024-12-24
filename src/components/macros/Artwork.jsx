const Artwork = ({ artworkData }) => {
  return (
    <div className="flex justify-center w-screen sticky top-0 -z-10 overflow-x-clip">
      {artworkData && artworkData[0] && (
        <>
          <div>
            <img
              src={artworkData[0].url.replace("t_thumb", "t_1080p")}
              className=" w-screen object-cover max-h-[50vh] h-[35rem] md:h-[25rem]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Artwork;
