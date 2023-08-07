import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./Controllers/About";
import Home from "./Controllers/Home";
import Projects from "./Controllers/Projects";
import "./App.css";

const Navigation = () => {
  return (
    <div className="App-header">
      <Link className="Title" to="/">
        KA+iE
      </Link>
      <a
        className="Nav-element bold"
        href="https://github.com/katebonner/UXPORTFOLIO"
        target="_blank"
        rel="noreferrer"
      >
        View my website's code on GitHub
      </a>
      <div>
        <Link className={"Nav-element"} to="/projects">
          Projects,
        </Link>
        <Link className={"Nav-element"} to="/about">
          About
        </Link>
      </div>

      <a className="Contact" href="mailto:katebonner277@gmail.com">
        CONTACT
      </a>
    </div>
  );
};

export const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <Navigation />
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
