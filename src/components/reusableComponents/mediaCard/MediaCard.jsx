import { Link } from "react-router-dom";
import useGetGenre from "../../../hooks/useGetGenre";
import "./MovieCard.css";
import ImageWithLoading from "../loadingImageScreen/ImageWithLoading";

const genreMap = useGetGenre();

const getRightType = (type) => {

  if(type === 'tv'){
    return 'tvshow'
  }else if(type === 'tvshow'){
    return 'tvshow'
  }else if(type === 'movie'){
    return 'movies'
  }else if(type === 'movies'){
    return 'movies'
  }else{
    return 'not-found'
  }
};

const rightImage = (val1, val2, val3) => {
  if (val1 !== null && val1 !== undefined) {
    return `https://image.tmdb.org/t/p/w500${val1}`;
  } else if (val2 !== null && val2 !== undefined) {
    return `https://image.tmdb.org/t/p/w500${val2}`;
  } else if (val3 !== null && val3 !== undefined) {
    return `https://image.tmdb.org/t/p/w500${val3}`;
  } else {
    return 'https://dummyimage.com/200x300/000000/ffffff.png&text=Image+not+found';
  }
};

const MediaCard = ({ result, mediaType }) => {



  return (
    <>
      <div className="flex relative md:h-[300px] h-[250px] border border-slate-600 rounded-md">
        {result.media_type ? (
          <h4 className=" absolute bg-black text-white right-0 p-2 mt-1 me-1 font-bold py-1 z-10 rounded-md sm:text-sm text-[0.7rem] bg-opacity-30 ">
            Type : {result?.media_type?.toUpperCase()}
          </h4>
        ) : (
          ""
        )}

        <p className=" absolute z-10 bg-black bg-opacity-30 text-white left-0 p-2 mt-1 ms-1 font-bold py-1 rounded ">
          {" "}
          {result?.vote_average?.toFixed(1)}
        </p>

        <Link
          to={`/${getRightType(mediaType)}/${result && result.id}`}
          className=" absolute bottom-[0] text-white bg-black bg-opacity-40 font-bold z-10 text-center text-ellipsis text-nowrap text-[.8rem] sm:text-[1em] overflow-hidden px-2 pt-2 pb-3 rounded-b-[7px] hover:bg-blue-500 w-full"
        >
          {result.title || result.name}
        </Link>

        <p className="absolute bottom-12 right-0 me-1 z-10 sm:text-[12px] md:text-[.7em] text-[9px] bg-black text-white bg-opacity-30 p-1 px-2 rounded-md font-bold ">
          Relesed on: {result.release_date || result.first_air_date}
        </p>
        <ImageWithLoading
          src={rightImage(result.poster_path, result.profile_path, result.backdrop_path )}
          className="inset-1 h-full w-full object-center object-cover rounded-md "
          styleLoading={" w-[100%] h-full absolute"}
        />

        <div className="px-2 py-10 z-10 w-full border-x-2 border-t-2 border-slate-600 bg-black bg-opacity-50 opacity-0 hover:opacity-100 overflow-auto scroll-container sm:block hidden rounded-t-md transition duration-300 ease-out h-[85.5%] absolute">
          <h2 className="tracking-widest text-sm title-font font-medium text-slate-300 mb-1">
            {result?.adult ? "18+" : "Family friendly"}
          </h2>
          <Link
            to={`/${getRightType(mediaType)}/${result && result.id}`}
            className="title-font text-lg font-medium hover:text-blue-500 mb-3 text-white"
          >
            {result.title || result.name}
          </Link>
          <p className="leading-relaxed overflow-hidden h-[50%] text-white">
            <span className="text-ellipsis">{result.overview}</span>
          </p>

          {/* <p className=" absolute top-0 right-0 me-2">
            Relesed on : {result.first_air_date || result.release_date}
          </p> */}

          <p className="flex mt-3 flex-wrap gap-1 ">
            {result &&
              result?.genre_ids?.map((genreId, key) => (
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

export default MediaCard;
