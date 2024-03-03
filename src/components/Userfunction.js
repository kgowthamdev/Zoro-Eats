import { useState } from "react";
import { Component} from "react";

class Userfunction extends Component{
    constructor(props){
        super(props)
        console.log("1st child constructor")
    }
    componentDidMount(){
        console.log("1st child componentdidC")
    }
    render(){
        console.log("1st child render")
        return(
            <div>

            </div>
        )
    }
}


export default Userfunction;