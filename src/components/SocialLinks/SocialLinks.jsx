import PropTypes from 'prop-types'
import { useState } from 'react'

const SocialLinks = ({ data }) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleIconHover = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="st-hero-social-links">
      {data.map((item, index) => (
        <a
          href={item.link}
          className={`st-social-btn ${index === activeLink ? 'active' : ''}`}
          onMouseEnter={() => handleIconHover(index)}
          onMouseLeave={() => setActiveLink(null)}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      ))}
    </div>
  )
}

SocialLinks.propTypes = {
  data: PropTypes.array,
}

export default SocialLinks;
