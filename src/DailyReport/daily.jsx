import { useEffect, useState } from "react";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import sunnyIcon from "../assets/sun.png";
import cloudyIcon from "../assets/cloudy.png";
import partlyCloudyIcon from "../assets/partlyCloudy.png";
import rainyIcon from "../assets/rainy.png";
import stormIcon from "../assets/storm.png";
import "../index.css";

function DailyReport({ searchedCity }) {
  const [icon, setIcon] = useState(sunnyIcon);
  const [cityName, setCityName] = useState("Denver, Colorado");
  const [localTime, setLocalTime] = useState("9:00 AM");
  const [weatherCondition, setWeatherCondition] = useState("Sunny");
  const [currentTemp, setCurrentTemp] = useState("78 F");
  const [day1High, setDay1High] = useState("");
  const [day1Low, setDay1Low] = useState("");
  const [day2High, setDay2High] = useState("");
  const [day2Low, setDay2Low] = useState("");

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
          console.log(data);
          var weatherIcon = data.current.condition.text.toLowerCase();
          switch (weatherIcon) {
            case "sunny":
              setIcon(sunnyIcon);
              break;
            case "clear":
              setIcon(sunnyIcon);
              break;
            case "cloudy":
              setIcon(cloudyIcon);
              break;
            case "partly cloudy":
              setIcon(partlyCloudyIcon);
              break;
            case "rainy":
              setIcon(rainyIcon);
              break;
            case "storm":
              setIcon(stormIcon);
              break;
            default:
              setIcon(null);
              break;
          }
          setDay1High(data.forecast.forecastday[1].day.maxtemp_f);
          setDay1Low(data.forecast.forecastday[1].day.mintemp_f);
          setDay2High(data.forecast.forecastday[2].day.maxtemp_f);
          setDay2Low(data.forecast.forecastday[2].day.mintemp_f);
          updateHTML(data);
        }
      })
      .catch((error) => {
        // Handle errors
        console.log("Response:", error.text);
      });
  };

  function updateHTML(data) {
    // Update the state variables with the fetched data
    setCityName(`${data.location.name}, ${data.location.region}`);
    setLocalTime(data.location.localtime);

    //Current Weather Data
    setCurrentTemp(`${data.current.temp_f} F`);
    setWeatherCondition(`${data.current.condition.text}`);

    //Update the state variables for 5 day Forcast Info
    setDay1High(data.forecast.forecastday[1].day.maxtemp_f);
    setDay1Low(data.forecast.forecastday[1].day.mintemp_f);
    setDay2High(data.forecast.forecastday[2].day.maxtemp_f);
    setDay2Low(data.forecast.forecastday[2].day.mintemp_f);
  }

  useEffect(() => {
    // Convert time from Military time
    if (localTime) {
      const timeParts = localTime.split(" ")[1].split(":");
      // Split the time at ":" into hours and minutes
      let hours = parseInt(timeParts[0]);
      const minutes = timeParts[1];
      // Convert the hours to 12-hour format
      const meridiem = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // If hours is 0, set it to 12
      const formattedTime = `${hours}:${minutes} ${meridiem}`;
      setLocalTime(formattedTime);
    }
  }, [localTime]);

  return (
    <div className="flex h-screen p-2">
      <div className="w-1/3 h-full bg-red-600 opacity-70 text-center">
        <div className="h-3/5 ">
          <p className="text-2xl p-4">Location</p>
          <p id="cityName" className="text-2xl p-2">
            {cityName}
          </p>
          <p id="currentTemp">{currentTemp}</p>
          <div className="flex justify-center my-8">
            {icon && <img src={icon} alt="Weather Icon" className="w-1/4" />}
          </div>
          <p id="weatherCondition">{weatherCondition}</p>
        </div>
        <div className="h-2/5 ">Bottom Row</div>
      </div>
      <div className="w-2/5 h-full bg-gray-600 opacity-70">
        <div className="h-3/5">Top Row</div>
        <div className="h-2/5">Bottom Row</div>
      </div>
      <div className="w-1/4 h-full bg-gray-600 opacity-70 flex-col flex justify-center items-center">
        <div className="h-3/5 w-full bg-blue-400 flex justify-center items-center">
          <p id="localTime" className="text-3xl text-center">
            {localTime}
          </p>
        </div>
        <div className="h-2/5 w-full">
          <p>This will be another row</p>
        </div>
      </div>
    </div>
  );
}

export { DailyReport };

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

