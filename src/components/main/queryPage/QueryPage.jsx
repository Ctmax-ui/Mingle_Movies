import React, { useEffect, useState } from "react";
import SearchForm from "../../reusableComponents/searchForm/SearchForm";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import MediaCard from "../../reusableComponents/mediaCard/MediaCard";


const QueryPage = () => {

    const [queryData, setQueryData] = useState(null);

    const [queryUrl, setQueryUrl] = useState(null)
	const handleFormSubmit = (data) => {
	  setQueryData(data);
	};

    useEffect(()=>{

        if(queryData && queryData.category === 'default'){
            setQueryUrl(`https://api.themoviedb.org/3/search/multi?query=${queryData.mediaRef}&include_adult=${queryData.mediaIsAdult}&language=en-US&page=1`)
        }

    },[queryData])


    const{ fetchedData}=useMediaFetcher(queryUrl)
    // console.log(queryData);
    // console.log(fetchedData);

  return (
    <>
      <div className="container  my-4 mx-auto">
        <SearchForm onChange={handleFormSubmit} />

        <div className="my-5 container mx-auto flex flex-wrap gap-3 justify-center">
            {fetchedData && fetchedData.results.map((result, key, )=>(
                <MediaCard key={key} result={result} mediaType={result.media_type} />
            ))}
        </div>
      </div>
    </>
  );
};

export default QueryPage;
