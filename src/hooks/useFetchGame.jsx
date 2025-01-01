import { useState } from "react";

const useFetchGame = () => {
  const [gameData, setGameData] = useState(null);

  const fetchData = async (id) => {
    try {
      const response = await fetch(`/api/game/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch game data");
      }

      const jsonData = await response.json();
      setGameData(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  return { gameData, fetchData };
};

export default useFetchGame;
