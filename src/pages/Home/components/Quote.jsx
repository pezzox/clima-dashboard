// src/components/QuoteRotator.jsx
import { useEffect, useState } from 'react';



export const climateQuotes = [
  'Il pianeta non ha un piano B.',
  'Ogni decennio è più caldo del precedente.',
  'Il ghiaccio che si scioglie non torna indietro.',
  'Non c’è economia su un pianeta morto.',
  'Agire ora costa meno che rimandare.',
  'I combustibili fossili sono fossili idee.',
  'La temperatura sale, il tempo stringe.',
  'Il futuro si scrive con le scelte di oggi.'
];

function QuoteRotator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive(prev => (prev + 1) % climateQuotes.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="quote-section" role="log" aria-live="polite">
      {climateQuotes.map((q, i) => (
        <p
          key={q}
          className={`quote${i === active ? ' visible' : ''}`}
          aria-hidden={i !== active}
        >
          {q}
        </p>
      ))}
    </section>
  );
}

export default QuoteRotator;
