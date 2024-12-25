import { useState, useCallback } from "react";
const clientID = import.meta.env.VITE_CLIENT_ID;
const accessToken = `Bearer ${import.meta.env.VITE_AUTHORIZATION}`;

const useFetchCover = () => {
  const [coverData, setCoverData] = useState(null);
  const fetchCover = useCallback(async (coverID) => {
    try {
      const response = await fetch("/api/covers", {
        method: "POST",
        headers: {
          "Client-ID": clientID,
          Authorization: accessToken,
          "Content-Type": "text/plain",
        },
        body: `fields image_id,url; where id = ${coverID};`,
      });
      if (!response.ok) {
        console.log("Failed to fetch Cover data");
        setCoverData(null);
      }
      const jsonData = await response.json();
      setCoverData(jsonData);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { coverData, fetchCover };
};

export default useFetchCover;
