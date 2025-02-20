import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './style.css';

function GraphicDesign() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Update isMobile state when window resizes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { original: '/images/image1.png' },
    { original: '/images/gd1.png' },
    { original: '/images/gd2.png' },
    { original: '/images/gd3.jpg' },
  ];

  return (
    <div className="maincontent" id="top">
      <div className="projects">
        <header>
          <h1>Graphic Design</h1>
        </header>

        <div className="project">
          <div className="gallery-container">
            <ImageGallery
              items={images}
              showThumbnails={false} /* Thumbnails removed */
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>

          <h2>Publication Design</h2>
          <details className="accordion">
            <summary>Read more</summary>
            <h3>Creative Approach to Circular Economy</h3>
            <p>
              In 2021, I worked on the graphic design for two publications as part of a project for a Circular Economy course.
              This project emphasized sustainability and aimed to convey the importance of eco-friendly practices. 
              In my Sustainable Design - Learning Diary, I explore key concepts and strategies in sustainable design. 
              I discuss fundamental sustainability concerns, multi-level design models, the role of eco-labels, 
              and how design can effectively communicate sustainability. I reflect on my personal carbon footprint 
              reduction, redesign unsustainable products, and work on a group project utilizing 
              orange peels for biodegradable products. Throughout this study, I emphasize the complexity of sustainable design, 
              highlighting challenges like greenwashing, material limitations, and the need for systemic changes across industries, 
              policies, and consumer behavior.
            </p>
          </details>
        </div>

        {/* Project 2: Book Cover Designs */}  
        <div className="project">
          <img src="/images/infographic.jpg" alt="Book Cover Designs" />
          <h2>Data Visualization</h2>
          <details className="accordion">
            <summary>Read more</summary>
            <h3>Let's Talk About Global Warming?</h3>
            <p>
              In 2020, I created Let’s Talk About Global Warming?, 
              a gamified data visualization project that engages audiences in understanding climate change through an interactive, 
              game-like schema. This digital experience presents facts about global warming in an accessible way, encouraging readers 
              to explore its causes, effects, and potential solutions. By blending educational content with an interactive format, 
              the project invites users to reflect on their role in the climate crisis and discover actionable steps toward positive 
              change. The visual and structural design transforms statistical information into an engaging journey, making climate 
              data more approachable and impactful.
            </p>
          </details>
        </div>

        {/* Project 3: Posters for a Cultural Event */}
        <div className="project">
          <img src="/images/poster.jpg" alt="Posters for a Cultural Event" />
          <h2>Poster Design</h2>
          <details className="accordion">
            <summary>Read more</summary>
            <h3>Waste Age: What Can Design Do?</h3>
            <p>
              In 2021, I designed a poster for Waste Age: What Can Design Do?, 
              an event focused on sustainability and the role of design in addressing 
              environmental issues. Using Photoshop, I combined images of natural and 
              synthetic materials, creating a striking composition that visually 
              represents the tension between human consumption and ecological responsibility. 
              The aesthetic is intentionally alarming, provoking thought and urgency in the viewer. 
              The design reflects the complexities of waste culture, urging audiences to rethink 
              their relationship with materials and consider how design can contribute 
              to a more sustainable future.
            </p>
          </details>
        </div>

        <p className="scroll-top">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >back to the top of the section</a>
        </p>
      </div>
    </div>
  );
}

export default GraphicDesign;
