import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={`${import.meta.env.BASE_URL}assets/image/logo.png`} alt="Clima Dashboard Logo" />
        </Link>

        {/* Hamburger button (mobile only) */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/temperature" onClick={() => setIsOpen(false)}>Temperature</Link>
          <Link to="/co2" onClick={() => setIsOpen(false)}>CO₂</Link>
          <Link to="/methane" onClick={() => setIsOpen(false)}>CH₄</Link>
          <Link to="/no2" onClick={() => setIsOpen(false)}>NO₂</Link>
          <Link to="/ice" onClick={() => setIsOpen(false)}>Ghiaccio</Link>
        </nav>
      </div>
    </header>
  );
}
