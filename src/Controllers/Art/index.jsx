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
} from "./elements";
import Capi from "../../assets/capi.png";
import Sara from "../../assets/sara.jpeg";
import Clara from "../../assets/clara.png";
import Gabi from "../../assets/gabi.png";
import Danny from "../../assets/danny.png";
import Kate from "../../assets/kate.png";
import Kyle from "../../assets/kyle.png";
import FooterComponent from "../../Components/Footer";

const Art = () => {
  return (
    <>
      <Background />
      <Column>
        <ProjectImage src={Clara} width="50vw" />
        <DescriptionContainer width="50vw">
          <Description>clara & cosima | oil paint</Description>
          <Year>[2021]</Year>
        </DescriptionContainer>
        <ProjectImage src={Sara} width="70vw" />
        <DescriptionContainer width="70vw">
          <Description>sara | oil paint</Description>
          <Year>[2019]</Year>
        </DescriptionContainer>
        <ProjectImage src={Kate} width="40vw" />
        <DescriptionContainer width="40vw">
          <Description>self portrait | charcoal</Description>
          <Year>[2021]</Year>
        </DescriptionContainer>
        <ProjectImage src={Capi} width="50vw" />
        <DescriptionContainer width="50vw">
          <Description>capucine | oil paint</Description>
          <Year>[2023]</Year>
        </DescriptionContainer>
        <ProjectImage src={Kyle} width="40vw" />
        <DescriptionContainer width="40vw">
          <Description>kyle | charcoal</Description>
          <Year>[2022]</Year>
        </DescriptionContainer>
        <SectionHeader>WORKS IN PROGRESS</SectionHeader>
        <ProjectLoadingImageWrapper>
          <ProjectImage src={Danny} width="40vw" />
        </ProjectLoadingImageWrapper>
        <DescriptionContainer width="40vw">
          <Description>danny | charcoal</Description>
          <Year>[2023]</Year>
        </DescriptionContainer>
        <ProjectLoadingImageWrapper>
          <ProjectImage src={Gabi} width="40vw" />
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
      />
    </>
  );
};

export default Art;
