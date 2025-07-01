// Methane.jsx

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FadeInSection from '../../components/FadeIn/FadeInSection';

import Hero from './components/Hero';
import ChartSection from './components/ChartSection';
import InfoCards from './components/InfoCards';

import './styles/index.scss';

const Methane = () => {
  return (
    <div className="methane-page">
      <Header />
      <Hero />

      <FadeInSection>
        <ChartSection />
      </FadeInSection>

      <FadeInSection>
        <InfoCards />
      </FadeInSection>

      <Footer />
    </div>
  );
};

export default Methane;

