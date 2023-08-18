import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./Controllers/About";
import Home from "./Controllers/Home";
import Projects from "./Controllers/Projects";
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
  return (
    <nav className="mobile">
      <ul>
        <Link className={"Nav-element-mobile"} to="/">
          KA+iE
        </Link>
        <Link className={"Nav-element-mobile"} to="/projects">
          Projects
        </Link>
        <Link className={"Nav-element-mobile"} to="/about">
          About
        </Link>
        <a
          className={"Nav-element-mobile"}
          href="mailto:katebonner277@gmail.com"
        >
          Contact
        </a>
        <a
          className={"Nav-element-mobile"}
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
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
