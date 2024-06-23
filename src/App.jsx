import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/main/header/Header";
import Homepage from "./components/main/home/Homepage";
import Movies from "./components/main/movies/Movies";
import TvShow from "./components/main/tvShow/TvShow";
import BigScreenSwiper from "./components/reusableComponents/sliderSwiper/bigScreenSwiper/BigScreenSwiper";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvshow" element={<TvShow />} />
        <Route path="movies/:mediaId" element={<BigScreenSwiper />} />
      </Routes>
    </>
  );
}

export default App;
