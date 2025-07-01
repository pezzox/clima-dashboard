

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getCO2Data } from '../../../api/co2Client';

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

const CO2Chart = ({ startYear, endYear }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    getCO2Data().then((data) => {
      if (!Array.isArray(data) || data.length === 0) return;

      console.log('First CO2 data item:', data[0]);

      const filtered = data.filter(item => {
        const year = parseInt(item.year);
        return year >= startYear && year <= endYear;
      });

      const labels = filtered.map(item => item.year);
      const values = filtered.map(item => {
        const value = parseFloat(item.trend || item.carbon);
        return isNaN(value) ? null : value;
      });

      setChartData({
        labels,
        datasets: [
          {
            label: 'CO2 ppm',
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
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true },
          title: { display: false },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Concentrazione (ppm)',
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

export default CO2Chart;