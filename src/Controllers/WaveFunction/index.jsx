import React from "react";
import { Background, Heading1 } from "./elements";
import {
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text1,
  Text2,
  Derivation,
  ProjectImage,
} from "./elements";
import DerivationImage from "../../assets/derivation.png";
import WaveFunctionImage from "../../assets/wavefunction.png";

const WaveFunctionController = () => {
  return (
    <>
      <Background />
      <ProjectImage src={WaveFunctionImage}></ProjectImage>
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
        <Text1>
          This undertaking deepened my appreciation for the often elusive
          imaginary component of wave functions. Through visualizing the
          time-dependent Schrödinger equation for a free particle, I met a
          profound elegance nestled within the mathematical framework of our
          universe. The project illuminated how the interplay between real and
          imaginary components manifests as the intricate screw-like shape of a
          wave function. This perspective not only enriched my understanding of
          quantum mechanics but also underscored the beauty and complexity that
          underlie even the most abstract mathematical concepts.
        </Text1>
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
