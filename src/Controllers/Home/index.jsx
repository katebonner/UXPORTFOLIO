import React from "react";
import {
  WindowContainer,
  Name,
  Role,
  Description,
  JustifyRight,
} from "./elements";
import ComplexPlaneAnimation from "../../Components/ComplexPlaneAnimation";

const HomeController = () => {
  return (
    <WindowContainer>
      <Name>KATE BONNER</Name>
      <Role>UX/UI ENGINEER</Role>
      <Description>
        Intersecting the real with the imaginary, I solve complex design
        problems with simple engineering solutions.
      </Description>
      <JustifyRight>
        <ComplexPlaneAnimation />
      </JustifyRight>
    </WindowContainer>
  );
};

export default HomeController;
