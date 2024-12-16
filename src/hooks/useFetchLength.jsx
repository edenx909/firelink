import { useState, useCallback } from "react";
const clientID = import.meta.env.VITE_CLIENT_ID;
const accessToken = `Bearer ${import.meta.env.VITE_AUTHORIZATION}`;

const useFetchLength = () => {
  const [lengthData, setLengthData] = useState(null);
  const fetchLength = useCallback(async (id) => {
    try {
      const response = await fetch("/api/game_time_to_beats", {
        method: "POST",
        headers: {
          "Client-ID": clientID,
          Authorization: accessToken,
          "Content-Type": "text/plain",
        },
        body: `fields checksum,completely,count,created_at,game_id,hastily,normally,updated_at;  where game_id=${id};`,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch length data");
      }

      const jsonData = await response.json();
      setLengthData(jsonData);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { lengthData, fetchLength };
};

export default useFetchLength;
