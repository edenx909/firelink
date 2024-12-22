import { useState } from "react";
const clientID = import.meta.env.VITE_CLIENT_ID;
const accessToken = `Bearer ${import.meta.env.VITE_AUTHORIZATION}`;

const useFetchGames = () => {
  const [gamesData, setGamesData] = useState(null);
  const fetchData = async (search) => {
    try {
      const response = await fetch("/api/games", {
        method: "POST",
        headers: {
          "Client-ID": clientID,
          Authorization: accessToken,
          "Content-Type": "text/plain",
        },
        body: `fields aggregated_rating,artworks,cover,created_at,dlcs,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites; search"=${search}"; where total_rating_count > 0 ;`,
      });

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
