import { useState } from "react";

const useFetchCover = () => {
  const [coverData, setCoverData] = useState(null);

  const fetchCover = async (coverID) => {
    try {
      const response = await fetch(`/api/cover/${coverID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
  };

  return { coverData, fetchCover };
};

export default useFetchCover;
