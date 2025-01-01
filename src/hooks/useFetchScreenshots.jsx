import { useState } from "react";

const useFetchScreenshots = () => {
  const [screenshotsData, setScreenshotsData] = useState(null);
  const fetchScreenshots = async (id) => {
    try {
      const response = await fetch(`/api/screenshots/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Screenshots data");
      }
      const jsonData = await response.json();
      setScreenshotsData(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  return { screenshotsData, fetchScreenshots };
};

export default useFetchScreenshots;
