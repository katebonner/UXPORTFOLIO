import React from "react";
import { Background, ProjectsContainer, Divider, Heading } from "./elements";
import WaveFunctionImage from "../../assets/transparentWave3.png";
import Project from "../../Components/ProjectComponent";
import FadeOverlay from "../../Components/FadeOverlay";
import { Spacer } from "../About/elements";

const ProjectsController = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
      <ProjectsContainer>
        <Project
          link="/electronicportrait"
          title="portrait of an electric pulse"
          description="electronics & fine art"
          year="2023"
        />
        <Divider />
        <Project
          link="/synesthesia"
          title="synesthesia: spotify sound and color"
          description="web design & development"
          year="2022"
        />
        <Divider />
        <Project
          link="/innerdemon"
          title="inner demon"
          description="interactive & augmented reality design"
          year="2021"
        />
        <Divider />
        <Project
          link="/wavefunction"
          title="schrödinger's dance"
          description="computational physics & 3D animation"
          year="2019"
        />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </ProjectsContainer>
    </>
  );
};

export default ProjectsController;
