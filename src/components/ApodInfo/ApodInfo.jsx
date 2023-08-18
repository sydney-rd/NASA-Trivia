import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ApodInfo.css";

export default function ApodInfo() {
  const [apodData, setApodData] = useState([]);
  const [index, setIndex] = useState(0);

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
      {apodData[index] && (
        <div className="APOD-container">
          <h3 className="APOD-title">{apodData[index].title}</h3>
          <img
            className="APOD-img"
            src={apodData[index].url}
            alt={apodData[index].title}
          />
          <p className="APOD-date">{apodData[index].date}</p>
          <p className="APOD-explanation">{apodData[index].explanation}</p>
        </div>
      )}
    </div>
  );
}
