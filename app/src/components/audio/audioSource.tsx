import { AUDIO_SOURCE } from "@/components/audio/sourceControls/common";
import FileAudioControls from "@/components/audio/sourceControls/file";
import { CurrentTrackPlayer } from "@/components/controls/audio/soundcloud/player";

export const ControlledAudioSource = ({
  audio,
  audioSource,
  currentSong,
}: {
  audio: HTMLAudioElement;
  audioSource: "SOUNDCLOUD" | "FILE_UPLOAD";
  currentSong: string; // Add this line
}) => {
  // Modify the audio element's source to use the current song
  audio.src = currentSong;

  // switch (audioSource) {
  //   case AUDIO_SOURCE.SOUNDCLOUD:
  //     return <CurrentTrackPlayer audio={audio} />;
  //   case AUDIO_SOURCE.FILE_UPLOAD:
  //     return <FileAudioControls audio={audio} />;
  //   default:
  //     return audioSource satisfies never;
  // }
};

export default ControlledAudioSource;
