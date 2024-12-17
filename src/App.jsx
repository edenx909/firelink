import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchGames from "./hooks/useFetchGames";

const App = () => {
  const [search, setSearch] = useState("");
  const { gamesData, fetchData } = useFetchGames();
  const handleSearch = () => {
    fetchData(search);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>OGL</h1>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a game..."
              />
              <button onClick={handleSearch}>Search</button>
              <div>
                {gamesData && gamesData.length > 0 ? (
                  gamesData.map((game) => (
                    <div key={game.id}>
                      <h3>{game.name} </h3>
                      <Link to={`/info/${game.id}`}>More Info</Link>
                    </div>
                  ))
                ) : (
                  <p>No games found</p>
                )}
              </div>
            </>
          }
        />
        <Route path="/info/:id" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
