# Firelink: A  Game Index Using IGDB API

Firelink is a web application that provides an index of games using the IGDB API. It allows users to search for games, view details such as ratings, release dates, and gameplay footage, and explore additional information about each game. Built with React for the frontend and Express for the backend, this app is a comprehensive game search tool.

---

## Features

- **Search Games**: Users can search for games by name.
- **Game Details**: View detailed information about a game, including ratings, release dates, platforms, storyline, and more.
- **Responsive UI**: The application is mobile-friendly, optimized for multiple screen sizes.
- **Animations**: Smooth animations using `motion` for interactive elements.
- **Game Media**: Display of screenshots, cover art, and videos related to each game.
- **Backend Integration**: Fetch data from the IGDB API using a custom backend with Express.
- **Error Handling**: Graceful error handling in case of missing data or API issues.

---

## Demo

You can access the live demo of the project at  [Firelink](https://firelink-production.up.railway.app/).

---

## Technologies Used

- **Frontend**: React, React Router, Tailwind CSS, Framer Motion (now motion.)
- **Backend**: Express.js, Node.js
- **Database/API**: IGDB API (used for fetching game data)
- **Deployment**: Railway


---

## API Endpoints

The backend provides several API endpoints to interact with the IGDB data, retrieve game details, and media.

### 1. **Search for Games**
   - **URL**: `/api/games`
   - **Method**: `GET`
   - **Query Parameters**:
     - `query`: The search term to find games.
   - **Example Request**:
     ```
     GET /api/games?query=nier
     ```

---

### 2. **Fetch Single Game Details**
   - **URL**: `/api/game/:id`
   - **Method**: `GET`
   - **URL Parameters**:
     - `id`: The unique game ID.
   - **Example Request**:
     ```
     GET /api/game/11208
     ```

---

### 3. **Fetch Game Artwork**
   - **URL**: `/api/artwork/:id`
   - **Method**: `GET`
   - **URL Parameters**:
     - `id`: The unique game ID.
   - **Example Request**:
     ```
     GET /api/artwork/11208
     ```

---

### 4. **Fetch Game Cover**
   - **URL**: `/api/cover/:coverID`
   - **Method**: `GET`
   - **URL Parameters**:
     - `coverID`: The cover image ID.
   - **Example Request**:
     ```
     GET /api/cover/213153
     ```

---

### 5. **Fetch Game Screenshots**
   - **URL**: `/api/screenshots/:id`
   - **Method**: `GET`
   - **URL Parameters**:
     - `id`: The unique game ID.
   - **Example Request**:
     ```
     GET /api/screenshots/11208
     ```

---

### 6. **Fetch Game Length (Time to Beat)**
   - **URL**: `/api/game_time_to_beats/:id`
   - **Method**: `GET`
   - **URL Parameters**:
     - `id`: The unique game ID.
   - **Example Request**:
     ```
     GET /api/game_time_to_beats/11208
     ```

---

### 7. **Fetch Game Videos**
   - **URL**: `/api/videos/:id`
   - **Method**: `GET`
   - **URL Parameters**:
     - `id`: The unique game ID.
   - **Example Request**:
     ```
     GET /api/videos/11208
     ```

---

### 8. **Fetch Game Websites**
   - **URL**: `/api/websites/:id`
   - **Method**: `GET`
   - **URL Parameters**:
     - `id`: The unique game ID.
   - **Example Request**:
     ```
     GET /api/websites/11208
     ```

---


