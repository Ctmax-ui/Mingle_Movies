import React, { useEffect } from "react";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import { Link, useParams } from "react-router-dom";
import useGetGenre from "../../../hooks/useGetGenre";

const SingleMoviePage = () => {
  const { movieId } = useParams();

  const genreMap = useGetGenre();

  const { fetchedData: showRightData, isLoading: loading } = useMediaFetcher(
    `${import.meta.env.VITE_URL}movie/${movieId}?language=en-US&page=1`
  );

  if (showRightData === null) {
    return (
      <div className=" absolute text-5xl top-1/2 left-1/2 -translate-x-1/2">
        Loading....
      </div>
    );
  }

  console.log(showRightData && showRightData);

  return (
    <>
      <section className="text-gray-600 body-font my-[5rem]">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col gap-5 items-center my-5 h-auto">
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            id="main-sec"
          >
            <img
              className="object-cover object-center rounded h-[500px]"
              alt={showRightData && (showRightData.title || showRightData.name)}
              src={`${import.meta.env.VITE_IMAGE_URL}${
                showRightData && showRightData.poster_path
              }`}
            />
          </div>

          <div className=" md:w-1/2 flex flex-col md:text-left items-center text-center h-auto pt-3 relative gap-3">
            <p className="">
              Original Name:{" "}
              {showRightData &&
                (showRightData.original_name || showRightData.original_title)}
            </p>
            <h1 className="title-font sm:text-3xl text-3xl font-bold text-gray-900">
              "{showRightData && (showRightData.title || showRightData.name)}"
            </h1>
            <p className="leading-relaxed">
              {showRightData && showRightData.overview}
            </p>

            <div className="flex w-full gap-3 flex-wrap">
              <p className=" font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8">
                Original Language :{" "}
                {showRightData &&
                  showRightData?.original_language.toUpperCase()}
              </p>
              <p className=" font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8">
                {/* Release Date :{" "} */}
                {/* {showRightData && (showRightData.release_date.toUpperCase())} */}
                {showRightData &&
                  (showRightData.release_date == undefined
                    ? "First Air Date : " + showRightData.first_air_date
                    : "Release On : " + showRightData.release_date)}
              </p>
              <p className=" font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8">
                Media Type :{" "}
                {showRightData?.media_type &&
                  showRightData.media_type.toUpperCase()}
              </p>
              <p className=" font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8">
                Type :{" "}
                {showRightData &&
                  (showRightData.adult ? "Adult" : "Family Friendly")}
              </p>
              <p className=" font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8">
                Type : {showRightData && showRightData.status}
              </p>
            </div>

            <div className="flex gap-1 flex-wrap w-full">
              <p className="font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8 ">
                Vote Average :{" "}
                {showRightData && showRightData.vote_average.toFixed(1)}/10
              </p>
              <p className="font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8 ">
                Popularity : {showRightData && showRightData.popularity}
              </p>
              <p className="font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8 ">
                Vote Count : {showRightData && showRightData.vote_count}
              </p>
            </div>

            <div className="flex justify-start w-full">
              <span className=" font-bold text-black text-xl me-2">
                Tags :{" "}
              </span>
              <div className="flex gap-1 flex-wrap">
                {showRightData?.genres &&
                  showRightData?.genres.map((genreId, key) => (
                    <Link
                      key={key}
                      className="text-[1em] bg-slate-800 py-1 px-2 text-white font-bold rounded font-mono hover:bg-slate-600 border  hover:border-black"
                    >
                      {genreId.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {showRightData.belongs_to_collection && (
          <div className="w-full">
            <h4 className="w-full text-center text-3xl font-bold text-black">
              Images
            </h4>
            <div className="flex">
              <div className="w-[50]">
                <img src={import.meta.env.VITE_IMAGE_URL + showRightData.belongs_to_collection.poster_path
} alt="" />
              </div>
              <div className="w-[50]"></div>
            </div>
          </div>
        )}

        {loading ? (
          ""
        ) : (
          <>
            <div className="mt-16">
              <h3 className="w-full text-center text-3xl text-black font-bold mb-6">
                Similar{" "}
                {showRightData && showRightData.media_type == "tv"
                  ? "Tv-Series"
                  : "Movies"}
              </h3>
              <div className="flex justify-center w-full">
                {/* <CardSlider
                    movieId={movieId}
                    media_type={showRightData && showRightData.media_type}
                  /> */}
              </div>

              <h4 className="w-full text-center text-3xl text-black font-bold mt-20 mb-6">
                Recomanded{" "}
                {showRightData && showRightData.media_type == "tv"
                  ? "Tv-Series"
                  : "Movies"}
              </h4>
              <div className="flex justify-center w-full">
                {/* <CardSliderForSingle
                    movieId={movieId}
                    media_type={showRightData && showRightData.media_type}
                  /> */}
              </div>
            </div>

            <div className="my-20 ">
              {/* <SingleMedaTrailer
                  movieId={movieId}
                  media_type={showRightData && showRightData.media_type}
                /> */}
            </div>

            <div className="mt-20">
              <h4 className="w-full text-center text-3xl text-black font-bold mt-20 mb-6">
                Reviews
              </h4>
              {/* <SingleMediaReviewSec
                  movieId={movieId}
                  media_type={showRightData && showRightData.media_type}
                /> */}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default SingleMoviePage;
