import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutCoffeePage from "../pages/aboutCoffe/AboutCoffee";
import CoffeePage from "../pages/coffeePage/CoffeePage";
import MainPage from "../pages/mainPage/MainPage";
import PleasurePage from "../pages/pleasurePage/PleasurePage";

function App() {
  const data = [
    { name: "AROMISTICO Coffee 1 kg", country: "Brazil", id: 1 },
    { name: "Jacobs Coffee 1 kg", country: "Kenya", id: 2 },
    { name: "Nescafe Coffee 2 kg", country: "Columbia", id: 3 },
    { name: "AROMISTICO Coffee 1 kg", country: "Brazil", id: 4 },
    { name: "Jacobs Coffee 1 kg", country: "Kenya", id: 5 },
    { name: "Nescafe Coffee 2 kg", country: "Columbia", id: 6 },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coffeepage" element={<CoffeePage data={data} />} />
        <Route path="/aboutcoffee" element={<AboutCoffeePage />} />
        <Route path="/pleasure" element={<PleasurePage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
