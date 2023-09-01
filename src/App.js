import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./Controllers/About";
import Home from "./Controllers/Home";
import Projects from "./Controllers/Projects";
import Synesthesia from "./Controllers/Synesthesia";
import WaveFunction from "./Controllers/WaveFunction";
import Art from "./Controllers/Art";
import "./App.css";
import { useLocation } from "react-router-dom";
import RefreshAnimation from "./Components/RefreshAnimation";
import ElectronicPortrait from "./Controllers/ElectricPortrait";

const Navigation = () => {
  const getNavColor = (pathname) => {
    switch (pathname) {
      case "/":
        return "color-black";
      default:
        return "color-white";
    }
  };
  let location = useLocation();
  let navColor = getNavColor(location.pathname);

  const renderContent = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <div className="Nav-grouping">
              <Link className={`Nav-element ${navColor}`} to="/art">
                ART
              </Link>
              <Link className={`Nav-element ${navColor}`} to="/projects">
                PROJECTS
              </Link>
              <Link className={`Nav-element ${navColor}`} to="/about">
                ABOUT
              </Link>
              <a
                className={`Nav-element ${navColor}`}
                href="mailto:katebonner277@gmail.com"
              >
                CONTACT
              </a>
            </div>
          </>
        );

      case "/projects":
        return (
          <div className="Nav-grouping">
            <Link className={`Nav-element ${navColor}`} to="/">
              KA+iE
            </Link>
            <div className={`Nav-element ${navColor}`}>/</div>
            <Link className={`Nav-element ${navColor}`} to="/projects">
              PROJECTS
            </Link>
          </div>
        );

      case "/wavefunction":
        return (
          <div className="Nav-grouping">
            <Link className={`Nav-element ${navColor}`} to="/">
              KA+iE
            </Link>
            <div className={`Nav-element ${navColor}`}>/</div>
            <Link className={`Nav-element ${navColor}`} to="/projects">
              PROJECTS
            </Link>
            <div className={`Nav-element ${navColor}`}>/</div>
            <Link className={`Nav-element ${navColor}`} to="/wavefunction">
              SCHRÖDINGER
            </Link>
          </div>
        );

      case "/about":
        return (
          <div className="Nav-grouping">
            <Link className={`Nav-element ${navColor}`} to="/">
              KA+iE
            </Link>
            <div className={`Nav-element ${navColor}`}>/</div>
            <Link className={`Nav-element ${navColor}`} to="/about">
              ABOUT
            </Link>
          </div>
        );

      case "/art":
        return (
          <div className="Nav-grouping">
            <Link className={`Nav-element ${navColor}`} to="/">
              KA+iE
            </Link>
            <div className={`Nav-element ${navColor}`}>/</div>
            <Link className={`Nav-element ${navColor}`} to="/art">
              ART
            </Link>
          </div>
        );

      case "/electronicportrait":
        return (
          <div className="Nav-grouping">
            <Link className={`Nav-element ${navColor}`} to="/">
              KA+iE
            </Link>
            <div className={`Nav-element ${navColor}`}>/</div>
            <Link className={`Nav-element ${navColor}`} to="/projects">
              PROJECTS
            </Link>
            <div className={`Nav-element ${navColor}`}>/</div>
            <Link
              className={`Nav-element ${navColor}`}
              to="/electronicportrait"
            >
              PORTRAIT OF AN ELECTRIC PULSE
            </Link>
          </div>
        );

      case "/synesthesia":
        return (
          <div className="Nav-grouping">
            <Link className={`Nav-element ${navColor}`} to="/">
              KA+iE
            </Link>
            <div className={`Nav-element ${navColor}`}>/</div>
            <Link className={`Nav-element ${navColor}`} to="/projects">
              PROJECTS
            </Link>
            <div className={`Nav-element ${navColor}`}>/</div>
            <Link className={`Nav-element ${navColor}`} to="/level">
              LEVEL
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="App-header web">{renderContent()}</div>;
};

const MobileNavBar = () => {
  const getNavColor = (pathname) => {
    switch (pathname) {
      case "/":
        return "color-black-mobile";
      default:
        return "color-white-mobile";
    }
  };
  let location = useLocation();
  let navColor = getNavColor(location.pathname);
  const renderContent = () => {
    switch (location.pathname) {
      case "/":
        return (
          <div className="Nav-element-mobile">
            <Link className={`Nav-element-mobile ${navColor}`} to="/art">
              ART
            </Link>
            <Link className={`Nav-element-mobile ${navColor}`} to="/projects">
              PROJECTS
            </Link>
            <Link className={`Nav-element-mobile ${navColor}`} to="/about">
              ABOUT
            </Link>
            <a
              className={`Nav-element-mobile ${navColor}`}
              href="mailto:katebonner277@gmail.com"
            >
              CONTACT
            </a>
          </div>
        );

      case "/projects":
        return (
          <div className="Nav-element-mobile">
            <Link className={`Nav-element-mobile ${navColor}`} to="/">
              KA+iE /
            </Link>
            <Link className={`Nav-element-mobile ${navColor}`} to="/projects">
              PROJECTS
            </Link>
          </div>
        );

      case "/wavefunction":
        return (
          <div className="Nav-element-mobile">
            <Link className={`Nav-element-mobile ${navColor}`} to="/">
              KA+iE /
            </Link>
            <Link className={`Nav-element-mobile ${navColor}`} to="/projects">
              PROJECTS /
            </Link>
            <Link
              className={`Nav-element-mobile ${navColor}`}
              to="/wavefunction"
            >
              SCHRÖDINGER
            </Link>
          </div>
        );

      case "/about":
        return (
          <div className="Nav-element-mobile">
            <Link className={`Nav-element-mobile ${navColor}`} to="/">
              KA+iE /
            </Link>
            <Link className={`Nav-element-mobile ${navColor}`} to="/about">
              ABOUT
            </Link>
          </div>
        );

      case "/art":
        return (
          <div className="Nav-element-mobile">
            <Link className={`Nav-element-mobile ${navColor}`} to="/">
              KA+iE /
            </Link>
            <Link className={`Nav-element-mobile ${navColor}`} to="/art">
              ART
            </Link>
          </div>
        );

      case "/electronicportrait":
        return (
          <div className="Nav-element-mobile">
            <Link className={`Nav-element-mobile ${navColor}`} to="/">
              KA+iE /
            </Link>
            <Link className={`Nav-element-mobile ${navColor}`} to="/projects">
              PROJECTS /
            </Link>
            <Link
              className={`Nav-element-mobile ${navColor}`}
              to="/electronicportrait"
            >
              PORTRAIT OF AN ELECTRIC PULSE
            </Link>
          </div>
        );

      case "/synesthesia":
        return (
          <div className="Nav-element-mobile">
            <Link className={`Nav-element-mobile ${navColor}`} to="/">
              KA+iE /
            </Link>
            <Link className={`Nav-element-mobile ${navColor}`} to="/projects">
              PROJECTS /
            </Link>
            <Link className={`Nav-element-mobile ${navColor}`} to="/level">
              LEVEL
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="mobile">{renderContent()}</div>;
};

export const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <RefreshAnimation />
        <Navigation />
        <MobileNavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/art" element={<Art />} />
          <Route path="/synesthesia" element={<Synesthesia />} />
          <Route path="/wavefunction" element={<WaveFunction />} />
          <Route path="/electronicportrait" element={<ElectronicPortrait />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
