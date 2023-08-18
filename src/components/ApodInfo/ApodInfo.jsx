import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ApodInfo.css";

export default function ApodInfo({ apodIndex }) {
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/sydney-rd/NASA-api-project/main/APOD.json"
      )
      .then((response) => {
        const first10ApodData = response.data.slice(0, 10);
        setApodData(first10ApodData);
      })
      .catch((error) => {
        console.error("Error fetching APOD data:", error);
      });
  }, []);

  return (
    <div>
      {apodData[apodIndex] && (
        <div className="APOD-container">
          <h3 className="APOD-title">{apodData[apodIndex].title}</h3>
          <img
            className="APOD-img"
            src={apodData[apodIndex].url}
            alt={apodData[apodIndex].title}
          />
          <p className="APOD-date">{apodData[apodIndex].date}</p>
          <p className="APOD-explanation">{apodData[apodIndex].explanation}</p>
        </div>
      )}
    </div>
  );
}
