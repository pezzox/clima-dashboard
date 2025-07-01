import { useEffect, useState } from 'react';

export const useYearRange = (data = []) => {
  const [minYear, setMinYear] = useState(1880);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());
  const [yearRange, setYearRange] = useState({
    from: 1880,
    to: new Date().getFullYear(),
  });

  useEffect(() => {
    if (!data || data.length === 0) return;

    const years = data
      .map((item) => parseInt(item.time))
      .filter((y) => !isNaN(y));

    const min = Math.min(...years);
    const max = Math.max(...years);

    setMinYear(min);
    setMaxYear(max);
    setYearRange({ from: min, to: max });
  }, [data]);

  return { yearRange, setYearRange, minYear, maxYear };
};
