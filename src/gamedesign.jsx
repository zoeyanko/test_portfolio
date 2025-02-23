function GameDesign() {
  return (
    <div className="maincontent" id="top">
        <div className="projects">
          <header>
            <h1>Game Design</h1>
          </header>

          {/* Project 1 */}
          <div className="project">
            <img src="./images/image2.jpg" alt="Game No-Signal" />
            <h2>NO SIGNAL: A Vintage Cruise Ship Mystery</h2>
            <details className="accordion">
              <summary>About</summary>
              <h3>Role: 3D Artist, Art Director </h3>
              <p>
              NO SIGNAL is a narrative-driven mystery game set aboard a vintage 1970s cruise ship operated by the enigmatic Morgana Line. Players take on the role of the newly appointed Chief of Security, tasked with investigating unsettling incidents, eerie passenger behavior, and the unexplained disappearance of their predecessor. As the ship drifts further into the unknown, reality begins to unravel. 
              <br></br> <br></br>
              This project involved crafting a distinct visual identity that blends retro aesthetics with an eerie, immersive atmosphere. Responsibilities included creating 3D assets, directing the artistic vision, designing UI elements such as icons, and producing the game's atmospheric trailer. The result is a rich and unsettling world where the ship itself feels like a character—haunted by its past and secrets waiting to be uncovered.
              </p>

               {/* YouTube Video Embed */}
              <div className="video-container">
              <iframe 
              width="560" height="315" 
              src="https://www.youtube.com/embed/EfgB076LIQE?si=s2phRruSEwm7m46i" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>

            </details>
          </div>

          {/* Project 2 */}
          <div className="project">
            <img src="./images/sof.jpg" alt="Screams of the Forgotten" />
            <h2>Screams of the Forgotten</h2>
            <details className="accordion">
              <summary>About</summary>
              <h3>Role: Writer, Illustrator, Visual Designer</h3>
              <p>
              Screams of the Forgotten is a cozy and nostalgic narrative-driven game that invites players into a heartfelt journey of memories and storytelling. Through rich illustrations and a thoughtfully crafted story, the game explores themes of remembrance, identity, and the passage of time.
              <br></br> <br></br>
              This project focused on creating a warm and immersive experience, blending hand-drawn illustrations with an emotionally engaging narrative. Contributions included writing the story, developing visual elements, and guiding the artistic direction to ensure a visually cohesive and emotionally resonant journey for players.* is a psychological horror game that delves into the fragmented mind of an individual trapped in a decaying, surreal world. As players navigate the shifting, nightmarish landscapes, they uncover cryptic memories and eerie echoes of the past, piecing together the protagonist’s lost identity.
              </p>

              {/* YouTube Video Embed */}
              <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/HsbQjuA6qEc?si=EamRP919OzW0dRET" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>

            </details>
          </div>

          {/* Project 3 */}
          <div className="project">
            <img src="./images/vr.jpg" alt="Virtual Reality Experience" />
            <h2>Calmö - VR</h2>
            <details className="accordion">
              <summary>About</summary>
              <h3>Role: Art Director, 3D Artist, Sound</h3>
              <p>
              Calmö is a VR meditation experience designed to address stress and depression among students, developed as part of Aalto University's Design for Solidarity course. Through extensive research, the team identified the pressures of academic life and the need for accessible mental wellness solutions. The result is an immersive experience that offers a moment of escape and tranquility.
              <br></br> <br></br> Players begin in a small, cluttered room filled with screens, representing the overwhelming workload of student life. By touching a plant on the table, they are transported to a serene, otherworldly environment where a gentle spirit guides them through a calming meditation. The experience fosters relaxation and mindfulness, using thoughtful visual storytelling and atmospheric design to create a sense of peace.
              <br></br> <br></br> This project required a balance between realism and tranquility in visual design. Contributions included art direction to establish a cohesive aesthetic and the creation of 3D assets that enhance the immersive and meditative atmosphere.
              </p>
              
              {/* YouTube Video Embed */}
               <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/y4gfT66Ws4c?si=8fDSaY7K4DakRo0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>

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
