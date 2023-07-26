import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Line } from "react-konva";
import theme from "../../theme";

const drawSierpinski = (x, y, size, level, points) => {
  if (level <= 0) {
    const p1 = [x, y];
    const p2 = [x + size / 2, y + (Math.sqrt(3) * size) / 2];
    const p3 = [x + size, y];
    points.push(p1, p2, p3);
  } else {
    drawSierpinski(x, y, size / 2, level - 1, points);
    drawSierpinski(x + size / 2, y, size / 2, level - 1, points);
    drawSierpinski(
      x + size / 4,
      y + (Math.sqrt(3) * size) / 4,
      size / 2,
      level - 1,
      points
    );
  }
};

const SierpinskiTriangle = ({ x, y, size, level }) => {
  const points = [];
  drawSierpinski(x, y, size, level, points);

  return (
    <Line
      points={points.flat()}
      fill={theme.colors.vert[200]}
      closed
      tension={0}
    />
  );
};

const Fractal = () => {
  const [level, setLevel] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const maxLevel = 10;

  useEffect(() => {
    const changeLevel = () => {
      setLevel((prevLevel) => {
        if (prevLevel >= maxLevel) {
          setIsIncreasing(false);
          return prevLevel - 1;
        }
        if (prevLevel <= 0) {
          setIsIncreasing(true);
          return prevLevel + 1;
        }
        return isIncreasing ? prevLevel + 1 : prevLevel - 1;
      });
    };

    const intervalId = setInterval(changeLevel, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [isIncreasing]);

  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const size = Math.min(dimensions.width, dimensions.height) / 2;

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", transform: "rotate(180deg)" }}
    >
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
          <SierpinskiTriangle
            x={centerX - size / 2}
            y={centerY - (Math.sqrt(3) * size) / 4}
            size={size}
            level={level}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Fractal;
