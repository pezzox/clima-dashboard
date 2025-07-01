import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getTemperatureData } from '../../../api/temperatureClient';

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

const TemperatureChart = ({ startYear, endYear }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    getTemperatureData().then((data) => {
      const filtered = data.filter(item => {
        const year = parseInt(item.time);
        return year >= startYear && year <= endYear;
      });

      const labels = filtered.map(item => item.time);
      const temps = filtered.map(item => parseFloat(item.station));

      setChartData({
        labels,
        datasets: [
          {
            label: 'Anomalia °C',
            data: temps,
            fill: false,
            borderColor: '#FF6B6B',
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
              text: 'Anomalia (°C)',
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

export default TemperatureChart;
