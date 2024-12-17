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
    <div>
      {gameData && gameData[0] ? (
        <div className="flex  flex-col items-center justify-center space-y-4 mt-20">
          <Artwork artworkData={artworkData} />
          {/* <h1 className="text-4xl">{gameData[0].name}</h1> */}{" "}
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <Cover coverData={coverData} /> <Rating gameData={gameData} />
              <Length lengthData={lengthData} />
            </div>

            <Story gameData={gameData} />
          </div>
          <Screenshots screenshotsData={screenshotsData} />
          <Videos videoData={videoData} />
          <p>
            Release Date -{" "}
            {new Date(gameData[0].first_release_date * 1000).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>
          <Websites websiteData={websiteData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InfoPage;
