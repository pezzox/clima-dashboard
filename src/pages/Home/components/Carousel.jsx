import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import FadeInSection from '../../../components/FadeIn/FadeInSection';

const carouselItems = [
  {
    icon: '🌡️',
    title: 'Temperature',
    description: 'Dati sulle anomalie medie globali registrate ogni anno.',
    link: '/temperature',
    image: `${import.meta.env.BASE_URL}assets/gif/temp.gif`,
  },
  {
    icon: '🏭',
    title: 'CO2',
    description: 'Monitoraggio delle concentrazioni di anidride carbonica a livello globale.',
    link: '/co2',
    image: `${import.meta.env.BASE_URL}assets/gif/co2.gif`,
  },
  {
    icon: '🔥',
    title: 'Methane',
    description: "Analisi dell'andamento delle emissioni di metano, un potente gas serra.",
    link: '/methane',
    image: `${import.meta.env.BASE_URL}assets/gif/methane.gif`,
  },
  {
    icon: '☣️',
    title: 'NO2',
    description: 'Dati sulle emissioni di ossidi di azoto e loro impatto ambientale.',
    link: '/no2',
    image: `${import.meta.env.BASE_URL}assets/gif/no2.gif`,
  },
  {
    icon: '❄️',
    title: 'Arctic Ice',
    description: 'Estensione dei ghiacci artici e variazioni stagionali negli ultimi decenni.',
    link: '/arctic',
    image: `${import.meta.env.BASE_URL}assets/gif/arctic.gif`,
  },
];

const breakpoints = {
  0:    { slidesPerView: 1 },
  640:  { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

const Carousel = () => (
  <div className="carousel-container">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      loop
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={breakpoints}
    >
      {carouselItems.map(({ title, image, link, icon, description }, idx) => (
        <SwiperSlide key={idx}>
          <FadeInSection>
            <Link to={link} className="carousel-card">
              <div className="carousel-image-wrapper">
                <img src={image} alt={title} />
                <div className="carousel-overlay">
                  <div className="carousel-text">
                    <span role="img" aria-label={title}>{icon}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </FadeInSection>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Carousel;
