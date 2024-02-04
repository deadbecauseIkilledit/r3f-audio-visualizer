import React, { createContext, useState, useContext } from "react";

// Context to hold audio data
const AudioDataContext = createContext(null);

export const useAudioData = () => useContext(AudioDataContext);

export const AudioDataProvider = ({ children }) => {
  const [audioData, setAudioData] = useState([]);

  return (
    <AudioDataContext.Provider value={{ audioData, setAudioData }}>
      {children}
    </AudioDataContext.Provider>
  );
};