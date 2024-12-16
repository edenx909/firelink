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
        body: `fields height,image_id,url,width; where id = ${coverID};`,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
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
