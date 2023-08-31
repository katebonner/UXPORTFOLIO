import React from "react";
import { Background, ProjectsContainer } from "./elements";
import WaveFunctionImage from "../../assets/transparentWave3.png";
import Project from "../../Components/ProjectComponent";
import FadeOverlay from "../../Components/FadeOverlay";

const ProjectsController = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
      <ProjectsContainer>
        {/* <Project
        link="/level"
        image={LevelImage}
        title="level"
        description="Visualizing Audio Features for Spotify Users"
        year="2023"
      /> */}
        <Project
          link="/electronicportrait"
          title="portrait of an electric pulse"
          description="electronics & fine art"
          year="2023"
        />
        <Project
          link="/wavefunction"
          image={WaveFunctionImage}
          title="schrödinger's dance"
          description="computational physics & 3D animation"
          year="2019"
        />
      </ProjectsContainer>
    </>
  );
};

export default ProjectsController;
