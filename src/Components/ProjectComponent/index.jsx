import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

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

const Placeholder = () => (
  <div style={{ width: "100%", backgroundColor: "#333333" }}></div>
);

const Gallery = ({ hoveredIndex, projects }) => {
  return (
    <GalleryContainer>
      {projects.map((project, index) => (
        <LazyLoad key={index} placeholder={<Placeholder />}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              opacity: index === hoveredIndex ? 1 : 0,
              transition: "opacity 0.3s",
              width: "100%",
            }}
          />
        </LazyLoad>
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
    const handleMouseLeave = () => setHoveredIndex(0);

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
      {image && (
        <LazyLoad placeholder={<Placeholder />}>
          <MobileImage src={image} />
        </LazyLoad>
      )}
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
  const [hoveredIndex, setHoveredIndex] = useState(0);
  console.log(hoveredIndex);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        width: "100%",
        margin: "25% 8% 0 0",
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
