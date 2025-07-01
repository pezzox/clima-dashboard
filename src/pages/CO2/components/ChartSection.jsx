// ChartSection.jsx (CO2)

import { useEffect, useState } from 'react';
import CO2Chart from './CO2Chart';
import Calendar from '../../../components/Calendar/Calendar';
import { getCO2Data } from '../../../api/co2Client';

const ChartSection = () => {
  const [range, setRange] = useState({ from: 2015, to: new Date().getFullYear() });
  const [minYear, setMinYear] = useState(2015);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  useEffect(() => {
    getCO2Data().then((data) => {
      const years = data.map(item => parseFloat(item.year));
      const min = Math.floor(Math.min(...years));
      const max = Math.floor(Math.max(...years));

      setMinYear(min);
      setMaxYear(max);
      setRange({ from: min, to: max });
    });
  }, []);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <section className="co2-chart-container">
      <Calendar
        minYear={minYear}
        maxYear={maxYear}
        onChange={handleRangeChange}
      />
      <CO2Chart startYear={range.from} endYear={range.to} />
    </section>
  );
};

export default ChartSection;