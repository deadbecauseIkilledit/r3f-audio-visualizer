import classnames from "classnames";
import {
  Activity,
  Database,
  MoreHorizontal,
  Music,
  Shell,
  Waves,
  type LucideProps,
  RefreshCcw,
} from "lucide-react";
import { type HTMLAttributes, useMemo } from "react";

import {
  AUDIO_SOURCE,
  type AudioSource,
  getPlatformSupportedAudioSources,
} from "@/components/audio/sourceControls/common";


import {
  useAudioSourceContext,
  useAudioSourceContextSetters,
} from "@/context/audioSource";
import {
  useFFTAnalyzerContext,
  useFFTAnalyzerContextSetters,
} from "@/context/fftAnalyzer";

import {
  type EnergyMeasure,
  EnergyMeasureOptions,
  type OctaveBandMode,
  OctaveBandModeMap,
} from "@/lib/analyzers/fft";


import FirestoreAudioControls from "../audio/sourceControls/firestore";

const ModesToolbar = () => {
  return (
    <>

    <AudioSourceControls/>
    </>
    
  );
};

const AudioSourceIcon = ({
  audioSource,
  ...props
}: { audioSource: AudioSource } & LucideProps) => {
  switch (audioSource) {
    case AUDIO_SOURCE.FIRESTORE:
      return <Database {...props} />;
    default:
      return audioSource satisfies never;
  }
};





const AudioSourceControls = () => {
  const { audioSource, audio } = useAudioSourceContext();
  const onStreamCreated = (stream) => {
    // Handle stream created event here...
  };
  switch (audioSource) {
    case AUDIO_SOURCE.FIRESTORE:
        return <FirestoreAudioControls audio={audio} onStreamCreated={onStreamCreated}/>
        
    default:
      return audioSource satisfies never;
  }
};




export default ModesToolbar;
