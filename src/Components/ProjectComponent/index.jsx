import React from "react";
import {
  ProjectImage,
  ProjectText,
  ProjectContainer,
  ProjectDescription,
  ProjectDescriptionContainer,
} from "./elements";
import { Link } from "react-router-dom";

const Project = ({ link, image, title, description, year }) => {
  return (
    <ProjectContainer>
      <Link to={link}>
        <ProjectImage src={image}></ProjectImage>
      </Link>
      <ProjectDescriptionContainer>
        <ProjectText>{title}</ProjectText>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectText>({year}) </ProjectText>
      </ProjectDescriptionContainer>
    </ProjectContainer>
  );
};

export default Project;
