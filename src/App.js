import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Ensure correct path
import Header from "./components/Header";
function App() {
  return (
    <>
  <Header /> {/* Add the Header component here */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other routes can be added here */}
      </Routes>
  </>
  );
}

export default App;
