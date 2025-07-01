import { useEffect, useState } from 'react';
import IceChart from './IceChart';
import Calendar from '../../../components/Calendar/Calendar';
import { getIceData } from '../../../api/iceClient';

const ChartSection = () => {
  const [range, setRange] = useState({ from: 1979, to: new Date().getFullYear() });
  const [apiMin, setApiMin] = useState(1979);
  const [apiMax, setApiMax] = useState(new Date().getFullYear());

  useEffect(() => {
    getIceData().then(data => {
      if (!data.length) return;
      const years = data.map(({ year }) => parseInt(year));
      const minY  = Math.min(...years);
      const maxY  = Math.max(...years);

      setApiMin(minY);
      setApiMax(maxY);
      setRange({ from: minY, to: maxY });
    });
  }, []);

  return (
    <section className="ice-chart-container">
      <Calendar minYear={apiMin} maxYear={apiMax} onChange={setRange} />
      <IceChart startYear={range.from} endYear={range.to} />
    </section>
  );
};

export default ChartSection;
