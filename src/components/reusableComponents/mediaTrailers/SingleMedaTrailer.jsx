import { useEffect, useState } from "react";
import useMediaFetcher from "../../../hooks/useMediaFetcher";

const SingleMedaTrailer = ({ mediaId, media_type }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (media_type && media_type === "movie") {
      setUrl(
        `${
          import.meta.env.VITE_URL
        }movie/${mediaId}/videos?language=en-US&page=1`
      );
    } else if (media_type && media_type === "tv") {
      setUrl(
        `${import.meta.env.VITE_URL}tv/${mediaId}/videos?language=en-US&page=1`
      );
    }
  }, [media_type, mediaId]);

  const { isLoading, fetchedData, SetFetchedData, err } = useMediaFetcher(url);

  if (fetchedData == null) {
    return <p className="w-full text-center">loading...</p>;
  }
  // console.log(fetchedData);

  return (
    <>
      <h5 className="w-full text-black text-3xl text-center font-bold mb-10">
        Extra Content
      </h5>
      {fetchedData && fetchedData.results.length <= 0 ? (
        <div className="w-full text-center">
          No extra content found.
        </div>
      ) : (
        <div className="mx-auto w-[90%]">
          <ul className="flex justify-evenly gap-4 flex-wrap-reverse">
            {fetchedData.results &&
              fetchedData.results
                .slice(
                  fetchedData.results.length - 4,
                  fetchedData.results.length
                )
                .map((video, key) => (
                  <li key={key} className="">
                    <iframe
                      width="560"
                      height="315"
                      className=""
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

export default SingleMedaTrailer;
