import { useEffect, useState } from "react";
import { Side_API } from "../utli/logo_url";
import { useParams } from "react-router-dom";
import { IMG_URL,CARDIMG_URL } from "../utli/logo_url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ShimmerItems from "./ShimmerItems";



const CardsItems = () => {
  const { reId } = useParams();

  const [resinfo, setresinfo] = useState(null);
  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(Side_API + reId);

    const json = await data.json();
    setresinfo(json.data);
  };

  //  const{ name} = resinfo?.cards[0]?.card?.card?.info
  if (resinfo === null) return <ShimmerItems />;
  // console.log()
  console.log(resinfo);
  const {
    name,
    cuisines,
    locality,
    avgRating,
    totalRatingsString,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = resinfo?.cards[2]?.card?.card?.info;

  const deliveryTime = sla.deliveryTime;

  const item =
    resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards ||
    resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .categories[0].itemCards;
      console.log(item)

  // const{itemCards}=resinfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  // console.log(itemCards)

  return (
    <div className="p-10 md:p-20 ">
      <div id=" global_div" className="flex flex-col md:flex-row justify-center items-center  md:space-x-8">
        <img
          src={IMG_URL + cloudinaryImageId}
          className="h-60 w-full md:h-96 md:w-1/2 rounded-xl"
        ></img>
        <div className="p-10 pt-0 space-y-2 mt-3 font-sans min-w-[40%] text-center md:text-left ">

          <h2 className=" text-2xl md:text-3xl font-bold mt-4 md:mt-0">{name}</h2>
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
              style={{color: "#FFD43B" }}
            />
            {avgRating+ " "}<span className="text-sm font-normal " >{"( "+totalRatingsString+" )"}</span>
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

      <div className="mt-12 ">
        <h1 className="flex  justify-center items-center text-2xl font-bold ">
          Recommended
        </h1>
        <ul   className="flex flex-col">

          {item.map((item) => {
            
             const{name,imageId,description,defaultPrice}=item?.card?.info;
             const{vegClassifier}=item?.card?.info?.itemAttribute;
         return(   
            <div key={item?.card?.info?.id} className="flex  flex-col md:flex-row justify-center items-center md:justify-start mt-16">
               <img
          src={CARDIMG_URL + imageId}
          className="h-48 w-60 rounded-xl mb-8 md:mb-0"
        ></img>
        <div className="md:ml-12 space-y-2 flex flex-col  items-center md:items-start">
            <h1  className="font-medium md:font-bold">   {name}</h1>
          
            <p className="md:w-xl line-clamp-2 w-48 ">{description}</p>
            <h1 className="font-medium">PURE{" "+vegClassifier}</h1>
           {defaultPrice&& (<h1 className="font-bold">₹{" "+defaultPrice/100} <span className="font-normal">only</span></h1>)}
            <button className="bg-[#FF6868] font-bold py-2 px-4 rounded-md hover:text-white  hover:scale-105 cursor-pointer">
            <FontAwesomeIcon icon={faPlus}  /> ADD
            </button>
            </div>
            </div>
          
            
          )})}
        </ul>
      </div>
    </div>
  );
};

export default CardsItems;
