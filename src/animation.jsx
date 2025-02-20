function Animation() {
  return (
    <div className="maincontent" id="top">
        <div className="projects">
          <header>
            <h1>Animation</h1>
          </header>

          {/* Project 1: Experimental Motion */}
          <div className="project">
            <img src="/images/image3.jpg" alt="Experimental Motion" />
            <h2>Experimental Motion</h2>
            <details className="accordion">
              <summary>Read more</summary>
              <h3>Blending Art & Movement</h3>
              <p>
                This project explores abstract motion graphics, blending visual storytelling with
                dynamic motion. Using After Effects, I created fluid transitions and kinetic
                typography that enhance the emotional depth of the visuals.
              </p>
            </details>
          </div>

          {/* Project 2: Character Animation */}
          <div className="project">
            <img src="/images/ani1.jpg" alt="Character Animation" />
            <h2>Character Animation</h2>
            <details className="accordion">
              <summary>Read more</summary>
              <h3>Bringing Characters to Life</h3>
              <p>
                A project focusing on expressive character animation. Using frame-by-frame
                techniques in Adobe Animate, I created fluid character movements that convey emotion
                and personality through motion design.
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

export default Animation;
