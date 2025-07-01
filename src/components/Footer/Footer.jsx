import './Footer.scss';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Clima Dashboard · Built with React & Sass</p>
        <div className="footer-socials">
          <a
            href="https://github.com/pezzox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${import.meta.env.BASE_URL}assets/image/github.png`} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/federico-pezzotti-0312922b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${import.meta.env.BASE_URL}assets/image/linkedin.png`} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}
