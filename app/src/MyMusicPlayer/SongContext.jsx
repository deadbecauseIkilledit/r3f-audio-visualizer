'use client'

import React, {useContext, useState, useEffect, createContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage, firestore } from '../lib/firebase';

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


  const addSong = async (song) => {

    if(song.image) {
      const snapshot = await storage.ref(`songs/${uuidv4()}`).put(song.image);
      const url = await snapshot.ref.getDownloadURL();
      song.image = url;
    }

    await firestore.collection('songs').add(song);
  }

  const updateSong = async (id, updatedSong) => {
        
    if(updatedSong.image) {
      const snapshot = await storage.ref(`songs/${uuidv4()}`).put(updatedSong.image);
      const url = await snapshot.ref.getDownloadURL();
      updatedSong.image = url;
    }

    await firestore.collection('songs').doc(id).update(updatedSong);
  }

  const value = {
    songs,
    addSong,
    updateSong
  }


  return (
    <SongContext.Provider value={value}>
      {children}
    </SongContext.Provider>
  )
}
