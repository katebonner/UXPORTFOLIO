import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Background = styled.div({
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#ab577e",
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

export const RowColum = styled.div({
  display: "flex",
  flexDirection: "row",
  "@media (max-width: 900px)": {
    flexDirection: "column",
  },
});

export const Colors = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  opacity: 1,

  margin: "5%",
  "@media (max-width: 900px)": {
    flexDirection: "column",
  },
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

export const SyneBold = styled.div({
  fontSize: "4vw",
  fontFamily: "Syne",
  fontWeight: 700,
  textAlign: "left",
  margin: "0 0 0 25%",
  color: "#fff",
});

export const SyneExtraBold = styled.div({
  fontFamily: "Syne",
  fontSize: "4vw",
  fontWeight: 800,
  textAlign: "left",
  margin: "0 0 0 25%",
  color: "#fff",
});

export const SyneRegular = styled.div({
  fontFamily: "Syne",
  fontSize: "4vw",
  fontWeight: 400,
  textAlign: "left",
  margin: "0 0 0 25%",
  color: "#fff",
});

export const SyneSemiBold = styled.div({
  fontFamily: "Syne",
  fontWeight: 600,
  fontSize: "4vw",
  textAlign: "left",
  margin: "0 0 0 25%",
  color: "#fff",
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

export const ClickText = styled.div({
  fontSize: "2vw",
  fontWeight: 600,
  position: "absolute",
  color: "#fff",
  opacity: 0.2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -200%)",
  "@media (max-width: 900px)": {
    fontSize: "4vw",
    textAlign: "center",
  },
});

export const SectionContainer = styled.div({
  backgroundColor: "rgb(255,255,255,0.2)",
  padding: "2% 5%",
  margin: "2% 2%",
  borderRadius: 10,
  flex: 1,
  "@media (max-width: 900px)": {
    padding: "2% 5% 5% 5%",
  },
});

export const Section = styled.div({
  fontSize: "2.2vw",
  fontWeight: 600,
  textAlign: "center",
  margin: "4% 0 2% 0",
  color: "#fff",
  "@media (max-width: 900px)": {
    fontSize: "4vw",
    textAlign: "left",
  },
  "@media (max-width: 700px)": {
    fontSize: "5vw",
  },
});

export const SectionText = styled.div({
  fontSize: "1.5vw",
  color: "#fff",
  fontWeight: 400,
  textAlign: "center",
  margin: "5% 0 0 0",
  "@media (max-width: 900px)": {
    fontSize: "2vw",
    textAlign: "left",
  },
  "@media (max-width: 700px)": {
    fontSize: "2.5vw",
  },
});

export const Result = styled.div({
  fontSize: "8vw",
  fontWeight: 600,
  color: "#fff",
  margin: "0 0 5% 0",
  textAlign: "center",
  "@media (max-width: 900px)": {
    fontSize: "10vw",
    textAlign: "left",
  },
  "@media (max-width: 700px)": {
    fontSize: "10vw",
  },
});

export const BlueBlock = styled.div({
  height: 100,
  width: 100,
  borderRadius: 100,
  backgroundColor: "blue",
  border: "1px solid #fff",
  margin: "2%",
});

export const RedBlock = styled.div({
  height: 100,
  width: 100,
  borderRadius: 100,
  backgroundColor: "red",
  border: "1px solid #fff",
  margin: "2%",
});

export const YellowBlock = styled.div({
  height: 100,
  width: 100,
  borderRadius: 100,
  backgroundColor: "yellow",
  border: "1px solid #fff",
  margin: "2%",
});

export const PinkBlock = styled.div({
  height: 100,
  width: 100,
  borderRadius: 100,
  backgroundColor: "#ab577e",
  border: "1px solid #fff",
  margin: "2%",
});

export const Icon = styled.div({
  fontSize: "4vw",
  margin: "2%",
});
