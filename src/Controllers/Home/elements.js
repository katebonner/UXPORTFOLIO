import styled from "@emotion/styled";

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
  marginBottom: "-36px",
});

export const Role = styled.text({
  fontWeight: 1000,
  fontSize: 140,
});

export const Description = styled.text({
  fontWeight: 400,
  fontSize: 36,
  width: "50%",
  paddingTop: 36,
  paddingLeft: 36,
});

export const JustifyRight = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingRight: "30%",
});
