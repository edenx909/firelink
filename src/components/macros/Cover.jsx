const Cover = ({ coverData }) => {
  return (
    <div className="w-[15rem] m-4">
      {coverData && coverData[0] && (
        <img
          src={coverData[0].url.replace("t_thumb", "t_1080p")}
          className="object-cover rounded-sm"
        />
      )}
    </div>
  );
};

export default Cover;
