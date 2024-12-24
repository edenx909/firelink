const Story = ({ gameData }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-14 lg:mx-28 xl:mx-36 2xl:mx-56">
      {gameData[0].storyline ? (
        // storylines takes precedence
        <p>{gameData[0].storyline}</p>
      ) : (
        <p>{gameData[0].summary}</p>
      )}
    </div>
  );
};

export default Story;
