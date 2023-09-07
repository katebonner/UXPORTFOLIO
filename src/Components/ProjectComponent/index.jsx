import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/capi.png";
import Image2 from "../../assets/WaveShading.png";
import Image3 from "../../assets/gabi.png";
import Image4 from "../../assets/danny2.png";

// Note: Adjust your styled component imports here
import {
  ProjectImage,
  ProjectText,
  ProjectDescription,
  ProjectDescriptionContainer,
  ProjectYear,
  MobileImage,
  Row,
  GalleryContainer,
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
    <Link
      to={link}
      ref={hoverElementRef}
      style={{ border: "none", padding: "0 2%" }}
    >
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
        width: "90%",
        margin: " 5% 5%",
      }}
    >
      <Gallery hoveredIndex={hoveredIndex} projects={projects} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          justifyContent: "flex-start",
        }}
      >
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
      </div>
    </div>
  );
};

export default ProjectsList;
