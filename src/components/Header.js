import { LOGO_URL } from "../utli/logo_url";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header =()=>{
    const[login,setlogin]=useState("login");

    return(
        
        <div className="flex justify-between   p-10 pt-5 pb-0 bg-[#D7E4C0]">
       <img src={LOGO_URL} className="w-24 h-24 rounded-full "></img>
       <div className="hidden md:block">
       <div className="font-sans font-bold  p-8 flex space-x-5 ">
        <div className="flex space-x-6 mt-2">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/aboutus">About us</Link></div>
        <div><Link to="/contactus">Contact us</Link></div>
        <div><Link to="/ordernow">Order Now</Link></div>
        </div>
         <div className="bg-[#FF6868]  py-2 px-4 rounded-md hover:text-white  hover:scale-105 cursor-pointer"
         onClick={()=>login=== "login"?setlogin("logout"):setlogin("login")}>{login}</div>
        
       </div>
       </div>
       </div>
    )
}











export default Header