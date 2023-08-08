import styled from "@emotion/styled";
const theme = {
  colors: {
    violet: {
      200: "#ce98e7",
      1000: "#2e2834",
    },
    vert: {
      200: "#EBE760",
      400: "#B5AB65",
    },
    rose: {
      400: "#B56594",
      600: "#82225A",
    },
    gris: {
      50: "#F7F7F7",
      200: "#D6D6D6",
      600: "#666666",
    },
    orange: {
      400: "#ff7c24",
    },
  },
  get white() {
    return this.colors.gris[50];
  },
  get black() {
    return this.colors.violet[1000];
  },
  cta: {
    get primary() {
      return this.colors.violet[200];
    },
  },
};

export default theme;

export const Heading1 = styled.text({
  fontWeight: 1000,
  fontSize: 140,
});

export const Heading2 = styled.text({
  fontWeight: 1000,
  fontSize: 72,
});

export const Text3 = styled.text({
  fontWeight: 400,
  fontSize: 48,
});

export const Text4 = styled.text({
  fontWeight: 400,
  fontSize: 36,
});

export const Text5 = styled.text({
  fontWeight: 400,
  fontSize: 24,
});
export const Text6 = styled.text({
  fontWeight: 400,
  fontSize: 18,
});
export const SecondaryText6 = styled.text({
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "24px",
  color: theme.colors.gris[600],
});
