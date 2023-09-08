import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const ProjectContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // margin: "20% 0 10% 0",
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
  "@media(max-width: 900px)": {
    display: "block",
    width: "100%",
    margin: "10% 0 2% 0",
  },
  display: "none",
});

export const GalleryContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  position: "relative",
  flexWrap: "wrap",
  width: "40%",
  "@media(max-width: 900px)": {
    display: "none",
    marginRight: 0,
  },
});

export const ProjectText = styled.div({
  fontSize: "2vw",
  fontWeight: 600,
  textAlign: "left",
  color: "#fff",
});

export const ProjectDescription = styled.div({
  fontSize: "1.5vw",
  textAlign: "left",
  color: "#fff",
});

export const ProjectYear = styled.div({
  fontSize: "1.5vw",
  textAlign: "right",
  color: "#fff",
});

export const ProjectDescriptionContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  "@media(max-width: 900px)": {
    marginLeft: 0,
  },
});

export const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
});

export const ImageContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  justifyContent: "flex-start",
  "@media(max-width: 900px)": {
    width: "100%",
  },
});
