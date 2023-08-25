import React from "react";
import { Background, Heading1 } from "./elements";
import {
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text2,
} from "./elements";
import ReactPlayer from "react-player";

const Wine = () => {
  return (
    <>
      <Background />
      <ReactPlayer
        url="https://player.vimeo.com/video/858051200?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        type="video/mp4"
        controls
        autoPlay
        width="300px"
        height="300px"
      />

      <ProjectDescriptionContainer>
        <Description>Wine: A Character Animation</Description>
        <Description>Role: Designer, Animator</Description>
        <Description>(2021)</Description>
      </ProjectDescriptionContainer>
      <CaseContainer>
        <Text2>(001)</Text2>
        <Heading1>Introduction</Heading1>
      </CaseContainer>
    </>
  );
};

export default Wine;
