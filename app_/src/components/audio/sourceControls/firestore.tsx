import { useContext, useEffect, useState, useCallback } from "react";
import { useSongs } from '../../../MyMusicPlayer/SongContext';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useAudioSourceContextSetters } from "@/context/audioSource";

const useFireStoreAudio = (audio) => {
  const { songs } = useSongs();
  const [currentSong, setCurrentSong] = useState(null);
  const { setSongUrl } = useAudioSourceContextSetters();

  const handleSongChange = useCallback((song) => {
    setCurrentSong(song);
    setSongUrl(song.path);
  }, [setSongUrl]);

  return { songs, currentSong, handleSongChange }
};

// firestoreAudioControls component
const FirestoreAudioControls = ({ audio }) => {
  const { songs, currentSong, handleSongChange } = useFireStoreAudio(audio);

  useEffect(() => {
    if (songs && songs.length > 0 && !currentSong) {
      handleSongChange(songs[0]);
    }
  }, [songs, currentSong, handleSongChange]);

  if (!songs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-10 text-white">
      <div className="space-y-10">
        <h1>Do Harm Leave Trace</h1>
        <ul className="p-2 border-2 border-white">
          {songs.map((song, index) => (
            <li key={index} className="px-2 py-1" onClick={() => handleSongChange(song)}>
              {song.name}
            </li>
          ))}
        </ul>
      </div>
      {currentSong && (
        <AudioPlayer
          autoPlay
          src={currentSong.path}
          onPlay={e => console.log("onPlay")}
          customProgressBarSection={[
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION
          ]}
          customControlsSection={[
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.VOLUME_CONTROLS
          ]}
        />
      )}
    </div>
  );
};

export default FirestoreAudioControls;