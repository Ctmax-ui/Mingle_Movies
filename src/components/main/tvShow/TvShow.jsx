import TrandingsToday from "../../reusableComponents/tranding/TrandingsToday";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import TopRated from "../../reusableComponents/topRated/TopRated";
import BigScreenSwiper from "../../reusableComponents/sliderSwiper/bigScreenSwiper/BigScreenSwiper";
import "../movies/Movies.css"
import useWindowSizeGetter from "../../../hooks/useWindowSizeGetter";


const TvShow = () => {
  const { fetchedData: trandingTvShowData } = useMediaFetcher(
    `${import.meta.env.VITE_URL}trending/tv/day?language=en-US'`
  );
  const { fetchedData: topTvShowData } = useMediaFetcher(
    `${import.meta.env.VITE_URL}/tv/top_rated?language=en-US&page=1'`
  );
  const { fetchedData: upcomingTvShowData } = useMediaFetcher(
    `${import.meta.env.VITE_URL}/tv/on_the_air?language=en-US&page=1&region=us`
  );
  const {width, height} = useWindowSizeGetter()

  // console.log(topTvShowData?.results);

  return (
    <>
      <div className="bg-black container max-w-full">
        <div className="pt-5 pb-10 container mx-auto bg-black swiper-container">
          <h1 className="text-white text-4xl text-center font-semibold mb-4">TV-Shows Airing Today</h1>
          <BigScreenSwiper
            fetchedData={upcomingTvShowData && upcomingTvShowData.results}
          />
        </div>
      </div>

      <div className="container mt-5 mx-auto content-container">
        <section className="container xl:p-5 p-0 max-w-[100%]">
          <div className="flex gap-2 md:flex-row flex-col">
            <TrandingsToday
              fetchedData={trandingTvShowData}
              maximumResult={18}
              mediaType={"tvshow"}
            />
            <TopRated
            className="mt-10"
              fetchedData={topTvShowData}
              maximumResult={width && width <= 1024 ? 18 : 12}
              mediaType={"tvshow"}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default TvShow