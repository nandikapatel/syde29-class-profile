import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.scss";

const BarChart = ({ data }) => {
  return (
    <div className={styles.chart}>
      <Bar
        data={{
          labels: data.label,
          datasets: [
            {
              label: "# of Students",
              data: data.val,
              backgroundColor: data.color,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              title: {
                display: true,
                text: data.xAxis,
                font: {
                  size: 15,
                },
              },
            },
            y: {
              title: {
                display: true,
                text: data.yAxis,
                font: {
                  size: 15,
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: data.title,
              font: {
                size: 16,
              },
            },
            subtitle: {
              display: true,
              text: "number of respondents: " + data.n,
              padding: {
                bottom: 10,
              },
            },
          },
        }}
        height="475px"
        width="475px"
      />
    </div>
  );
};

export default BarChart;
