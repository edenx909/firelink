const Rating = ({ gameData }) => {
  return (
    <div>
      <h1>
        Rating <span>{gameData[0].aggregated_rating.toPrecision(4)} %</span>
      </h1>
    </div>
  );
};

export default Rating;
