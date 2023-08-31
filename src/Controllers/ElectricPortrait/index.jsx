import React from "react";
import { Background, Heading1 } from "./elements";
import {
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text1,
  Text2,
  Row,
  ProjectImage,
  Spacer,
  Code,
  ProjectLoadingImageWrapper,
  Heading,
} from "./elements";
import FadeOverlay from "../../Components/FadeOverlay";
import ArduinoCircuit from "../../assets/Arduino_Circuit.png";
import ArduinoTest1 from "../../assets/Arduino_Test1.png";
import ArduinoTest2 from "../../assets/Arduino_Test2.png";
import ArduinoTest3 from "../../assets/Arduino_Test3.png";
import { arduinoCodeString } from "./arduino";

const ElectricPortraitController = () => {
  const formatCode = (codeString) =>
    codeString.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index !== codeString.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  return (
    <>
      <Background />
      <FadeOverlay />
      <Spacer />
      <Heading>[WORK IN PROGRESS]</Heading>
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
        <Spacer />
        <Row>
          <Text2>(001)</Text2>
          <Heading1>The Electric Circuit</Heading1>
        </Row>
        <Text1>
          Layer 1 consists of circuitry painted directly onto the primed canvas
          and interfaced with an arduino processor. It is the hardware
          responsible for collecting the change in electric potential from human
          touch as input to generate sound. I began by building the base
          circuit:
        </Text1>
        <ProjectImage src={ArduinoCircuit} />
        <Code>{formatCode(arduinoCodeString)}</Code>
        <Text1>
          I tested its functionality by collecting the change in electric
          potential via copper tape:
        </Text1>
        <ProjectImage src={ArduinoTest1} />
        <Text1>
          I then exchanged the copper tape for SKU-0209 - Bare Conductive
          Electric Paint:
        </Text1>
        <ProjectImage src={ArduinoTest2} />
        <Spacer />
        <Row>
          <Text2>(002)</Text2>
          <Heading1>The Insulating Mask</Heading1>
        </Row>
        <Text1>
          Layer 2 insulates and masks selective conductive pathways, ensuring
          precision in interactions. I continued testing by investigating
          different insulating materials:
        </Text1>

        <ProjectImage src={ArduinoTest3} />
        <Text1>
          I found acrylic paint (blue) acts as a sufficient conductor and
          acrylic polymer varnish (white/clear) acts as a sufficient insulator.
        </Text1>
        <Spacer />
        <Row>
          <Text2>(003)</Text2>
          <Heading1>The Portrait</Heading1>
        </Row>
        <Spacer />
        <Heading1>
          <ProjectLoadingImageWrapper />
        </Heading1>
        <Spacer />
      </CaseContainer>
      <Spacer />
    </>
  );
};

export default ElectricPortraitController;
