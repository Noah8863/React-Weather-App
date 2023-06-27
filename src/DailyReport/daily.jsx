import React, { useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./index.css";

function DailyReport({ searchedCity }) {
  useEffect(() => {
    fetchData(searchedCity);
  }, [searchedCity]);

  const fetchData = (searchedCity) => {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchedCity}&days=5`;
    // const url = `https://weatherapi-com.p.rapid`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5ead5cf470msh36ab28d485526e2p1a0624jsn33e9f2c7cbfd",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          // Process the fetched data
          console.log(data);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        console.log("Response:", error.response);
      });
  };

  return (
    <main className="container mx-auto w-100vw bg-white p-6 rounded-lg shadow-lg">
      <div className="locationContainer">
        <p>Denver</p>
        <p style={{ fontSize: 14 }}>Colorado</p>
        <p>Monday 9:00 AM</p>
      </div>
      <div className="dailyContainer">
        <div>Weather ICON Here</div>
        <div id="currentTemps">
          <div>
            <KeyboardArrowUpIcon />
            76
          </div>
          <p style={{ fontSize: 28 }}>74</p>
          <div>
            <KeyboardArrowDownIcon />
            61
          </div>
        </div>
      </div>
      <div className="forecastContainer">
        <div id="day1">
          <p>Monday</p>
          <div>
            <KeyboardArrowUpIcon />
            76
          </div>
          <div>
            <KeyboardArrowDownIcon />
            61
          </div>
        </div>
        <div id="day2">
          <p>Tuesday</p>
          <div>
            <KeyboardArrowUpIcon />
            76
          </div>
          <div>
            <KeyboardArrowDownIcon />
            61
          </div>
        </div>
        <div id="day3">
          <p>Wednsday</p>
          <div>
            <KeyboardArrowUpIcon />
            76
          </div>
          <div>
            <KeyboardArrowDownIcon />
            61
          </div>
        </div>
        <div id="day4">
          <p>Thursday</p>
          <div>
            <KeyboardArrowUpIcon />
            76
          </div>
          <div>
            <KeyboardArrowDownIcon />
            61
          </div>
        </div>
        <div id="day5">
          <p>Friday</p>
          <div>
            <KeyboardArrowUpIcon />
            76
          </div>
          <div>
            <KeyboardArrowDownIcon />
            61
          </div>
        </div>
      </div>
    </main>
  );
}
export { DailyReport };
