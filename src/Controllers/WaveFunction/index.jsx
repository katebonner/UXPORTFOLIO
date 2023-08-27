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
  Code,
} from "./elements";
import DerivationImage from "../../assets/derivation.png";
import Blender from "../../assets/waveCode.png";
import Blender4 from "../../assets/isolatedWave1.png";
import WaveFunctionImage from "../../assets/wavefunction.png";
import SideWave from "../../assets/sideWave.png";
import { derivationCodeString } from "./schrodinger";
import ReactPlayer from "react-player";

const WaveFunctionController = () => {
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
          profound screw-shaped elegance nestled within the mathematical
          framework of our universe. This perspective not only enriched my
          understanding of quantum mechanics but also underscored the beauty and
          complexity that underlie even the most abstract mathematical concepts.
        </Text1>
        <Text2>(002)</Text2>
        <Heading1>Derivation</Heading1>
        <Derivation src={DerivationImage} />
        <Text1></Text1>
        <Text2>(003)</Text2>
        <Heading1>The Development Process</Heading1>
        <Text1>
          After derivingthe one-dimensional, time-dependent Schrödinger equation
          for a free particle, I automated the calculation of the wave
          function's vertices at various time steps.
        </Text1>
        <ReactPlayer
          className="react-player"
          url="https://player.vimeo.com/video/858257594?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          playing
          muted
          loop
          width="100%"
        />
        <Code>{formatCode(derivationCodeString)}</Code>
        <Text1>
          From these verticies, I generated a 3D mesh for each time step.
        </Text1>
        <ProjectImage src={Blender}></ProjectImage>
        <ProjectImage src={Blender4}></ProjectImage>
        <ProjectImage src={SideWave}></ProjectImage>
      </CaseContainer>
    </>
  );
};

export default WaveFunctionController;
