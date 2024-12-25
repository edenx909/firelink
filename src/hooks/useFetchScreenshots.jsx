import { useState, useCallback } from "react";
const clientID = import.meta.env.VITE_CLIENT_ID;
const accessToken = `Bearer ${import.meta.env.VITE_AUTHORIZATION}`;

const useFetchScreenshots = () => {
  const [screenshotsData, setScreenshotsData] = useState(null);
  const fetchScreenshots = useCallback(async (id) => {
    try {
      const response = await fetch("/api/screenshots", {
        method: "POST",
        headers: {
          "Client-ID": clientID,
          Authorization: accessToken,
          "Content-Type": "text/plain",
        },
        body: `fields checksum,game,image_id,url; where game = ${id};`,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Screenshots data");
      }
      const jsonData = await response.json();
      setScreenshotsData(jsonData);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { screenshotsData, fetchScreenshots };
};

export default useFetchScreenshots;
