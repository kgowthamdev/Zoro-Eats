import React, { lazy,Suspense, useContext, useEffect, useState } from "react"
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Ordernow from "./components/Ordernow";
import CardsItems from "./components/CardsItems";
import Shimmer from "./components/Shimmer";
import UserContext from "./utli/UserContext";

const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = ()=>{
    
    const[user,setuser] = useState()
    console.log(user)
    useEffect(()=>{
        const data ={
            name:"gowtham",
        };
        setuser(data.name);

    },[]);


    
    return (
              <UserContext.Provider value={{ login: user,setuser }}>
                <div className="app">
                  <Header />
                  <Outlet />
                </div>
              </UserContext.Provider>
            );
};

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
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
          ],
          errorElement:<Error/>
        },
      
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)