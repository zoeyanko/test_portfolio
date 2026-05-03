import { NavLink } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

function About() {
  return (
    <main className="page">
      <SiteHeader />

      <div className="page-content">
        <div className="subnav-wrapper">
          <nav className="subnav">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "subnav-link active" : "subnav-link"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/diaries"
              className={({ isActive }) =>
                isActive ? "subnav-link active" : "subnav-link"
              }
            >
              Diary
            </NavLink>
          </nav>
        </div>

        <div className="page-inner">
          <div className="about-page">
            <section className="about-section">
              <p className="about-heading">About</p>

              <div className="about-intro-grid">
                <div className="about-intro-left">
                  <p><strong>Zoe Yanko</strong></p>
                  <p>Designer, Media Artist</p>
                  <p>(1998)</p>
                </div>

                <div className="about-intro-right">
                  <p>
                    <a href="mailto:zoe.yanko@gmail.com">zoe.yanko@gmail.com</a>
                  </p>
                  <p>
                    <a
                      href="https://instagram.com/zoe.yanko"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @zoe.yanko
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="about-section">
              <div className="about-text">
                <p>
                  I’m a Helsinki-based designer and media artist. I work across
                  visual design, creative production, and digital media, using
                  design as a tool to shape experiences.
                </p>

                <p>
                  Alongside commissioned work, I develop personal projects that
                  explore the boundaries between design and art, focusing on
                  everyday digital behaviours, intimacy, and the presence of
                  technology in daily life.
                </p>
              </div>
            </section>

            <section className="about-section">
              <p className="about-heading">Education</p>

              <div className="about-list">
                <div className="about-item">
                  <div className="about-item-main">
                    <p><strong>MA New Media</strong></p>
                    <p className="about-place"><em>Aalto University</em></p>
                  </div>
                  <div className="about-item-side">
                    <p>2023 — 2025</p>
                  </div>
                </div>

                <div className="about-item">
                  <div className="about-item-main">
                    <p><strong>BA Design</strong></p>
                    <p className="about-place"><em>Aalto University</em></p>
                  </div>
                  <div className="about-item-side">
                    <p>2020 — 2023</p>
                  </div>
                </div>

                <div className="about-item">
                  <div className="about-item-main">
                    <p><strong>Product Design</strong></p>
                    <p className="about-place"><em>Vocational College of Piippola</em></p>
                    <p>(taideteollisuusalan perustutkinto)</p>
                  </div>
                  <div className="about-item-side">
                    <p>2015 — 2017</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-section">
              <p className="about-heading">Experience</p>

              <div className="about-list">
                <div className="about-item">
                  <div className="about-item-main">
                    <p><strong>Communication &amp; Production Assistant</strong></p>
                    <p className="about-place"><em>M-Cult</em></p>
                    <p>
                      Worked across communications, visual content, and event
                      production for media art programs.
                    </p>
                  </div>
                  <div className="about-item-side">
                    <p>2025</p>
                  </div>
                </div>

                <div className="about-item">
                  <div className="about-item-main">
                    <p><strong>Event Manager</strong></p>
                    <p className="about-place"><em>TOKYO (Aalto Arts student association)</em></p>
                    <p>
                      Led production and communication for large-scale cultural
                      events and collaborations.
                    </p>
                  </div>
                  <div className="about-item-side">
                    <p>2024</p>
                  </div>
                </div>

                <div className="about-item">
                  <div className="about-item-main">
                    <p><strong>Graphic Designer</strong></p>
                    <p className="about-place"><em>Aalto University Event Platform, Cooler Planet Festival</em></p>
                    <p>Graphic design and web content writing.</p>
                  </div>
                  <div className="about-item-side">
                    <p>2023</p>
                  </div>
                </div>

                <div className="about-item">
                  <div className="about-item-main">
                    <p><strong>Head of Visuals</strong></p>
                    <p className="about-place"><em>Dash Design Startup</em></p>
                    <p>Graphic design, visual direction, and social media.</p>
                  </div>
                  <div className="about-item-side">
                    <p>2021</p>
                  </div>
                </div>

                <div className="about-item">
                  <div className="about-item-main">
                    <p><strong>Graphic Designer</strong></p>
                    <p className="about-place"><em>AlfaTV</em></p>
                    <p>Graphic and print design.</p>
                  </div>
                  <div className="about-item-side">
                    <p>2019</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-section">
              <p className="about-heading">Practice</p>

              <div className="about-practice-grid">
                <p>Visual communication</p>
                <p>Digital design</p>
                <p>Interaction &amp; new media</p>
                <p>Art direction</p>
                <p>Research-driven design</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

export default About;