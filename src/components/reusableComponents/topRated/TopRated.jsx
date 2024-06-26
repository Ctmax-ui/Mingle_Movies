import MediaCard from "../mediaCard/MediaCard";

const TopRated = ({fetchedData, maximumResult, mediaType}) => {



  return (
    <>
      <div className="w-[100%] md:w-[58%]">
        <div className="w-full relative block font-bold text-center text-3xl mb-4 cursor-default">
          <span className="border-b-[3px] px-3 pb-1 hover:border-blue-600 border-transparent transition duration-150 ease-in-out">
            Top Rated {(mediaType ==='tvshow'? 'Shows': 'Movies') || "Media"}
          </span>
        </div>
        <div className="text-gray-600 body-font">
          <div className="container px-0 mx-auto">
            <div className="flex flex-wrap ">
              {fetchedData?.results &&
                fetchedData.results.slice(0, maximumResult || 12).map((result) => (
                  <div
                    key={result.id}
                    className="lg:w-2/4 sm:w-1/2 w-1/2 md:p-2 p-1"
                    id={`section-${result.id}`}
                  >
                    <MediaCard result={result} mediaType={mediaType} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRated;
