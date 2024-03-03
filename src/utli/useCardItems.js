import { useEffect, useState } from "react"
import { Side_API } from "../utli/logo_url";
// this are custom hooks i know you will pull your hair and search what is this 😅

const useCardItems=(reId)=>{

    const [res ,setres] = useState(null);
    useEffect(()=>{
        fetchdata()
    },[])

 const fetchdata = async()=>{
    const data = await fetch(Side_API + reId);
    const json = await data.json();
    setres(json.data);


 }
 return res;

}
export default useCardItems;