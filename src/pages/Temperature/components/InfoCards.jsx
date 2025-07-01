const InfoCards = () => {
  return (
    <section className="temperature-info-cards">
      <div className="info-card">
        <h3>Anomalie di Temperatura</h3>
        <p>
          Le anomalie di temperatura rappresentano deviazioni dalle temperature medie a lungo termine. I dati mostrano una chiara tendenza al riscaldamento.
        </p>
      </div>
      <div className="info-card">
        <h3>Modelli di Riscaldamento</h3>
        <p>
          Il riscaldamento non è uniforme – le regioni artiche si riscaldano più rapidamente degli oceani. Questo influisce sui sistemi climatici regionali.
        </p>
      </div>
      <div className="info-card">
        <h3>Impatti Climatici</h3>
        <p>
          L’aumento delle temperature accelera lo scioglimento dei ghiacci, l’innalzamento del mare e fenomeni estremi. Ogni grado in più amplifica questi effetti.
        </p>
      </div>
    </section>
  );
};

export default InfoCards;

