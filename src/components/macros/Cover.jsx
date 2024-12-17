const Cover = ({ coverData }) => {
  return (
    <div className="p-5">
      {coverData && coverData[0] && (
        <img
          src={coverData[0].url.replace("t_thumb", "t_1080p")}
          className="rounded-xl"
        />
      )}
    </div>
  );
};

export default Cover;
