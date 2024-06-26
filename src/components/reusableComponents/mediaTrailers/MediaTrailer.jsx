import React, { useState } from "react";
import useMediaFetcher from "../../../hooks/useMediaFetcher";

const MediaTrailer = ({ trailerUrl}) => {


  const { fetchedData } = useMediaFetcher(trailerUrl);

  if (fetchedData == null) {
    return <p className="w-full text-center">loading...</p>;
  }
  console.log(fetchedData);

  return (
    <>
      <h5 className="w-full text-black text-3xl text-center font-bold mb-10">
        Extra Content
      </h5>

      {fetchedData && fetchedData.results.length <= 0 ? (
        <div className="w-full text-center">No extra content found.</div>
      ) : (
        <div className="mx-auto w-[90%]">
          <ul className="flex justify-center gap-4 flex-wrap-reverse">
            {fetchedData?.results &&
              fetchedData.results
                .slice(
                  fetchedData.results.length - 4,
                  fetchedData.results.length
                )
                .map((video, key) => (
                  <li key={key} className="rounded-lg overflow-hidden">
                    <iframe
                      className=" w-[550px] h-[300px]"
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title="YouTube video player"
                      allowFullScreen
                    ></iframe>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MediaTrailer;
