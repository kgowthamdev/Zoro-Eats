
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';

const RestCards =()=>

{
  return( <div id="Global_div" className="p-10 ">
        <div className="flex flex-col space-y-3 w-[300px] h-52   hover:scale-95 transition duration-150 ease-in-out mt-14">
            
        <img src="https://wallpapers.com/images/hd/luffy-1920-x-1920-picture-ee9gghzfh6x5rq4k.jpg" className=" rounded-xl h-52"></img>
        <div className="flex space-x-3  pt-3">
            {/* Name of the restaurent and cuiseines*/}
            <div className="space-y-2 ">
                <h1 className="font-bold">Burger King</h1>
                <h3 className="w-44 truncate text-sm"> Cusines,Cusines,cusines,cusines
                </h3>
                <h3 className='text-sm'>Time</h3>
            </div>
            
{/* ratings and price  */}

            <div className="space-y-2">
                <div className="flex ">
                <FontAwesomeIcon className='mt-1 mr-1' icon={faStar} style={{color: "#FFD43B",}} />
                <h1 className='font-bold'>4.5</h1>
                </div>
                <h3 className='text-sm' >120 for two</h3>
                <h3 className='text-sm w-32 truncate'>Mahabalipuram, chennai</h3>
           
            </div>

        </div>



        </div>

    </div>
    
    )
}

export default RestCards;