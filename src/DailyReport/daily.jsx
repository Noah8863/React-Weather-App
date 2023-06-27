import React, { useEffect } from "react";


function DailyReport({ searchedCity }) {
  useEffect(() => {
    fetchData(searchedCity);
  }, [searchedCity]);

  const fetchData = (searchedCity) => {
    // const url = `https://open-weather13.p.rapidapi.com/city/${searchedCity}`;
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchedCity}&days=5`;
    

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ead5cf470msh36ab28d485526e2p1a0624jsn33e9f2c7cbfd',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
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
    <div className="container mx-auto w-100vw bg-white p-6 rounded-lg shadow-lg">
      
    </div>
  );
}
export { DailyReport };
