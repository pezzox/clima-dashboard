import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import QuoteRotator from './components/Quote';
import FadeInSection from '../../components/FadeIn/FadeInSection';

const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />

      <FadeInSection>
        <AboutSection />
      </FadeInSection>

      <FadeInSection>
        <section className="carousel-section">
          <Carousel />
        </section>
      </FadeInSection>

      <FadeInSection>
        <QuoteRotator />
      </FadeInSection>

      <Footer />
    </div>
  );
};

export default Home;
