import React from "react";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import RadarChart from "./Components/RadarChart";
import "./index.css";

const App = () => {
  return (
    <div>
      <h1 className="first">Radar Chart</h1>
      <RadarChart />
      <h1 className="center">Bar Chart</h1>
      <BarChart />
      <h1 className="center">Line Chart</h1>
      <LineChart />
    </div>
  );
};

export default App;
