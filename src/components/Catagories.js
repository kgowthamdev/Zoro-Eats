import ListOfItems from "./ListOfItems";

const Catagories =({data,ShowIndex,ShowItem})=>{
  const[state,setstate]=useState(false);
  const toggle =()=>{
    ShowIndex()
    
  }

    return(
        // accordian header
    <div onClick={toggle}  >
        <div className="  w-8/12 mx-auto  my-5 cursor-pointer ">
       <div className="flex justify-between my-4 text-xl font-bold ">
        <h1>{data.title +"("+ data?.itemCards?.length +")"}</h1>
        <h1>🔽</h1>
        </div>
        
{/* accordian body */}

        {
            
            ShowItem &&<ListOfItems value ={data.itemCards}/>}
             <div className="w-full h-4 bg-gray-100"></div>  
        </div>
       

    </div>
    )
}
export default Catagories;