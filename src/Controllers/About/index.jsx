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
  Background,
} from "./elements";
import {
  Heading1,
  SecondaryText6,
  Text3,
  Text4,
  Text5,
  Text6,
} from "../../theme";
import FooterComponent from "../../Components/Footer";
import FadeOverlay from "../../Components/FadeOverlay";
import CV from "../../assets/Kate_Bonner_CV_2023.png";

const AboutController = () => {
  return (
    <WindowContainer>
      <Background />
      <FadeOverlay />
      {/* <Fractal /> */}
      <Row>
        <ShrinkColumn>
          <Text6>(001)</Text6>
        </ShrinkColumn>
        <GrowColumn>
          <Text3>
            As an engineer and a designer, I see beauty in the interplay between
            form and function, and my passion lies in creating digital solutions
            where every pixel and line of code contributes to a product of
            fractal quality: a product where every detail echoes the harmony and
            thoughtful design of the whole.
          </Text3>
        </GrowColumn>
      </Row>
      <Spacer />
      <Row>
        <Heading1>BACKGROUND</Heading1>
      </Row>

      <Row>
        <SplitShrinkColumn>
          <Text5>01.</Text5>
          <TextContainer>
            <Text4>Physics</Text4>
          </TextContainer>
        </SplitShrinkColumn>
        <SplitGrowColumn>
          <SecondaryText6>
            My bachelor's in physics encompassed the mathematical disciplines of
            multivariable calculus, linear algebra, and differential equations.
            I leveraged programming languages like C++ and Python to analyze
            complex data sets and perform intricate simulations.
          </SecondaryText6>
        </SplitGrowColumn>
      </Row>
      <Divider />
      <Row>
        <SplitShrinkColumn>
          <Text5>02.</Text5>
          <TextContainer>
            <Text4>Design</Text4>
          </TextContainer>
        </SplitShrinkColumn>
        <SplitGrowColumn>
          <SecondaryText6>
            As Creative Director of The Corp, the world's largest student-run
            corporation, I refined my graphic and motion design skills, working
            with Adobe Illustrator, Adobe After Effects, and Cinema4D.
          </SecondaryText6>
        </SplitGrowColumn>
      </Row>
      <Divider />
      <Row>
        <SplitShrinkColumn>
          <Text5>03.</Text5>
          <TextContainer>
            <Text4>Creative Technology</Text4>
          </TextContainer>
        </SplitShrinkColumn>
        <SplitGrowColumn>
          <SecondaryText6>
            My master's degree in Trasdisciplinary New Media focused on the
            intersection of design principles and emerging technologies. I
            acquired skills in 3D Modeling, Animation, Augmented Reality (AR)
            and Virtual Reality (VR).
          </SecondaryText6>
        </SplitGrowColumn>
      </Row>
      <Divider />
      <Row>
        <SplitShrinkColumn>
          <Text5>04.</Text5>
          <TextContainer>
            <Text4>Full-Stack Web Development</Text4>
          </TextContainer>
        </SplitShrinkColumn>
        <SplitGrowColumn>
          <SecondaryText6>
            My Full Stack Web Development bootcamp focused on frontend and
            backend web technologies: from crafting engaging user interfaces
            with HTML, CSS, and JavaScript to managing servers and databases
            with Node.js, Express.js, SQL, noSQL and MongoDB.
          </SecondaryText6>
        </SplitGrowColumn>
      </Row>
      <Divider />
      <Row>
        <SplitShrinkColumn>
          <Text5>05.</Text5>
          <TextContainer>
            <Text4>Front-End Mobile Development</Text4>
          </TextContainer>
        </SplitShrinkColumn>
        <SplitGrowColumn>
          <SecondaryText6>
            As a Front-end Mobile App Developer at a fast-paced, seed-stage
            fintech startup, I liaised between engineering and design teams,
            ensuring the viability and implementation of design systems and UI
            animations, working in TypeScript and React Native.
          </SecondaryText6>
        </SplitGrowColumn>
      </Row>
      <Spacer />
      <FooterComponent
        linkedInURL="https://www.linkedin.com/in/kate-bonner/"
        emailAddress="katebonner277@gmail.com"
        githubURL="https://github.com/katebonner"
        CV={CV}
      />
    </WindowContainer>
  );
};

export default AboutController;
