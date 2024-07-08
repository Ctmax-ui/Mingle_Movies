import { useEffect, useState } from "react";
import SelectCatagoryMenu from "../../reusableComponents/selectCatMenu/SelectCatagoryMenu";
import SelectMainCatagory from "../../reusableComponents/selectCatMenu/SelectMainCatagory";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import MediaCard from "../../reusableComponents/mediaCard/MediaCard";

const Homepage = () => {
  const [fetchedData, setFetchedData] = useState(null);

  const [mainCatagory, setMainCatagory] = useState('movie');
  const [subCatagory, setSubCatagory] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [isAdult, setIsAdult]= useState(false)
  const [sortBy, setSortBy]= useState('popularity.desc')

  const handleMainCatagory = (data) => {
    setMainCatagory(data.id);
    setSubCatagory(null);
  };

  const handleSubCatagory = (data) => {
    setSubCatagory(data.join("%2C"));
  };

  const url = (mainCatagory, subCatagory) => {
    if (!subCatagory) return null;

    return mainCatagory === "movie"
      ? `${import.meta.env.VITE_URL}discover/movie?include_adult=${isAdult}&include_video=false&language=en-US&page=1&sort_by=${sortBy}&with_genres=${subCatagory}`
      : `${import.meta.env.VITE_URL}discover/tv?include_adult=${isAdult}&include_null_first_air_dates=false&language=en-US&page=1&sort_by=${sortBy}&with_genres=${subCatagory}`;
  };

  const fetchUrl = url(mainCatagory, subCatagory);
  const { fetchedData: mainResult } = useMediaFetcher(fetchUrl);

  useEffect(() => {
    if (mainResult && mainResult.results.length > 0) {
      setFetchedData(mainResult);
      console.log(url(mainCatagory, subCatagory));
    }
  }, [mainResult]);

  return (
    <>
      <SelectMainCatagory onChange={handleMainCatagory} />
      
      <SelectCatagoryMenu
        onChange={handleSubCatagory}
        CatagoryType={mainCatagory}
      />

      <div className="my-5 w-[98%] mx-auto flex flex-wrap gap-3 justify-center">
        {fetchedData?.results.map((result, key) => (
          <MediaCard
            key={key}
            result={result}
            mediaType={result?.media_type || mainCatagory}
            customCardClass="w-[48%] xs:w-[30%] sm:w-[30%] md:w-[210px] h-[300px] max-w-[300px]"
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
