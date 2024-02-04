import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

const BarsVisualizer = ({ frequencyData }) => {
  const groupRef = useRef({});

  useEffect(() => {
    if (frequencyData) {
      // Create bars based on frequencyData
      const bars = frequencyData.map((value, index) => (
        <mesh key={index} position={[index - frequencyData.length / 2, 0, 0]}>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      ));

      // Set the bars in the state
      groupRef.current.children = bars;
    }
  }, [frequencyData]);

  useFrame(() => {
    if (groupRef.current && frequencyData) {
      frequencyData.forEach((value, index) => {
        const bar = groupRef.current.children[index];
        if (bar) {
          const scale = value * 10; // Scale the bar according to frequency value
          bar.scale.y = Math.max(0.1, scale); // Ensure a minimum scale
        }
      });
    }
  });

  return <group ref={groupRef} />;
};

export default BarsVisualizer;