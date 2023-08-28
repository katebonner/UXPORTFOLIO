import React from "react";
import {
  PurpleCircle,
  Grid,
  Background,
  YellowCircle,
  SourceCode,
  Title,
} from "./elements";
import Blob from "../../Components/Blob";
import FadeOverlay from "../../Components/FadeOverlay";

const HomeController = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
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
