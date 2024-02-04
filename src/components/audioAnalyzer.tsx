import { useMemo, useEffect, useRef, useState } from "react";

import { FFTAnalyzerControls } from "@/components/fftAnalyzerControls";
import { ControlledAudioSource } from "@/components/audio/audioSource";
import {
  AUDIO_SOURCE,
  buildAudio,
  buildAudioContext,
} from "@/components/audio/sourceControls/common";
import { useAudioSourceContext } from "@/context/audioSource";
import { useMediaStreamLink } from "@/lib/analyzers/common";
import FFTAnalyzer from "@/lib/analyzers/fft";

import { useAudioData } from "../context/audioDataContext";

import { AudioScopeAnalyzerControls } from "./scopeAnalyzerControls";
import { OrbitControls, Scroll } from "@react-three/drei";

const InternalAudioAnalyzer = ({ audioSource }) => {
  const audioCtx = useMemo(buildAudioContext, []);
  const audio = useMemo(buildAudio, []);
  const { songUrl } = useAudioSourceContext();
  const { setAudioData } = useAudioData();
  const [barsData, setBarsData] = useState([]);

  const analyzer = useMemo(() => {
    const out = new FFTAnalyzer(audio, audioCtx);
    out.volume = 1.0;
    return out;
  }, [audio, audioCtx]);

  const animationRef = useRef();
  const frequencyData = analyzer.getBars();
  setAudioData(frequencyData);

  const sampleRate = 10; // Log every 10th data point
  const sampledData = frequencyData.filter((_, index) => index % sampleRate === 0);

  useEffect(() => {
    setBarsData(sampledData);
  }, [sampledData]);

  const logAnalyzerData = () => {
    // const frequencyData = analyzer.getBars();
    // setAudioData(frequencyData);

    // const sampleRate = 10; // Log every 10th data point
    // const sampledData = frequencyData.filter((_, index) => index % sampleRate === 0);
  
    // Calculate average value for a simple overview
    const averageValue = sampledData.reduce((acc, val) => acc + val.value, 0) / sampledData.length;
  
    // console.log("Sampled Frequency Data:", sampledData);
    // console.log("Average Frequency Value:", averageValue);
  
    animationRef.current = requestAnimationFrame(logAnalyzerData);
  };


  useEffect(() => {
    
    if (songUrl) {
      audio.src = songUrl;
      audio.load();
      audio.oncanplaythrough = () => audio.play();
      audio.onerror = error => console.error(`Error loading song: ${error}`);
    }
  }, [songUrl, audio]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(logAnalyzerData);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [analyzer]);

  return (
<>
      <FFTAnalyzerControls analyzer={analyzer} />
<Scroll html>

      {/* <ControlledAudioSource audio={audio} audioSource={audioSource} /> */}
      <div className="frequency-bars-container">
        {barsData.map((bar, index) => (
          <div
          key={index}
          className="frequency-bar"
          style={{ height: `${bar.value * 100}%` }}
          ></div>
          ))}
      </div>

          </Scroll>
</>
  );
};

const AudioAnalyzer = () => {
  const { audioSource } = useAudioSourceContext();
  return audioSource === AUDIO_SOURCE.FIRESTORE
    ? <InternalAudioAnalyzer audioSource={audioSource} />
    : null; // Or handle unsupported audio sources appropriately
};

export default AudioAnalyzer;