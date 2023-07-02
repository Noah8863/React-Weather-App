import { useEffect, useState } from "react";
import UVIndexBar from "../UVProgressBar/UVIndex.jsx";
import HumidityProgressBar from "../HumidityProgBar/humidity.jsx";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "../ProgressProvider";
import sunnyIcon from "../../assets/sun.png";
import cloudyIcon from "../../assets/cloudy.png";
import partlyCloudyIcon from "../../assets/partlyCloudy.png";
import heavyRainIcon from "../../assets/heavyRain.png";
import rainyIcon from "../../assets/rainy.png";
import stormIcon from "../../assets/storm.png";
import "../../index.css";
const ACCESS_KEY = 'jJL2psRWWH6HJUjkaLq12qanq7ilvNNcJB-gn50ZJkU'

function DailyReport({ searchedCity }) {
  const [icon, setIcon] = useState(sunnyIcon);
  const [cityName, setCityName] = useState("Denver, Colorado");
  const [localTime, setLocalTime] = useState("9:00 AM");
  const [weatherCondition, setWeatherCondition] = useState("Sunny");
  const [currentTemp, setCurrentTemp] = useState("78 F");
  const [uvIndex, setUVIndex] = useState(null);
  const [uvIndexDescription, setUVIndexDescription] = useState("UV Index");
  const [humidityIndex, setHumidityIndex] = useState(null);
  const [humidityIndexDescription, setHumidityIndexDescription] =
    useState("Humidity Index");
  const [day1, setDay1] = useState("Monday");
  const [day2, setDay2] = useState("Tuesday");
  const [day3, setDay3] = useState("Wednesday");
  const [day2Icon, setDay2Icon] = useState(cloudyIcon);
  const [day3Icon, setDay3Icon] = useState(rainyIcon);
  const [day1Description, setday1Description] = useState("Sunny");
  const [day2Description, setday2Description] = useState("Cloudy");
  const [day3Description, setday3Description] = useState("Rainy");
  const [cityImage, setCityImage] = useState("")

  const [day1High, setDay1High] = useState("87");
  const [day1Low, setDay1Low] = useState("71");
  const [day2High, setDay2High] = useState("64");
  const [day2Low, setDay2Low] = useState("51");
  const [day3High, setDay3High] = useState("62");
  const [day3Low, setDay3Low] = useState("40");

  const [valueEnd, setValueEnd] = useState(0);

  // useEffect(() => {
  //   fetchData(searchedCity);
  // }, [searchedCity]);

  useEffect(() => {
    fetchData(searchedCity);
    fetchCityImage(searchedCity)
      .then((imageUrl) => {
        console.log("City Image URL:", imageUrl);
        // Perform further actions with the image URL if needed
      })
      .catch((error) => {
        console.error("Failed to fetch city image:", error);
      });
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
          var weatherIcon =
            data.forecast.forecastday[0].day.condition.text.toLowerCase();
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
            case "moderate rain":
              setIcon(rainyIcon);
              break;
            case "heavy rain":
              setIcon(heavyRainIcon);
              break;
            case "storm":
              setIcon(stormIcon);
              break;
            case "thundery outbreaks possible":
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
          var secondWeatherIcon =
            data.forecast.forecastday[1].day.condition.text.toLowerCase();
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
            case "overcast":
              setDay2Icon(cloudyIcon);
              break;
            case "partly cloudy":
              setDay2Icon(partlyCloudyIcon);
              break;
            case "moderate rain":
              setDay2Icon(rainyIcon);
              break;
            case "heavy rain":
              setDay2Icon(heavyRainIcon);
              break;
            case "storm":
              setDay2Icon(stormIcon);
              break;
            case "thundery outbreaks possible":
              setDay2Icon(stormIcon);
              break;
            default:
              setDay2Icon(null);
              break;
          }
          var thirdWeatherIcon =
            data.forecast.forecastday[2].day.condition.text.toLowerCase();
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
            case "overcast":
              setDay3Icon(cloudyIcon);
              break;
            case "partly cloudy":
              setDay3Icon(partlyCloudyIcon);
              break;
            case "moderate rain":
              setDay3Icon(rainyIcon);
              break;
            case "heavy rain":
              setDay3Icon(heavyRainIcon);
              break;
            case "storm":
              setDay3Icon(stormIcon);
              break;
            case "thundery outbreaks possible":
              setDay3Icon(stormIcon);
              break;
            default:
              setDay3Icon(null);
              break;
          }
          var uvIndexDes = data.current.uv;
          switch (uvIndexDes) {
            case 1:
            case 2:
              setUVIndexDescription(
                `The UV Index is ${data.current.uv} which takes 60 minutes to burn in the sun.`
              );
              break;
            case 3:
            case 4:
            case 5:
              setUVIndexDescription(
                `The UV Index is ${data.current.uv} which takes 45 minutes to burn in the sun.`
              );
              break;
            case 6:
            case 7:
              setUVIndexDescription(
                `The UV Index is ${data.current.uv} which takes 30 minutes to burn in the sun.`
              );
              break;
            case 8:
            case 9:
            case 10:
              setUVIndexDescription(
                `The UV Index is ${data.current.uv} which takes 15 minutes to burn in the sun! Stay inside`
              );
              break;
            default:
              setUVIndexDescription("1");
              break;
          }

          var humidityIndexDes = data.current.humidity;
          if (humidityIndexDes >= 20 && humidityIndexDes <= 60) {
            setHumidityIndexDescription(
              `The humidity level is ${data.current.humidity} which is comfortable! 😄`
            );
          } else if (humidityIndexDes > 60) {
            setHumidityIndexDescription(
              `The humidity level is ${data.current.humidity} which uncomfortably wet and sticky 😖`
            );
          } else {
            setHumidityIndexDescription(
              `The humidity level is ${data.current.humidity} which uncomfortably dry 🥵`
            );
          }

          const [year1, month1, day1] =
            data.forecast.forecastday[0].date.split("-");
          const firstDateObj = new Date(year1, month1 - 1, day1);
          const firstMonthName = firstDateObj.toLocaleString("en-US", {
            month: "long",
          });
          const firstFormattedDay = day1.padStart(2, "0");
          const firstFormattedDate = `${firstMonthName} ${firstFormattedDay}`;
          setDay1(firstFormattedDate);

          const [year2, month2, day2] =
            data.forecast.forecastday[1].date.split("-");
          const secondDateObj = new Date(year2, month2 - 1, day2);
          const secondMonthName = secondDateObj.toLocaleString("en-US", {
            month: "long",
          });
          const secondFormattedDay = day2.padStart(2, "0");
          const secondFormattedDate = `${secondMonthName} ${secondFormattedDay}`;
          setDay2(secondFormattedDate);

          const [year3, month3, day3] =
            data.forecast.forecastday[2].date.split("-");
          const thirdDateObj = new Date(year3, month3 - 1, day3);
          const thirdMonthName = thirdDateObj.toLocaleString("en-US", {
            month: "long",
          });
          const thirdFormattedDay = day3.padStart(2, "0");
          const thirdFormattedDate = `${thirdMonthName} ${thirdFormattedDay}`;
          setDay3(thirdFormattedDate);

          setDay1High(data.forecast.forecastday[1].day.maxtemp_f);
          setDay1Low(data.forecast.forecastday[1].day.mintemp_f);
          setDay2High(data.forecast.forecastday[2].day.maxtemp_f);
          setDay2Low(data.forecast.forecastday[2].day.mintemp_f);

          setday1Description(data.forecast.forecastday[0].day.condition.text);
          setday2Description(data.forecast.forecastday[1].day.condition.text);
          setday3Description(data.forecast.forecastday[2].day.condition.text);

          setUVIndex(data.current.uv);
          setHumidityIndex(data.current.humidity);

          updateHTML(data);
        }
      })
      .catch((error) => {
        // Handle errors
        console.log("Response:", error.text);
      });
  };

  const fetchCityImage = async (searchedCity) => {
    const query = encodeURIComponent(searchedCity);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
      );
      const data = await response.json();

      if (response.ok) {
        // Get the first image from the response
        const imageUrl = data.results[0].urls.regular;
        setCityImage(imageUrl)
        return imageUrl;
      } else {
        throw new Error("Failed to fetch city image");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
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
    const formattedTime = `Local Time is ${hours}:${minutes} ${meridiem}`;
    setLocalTime(formattedTime);

    //Current Weather Data
    setCurrentTemp(`${data.current.temp_f} F`);
    setWeatherCondition(`${data.forecast.forecastday[0].day.condition.text}`);
    setValueEnd(`${data.current.wind_mph}`);

    //Update the state variables for 5 day Forcast Info
    setDay1High(data.forecast.forecastday[0].day.maxtemp_f);
    setDay1Low(data.forecast.forecastday[0].day.mintemp_f);
    setDay2High(data.forecast.forecastday[1].day.maxtemp_f);
    setDay2Low(data.forecast.forecastday[1].day.mintemp_f);
    setDay3High(data.forecast.forecastday[2].day.maxtemp_f);
    setDay3Low(data.forecast.forecastday[2].day.mintemp_f);
  }

  return (
    <div className="flex h-screen bg-blue-300">
      <div className="w-1/3 h-full text-center">
        <div className="h-3/5 ">
          <p id="cityName" className="text-xxl p-2">
            {cityName}
          </p>
          <p id="currentTemp" className="text-2xl p-2">
            {currentTemp}
          </p>
          <div className="flex justify-center my-8">
            {icon && <img src={icon} alt="Weather Icon" className="w-1/4" />}
          </div>
          <p id="weatherCondition" className="text-xxl">
            {weatherCondition}
          </p>
        </div>
        <div className="h-2/5 flex p-4">
          <div className="flex-grow text-xxl pt-8 flex flex-col items-center">
            <p>{day1}</p>
            {icon && (
              <img src={icon} alt="Weather Icon" className="h-20 w-20 m-auto" />
            )}
            <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl mb-8 text-center">
              {day1Description}
            </p>
            <div>
              <p>
                <KeyboardArrowUpIcon className="mr-1" />
                {day1High}
              </p>
              <p>
                <KeyboardArrowDownIcon className="mr-1" />
                {day1Low}
              </p>
            </div>
          </div>
          <div className="flex-grow  text-xxl pt-8 flex flex-col items-center">
            <p>{day2}</p>
            {day2Icon && (
              <img
                src={day2Icon}
                alt="Weather Icon"
                className="h-20 w-20 m-auto"
              />
            )}
            <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl mb-8 text-center">
              {day2Description}
            </p>
            <div>
              <p>
                <KeyboardArrowUpIcon className="mr-1" />
                {day2High}
              </p>
              <p>
                <KeyboardArrowDownIcon className="mr-1" />
                {day2Low}
              </p>
            </div>
          </div>
          <div className="flex-grow text-xxl pt-8 flex flex-col items-center">
            <p className="mb-4 text-xxl">{day3}</p>
            {day3Icon && (
              <img
                src={day3Icon}
                alt="Weather Icon"
                className="h-20 w-20 m-auto"
              />
            )}
            <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl mb-8 text-center">
              {day3Description}
            </p>
            <div className="flex flex-col items-center">
              <p className="flex items-center">
                <KeyboardArrowUpIcon className="mr-1" />
                {day3High}
              </p>
              <p className="flex items-center">
                <KeyboardArrowDownIcon className="mr-1" />
                {day3Low}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 h-full p-10">
        <div className="h-3/5 flex items-center justify-center">
        {cityImage && <img src={cityImage} alt="Weather Icon" className="max-h-full max-w-full"/>}
        </div>
        <div className="h-2/5 pt-2 flex flex-col items-center justify-center">
          <div>
            <p className="p-4 text-base sm:text-sm md:text-base lg:text-lg xl:text-xxl">{humidityIndexDescription}</p>
            <HumidityProgressBar humidityIndex={humidityIndex} />
          </div>
          <br></br>
          <div>
            <p className="p-4 text-base sm:text-sm md:text-base lg:text-lg xl:text-xxl">{uvIndexDescription}</p>
            <UVIndexBar uvIndex={uvIndex} />
          </div>
        </div>
      </div>
      <div className="w-1/4 h-full flex-col flex justify-center items-center">
        <div className="h-3/5 w-full  flex justify-center items-center">
          <p id="localTime" className="text-2xl text-center">
            {localTime}
          </p>
        </div>
        <div className="h-2/5 w-full">
          {/* Custom component cannot use tailwind for styles... Weird but this in-line works fine */}
          <div style={{ padding: "25%", margin: "auto", }}>
            <ProgressProvider valueStart={0} valueEnd={valueEnd}>
              {(value) => (
                <CircularProgressbar value={value} text={`${value} MPH`} />
              )}
            </ProgressProvider>
          </div>
          
        </div>
        <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xxl mb-8 mt-2 text-center">Current Wind Speed</p>
      </div>
    </div>
  );
}

export { DailyReport };
