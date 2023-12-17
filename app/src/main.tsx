import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";
import "@/style/globals.css";
import { CameraControlsContextProvider } from "@/context/cameraControls";
import { ModeContextProvider } from "@/context/mode";
import { ThemeProvider } from "@/context/theme";
import { VisualContextProvider } from "@/context/visual";

import { AudioSourceContextProvider } from "./context/audioSource";
import { FFTAnalyzerContextProvider } from "./context/fftAnalyzer";
import { NoiseGeneratorContextProvider } from "./context/noiseGenerator";
import { SoundcloudContextProvider } from "./context/soundcloud";
import { WaveGeneratorContextProvider } from "./context/waveGenerator";
import {SongProvider} from './context/SongContext'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeContextProvider>
          <WaveGeneratorContextProvider>
            <NoiseGeneratorContextProvider>
              <FFTAnalyzerContextProvider>
              <SongProvider>
                <AudioSourceContextProvider>
                  <SoundcloudContextProvider>
                    <CameraControlsContextProvider>
                      <VisualContextProvider>
                        <App />
                      </VisualContextProvider>
                    </CameraControlsContextProvider>
                  </SoundcloudContextProvider>
                </AudioSourceContextProvider>
                </SongProvider>

              </FFTAnalyzerContextProvider>
            </NoiseGeneratorContextProvider>
          </WaveGeneratorContextProvider>
        </ModeContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);