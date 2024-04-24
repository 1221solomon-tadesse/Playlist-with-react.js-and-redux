import React from 'react';

const SongList = ({ songs }) => {
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>{song.title}</li>
      ))}
    </ul>
  );
};

export default SongList;