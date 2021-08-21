import React from "react";
import * as s from "./StyleBarChart";
import { Bar } from "react-chartjs-2";

interface PropsBarchart {
   title?: string;
   des?: string;
}

const BarChart: React.FC<PropsBarchart> = ({ title, des }) => {
   return (
      <s.Barchart>
         <s.Title>{title}</s.Title>
         <s.Des>{des}</s.Des>
         <s.Content>
            <Bar
               data={{
                  labels: [
                     "Jan",
                     "Feb",
                     "Mar",
                     "Apr",
                     "May",
                     "Jun",
                     "Jul",
                     "Aug",
                     "Sep",
                     "Oct",
                     "Nov",
                     "Dec",
                  ],
                  datasets: [
                     {
                        order: 1,
                        label: "Last year",
                        data: [8, 15, 1, 6, 1, 1, 9, 13, 1, 5, 1, 2],
                        backgroundColor: "#3b82ec",
                        hoverBackgroundColor: "#3b82ec",
                        borderWidth: 0,
                        barPercentage: 0.12,
                        categoryPercentage: 1.5,
                     },
                     {
                        order: 2,
                        label: "This year",
                        data: [12, 19, 3, 8, 2, 3, 12, 19, 3, 8, 2, 3],
                        backgroundColor: "#84aef2",
                        hoverBackgroundColor: "#84aef2",
                        borderRadius: 10,
                        borderWidth: 0,
                        barPercentage: 0.13,
                        categoryPercentage: 1.5,
                     },
                  ],
               }}
               height={200}
               width={400}
               options={{
                  plugins: {
                     legend: {
                        labels: {},
                        display: false,
                     },
                     tooltip: {
                        mode: "index",
                        intersect: false,
                     },
                  },
                  scales: {
                     x: {
                        stacked: true,
                        ticks: {
                           color: "#6c757d",
                           font: {
                              family: "'Poppins', sans-serif",
                           },
                        },
                        grid: {
                           display: false,
                           borderColor: "#fff",
                        },
                     },
                     y: {
                        ticks: {
                           color: "#6c757d",
                           font: {
                              family: "'Poppins', sans-serif",
                           },
                        },
                        grid: {
                           display: false,
                           borderColor: "#cacaca",
                        },
                     },
                  },
               }}
            />
         </s.Content>
      </s.Barchart>
   );
};

export default BarChart;
