const Length = ({ lengthData }) => {
  return (
    <div>
      <h1>How Long To Beat</h1>
      {lengthData && lengthData[0] && (
        <div>
          <p>Time to Beat</p>
          <p>Normal Playthrough - {lengthData[0].normally / 3600} hrs</p>
          <p>
            Completionist Playthrough - {lengthData[0].completely / 3600}
            hrs
          </p>
        </div>
      )}
    </div>
  );
};

export default Length;
