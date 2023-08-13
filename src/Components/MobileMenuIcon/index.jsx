import React from "react";
import { useSpring, animated } from "@react-spring/web";
import theme from "../../theme";

const MobileMenuIcon = ({ toggled }) => {
  const { rotation, translationX, translationY } = useSpring({
    rotation: toggled ? 45 : 0,
    translationX: toggled ? 0.5 : 0,
  });

  return (
    <div style={{ cursor: "pointer", width: "2rem" }}>
      <animated.div
        style={{
          transform: rotation.to((r) => `rotate(${r}deg)`),
        }}
      >
        <animated.div
          style={{
            transform: [translationX.to((x) => `translateX(${x}rem)`)],
            background: theme.colors.violet[200],
            height: "0.1rem",
            width: "2rem",
            backgroundColor: theme.colors.violet[200],
            marginBottom: "-0.1rem",
          }}
        ></animated.div>
      </animated.div>
      <animated.div
        style={{
          transform: rotation.to((r) => `rotate(${-r}deg)`),
        }}
      >
        <animated.div
          style={{
            transform: [translationX.to((x) => `translateX(${x}rem)`)],
            background: theme.colors.violet[200],
            height: "0.1rem",
            width: "2rem",
            backgroundColor: theme.colors.violet[200],
          }}
        ></animated.div>
      </animated.div>
    </div>
  );
};

export default MobileMenuIcon;
