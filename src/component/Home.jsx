import React, { useEffect, useState } from "react";
import TurkeyMap from "turkey-map-react";
import "./Home.css";
import Select from "./Select/Select";
import Footer from "./Footer/Footer";
import Layout from "./Layout/Layout";
import Adaylar from "./Adaylar/Adaylar";

const Home = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [clickedCity, setClickedCity] = useState(null);

  const handleMapClick = (city) => {
    if (selectedCities.includes(city.id)) {
      const newCities = selectedCities.filter(
        (selectedCity) => selectedCity !== city.id
      );
      setSelectedCities(newCities);
    } else {
      setSelectedCities([...selectedCities, city.id]);
    }

    setClickedCity(city);
  };

  useEffect(() => {
    selectedCities.forEach((city) => {
      const element = document.getElementById(`${city}`);
      if (element) {
        element.classList.add("selected");
      }
    });
  }, [selectedCities]);

  return (
    <>
      <div className="turkey-map">
        <div className="harita">
          <TurkeyMap
            hoverable={true}
            customStyle={{ idleColor: "#ff2400 ", hoverColor: "#ffffff " }}
            showTooltip={true}
            onClick={(city) => handleMapClick(city)}
          />
        </div>
      </div>
      <Select />
      {clickedCity && (
        <div className="adaylar-container">
          <Adaylar clickedCity={clickedCity} setClickedCity={setClickedCity} />
        </div>
      )}
    </>
  );
};

export default Home;
