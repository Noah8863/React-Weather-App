function DailyReport() {
    const weatherData = {
        date: "June 25, 2023",
        humidity: "50%",
        windSpeed: "10 mph",
        uvIndex: 7,
        highestTemp: "28°C",
        lowestTemp: "18°C",
        weatherIcon: "sun",
      };
    
      return (
        <div className="container mx-auto w-80vw bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Daily Weather Report</h2>
          <div className="flex items-center mb-4">
            <span className="text-gray-600">Date:</span>
            <span className="ml-2">{weatherData.date}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600">Humidity:</span>
            <span className="ml-2">{weatherData.humidity}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600">Wind Speed:</span>
            <span className="ml-2">{weatherData.windSpeed}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600">UV Index:</span>
            <span className="ml-2">{weatherData.uvIndex}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600">Highest Temperature:</span>
            <span className="ml-2">{weatherData.highestTemp}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600">Lowest Temperature:</span>
            <span className="ml-2">{weatherData.lowestTemp}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">Weather Icon:</span>
            <span className="ml-2 text-4xl">{weatherData.weatherIcon}</span>
          </div>
        </div>
      );
  }
  export { DailyReport };