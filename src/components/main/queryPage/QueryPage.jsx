import React, { useEffect, useState } from "react";
import SearchForm from "../../reusableComponents/searchForm/SearchForm";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import MediaCard from "../../reusableComponents/mediaCard/MediaCard";

const QueryPage = () => {
  const [queryData, setQueryData] = useState(null);

  const [resultPage, setResultPage] = useState(1);

  const [queryUrl, setQueryUrl] = useState(null);

  const handleFormSubmit = (data) => {
    setQueryData(data);
  };

  useEffect(() => {
    if (queryData) {
      if (queryData.category === "default") {
        setQueryUrl(
          `https://api.themoviedb.org/3/search/multi?query=${queryData.mediaRef}&include_adult=${queryData.mediaIsAdult}&language=en-US&page=${resultPage}`
        );
      } else if (queryData.category === "movie") {
        setQueryUrl(
          `https://api.themoviedb.org/3/search/movie?query=${queryData.mediaRef}&include_adult=${queryData.mediaIsAdult}&language=en-US&page=${resultPage}`
        );
      } else if (queryData.category === "tvshow") {
        setQueryUrl(
          `https://api.themoviedb.org/3/search/tv?query=${queryData.mediaRef}&include_adult=${queryData.mediaIsAdult}&language=en-US&page=${resultPage}`
        );
      } else if (queryData.category === "person") {
        setQueryUrl(
          `https://api.themoviedb.org/3/search/person?query=${queryData.mediaRef}&include_adult=${queryData.mediaIsAdult}&language=en-US&page=${resultPage}`
        );
      }
    }
  }, [queryData, resultPage]);

  const { fetchedData } = useMediaFetcher(queryUrl);
  console.log(fetchedData);
  // console.log(resultPage);

  return (
    <>
      <div className=" w-[98%] my-4 mx-auto">
        <SearchForm onChange={handleFormSubmit} />

        <div className="my-5 w-full mx-auto flex flex-wrap gap-3 justify-center ">
          {fetchedData && fetchedData?.results?.length <= 0 ? (
            <h1>search somthing</h1>
          ) : (
            fetchedData?.results?.map((result, key) => (
              <MediaCard
                key={key}
                result={result}
                mediaType={result.media_type}
                customCardClass=' w-[48%] xs:w-[30%] sm:w-[30%] md:w-[210px]'
              />
            ))
          )}
        </div>

        <div className="flex mx-auto justify-center w-full gap-4">
          {resultPage >= 2 && (
            <button
              onClick={() => setResultPage(Math.max(resultPage - 1, 1))}
              className="border px-4 py-2 hover:bg-black hover:text-white transition-all"
            >
              {"<"} Prev
            </button>
          )}

          {fetchedData?.result?.length <= 0 && (
            <button
              onClick={() => setResultPage(resultPage + 1)}
              className="border px-4 py-2 hover:bg-black hover:text-white transition-all"
            >
              Next {">"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default QueryPage;
