import { useState } from "react";

const useFetchGames = () => {
  const [gamesData, setGamesData] = useState(null);

  const fetchData = async (search) => {
    try {
      const response = await fetch(
        `/api/games?query=${encodeURIComponent(search)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch games data");
      }

      const jsonData = await response.json();
      setGamesData(jsonData);
      console.log("Games Data", jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  return { gamesData, fetchData };
};

export default useFetchGames;
