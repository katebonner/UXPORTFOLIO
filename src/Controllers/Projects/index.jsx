import React from "react";
import { Background } from "./elements";
import { ProjectImage } from "./elements";
import LevelImage from "../../assets/level-01.png";

const ProjectsController = () => {
  return (
    <>
      <Background />
      <a
        href="https://katebonner.github.io/level/"
        target="_blank"
        rel="noreferrer"
      >
        <ProjectImage src={LevelImage}></ProjectImage>
      </a>
    </>
  );
};

export default ProjectsController;
