import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchGames from "../hooks/useFetchGames";

const Home = () => {
  const [search, setSearch] = useState("");
  const { data, fetchData } = useFetchGames();
  const handleSearch = () => {
    fetchData(search);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a game..."
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {data && data.length > 0 ? (
          data.map((game) => (
            <div key={game.id}>
              <h3>
                {game.name} <Link to={`/info/${game.id}`}>More</Link>
              </h3>
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
