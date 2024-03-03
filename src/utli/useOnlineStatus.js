import { useState } from "react";

// this are custom hooks i know you will pull your hair and search what is this 😅

const useOnlineStatus=()=>{
    const[OnlineStatus,setOnlineStatus]=useState(true);

    window.addEventListener("offline",()=>{
        setOnlineStatus(false)
    })
    window.addEventListener("online",()=>{
        setOnlineStatus(true)
    })
    
    return OnlineStatus
}
export default  useOnlineStatus;