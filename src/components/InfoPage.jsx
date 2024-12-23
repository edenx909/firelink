import { useParams } from "react-router-dom";
import useFetchGame from "../hooks/useFetchGame";
import useFetchCover from "../hooks/useFetchCover";
import useFetchWebsites from "../hooks/useFetchWebsites";
import useFetchLength from "../hooks/useFetchLength";
import useFetchArtwork from "../hooks/useFetchArtwork";
import useFetchVideos from "../hooks/useFetchVideos";
import useFetchScreenshots from "../hooks/useFetchScreenshots";
import { useEffect } from "react";
import Screenshots from "./macros/Screenshots";
import Artwork from "./macros/Artwork";
import Cover from "./macros/Cover";
import Story from "./macros/Story";
import Rating from "./macros/Rating";
import Videos from "./macros/Videos";
import Length from "./macros/Length";
import Websites from "./macros/Websites";

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
    fetchData(id); // Fetch data, the id from params
  }, [id, fetchData]);

  useEffect(() => {
    if (gameData && gameData[0]) {
      fetchCover(gameData[0].cover);
      fetchWebsite(gameData[0].id);
      fetchLength(gameData[0].id);
      fetchArtwork(gameData[0].id);
      fetchVideos(gameData[0].id);
      fetchScreenshots(gameData[0].id);
    }
  }, [
    fetchArtwork,
    fetchCover,
    fetchLength,
    fetchScreenshots,
    fetchVideos,
    fetchWebsite,
    gameData,
  ]);

  return (
    // needs conditional rendering on everything, do more tests
    <div className="z-20">
      {gameData && gameData[0] ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          {artworkData ? (
            <Artwork
              artworkData={artworkData}
              lengthData={lengthData}
              gameData={gameData}
            />
          ) : (
            <></>
            // <h1 className="text-4xl">{gameData[0].name}</h1>
          )}
          <div className="bg-white flex flex-col items-center justify-center p-4">
            <div className="flex items-center w-full justify-center">
              <div className="flex flex-col items-center">
                <Cover coverData={coverData} />
              </div>
              <div className="space-y-5 px-4 flex flex-col items-end">
                <Length lengthData={lengthData} />
                <p>
                  {new Date(
                    gameData[0].first_release_date * 1000
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <Rating gameData={gameData} />
                <Websites websiteData={websiteData} />
                <Story gameData={gameData} />
              </div>
            </div>

            <Screenshots screenshotsData={screenshotsData} />
            <Videos videoData={videoData} />
          </div>
        </div>
      ) : (
        <p className="h-screen flex items-center justify-center">Loading...</p>
      )}
    </div>
  );
};

export default InfoPage;
