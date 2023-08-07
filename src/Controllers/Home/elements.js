import styled from "@emotion/styled";
import theme from "../../theme";

export const WindowContainer = styled.div({
  height: "100%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  paddingLeft: 36,
});

export const Name = styled.text({
  fontWeight: 1000,
  fontSize: 140,
  paddingTop: 36,
  marginLeft: -5,
});

export const Description = styled.text({
  fontWeight: 400,
  fontSize: 36,
  width: "50%",
  paddingTop: 36,
  paddingLeft: 36,
});

export const Circle = styled.div({
  position: "fixed",
  bottom: "-20vh",
  right: "-20vh",
  width: "90vh",
  height: "90vh",
  borderRadius: "50%",
  backgroundColor: theme.colors.violet[200],
  zIndex: -999,
});

export const Grid = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -9999999,
  backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
    `,
  backgroundSize: "20px 20px",
});