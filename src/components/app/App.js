import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutCoffeePage from "../pages/aboutCoffe/AboutCoffee";
import CoffeePage from "../pages/coffeePage/CoffeePage";
import MainPage from "../pages/mainPage/MainPage";
import PleasurePage from "../pages/pleasurePage/PleasurePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coffeepage" element={<CoffeePage />} />
        <Route path="/aboutcoffee" element={<AboutCoffeePage />} />
        <Route path="/pleasure" element={<PleasurePage />} />
      </Routes>
    </Router>
  );
}

export default App;
