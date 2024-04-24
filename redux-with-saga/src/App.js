import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongsRequest } from './actions/songAction';
import SongList from './components/songList';
import SongForm from './components/songForm';
import './index.css'; // Import global CSS
import './App.css'; // Import component-specific CSS

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Song List</h1>
      <SongList />
      <SongForm />
    </div>
  );
};

export default App;