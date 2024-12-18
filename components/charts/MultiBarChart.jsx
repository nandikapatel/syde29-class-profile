import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.scss";

export default function MultiBarChart({ data }) {
  const datasets = data.val.map((val) => ({
    label: val.label,
    data: val.data,
    backgroundColor: val.backgroundColor,
    borderWidth: 0.2,
    borderColor: "white",
    barPercentage: 1,
  }));

  return (
    <div className={styles.chart}>
      <Bar
        data={{
          labels: data.label,
          datasets: datasets,
        }}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                usePointStyle: true,
                padding: 16,
              },
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
          scales: {
            x: {
              title: {
                display: true,
                text: data.xAxis,
                font: {
                  size: 15,
                },
              },
              groupBars: true,
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
            indexAxis: "x",
          },
        }}
        height="475px"
        width="475px"
      />
    </div>
  );
}
