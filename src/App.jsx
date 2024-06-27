import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/main/header/Header";
import Homepage from "./components/main/home/Homepage";
import Movies from "./components/main/movies/Movies";
import TvShow from "./components/main/tvShow/TvShow";
import Footer from "./components/main/footer/Footer";
import QueryPage from "./components/main/queryPage/QueryPage"
import SingleMoviePage from "./components/reusableComponents/singlePage/SingleMoviePage";
import SingleTvShowPage from "./components/reusableComponents/singlePage/SingleTvShowPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<SingleMoviePage />} />
        <Route path="tvshow" element={<TvShow />} />
        <Route path="tvshow/:tvshowId" element={<SingleTvShowPage />} />

        <Route path="query">
          <Route index element={<QueryPage />} />
          {/* <Route path=":mediaType/:mediaRef" element={<h1>Serch</h1>} /> */}
        </Route>

      </Routes>

      <Footer />
    </>
  );
}

export default App;
