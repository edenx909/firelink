import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
