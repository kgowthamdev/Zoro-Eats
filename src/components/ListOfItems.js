import { CARDIMG_URL } from "../utli/logo_url"

const ListOfItems = ({value})=>{

    console.log("this is a value ")
    console.log(value)
    return(
        <div >
        {value.map((c)=>{
       
       const {id,name,price,description,imageId} = c?.card?.info;
       return(
        <div key={id} > 
        <div className="flex space-between ">

        <div className="w-9/12">
        <h1 className="text-md font-semibold">{name}</h1>
        <p className="">₹ {" "+price/100}</p>
        <p className="text-sm text-gray-400 mt-4">{description}</p>
        </div>
       <div className="w-4/12 relative pl-3">
        <img src={CARDIMG_URL+imageId} className="h-36   rounded-md" ></img>
        <button className="absolute  top-0 bg-orange-400 rounded-md font-bold text-sm p-1">ADD➕</button>
        </div>
        </div>

            <div className="h-[1] w-full bg-gray-300 mt-8 mb-4"></div>
        </div>)


        
         }
          )}

        </div>
    )
}
export default ListOfItems