import { useState } from "react";

const useFetchArtwork = () => {
  const [artworkData, setArtworkData] = useState(null);
  const fetchArtwork = async (id) => {
    try {
      const response = await fetch(`/api/artwork/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Artwork data");
      }
      const jsonData = await response.json();
      setArtworkData(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  return { artworkData, fetchArtwork };
};

export default useFetchArtwork;
