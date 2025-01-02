import express, { json } from "express";
import dotenv from "dotenv";
import path from "path";
import fetch from "node-fetch";
import cors from "cors";

const PORT = 3001;

const app = express();
app.use(cors());

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, "..", "dist")));

dotenv.config();
app.use(json());

const clientID = process.env.CLIENT_ID;
const accessToken = `Bearer ${process.env.AUTHORIZATION}`;

const headers = {
  "Client-ID": clientID,
  Authorization: accessToken,
  "Content-Type": "text/plain",
};

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

// games search
app.get("/api/games", async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: "Missing query!" });
  }
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers,
      body: `fields artworks,cover,first_release_date,name,platforms,rating,rating_count,release_dates,screenshots,slug,storyline,summary,total_rating,total_rating_count,url,version_parent,version_title,videos,websites; search "${query}"; where total_rating_count > 0 ;`,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to search data");
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// single game fetch
app.get("/api/game/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Missing game id!" });
  }
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers,
      body: `fields artworks,cover,first_release_date,name,platforms,rating,rating_count,release_dates,screenshots,slug,storyline,summary,total_rating,total_rating_count,url,version_parent,version_title,videos,websites; where id = ${id};`,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Reponse not ok to fetch single game data");
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching single game data:", err);
    res.status(500).json({ error: "Failed to fetch single game data" });
  }
});

// game artwork fetch
app.get("/api/artwork/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Missing game id!" });
  }
  try {
    const response = await fetch("https://api.igdb.com/v4/artworks", {
      method: "POST",
      headers,
      body: `fields image_id,url; where game=${id};`,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Reponse not ok to fetch artwork data");
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching artwork data:", err);
    res.status(500).json({ error: "Failed to fetch artwork data" });
  }
});

// game cover fetch
app.get("/api/cover/:coverID", async (req, res) => {
  const { coverID } = req.params;

  if (!coverID) {
    return res.status(400).json({ error: "Missing cover id!" });
  }
  try {
    const response = await fetch("https://api.igdb.com/v4/covers", {
      method: "POST",
      headers,
      body: `fields image_id,url; where id = ${coverID};`,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Response not ok to fetch cover data");
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching cover data:", err);
    res.status(500).json({ error: "Failed to fetch cover data" });
  }
});

// game screenshot fetch
app.get("/api/screenshots/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Missing game id!" });
  }
  try {
    const response = await fetch("https://api.igdb.com/v4/screenshots", {
      method: "POST",
      headers,
      body: `fields image_id,url; where game = ${id};`,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Reponse not ok to fetch screenshots data");
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching screenshots data:", err);
    res.status(500).json({ error: "Failed to fetch screenshots data" });
  }
});

// game length fetch
app.get("/api/game_time_to_beats/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Missing game id!" });
  }
  try {
    const response = await fetch("https://api.igdb.com/v4/game_time_to_beats", {
      method: "POST",
      headers,
      body: `fields checksum,completely,game_id,normally,updated_at;  where game_id=${id};`,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Respsonse not ok to fetch  length data");
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching length data:", err);
    res.status(500).json({ error: "Failed to fetch length data" });
  }
});

// game videos fetch
app.get("/api/videos/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Missing game id!" });
  }
  try {
    const response = await fetch("https://api.igdb.com/v4/game_videos", {
      method: "POST",
      headers,
      body: `fields checksum,game,name,video_id; where game = ${id};`,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Response not ok to fetch videos data");
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching videos data:", err);
    res.status(500).json({ error: "Failed to fetch videos data" });
  }
});

// game websites fetch
app.get("/api/websites/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Missing game id!" });
  }
  try {
    const response = await fetch("https://api.igdb.com/v4/websites", {
      method: "POST",
      headers,
      body: `fields checksum,game,url; where game=${id};`,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Response not to fetch websites data");
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching websites data:", err);
    res.status(500).json({ error: "Failed to fetch websites data" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
