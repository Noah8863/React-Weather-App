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
  const [day1, setDay1] = useState("Monday");
  const [day2, setDay2] = useState("Tuesday");
  const [day3, setDay3] = useState("Wednesday");
  const [day2Icon, setDay2Icon] = useState(cloudyIcon)
  const [day3Icon, setDay3Icon] = useState(rainyIcon)
  const [day1Description, setday1Description] = useState ("Sunny")
  const [day2Description, setday2Description] = useState ("Cloudy")
  const [day3Description, setday3Description] = useState ("Rainy")

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
      // TODO Need to figure out conflicting weather reports 
      // Current Weather does not match up with overall daily weather condintion
      // Could make a 4th switch case JUST for the overall weather... uuuugh. sloppy code
      .then((data) => {
        if (data) {
          console.log(data);
          var weatherIcon = data.forecast.forecastday[0].day.condition.text.toLowerCase();
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
            case "overcast":
              setIcon(cloudyIcon);
              break;
            case "patchy rain possible":
              setIcon(cloudyIcon);
              break;
            default:
              setIcon(null);
              break;
          }
          var secondWeatherIcon = data.forecast.forecastday[1].day.condition.text.toLowerCase();
          switch (secondWeatherIcon) {
            case "sunny":
              setDay2Icon(sunnyIcon);
              break;
            case "clear":
              setDay2Icon(sunnyIcon);
              break;
            case "patchy rain possible":
              setDay2Icon(partlyCloudyIcon);
              break;
            case "cloudy":
              setDay2Icon(cloudyIcon);
              break;
            case "partly cloudy":
              setDay2Icon(partlyCloudyIcon);
              break
            case "moderate rain":
              setDay2Icon(rainyIcon);
              break;
            case "storm":
              setDay2Icon(stormIcon);
              break;
            default:
              setDay2Icon(null);
              break;
          }
          var thirdWeatherIcon = data.forecast.forecastday[2].day.condition.text.toLowerCase();
          switch (thirdWeatherIcon) {
            case "sunny":
              setDay3Icon(sunnyIcon);
              break;
            case "clear":
              setDay3Icon(sunnyIcon);
              break;
            case "patchy rain possible":
              setDay3Icon(partlyCloudyIcon);
              break;
            case "cloudy":
              setDay3Icon(cloudyIcon);
              break;
            case "partly cloudy":
              setDay3Icon(partlyCloudyIcon);
              break
            case "moderate rain":
              setDay3Icon(rainyIcon);
              break;
            case "storm":
              setDay3Icon(stormIcon);
              break;
            default:
              setDay3Icon(null);
              break;
          }
          const [year1, month1, day1] = data.forecast.forecastday[0].date.split("-");
          const firstDateObj = new Date(year1, month1 - 1, day1);
          const firstMonthName = firstDateObj.toLocaleString("en-US", { month: "long" });
          const firstFormattedDay = day1.padStart(2, "0");
          const firstFormattedDate = `${firstMonthName} ${firstFormattedDay}`;
          setDay1(firstFormattedDate);

          const [year2, month2, day2] = data.forecast.forecastday[1].date.split("-");
          const secondDateObj = new Date(year2, month2 - 1, day2);
          const secondMonthName = secondDateObj.toLocaleString("en-US", { month: "long" });
          const secondFormattedDay = day2.padStart(2, "0");
          const secondFormattedDate = `${secondMonthName} ${secondFormattedDay}`;
          setDay2(secondFormattedDate);

          const [year3, month3, day3] = data.forecast.forecastday[2].date.split("-");
          const thirdDateObj = new Date(year3, month3 - 1, day3);
          const thirdMonthName = thirdDateObj.toLocaleString("en-US", { month: "long" });
          const thirdFormattedDay = day2.padStart(2, "0");
          const thirdFormattedDate = `${thirdMonthName} ${thirdFormattedDay}`;
          setDay3(thirdFormattedDate);

          setDay1High(data.forecast.forecastday[1].day.maxtemp_f);
          setDay1Low(data.forecast.forecastday[1].day.mintemp_f);
          setDay2High(data.forecast.forecastday[2].day.maxtemp_f);
          setDay2Low(data.forecast.forecastday[2].day.mintemp_f);

          setday1Description(data.forecast.forecastday[0].day.condition.text)
          setday2Description(data.forecast.forecastday[1].day.condition.text)
          setday3Description(data.forecast.forecastday[2].day.condition.text)

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

    const time = data.location.localtime.split(" ")[1].split(":");
    let hours = parseInt(time[0]);
    const minutes = time[1];
    // Convert the hours to 12-hour format
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // If hours is 0, set it to 12
    const formattedTime = `${hours}:${minutes} ${meridiem}`;
    setLocalTime(formattedTime);

    //Current Weather Data
    setCurrentTemp(`${data.current.temp_f} F`);
    setWeatherCondition(`${data.current.condition.text}`);

    //Update the state variables for 5 day Forcast Info
    setDay1High(data.forecast.forecastday[1].day.maxtemp_f);
    setDay1Low(data.forecast.forecastday[1].day.mintemp_f);
    setDay2High(data.forecast.forecastday[2].day.maxtemp_f);
    setDay2Low(data.forecast.forecastday[2].day.mintemp_f);
  }

  return (
    <div className="flex h-screen p-2">
      <div className="w-1/3 h-full bg-gray-600 opacity-70 text-center">
        <div className="h-3/5 ">
          <p className="text-xl p-4">Location</p>
          <p id="cityName" className="text-xxl p-2">
            {cityName}
          </p>
          <p id="currentTemp" className="text-3xl p-8">
            {currentTemp}
          </p>
          <div className="flex justify-center my-8">
            {icon && <img src={icon} alt="Weather Icon" className="w-1/4" />}
          </div>
          <p id="weatherCondition" className="text-xxl">
            {weatherCondition}
          </p>
        </div>
        <div className="h-2/5 flex">
          <div className="flex-grow bg-red-400 text-xxl pt-8">
            <p>{day1}</p>
            {icon && <img src={icon} alt="Weather Icon" className="h-16 w-16 m-auto mt-4" />}
            <p className="text-xl pt-8">{day1Description}</p>
            </div>
          <div className="flex-grow bg-green-400 text-xxl pt-8">
          <p>{day2}</p>
            {day2Icon && <img src={day2Icon} alt="Weather Icon" className="h-16 w-16 m-auto mt-4" />}
            <p className="text-xl pt-8">{day2Description}</p>
          </div>
          <div className="flex-grow bg-pink-400 text-xxl pt-8">
          <p>{day3}</p>
            {day3Icon && <img src={day3Icon} alt="Weather Icon" className="h-16 w-16 m-auto mt-4" />}
            <p className="text-xl pt-8">{day3Description}</p>
          </div>
        </div>
      </div>
      <div className="w-2/5 h-full bg-gray-600 opacity-70">
        <div className="h-3/5">Top Row</div>
        <div className="h-2/5">Bottom Row</div>
      </div>
      <div className="w-1/4 h-full bg-gray-600 opacity-70 flex-col flex justify-center items-center">
        <div className="h-3/5 w-full  flex justify-center items-center">
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
