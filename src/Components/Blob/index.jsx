import {
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useState,
  useImperativeHandle,
} from "react";
import { useSpring, animated } from "@react-spring/three";
import { Canvas, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Vector2 } from "three";
import theme from "../../theme";

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

const MyScene = forwardRef(({}, ref) => {
  const isOver = useRef(false);
  const [vector2] = useState(() => new Vector2());

  const { width, height } = useThree((state) => state.size);

  const [springs, api] = useSpring(
    () => ({
      scale: 1.5,
      position: [0, 0],
      color: theme.colors.violet[200],
      onChange: ({ value }) => {
        vector2.set(value.position[0], value.position[1]);
      },
      config: (key) => {
        switch (key) {
          case "scale":
            return {
              mass: 4,
              friction: 10,
            };
          case "position":
            return { mass: 4, friction: 220 };
          default:
            return {};
        }
      },
    }),
    []
  );

  useImperativeHandle(ref, () => ({
    getCurrentPosition: () => vector2,
  }));

  const handlePointerEnter = () => {
    api.start({
      scale: 1.5,
    });
  };

  const handlePointerLeave = () => {
    api.start({
      scale: 1,
    });
  };

  const handleWindowPointerOver = useCallback(() => {
    isOver.current = true;
  }, []);

  const handleWindowPointerOut = useCallback(() => {
    isOver.current = false;

    api.start({
      position: [0, 0],
    });
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      if (isOver.current) {
        const x = (e.offsetX / width) * 2 - 1;
        const y = (e.offsetY / height) * -2 + 1;

        api.start({
          position: [x * 5, y * 2],
        });
      }
    },
    [api, width, height]
  );

  useEffect(() => {
    window.addEventListener("pointerover", handleWindowPointerOver);
    window.addEventListener("pointerout", handleWindowPointerOut);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointerover", handleWindowPointerOver);
      window.removeEventListener("pointerout", handleWindowPointerOut);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [handleWindowPointerOver, handleWindowPointerOut, handlePointerMove]);

  return (
    <animated.mesh
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      scale={springs.scale}
      position={springs.position.to((x, y) => [x, y, 0])}
    >
      <sphereGeometry args={[1.5, 64, 32]} />
      <AnimatedMeshDistortMaterial
        speed={5}
        distort={0.5}
        color={theme.colors.violet[200]}
      />
    </animated.mesh>
  );
});

export default function MyComponent() {
  const blobApi = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (blobApi.current) {
        const { x, y } = blobApi.current.getCurrentPosition();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas
      style={{
        zIndex: -9999,
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        filter: "blur(7px)",
      }}
    >
      <ambientLight intensity={1} />
      <pointLight intensity={16} position={[0, 6, 0]} />
      <MyScene ref={blobApi} />
    </Canvas>
  );
}
