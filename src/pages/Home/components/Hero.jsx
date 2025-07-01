import { useEffect, useRef } from 'react';

const quotes = [
  '"Il clima sta cambiando. Perché non lo facciamo anche noi?"',
  '"L’attuale riscaldamento di 1,1°C ha già causato in tutto il mondo pericolosi sconvolgimenti alla natura."',
  '"Le concentrazioni di CO2 nell’atmosfera sono ai livelli più alti degli ultimi due milioni di anni."',
  '"L’aumento delle concentrazioni di ossidi di azoto (NO2) contribuisce all’effetto serra."',
  '"L’Artico si riscalda tre volte più velocemente della media globale, accelerando la perdita di ghiaccio marino."'
];

const Hero = () => {
  const quoteRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('quote-visible', entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px'
      }
    );

    quoteRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      quoteRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Dark background layer behind video */}
      <div className="hero-color-layer"></div>

      {/* Fixed video background */}
      <div className="hero-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source
            src={`${import.meta.env.BASE_URL}assets/video/background.mp4`}
            type="video/mp4"
          />
          Il tuo browser non supporta il formato video.
        </video>
      </div>

      {/* Foreground content */}
      <div className="hero-content">
        <h1 className="hero-title">ESPLORA I DATI DEL CAMBIAMENTO CLIMATICO</h1>
        <p className="hero-subtitle">Temperature, gas serra e ghiacci polari in tempo reale</p>

        <div className="quotes-scroll">
          {quotes.map((quote, index) => (
            <div
              key={index}
              ref={(el) => (quoteRefs.current[index] = el)}
              className="scroll-quote"
            >
              {quote}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
