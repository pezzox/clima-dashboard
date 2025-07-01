import { useEffect, useState } from 'react';
import NO2Chart from './NO2Chart';
import Calendar from '../../../components/Calendar/Calendar';
import { getNO2Data } from '../../../api/no2Client';

const ChartSection = () => {
  const [range, setRange] = useState({ from: 2002, to: new Date().getFullYear() });
  const [minYear, setMinYear] = useState(2002);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  useEffect(() => {
    getNO2Data().then((data) => {
      const years = data.map(item => parseFloat(item.date));
      const validYears = years.filter(y => !isNaN(y));
      const min = Math.floor(Math.min(...validYears));
      const max = Math.floor(Math.max(...validYears));

      setMinYear(min);
      setMaxYear(max);
      setRange({ from: min, to: max });
    });
  }, []);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <section className="no2-chart-container">
      <Calendar
        minYear={minYear}
        maxYear={maxYear}
        onChange={handleRangeChange}
      />
      <NO2Chart startYear={range.from} endYear={range.to} />
    </section>
  );
};

export default ChartSection;
