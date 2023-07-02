import React, { useState, useEffect } from "react";

const HumidityProgressBar = ({ humidityIndex }) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const animateProgressBar = () => {
      const targetPercentage = Math.min(humidityIndex, 100);
      let currentPercentage = 0;
      const step = targetPercentage / 100;
      const interval = setInterval(() => {
        currentPercentage += step;
        setProgressPercentage(currentPercentage);
        if (currentPercentage >= targetPercentage) {
          clearInterval(interval);
        }
      }, 10);
    };

    animateProgressBar();
  }, [humidityIndex]);

  const getProgressColor = () => {
    let color = "";
    if (humidityIndex <= 20) {
      color = "bg-yellow-500";
    } else if (humidityIndex <= 60) {
      color = "bg-green-500";
    } else {
      color = "bg-blue-900";
    }
    return color;
  };

  return (
    <div>
      <div className="bg-gray-200 h-2 w-full">
        <div
          className={`h-full ${getProgressColor()}`}
          style={{
            width: `${progressPercentage}%`,
            transition: "width 1s ease-out", // Add transition animation
            // Ensure the progress bar stays within the bar
          }}
        />
      </div>
    </div>
  );
};

export default HumidityProgressBar;


