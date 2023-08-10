import styled from "@emotion/styled";

export const CenterContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "450px",
  "@media(max-width: 768px)": {
    transform: "translateX(-35%)",
  },
});
