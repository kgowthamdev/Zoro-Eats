import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RestCards from "./RestCards";

const Body = () => {
  const [search, setsearch] = useState("");
  const [ListData,setListData]=useState([]);


  useEffect(()=>{
    fetchdata();
  },[]);

  const fetchdata = async ()=>{
 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
 const json = await data.json();
setListData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

  }

  
  return (
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
          <div className=" absolute right-4 top-3 text-xl cursor-pointer hover:scale-110">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        <button className="w-fit mt-4 py-3 md:mt-0    bg-[#FFBB64] rounded-xl px-3 ml-4 font-bold hover:scale-105 hover:text-white">
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap my-10 justify-center items-center">
       {
       
        ListData.map((res)=>
            <RestCards key={res.info.id} resdata={res}/>
            
           

        
        )
       }
      </div>
    </div>
  );
};
export default Body;
