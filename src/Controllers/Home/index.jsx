import React from "react";
import { WindowContainer, Name, Description, Circle, Grid } from "./elements";
import ComplexPlaneAnimation from "../../Components/ComplexPlaneAnimation";
import { HeadingTop, DescriptionLeft } from "./copy";
import Blob from "../../Components/Blob";
import Identity from "../../Components/Identity";

const HomeController = () => {
  return (
    <>
      <Circle />
      <Grid />
      <Blob />
      <div className="web">
        <WindowContainer>
          <Name>{HeadingTop}</Name>
          <Identity />
          <Description>{DescriptionLeft}</Description>
        </WindowContainer>
        <ComplexPlaneAnimation />
      </div>
    </>
  );
};

export default HomeController;
