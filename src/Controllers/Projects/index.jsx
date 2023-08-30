import React from "react";
import { Background, ProjectsContainer } from "./elements";
import WaveFunctionImage from "../../assets/transparentWave3.png";
import Project from "../../Components/ProjectComponent";
import FadeOverlay from "../../Components/FadeOverlay";

const ProjectsController = () => {
  return (
    <>
      <Background />
      <ProjectsContainer>
        <FadeOverlay />
        {/* <Project
        link="/level"
        image={LevelImage}
        title="level"
        description="Visualizing Audio Features for Spotify Users"
        year="2023"
      /> */}
        <Project
          link="/wavefunction"
          image={WaveFunctionImage}
          title="schrödinger's dance"
          description="computational physics & 3D animation"
          year="2019"
        />
        {/* <Project
        link="/wine"
        image={Wine}
        title="Wine: An Animated Music Video"
        description="A Short Character Animation"
        year="2021"
      /> */}
      </ProjectsContainer>
    </>
  );
};

export default ProjectsController;
