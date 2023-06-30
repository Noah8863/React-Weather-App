import React, {useState} from 'react';
import {NavBar} from "./components/NavBar/nav.jsx";
import { DailyReport } from "./components/DailyReport/daily.jsx";

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
