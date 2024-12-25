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
  const [loading, setLoading] = useState(true);
  const [fetchStatus, setFetchStatus] = useState({
    cover: false,
    website: false,
    length: false,
    artwork: false,
    videos: false,
    screenshots: false,
  });

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
      // cant do normal check since some of these may return null
      setFetchStatus((prev) => ({ ...prev, cover: false }));
      fetchCover(gameData[0].cover).finally(() =>
        setFetchStatus((prev) => ({ ...prev, cover: true }))
      );
      setFetchStatus((prev) => ({ ...prev, website: false }));
      fetchWebsite(gameData[0].id).finally(() =>
        setFetchStatus((prev) => ({ ...prev, website: true }))
      );
      setFetchStatus((prev) => ({ ...prev, length: false }));
      fetchLength(gameData[0].id).finally(() =>
        setFetchStatus((prev) => ({ ...prev, length: true }))
      );
      setFetchStatus((prev) => ({ ...prev, artwork: false }));
      fetchArtwork(gameData[0].id).finally(() =>
        setFetchStatus((prev) => ({ ...prev, artwork: true }))
      );
      setFetchStatus((prev) => ({ ...prev, videos: false }));
      fetchVideos(gameData[0].id).finally(() =>
        setFetchStatus((prev) => ({ ...prev, videos: true }))
      );
      setFetchStatus((prev) => ({ ...prev, screenshots: false }));
      fetchScreenshots(gameData[0].id).finally(() =>
        setFetchStatus((prev) => ({ ...prev, screenshots: true }))
      );
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

  useEffect(() => {
    if (
      fetchStatus.cover &&
      fetchStatus.website &&
      fetchStatus.length &&
      fetchStatus.artwork &&
      fetchStatus.videos &&
      fetchStatus.screenshots
    ) {
      setLoading(false);
    }
  }, [fetchStatus]);

  return (
    <>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="z-20">
          {gameData && gameData[0] ? (
            <div className="flex flex-col items-center justify-center md:space-y-4 space-y-2">
              {artworkData ? (
                <Artwork
                  artworkData={artworkData}
                  lengthData={lengthData}
                  gameData={gameData}
                />
              ) : (
                <></>
              )}
              <div className="bg-white flex flex-col items-center justify-center p-10">
                <div className="flex justify-center md:items-end xl:mx-40 mx-12 2xl:mx-64 flex-col md:flex-row">
                  <div
                    className={`flex flex-col items-center md:p-4  ${
                      artworkData[0] ? "-mt-60" : "mt-20"
                    }`}
                  >
                    <Cover coverData={coverData} />
                  </div>
                  <div className="space-y-4 flex flex-col  md:items-end md:py-4 py-2 items-center">
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
                  </div>
                </div>
                <Story gameData={gameData} />
                <Screenshots screenshotsData={screenshotsData} />
                <Videos videoData={videoData} />
              </div>
            </div>
          ) : (
            <p className="h-screen flex items-center justify-center">
              Loading...
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default InfoPage;
