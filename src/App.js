import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./Controllers/About";
import Home from "./Controllers/Home";
import Projects from "./Controllers/Projects";
import { Container } from "react-bootstrap";
import "./App.css";

const Navigation = () => {
  return (
    <Container className="App-header">
      <Link className="Title" to="/">
        KA+iE
      </Link>
      <div className="Nav-element-container">
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
    </Container>
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
