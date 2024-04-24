const API_URL = 'https://jsonplaceholder.typicode.com/songs';

export async function fetchSongs() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export async function createSong(song) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  const data = await response.json();
  return data;
}

export async function updateSong(song) {
  const response = await fetch(`${API_URL}/${song.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  const data = await response.json();
  return data;
}

export async function deleteSong(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}