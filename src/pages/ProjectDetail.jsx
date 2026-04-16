import { Link, NavLink, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import projects from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();

  const currentIndex = projects.findIndex((project) => project.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <main className="page">
        <SiteHeader />
        <div className="page-content">
          <div className="page-inner">
            <p>Project not found.</p>
          </div>
        </div>
        <SiteFooter />
      </main>
    );
  }

  const previousProject =
    currentIndex === 0 ? projects[projects.length - 1] : projects[currentIndex - 1];

  const nextProject =
    currentIndex === projects.length - 1 ? projects[0] : projects[currentIndex + 1];

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

          <div className="project-top-bar">
            <Link to="/projects" className="close-button">
              Close ✕
            </Link>
          </div>

          <div className="project-pagination">
            <Link to={`/projects/${previousProject.slug}`} className="project-nav-button">
              ← Previous project
            </Link>
            <Link to={`/projects/${nextProject.slug}`} className="project-nav-button">
              Next project →
            </Link>
          </div>

          <div className="project-detail-top">

            <h1 className="project-detail-title">
              {project.title} <span className="project-year">{project.year}</span>
            </h1>

            <p className="project-description">{project.description}</p>

            <div className="project-meta-grid">
              <div className="project-meta-box">
                <span className="meta-label">Client</span>
                <span className="meta-value">{project.client}</span>
              </div>

              <div className="project-meta-box">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.metaTopRight}</span>
              </div>

              <div className="project-meta-box">
                <span className="meta-label">#</span>
                <span className="meta-value">{project.tagBottomLeft}</span>
              </div>

              <div className="project-meta-box">
                <span className="meta-label">#</span>
                <span className="meta-value">{project.tagBottomRight}</span>
              </div>
            </div>
          </div>

          <div className="project-media">
            {project.media.map((item, index) => {
              if (item.type === "video") {
                return (
                  <div key={index} className="project-media-item video">
                    <div className="video-wrapper">
                      <iframe
                        src={item.src}
                        title={`${project.title} video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                );
              }

              return (
                <div key={index} className="project-media-item">
                  <img src={item.src} alt={item.alt || project.title} />
                </div>
              );
            })}
          </div>


        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

export default ProjectDetail;