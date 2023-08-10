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
    marginBottom: "16px",
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
  paddingTop: "5%",
  paddingLeft: "10%",
  paddingRight: "15%",
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
  "@media(max-width: 1280px)": {
    width: "100%",
  },
});

export const GrowColumn = styled.div({
  width: "60%",
  "@media(max-width: 1280px)": {
    width: "100%",
  },
});

export const HeadShotImage = styled.img({
  height: "60vh",
  width: "60vh",
  textAlign: "right",
});

export const Divider = styled.div({
  height: 1,
  width: "100%",
  backgroundColor: theme.colors.violet[800],
  "@media(max-width: 768px)": {
    backgroundColor: "transparent",
  },
});

export const Spacer = styled.div({
  height: 88,
  width: "100%",
});

export const Background = styled.div({
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.colors.violet[800],
  zIndex: -999,
});

export const Circle = styled.div({
  position: "fixed",
  bottom: "-50vh",
  right: "-50vh",
  width: "120vw",
  height: "130vh",
  borderRadius: "50%",
  backgroundColor: theme.colors.violet[1000],
  zIndex: -999,
  filter: "blur(200px)",
});
