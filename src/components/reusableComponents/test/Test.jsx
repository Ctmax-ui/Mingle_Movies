import React, { useEffect, useState } from 'react';

// Define the genres array
const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 10768, name: "War" },
  { id: 37, name: "Western" },
];

const Test = () => {
  const [genreName, setGenreName] = useState('');
  const [genreIds, setGenreIds] = useState([]);

  const handleInputChange = (e) => {
    setGenreName(e.target.value);
  };

  const findGenreIdsByNames = (names) => {
    const namesArray = names.split(/\s*,\s*|\s+/).map(name => name.trim());
    return namesArray.map(name => {
      const genre = genres.find(genre => genre.name.toLowerCase() === name.toLowerCase());
      return genre ? genre.id : '';
    });
  };

  useEffect(()=>{

      const handleSearch = () => {
        setGenreIds(findGenreIdsByNames(genreName));
      };
      handleSearch()
  }, [genreName])


  return (
    <div>
      <h1>Genre Finder</h1>
      <input 
        type="text" 
        value={genreName} 
        onChange={handleInputChange} 
        placeholder="Enter genre names separated by commas"
      />
      <button>Find Genre IDs</button>
      <p>Genre IDs: {genreIds.join('%2C')}</p>
    </div>
  );
}

export default Test;
