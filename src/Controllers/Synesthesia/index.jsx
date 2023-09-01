import React from "react";
import { Background, Heading1, Row, Spacer } from "./elements";
import {
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text1,
  Text2,
} from "./elements";
import Knot from "../../Components/Knot";

const Synesthesia = () => {
  return (
    <>
      <Background />
      <Spacer />
      <Knot />
      <ProjectDescriptionContainer>
        <Description>Synesthesia: Spotify Sound and Color</Description>
        <Description>Role: Designer, Developer</Description>
        <Description>[2022]</Description>
      </ProjectDescriptionContainer>
      <CaseContainer>
        <Row>
          <Text2>(001)</Text2>
          <Heading1>Introduction</Heading1>
        </Row>
        <Text1>
          With the growing digital landscape of music streaming, users are
          ever-curious about better understanding their preferences and what
          makes them unique. With this in mind, I created a platform to connect
          to Spotify users' accounts and access a visual representation of the
          audio features of their most recent top 50 tracks.
        </Text1>
        <Row>
          <Text2>(002)</Text2>
          <Heading1>Design</Heading1>
        </Row>
        <Text1>
          The primary users for this feature are Spotify listeners who possess a
          playful yet keen interest in dissecting the components of their
          preferred tracks. The challenge was to design and implement an
          intuitive and visually striking interface that would allow users to
          easily access and interpret the following audio features of their top
          tracks: accousticness, danceability, energy, instrumentalness,
          liveness, speechiness and happiness.
        </Text1>
        <Row>
          <Text2>(003)</Text2>
          <Heading1>Development</Heading1>
        </Row>
        <Text1>
          In the development phase, I architected the website using Javascript
          and React to ensure a seamless integration with the Spotify API.
          However, I hit a snag during the user testing phase, specifically
          concerning Spotify account authorization. As standard for any nascent
          Spotify-related app, mine was also relegated to a restrictive
          development mode, allowing only 25 unique beta testers. This
          bottleneck hampered comprehensive testing, limiting both the volume
          and richness of feedback. Recognizing the potential impact on the
          project's efficacy, I pursued an extended quota and a higher rate
          limit from Spotify.
        </Text1>
      </CaseContainer>
    </>
  );
};

export default Synesthesia;
