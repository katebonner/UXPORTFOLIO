import React from "react";
import {
  WindowContainer,
  ShrinkColumn,
  GrowColumn,
  Row,
  SplitShrinkColumn,
  SplitGrowColumn,
  Divider,
  Spacer,
  TextContainer,
} from "./elements";
import {
  Heading1,
  SecondaryText6,
  Text3,
  Text4,
  Text5,
  Text6,
} from "../../theme";
import Fractal from "../../Components/Fractal";

const AboutController = () => {
  return (
    <WindowContainer>
      <Row>
        <ShrinkColumn>
          <Text6>(001)</Text6>
          <Fractal />
        </ShrinkColumn>
        <GrowColumn>
          <Text3>
            As a developer and designer, I see beauty in the dance between form
            and function, and my passion lies in creating digital solutions
            where every pixel, every line of code contributes to a product of
            fractal quality — a product where each detail, no matter how minute,
            echoes the cohesive harmony and thoughtful design of the whole.
          </Text3>
        </GrowColumn>
      </Row>
      <Spacer />
      <Row>
        <Heading1>BACKGROUND</Heading1>
      </Row>
      <Divider />
      <Row>
        <SplitShrinkColumn>
          <Text5>01.</Text5>
          <TextContainer>
            <Text4>Physics</Text4>
          </TextContainer>
        </SplitShrinkColumn>
        <SplitGrowColumn>
          <SecondaryText6>
            My bachelor's degree in physics provided me with an education that
            encompasses the mathematical disciplines of multivariable calculus,
            linear algebra, and differential equations — essential tools for
            describing physical phenomena. I've leveraged programming languages
            such as C++ and Python to analyze complex data sets and perform
            intricate simulations. My studies in advanced physical theories like
            quantum mechanics and space-time relativity have deepened my
            understanding of the fundamental principles governing the universe.
            However, most profoundly, my education has instilled in me the
            principle of scientific skepticism — no theory or idea is is held
            hostage to current views in Science.
          </SecondaryText6>
        </SplitGrowColumn>
      </Row>
      <Divider />
      <Row>
        <SplitShrinkColumn>
          <Text5>02.</Text5>
          <TextContainer>
            <Text4>Design and Technology</Text4>
          </TextContainer>
        </SplitShrinkColumn>
        <SplitGrowColumn>
          <SecondaryText6>
            My master's degree in design and technology provided me with an
            education at the nexus of design principles and emerging technology.
            I've acquired skills in 3D Modeling, Animation, Augmented Reality
            (AR) and Virtual Reality (VR).
          </SecondaryText6>
        </SplitGrowColumn>
      </Row>
      <Divider />
      <Row>
        <SplitShrinkColumn>
          <Text5>03.</Text5>
          <TextContainer>
            <Text4>Full Stack Web Development</Text4>
          </TextContainer>
        </SplitShrinkColumn>
        <SplitGrowColumn>
          <SecondaryText6>
            My Full Stack Web Development bootcamp provided me with an education
            in both frontend and backend web technologies, from crafting
            engaging user interfaces with HTML, CSS, and JavaScript to managing
            servers and databases with Node.js, Express.js, SQL, noSQL and
            MongoDB.
          </SecondaryText6>
        </SplitGrowColumn>
      </Row>
      <Divider />
      <Row>
        <SplitShrinkColumn>
          <Text5>04.</Text5>
          <TextContainer>
            <Text4>Front-End Mobile Development</Text4>
          </TextContainer>
        </SplitShrinkColumn>
        <SplitGrowColumn>
          <SecondaryText6>
            As a Front-end Mobile App Developer for a fast-paced, seed-stage
            fintech startup, I liaised between engineering and design teams,
            ensuring the viability and implementation of design systems. I acted
            as the engineering lead on various features, orchestrating scoping
            discussions, creating comprehensive implementation documents, and
            coordinating engineering resources and timelines. My leadership in
            developing a custom component library amplified code reusability,
            platform consistency, and overall team productivity. Moreover, I
            took charge of motion design and animation, designing and
            implementing visually compelling experiences that boosted user
            engagement. I worked in TypeScript and React Native.
          </SecondaryText6>
        </SplitGrowColumn>
      </Row>
      <Divider />
      <Spacer />
      <Row>
        <ShrinkColumn>
          <Text6>(003)</Text6>
        </ShrinkColumn>
        <GrowColumn>
          <Text4>
            I thrive in the details and wholeness of a product. While I enjoy
            creating animations using react-native libraries, working with SVGs,
            and building and maintaining design systems and component libraries,
            I equally excel as the project lead for the development of new
            features.
          </Text4>
        </GrowColumn>
      </Row>
      <Spacer />
    </WindowContainer>
  );
};

export default AboutController;
