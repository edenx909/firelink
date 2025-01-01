import { useState } from "react";

const useFetchWebsites = () => {
  const [websiteData, setWebsiteData] = useState(null);
  const fetchWebsite = async (id) => {
    try {
      const response = await fetch(`/api/websites/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch websites data");
      }
      const jsonData = await response.json();
      setWebsiteData(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  return { websiteData, fetchWebsite };
};

export default useFetchWebsites;
