import React from "react";
import { Background } from "./elements";
import LevelImage from "../../assets/level-01.png";
import Project from "../../Components/ProjectComponent";

const ProjectsController = () => {
  return (
    <>
      <Background />
      <Project
        link="/level"
        image={LevelImage}
        title="level"
        description="Visualizing Audio Features for Spotify Users"
        year="2023"
      />
    </>
  );
};

export default ProjectsController;
