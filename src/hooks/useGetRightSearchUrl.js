import {useEffect, useState} from 'react'
import useMediaFetcher from './useMediaFetcher';

const useGetRightSearchUrl = (queryData, depen) => {
    
  const [resultPage, setResultPage] = useState(()=>{
    const currentPage = sessionStorage.getItem('page')
    if(currentPage !== null && currentPage !== '' && currentPage !== undefined && resultPage != currentPage){
        return currentPage
    }
    return 1
  });
  
  const [queryUrl, setQueryUrl] = useState(null);

  console.log(resultPage);

  useEffect(() => {
    if (queryData && queryData.mediaRef !== '') {
        
      if (queryData?.category === "default") {
        setQueryUrl(
          `https://api.themoviedb.org/3/search/multi?query=${queryData?.mediaRef}&include_adult=${queryData?.mediaIsAdult}&language=en-US&page=${resultPage}`
        );
      } else if (queryData?.category === "movie") {
        setQueryUrl(
          `https://api.themoviedb.org/3/search/movie?query=${queryData?.mediaRef}&include_adult=${queryData?.mediaIsAdult}&language=en-US&page=${resultPage}`
        );
      } else if (queryData?.category === "tvshow") {
        setQueryUrl(
          `https://api.themoviedb.org/3/search/tv?query=${queryData?.mediaRef}&include_adult=${queryData?.mediaIsAdult}&language=en-US&page=${resultPage}`
        );
      } else if (queryData?.category === "person") {
        setQueryUrl(
          `https://api.themoviedb.org/3/search/person?query=${queryData?.mediaRef}&include_adult=${queryData?.mediaIsAdult}&language=en-US&page=${resultPage}`
        );
      };
    }
    else{
        setQueryUrl(sessionStorage.getItem('sessionPrevUrl'))
    }
    
  }, [queryData , queryUrl, resultPage, depen]);



  const { fetchedData, SetFetchedData } = useMediaFetcher(queryUrl);

  useEffect(() => {
    SetFetchedData("");
  }, [queryData, resultPage]);

  




  return {fetchedData, resultPage, setResultPage, queryUrl};
}
export default useGetRightSearchUrl