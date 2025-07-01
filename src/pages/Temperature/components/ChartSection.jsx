// ChartSection.jsx (Temperature)

import { useEffect, useState } from 'react';
import TemperatureChart from './TemperatureChart';
import Calendar from '../../../components/Calendar/Calendar';
import { getTemperatureData } from '../../../api/temperatureClient';

const ChartSection = () => {
  const [range, setRange] = useState({ from: 1880, to: new Date().getFullYear() });
  const [minYear, setMinYear] = useState(1880);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  useEffect(() => {
    getTemperatureData().then((data) => {
      const years = data.map(item => parseInt(item.time));
      const min = Math.min(...years);
      const max = Math.max(...years);

      setMinYear(min);
      setMaxYear(max);
      setRange({ from: min, to: max });
    });
  }, []);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <section className="temperature-chart-container">
      <Calendar
        minYear={minYear}
        maxYear={maxYear}
        onChange={handleRangeChange}
      />
      <TemperatureChart startYear={range.from} endYear={range.to} />
    </section>
  );
};

export default ChartSection;