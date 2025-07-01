// src/App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load delle pagine
const Home = lazy(() => import('./pages/Home/Home'));
const Temperature = lazy(() => import('./pages/Temperature/Temperature'));
const Co2 = lazy(() => import('./pages/Co2/Co2'));
const Methane = lazy(() => import('./pages/Methane/Methane'));
const No2 = lazy(() => import('./pages/No2/No2'));
const Ice = lazy(() => import('./pages/Ice/Ice'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/co2" element={<Co2 />} />
          <Route path="/methane" element={<Methane />} />
          <Route path="/no2" element={<No2 />} />
          <Route path="/ice" element={<Ice />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
