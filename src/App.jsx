import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchGames from "./hooks/useFetchGames";
import Navbar from "./components/Navbar";

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
            <div className="flex items-center justify-center h-screen flex-col space-y-10">
              <h1 className="text-7xl">Firelink</h1>
              <p>A game index using the IGDB Database</p>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-5 py-2 rounded-xl"
                placeholder=""
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button onClick={handleSearch}>Search</button>

              <div>
                {gamesData && gamesData.length > 0 ? (
                  gamesData.map((game) => (
                    <div key={game.id} className="flex space-x-5">
                      <h3>{game.name} </h3>
                      <Link to={`/info/${game.id}`} className="text-blue-600">
                        More Info
                      </Link>
                    </div>
                  ))
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          }
        />
        <Route
          path="/info/:id"
          element={
            <>
              <Navbar />
              <InfoPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
