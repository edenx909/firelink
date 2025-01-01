import { useState } from "react";

const useFetchLength = () => {
  const [lengthData, setLengthData] = useState(null);
  const fetchLength = async (id) => {
    try {
      const response = await fetch(`/api/game_time_to_beats/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch length data");
      }

      const jsonData = await response.json();
      setLengthData(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  return { lengthData, fetchLength };
};

export default useFetchLength;
