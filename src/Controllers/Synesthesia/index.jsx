import React from "react";
import { Background, ClickText, Heading1, Row, Spacer } from "./elements";
import {
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text1,
  Text2,
  SectionContainer,
  Section,
  Result,
  SectionText,
  RowColum,
} from "./elements";
import ProgressBar from "../../Components/Bar";
import Knot from "../../Components/Knot";
import SpotifyVisualiser from "../../Components/SpotifyVisualizer";

const Synesthesia = () => {
  const USER_DATA = {
    valence: 60,
    danceability: 55,
    energy: 75,
    liveness: 90,
    loudness: 85,
    instrumentalness: 95,
  };
  const USER_DATA2 = {
    valence: 25,
    danceability: 45,
    energy: 35,
    liveness: 90,
    loudness: 90,
    instrumentalness: 100,
  };

  const handleClick = () => {
    let newWindow = window.open(
      "https://katebonner.github.io/level/#",
      "_blank"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <Background />
      <Spacer />
      <Knot />
      <ClickText>TAP THE SPIRAL TO VISIT THE WEBSITE</ClickText>
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
          tracks: happiness, danceability, energy, loudness, liveness, and
          instrumentalness.
        </Text1>
        <Text1>
          I decided to create a 3D roatating spiral with attributes assigned by
          a users spotify data.
        </Text1>
        <div
          style={{
            margin: "-17% 0",
          }}
        >
          <SpotifyVisualiser data={USER_DATA} />
        </div>
        <div style={{ width: "100%" }}>
          <RowColum>
            <SectionContainer>
              <Section>😊 HAPPINESS</Section>
              <Result>{USER_DATA.valence}%</Result>
              <ProgressBar progress={USER_DATA.valence} />
              <SectionText>
                happiness gives the sprial its color. the more positive the
                user's top spotify track, the more yellow. the more negative the
                tracks, the more pink.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <Section>🕺🏾 DANCEABILITY</Section>
              <Result>{USER_DATA.danceability}%</Result>
              <ProgressBar progress={USER_DATA.danceability} />
              <SectionText>
                danceability gives the spiral its thickness. the dancibility of
                the user's tracks is determined by tempo, rhythm stability, beat
                strength, and overall regularity.
              </SectionText>
            </SectionContainer>
          </RowColum>
          <RowColum>
            <SectionContainer>
              <Section>⚡ ENERGY</Section>
              <Result>{USER_DATA.energy}%</Result>
              <ProgressBar progress={USER_DATA.energy} />
              <SectionText>
                energy gives the spiral its rotation speed. energy represents a
                perceptual measure of intensity and activity.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <Section>🔊 LOUDNESS</Section>
              <Result>{USER_DATA.loudness}%</Result>
              <ProgressBar progress={USER_DATA.loudness} />
              <SectionText>
                loudness gives the spiral its size. loudness is the quality of a
                sound that is the primary psychological correlate of strength
                (amplitude).
              </SectionText>
            </SectionContainer>
          </RowColum>
          <RowColum>
            <SectionContainer>
              <Section>🎙️LIVENESS</Section>
              <Result>{USER_DATA.liveness}%</Result>
              <ProgressBar progress={USER_DATA.liveness} />
              <SectionText>
                liveness gives the spiral its degree of reduced rotation speed
                (how much it slows down) on hover. liveness detects the presence
                of an audience in the user's top tracks (that the recording was
                performed live).
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <Section>🎹 INSTRUMENTALNESS</Section>
              <Result>{USER_DATA.instrumentalness}%</Result>
              <ProgressBar progress={USER_DATA.instrumentalness} />
              <SectionText>
                instrumentalness gives the spiral its shine. instrumentalness
                predicts whether the tracks contains no vocals. "ooh" and "ahh"
                sounds are treated as instrumental in this context. rap or
                spoken word tracks are vocal.
              </SectionText>
            </SectionContainer>
          </RowColum>
        </div>
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
        <Row>
          <Text2>(004)</Text2>
          <Heading1>The Final Product</Heading1>
        </Row>
        <Text1>Tap the spiral below to visit the website live.</Text1>
        <div onClick={handleClick}>
          <SpotifyVisualiser data={USER_DATA2} />
        </div>
      </CaseContainer>
    </>
  );
};

export default Synesthesia;
