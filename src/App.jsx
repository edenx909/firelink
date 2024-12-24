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
                className={`flex items-center justify-center flex-col`}
                initial={{ height: "100vh" }}
                animate={{ height: gamesData ? "35vh" : "100vh" }}
              >
                <motion.h1
                  className="font-trajanpro z-50"
                  initial={{ fontSize: "10vw " }}
                  animate={{ fontSize: gamesData ? "4vw" : "10vw " }}
                >
                  Firelink
                </motion.h1>
                <p>A game index using the IGDB Database</p>
                <div className="flex space-x-5 relative items-center py-4">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-black px-5 py-2 rounded-xl w-[60vw]  text-black"
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
                          <div className="text-lg flex justify-between items-center">
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
                        </motion.div>
                      </Link>
                    ))
                ) : (
                  <>
                    {resultVisibility ? (
                      <div className="flex items-center w-full justify-center">
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
