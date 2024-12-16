/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import useFetchGame from "../hooks/useFetchGame";
import useFetchCover from "../hooks/useFetchCover";
import useFetchWebsites from "../hooks/useFetchWebsites";
import useFetchLength from "../hooks/useFetchLength";
import { useEffect } from "react";

const InfoPage = () => {
  const { id } = useParams();
  const { gameData, fetchData } = useFetchGame();
  const { coverData, fetchCover } = useFetchCover();
  const { websiteData, fetchWebsite } = useFetchWebsites();
  const { lengthData, fetchLength } = useFetchLength();

  useEffect(() => {
    fetchData(id); // Fetch data when the id changes
  }, [id, fetchData]);

  useEffect(() => {
    if (gameData && gameData[0]?.cover) {
      fetchCover(gameData[0].cover);
      fetchWebsite(gameData[0].id);
      fetchLength(gameData[0].id);
    }
  }, [fetchCover, fetchLength, fetchWebsite, gameData]);

  return (
    // needs conditional rendering on everything, do more tests
    <div>
      {gameData && coverData && websiteData && lengthData ? (
        <>
          <img
            src={coverData[0].url.replace("t_thumb", "t_1080p")}
            style={{ width: "20rem" }}
          />
          {/* Name & Rating */}
          <h1>{gameData[0].name}</h1>
          <p>{gameData[0].aggregated_rating}</p>
          {/* Story */}
          <p>Storyline - {gameData[0].storyline}</p>
          <p>Summary - {gameData[0].summary}</p>

          {/*  HLTB */}
          <p>Time to Beat</p>
          <p>Normal Playthrough - {lengthData[0].normally / 3600} hrs</p>
          <p>
            Completionist Playthrough - {lengthData[0].completely / 3600} hrs
          </p>
          <p>{gameData[0].name}</p>

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
          {websiteData.map((url) => (
            <a key={url.id} href={url.url}>
              {url.url}
              <br />
            </a>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InfoPage;
