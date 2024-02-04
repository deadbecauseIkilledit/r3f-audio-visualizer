// import { OrbitControls } from "@react-three/drei";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useRef, useEffect } from "react";

// import BarsVisualizer from "../BarsVisualizer";
// const Scene = () => {
//   const { gl } = useThree(); // Access the WebGLRenderer

//   useEffect(() => {
//     const canvas = gl.domElement; // This is the HTML canvas element
//     // You can now use the canvas element here

//     // Example: Log the canvas dimensions
//     console.log('Canvas dimensions:', canvas.width, canvas.height);
//   }, [gl]);

//   // Your scene components go here

//   return null; // This component does not render anything itself
// };

// const Visual3DCanvas = () => {
//   const canvasRef = useRef(null);
//   return (
//     <Canvas
//       camera={{
//         fov: 45,
//         near: 1,
//         far: 1000,
//         position: [-17, -6, 6.5],
//         up: [0, 0, 1],
//       }}
//       linear={true}
//     >
//       <ambientLight intensity={Math.PI} />
//       <BarsVisualizer />
//     </Canvas>
//   );
// };

// export default Visual3DCanvas;
