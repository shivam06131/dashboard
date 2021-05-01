import React from "react";
import { Radar } from "react-chartjs-2";
import { data } from "../Data/data";

const BarChart = () => {
  const setIntensity = [];
  const setSource = [];
  data.map((item) => {
    if (item.relevance !== "" && item.likelihood !== "" && item.impact !== "") {
      const intensity = item.relevance * item.likelihood * item.impact;
      setIntensity.push(intensity);
      setSource.push(item.source);
    }
  });
  console.log("intensity", setIntensity);
  console.log("sector", setSource);
  return (
    <div>
      <Radar
        data={{
          labels: setSource,
          datasets: [
            {
              label: "intensity",
              data: setIntensity,
              backgroundColor: ["#95d2f5"],
              borderColor: ["#0b5a87"],
              borderWidth: 3,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
