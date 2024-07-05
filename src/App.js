import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Ensure correct path
import AddYourJourney from "./components/AddYourJourney"; // Ensure correct path
import SuggestedOptionsList from "./components/SuggestedOptions"; // Ensure correct path
import MapView from "./components/MapView"; // Ensure correct path
import LandingPagee from "./components/LandingPagee"; // Ensure correct path
import Header from "./components/Header";
function App() {
  return (
    <>
  <Header /> {/* Add the Header component here */}

      <Routes>
        <Route path="/" element={<LandingPagee />} />
        <Route path="/Techchallenge24s" element={<LandingPagee />} />
        <Route path="/addyourjourney" element={<AddYourJourney />} />
        <Route path="/suggestedoptions" element={<SuggestedOptionsList />} />
        <Route path="/mapview" element={<MapView />} />
        <Route path="/landingpagee" element={<LandingPagee />} />
        <Route path="/landingpage" element={<LandingPage />} />


        {/* Other routes can be added here */}
      </Routes>
  </>
  );
}

export default App;
