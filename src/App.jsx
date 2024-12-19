import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchGames from "./hooks/useFetchGames";
import Navbar from "./components/Navbar";
import { motion } from "motion/react";

const App = () => {
  const [search, setSearch] = useState("");
  const { gamesData, fetchData } = useFetchGames();

  const handleSearch = () => {
    fetchData(search);
    setSearch("");
  };

  const [gameHover, setGameHover] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-y-hidden bg-black text-white">
              <motion.div
                className={`flex items-center justify-center flex-col space-y-10 overflow-y-hidden`}
                initial={{ height: "100vh" }}
                animate={{ height: gamesData ? "40vh" : "100vh" }}
              >
                <h1 className="text-[10rem] font-kinta">Firelink</h1>
                <p>A game index using the IGDB Database</p>
                <div className="flex space-x-5 relative items-center">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-[2px] px-5 py-2 rounded-xl w-[40rem] text-black"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder=""
                  />
                  <button
                    onClick={handleSearch}
                    className={` ${
                      search === "" ? "hidden" : "absolute"
                    } right-5 text-black`}
                  >
                    Search
                  </button>
                </div>
              </motion.div>
              <div className="bg-black h-[60vh]">
                {gamesData && gamesData.length > 0 ? (
                  gamesData
                    // sort through rating for relevant results, may let user set an option
                    .sort((a, b) => b.total_rating - a.total_rating)
                    .map((game) => (
                      <div
                        key={game.id}
                        className="flex py-2 border w-full px-8 flex-col"
                        onMouseEnter={(game) => {
                          setGameHover(game.id);
                        }}
                        onMouseLeave={() => setGameHover("")}
                      >
                        <Link to={`/info/${game.id}`} className="text-lg">
                          {game.name}
                        </Link>
                        <p>
                          {game.total_rating != null
                            ? game.total_rating.toFixed(2)
                            : "No Rating"}
                        </p>
                        <p>
                          {game.first_release_date ? (
                            new Date(
                              game.first_release_date * 1000
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          ) : (
                            <p>Release Data NA</p>
                          )}
                        </p>
                      </div>
                    ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          }
        />
        <Route
          path="/info/:id"
          element={
            <div className="bg-black text-white">
              <InfoPage />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
