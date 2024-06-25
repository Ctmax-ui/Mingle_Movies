import { Link } from "react-router-dom";
import "./BigScreenMediaCard.css";
import useGetGenre from "../../../../hooks/useGetGenre";
import ImageWithLoading from "../../loadingImageScreen/ImageWithLoading";
const genreMap = useGetGenre();

const BigScreenMediaCard = ({ value }) => {

  return (
    <>
      <Link
        to={`${value && value?.id}`}
        className="main-slide-container bg-inherit h-full w-full px-20 py-10"
      >
        <div className="flex flex-col sm:flex-row justify-between h-full border rounded-md overflow-hidden">
          <div className="w-auto h-full p-4">
            <ImageWithLoading
              src={`https://image.tmdb.org/t/p/w500/${
                value && value.backdrop_path
              }`}
              className="h-full object-cover rounded-md"
              styleLoading={" w-[400px] h-full"}
            />
          </div>

          <div className="w-[50%] text-white p-4 relative slide-box">
            <p className=" absolute right-0 top-0 me-5 mt-2">
              {value && value.original_language.toUpperCase()}
            </p>

            <h3 className="text-2xl mt-5">
              " {value && (value.title || value.name)} "
            </h3>

            <p className=" text-slate-400 mt-4 text-left sm:text-center ">
              Original Title :{" "}
              {value && (value.original_title || value.original_name)}
            </p>

            <p className="text-slate-300 mt-3 text-left overflow-y-auto h-3/6 paragraph-scrole hidden sm:block">
              <span className=" font-semibold">Description : </span>
              {value && (value.overview || "Unavailable")}
            </p>

            <div className="hidden sm:flex mt-3 flex-wrap gap-2 w-full">
              {value &&
                value.genre_ids.map((genreId, key) => (
                  <span
                    key={key}
                    className="text-[12px] bg-white bg-opacity-90 py-1 px-2 text-black font-bold rounded-md"
                  >
                    {genreMap[genreId] || ""}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BigScreenMediaCard;
