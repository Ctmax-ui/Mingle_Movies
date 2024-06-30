import React, { useEffect, useState } from "react";
import SearchForm from "../../reusableComponents/searchForm/SearchForm";
import MediaCard from "../../reusableComponents/mediaCard/MediaCard";
import useGetRightSearchUrl from "../../../hooks/useGetRightSearchUrl";

const QueryPage = () => {
  const [queryData, setQueryData] = useState(null);

  const [currentPage, setCurrentPage] = useState(null);

  const handleFormSubmit = (data) => {
    setQueryData(data);
    setResultPage(1);
  };
  const { fetchedData, resultPage, setResultPage, queryUrl } =
    useGetRightSearchUrl(queryData);

  useEffect(() => {
    if (queryData?.mediaRef !== "" && queryData?.mediaRef !== undefined) {
      sessionStorage.setItem("query", JSON.stringify(queryData?.mediaRef));
    }
  }, [handleFormSubmit, resultPage]);

  console.log(fetchedData);

  return (
    <>
      <div className=" w-[98%] my-4 mx-auto">
        <SearchForm onChange={handleFormSubmit} />

        {!fetchedData?.total_results <= 0 ? (
          <div className="flex w-[98%] justify-between mx-auto">
            <div className="">Result Found : {fetchedData?.total_results}</div>
            <div className="">
              Page : {fetchedData?.page + "/" + fetchedData?.total_pages}{" "}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="my-5 w-full mx-auto flex flex-wrap gap-3 justify-center ">
          {fetchedData && fetchedData?.results?.length <= 0 ? (
            <h3>Search Somthing.....</h3>
          ) : (
            fetchedData?.results?.map((result, key) => (
              <MediaCard
                key={key}
                result={result}
                mediaType={result.media_type || queryData.category}
                customCardClass=" w-[48%] xs:w-[30%] sm:w-[30%] md:w-[210px] h-[300px] max-w-[300px]"
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

          {fetchedData?.total_pages >= 2 && (
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
