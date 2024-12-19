import Length from "./Length";

const Artwork = ({ artworkData, lengthData }) => {
  return (
    <div className="flex justify-center w-full relative">
      {artworkData && artworkData[0] && (
        <div>
          <img
            src={artworkData[0].url.replace("t_thumb", "t_1080p")}
            className="rounded-xl w-screen h-[20rem] object-cover"
          />
        </div>
      )}
      <div>
        <Length lengthData={lengthData} />
      </div>
    </div>
  );
};

export default Artwork;
