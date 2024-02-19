import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Shimmer = ()=>{
    
    return(
        <div>
        <div className="flex justify-center items-center flex-col  md:flex-row mt-10">
          {/* search */}
  
          <div className=" relative inline-block  md:mx-0">
            <input
              type="text"
              placeholder="Search Here"
              
              className="border-2 md:w-[500px] sm:w-[350px] placeholder-gray-200  p-3 "
            />
            <div className=" absolute right-4 top-3 text-xl cursor-pointer hover:scale-110" >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
  
          <button className="w-fit mt-4 py-3 md:mt-0     bg-[#FFBB64] rounded-xl px-3 ml-4 font-bold  "
          
       
          >
           top Restaurent
          </button>
        </div>
        {/* Shimmer Cards for the site */}
      <div  className="flex flex-wrap mt-16 p-10 justify-center items-center">
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      <div className="shimmer_card "></div>
      </div>
        
       
       
        </div>
      

    )
}
export default Shimmer;