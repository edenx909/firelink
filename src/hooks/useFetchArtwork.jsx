import { useState, useCallback } from "react";
const clientID = import.meta.env.VITE_CLIENT_ID;
const accessToken = `Bearer ${import.meta.env.VITE_AUTHORIZATION}`;

const useFetchArtwork = () => {
  const [artworkData, setArtworkData] = useState(null);
  const fetchArtwork = useCallback(async (id) => {
    try {
      const response = await fetch("/api/artworks", {
        method: "POST",
        headers: {
          "Client-ID": clientID,
          Authorization: accessToken,
          "Content-Type": "text/plain",
        },
        body: `fields image_id,url; where game=${id};`,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Cover data");
      }
      const jsonData = await response.json();
      setArtworkData(jsonData);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { artworkData, fetchArtwork };
};

export default useFetchArtwork;
