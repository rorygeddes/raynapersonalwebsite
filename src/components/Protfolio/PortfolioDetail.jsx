import PropTypes from 'prop-types';
import './PortfolioDetail.scss';

const PortfolioDetail = ({ project, onClose }) => {
  // Separate main image from other images
  const mainImage = { src: '/shoreline.png', caption: 'Main View' };
  const additionalImages = [
    // First row
    { src: '/shorelinesiteplan.png', caption: 'Site Plan' },
    { src: '/shorelinegroundfloorplan.png', caption: 'Ground Floor Plan' },
    { src: '/shorelineleveloneplan.png', caption: 'Level One Plan' },
    
    // Latitudinal on left, Elevations on right
    { src: '/shorelinelatitudinalsection.png', caption: 'Latitudinal Section' },
    { 
      src: '/shorelineelevations.png', 
      caption: 'Elevations',
      className: 'span-two'
    },
    
    // Solar Power Energy
    { 
      src: '/shorelinesolarpowerenergy.png', 
      caption: 'Solar Power Energy',
      className: 'push-up'
    },
    
    // Interior views together
    { 
      src: '/shorelineinteriorkitchen.png', 
      caption: 'Kitchen Interior',
      className: 'push-up'
    },
    { 
      src: '/shorelineinterior.png', 
      caption: 'Interior View',
      className: 'push-up'
    },
    
    // Wall section at bottom left
    { 
      src: '/shorelinewallsection.png', 
      caption: 'Wall Section',
      className: 'push-up-large'
    }
  ];

  return (
    <div className="portfolio-detail-overlay">
      <div className="portfolio-detail-content">
        <button className="back-button" onClick={onClose}>
          <span className="arrow">←</span> Back
        </button>
        
        <div className="portfolio-header">
          <h1>{project.title}</h1>
        </div>

        <div className="portfolio-main-content">
          <div className="main-image">
            <img src={mainImage.src} alt={mainImage.caption} />
            <div className="image-caption">{mainImage.caption}</div>
          </div>
          
          <div className="project-details">
            <div className="project-description">
              <p>Located in Halifax, Nova Scotia, Shoreline Sanctuary serves as a net-zero urban oasis for two artists to gain inspiration from the coastal views to incorporate into their landscape works.</p>
              
              <p>Large windows look out into the Atlantic Ocean and the forestry that surrounds the home, exposing the artists to the elements of nature, living systems and natural processes.</p>
              
              <p>Constructed primarily from reused timber planks and stucco, the house provides excellent insulation by retaining heat in the winter and keeping the interior cool in the summer. The building's assembly with screws and double-headed nails enables future deconstruction and repurposing of its timber frame, minimizing waste in local landfills and reducing energy consumption required for new material production.</p>
              
              <p>Designed in accordance with green building principles, the sanctuary relies exclusively on solar panels for energy, incorporates passive heating/cooling systems, and implements water harvesting strategies.</p>
            </div>

            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">COURSE</span>
                <span className="meta-value">{project.projectInfo.course}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">INSTRUCTOR</span>
                <span className="meta-value">{project.projectInfo.instructor}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">LOCATION</span>
                <span className="meta-value">{project.projectInfo.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">SKILLS</span>
                <span className="meta-value">{project.projectInfo.skills}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">COLLABORATOR</span>
                <span className="meta-value">{project.projectInfo.collaborator}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-gallery">
          {additionalImages.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item ${image.className || ''}`}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={200 + (index * 100)}
            >
              <img src={image.src} alt={image.caption} />
              <div className="image-caption">{image.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PortfolioDetail.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default PortfolioDetail; 