const Rating = ({ gameData }) => {
  const rating = Math.round(gameData[0].aggregated_rating) || 0;
  const width = "12rem";

  return (
    <div className="relative">
      <div
        className="h-1 bg-red-600 rounded-r-lg absolute right-0"
        style={{ width: `${(rating / 100) * parseFloat(width)}px` }}
      />
      <div className="h-1 bg-green-700 rounded" style={{ width: width }} />
    </div>
  );
};

export default Rating;
