import React, {useState} from 'react';
import {NavBar} from "./NavBar/nav.jsx";
import { DailyReport } from "./DailyReport/daily.jsx";
import "./index.css";

function App() {
  const [searchedCity, setSearchedCity] = useState("");


  return (
    <div className="App">
      <NavBar setSearchedCity={setSearchedCity}/>
      <DailyReport searchedCity={searchedCity}/>
    </div>
  );
}

export default App;
