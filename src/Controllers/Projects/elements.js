import styled from "@emotion/styled";

export const Background = styled.div({
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100vw",
  height: "100vh",
  // backgroundColor: theme.colors.violet[800],
  backgroundColor: "#191919",
  zIndex: -999,
});

export const ProjectsContainer = styled.div({
  margin: "10% 0 0 0",
});

export const ProjectImage = styled.img({
  width: "80vw",
  borderRadius: 20,
  filter: "sepia(2) hue-rotate(240deg) saturate(2)",
  "&:hover": {
    filter: "none",
  },
});

export const ProjectDescriptionContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "80%",
  marginLeft: "5%",
});

export const Heading = styled.div({
  fontWeight: 600,
  fontSize: "8vw",
  color: "#fff",
  textAlign: "left",
  margin: "5% 10% -5% 10%",
});

export const Divider = styled.div({
  height: 1,
  width: "80%",
  backgroundColor: "rgba(255,255,255,0.3)",
  margin: "0 10%",
});
