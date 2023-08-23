import React from "react";
import { Background, Heading } from "./elements";
import LevelImage from "../../assets/level-01.png";
import WaveFunctionImage from "../../assets/wavefunction.png";
import Project from "../../Components/ProjectComponent";

const ProjectsController = () => {
  return (
    <>
      <Background />
      <Heading>SELECTED WORKS</Heading>

      <Project
        link="/level"
        image={LevelImage}
        title="level"
        description="Visualizing Audio Features for Spotify Users"
        year="2023"
      />
      <Project
        link="/wavefunction"
        image={WaveFunctionImage}
        title="schrödinger"
        description="Visualizing the one-dimensional, time-depending shrödinger equation for a free particle"
        year="2019"
      />
    </>
  );
};

export default ProjectsController;
