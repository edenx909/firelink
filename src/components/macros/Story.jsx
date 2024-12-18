const Story = ({ gameData }) => {
  return (
    <div className="flex flex-col items-center justify-center">
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
