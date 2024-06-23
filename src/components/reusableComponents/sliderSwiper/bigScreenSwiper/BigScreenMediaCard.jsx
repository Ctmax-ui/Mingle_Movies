import { Link } from "react-router-dom";
import "./BigScreenMediaCard.css";

const BigScreenMediaCard = ({ value }) => {
  console.log(value);
  return (
    <>
      <Link class=" bg-inherit h-full w-full px-20 py-10">
        <div className="flex flex-row justify-between h-full border rounded-md overflow-hidden">
            <div className="w-auto h-full p-4">
                <img className="h-full object-cover rounded-md" src={`https://image.tmdb.org/t/p/w500/${value && value.backdrop_path}`} alt="" />
            </div>
            <div className="w-[50%] text-white p-4">
                <h3 className="text-2xl">Title : {value.title}</h3>
            </div>
        </div>
      </Link>
    </>
  );
};

export default BigScreenMediaCard;
