import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RestCards,{FreeDelivery} from "./RestCards";
import Shimmer from "./Shimmer"
import { Main_API } from "../utli/logo_url"
import { Link } from "react-router-dom";
import UserContext from "../utli/UserContext";



const Body = () => {
  const [search, setsearch] = useState("");
  const [ListData,setListData]=useState([]);
  const [toggleres,settoggleres]=useState('Top Restaurent');
  const[filter,setfilter] = useState([]);

  const{login,setuser}=useContext(UserContext);
  const HighComp = FreeDelivery(RestCards);


  useEffect(()=>{
    fetchdata();
  },[]);

  const fetchdata = async ()=>{
 const data = await fetch(Main_API)
 const json = await data.json();
setListData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setfilter(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);



  }
    

  return ListData.length===0?(<Shimmer/>):

  
  
   (
    // global div
    <div>
      
      <div className="flex justify-center items-center flex-col  md:flex-row mt-10">
        {/* search */}

        <div className=" relative inline-block  md:mx-0">
          <input
            type="text"
            placeholder="Search Here"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="border-2 md:w-[500px] sm:w-[350px] placeholder-gray-200  p-3 "
          />
          <div className=" absolute right-4 top-3 text-xl cursor-pointer hover:scale-110" onClick={()=>{
            const filterdata = ListData.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()));
            setfilter(filterdata);
            

          }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        <button className="w-fit mt-4 py-3 md:mt-0     bg-[#FFBB64] rounded-xl px-3 ml-4 font-bold hover:scale-105 hover:text-white "
        onClick={()=>{const filtered  = ListData.filter((res)=>res.info.avgRating>=4.3
        );
        setfilter(filtered)
      toggleres==="Top Restaurent" ?settoggleres('See ALL '):settoggleres("Top Restaurent")}}
        >
          {toggleres}
        </button>
      </div>


      <div className=" relative flex justify-center items-center mt-16">
          <input
            type="text"
            placeholder="Search Here"
            value={login}
            onChange={(e) => setuser(e.target.value)}
            className="border-2 md:w-[500px] sm:w-[350px] placeholder-gray-200  p-3 "
          />
          
        </div>



      <div className="flex flex-wrap my-10 justify-center items-center">
      {filter.length > 0 ? (
          filter.map((res) => (
            
            <Link to={"/cardsitems/"+ res.info.id } key={res.info.id} >
              
              {
             res.info.sla.deliveryTime<30 ? (
             <HighComp resdata={res}/>):
              
              (<RestCards  resdata={res} />)}
              
            
              
              
              </Link>
            
          ))
        ) : (
          <p className="text-center font-bold">No results found!</p>
        )}
      </div>
    </div>
  );
};
export default Body;
