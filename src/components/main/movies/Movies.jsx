import TrandingsToday from "../../reusableComponents/tranding/TrandingsToday";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import TopRated from "../../reusableComponents/topRated/TopRated";
import BigScreenSwiper from "../../reusableComponents/sliderSwiper/bigScreenSwiper/BigScreenSwiper";

const Movies = () => {
  const { fetchedData: trandingMovieData } = useMediaFetcher(
    `${import.meta.env.VITE_URL}trending/movie/day?language=en-US'`
  );
  const { fetchedData: topMovieData } = useMediaFetcher(
    `${import.meta.env.VITE_URL}trending/movie/day?language=en-US'`
  );
  const { fetchedData: upcomingMovieData } = useMediaFetcher(
    `${import.meta.env.VITE_URL}/movie/upcoming?language=en-US&page=1`
  );
  // console.log(fetchedData);

  // console.log(upcomingMovieData?.results);

  return (
    <>
      <div className="bg-black container max-w-full">
        <div className="pt-20 pb-10 container mx-auto bg-black">
          <h1 className="text-white text-4xl text-center font-semibold mb-4">Upcoming Movies</h1>
          <BigScreenSwiper
            fetchedData={upcomingMovieData && upcomingMovieData.results}
          />
        </div>
      </div>

      <div className="container mt-5 mx-auto">
        <section className="container mx-auto mt-[5em] lg:p-5 p-0 max-w-[95%]">
          <div className="flex gap-2 md:flex-row flex-col">
            <TrandingsToday
              fetchedData={trandingMovieData}
              maximumResult={18}
              mediaType={"Movies"}
            />
            <TopRated
              fetchedData={topMovieData}
              maximumResult={12}
              mediaType={"Movies"}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Movies;
