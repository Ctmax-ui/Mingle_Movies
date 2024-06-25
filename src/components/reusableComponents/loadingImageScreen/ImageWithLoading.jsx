import { useState } from "react";

function CustomLoadingScreen({ ...styleLoading }) {
  // console.log(styleLoading.styleLoading);
  return (
    <div
      className={`loading-screen border bg-black border-slate-600 rounded-lg overflow-hidden  ${styleLoading.styleLoading}`}
    >
      <div className="text-gray-900 dark:text-gray-100 dark:bg-gray-950 relative flex justify-center items-center h-full">
        <h1 className=" text-2xl md:text-2xl font-bold flex justify-center items-center w-fit h-fit">
          L
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              opacity=".25"
            />
            <path
              className=" fill-white"
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="0.75s"
                values="0 12 12;360 12 12"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          ading . . .
        </h1>
      </div>
    </div>
  );
}

function ImageWithLoading({ src, className, styleLoading }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  console.log(src);

  return (
    <>
      {/* {!isLoaded && <CustomLoadingScreen styleLoading={styleLoading} />} */}
      
      {isLoaded && src != 'https://image.tmdb.org/t/p/w500null' ? 
      <img
        src={src}
        alt="Your Image"
        className={` ${isLoaded ? 'block': 'hidden'} ${className} `}
        onLoad={handleImageLoad}
      />
      : <CustomLoadingScreen styleLoading={styleLoading} />}
    </>
  );
}

export default ImageWithLoading;