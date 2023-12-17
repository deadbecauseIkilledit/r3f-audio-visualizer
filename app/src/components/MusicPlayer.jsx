import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState, useEffect, useRef, useCallback } from "react";
import { useSongs } from "../context/SongContext";

function MusicPlayer() {
    const { songs } = useSongs();
    const [currentSong, setCurrentSong] = useState(null);
  
    // Set the first song in the list as the current song when the component first loads
    useEffect(() => {
      setCurrentSong(songs[0]);
    }, [songs]);
  
    const handleSongChange = (song) => {
      setCurrentSong(song);
    };
  
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
  }
  
  export default MusicPlayer;