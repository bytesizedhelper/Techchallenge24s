import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Ensure correct path
import AddYourJourney from "./components/AddYourJourney"; // Ensure correct path

import Header from "./components/Header";
function App() {
  return (
    <>
  <Header /> {/* Add the Header component here */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Techchallenge24s" element={<LandingPage />} />
        <Route path="/addyourjourney" element={<AddYourJourney />} />

        {/* Other routes can be added here */}
      </Routes>
  </>
  );
}

export default App;
