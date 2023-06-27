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
          updateHTML(data);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        console.log("Response:", error.response);
      });
  };

  function updateHTML(data) {
    //Current Searched City Data
    const cityName = document.getElementById("cityName");
    const cityState = document.getElementById("cityState");
    const localTime = document.getElementById("localTime");

    //Current Temp from search
    // const weatherIcon = document.getElementById("localTime");
    const windSpeed = document.getElementById("localTime");
    const UVIndex = document.getElementById("localTime");

    //5 Day Forecast Variables

    //Convert time from Military time
    const localtime = (localTime.textContent = data.location.localtime);
    const timeParts = localtime.split(" ")[1].split(":");
    // Split the time at ":" into hours and minutes

    let hours = parseInt(timeParts[0]);
    const minutes = timeParts[1];

    // Convert the hours to 12-hour format
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // If hours is 0, set it to 12

    const formattedTime = `${hours}:${minutes} ${meridiem}`;

    console.log(formattedTime); // Output: 5:10 PM

    // Update the HTML content with the fetched data
    cityName.textContent = data.location.name;
    cityState.textContent = data.location.region;
    localTime.textContent = `Local Time: ${formattedTime}`;

    // const weatherIcon = data.current.condition.icon
  }

  return (
    <div>
      <main className="container mx-auto w-100vw bg-white p-6 rounded-lg shadow-lg">
        <div className="locationContainer">
          <p id="cityName" style={{ fontSize: 26 }}>
            Denver
          </p>
          <p id="cityState">Colorado</p>
          <p id="localTime">Monday 9:00 AM</p>
        </div>

        <div className="dailyContainer">
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
    </div>
  );
}
export { DailyReport };
