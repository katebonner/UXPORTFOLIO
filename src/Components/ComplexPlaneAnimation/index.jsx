import React from "react";
import { useSpring, animated, easings } from "@react-spring/web";
import { CenterContainer } from "./elements";

const POINT = {
  RADIUS: 20,
  get BORDER_RADIUS() {
    return this.RADIUS / 2;
  },
};

const ARROW = {
  INITIAL_WIDTH: 0,
  FINAL_WIDTH: 300,
  HEIGHT: 1,
};

const color = "#fff";

const ComplexPlaneAnimation = () => {
  const point = useSpring({
    from: {
      width: POINT.RADIUS,
      height: POINT.RADIUS,
      borderRadius: POINT.BORDER_RADIUS,
    },
    to: [
      {
        width: POINT.RADIUS * 2,
        height: POINT.RADIUS * 2,
        borderRadius: POINT.BORDER_RADIUS * 2,
      },
      {
        width: POINT.RADIUS / 2,
        height: POINT.RADIUS / 2,
        borderRadius: POINT.BORDER_RADIUS / 2,
      },
    ],
    config: {
      duration: 300,
      easing: easings.easeInOutBounce,
    },
    delay: 500,
  });

  const pointTranslate = useSpring({
    from: { marginLeft: 0, marginBottom: 0 },
    to: [{ marginLeft: 200, marginBottom: 200 }],
    config: {
      duration: 300,
      easing: easings.easeInOutBounce,
    },
    delay: 1500,
  });

  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const arrowHeads = (rotation) => {
    set({
      xy: [
        Math.cos((rotation * Math.PI) / 180) * 150,
        Math.sin((rotation * Math.PI) / 180) * 150,
      ],
    });
  };

  const arrow = useSpring({
    from: { width: ARROW.INITIAL_WIDTH },
    to: { width: ARROW.FINAL_WIDTH },
    config: {
      duration: 400,
      easing: easings.linear,
    },
    delay: 1000,
    onStart: () => arrowHeads(90),
  });

  const boxExpand = useSpring({
    from: { height: 0, width: 0, marginLeft: 0, marginBottom: 0 },
    to: [{ height: 100, width: 100, marginLeft: 100, marginBottom: 100 }],
    config: {
      duration: 300,
      easing: easings.easeInOutBounce,
    },
    delay: 1500,
  });

  const axisValues = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 500,
    },
    delay: 1800,
  });

  return (
    <CenterContainer>
      <animated.div
        style={{
          background: color,
          height: ARROW.HEIGHT,
          position: "absolute",
          ...arrow,
        }}
      />

      <animated.div
        style={{
          background: color,
          height: ARROW.HEIGHT,
          transform: "rotate(90deg)",
          position: "absolute",
          ...arrow,
        }}
      />
      <animated.div
        style={{
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: `8px solid ${color}`,
          position: "absolute",
          transform: xy.to((x, y) => `translate(${x}px, ${y}px)`),
        }}
      />
      <animated.div
        style={{
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: `8px solid ${color}`,
          position: "absolute",
          transform: xy.to((x, y) => `rotate(90deg) translate(${x}px, ${y}px)`),
        }}
      />
      <animated.div
        style={{
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: `8px solid ${color}`,
          position: "absolute",
          transform: xy.to(
            (x, y) => `rotate(180deg) translate(${x}px, ${y}px)`
          ),
        }}
      />
      <animated.div
        style={{
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: `8px solid ${color}`,
          position: "absolute",
          transform: xy.to(
            (x, y) => `rotate(270deg) translate(${x}px, ${y}px)`
          ),
        }}
      />

      <animated.div
        style={{
          borderWidth: 0.5,
          borderStyle: "dashed",
          marginLeft: 100,
          marginBottom: 100,
          borderColor: color,
          position: "absolute",
          ...boxExpand,
        }}
      />
      <animated.div
        style={{
          color: color,
          fontFamily: "REM, sans-serif",
          fontSize: 20,
          fontWeight: 1000,
          letterSpacing: 2,
          position: "absolute",
          marginLeft: 200,
          marginTop: 30,
          ...axisValues,
        }}
      >
        KA
      </animated.div>
      <animated.div
        style={{
          color: color,
          fontFamily: "REM, sans-serif",
          fontSize: 20,
          fontWeight: 1000,
          letterSpacing: 2,
          position: "absolute",
          marginBottom: 200,
          marginRight: 30,
          ...axisValues,
        }}
      >
        E
      </animated.div>
      <animated.div
        style={{
          color: color,
          fontFamily: "REM, sans-serif",
          fontSize: 20,
          fontWeight: 1000,
          letterSpacing: 2,
          position: "absolute",
          marginBottom: 250,
          marginLeft: 350,
          ...axisValues,
        }}
      >
        Z = KA+iE
      </animated.div>
      <animated.div
        style={{
          color: color,
          fontFamily: "REM, sans-serif",
          fontSize: 20,
          fontWeight: 1000,
          letterSpacing: 2,
          position: "absolute",
          marginBottom: 350,

          ...axisValues,
        }}
      >
        Im
      </animated.div>
      <animated.div
        style={{
          color: color,
          fontFamily: "REM, sans-serif",
          fontSize: 20,
          fontWeight: 1000,
          letterSpacing: 2,
          position: "absolute",
          marginLeft: 350,
          ...axisValues,
        }}
      >
        Re
      </animated.div>
      <animated.div
        style={{
          background: color,
          position: "absolute",
          ...point,
          ...pointTranslate,
        }}
      ></animated.div>
    </CenterContainer>
  );
};

export default ComplexPlaneAnimation;
