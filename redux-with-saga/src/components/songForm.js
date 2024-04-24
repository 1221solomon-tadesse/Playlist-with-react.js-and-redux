import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSongRequest } from '../actions/songAction';

const SongForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSong = { title, artist };
    dispatch(createSongRequest(newSong));
    setTitle('');
    setArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="artist">Artist:</label>
        <input type="text" id="artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
      </div>
      <button type="submit">Create Song</button>
    </form>
  );
};

export default SongForm;