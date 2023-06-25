import "./index.css";
import {NavBar} from "./NavBar/nav.jsx";
import { DailyReport } from "./DailyReport/daily.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DailyReport />
    </div>
  );
}

export default App;
