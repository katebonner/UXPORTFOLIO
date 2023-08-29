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
} from "./elements";
import DerivationImage from "../../assets/derivation.png";
import Blender from "../../assets/waveCode.png";
import Blender4 from "../../assets/isolatedWave1.png";
import SideWave from "../../assets/sideWave.png";
import ShadeWave from "../../assets/WaveShading.png";
import { derivationCodeString } from "./schrodinger";
import FadeOverlay from "../../Components/FadeOverlay";
import Vimeo from "@u-wave/react-vimeo";

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
      <Vimeo
        video="858681236"
        autoplay
        playsInline
        loop
        muted
        controls={false}
        responsive
      />
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
        <Heading1>Development</Heading1>
        <Text1>
          I derived the equation and then automated the computation of the wave
          function's vertices over different time steps, plotting them in two
          dimensions.
        </Text1>
        <Vimeo
          video="858680382"
          autoplay
          playsInline
          loop
          muted
          controls={false}
          responsive
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
        <Text2>(004)</Text2>
        <Heading1>Animation</Heading1>
        <Text1>
          Each time step corresponds to one frame. I rendered the .mp4 files at
          24 frames per second (fps). Given that each time step represents 0.1
          seconds, the final animation plays at 2.4x the real speed. Moreover, I
          assigned the mesh volume and material texture, and added lighting to
          the environment.
        </Text1>

        <ProjectImage src={ShadeWave}></ProjectImage>
        <Text2>(005)</Text2>
        <Heading1>Final Product</Heading1>
      </CaseContainer>
      <CaseContainer>
        <Text3>angled</Text3>
      </CaseContainer>

      <Vimeo
        video="858681236"
        autoplay
        playsInline
        loop
        muted
        controls={false}
        responsive
      />

      <CaseContainer>
        <Text3>y axis</Text3>
      </CaseContainer>
      <Vimeo
        video="858857514"
        autoplay
        playsInline
        loop
        muted
        controls={false}
        responsive
      />
      <CaseContainer>
        <Text3>x axis</Text3>
      </CaseContainer>

      <Vimeo
        video="858726202"
        autoplay
        playsInline
        loop
        muted
        controls={false}
        responsive
      />
      <Spacer />
    </>
  );
};

export default WaveFunctionController;
