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
  StyledPlayer,
  PlayerWrapper,
} from "./elements";
import DerivationImage from "../../assets/derivation.png";
import Blender from "../../assets/waveCode.png";
import Blender4 from "../../assets/isolatedWave1.png";
import WaveFunctionImage from "../../assets/wavefunction.png";
import SideWave from "../../assets/sideWave.png";
import ShadeWave from "../../assets/WaveShading.png";
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
      {/* <ProjectImage src={WaveFunctionImage}></ProjectImage> */}
      <PlayerWrapper>
        <ReactPlayer
          className="react-player"
          url="https://player.vimeo.com/video/858681236?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          playing
          muted
          loop
          width="100%"
          // height="100%"
        />
      </PlayerWrapper>
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
          The time-dependent Schrödinger equation for a free particle connects
          the dynamics of the particle's wave function with its kinetic energy
          and momentum. Solving this equation allows us to predict how the
          probability density wave function evolves over an interval of time.
        </Text1>
        <Text1>
          The Schrödinger equation is a cornerstone of quantum mechanics and
          provides a mathematical framework for understanding the behavior of
          particles on the quantum scale. The equation is a differential
          equation, and its solutions describe the wave-like behavior of
          particles, leading to concepts such as wave-particle duality and the
          probabilistic interpretation of quantum mechanics.
        </Text1>
        <Text1>
          This project deepened my appreciation for the elusive, imaginary
          component of wave functions. In visualizing the equation for a free
          particle, I met a helical elegance nestled within the mathematical
          framework of our universe. This perspective not only enriched my
          understanding of quantum mechanics, but also underscored the beauty
          and complexity that underlies abstract mathematical concepts.
        </Text1>
        <Text2>(002)</Text2>
        <Heading1>Derivation</Heading1>
        <Derivation src={DerivationImage} />
        <Text1></Text1>
        <Text2>(003)</Text2>
        <Heading1>The Development Process</Heading1>
        <Text1>
          I derived the equation and then automated the computation of the wave
          function's vertices over different time steps, plotting them in 2D.
        </Text1>
        <ReactPlayer
          url="https://player.vimeo.com/video/858680382?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          playing
          muted
          loop
          width="100%"
        />
        <Code>{formatCode(derivationCodeString)}</Code>
        <Text1>
          While a 2D animation of the wave function is elegant, its 3D
          counterpart would be even more so. Using these vertices, I generated a
          mesh for each time step using a 3D modeling and animation software.
        </Text1>
        <ProjectImage src={Blender}></ProjectImage>
        <ProjectImage src={Blender4}></ProjectImage>
        <ProjectImage src={SideWave}></ProjectImage>
        <Text1>
          Each time step corresponds to one frame. The animations were rendered
          at 24 frames per second (fps). Given that each time step represents
          0.1 seconds, the animation plays at 2.4x the real speed.
        </Text1>
        <ProjectImage src={ShadeWave}></ProjectImage>
        <Text1>
          The helical curvature arises from the wave function's imaginary
          component; to capture it properly required working in three
          dimensions.
        </Text1>
        <PlayerWrapper>
          <ReactPlayer
            url="https://player.vimeo.com/video/858681236?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            playing
            muted
            loop
            width="100%"
          />
        </PlayerWrapper>
      </CaseContainer>
    </>
  );
};

export default WaveFunctionController;
