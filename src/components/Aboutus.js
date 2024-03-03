import Userclass from "./Userclass";
import Userfunction from "./Userfunction";
import Userclass from "./Userclass";
import { useContext } from "react";
import UserContext from "../utli/UserContext";

const Aboutus = ()=>{
    const {login} = useContext(UserContext);
   
    return (

        <div className="flex flex-col space-y-10 justify-center items-center h-screen">
            <h1>this is a name{login}</h1>
          

            <h1>This is a  userfunction</h1>
            <Userfunction/>
            <Userclass/>
        </div>

        

    )
    
   
}
export default Aboutus;