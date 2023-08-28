import styled from "@emotion/styled";
import theme from "../../theme";

export const WindowContainer = styled.div({
  height: "100%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  paddingLeft: 28,
});

export const Name = styled.text({
  fontWeight: 1000,
  fontSize: 140,
  paddingTop: 36,
  marginLeft: -5,
  color: theme.colors.violet[200],
  "@media(max-width: 1280px)": {
    marginTop: 36,
    fontSize: 80,
  },
  "@media(max-width: 768px)": {
    marginTop: 24,
    fontSize: 48,
  },
});

export const Background = styled.div({
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#ff7e0b",
  zIndex: -999,
});

export const Description = styled.text({
  fontWeight: 400,
  fontSize: 36,
  width: "50%",
  paddingTop: 36,
  paddingLeft: 36,
  color: theme.colors.violet[200],
  "@media(max-width: 1280px)": {
    width: "80%",
    fontSize: 24,
  },
});

export const PurpleCircle = styled.div({
  position: "fixed",
  bottom: "-50vh",
  right: "-50vh",
  width: "100vw",
  height: "130vh",
  borderRadius: "50%",
  backgroundColor: theme.colors.violet[500],
  zIndex: -999,
  filter: "blur(200px)",
});

export const YellowCircle = styled.div({
  position: "fixed",
  top: "-75vh",
  left: "-75vh",
  width: "100vw",
  height: "130vh",
  borderRadius: "50%",
  backgroundColor: "#ffa619",
  zIndex: -999,
  filter: "blur(200px)",
});

export const Grid = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -9999999,
  backgroundColor: theme.black,
  backgroundImage: `
        linear-gradient(to right, #3a3144 1px, transparent 1px),
        linear-gradient(to bottom, #3a3144 1px, transparent 1px)
    `,
  backgroundSize: "20px 20px",
});

export const SourceCode = styled.div({
  position: "fixed",
  bottom: 0,
  right: 0,
  alignItems: "right",
});

export const Title = styled.div({
  position: "fixed",
  bottom: 0,
  left: 20,
  alignItems: "left",
  fontSize: "16vw",
  fontWeight: 600,
  "@media(max-width: 600px)": {
    bottom: 60,
    left: 30,
  },
});
