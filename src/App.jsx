import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchGames from "./hooks/useFetchGames";
import Navbar from "./components/Navbar";
import { motion } from "motion/react";
import Footer from "./components/Footer";

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
            <div className="h-screen overflow-y-hidden">
              <motion.div
                className={`flex flex-col items-center justify-center`}
                initial={{ height: "100vh" }}
                animate={{ height: gamesData ? "35vh" : "100vh" }}
              >
                <motion.h1
                  className="z-50 font-trajanpro"
                  initial={{ fontSize: "10vw " }}
                  animate={{ fontSize: gamesData ? "4vw" : "10vw " }}
                >
                  Firelink
                </motion.h1>
                <p>A game index using the IGDB Database</p>
                <div className="relative flex items-center space-x-5 py-4">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[60vw] rounded-xl border border-black px-5 py-2 text-black md:w-[35vw] xl:w-[20vw]"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder=""
                  />
                  <motion.button
                    onClick={handleSearch}
                    className="absolute right-5"
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
                className="m-20 overflow-y-auto"
                style={{ maxHeight: "65vh" }}
              >
                {gamesData && gamesData.length > 0 ? (
                  gamesData
                    // sort through rating for relevant results, may let user set an option
                    .sort((a, b) => b.total_rating - a.total_rating)
                    .map((game) => (
                      <Link
                        to={`/info/${game.id}`}
                        key={game.id}
                        onMouseEnter={() => {
                          setGameHover(game.id);
                        }}
                        onMouseLeave={() => setGameHover("")}
                      >
                        <motion.div
                          className="rounded-xl px-14"
                          animate={{
                            backgroundColor:
                              gameHover === game.id ? "#000000" : "#ffffff",
                            color:
                              gameHover === game.id ? "#ffffff" : "#000000",
                            paddingBottom:
                              gameHover === game.id ? "3.5rem" : "2rem",
                            paddingTop:
                              gameHover === game.id ? "3.5rem" : "2rem",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center justify-between text-lg">
                            <p>{game.name}</p>
                            {gameHover === game.id ? (
                              <>
                                <motion.div
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -20 }}
                                  transition={{ duration: 0.8 }}
                                >
                                  <p>
                                    {game.rating != null
                                      ? game.rating.toFixed(2)
                                      : "No Rating"}
                                  </p>
                                </motion.div>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <p>
                            {game.first_release_date ? (
                              new Date(
                                game.first_release_date * 1000,
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            ) : (
                              <p>Release Data NA</p>
                            )}
                          </p>
                        </motion.div>
                      </Link>
                    ))
                ) : (
                  <>
                    {resultVisibility ? (
                      <div className="flex w-full items-center justify-center">
                        No games found. Please try using more specific keywords.
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
            <div className="overflow-x-hidden">
              <InfoPage />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
