import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getIceData } from '../../../api/iceClient';
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

const IceChart = ({ startYear, endYear }) => {
  const [chartData, setChartData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getIceData().then(data => {
      if (!data.length) {
        setErrorMsg('Nessun dato ricevuto dalla API');
        return;
      }

      // Filtra il range desiderato
      const filtered = data.filter(({ year }) => {
        const y = Math.floor(Number(year));
        return y >= startYear && y <= endYear;
      });

      if (!filtered.length) {
        setErrorMsg(`Nessun record tra ${startYear} e ${endYear}`);
        return;
      }

      const labels = filtered.map(({ year }) => year.split('.')[0]); // solo l’anno
      const values = filtered.map(({ extent }) => {
        const val = Number(extent);
        return Number.isFinite(val) && val > 0 ? val : null;
      });

      setChartData({
        labels,
        datasets: [
          {
            label: 'Estensione ghiaccio (milioni km²)',
            data: values,
            borderColor: '#4ECDC4',
            tension: 0.2,
          },
        ],
      });

      setErrorMsg(null); // pulizia errori
    });
  }, [startYear, endYear]);

  if (errorMsg)   return <p>{errorMsg}</p>;
  if (!chartData) return <p>Caricamento dati…</p>;

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
            suggestedMin: 15,
            suggestedMax: 30,
            title: {
              display: true,
              text: 'Milioni di km²',
            },
          },
        },
      }}
    />
  );
};

export default IceChart;
