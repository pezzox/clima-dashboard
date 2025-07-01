// Calendar.jsx

import './Calendar.scss';
import { useState } from 'react';

const Calendar = ({ minYear = 1900, maxYear = new Date().getFullYear(), onChange }) => {
  const [from, setFrom] = useState(minYear);
  const [to, setTo] = useState(maxYear);

  const handleChange = (type, value) => {
    const newRange = {
      from: type === 'from' ? Number(value) : from,
      to: type === 'to' ? Number(value) : to,
    };

    if (newRange.from <= newRange.to) {
      setFrom(newRange.from);
      setTo(newRange.to);
      onChange?.(newRange);
    }
  };

  const renderOptions = (type) => {
    const years = [];
    for (let y = minYear; y <= maxYear; y++) {
      years.push(
        <option
          key={y}
          value={y}
          disabled={type === 'from' && y > to || type === 'to' && y < from}
        >
          {y}
        </option>
      );
    }
    return years;
  };

  return (
    <div className="calendar-range">
      <label>
        Da:
        <select value={from} onChange={(e) => handleChange('from', e.target.value)}>
          {renderOptions('from')}
        </select>
      </label>

      <label>
        A:
        <select value={to} onChange={(e) => handleChange('to', e.target.value)}>
          {renderOptions('to')}
        </select>
      </label>

      <p className="calendar-hint">
        Range disponibile: {minYear} – {maxYear}
      </p>
    </div>
  );
};

export default Calendar;