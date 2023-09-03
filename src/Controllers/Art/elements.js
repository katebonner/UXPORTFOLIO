import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Background = styled.div({
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#191919",
  zIndex: -999,
});

export const Column = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 0 20% 0",
});

export const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const ProjectImage = styled.img((props) => ({
  width: props.width || "60vw",
  margin: "10% 2% 0 2%",
  // filter: "grayscale(100%)",
  "@media(max-width: 900px)": {
    width: "80%",
  },
}));

export const ProjectLoadingImage = styled.img((props) => ({
  width: props.width || "60vw",
  margin: "10% 0 0 0",
}));

const loaderAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const ProjectLoadingImageWrapper = styled.div((props) => ({
  position: "relative",
  width: props.width || "60vw",
  margin: "5% 0 0 0",
  img: {
    filter: "brightness(25%)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50px",
    height: "50px",
    marginTop: "-25px",
    marginLeft: "-25px",
    borderRadius: "50%",
    border: "10px solid rgba(255,255,255,0.7)",
    borderTopColor: "transparent",
    animation: `${loaderAnimation} 1s linear infinite`,
    display: "block",
  },
}));

export const SectionHeader = styled.div({
  fontSize: "4vw",
  fontWeight: 400,
  color: "#fff",
  margin: "10% 0 0 0",
});

export const DescriptionContainer = styled.div((props) => ({
  width: props.width || "60vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: ".5% 0 0 0",
}));

export const Description = styled.div({
  textAlign: "left",
  fontSize: "1.5vw",
  color: "#fff",
  "@media(max-width: 900px)": {
    width: "80%",
  },
});

export const Year = styled.div({
  fontSize: "1.5vw",
  color: "#fff",
  textAlign: "left",
});
