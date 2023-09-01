import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const ProjectContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "20% 0 10% 0",
}));

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ProjectImage = styled.img({
  position: "absolute",
  width: 800,
  height: 450,
  pointerEvents: "none",
  display: "none",
  opacity: 0,
  animation: `${fadeIn} 1s forwards`,
  animationFillMode: "forwards",
});

export const MobileImage = styled.img({
  "@media(max-width: 1100px)": {
    display: "block",
    width: "80%",
    borderRadius: 5,
    margin: "5% 10%",
  },
  display: "none",
});

export const ProjectText = styled.div((props) => ({
  fontSize: "3vw",
  fontWeight: 600,
  textAlign: "left",
  width: "35%",
  color: !props.hovered ? "rgba(255,255,255,0.5)" : "#fff",
}));

export const ProjectDescription = styled.div((props) => ({
  fontSize: "2vw",
  textAlign: "left",
  width: "39%",
  color: !props.hovered ? "rgba(255,255,255,0.5)" : "#fff",
}));

export const ProjectYear = styled.div((props) => ({
  fontSize: "2vw",
  textAlign: "right",
  width: "19%",
  color: !props.hovered ? "rgba(255,255,255,0.5)" : "#fff",
}));

export const ProjectDescriptionContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "80%",
  margin: "3% 10%",
});
