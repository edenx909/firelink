import { useState, useCallback } from "react";
const clientID = import.meta.env.VITE_CLIENT_ID;
const accessToken = `Bearer ${import.meta.env.VITE_AUTHORIZATION}`;

const useFetchVideos = () => {
  const [videoData, setVideoData] = useState(null);
  const fetchVideos = useCallback(async (id) => {
    try {
      const response = await fetch("/api/game_videos", {
        method: "POST",
        headers: {
          "Client-ID": clientID,
          Authorization: accessToken,
          "Content-Type": "text/plain",
        },
        body: `fields checksum,game,name,video_id; where game = ${id};`,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Cover data");
      }
      const jsonData = await response.json();
      setVideoData(jsonData);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { videoData, fetchVideos };
};

export default useFetchVideos;
