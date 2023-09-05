import React from "react";
import { Background, Heading1 } from "./elements";
import {
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text1,
  Text2,
  Row,
  Spacer,
  StyledPlayer,
  StyledPlayer2,
  Center,
} from "./elements";
import FadeOverlay from "../../Components/FadeOverlay";

const DemonController = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
      <Spacer />
      <StyledPlayer
        url="https://player.vimeo.com/video/861045969?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        playing
        muted
        loop
        width="100%"
        playsinline
      />

      <ProjectDescriptionContainer>
        <Description>Inner Demon</Description>
        <Description>Role: Design Technologist </Description>
        <Description>[2021]</Description>
      </ProjectDescriptionContainer>
      <CaseContainer>
        <Row>
          <Text2>(000)</Text2>
          <Heading1>Objective</Heading1>
        </Row>
        <Text1>
          Playing with Meta's Spark AR software, I created a an augmented
          reality filter that allows Facebook and Instagram users to wink at
          their inner demon.
        </Text1>
        <Spacer />
        <StyledPlayer2
          url="https://player.vimeo.com/video/861089557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          playing
          muted
          loop
          width="100%"
          playsinline
        />
        <Center>
          <a
            href="https://www.facebook.com/fbcameraeffects/testit/820969599504310/Njc5NGMwM2MyYWFhZjViZmZlNWY5N2Q5ZWQyNDlkMDc=/"
            target="_blank"
            rel="noopener noreferrer"
            class="button-style"
          >
            TRY FILTER ON MOBILE DEVICE
          </a>
        </Center>
      </CaseContainer>
      <Spacer />
    </>
  );
};

export default DemonController;
