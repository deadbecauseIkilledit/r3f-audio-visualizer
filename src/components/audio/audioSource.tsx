import { AUDIO_SOURCE } from "@/components/audio/sourceControls/common";
import FirestoreAudioControls from "@/components/audio/sourceControls/firestore"; // <== Adjust your path

export const ControlledAudioSource = ({
  audio,
  audioSource,
}: {
  audio: HTMLAudioElement;
  audioSource: "FIRESTORE";
}) => {



  switch (audioSource) {
    case AUDIO_SOURCE.FIRESTORE:  // <== Here is handling Firestore source
      // return <FirestoreAudioControls audio={audio} onStreamCreated={onStreamCreated}/>;
    default:
      return audioSource satisfies never;
      
  }
};
export default ControlledAudioSource;
