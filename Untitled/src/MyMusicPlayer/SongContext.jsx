'use client'

import React, {useContext, useState, useEffect, createContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage, firestore } from './firebase';

const SongContext = createContext();

export function useSongs() {
  return useContext(SongContext)
}

export function SongProvider({children}) {
  const [songs, setsongs] = useState([]);

  useEffect(() => {
    // Fetch songs from Firestore
    const unsubscribe = firestore.collection('songs').onSnapshot(snapshot => {
      let SongList = [];
      snapshot.forEach(doc => {
        SongList.push({...doc.data(), id: doc.id});
      });
      setsongs(SongList);
    });

    return unsubscribe;
  }, []);




  const value = {
    songs,
  }


  return (
    <SongContext.Provider value={value}>
      {children}
    </SongContext.Provider>
  )
}
