import styled from "@emotion/styled";

export const Background = styled.div({
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#57b660",
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

export const ProjectImage = styled.img({
  display: "block",
  width: "100%", // To take the full width of the parent (ImageWrapper)
  borderRadius: 20,
});

export const ProjectDescriptionContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginLeft: "5%",
  marginRight: "5%",
  marginTop: "-5%",
  marginBottom: "5%",
  borderTop: "1px solid #2a6444",
  paddingTop: "1%",
  zIndex: 5,
});

export const Overlay = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "100%",
  background: "rgba(42, 100, 68, 0.7)", // semi-transparent black
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
  color: "#2a6444",
  textAlign: "left",
});

export const CaseContainer = styled.div({
  margin: "0 5% 0 5%",
});

export const Heading1 = styled.div({
  fontSize: "5vw",
  color: "#2a6444",
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
  color: "#2a6444",
  textAlign: "left",
  margin: "2% 0 5% 25%",
});
export const Text2 = styled.div({
  fontSize: "1.5vw",
  lineHeight: "3vw",
  color: "#2a6444",
  textAlign: "left",
  margin: "2% 0 0 0",
});
