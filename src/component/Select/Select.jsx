import React, { useState } from "react";
import "./Select.css";

const Select = () => {
  const [selectedOption, setSelectedOption] = useState("Van");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="select-container">
      <div className="select-box">
        <h1>İller</h1>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="Adana">Adana</option>
          <option value="İstanbul">İstanbul</option>
          <option value="Van">Van</option>
          <option value="Adıyaman">Adıyaman</option>
          <option value="Sinop">Sinop</option>
          <option value="Trapzon">Trapzon</option>
        </select>
      </div>

      <div className="select-box">
        <h1>İlçeler</h1>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="Adana">Adana</option>
          <option value="İstanbul">İstanbul</option>
          <option value="Van">Van</option>
          <option value="Adıyaman">Adıyaman</option>
          <option value="Sinop">Sinop</option>
          <option value="Trapzon">Trapzon</option>
        </select>
      </div>

      <div className="select-box">
        <h1>Mahalle</h1>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="Adana">Adana</option>
          <option value="İstanbul">İstanbul</option>
          <option value="Van">Van</option>
          <option value="Adıyaman">Adıyaman</option>
          <option value="Sinop">Sinop</option>
          <option value="Trapzon">Trapzon</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
