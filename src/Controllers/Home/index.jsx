import React from "react";
import { WindowContainer, Name, Description, Circle, Grid } from "./elements";
import ComplexPlaneAnimation from "../../Components/ComplexPlaneAnimation";

import { useSpring, animated } from "@react-spring/web";
import { interpolate } from "flubber";
import { HeadingTop, DescriptionLeft } from "./copy";
import Blob from "../../Components/Blob";
import theme from "../../theme";

const HomeController = () => {
  const [toggled, setToggled] = React.useState(false);
  const pathsED = [
    "M0,0H74.59V10.33H11.37V53.74h59.26v10.34H11.37v47.54H77.34v10.34H0V0Z", // path1
    "M103.18,53.31c-.34-3.62-1.18-7.67-2.5-12.14-1.32-4.48-3.39-9.16-6.2-14.04-2.82-4.88-6.66-9.33-11.54-13.35-4.88-4.02-11-7.32-18.35-9.9C57.25,1.29,48.29,0,37.72,0H0V121.96H37.72c10.56,0,19.52-1.29,26.87-3.88,7.35-2.58,13.46-5.88,18.35-9.9,4.88-4.02,8.73-8.47,11.54-13.35,2.81-4.88,4.88-9.56,6.2-14.04,1.32-4.48,2.15-8.53,2.5-12.14,.34-3.62,.52-6.17,.52-7.67s-.17-4.05-.52-7.67Z", // path2
  ];
  const pathsNS = [
    "M0,0H14.64L88.89,106.8h.34V0h11.37V121.96h-14.64L11.71,15.16h-.34V121.96H0V0Z",
    "M10.85,102.49c2.98,5.17,6.86,9.02,11.63,11.54,4.76,2.53,10.19,3.79,16.28,3.79,3.79,0,7.35-.57,10.68-1.72,3.33-1.15,6.23-2.76,8.7-4.82,2.47-2.07,4.42-4.56,5.86-7.49,1.43-2.93,2.15-6.23,2.15-9.9,0-4.25-.89-7.75-2.67-10.51-1.78-2.76-4.16-5.02-7.15-6.8-2.99-1.78-6.35-3.3-10.08-4.56-3.73-1.26-7.58-2.52-11.54-3.79-3.96-1.26-7.81-2.7-11.54-4.31-3.73-1.61-7.09-3.7-10.08-6.29-2.99-2.58-5.37-5.83-7.15-9.73-1.78-3.9-2.67-8.73-2.67-14.47,0-5.4,1.06-10.19,3.19-14.38,2.12-4.19,5-7.69,8.61-10.51,3.62-2.81,7.78-4.94,12.49-6.37,4.71-1.43,9.65-2.15,14.81-2.15,6.66,0,12.83,1.18,18.52,3.53,5.68,2.35,10.59,6.29,14.73,11.8l-9.82,7.06c-2.87-4.02-6.23-7.03-10.08-9.04-3.85-2.01-8.41-3.01-13.69-3.01-3.68,0-7.18,.49-10.51,1.46-3.33,.98-6.23,2.41-8.7,4.31-2.47,1.89-4.45,4.28-5.94,7.15-1.49,2.87-2.24,6.26-2.24,10.16,0,6.09,1.55,10.77,4.65,14.04s6.98,5.86,11.63,7.75,9.7,3.56,15.16,5c5.45,1.44,10.51,3.36,15.16,5.77s8.53,5.77,11.63,10.08c3.1,4.31,4.65,10.25,4.65,17.83,0,5.51-1.03,10.39-3.1,14.64-2.07,4.25-4.85,7.84-8.35,10.77-3.5,2.93-7.55,5.14-12.14,6.63-4.59,1.49-9.36,2.24-14.3,2.24-8.04,0-15.45-1.41-22.22-4.22-6.78-2.81-12.57-7.55-17.4-14.21l10.85-7.23Z",
  ];
  const interpolatorED = interpolate(pathsED[0], pathsED[1], {
    maxSegmentLength: 0.1,
  });
  const interpolatorNS = interpolate(pathsNS[0], pathsNS[1], {
    maxSegmentLength: 0.1,
  });

  const { t, e, k, g, i } = useSpring({
    reset: true,
    from: { t: 0, e: 20, k: 0, g: 0, i: 30, y: 0 },
    to: async (next) => {
      while (true) {
        await next({ t: 1, e: -510, k: 150, g: 50, i: -155, y: 100 });
        await new Promise((resolve) => setTimeout(resolve, 1000)); // delay
        await next({ t: 0, e: 20, k: 0, g: 0, i: 30, y: 0 });
        await new Promise((resolve) => setTimeout(resolve, 8000)); // delay
      }
    },
    reverse: toggled,
    onRest: () => setToggled(!toggled),
    config: { duration: 1000 },
  });

  return (
    <WindowContainer>
      <Circle />
      <Grid />
      <Name>{HeadingTop}</Name>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <svg viewBox="-5 -5 120 140" style={{ width: 150 }}>
          <animated.path
            d={t.to((t) => interpolatorED(t))}
            stroke={theme.colors.violet[200]}
            strokeWidth={1}
            fill="none"
          />
        </svg>
        <animated.div
          style={{
            transform: k.to((k) => `translateX(${k}px)`),
          }}
        >
          <svg viewBox="-5 -5 120 140" style={{ width: 150 }}>
            <animated.path
              d={t.to((t) => interpolatorNS(t))}
              stroke={theme.colors.violet[200]}
              strokeWidth={1}
              fill="none"
            />
          </svg>

          <animated.svg
            viewBox="-5 -5 120 140"
            style={{
              width: 150,
              transform: g.to((g) => `translateX(${g}px)`),
            }}
            stroke={theme.colors.violet[200]}
            strokeWidth={1}
            fill="none"
          >
            <path d="M108.52,117.14c-7.12,4.02-14.5,6.86-22.14,8.53-7.64,1.66-15.42,2.5-23.34,2.5-9.3,0-17.83-1.58-25.58-4.74-7.75-3.16-14.38-7.58-19.9-13.26s-9.82-12.46-12.92-20.33c-3.1-7.86-4.65-16.45-4.65-25.75s1.55-17.86,4.65-25.67c3.1-7.81,7.41-14.56,12.92-20.24s12.14-10.13,19.9-13.35C45.22,1.61,53.74,0,63.05,0c18.14,0,32.79,5.63,43.93,16.88l-8.27,8.61c-1.84-2.18-4.11-4.22-6.8-6.11-2.7-1.9-5.63-3.5-8.79-4.82-3.16-1.32-6.46-2.35-9.91-3.1-3.44-.75-6.83-1.12-10.16-1.12-7.92,0-15.07,1.38-21.45,4.13-6.37,2.76-11.8,6.55-16.28,11.37-4.48,4.82-7.92,10.51-10.34,17.05s-3.62,13.61-3.62,21.19,1.21,14.64,3.62,21.19,5.86,12.23,10.34,17.05c4.48,4.82,9.9,8.61,16.28,11.37,6.37,2.76,13.52,4.13,21.45,4.13,6.55,0,12.69-.52,18.43-1.55,5.74-1.03,10.97-2.93,15.68-5.68v-41h-29.28v-10.34h40.65v57.88Z" />
          </animated.svg>
          <animated.svg
            viewBox="-5 -5 60 140"
            style={{ width: 75, transform: i.to((i) => `translateX(${i}px)`) }}
            stroke={theme.colors.violet[200]}
            strokeWidth={1}
            fill="none"
          >
            <path d="M0,0H11.37V121.96H0V0Z" />
          </animated.svg>
          <svg
            viewBox="-5 -5 120 140"
            style={{ width: 150 }}
            stroke={theme.colors.violet[200]}
            strokeWidth={1}
            fill="none"
          >
            <path d="M0,0H14.64L88.89,106.8h.34V0h11.37V121.96h-14.64L11.71,15.16h-.34V121.96H0V0Z" />
          </svg>
        </animated.div>
        <animated.svg
          viewBox="-5 -5 120 140"
          style={{
            width: 150,
            transform: e.to((e) => `translateX(${e}px)`),
          }}
          stroke={theme.colors.violet[200]}
          strokeWidth={1}
          fill="none"
        >
          <path d="M0,0H74.59V10.33H11.37V53.74h59.26v10.34H11.37v47.54H77.34v10.34H0V0Z" />
        </animated.svg>
        <svg
          viewBox="-5 -5 120 140"
          style={{ width: 150 }}
          stroke={theme.colors.violet[200]}
          strokeWidth={1}
          fill="none"
        >
          <path d="M0,0H74.59V10.33H11.37V53.74h59.26v10.34H11.37v47.54H77.34v10.34H0V0Z" />
        </svg>
        <svg
          viewBox="-5 -5 120 140"
          style={{ width: 150 }}
          stroke={theme.colors.violet[200]}
          strokeWidth={1}
          fill="none"
          transform="translate(-20, 0)"
        >
          <path d="M0,0H32.04c1.61,0,3.79,.06,6.55,.17,2.76,.12,5.74,.46,8.96,1.03,3.21,.58,6.49,1.49,9.82,2.76,3.33,1.27,6.31,3.1,8.96,5.51,2.64,2.41,4.82,5.46,6.55,9.13,1.72,3.68,2.58,8.16,2.58,13.44,0,5.86-1.01,10.68-3.01,14.47-2.01,3.79-4.54,6.86-7.58,9.22-3.04,2.35-6.4,4.11-10.08,5.25-3.68,1.15-7.18,1.95-10.51,2.41l35.49,58.57h-12.92l-34.28-57.88H11.37v57.88H0V0ZM11.37,53.75h24.12c5.97,0,10.82-.75,14.56-2.24,3.73-1.49,6.63-3.33,8.7-5.51,2.07-2.18,3.47-4.54,4.22-7.06,.75-2.52,1.12-4.82,1.12-6.89s-.37-4.36-1.12-6.89c-.75-2.52-2.15-4.88-4.22-7.06-2.07-2.18-4.97-4.02-8.7-5.51-3.73-1.49-8.59-2.24-14.56-2.24H11.37V53.75Z" />
        </svg>
      </div>
      <Description>{DescriptionLeft}</Description>
      <ComplexPlaneAnimation />
      <Blob />
    </WindowContainer>
  );
};

export default HomeController;
