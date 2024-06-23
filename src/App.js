import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Ensure correct path
import Header from "./components/Header";
function App() {
  return (
    <>
  <Header /> {/* Add the Header component here */}

       
      <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
