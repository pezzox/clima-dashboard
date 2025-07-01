// ChartSection.jsx (Methane)

import { useEffect, useState } from 'react';
import MethaneChart from './MethaneChart';
import Calendar from '../../../components/Calendar/Calendar';
import { getMethaneData } from '../../../api/methaneClient';

const ChartSection = () => {
  const [range, setRange] = useState({ from: 1983, to: new Date().getFullYear() });
  const [minYear, setMinYear] = useState(1983);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  useEffect(() => {
    getMethaneData().then((data) => {
      const years = data.map(item => parseFloat(item.date));
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
    <section className="methane-chart-container">
      <Calendar
        minYear={minYear}
        maxYear={maxYear}
        onChange={handleRangeChange}
      />
      <MethaneChart startYear={range.from} endYear={range.to} />
    </section>
  );
};

export default ChartSection;
