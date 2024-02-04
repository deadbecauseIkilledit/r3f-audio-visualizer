import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";
import "@/style/globals.css";

import { AudioSourceContextProvider } from "./context/audioSource";
import { FFTAnalyzerContextProvider } from "./context/fftAnalyzer";
import {SongProvider} from "./context/SongContext";
import { AudioDataProvider } from "./context/audioDataContext";
import { ScrollControls } from "@react-three/drei";



const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AudioDataProvider>
                <SongProvider>

                <AudioSourceContextProvider>
              

              <FFTAnalyzerContextProvider>
                
                        <App />
              </FFTAnalyzerContextProvider>
                </AudioSourceContextProvider>
                </SongProvider>

    </AudioDataProvider>
    </QueryClientProvider>

  </StrictMode>
);
