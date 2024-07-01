import React, { useState } from "react";
import useMediaFetcher from "../../../hooks/useMediaFetcher";

const MediaTrailer = ({ trailerUrl }) => {
  const { fetchedData } = useMediaFetcher(trailerUrl);

  if (fetchedData == null) {
    return <p className="w-full text-center">loading...</p>;
  }
  // console.log(fetchedData);

  return fetchedData && fetchedData?.results?.length <= 0 ? (
    ""
  ) : (
    <>
      <h5 className="w-full text-black text-3xl text-center font-bold mb-10">
        Extra Content
      </h5>
      <div className="w-full ">
        <ul className="flex justify-center gap-4 flex-wrap-reverse">
          {fetchedData?.results &&
            fetchedData.results
              .slice(
                fetchedData?.results?.length - 4,
                fetchedData?.results?.length
              )
              .map((video, key) => (
                <li key={key} className="w-[100%] mx-2 lg:w-[45%]  rounded-lg overflow-hidden">
                  <iframe
                    className=" w-[100%] h-[300px]"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default MediaTrailer;
