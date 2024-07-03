import React, { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import SearchForm from "../../reusableComponents/searchForm/SearchForm";
import MediaCard from "../../reusableComponents/mediaCard/MediaCard";
import useGetRightSearchUrl from "../../../hooks/useGetRightSearchUrl";
import { useLocation } from "react-router-dom";

const QueryPage = () => {

  // sessionStorage.setItem('prevPage', window.location.href)
  
  const [queryData, setQueryData] = useState(() => {
    const savedQuery = sessionStorage.getItem("query");
    return savedQuery ? savedQuery: null;
  });

  const handleFormSubmit = (data) => {
    setQueryData(data);
  };

  // the function return result
  const { fetchedData, resultPage, setResultPage, queryUrl } = useGetRightSearchUrl(queryData);

  // if there is any input on form it will run
  useEffect(() => {
    if (queryData?.mediaRef) {
      sessionStorage.setItem("query", JSON.stringify(queryData.mediaRef));
    }
  }, [queryData]);

  const nextClickHandle = () => {
    setResultPage(resultPage + 1);
  };
  const prevClickHandle = () => {
    setResultPage(resultPage - 1);
  };

  // if clicked on the next or prev page btn it will run and update the session page number
  useEffect(() => {
    sessionStorage.setItem("page", resultPage);
  }, [nextClickHandle, prevClickHandle]);

  // console.log(fetchedData);

  // for making screen appare on top if i click next or prev page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, nextClickHandle, prevClickHandle]);

  return (
    <>
      <div className="w-[98%] my-4 mx-auto ">
        <SearchForm onChange={handleFormSubmit} setResultPage={setResultPage} />

        {/* {fetchedData  && ( */}
        <div className="flex w-[98%] justify-between mx-auto mt-16 mb-10 md:mt-5">
          <div>Results Found : {fetchedData?.total_results || 0}</div>
          <div className="flex gap-2">
            <button
              onClick={() => setResultPage(1)}
              className="btn border border-slate-800 py-1 px-2 rounded-md hover:bg-black hover:text-white transition-all has-tooltip"
            >
              <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-12 -ms-10">
                Reset Page Count
              </span>
              <IoMdRefresh/>
            </button>

            <p>
              {" "}
              Page: {fetchedData?.page || 0} / {fetchedData?.total_pages || 0}
            </p>
          </div>
        </div>
        {/* )} */}

        <div className="my-5 w-full mx-auto flex flex-wrap gap-3 justify-center ">
          {queryData?.mediaRef?.trim() == "" ? (
            <h3 className=" h-[50vh] text-3xl flex justify-center items-center">
              Search something
            </h3>
          ) : !fetchedData ? (
            <h3 className="h-[50vh] text-3xl flex justify-center items-center">
              Loading....
            </h3>
          ) : fetchedData && fetchedData.results?.length == 0 ? (
            <h3 className="h-[50vh] text-3xl flex justify-center items-center">
              Nothing Found
            </h3>
          ) : (
            fetchedData?.results?.map((result, key) => (
              <MediaCard
                key={key}
                result={result}
                mediaType={result.media_type || queryData.category}
                customCardClass="w-[48%] xs:w-[30%] sm:w-[30%] md:w-[210px] h-[300px] max-w-[300px]"
              />
            ))
          )}
        </div>

        <div className="flex mx-auto justify-center w-full gap-4">
          {resultPage > 1 && (
            <button
              onClick={prevClickHandle}
              className="border px-4 py-2 hover:bg-black hover:text-white transition-all"
            >
              {"<"} Prev
            </button>
          )}

          {fetchedData?.total_pages > resultPage && (
            <button
              onClick={nextClickHandle}
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
