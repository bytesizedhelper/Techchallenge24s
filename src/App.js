import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/LandingPage"; // Ensure correct path
import Header from "./components/Header";
function App() {
  return (
    <>
  <Header /> {/* Add the Header component here */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other routes can be added hereasd asd  */}
      </Routes>
    </>
  );
}

export default App;
