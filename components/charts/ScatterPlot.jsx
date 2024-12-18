import React from "react";
import "chart.js/auto";
import { Scatter } from "react-chartjs-2";

export default function ScatterPlot({ data }) {
  return (
    <div>
      <Scatter
        data={{
          datasets: [
            {
              label: "Student",
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
              ticks: {
                beginAtZero: true,
                callback: function (value) {
                  if (value % 1 === 0) {
                    return value;
                  }
                },
              },
              min: data.ymin,
              max: data.ymax,
            },
          },
          plugins: {
            legend: {
              position: "right",
              labels: {
                usePointStyle: true,
                padding: 16,
              },
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
}
