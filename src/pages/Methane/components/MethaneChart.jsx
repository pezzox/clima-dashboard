// MethaneChart.jsx

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getMethaneData } from '../../../api/methaneClient';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const MethaneChart = ({ startYear, endYear }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    getMethaneData().then((data) => {
      const filtered = data.filter(item => {
        const year = parseFloat(item.date);
        return year >= startYear && year <= endYear;
      });

      const labels = filtered.map(item => item.date);
      const values = filtered.map(item => {
        const value = parseFloat(item.average || item.trend);
        return isNaN(value) ? null : value;
      });

      setChartData({
        labels,
        datasets: [
          {
            label: 'CH₄ ppb',
            data: values,
            fill: false,
            borderColor: '#4ECDC4',
            tension: 0.2,
          }
        ]
      });
    });
  }, [startYear, endYear]);

  if (!chartData) return <p>Caricamento dati...</p>;

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: false },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Concentrazione (ppb)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Anno',
            },
            ticks: {
              maxTicksLimit: 10,
            },
          },
        },
      }}
    />
  );
};

export default MethaneChart;
