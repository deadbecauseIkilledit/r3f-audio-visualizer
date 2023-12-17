import { useContext, useEffect, useState } from "react";
import { useSongs } from '../../../MyMusicPlayer/SongContext'; //
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

const useFireStoreAudio = (audio) => { // Removed the HTMLAudioElement type here.
  const { songs } = useSongs(); // using your context
  const [currentSong, setCurrentSong] = useState(null);
  
  useEffect(() => {
    setCurrentSong(songs[0]);
  }, [songs]);

  const handleSongChange = (song) => {
    audio.src = song.path;
  };

  return {
    songs,
    currentSong,
    setCurrentSong,
    handleSongChange
  };
};

// your FirestoreAudioControls component
const FirestoreAudioControls = ({ audio, onStreamCreated }) => { // Added onStreamCreated in props.
  const { songs, currentSong, setCurrentSong, handleSongChange } = useFireStoreAudio(audio);

  useEffect(() => {
    if (songs.length > 0) {
      onStreamCreated(songs[0].path);
    }
  }, [songs, onStreamCreated]);

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
            customProgressBarSection={
              [
                RHAP_UI.CURRENT_TIME,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.DURATION
              ]
            }
            customControlsSection={
              [RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]
            }
          />
        )}
      </div>
  );
};

export default FirestoreAudioControls;