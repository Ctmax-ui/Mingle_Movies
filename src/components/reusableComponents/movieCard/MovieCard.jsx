import { Link } from "react-router-dom";
import useGetGenre from "../../../hooks/useGetGenre";
import './MovieCard.css'

const genreMap = useGetGenre();

const generateUrl = (title, id) => {
  const urlFriendlyTitle = title
    ? title
        .trim()
        .replace(/\s+/g, "")
        .replace(/[^a-zA-Z0-9-]/g, "")
        .toLowerCase()
    : "";

  return `/movies/${urlFriendlyTitle}/${id}`;
};

const MovieCard = ({ result }) => {
  return (
    <>
      <div
        
        className="flex relative md:h-[300px] h-[250px]"
      >
        {result.media_type ? (
          <h4 className=" absolute bg-black text-white right-0 p-2 mt-1 me-1 font-bold py-1 z-10 rounded-md sm:text-sm text-[0.7rem] bg-opacity-30 ">
            Type : {result.media_type.toUpperCase()}
          </h4>
        ) : (
          ""
        )}

        <p className=" absolute z-10 bg-black bg-opacity-30 text-white left-0 p-2 mt-1 ms-1 font-bold py-1 rounded ">
          {" "}
          {result.vote_average.toFixed(1)}
        </p>

        <Link
          to={generateUrl(
            result.title || result.name || result.original_name,
            result.id
          )}
          className=" absolute bottom-[0] text-white bg-black bg-opacity-40 font-bold z-10 w-full text-center text-ellipsis text-nowrap text-[.8rem] sm:text-[1em] overflow-hidden px-2 pt-2 pb-3 rounded-b-[7px] hover:bg-blue-500"
        >
          {result.title || result.name}
        </Link>

        <p className="absolute bottom-12 right-0 me-1 z-10 sm:text-[12px] text-[.7em] bg-black text-white bg-opacity-30 p-1 px-2 rounded-md font-bold">
          Relesed on: {result.release_date || result.first_air_date}
        </p>

        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
          src={`https://image.tmdb.org/t/p/w500${result.backdrop_path || result.poster_path}`}
        />

        <div className="px-2 py-10 relative z-10 w-full border-x-4 border-t-4 border-slate-600 bg-black bg-opacity-50 opacity-0 hover:opacity-100 overflow-auto scroll-container sm:block hidden rounded-t-md transition duration-300 ease-out h-[85.5%]">
          
          <h2 className="tracking-widest text-sm title-font font-medium text-slate-300 mb-1">
            {result.adult ? "18+" : "Family friendly"}
          </h2>
          <Link
          to={generateUrl(
            result.title || result.name || result.original_name,
            result.id
          )} className="title-font text-lg font-medium hover:text-blue-800 mb-3 text-blue-500">
            {result.title || result.original_name}
          </Link>
          <p className="leading-relaxed overflow-hidden h-[50%] text-white">
            <span className="text-ellipsis">{result.overview}</span>
          </p>

          {/* <p className=" absolute top-0 right-0 me-2">
            Relesed on : {result.first_air_date || result.release_date}
          </p> */}

          <p className="flex mt-3 flex-wrap gap-1 ">
            {result.genre_ids.map((genreId, key) => (
              <span
                key={key}
                className="text-[12px] bg-white bg-opacity-90 py-1 px-2 text-black font-bold rounded-md"
              >
                {genreMap[genreId] || ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
