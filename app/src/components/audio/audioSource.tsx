import { AUDIO_SOURCE } from "@/components/audio/sourceControls/common";
import FileAudioControls from "@/components/audio/sourceControls/file";
import FirestoreAudioControls from "@/components/audio/sourceControls/firestore"; // <== Adjust your path
import { CurrentTrackPlayer } from "@/components/controls/audio/soundcloud/player";

export const ControlledAudioSource = ({
  audio,
  audioSource,
}: {
  audio: HTMLAudioElement;
  audioSource: "SOUNDCLOUD" | "FILE_UPLOAD" | "FIRESTORE";
}) => {
  const onStreamCreated = (stream) => {
    console.log('Stream created:', stream);
  };


  switch (audioSource) {
    case AUDIO_SOURCE.SOUNDCLOUD:
      return <CurrentTrackPlayer audio={audio} />;
    case AUDIO_SOURCE.FILE_UPLOAD:
      return <FileAudioControls audio={audio} />;
      case AUDIO_SOURCE.FIRESTORE:  // <== Here is handling Firestore source
    case AUDIO_SOURCE.FIRESTORE:  // <== Here is handling Firestore source
      return <FirestoreAudioControls audio={audio} onStreamCreated={onStreamCreated}/>;
    default:
      return audioSource satisfies never;
      
  }
};
export default ControlledAudioSource;
