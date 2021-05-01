import React from "react";
import { Line } from "react-chartjs-2";
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
      <Line
        data={{
          labels: setSource,
          datasets: [
            {
              label: "intensity",
              data: setIntensity,
              backgroundColor: ["#0f9ff2"],
              borderColor: ["#3e59b5"],
              borderWidth: 1,
              borderCapStyle: "square",
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
