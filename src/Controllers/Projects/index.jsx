import React from "react";
import { Background, ProjectsContainer, Divider, Heading } from "./elements";
import WaveFunctionImage from "../../assets/transparentWave3.png";
import ProjectsList from "../../Components/ProjectComponent";
import FadeOverlay from "../../Components/FadeOverlay";
import { projectsData } from "./data";
import { Spacer } from "../About/elements";

const ProjectsController = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
      <ProjectsList projects={projectsData} />
    </>
  );
};

export default ProjectsController;
