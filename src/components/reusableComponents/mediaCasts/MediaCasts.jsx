import React, { useEffect, useState } from "react";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import MediaCard from "../mediaCard/MediaCard";

const MediaCasts = ({ url, mediaType, castCount, title }) => {

    const [showResult, setShowResult] =useState(10)
    
    
    useEffect(()=>{
        setShowResult(10)
    }, [url])

    const { fetchedData , SetFetchedData } = useMediaFetcher(url);

   const clickHandler = () =>{
    setShowResult(showResult+12)
   }

  // console.log(showResult,fetchedData);

  return (
    <>
      <div className="w-[90%] mx-auto">
        <h4 className="text-center text-3xl text-black font-bold mt-10 mb-8">
          {title}
        </h4>
        <div className="flex flex-wrap gap-4 justify-center">
          {fetchedData && fetchedData.cast?.slice(0, showResult || 18)
              .map((result, key) => (
                
                  <MediaCard
                    result={result}
                    mediaType={mediaType}
                    customCardClass='h-[200px] md:h-[250px]  md:w-[200px] w-[45%] max-w-[200px]'
                    key={key}
                    id={`section-${result.id}`}
                  />
                
              ))}
        </div>
             {fetchedData?.cast?.length <= showResult ? '':
        <button onClick={clickHandler} className="flex my-3 font-semibold mx-auto hover:bg-black hover:text-white rounded-md px-3 py-2">Show More</button> 
        }
      </div>
    </>
  );
};

export default MediaCasts;
