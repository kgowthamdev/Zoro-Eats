
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { IMG_URL } from "../utli/logo_url";


const RestCards =(props)=>

{
   
    
    // deliveryTime
    const{resdata}= props;


    const{name,cloudinaryImageId,costForTwo,cuisines,avgRating,sla,areaName}= resdata.info
   
    const deliveryTime = sla?.deliveryTime;
    
    
    
  return( <div id="Global_div" className="p-10  ">
        <div className="flex flex-col space-y-3 w-[300px] h-52   hover:scale-95 transition duration-150 ease-in-out mt-16 ">
            
        <img src={IMG_URL+ cloudinaryImageId} className=" rounded-xl h-52"></img>
        <div className="flex space-x-3  pt-3">
            {/* Name of the restaurent and cuiseines*/}
            <div className="space-y-2 ">
                <h1 className="font-bold">{name}</h1>
                <h3 className="w-44 truncate text-sm"> {cuisines.join(', ')}
                </h3>
                <h3 className='text-sm'>{deliveryTime+" min"}</h3>
            </div>
            
{/* ratings and price  */}

            <div className="space-y-2 mb-32">
                <div className="flex ">
                <FontAwesomeIcon className='mt-1 mr-1' icon={faStar} style={{color: "#FFD43B",}} />
                <h1 className='font-bold'>{avgRating}</h1>
                </div>
                <h3 className='text-sm' >{costForTwo}</h3>
                <h3 className='text-sm w-32 truncate'>{areaName}</h3>
           
            </div>

        </div>



        </div>

    </div>
    
    )
}

export default RestCards;