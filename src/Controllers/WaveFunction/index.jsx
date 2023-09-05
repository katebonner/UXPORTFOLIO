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
  Text3,
  Spacer,
  Row,
  ProjectImageHeader,
  MobileSpacer,
  StyledPlayer2,
} from "./elements";
import DerivationImage from "../../assets/derivation.png";
import WavefunctionImageTransparent from "../../assets/transparentWave3.png";
import WavefunctionImage from "../../assets/wavefunction.png";
import Blender from "../../assets/waveCode.png";
import Blender4 from "../../assets/isolatedWave1.png";
import SideWave from "../../assets/sideWave.png";
import ShadeWave from "../../assets/WaveShading.png";
import { derivationCodeString } from "./schrodinger";
import FadeOverlay from "../../Components/FadeOverlay";
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
      <FadeOverlay />
      <StyledPlayer2
        url="https://player.vimeo.com/video/858681236?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        playing
        muted
        loop
        width="100%"
        playsinline
      />
      {/* <ProjectImageHeader src={WavefunctionImage} />
      <MobileSpacer src={WavefunctionImageTransparent} /> */}
      <ProjectDescriptionContainer>
        <Description>
          3D Visualization of the One-Dimensional, Time-Dependent Shrödinger
          Equation for a Free Particle
        </Description>

        <Description>Role: Designer, Developer, Mathematician</Description>
        <Description>[2019]</Description>
      </ProjectDescriptionContainer>
      <CaseContainer>
        <Row>
          <Text2>(001)</Text2>
          <Heading1>Introduction</Heading1>
        </Row>
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
        <Row>
          <Text2>(002)</Text2>
          <Heading1>Derivation</Heading1>
        </Row>
        <Derivation src={DerivationImage} />
        <Text1></Text1>
        <Row>
          <Text2>(003)</Text2>
          <Heading1>Development</Heading1>
        </Row>
        <Text1>
          I derived the equation and then automated the computation of the wave
          function's vertices over different time steps, plotting them in two
          dimensions.
        </Text1>
        <ReactPlayer
          url="https://player.vimeo.com/video/858680382?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          playing
          muted
          loop
          width="100%"
          playsinline
        />
        <Code>{formatCode(derivationCodeString)}</Code>
        <Text1>
          To properly render the elegance of the helical curvature from the wave
          function's imaginary component, we need to work in three dimensions.
          So, I generated a 3D mesh for each time step.
        </Text1>
        <ProjectImage src={Blender}></ProjectImage>
        <ProjectImage src={Blender4}></ProjectImage>
        <ProjectImage src={SideWave}></ProjectImage>
        <Row>
          <Text2>(004)</Text2>
          <Heading1>Animation</Heading1>
        </Row>
        <Text1>
          Each time step corresponds to one frame. I rendered the .mp4 files at
          24 frames per second (fps). Given that each time step represents 0.1
          seconds, the final animation plays at 2.4x the real speed. Moreover, I
          assigned the mesh volume and material texture, and added lighting to
          the environment.
        </Text1>

        <ProjectImage src={ShadeWave}></ProjectImage>
        <Row>
          <Text2>(005)</Text2>
          <Heading1>Final Product</Heading1>
        </Row>
        <Text3>[ angled ]</Text3>
        <StyledPlayer2
          url="https://player.vimeo.com/video/858681236?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          playing
          muted
          loop
          width="100%"
          playsinline
        />
        <Text3>[ y axis ]</Text3>
        <StyledPlayer2
          url="https://player.vimeo.com/video/858727921?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          playing
          muted
          loop
          width="100%"
          playsinline
        />
        <Text3>[ x axis ]</Text3>
        <StyledPlayer2
          url="https://player.vimeo.com/video/858726202?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          playing
          muted
          loop
          width="100%"
          playsinline
        />
      </CaseContainer>
      <Spacer />
    </>
  );
};

export default WaveFunctionController;
