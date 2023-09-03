import React from "react";
import {
  Background,
  Column,
  ProjectImage,
  Description,
  DescriptionContainer,
  Year,
  SectionHeader,
  ProjectLoadingImageWrapper,
  ProjectLoadingImage,
} from "./elements";
import Capi from "../../assets/capi.png";
import Sara from "../../assets/sara.jpeg";
import Clara from "../../assets/claraa.png";
import Snake from "../../assets/snake.png";
import Cosima from "../../assets/cosima.png";
import Gabi from "../../assets/gabi.png";
import Danny from "../../assets/danny.png";
import Kate from "../../assets/kate.png";
import Kate2 from "../../assets/kate2.png";
import Kyle from "../../assets/kyle.png";
import Kyle2 from "../../assets/kyle2.png";

import FooterComponent from "../../Components/Footer";
import FadeOverlay from "../../Components/FadeOverlay";
import CV from "../../assets/Kate_Bonner_CV_2023.png";
import { Row } from "./elements";

const Art = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
      <Column>
        <Row>
          <ProjectImage src={Clara} width="30vw" />
          <ProjectImage src={Cosima} width="30vw" />
        </Row>
        <DescriptionContainer width="62vw">
          <Description>clara & cosima | oil paint</Description>
          <Year>[2021]</Year>
        </DescriptionContainer>
        <Row>
          <ProjectImage src={Kate} width="30vw" />
          <ProjectImage src={Kate2} width="30vw" />
        </Row>

        <DescriptionContainer width="62vw">
          <Description>self portrait | charcoal</Description>
          <Year>[2021]</Year>
        </DescriptionContainer>
        <ProjectImage
          src={Sara}
          width="62vw"
          style={{ filter: "saturate(120%)" }}
        />
        <DescriptionContainer width="62vw">
          <Description>sara | oil paint</Description>
          <Year>[2019]</Year>
        </DescriptionContainer>
        <ProjectImage src={Capi} width="62vw" />
        <DescriptionContainer width="62vw">
          <Description>capucine | oil paint</Description>
          <Year>[2023]</Year>
        </DescriptionContainer>
        <Row>
          <ProjectImage src={Kyle} width="30vw" />
          <ProjectImage src={Kyle2} width="30vw" />
        </Row>
        <DescriptionContainer width="62vw">
          <Description>kyle | charcoal</Description>
          <Year>[2022]</Year>
        </DescriptionContainer>
        <SectionHeader>[ works in progress... ]</SectionHeader>
        <ProjectLoadingImageWrapper>
          <ProjectLoadingImage src={Danny} width="40vw" />
        </ProjectLoadingImageWrapper>
        <DescriptionContainer width="40vw">
          <Description>danny | charcoal</Description>
          <Year>[2023]</Year>
        </DescriptionContainer>
        <ProjectLoadingImageWrapper>
          <ProjectLoadingImage src={Gabi} width="40vw" />
        </ProjectLoadingImageWrapper>
        <DescriptionContainer width="40vw">
          <Description>gabi | oil paint</Description>
          <Year>[2023]</Year>
        </DescriptionContainer>
      </Column>
      <FooterComponent
        linkedInURL="https://www.linkedin.com/in/kate-bonner/"
        emailAddress="katebonner277@gmail.com"
        githubURL="https://github.com/katebonner"
        CV={CV}
      />
    </>
  );
};

export default Art;
