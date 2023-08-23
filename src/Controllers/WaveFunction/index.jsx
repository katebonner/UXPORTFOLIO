import React from "react";
import { Background, Heading1 } from "./elements";
import {
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text1,
  Text2,
  Derivation,
} from "./elements";
import DerivationImage from "../../assets/derivation.png";
import WaveFunction from "../../Components/WaveFunctionComponent";

const WaveFunctionController = () => {
  return (
    <>
      <Background />

      <ProjectDescriptionContainer>
        <Description>
          Visualizing the one-dimensional, time-depending shrödinger equation
          for a free particle
        </Description>

        <Description>Role: Designer, Developer, Mathematician</Description>
        <Description>(2019)</Description>
      </ProjectDescriptionContainer>
      <CaseContainer>
        <Text2>(001)</Text2>
        <Heading1>Introduction</Heading1>
        <Text1></Text1>
        <Text2>(002)</Text2>
        <Heading1>Derivation</Heading1>
        <Derivation src={DerivationImage} />
        <Text1></Text1>
        <Text2>(003)</Text2>
        <Heading1>The Design Process</Heading1>
        <Text1></Text1>
        <Text2>(004)</Text2>
        <Heading1>The Development Process</Heading1>
        <Text1></Text1>
      </CaseContainer>
    </>
  );
};

export default WaveFunctionController;
