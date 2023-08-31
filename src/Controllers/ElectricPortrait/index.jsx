import React from "react";
import { Background, Heading1 } from "./elements";
import {
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text1,
  Text2,
  Row,
} from "./elements";
import FadeOverlay from "../../Components/FadeOverlay";

const ElectricPortraitController = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
      <Heading1>[WORK IN PROGRESS]</Heading1>
      <ProjectDescriptionContainer>
        <Description>Portrait of an Electric Pulse</Description>
        <Description>Role: Artist, Electronics Technician </Description>
        <Description>[2023]</Description>
      </ProjectDescriptionContainer>
      <CaseContainer>
        <Row>
          <Text2>(000)</Text2>
          <Heading1>Introduction</Heading1>
        </Row>
        <Text1>
          Inspired by the electric potential of the human body, select areas of
          this portrait respond to touch by playing a voice note from the
          depicted subject.
        </Text1>
        <Row>
          <Text2>(001)</Text2>
          <Heading1>The Electric Circuit</Heading1>
        </Row>
        <Text1>
          This layer consists of circuitry painted directly onto the primed
          canvas and interfaced with an arduino processor. It is the hardware
          responsible for collecting the change in electric potential from human
          touch as input to generate sound.
        </Text1>
        <Row>
          <Text2>(002)</Text2>
          <Heading1>The Insulating Mask</Heading1>
        </Row>
        <Text1>
          This layer insulates and masks selective conductive pathways, ensuring
          precision in interactions.
        </Text1>
        <Row>
          <Text2>(003)</Text2>
          <Heading1>The Portrait</Heading1>
        </Row>
      </CaseContainer>
    </>
  );
};

export default ElectricPortraitController;
