import { useState, useCallback } from "react";
const clientID = import.meta.env.VITE_CLIENT_ID;
const accessToken = `Bearer ${import.meta.env.VITE_AUTHORIZATION}`;

const useFetchGame = () => {
  const [gameData, setGameData] = useState(null);
  const fetchData = useCallback(async (id) => {
    try {
      const response = await fetch("/api/games", {
        method: "POST",
        headers: {
          "Client-ID": clientID,
          Authorization: accessToken,
          "Content-Type": "text/plain",
        },
        body: `fields artworks,cover,first_release_date,name,platforms,rating,rating_count,release_dates,screenshots,slug,storyline,summary,total_rating,total_rating_count,url,version_parent,version_title,videos,websites; where id = ${id};`,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch game data");
      }

      const jsonData = await response.json();
      setGameData(jsonData);
      console.log("GAME DATA", jsonData);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { gameData, fetchData };
};

export default useFetchGame;
