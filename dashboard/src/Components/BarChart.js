import React from "react";
import { Bar } from "react-chartjs-2";
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
      <Bar
        data={{
          labels: setSource,
          datasets: [
            {
              label: "intensity",
              data: setIntensity,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
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
