import { LOGO_URL } from "../utli/logo_url";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header =()=>{
    const[login,setlogin]=useState("login");

    return(
        
        <div className="flex justify-between   p-3 md:p-8   md:pt-5 md:pb-0 bg-[#D7E4C0]">
       <img src={LOGO_URL} className="w-16 h-16 md:w-20 md:h-20 rounded-full "></img>
       <div className="hidden md:block">
       <div className="font-sans font-bold  p-8 flex space-x-5 ">
        <div className="flex space-x-6 mt-2">
        <div className="hover:text-white hover:scale-110"><Link to="/">Home</Link></div>
        <div><Link to="/aboutus">About us</Link></div>
        <div><Link to="/contactus">Contact us</Link></div>
        <div><Link to="/ordernow">Order Now</Link></div>
        </div>
         <div className="bg-[#FF6868]  py-2 px-4 rounded-md hover:text-white  hover:scale-105 cursor-pointer"
         onClick={()=>login=== "login"?setlogin("logout"):setlogin("login")}>{login}</div>
        
       </div>
       </div>
       {/* tempory mobile menu */}

       <div className="block md:hidden p-5 font-bold group ">
       <div className="hover:text-white"><Link to="/">Home</Link></div>
       </div>

       </div>
    )
}











export default Header