import React from "react";
import {
  WindowContainer,
  Name,
  Description,
  PurpleCircle,
  Grid,
  Background,
  YellowCircle,
  SourceCode,
  Title,
} from "./elements";
import ComplexPlaneAnimation from "../../Components/ComplexPlaneAnimation";
import { HeadingTop, DescriptionLeft } from "./copy";
import Blob from "../../Components/Blob";
import Identity from "../../Components/Identity";

const HomeController = () => {
  return (
    <>
      <Background />
      <PurpleCircle />
      <YellowCircle />
      <Grid />
      <Blob />
      <SourceCode>
        <a
          href="https://github.com/katebonner/UXPORTFOLIO"
          target="_blank"
          rel="noreferrer"
        >
          view &lt;source code/&gt; on GitHub
        </a>
      </SourceCode>
      <Title>KA+iE</Title>

      {/* <div className="web">
        <WindowContainer>
          <Name>{HeadingTop}</Name>
          <Identity />
          <Description>{DescriptionLeft}</Description>
        </WindowContainer>
        <ComplexPlaneAnimation />
      </div> */}
    </>
  );
};

export default HomeController;
