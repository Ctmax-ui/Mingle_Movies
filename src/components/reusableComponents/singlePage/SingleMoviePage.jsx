import React, { useEffect } from "react";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import { Link, useLocation, useParams } from "react-router-dom";
import useGetGenre from "../../../hooks/useGetGenre";
import ImageWithLoading from "../loadingImageScreen/ImageWithLoading";
import MediaTrailer from "../mediaTrailers/MediaTrailer";
import MediaCardSlider from "../slider/MediaCardSlider";

const SingleMoviePage = () => {
  const { movieId } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const genreMap = useGetGenre();

  const { fetchedData: showRightData, isLoading: loading } = useMediaFetcher(
    `${import.meta.env.VITE_URL}movie/${movieId}?language=en-US&page=1`
  );

  if (!showRightData) {
    return (
      <div className=" h-[90vh] w-100 flex justify-center items-center text-5xl">
        Loading....
      </div>
    );
  }

  // console.log(showRightData && showRightData);

  return (
    <>
      <section className="text-gray-600 body-font mb-10">
        <div className="px-3 xl:px-32 h-auto">
          <div className="container md:max-w-[95%] mx-auto flex px-5 py-5 md:flex-row flex-col gap-5 items-center my-5 h-auto border border-black rounded-md">
            <div
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-0 md:mb-10 flex justify-center h-full"
              id="main-sec"
            >
              <ImageWithLoading
                className="object-contain object-center rounded h-[400px] w-auto"
                styleLoading={" w-[100%] h-[400px] "}
                src={`${import.meta.env.VITE_IMAGE_URL}${
                  showRightData &&
                  (showRightData.poster_path || showRightData.backdrop_path)
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
              <p className="leading-relaxed mb-4">
                {showRightData && showRightData.tagline}
              </p>

              <div className="flex w-full gap-3 flex-wrap">
                <p className=" font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8">
                  Original Language :{" "}
                  {showRightData &&
                    showRightData?.original_language?.toUpperCase()}
                </p>

                <p className=" font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8">
                  Release Date :{" "}
                  {showRightData && showRightData.release_date?.toUpperCase()}
                </p>

                {showRightData?.media_type && (
                  <p className=" font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8">
                    Media Type : {showRightData.media_type?.toUpperCase()}
                  </p>
                )}

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
                  {showRightData && showRightData?.vote_average?.toFixed(1)}/10
                </p>
                <p className="font-bold bg-slate-800 text-white px-3 rounded font-mono leading-8 ">
                  Popularity : {showRightData && showRightData.popularity}
                </p>
              </div>

              <div className="flex justify-start w-full">
                <span className=" font-bold text-black text-xl me-2">
                  Tags :{" "}
                </span>
                <div className="flex gap-1 flex-wrap">
                  {showRightData?.genres &&
                    showRightData?.genres?.map((genreId, key) => (
                      <Link
                        key={key}
                        className="text-[1em] bg-slate-800 py-1 px-2 text-white font-bold rounded font-mono hover:bg-slate-600 border  hover:border-black"
                      >
                        {genreId.name}
                      </Link>
                    ))}
                </div>
              </div>

              <div className="flex w-full mt-2">
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 me-5"
                  to={`https://www.imdb.com/title/${showRightData?.imdb_id}`}
                >
                  Goto IMDB page{" "}
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>

                {showRightData && showRightData.homepage !== "" ? (
                  <Link
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    to={showRightData.homepage}
                  >
                    Goto Movie Homepage{" "}
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className=" container md:max-w-[95%] mx-auto px-3 xl:px-28">
          <div className="border border-black rounded-md p-5">
            <div className=" text-center">
              <h5 className=" text-black text-4xl font-bold mb-3">Overview</h5>
              <p>{showRightData && showRightData.overview}</p>
            </div>

            <div className=" text-center mt-10">
              <h5 className=" text-black text-3xl font-bold mb-3">
                Produced By
              </h5>
              <div className="flex justify-center gap-5 flex-wrap">
                {showRightData &&
                  showRightData?.production_companies?.map((value, key) => (
                    <div
                      className="border h-[100px] flex p-2 rounded-md items-center gap-3"
                      key={key}
                    >
                      {value.logo_path && (
                        <img
                          className="w-[100px] h-[100px] object-contain p-2"
                          src={`${import.meta.env.VITE_IMAGE_URL}${
                            value && value.logo_path
                          }`}
                          alt=""
                        />
                      )}
                      <div className="">
                        <p className=" font-semibold text-black">
                          {value.name}
                        </p>
                        <p>Country : {value.origin_country}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {showRightData && (
          <>
            <div className="mt-16 container mx-auto">
              <div className="my-20 ">
                <MediaTrailer
                  trailerUrl={`${
                    import.meta.env.VITE_URL
                  }movie/${movieId}/videos?language=en-US&page=1`}
                />
              </div>

              <div className="">
                <MediaCardSlider
                  url={`${import.meta.env.VITE_URL}movie/${
                    showRightData && showRightData.id
                  }/similar?language=en-US&page=1`}
                  mediaType={"movies"}
                  title={"Similar"}
                />
              </div>

              <div className="">
                <MediaCardSlider
                  url={`${import.meta.env.VITE_URL}movie/${
                    showRightData && showRightData.id
                  }/recommendations?language=en-US&page=1`}
                  mediaType={"movies"}
                  title={"Recommended"}
                />
              </div>
            </div>

            {/* <div className="mt-20">
              <h4 className="w-full text-center text-3xl text-black font-bold mt-20 mb-6">
                Reviews
              </h4>
              <SingleMediaReviewSec
                  movieId={movieId}
                  media_type={showRightData && showRightData.media_type}
                />
            </div> */}
          </>
        )}
      </section>
    </>
  );
};

export default SingleMoviePage;
