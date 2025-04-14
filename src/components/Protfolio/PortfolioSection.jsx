import PropTypes from 'prop-types';
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
import SinglePortfolio from './SinglePortfolio';
import PortfolioDetail from './PortfolioDetail';

const PortfolioSection = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { portfolioItems } = data;
  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    portfolioItems.slice(0, itemsPerPage),
  );
  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = portfolioItems.slice(
      currentLength,
      currentLength + itemsPerPage,
    );
    setVisibleItems(prevItems => [...prevItems, ...nextChunk]);

    if (currentLength + itemsPerPage >= portfolioItems.length) {
      setShowLoadMore(false);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={'Portfolio'} />
        <div className="container">
          <div className="row">
            {visibleItems.map((project, index) => (
              <div 
                className="col-lg-4 col-md-6" 
                key={index}
                data-aos={project.effect}
                data-aos-duration={project.duration}
                data-aos-delay={project.delay}
              >
                <div className="st-portfolio-item" onClick={() => handleProjectClick(project)}>
                  <div className="st-portfolio-img">
                    <img src={project.imgLink} alt={project.title} />
                  </div>
                  <div className="st-portfolio-info">
                    <h3 className="st-portfolio-title">{project.title}</h3>
                    <div className="st-portfolio-subtitle">{project.subTitle}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      
      {selectedProject && (
        <PortfolioDetail 
          project={selectedProject} 
          onClose={handleCloseDetail}
        />
      )}
    </>
  );
};

PortfolioSection.propTypes = {
  data: PropTypes.object,
};

export default PortfolioSection;


