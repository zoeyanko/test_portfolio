import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./style.css"; 
import GraphicDesign from './graphicdesign';
import GameDesign from './gamedesign';
import Animation from './animation';
import Illustration from './illustration';
import Navbar from './Navbar';

const GradientPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

function App() {
  const position = GradientPosition();

  return (
    <Router>
      <div 
        className="app-container"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          backgroundImage: `radial-gradient(circle 900px at ${position.x}px ${position.y}px,rgb(45, 33, 74), rgba(36, 36, 36, 0.02))`
        }}
      >
        <Navbar />
        <div className="maincontent">
          <Routes>
            <Route path="/" element={
              <div className="gallery">
                <Link to="/graphic-design" className="gallery-item">
                  <img src="images/image1.jpg" alt="Graphic Design" />
                  <div className="overlay">Graphic Design</div>
                </Link>
                <Link to="/graphic-design" className="mobile-link">Graphic Design</Link>
                <Link to="/game-design" className="gallery-item">
                  <img src="images/image2.jpg" alt="Game Design" />
                  <div className="overlay">Game Design</div>
                </Link>
                <Link to="/game-design" className="mobile-link">Game Design</Link>
                <Link to="/animation" className="gallery-item">
                  <img src="images/image3.jpg" alt="Animation" />
                  <div className="overlay">Animation</div>
                </Link>
                <Link to="/animation" className="mobile-link">Animation</Link>
                <Link to="/illustration" className="gallery-item">
                  <img src="images/image4.jpg" alt="Illustration" />
                  <div className="overlay">Illustration</div>
                </Link>
                <Link to="/illustration" className="mobile-link">Illustration</Link>
              </div>
            } />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/game-design" element={<GameDesign />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/illustration" element={<Illustration />} />
          </Routes>
        </div>
        <div className="section" id="aboutSection">
          <div className="section-wrapper">
            <h1>Hello there!</h1>
            <p className='about'>
              I am a multidisciplinary artist and designer with a love for all things playful,
              fun, and moody. My work is characterized by a unique blend of creativity,
              playfulness, and attention to detail. I believe that every project deserves a unique
              touch that reflects its personality and goals, and I strive to bring that magic to
              every piece of work.
              <br /><br />
              Don’t hesitate to reach out <strong>zoe.yanko</strong> at <strong>gmail.com</strong>
            </p>
            <p className="cv-link">
              <a href="/docs/CV.pdf" target="_blank" rel="noopener noreferrer">View CV</a>
            </p>
            <p className="linkedin-link">
              <a href="https://www.linkedin.com/in/irina-valeeva/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p className="scroll-top">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                back to top
              </a>
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
