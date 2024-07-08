import { useEffect, useState } from "react";
import SelectCatagoryMenu from "../../reusableComponents/selectCatMenu/SelectCatagoryMenu";
import SelectMainCatagory from "../../reusableComponents/selectCatMenu/SelectMainCatagory";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import MediaCard from "../../reusableComponents/mediaCard/MediaCard";

const Homepage = () => {
  const [mainCatagory, setMainCatagory] = useState('movie');
  const [subCatagory, setSubCatagory] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  const handleMainCatagory = (data) => {
    setMainCatagory(data.id);
    setSubCatagory(null);
  };

  const handleSubCatagory = (data) => {
    setSubCatagory(data.id);
  };

  const url = (mainCatagory, subCatagory) => {
    if (!subCatagory) return null;

    return mainCatagory === "movie"
      ? `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${subCatagory}`
      : `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${subCatagory}`;
  };

  const fetchUrl = url(mainCatagory, subCatagory);
  const { fetchedData: mainResult } = useMediaFetcher(fetchUrl);

  useEffect(() => {
    if (mainResult && mainResult.total_results >= 0) {
      setFetchedData(mainResult);
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
        {fetchedData &&
          fetchedData.results.map((result, key) => (
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
