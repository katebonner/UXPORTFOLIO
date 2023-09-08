import React from "react";
import { Background } from "./elements";
import ProjectsList from "../../Components/ProjectComponent";
import FadeOverlay from "../../Components/FadeOverlay";
import { projectsData } from "./data";

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
