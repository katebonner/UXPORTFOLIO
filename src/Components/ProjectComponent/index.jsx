import React, { useEffect, useRef } from "react";
import {
  ProjectImage,
  ProjectText,
  ProjectDescription,
  ProjectDescriptionContainer,
  ProjectYear,
  MobileImage,
} from "./elements";
import { Link } from "react-router-dom";

const Project = ({ link, image, title, description, year }) => {
  const hoverElementRef = useRef(null);
  const cursorImageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const imageDiv = cursorImageRef.current;
      imageDiv.style.left = `${e.pageX - 400}px`;
      imageDiv.style.top = `${e.pageY - 200}px`;
    };

    const handleMouseEnter = () => {
      if (window.innerWidth > 1100) {
        const imageDiv = cursorImageRef.current;
        imageDiv.style.display = "block";
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth > 1100) {
        const imageDiv = cursorImageRef.current;
        imageDiv.style.display = "none";
      }
    };

    const containerDiv = hoverElementRef.current;
    containerDiv.addEventListener("mousemove", handleMouseMove);
    containerDiv.addEventListener("mouseenter", handleMouseEnter);
    containerDiv.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      containerDiv.removeEventListener("mousemove", handleMouseMove);
      containerDiv.removeEventListener("mouseenter", handleMouseEnter);
      containerDiv.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Link to={link} ref={hoverElementRef} style={{ border: "none" }}>
      <MobileImage src={image} />
      <ProjectDescriptionContainer>
        <ProjectText>{title}</ProjectText>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectYear>[{year}] </ProjectYear>
      </ProjectDescriptionContainer>
      <ProjectImage ref={cursorImageRef} src={image} />
    </Link>
  );
};

export default Project;
