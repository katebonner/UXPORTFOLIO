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

export const ProjectText = styled.text({
  fontSize: "3vw",
  fontWeight: 600,
  color: "#fff",
  textAlign: "left",
  width: "39%",
});

export const ProjectDescription = styled.text({
  fontSize: "2vw",
  color: "#fff",
  textAlign: "left",
  width: "39%",
});

export const ProjectYear = styled.text({
  fontSize: "2vw",
  color: "#fff",
  textAlign: "right",
  width: "19%",
});

export const ProjectDescriptionContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "80%",
  margin: "5% 10%",
  paddingBottom: "3%",
  borderBottom: "1px solid rgba(255,255,255,0.3)",
});
