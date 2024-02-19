import { useRouteError } from "react-router-dom"

const Error = ()=>{

    const error = useRouteError();
    console.log(error)
    return(
     <div className="h-screen w-screen flex justify-center items-center flex-col space-y-7 ">
        <h1 className="text-xl font-bold">OOPs!!!</h1>
        <h2 className="text-red-700 font-bold text-2xl">{error.status + " Page  " + error.statusText }</h2>
        </div>


    )
}
export default Error;