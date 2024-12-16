import React, { useState, useEffect } from "react";

const clientID = import.meta.env.VITE_CLIENT_ID;
const accessToken = `Bearer ${import.meta.env.VITE_AUTHORIZATION}`;

const Home = () => {
  const [search, setSearch] = useState("elden ring");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/games", {
        method: "POST",
        headers: {
          "Client-ID": clientID,
          Authorization: accessToken,
          "Content-Type": "text/plain",
        },
        body: `fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites; search"=${search}";`,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a game..."
      />
      <button onClick={() => fetchData()}>Search</button>
      <div>
        {data.length > 0 ? (
          data.map((game) => (
            <div key={game.id}>
              <h3>{game.name}</h3>
              <p>{game.slug}</p>
              <p>{game.storyline}</p>
            </div>
          ))
        ) : (
          <p>No games found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
