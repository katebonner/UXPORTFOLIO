import styled from "@emotion/styled";
import theme from "../../theme";

export const Background = styled.div({
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.colors.violet[800],
  zIndex: -999,
});
