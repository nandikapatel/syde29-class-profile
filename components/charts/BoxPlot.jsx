import { useEffect, useRef } from "react";
import { Chart, LinearScale, CategoryScale } from "chart.js";
import {
  BoxPlotController,
  BoxAndWiskers,
  Violin,
  ViolinController,
} from "@sgratzl/chartjs-chart-boxplot";
import "chart.js/auto";

Chart.register(
  BoxPlotController,
  BoxAndWiskers,
  Violin,
  ViolinController,
  LinearScale,
  CategoryScale
);

export default function BoxPlot({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;
    if (chartRef.current) {
      if (Chart.getChart(chartRef.current)) {
        Chart.getChart(chartRef.current).destroy();
      }
      chartInstance = new Chart(chartRef.current, {
        type: "boxplot",
        data: {
          labels: data.label,
          datasets: [
            {
              data: data.val,
              backgroundColor: data.color,
              borderColor: "gray",
              hoverBackgroundColor: "white",
              borderWidth: 1.5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false },
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
              gridlines: {
                lineWidth: 1,
              },
              title: {
                display: true,
                text: data.xAxis,
                font: {
                  size: 15,
                },
              },
            },
            y: {
              gridlines: {
                lineWidth: 1,
              },
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
        },
      });
    }
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} height="475px" width="475px" />;
}
