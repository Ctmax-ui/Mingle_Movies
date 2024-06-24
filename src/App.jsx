import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/main/header/Header";
import Homepage from "./components/main/home/Homepage";
import Movies from "./components/main/movies/Movies";
import TvShow from "./components/main/tvShow/TvShow";
import Footer from "./components/main/footer/Footer"
import SingleMediaPage from "./components/reusableComponents/singlePage/SingleMoviePage";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<SingleMediaPage />} />
        <Route path="tvshow" element={<TvShow />} />
        <Route path="tvshow/:mediaId" element={<SingleMediaPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
