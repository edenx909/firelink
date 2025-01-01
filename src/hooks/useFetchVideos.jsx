import { useState } from "react";

const useFetchVideos = () => {
  const [videoData, setVideoData] = useState(null);
  const fetchVideos = async (id) => {
    try {
      const response = await fetch(`/api/videos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Cover data");
      }
      const jsonData = await response.json();
      setVideoData(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  return { videoData, fetchVideos };
};

export default useFetchVideos;
