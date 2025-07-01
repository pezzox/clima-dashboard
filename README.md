🌍 Clima Dashboard
Una web app interattiva che visualizza dati sul cambiamento climatico, tra cui temperatura globale, concentrazione di gas serra (CO₂, CH₄, NO₂) e l'estensione dei ghiacci marini. Realizzata con React, Chart.js e Vite.


🚀 Demo online
🔗 pezzox.github.io/clima-dashboard

📦 Tecnologie utilizzate
React 19 – UI reattiva e componentizzata

Vite – Build tool moderno e veloce

Chart.js + react-chartjs-2 – Grafici dinamici

React Router DOM – Navigazione tra le pagine

Axios – Richieste API

Lodash – Utility per la manipolazione dei dati

SASS – Stili modulari e scalabili

Swiper.js – Caroselli dinamici

🧠 Funzionalità
Visualizzazione dati in tempo reale tramite API pubbliche:

Anomalie della temperatura

Concentrazione di CO₂, CH₄, NO₂

Estensione dei ghiacci artici

Grafici interattivi filtrabili per anno

Interfaccia responsive e accessibile

Modalità a pagina singola (SPA)

Navigazione fluida con caricamento asincrono dei componenti (lazy + Suspense)

📁 Struttura del progetto
php
Copia
Modifica
clima-dashboard/
│
├── public/                  # Asset pubblici (GIF, immagini, icone)
├── src/
│   ├── api/                 # Client API (es. co2Client.js, iceClient.js)
│   ├── components/          # Componenti riutilizzabili
│   ├── pages/               # Pagine principali (Temperature, Ice, ecc.)
│   ├── styles/              # File SCSS modulari
│   └── App.jsx              # Componente principale con routing
│
├── index.html               # Entry point
├── vite.config.js           # Configurazione Vite
└── README.md
⚙️ Installazione e avvio locale
bash
Copia
Modifica
git clone https://github.com/pezzox/clima-dashboard.git
cd clima-dashboard
npm install
npm run dev
🌐 Deploy su GitHub Pages
Aggiungi al vite.config.js:

js
Copia
Modifica
base: '/clima-dashboard/',
Aggiungi gli script in package.json:

json
Copia
Modifica
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
Esegui:

bash
Copia
Modifica
npm run deploy
🔗 API utilizzate
Tutti i dati sono forniti da https://global-warming.org:

/api/co2-api

/api/methane-api

/api/nitrous-oxide-api

/api/arctic-api

/api/temperature-api

🧪 Test & Debug
✅ I dati sono validati tramite try/catch e lodash.get

✅ I grafici si aggiornano dinamicamente in base all'intervallo selezionato

✅ Fallback di caricamento gestiti via Suspense

📜 Licenza
Progetto realizzato a scopo didattico per Start2Impact
Autore: @pezzox

