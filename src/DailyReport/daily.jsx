import React, { useEffect } from "react";

function DailyReport({ searchedCity }) {
  useEffect(() => {
    fetchData(searchedCity);
  }, [searchedCity]);

  const fetchData = (searchedCity) => {
    const url = `https://weather338.p.rapidapi.com/locations/search?query=${searchedCity}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5ead5cf470msh36ab28d485526e2p1a0624jsn33e9f2c7cbfd",
        "X-RapidAPI-Host": "weather338.p.rapidapi.com",
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
          const latitude = data.location.latitude[0];
          const longitude = data.location.longitude[0];
          console.log(latitude);
          console.log(longitude);

          const cityURL = `https://weather338.p.rapidapi.com/weather/forecast?date=20200622&latitude=${latitude}&longitude=${longitude}&language=en-US&units=m`;

          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "5ead5cf470msh36ab28d485526e2p1a0624jsn33e9f2c7cbfd",
              "X-RapidAPI-Host": "weather338.p.rapidapi.com",
            },
          };
          fetch(cityURL, options)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not OK");
              }
              return response.json();
            })
            .then((data) => {
              if (data) {
                console.log(data);
              }
            });
        }
      });
  };

  return (
    <div className="container mx-auto w-100vw bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Daily Weather Report</h2>
    </div>
  );
}
export { DailyReport };
