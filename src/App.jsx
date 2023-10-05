import "./App.css";
import activeWear from "../active-wear.json";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import ItemPage from "./components/ItemPage/ItemPage";
import MensWear from "./components/MensWear/MensWear";
import WomensWear from "./components/WomensWear/WomensWear";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(activeWear);
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing data={data} />} />
          <Route
            path="/mens"
            element={
              <MensWear data={data.filter((item) => item.gender === "Male")} />
            }
          />
          <Route
            path="/womens"
            element={
              <WomensWear
                data={data.filter((item) => item.gender === "Female")}
              />
            }
          />
          <Route path="/item/:id" element={<ItemPage data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
