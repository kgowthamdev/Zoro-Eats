import { useParams } from "react-router-dom";
import { IMG_URL, CARDIMG_URL } from "../utli/logo_url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import ShimmerItems from "./ShimmerItems";
import useCardItems from "../utli/useCardItems";
import useCardItems from "../utli/useCardItems";
import Catagories from "./Catagories";
import { useState} from "react";

const CardsItems = () => {
  const { reId } = useParams();
  const [ShowIndex,setShowIndex]=useState(null);

 const resinfo = useCardItems(reId);

  //  const{ name} = resinfo?.cards[0]?.card?.card?.info
  if (resinfo === null) return <ShimmerItems />;
  // console.log()

  const {
    name,
    cuisines,
    locality,
    avgRating,
    totalRatingsString,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = resinfo?.cards[0]?.card?.card?.info;

  const deliveryTime = sla.deliveryTime;

 const catagorie =  resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
  c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

 )




  return (
    <div className="p-10 md:p-20   ">
      <div
        id=" global_div"
        className="flex flex-col md:flex-row justify-center items-center  md:space-x-8 mb-8"
      >
        <img
          src={IMG_URL + cloudinaryImageId}
          className="h-60 w-full md:h-96 md:w-1/2 rounded-xl"
        ></img>
        <div className="p-10 pt-0 space-y-2 mt-3 font-sans min-w-[40%] text-center md:text-left ">
          <h2 className=" text-2xl md:text-3xl font-bold mt-4 md:mt-0">
            {name}
          </h2>
          <div className="md:pt-8 space-y-3 md:mt-0 text-center md:text-left">
            <h3 className="text-md md:text-xl">
              <span className="text-sm text-gray-600">cuisines: </span>
              {cuisines.join(", ")}
            </h3>
            <h3>
              <span className="text-sm text-gray-600">Area: </span>
              {locality}
            </h3>
            <h4 className=" font-bold">
              <FontAwesomeIcon
                className="mt-1 mr-1"
                icon={faStar}
                style={{ color: "#FFD43B" }}
              />
              {avgRating + " "}
              <span className="text-sm font-normal ">
                {"( " + totalRatingsString + " )"}
              </span>
            </h4>

            <h3 className="text-md">
              Delivery with in <span className="font-bold">{deliveryTime}</span>{" "}
              minutes
            </h3>
            <h1 className="font-bold text-xl  ">
              {costForTwo / 100}
              <span className="text-sm text-gray-600"> ₹ for Two</span>
            </h1>
            <div>
              {" "}
              <button className="bg-[#FF6868] font-bold md:mt-12 py-2 px-4 rounded-md hover:text-white  hover:scale-105 cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        </div>
      
      </div>
      <div className="w-8/12 h-2 bg-gray-100 mx-auto"></div> 
  
  <div>
    {
   catagorie.map((c,index)=>
   <Catagories data ={c?.card?.card} 
   key = {c?.card?.card?.title} 
   ShowItem ={index === ShowIndex?true :false}
   ShowIndex ={()=>setShowIndex(index)}/>) 
  }
  </div>
  
     
    </div>
  );
};

export default CardsItems;
