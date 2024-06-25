import React from 'react'
import useMediaFetcher from '../../../hooks/useMediaFetcher';
import MovieCard from '../movieCard/MovieCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MediaCardSlider.css'



const MediaCardSlider = ({url}) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      swipeToSlide: true,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
    };
  
  
    const { isLoading, fetchedData, SetFetchedData, err } = useMediaFetcher(url);
  
    if (!fetchedData) {
      return <h1>loading...</h1>;
    }
  
    // console.log(fetchedData);
  
    return (
      <>
        <Slider {...settings}>
          {fetchedData.results &&
                  fetchedData.results.slice(0, 18).map((result) => (
                    <div
                      key={result.id}
                      className="lg:w-1/3 sm:w-1/2 w-1/2 md:p-2 p-1"
                      id={`section-${result.id}`}
                    >
                      <MovieCard result={result} />
                    </div>
                  ))}
        </Slider>
      </>
    );
}

export default MediaCardSlider