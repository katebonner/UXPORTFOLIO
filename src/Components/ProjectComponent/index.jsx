import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ProjectText,
  ProjectDescription,
  ProjectDescriptionContainer,
  ProjectYear,
  MobileImage,
  Row,
  GalleryContainer,
  ImageContainer,
} from "./elements";

const Gallery = ({ hoveredIndex, projects }) => {
  return (
    <GalleryContainer>
      {projects.map((project, index) => (
        <img
          key={index}
          src={project.image}
          alt={project.title}
          style={{
            opacity: index === hoveredIndex ? 1 : 0.3,
            transition: "opacity 0.3s",
            width: "50%",
          }}
        />
      ))}
    </GalleryContainer>
  );
};

const Project = ({
  link,
  image,
  title,
  description,
  year,
  index,
  setHoveredIndex,
  hoveredIndex,
}) => {
  const hoverElementRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const containerDiv = hoverElementRef.current;
    containerDiv.addEventListener("mouseenter", handleMouseEnter);
    containerDiv.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      containerDiv.removeEventListener("mouseenter", handleMouseEnter);
      containerDiv.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index, setHoveredIndex]);

  return (
    <Link to={link} ref={hoverElementRef} style={{ border: "none" }}>
      {image && <MobileImage src={image} />}
      <ProjectDescriptionContainer
        style={{
          opacity: index === hoveredIndex ? 1 : 0.3,
        }}
      >
        <ProjectText>{title}</ProjectText>
        <Row>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectYear>[{year}]</ProjectYear>
        </Row>
      </ProjectDescriptionContainer>
    </Link>
  );
};

const ProjectsList = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        width: "100%",
        margin: "5% 0",
      }}
    >
      <Gallery hoveredIndex={hoveredIndex} projects={projects} />
      <ImageContainer>
        {projects.map((project, index) => (
          <Project
            key={project.link}
            {...project}
            index={index}
            setHoveredIndex={setHoveredIndex}
            hoveredIndex={hoveredIndex}
            projects={projects}
          />
        ))}
      </ImageContainer>
    </div>
  );
};

export default ProjectsList;
