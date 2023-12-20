// firestore.tsx
import { useContext, useState } from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useSongs } from '../../../MyMusicPlayer/SongContext';
import { useAudioSourceContextSetters, AudioSourceContextProvider } from "@/context/audioSource";

const FirestoreControls = () => {
  const { songs = [] } = useSongs();
  const [currentSong, setCurrentSong] = useState(null);
  const { setSongUrl } = useAudioSourceContextSetters();

  const handleSongChange = song => {
    setCurrentSong(song);
    setSongUrl(song.path);
  };

  return (
    <AudioSourceContextProvider>
      <div className="flex items-center justify-center min-h-screen p-10 text-white">
        <div className="space-y-10">
          <h1>Do Harm Leave Trace</h1>
          <ul className="p-2 border-2 border-white">
            {songs.map(song => (
              <li
                key={song.id}
                className="px-2 py-1"
                onClick={() => { handleSongChange(song)}}
              >
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
            customProgressBarSection={[RHAP_UI.CURRENT_TIME, RHAP_UI.PROGRESS_BAR, RHAP_UI.DURATION]}
            customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
          />
        )}
      </div>
    </AudioSourceContextProvider>
  );
};

export default FirestoreControls;