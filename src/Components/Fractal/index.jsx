import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import theme from "../../theme";

const drawSierpinski3D = (x, y, z, size, level, positions) => {
  if (level <= 0) {
    const vertices = [
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x + size, y, z),
      new THREE.Vector3(x + size / 2, y + size, z),
      new THREE.Vector3(
        x + size / 2,
        y + size / 2,
        z + (Math.sqrt(2) * size) / 2
      ),
    ];

    const faces = [
      [0, 1, 2],
      [0, 2, 3],
      [0, 3, 1],
      [1, 2, 3],
    ];

    for (let face of faces) {
      for (let vertexIndex of face) {
        positions.push(
          vertices[vertexIndex].x,
          vertices[vertexIndex].y,
          vertices[vertexIndex].z
        );
      }
    }
  } else {
    const halfSize = size / 2;
    drawSierpinski3D(x, y, z, halfSize, level - 1, positions);
    drawSierpinski3D(x + halfSize, y, z, halfSize, level - 1, positions);
    drawSierpinski3D(
      x + halfSize / 2,
      y + halfSize,
      z,
      halfSize,
      level - 1,
      positions
    );
    drawSierpinski3D(
      x + halfSize / 2,
      y + halfSize / 2,
      z + (Math.sqrt(2) * halfSize) / 2,
      halfSize,
      level - 1,
      positions
    );
  }
};

const SierpinskiTetrahedron = ({ position, size, level }) => {
  const positions = [];
  drawSierpinski3D(
    position[0],
    position[1],
    position[2],
    size,
    level,
    positions
  );

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.006;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={
        new THREE.MeshBasicMaterial({
          color: theme.colors.violet[200],
          wireframe: true,
        })
      }
    />
  );
};

const Fractal3D = () => {
  const [level, setLevel] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const maxLevel = 4;

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

    const intervalId = setInterval(changeLevel, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isIncreasing]);

  return (
    <Canvas style={{ position: "fixed", top: 0, left: "-25vw", zIndex: -999 }}>
      <ambientLight intensity={4} />
      <SierpinskiTetrahedron position={[0, 0, 0]} size={2} level={level} />
    </Canvas>
  );
};

export default Fractal3D;
