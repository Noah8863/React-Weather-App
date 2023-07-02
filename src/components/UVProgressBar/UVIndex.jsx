import React from "react";
import { useState, useEffect } from 'react';

const UVIndexProgressBar = ({ uvIndex }) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    // Animate the progress bar
    const animateProgressBar = () => {
      const targetPercentage = (uvIndex / 10) * 100;
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
  }, [uvIndex]);

  const getProgressColor = () => {
    // Determine the progress bar color based on the UV index
    let color = "";
    if (uvIndex >= 1 && uvIndex <= 2) {
      color = "bg-green-500";
    } else if (uvIndex >= 3 && uvIndex <= 5) {
      color = "bg-yellow-500";
    } else if (uvIndex >= 6 && uvIndex <= 7) {
      color = "bg-orange-500";
    } else if (uvIndex >= 8 && uvIndex <= 10) {
      color = "bg-red-500";
    } else if (uvIndex >= 11) {
      color = "bg-purple-500";
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
            transition: 'width 1s ease-out', // Add transition animation
          }}
        />
      </div>
    </div>
  );
};

export default UVIndexProgressBar;

