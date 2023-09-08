import React from "react";
import {
  Background,
  ClickText,
  Heading1,
  Row,
  Spacer,
  SyneBold,
  SyneExtraBold,
  SyneSemiBold,
  SyneRegular,
  BlueBlock,
  PinkBlock,
  YellowBlock,
  RedBlock,
  Colors,
  Text0,
  ScoreContainer,
  RowFixed,
  SectionContainer,
  SectionText,
  DescriptionTitle,
} from "./elements";
import {
  ProjectDescriptionContainer,
  CaseContainer,
  Text1,
  Text2,
  Section,
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
        <DescriptionTitle>
          Synesthesia: Spotify Sound and Color
        </DescriptionTitle>
        <DescriptionTitle>Role: Designer, Developer</DescriptionTitle>
        <DescriptionTitle>[2022]</DescriptionTitle>
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
        <Text0>Typography</Text0>
        <Text1>
          Drawing from spotify's typeface, I wanted to use a sans-serif font to
          excude a mature confidence. Simultanously, I wanted to add some degree
          of novetly and playfulness.
        </Text1>
        <SyneRegular>Syne Regular</SyneRegular>
        <SyneSemiBold>Syne Semi Bold</SyneSemiBold>
        <SyneBold>Syne Bold</SyneBold>
        <SyneExtraBold>Syne Extra Bold</SyneExtraBold>
        <Text0>Color</Text0>
        <Text1>
          Playing with the notion of synesthesia, I displayed a wide spectrum of
          color. To acheive this, I accentuated the dominant shade of Pink
          #ab577e with a Gaussian blur and 3D lighting in primary blue, red, and
          yellow.
        </Text1>
        <Colors>
          <PinkBlock />
          <BlueBlock />
          <RedBlock />
          <YellowBlock />
        </Colors>
        <Text0>Animation</Text0>
        <Text1>
          For the focal point of this website, I leveraged the three.js
          javascript library to create a 3D roatating spiral with attributes
          assigned by a user's spotify data. I also created a 3D particle system
          out of the user's top album covers.
        </Text1>
        <div style={{ margin: "0 0 0 0" }}>
          <SpotifyVisualiser data={USER_DATA} />
        </div>
        <div style={{ width: "100%" }}>
          <ScoreContainer>
            <RowFixed>
              <Section>HAPPINESS: {USER_DATA.valence}% </Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.valence} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>DANCEABILITY: {USER_DATA.danceability}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.danceability} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>ENERGY: {USER_DATA.energy}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.energy} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>LOUDNESS: {USER_DATA.loudness}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.loudness} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>LIVENESS: {USER_DATA.liveness}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.liveness} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>INSTRUMENTALNESS: {USER_DATA.instrumentalness}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.instrumentalness} />
              </div>
            </RowFixed>
          </ScoreContainer>
        </div>
        <div style={{ margin: "5% 0" }}>
          <Row>
            <SectionContainer>
              <RowFixed>
                <Section>HAPPINESS</Section>
              </RowFixed>
              <SectionText>
                happiness gives your sprial its color. the more positive your
                top spotify track, the more yellow. the more negative the
                tracks, the more pink.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <RowFixed>
                <Section>DANCEABILITY</Section>
              </RowFixed>

              <SectionText>
                danceability gives your spiral its thickness. the dancibility of
                your tracks is determined by tempo, rhythm stability, beat
                strength, and overall regularity.
              </SectionText>
            </SectionContainer>
          </Row>
          <Row>
            <SectionContainer>
              <RowFixed>
                <Section>ENERGY</Section>
              </RowFixed>

              <SectionText>
                energy gives your spiral its rotation speed. energy represents a
                perceptual measure of intensity and activity.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <RowFixed>
                <Section>LOUDNESS</Section>
              </RowFixed>
              <SectionText>
                loudness gives your spiral its size. loudness is the quality of
                a sound that is the primary psychological correlate of strength
                (amplitude).
              </SectionText>
            </SectionContainer>
          </Row>
          <Row>
            <SectionContainer>
              <RowFixed>
                <Section>LIVENESS</Section>
              </RowFixed>
              <SectionText>
                liveness gives your spiral its degree of reduced rotation speed
                (how much it slows down) on hover. liveness detects the presence
                of an audience in your top tracks (that the recording was
                performed live).
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <RowFixed>
                <Section>INSTRUMENTALNESS</Section>
              </RowFixed>
              <SectionText>
                instrumentalness gives your spiral its shine. instrumentalness
                predicts whether your tracks contains no vocals. "ooh" and "ahh"
                sounds are treated as instrumental in this context. rap or
                spoken word tracks are vocal.
              </SectionText>
            </SectionContainer>
          </Row>
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
