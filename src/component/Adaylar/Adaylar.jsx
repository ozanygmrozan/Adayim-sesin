import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Adaylar.css";

const Adaylar = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const candidateData = [
      {
        id: 1,
        photo:
          "https://e0.pxfuel.com/wallpapers/444/79/desktop-wallpaper-foto%C4%9Fraf-haval%C4%B1-foto%C4%9Fraflar.jpg",
        firstName: "Ozan",
        lastName: "Yağmur",
        description: "lodddddddddsaaaaaaaaaads",
      },
    ];

    setCandidates(candidateData);
  }, []);

  return (
    <div>
      <h1>Adaylar</h1>
      <div className="card-container">
        {candidates.map((candidate) => (
          <Link
            key={candidate.id}
            to={`Aday`}
            className="card-link"
          >
            <div className="card">
              <img
                src={candidate.photo}
                alt={`${candidate.firstName} ${candidate.lastName}`}
              />
              <h2>{`${candidate.firstName} ${candidate.lastName}`}</h2>
              <p>{candidate.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Adaylar;
