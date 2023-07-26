import styled from "@emotion/styled";
import theme from "../../theme";

export const WindowContainer = styled.div({
  height: "100%",
  textAlign: "left",
  paddingTop: 60,
  paddingLeft: 72,
  paddingRight: 144,
});

export const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  paddingBottom: 72,
  paddingTop: 72,
  justifyContent: "space-between",
  alignContent: "flex-start",
});

export const ShrinkColumn = styled.div({
  width: "40%",
});

export const SplitShrinkColumn = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "40%",
});

export const TextContainer = styled.div({
  textAlign: "right",
  width: "50%",
  height: "100%",
});

export const GrowColumn = styled.div({
  width: "60%",
});

export const SplitGrowColumn = styled.div({
  width: "50%",
});

export const HeadShotImage = styled.img({
  height: "200px",
  width: "200px",
});

export const Divider = styled.div({
  height: 1,
  width: "100%",
  backgroundColor: theme.colors.gris[200],
});

export const Spacer = styled.div({
  height: 300,
  width: "100%",
});
