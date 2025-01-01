import { useParams } from "react-router-dom";
import useFetchGame from "../hooks/useFetchGame";
import useFetchCover from "../hooks/useFetchCover";
import useFetchWebsites from "../hooks/useFetchWebsites";
import useFetchLength from "../hooks/useFetchLength";
import useFetchArtwork from "../hooks/useFetchArtwork";
import useFetchVideos from "../hooks/useFetchVideos";
import useFetchScreenshots from "../hooks/useFetchScreenshots";
import { useEffect, useState } from "react";
import Screenshots from "./macros/Screenshots";
import Artwork from "./macros/Artwork";
import Cover from "./macros/Cover";
import Story from "./macros/Story";
import Rating from "./macros/Rating";
import Videos from "./macros/Videos";
import Length from "./macros/Length";
import Websites from "./macros/Websites";
import Loading from "./macros/Loading";

const InfoPage = () => {
  const { id } = useParams();

  const { gameData, fetchData } = useFetchGame();
  const { coverData, fetchCover } = useFetchCover();
  const { websiteData, fetchWebsite } = useFetchWebsites();
  const { lengthData, fetchLength } = useFetchLength();
  const { artworkData, fetchArtwork } = useFetchArtwork();
  const { videoData, fetchVideos } = useFetchVideos();
  const { screenshotsData, fetchScreenshots } = useFetchScreenshots();

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id, fetchData]);

  // loading state now used for useEffect as well
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (gameData && gameData[0] && !hasFetched) {
      setHasFetched(true);
      fetchCover(gameData[0].cover);
      fetchWebsite(gameData[0].id);
      fetchLength(gameData[0].id);
      fetchArtwork(gameData[0].id);
      fetchVideos(gameData[0].id);
      fetchScreenshots(gameData[0].id);
      console.log("Made by Eden Rana using React & Framer Motion with ♡");
    }
  }, [
    gameData,
    fetchCover,
    fetchWebsite,
    fetchLength,
    fetchArtwork,
    fetchVideos,
    fetchScreenshots,
    hasFetched,
  ]);

  return (
    <>
      {!hasFetched ? (
        <div className="flex h-screen items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="z-20">
          {gameData && gameData[0] ? (
            <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
              {artworkData ? (
                <Artwork
                  artworkData={artworkData}
                  lengthData={lengthData}
                  gameData={gameData}
                />
              ) : (
                <></>
              )}
              <div className="flex flex-col items-center justify-center bg-white p-10">
                <div className="mx-12 flex flex-col justify-center md:flex-row md:items-end xl:mx-40 2xl:mx-64">
                  <div
                    className={`flex flex-col items-center md:p-4 ${
                      artworkData ? "-mt-60" : "mt-20"
                    }`}
                  >
                    <Cover coverData={coverData} />
                  </div>
                  <div className="flex flex-col items-center space-y-4 py-2 md:items-end md:py-4">
                    <Length lengthData={lengthData} />
                    <p>
                      {new Date(
                        gameData[0].first_release_date * 1000,
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <Rating gameData={gameData} />
                    <Websites websiteData={websiteData} />
                  </div>
                </div>
                <Story gameData={gameData} />
                <Screenshots screenshotsData={screenshotsData} />
                <Videos videoData={videoData} />
              </div>
            </div>
          ) : (
            <p className="flex h-screen items-center justify-center">
              Loading...
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default InfoPage;
