import { useParams } from "react-router-dom";
import useFetchGame from "../hooks/useFetchGame";
import useFetchCover from "../hooks/useFetchCover";
import useFetchWebsites from "../hooks/useFetchWebsites";
import useFetchLength from "../hooks/useFetchLength";
import useFetchArtwork from "../hooks/useFetchArtwork";
import useFetchVideos from "../hooks/useFetchVideos";
import useFetchScreenshots from "../hooks/useFetchScreenshots";
import { useEffect } from "react";

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
    fetchData(id); // Fetch data when the id changes from params
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
        <div>
          <h1>{gameData[0].name}</h1>
          {/* img & videos */}
          <h1>Cover Image</h1>
          {coverData && coverData[0] && (
            <img
              src={coverData[0].url.replace("t_thumb", "t_1080p")}
              style={{ width: "20rem" }}
            />
          )}

          {artworkData && artworkData[0] && (
            <>
              {" "}
              <h1>Artwork Image</h1>
              <img
                src={artworkData[0].url.replace("t_thumb", "t_1080p")}
                style={{ width: "20rem" }}
              />
            </>
          )}
          <h1>Screenshots</h1>
          {screenshotsData?.map((screenshot) => (
            <img
              key={screenshot.image_id}
              src={screenshot.url.replace("t_thumb", "t_1080p")}
              style={{ width: "20rem" }}
            />
          ))}
          {/*  videos can be many, sliced for better ux */}
          <h1>Videos</h1>
          {videoData?.slice(-3).map((video) => (
            <div key={video.checksum}>
              <p>{video.name}</p>
              <a
                href={`https://www.youtube.com/watch?v=${video.video_id}`}
                target="_blank"
              />
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.video_id}`}
                allow="clipboard-write; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          ))}

          {/* Name & Rating */}

          <h1>Rating</h1>
          <p>{gameData[0].aggregated_rating}</p>
          {/* Story */}
          <p>Storyline - {gameData[0].storyline}</p>
          <p>Summary - {gameData[0].summary}</p>

          {/*  HLTB */}
          <h1>How Long To Beat</h1>
          {lengthData && lengthData[0] && (
            <div>
              <p>Time to Beat</p>
              <p>Normal Playthrough - {lengthData[0].normally / 3600} hrs</p>
              <p>
                Completionist Playthrough - {lengthData[0].completely / 3600}
                hrs
              </p>
            </div>
          )}

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
          <h1>Websites</h1>
          {websiteData?.map((url) => (
            <div key={url.id}>
              <a key={url.id} href={url.url}>
                {url.url}
                <br />
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InfoPage;
