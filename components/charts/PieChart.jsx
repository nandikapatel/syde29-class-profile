import React from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import styles from "./Chart.module.scss";

export default function PieChart({ data }) {
  return (
    <div className={styles.chart}>
      <Pie
        data={{
          labels: data.label,
          datasets: [
            {
              label: "# of Students",
              data: data.val,
              backgroundColor: data.color,
              borderColor: "white",
              borderWidth: 2,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: "right",
              labels: {
                usePointStyle: true,
                padding: 16,
              },
              display: true,
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
}
