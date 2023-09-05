import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ReactPlayer from "react-player";

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
  display: "flex",
  flexDirection: "column",
  alignContent: "flex-start",
  justifyContent: "flex-start",
});

export const ImageWrapper = styled.div({
  position: "relative",
  padding: "0 15vw 0 15vw",
  width: "60vw",
  margin: "5%",
  cursor: "pointer", // To indicate it's clickable
  ":hover": {
    ".overlay": {
      opacity: 1,
    },
  },
});

export const Derivation = styled.img({
  width: "80vw",
});

export const ProjectImage = styled.img({
  display: "block",
  width: "75%", // To take the full width of the parent (ImageWrapper)
  filter: "brightness(90%)",
  margin: "0 0 0 25%",
});

export const ProjectDescriptionContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginLeft: "5%",
  marginRight: "5%",
  marginTop: 0,
  marginBottom: "5%",
  borderTop: "1px solid #fff",
  paddingTop: "1%",
  zIndex: 5,
});

export const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
});

export const Center = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export const Overlay = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background: "rgba(222, 73, 162, 0.9)", // semi-transparent black
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0, // initially hidden
  transition: "opacity 0.3s",
  color: "#fff", // Text color
  fontSize: 30,
  fontWeight: "bold",
  textAlign: "center",
});

export const Description = styled.div({
  fontSize: "1.5vw",
  color: "#fff",
  textAlign: "left",
  width: "25%",
});

export const CaseContainer = styled.div({
  padding: "0 5% 0 5%",
});

export const Heading1 = styled.div({
  fontSize: "5vw",
  color: "#fff",
  fontWeight: 600,
  textAlign: "left",
  margin: "0 0 0 20%",
});

export const Heading = styled.div({
  fontSize: "5vw",
  color: "#fff",
  fontWeight: 600,
  textAlign: "left",
  margin: "0 0 0 5%",
});
export const Heading2 = styled.text({
  fontSize: "4vw",
});

export const Text1 = styled.div({
  fontSize: "2vw",
  lineHeight: "3vw",
  color: "#fff",
  textAlign: "left",
  margin: "2% 0 5% 25%",
});
export const Text2 = styled.div({
  fontSize: "1.5vw",
  lineHeight: "3vw",
  color: "#fff",
  textAlign: "left",
  margin: "2% 0 0 0",
});

export const Text3 = styled.div({
  fontSize: "1.2vw",
  lineHeight: "3vw",
  color: "#fff",
  textAlign: "right",
  margin: "2% 0 0 0",
});

export const Code = styled.div({
  fontFamily: "monospace",
  color: "rgba(255,255,255,.4)",
  textAlign: "left",
  margin: "2% 0 10% 25%",
  fontSize: "1.5vw",
});

export const PlayerWrapper = styled.div({
  padding: "56.25% 0 5% 0",

  position: "relative",
});

export const Spacer = styled.div({
  margin: "10% 0 0 0",
});

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
  "&::after": {
    content: '""',
    position: "relative",
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

export const StyledPlayer = styled(ReactPlayer)({
  transform: "scale(1.8) translate(0%, -23%)",
  "@media(max-width: 768px)": {
    transform: "scale(2.5) translate(0%, -20%)",
  },
  "@media(max-width: 600px)": {
    transform: "scale(3) translate(0%, -15%)",
  },
});

export const StyledPlayer2 = styled(ReactPlayer)({
  transform: "scale(1.8)",
  margin: "20% 0",
  "@media(max-width: 1100px)": {
    transform: "scale(1.4)",
    margin: "15% 0",
  },
  "@media(max-width: 900px)": {
    transform: "scale(1)",
    margin: "10% 0",
  },
});
