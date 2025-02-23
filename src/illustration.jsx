import { Link } from 'react-router-dom';

function Illustration() {
  return (
      <div className="maincontent" id="top">
          <div className="projects">
            <header>
              <h1>Illustration</h1>
            </header>

            {/* Project 1: Playful Illustration for a Magazine */}
            <div className="project">
              <img src="./images/image4.jpg" alt="Playful Illustration for a Magazine" />
              <h2>Playful Illustration for a Magazine</h2>
              <details className="accordion">
                <summary>Read more</summary>
                <h3>Bringing Stories to Life</h3>
                <p>
                  This project involved creating vibrant and playful illustrations for a contemporary magazine. The goal was to enhance editorial content with engaging visuals, using bold colors, dynamic shapes, and expressive characters.
                </p>
              </details>
            </div>

            {/* Project 2: Data Factory Animated Illustration */}
            <div className="project">
              <img src="./images/image6.jpg" alt="Data Factory Animated Illustration" />
              <h2>Data Factory Animated Illustration</h2>
              <details className="accordion">
                <summary>Read more</summary>
                <h3>Animated vector illustration for Our Labor is Joy Aps</h3>
                <p>
                Data Architecture is not for easy talk. How does "Data A" get to become cleaned and enriched from various sources and become "ABC"? My task was to explain the backstage of data processing in a fun and abstract way.                </p>
              </details>
            </div>

            {/* Project 3: Type of Characters for FIKSURUOKA */}
            <div className="project">
              <img src="./images/fr.jpg" alt="Type of Characters for FIKSURUOKA" />
              <h2>Type of Characters for FIKSURUOKA</h2>
              <details className="accordion">
                <summary>Read more</summary>
                <h3>Fun and Engaging Mascots</h3>
                <p>
                  Created a unique set of illustrated characters for FIKSURUOKA, a brand promoting sustainable and affordable food. The designs aimed to communicate playfulness and eco-conscious messaging, making the brand more relatable to its audience.
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
              >
                back to the top of the section
              </a>
            </p>
          </div>
    </div>
  );
}

export default Illustration;
