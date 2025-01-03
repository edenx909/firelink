const Cover = ({ coverData }) => {
  return (
    <div className="mx-5 w-[50vw] md:w-[30vw] lg:w-[20rem]">
      {coverData && coverData[0] && (
        <img
          src={coverData[0].url.replace("t_thumb", "t_1080p")}
          className="rounded-sm object-cover"
          width={400}
          height={300}
          alt="Game Cover"
        />
      )}
    </div>
  );
};

export default Cover;
