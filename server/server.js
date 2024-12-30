import express, { json } from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 3001;

dotenv.config();
app.use(json());

const clientID = process.env.CLIENT_ID;
const accessToken = `Bearer ${process.env.AUTHORIZATION}`;

console.log(clientID);
console.log(accessToken);

// Generic proxy route to forward requests to external APIs
app.post("/api/proxy", async (req, res) => {
  const { endpoint, body } = req.body;

  console.log("Received request:", req.body);

  if (!endpoint || !body) {
    return res.status(400).json({ error: "Missing endpoint or body" });
  }

  const url = `https://api.igdb.com/v4/${endpoint}`;
  const headers = {
    "Client-ID": clientID,
    Authorization: accessToken,
    "Content-Type": "text/plain",
  };

  try {
    console.log("Headers:", headers);
    const response = await fetch(url, { method: "POST", headers, body });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
