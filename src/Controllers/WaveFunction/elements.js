import styled from "@emotion/styled";

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
  width: "100%", // To take the full width of the parent (ImageWrapper)
  borderRadius: 5,
  margin: "5% 0 5% 0",
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
  margin: "0 0 0 25%",
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
  fontSize: "1vw",
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
  fontSize: "1vw",
});

export const PlayerWrapper = styled.div({
  padding: "5% 0 5% 0",
  position: "relative",
});
