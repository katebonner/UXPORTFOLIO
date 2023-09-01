import React, { useEffect, useRef, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (image) {
        const imageDiv = cursorImageRef.current;
        imageDiv.style.left = `${e.pageX - 400}px`;
        imageDiv.style.top = `${e.pageY - 200}px`;
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (image) {
        if (window.innerWidth > 1100) {
          const imageDiv = cursorImageRef.current;
          imageDiv.style.display = "block";
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (image) {
        if (window.innerWidth > 1100) {
          const imageDiv = cursorImageRef.current;
          imageDiv.style.display = "none";
        }
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
      {image && <MobileImage src={image} />}
      <ProjectDescriptionContainer>
        <ProjectText hovered={isHovered}>{title}</ProjectText>
        <ProjectDescription hovered={isHovered}>
          {description}
        </ProjectDescription>
        <ProjectYear hovered={isHovered}>[{year}] </ProjectYear>
      </ProjectDescriptionContainer>
      {image && <ProjectImage ref={cursorImageRef} src={image} />}
    </Link>
  );
};

export default Project;
