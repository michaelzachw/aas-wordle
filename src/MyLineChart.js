import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import chartjsPluginDatalabels from 'chartjs-plugin-datalabels';

// Register required Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  chartjsPluginDatalabels
);

const MyLineChart = () => {
  // Chart.js data and options configuration
  const data = {
    labels: ["       -3", "-2", "-1", "                         0", "1", "2", "         3"],
    labels2:["Reinforces", "", "", "Doesn't Mention / Ambiguous", "", "", "Challenges"],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#000000',
        borderColor: '#000000',
        pointBackgroundColor: 'white',
        pointBorderWidth: 1,
        lineTension: 0,
        pointBorderColor: 'blue',
        pointRadius: 4,
        pointHoverRadius: 4,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        align: 'center',
        color: '#F5F5F5',
        formatter: function(value, context) {
          return data.labels[context.dataIndex]+"\n\n\n"+data.labels2[context.dataIndex];
        },
      },
    },
    layout: {
      padding: {
        left:30,
        right:32,
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display:false,
      },
    },
  };

  return (
      <Line data={data} options={options} height={60} width={410}/>
  );
};

export default MyLineChart;
