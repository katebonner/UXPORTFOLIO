import React from "react";
import { Background } from "./elements";
import WaveFunctionImage from "../../assets/wavefunction.png";
import Project from "../../Components/ProjectComponent";
import FadeOverlay from "../../Components/FadeOverlay";

const ProjectsController = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
      <Project
        link="/wavefunction"
        image={WaveFunctionImage}
        title="schrödinger"
        description="visualizing the one-dimensional, time-depending shrödinger equation for a free particle"
        year="2019"
      />
      {/* <Project
        link="/level"
        image={LevelImage}
        title="level"
        description="Visualizing Audio Features for Spotify Users"
        year="2023"
      /> */}
      {/* <Project
        link="/wine"
        image={Wine}
        title="Wine: An Animated Music Video"
        description="A Short Character Animation"
        year="2021"
      /> */}
    </>
  );
};

export default ProjectsController;
