import { Suspense } from "react";

import AudioAnalyzer from "@/components/audioAnalyzer";
import  ModesToolbar  from "@/components/controls/modesToolbar";
import { Music } from "lucide-react";
// import Visual3D from "./components/canvas/Visual3D";
// import BarsVisualizer from "./components/BarsVisualizer";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { FFTAnalyzerContextProvider } from "./context/fftAnalyzer";


const App = () => {
  return (
    <>

        <ModesToolbar />
        <Canvas>
      <Suspense fallback={<span>loading...</span>}>


        <ScrollControls pages={3} damping={0.25}>

        <AudioAnalyzer />
        
      {/* <Visual3D/> */}
      {/* <BarsVisualizer /> */}

      </ScrollControls>

      </Suspense>
        </Canvas>
    </>
  );
};
export default App;
