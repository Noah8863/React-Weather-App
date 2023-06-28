import React, { useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../index.css";

function DailyReport({ searchedCity }) {
  useEffect(() => {
    fetchData(searchedCity);
  }, [searchedCity]);

  const fetchData = (searchedCity) => {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchedCity}&days=6`;
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

          const temperature = data.current.temp_f;
          const backgroundColor = getBackgroundColor(temperature);
          // Apply the background color to your container
          const weatherContainer = (document.getElementById(
            "mainContainer"
          ).style.backgroundColor = backgroundColor);
          weatherContainer.style.transition = "background-color 4s ease";
          weatherContainer.style.backgroundColor = backgroundColor;
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        console.log("Response:", error.response);
      });
  };

  const getBackgroundColor = (temp) => {
    let backgroundColor = "";

    switch (true) {
      case temp < 40:
        backgroundColor = "#264653";
        break;
      case temp >= 41 && temp <= 60:
        backgroundColor = "#2A9D8F";
        break;
      case temp >= 61 && temp <= 80:
        backgroundColor = "#F4A261";
        break;
      case temp >= 81 && temp <= 100:
        backgroundColor = "#E76F51";
        break;
      default:
        backgroundColor = "white";
    }

    return backgroundColor;
  };

  function updateHTML(data) {
    //Current Searched City Data
    const cityName = document.getElementById("cityName");
    const cityState = document.getElementById("cityState");
    const localTime = document.getElementById("localTime");

    //Current Temp from search
    const currentTemp = document.getElementById("currentTemp");
    // const weatherIcon = document.getElementById("localTime");
    // const windSpeed = document.getElementById("localTime");
    // const UVIndex = document.getElementById("localTime");

    //5 Day Forecast Variables
    const day1High = document.getElementById("day1High");
    const day1Low = document.getElementById("day1Low");

    const day2High = document.getElementById("day2High");
    const day2Low = document.getElementById("day2Low");

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

    // Update the HTML content with the fetched data
    cityName.textContent = data.location.name;
    cityState.textContent = data.location.region;
    localTime.textContent = `Local Time: ${formattedTime}`;

    //Current Weather Data
    currentTemp.textContent = `${data.current.temp_f} F`;

    //Update the HTML content for 5 day Forcast Info
    day1High.textContent = data.forecast.forecastday[1].day.maxtemp_f;
    day1Low.textContent = data.forecast.forecastday[1].day.mintemp_f;

    day2High.textContent = data.forecast.forecastday[2].day.maxtemp_f;
    day2Low.textContent = data.forecast.forecastday[2].day.mintemp_f;

    // const weatherIcon = data.current.condition.icon
  }

  return (
    <div class="flex h-screen p-2">
      <div class="w-1/3 h-full bg-gray-600 opacity-70 text-center">
        <div class="h-3/5  ">
        <p id="cityName" style={{ fontSize: 26 }}>
        Denver
      </p>
      <p id="cityState">Colorado</p>
      <p id="localTime">Monday 9:00 AM</p>
        </div>
        <div class="h-2/5 ">Bottom Row</div>
      </div>
      <div class="w-3/5 h-full bg-gray-600 opacity-70">
        <div class="h-3/5">Top Row</div>
        <div class="h-2/5">Bottom Row</div>
      </div>
      <div class="w-1/4 h-full bg-gray-600 opacity-70">Column 3</div>
    </div>
  );
}
export { DailyReport };

{
  /* <div className="forecastContainer">
          <div id="day1">
            <p>Monday</p>
            <div id="day1High">76</div>
            <KeyboardArrowUpIcon />
            <KeyboardArrowDownIcon />
            <div id="day1Low">61</div>
          </div>
          <div id="day2">
            <p>Tuesday</p>
            <div id="day2High">76</div>
            <KeyboardArrowUpIcon />
            <KeyboardArrowDownIcon />
            <div id="day2Low">61</div>
          </div>
          <div id="day3">
            <p>Wednsday</p>
            <div id="day3High">76</div>
            <KeyboardArrowUpIcon />
            <KeyboardArrowDownIcon />
            <div id="day3Low">61</div>
          </div>
          <div id="day4">
            <p>Thursday</p>
            <div id="day4High">76</div>
            <KeyboardArrowUpIcon />
            <KeyboardArrowDownIcon />
            <div id="day4Low">61</div>
          </div>
          <div id="day5">
            <p>Friday</p>
            <div id="day5High">76</div>
            <KeyboardArrowUpIcon />
            <KeyboardArrowDownIcon />
            <div id="day5Low">61</div>
          </div>
        </div> */
}

{
  /* <div className="bg-blue-400 flex h-screen">
<div
  id="mainContainer"
  className="container w-4/12 bg-white p-6 h-screen rounded-lg shadow-lg w-1/5 h-full bg-red-500"
>
  <section>
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
        <p id="currentTemp" style={{ fontSize: 28 }}>
          74
        </p>
        <div>
          <KeyboardArrowDownIcon />
          61
        </div>
      </div>
    </div>
  </section>
  <section className="w-2/5 h-full bg-green-500">

  </section>
  <section className="bg-green-400">
      
  </section>
</div>
</div> */
}
