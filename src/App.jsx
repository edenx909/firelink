import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchGames from "./hooks/useFetchGames";
import Navbar from "./components/Navbar";
import { motion } from "motion/react";

const App = () => {
  const [search, setSearch] = useState("");
  const [resultVisibility, setResultVisibility] = useState(false);
  const { gamesData, fetchData } = useFetchGames();

  const handleSearch = () => {
    fetchData(search);
    setSearch("");
    setResultVisibility(true);
  };

  const [gameHover, setGameHover] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-y-hidden">
              <motion.div
                className={`flex items-center justify-center flex-col  overflow-y-hidden`}
                initial={{ height: "100vh" }}
                animate={{ height: gamesData ? "35vh" : "100vh" }}
              >
                <motion.h1
                  className="font-silk"
                  initial={{ fontSize: "10rem" }}
                  animate={{ fontSize: gamesData ? "5rem" : "10rem" }}
                >
                  Firelink
                </motion.h1>
                <p>A game index using the IGDB Database</p>
                <div className="flex space-x-5 relative items-center py-4">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-[1px] px-5 py-2 rounded-xl w-[40rem] text-black"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder=""
                  />
                  <motion.button
                    onClick={handleSearch}
                    className="right-5 absolute"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                      opacity: search !== "" ? 1 : 0,
                      x: search !== "" ? 0 : -30,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    Search
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: gamesData ? "65vh" : 0 }}
              >
                {gamesData && gamesData.length > 0 ? (
                  gamesData
                    // sort through rating for relevant results, may let user set an option
                    .sort((a, b) => b.total_rating - a.total_rating)
                    .map((game) => (
                      <Link
                        to={`/info/${game.id}`}
                        key={game.id}
                        className={`flex  w-full p-14 flex-col py-4 border-b-[1px] ${
                          gameHover === game.id ? "bg-black text-white" : ""
                        }`}
                        onMouseEnter={() => {
                          setGameHover(game.id);
                        }}
                        onMouseLeave={() => setGameHover("")}
                      >
                        <p className="text-lg">{game.name}</p>
                        {gameHover === game.id ? (
                          <>
                            <p>
                              {game.total_rating != null
                                ? game.total_rating.toFixed(2)
                                : "No Rating"}
                            </p>
                          </>
                        ) : (
                          <></>
                        )}
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
                      </Link>
                    ))
                ) : (
                  <>
                    {resultVisibility ? (
                      <div className="flex items-center w-full justify-center">
                        No games found. Please try using more specific keywords.{" "}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </motion.div>
            </div>
          }
        />
        <Route
          path="/info/:id"
          element={
            <div className="">
              <InfoPage />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
