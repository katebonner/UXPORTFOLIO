import React, { useState } from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./Controllers/About";
import Home from "./Controllers/Home";
import Projects from "./Controllers/Projects";
import MobileMenuIcon from "./Components/MobileMenuIcon";
import "./App.css";

const Navigation = () => {
  return (
    <div className="App-header web">
      <Link className="Title" to="/">
        KA+iE
      </Link>
      <a
        className="Nav-element"
        href="https://github.com/katebonner/UXPORTFOLIO"
        target="_blank"
        rel="noreferrer"
      >
        View &lt;Source Code/&gt; on GitHub
      </a>

      <Link className={"Nav-element"} to="/projects">
        Projects
      </Link>
      <Link className={"Nav-element"} to="/about">
        About
      </Link>

      <a className="Contact" href="mailto:katebonner277@gmail.com">
        CONTACT
      </a>
    </div>
  );
};

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar mobile">
      <button
        className={isOpen ? "menu-icon visible" : "menu-icon"}
        onClick={toggleMenu}
      >
        <MobileMenuIcon toggled={isOpen} />
      </button>
      <ul className={isOpen ? "menu visible" : "menu"}>
        <Link className={"Nav-element"} to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link className={"Nav-element"} to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link className={"Nav-element"} to="/about" onClick={toggleMenu}>
          About
        </Link>

        <a
          className={"Nav-element"}
          href="mailto:katebonner277@gmail.com"
          onClick={toggleMenu}
        >
          Contact
        </a>
        <a
          className={"Nav-element"}
          href="https://github.com/katebonner/UXPORTFOLIO"
          target="_blank"
          rel="noreferrer"
          onClick={toggleMenu}
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
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
