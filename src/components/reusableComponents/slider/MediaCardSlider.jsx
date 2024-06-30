import React from "react";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import MediaCard from "../mediaCard/MediaCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MediaCardSlider.css";

const MediaCardSlider = ({ url, mediaType, title, sliderCount, minSlider }) => {

  const { isLoading, fetchedData, SetFetchedData, err } = useMediaFetcher(url);


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "none" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{ ...style, display: "block", background: "none"}}
        onClick={onClick}
      />
    );
  }

  const determineSliderCount = (fetchedData) => {
    if (fetchedData?.cast?.length <= 2 && fetchedData?.crew?.length <= 2) {
      return 2
    }
    return 5;
  };


  const settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: determineSliderCount(fetchedData),
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, 
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };


  if (!fetchedData) { 
    return <h4 className="w-full text-4xl text-center ">loading...</h4>;
  }

  console.log(fetchedData );  

  if(fetchedData.total_results <= 0 || fetchedData.cast <= 0){
    return ''
  }

  return (
    <>
    <div className="">
      <h4 className="w-full text-center text-3xl text-black font-bold mt-20 mb-6">
        {title}
      </h4>
      <div className="flex justify-center w-full">
        <Slider {...settings}>
          {fetchedData &&
            (fetchedData?.results || (fetchedData.cast || fetchedData.crew))?.slice(0, sliderCount || 18).map((result) => (
              <div
                key={result.id}
                className="lg:w-1/3 sm:w-1/2 w-1/2 md:p-2 p-1"
                id={`section-${result.id}`}
                style={{ width: 900 }}
              >
                <MediaCard result={result} mediaType={mediaType} customCardClass={' w-full h-[300px]'} />
              </div>
            ))}
        </Slider>
      </div>
      </div>
    </>
  );
};

export default MediaCardSlider;
