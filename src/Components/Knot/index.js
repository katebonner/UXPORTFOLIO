import React, { useRef, useState } from "react";
import { Circle, Circle2, Circle3 } from "./elements";
import { Canvas, useFrame } from "@react-three/fiber";

const Knot = () => {
  const Cube = () => {
    const meshRef = useRef();
    const [isHovered, setHovered] = useState(false);

    // Rotating animation
    useFrame(() => {
      if (meshRef.current) {
        const rotationSpeed = isHovered ? 0.0005 : 0.005;
        meshRef.current.rotation.x += rotationSpeed;
        meshRef.current.rotation.y += rotationSpeed;
      }
    });

    const handleCubeClick = () => {
      let newWindow = window.open(
        "https://katebonner.github.io/level/#",
        "_blank"
      );
      if (newWindow) newWindow.opener = null;
    };

    return (
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleCubeClick}
        scale={1}
      >
        <torusKnotGeometry args={[3, 0.4, 300, 300]} />
        <meshStandardMaterial color="#ab577e" metalness={0.5} roughness={0} />
      </mesh>
    );
  };

  return (
    <>
      <Circle />
      <Circle2 />
      <Circle3 />
      <Canvas
        className="negative-margin"
        style={{
          width: "100%",
          height: "60vh",
          marginTop: "-30vh",
        }}
        shadows
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight intensity={3} />
        <pointLight position={[3, 0, 5]} color="yellow" intensity={30} />
        <pointLight position={[-5, 0, -5]} color="blue" intensity={50} />
        <pointLight position={[0, 5, 0]} color="red" intensity={50} />
        <Cube />
      </Canvas>
    </>
  );
};

export default Knot;
