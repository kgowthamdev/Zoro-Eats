import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { Side_API } from "../utli/logo_url";
import { useParams } from 'react-router-dom';
import { IMG_URL } from "../utli/logo_url";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'



const CardsItems = ()=>{

  
  const {reId}=useParams();
  
  const[resinfo,setresinfo]=useState(null);
useEffect(()=>{
    fetchmenu();
  },[]);

 const fetchmenu = async()=>{
  const data = await fetch(Side_API+reId)

  const json = await data.json();
  setresinfo(json.data)

 
 }



//  const{ name} = resinfo?.cards[0]?.card?.card?.info
if(resinfo===null)  return <Shimmer/>
// console.log()
console.log(resinfo)
const {name,cuisines,locality,avgRating,totalRatingsString,sla,cloudinaryImageId,costForTwo}= resinfo?.cards[0]?.card?.card?.info


const deliveryTime = sla.deliveryTime;

const item = resinfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards || resinfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0].itemCards


// const{itemCards}=resinfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
// console.log(itemCards)


 
    
return(
   <div className="p-10 " >
    <div id=" global_div" className="flex flex-row">

      <img src={IMG_URL+cloudinaryImageId} className="h-96 w-1/2 rounded-xl"></img>
      <div className="p-10 pt-0 space-y-2">
      <h2 className="text-3xl font-bold">{name}</h2>
  <h3 className="text-xl"><span className="text-sm text-gray-600">cuisines: </span>{cuisines.join(", ")}</h3>
  <h3><span className="text-sm text-gray-600">Area: </span>{locality}</h3>
  <h4 className=" font-bold">
  <FontAwesomeIcon className='mt-1 mr-1' icon={faStar} style={{color: "#FFD43B",}} />
  {avgRating}</h4>
  <h3 className="text-sm ">{totalRatingsString }</h3>
  
  <h3 className="text-md">Delivery with in <span className="font-bold">{deliveryTime}</span> minutes</h3>
  <h1 className="font-bold text-xl  ">{costForTwo/100}<span className="text-sm text-gray-600"> ₹ for Two</span></h1>
  <div> <button className="bg-[#FF6868] font-bold mt-12 py-2 px-4 rounded-md hover:text-white  hover:scale-105 cursor-pointer"
        >Order Now</button></div>
        
       
  
      </div>
    </div>

  <div className="mt-12">
    <h1 className="flex justify-center items-center text-2xl font-bold ">Recommended</h1>
    <ul>

      
    {item.map((item)=>(<li key={item?.card?.info?.id} >{item?.card?.info?.name}</li>))}

        
        </ul>
  </div>
 </div>


)


}

export default CardsItems;