import styled from "@emotion/styled";
import theme from "../../theme";

export const SplitShrinkColumn = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "40%",
  "@media(max-width: 1280px)": {
    flexDirection: "column",
    width: "100%",
    marginBottom: "16px", // or any value you see fit
  },
});

export const SplitGrowColumn = styled.div({
  width: "50%",
  "@media(max-width: 1280px)": {
    width: "100%",
  },
});

export const TextContainer = styled.div({
  textAlign: "right",
  width: "50%",
  height: "100%",
  "@media(max-width: 1280px)": {
    textAlign: "left",
    width: "100%",
  },
});

export const WindowContainer = styled.div({
  height: "100%",
  textAlign: "left",
  paddingTop: 88,
  paddingLeft: 72,
  paddingRight: 144,
});

export const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  paddingBottom: 72,
  paddingTop: 72,
  justifyContent: "space-between",
  alignContent: "flex-start",
  "@media(max-width: 1280px)": {
    flexDirection: "column",
    paddingBottom: 36,
    paddingTop: 36,
  },
});

export const ShrinkColumn = styled.div({
  width: "40%",
});

export const GrowColumn = styled.div({
  width: "60%",
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
  height: 88,
  width: "100%",
});
