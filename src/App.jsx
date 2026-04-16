import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";

const homeImages = [
  "/images/home2.jpg",
  "/images/home3.jpg",
  "/images/home4.jpg",
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % homeImages.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="home-page"
      style={{ backgroundImage: `url(${homeImages[currentImage]})` }}
    >
      <div className="home-overlay"></div>

      <SiteHeader />

      <section className="home-center">
        <Link to="/projects" className="home-main-link">Projects</Link>
        <Link to="/diaries" className="home-main-link">Diary</Link>
      </section>

      <SiteFooter />
    </main>
  );
}

function Diaries() {
  return (
    <main className="page">
      <SiteHeader />

      <div className="page-content">
        <div className="subnav-wrapper">
          <nav className="subnav">
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "subnav-link active" : "subnav-link"}
            >
              Projects
            </NavLink>
            <NavLink
              to="/diaries"
              className={({ isActive }) => isActive ? "subnav-link active" : "subnav-link"}
            >
              Diary
            </NavLink>
          </nav>
        </div>

        <div className="page-inner">
          <p>Diary entries here.</p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/diaries" element={<Diaries />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;