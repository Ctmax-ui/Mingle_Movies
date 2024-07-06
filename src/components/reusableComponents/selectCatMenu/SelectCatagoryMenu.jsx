import { useState, useEffect } from 'react';
import CatagoryMapping from './CatagoryMapping';

const SelectCatagoryMenu = ({ onChange, CatagoryType }) => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(0);

  const movieGenre = [
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
      { id: 37, name: "Western" },
    ]
  

  const tvGenre = [
      { id: 10759, name: "Action & Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 10762, name: "Kids" },
      { id: 9648, name: "Mystery" },
      { id: 10763, name: "News" },
      { id: 10764, name: "Reality" },
      { id: 10765, name: "Sci-Fi & Fantasy" },
      { id: 10766, name: "Soap" },
      { id: 10767, name: "Talk" },
      { id: 10768, name: "War & Politics" },
      { id: 37, name: "Western" },
    ]
  

  useEffect(() => {
    const genreOptions = CatagoryType === 'tv' ? tvGenre : movieGenre;
    setOptions(genreOptions);
    setSelected(0); // Reset selected index to 0 on category change
    onChange(genreOptions[0]); // Send the first genre to the parent on first load
  }, [CatagoryType]);

  function handleChange(i) {
    if (i !== selected) {
      setSelected(i);
      onChange(options[i]);
    }
  }

  return (
    <div className="w-[50%] mx-auto flex gap-2 flex-wrap my-2">
        <CatagoryMapping cataObject={options} currentSelected={selected} handleChange={handleChange}/>
    </div>
  );
};

export default SelectCatagoryMenu;
