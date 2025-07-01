import { useEffect } from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <div className="about-text">
          <h2>Perché questa Web App?</h2>
          <p>
            Il cambiamento climatico è una delle sfide più urgenti del nostro tempo.
            Questa applicazione ti permette di esplorare dati reali relativi al riscaldamento globale
            attraverso grafici interattivi e sezioni dedicate.
          </p>
          <p>
            Seleziona una delle aree di interesse per visualizzare le informazioni aggiornate su:
            <strong> temperature medie globali, emissioni di gas serra</strong> (CO₂, CH₄, NO₂) e
            <strong> riduzione dei ghiacci artici</strong>.
          </p>
          <p>
            I dati sono forniti da fonti pubbliche e disponibili tramite API. Il design è stato pensato
            per garantire una <strong>navigazione semplice e accessibile</strong>, anche su dispositivi mobili.
          </p>
        </div>

        <div className="about-image">
          <img
            src={`${import.meta.env.BASE_URL}assets/image/info.jpg`}
            alt="Illustrazione cambiamento climatico"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
