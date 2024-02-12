import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import RestCards from "./RestCards";


const Body =()=>{
    const[search,setsearch]=useState("");
return(
    // global div
    <div>
    <div className="flex justify-center mt-3">
        {/* search */}             
                                                                                                      
        <div  className=" relative inline-block">
      <input type="text" placeholder="Search Here" value={search} onChange={(e)=>setsearch(e.target.value)} className="border-2 w-[500px] placeholder-gray-200  p-3 " />
      <div className=" absolute right-4 top-3 text-xl cursor-pointer hover:scale-110"><FontAwesomeIcon icon={faMagnifyingGlass}  /></div>
   </div>
   
<button className="bg-[#FFBB64] rounded-xl px-3 ml-4 font-bold hover:scale-105 hover:text-white">Top Restaurants</button>
   
</div>
<div className="flex flex-wrap my-10">
   
<RestCards/><RestCards/><RestCards/><RestCards/><RestCards/>
   <RestCards/>

   </div>

   </div>
    
   
    
    )
    

}
export default Body