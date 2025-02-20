import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top only if navigating to homepage and not an anchor link
    if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="sidemenu">
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="nav-title">
        ZOE YANKO
      </Link>
      <nav>
        <ul>
          <li><HashLink to="/graphic-design#top">Graphic Design</HashLink></li>
          <li><HashLink to="/game-design#top">Game Design</HashLink></li>
          <li><HashLink to="/animation#top">Animation</HashLink></li>
          <li><HashLink to="/illustration#top">Illustration</HashLink></li>
          <li><HashLink smooth to="/#aboutSection">About</HashLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
