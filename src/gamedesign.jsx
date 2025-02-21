function GameDesign() {
  return (
    <div className="maincontent" id="top">
        <div className="projects">
          <header>
            <h1>Game Design</h1>
          </header>

          {/* Project 1: Interactive Storytelling */}
          <div className="project">
            <img src="/images/image2.jpg" alt="Interactive Storytelling" />
            <h2>Interactive Storytelling</h2>
            <details className="accordion">
              <summary>Read more</summary>
              <h3>Exploring Narrative Depth</h3>
              <p>
                This project explores interactive storytelling techniques in digital games. Using
                branching narratives, players make choices that impact the story outcome. The game
                design emphasizes immersion through dynamic character interactions and adaptive
                story arcs.
              </p>
            </details>
          </div>

          {/* Project 2: Puzzle Game Mechanics */}
          <div className="project">
            <img src="/images/sof.jpg" alt="Puzzle Game Mechanics" />
            <h2>Puzzle Game Mechanics</h2>
            <details className="accordion">
              <summary>Read more</summary>
              <h3>Engaging Cognitive Challenges</h3>
              <p>
                A puzzle-based game project focused on cognitive engagement. The design involves
                multi-layered problem-solving mechanics that challenge the player’s strategic
                thinking. This game encourages users to experiment and find creative solutions to
                complex puzzles.
              </p>
            </details>
          </div>

          {/* Project 3: Virtual Reality Experience */}
          <div className="project">
            <img src="/images/vr.jpg" alt="Virtual Reality Experience" />
            <h2>Virtual Reality Experience</h2>
            <details className="accordion">
              <summary>Read more</summary>
              <h3>Immersive VR Design</h3>
              <p>
                A project exploring virtual reality’s potential in game design. Utilizing immersive
                environments, players engage in a fully interactive world that reacts to their
                movements. This game experiment enhances realism and player agency in digital
                experiences.
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

export default GameDesign;
