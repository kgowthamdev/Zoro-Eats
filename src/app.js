import React from "react"
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Ordernow from "./components/Ordernow";
import CardsItems from "./components/CardsItems";


const AppLayout = ()=>{
    return(
       
        <div>
            <Header/>
            
             <Outlet/>
        
        </div>

    )
}
const router = createBrowserRouter(
    [
        {
          path:"/",
          element:<AppLayout/>,  
          children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/contactus",
                element:<Contact/>
            },
            {
                path:"/aboutus",
                element:<Aboutus/>
            },
            {
            path:"/ordernow",
            element:<Ordernow/>
            },{
                path:"/cardsitems/:reId",
                element:<CardsItems/>
            }
          ],
          errorElement:<Error/>
        },
      
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)