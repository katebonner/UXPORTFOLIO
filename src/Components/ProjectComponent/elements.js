import styled from "@emotion/styled";

export const ProjectContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "5% 0 10% 0",
});

export const ProjectImage = styled.img({
  width: "80vw",
  borderRadius: 5,
  // filter: "sepia(1) hue-rotate(240deg) saturate(1)",
  "&:hover": {
    filter: "none",
  },
});

export const ProjectText = styled.text({
  fontSize: "2vw",
  fontWeight: 600,
  color: "#fff",
  width: "30%",
  textAlign: "left",
});

export const ProjectDescription = styled.text({
  fontSize: "1.6vw",
  color: "#fff",
  width: "30%",
  textAlign: "left",
  marginLeft: "-20%",
});

export const ProjectDescriptionContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "80%",
  marginLeft: "5%",
});
