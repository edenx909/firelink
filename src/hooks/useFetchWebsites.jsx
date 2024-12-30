import { useState, useCallback } from "react";
const clientID = import.meta.env.VITE_CLIENT_ID;
const accessToken = `Bearer ${import.meta.env.VITE_AUTHORIZATION}`;
const baseURL = import.meta.env.VITE_API_BASE_URL || "/api";

const useFetchWebsites = () => {
  const [websiteData, setWebsiteData] = useState(null);
  const fetchWebsite = useCallback(async (id) => {
    try {
      const response = await fetch(`/${baseURL}/websites`, {
        method: "POST",
        headers: {
          "Client-ID": clientID,
          Authorization: accessToken,
          "Content-Type": "text/plain",
        },
        body: `fields checksum,url; where game=${id};`,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch websites data");
      }
      const jsonData = await response.json();
      setWebsiteData(jsonData);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { websiteData, fetchWebsite };
};

export default useFetchWebsites;
