import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={`${import.meta.env.BASE_URL}assets/image/logo.png`} alt="Clima Dashboard Logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/temperature">Temperature</Link>
          <Link to="/co2">CO₂</Link>
          <Link to="/methane">CH₄</Link>
          <Link to="/no2">NO₂</Link>
          <Link to="/ice">Ghiaccio</Link>
        </nav>
      </div>
    </header>
  );
}
