/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import useFetchGame from "../hooks/useFetchGame";
import useFetchCover from "../hooks/useFetchCover";
import { useEffect } from "react";

const InfoPage = () => {
  const { id } = useParams();
  const { gameData, fetchData } = useFetchGame();
  const { coverData, fetchCover } = useFetchCover();

  useEffect(() => {
    fetchData(id); // Fetch data when the id changes
  }, [id, fetchData]);

  useEffect(() => {
    if (gameData && gameData[0]?.cover) {
      fetchCover(gameData[0].cover);
    }
  }, [fetchCover, gameData]);
  console.log(gameData);
  console.log(coverData);
  return (
    <div>
      {gameData && coverData ? (
        <>
          <h1>{gameData[0].name}</h1>
          <h1>{gameData[0].aggregated_rating}</h1>
          <img src={coverData[0].url} style={{ width: "10rem" }} />
          <p>
            {new Date(gameData[0].first_release_date * 1000).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InfoPage;
