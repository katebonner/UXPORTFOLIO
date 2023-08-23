import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./Controllers/About";
import Home from "./Controllers/Home";
import Projects from "./Controllers/Projects";
import Level from "./Controllers/Level";
import WaveFunction from "./Controllers/WaveFunction";
import "./App.css";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const getNavColor = (pathname) => {
    switch (pathname) {
      case "/level":
        return "color-level";
      default:
        return "color-default";
    }
  };
  let location = useLocation();
  let navColor = getNavColor(location.pathname);

  return (
    <div className="App-header web">
      <Link className={`Title ${navColor}`} to="/">
        KA+iE
      </Link>
      <a
        className={`Nav-element ${navColor}`}
        href="https://github.com/katebonner/UXPORTFOLIO"
        target="_blank"
        rel="noreferrer"
      >
        View &lt;Source Code/&gt; on GitHub
      </a>

      <Link className={`Nav-element ${navColor}`} to="/projects">
        Projects
      </Link>
      <Link className={`Nav-element ${navColor}`} to="/about">
        About
      </Link>

      <a
        className={`Nav-element ${navColor}`}
        href="mailto:katebonner277@gmail.com"
      >
        CONTACT
      </a>
    </div>
  );
};

const MobileNavBar = () => {
  const getNavColor = (pathname) => {
    switch (pathname) {
      case "/level":
        return "color-level";
      default:
        return "color-default";
    }
  };
  let location = useLocation();
  let navColor = getNavColor(location.pathname);
  return (
    <nav className="mobile">
      <ul>
        <Link className={`Nav-element-mobile ${navColor}`} to="/">
          KA+iE
        </Link>
        <Link className={`Nav-element-mobile ${navColor}`} to="/projects">
          Projects
        </Link>
        <Link className={`Nav-element-mobile ${navColor}`} to="/about">
          About
        </Link>
        <a
          className={`Nav-element-mobile ${navColor}`}
          href="mailto:katebonner277@gmail.com"
        >
          Contact
        </a>
        <a
          className={`Nav-element-mobile ${navColor}`}
          href="https://github.com/katebonner/UXPORTFOLIO"
          target="_blank"
          rel="noreferrer"
        >
          &lt;Source Code/&gt;
        </a>
      </ul>
    </nav>
  );
};

export const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <Navigation />
        <MobileNavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/level" element={<Level />} />
          <Route path="/wavefunction" element={<WaveFunction />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
