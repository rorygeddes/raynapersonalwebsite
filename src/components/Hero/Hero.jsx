import PropTypes from 'prop-types';
import './Hero.scss';
import parser from 'html-react-parser';

const Hero = ({ data }) => {
  const { subTitle, designation, title } = data;

  return (
    <section id="home" className="st-hero-wrap">
      <div className="st-hero st-style1">
        <div className="st-hero-img">
          <img src="/shoreline.png" alt="Shoreline Architecture" />
        </div>
        <div className="st-hero-overlay">
          <div className="st-hero-text">
            <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              {subTitle}
            </h3>
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              {parser(title)}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              {designation}
            </h2>
          </div>
        </div>
        <div className="shoreline-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
          Shoreline Sanctuary
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.object
};

export default Hero;
