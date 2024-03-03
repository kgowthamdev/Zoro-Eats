import React from "react";
class Userclass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count:1,
            count2:0
        }
        console.log("2nd child  constructor")


    }
    componentDidMount(){
        console.log("2nd child didmount")
    }
    render(){
        const {name}=this.props;
        const {count,count2}=this.state;
        console.log("2nd child render")

        return(
            <div  className="border-2  ">
                <h1> {name}
                </h1>
                <h2>count:{count} COUNT1:{count2}</h2>

                <button className=""onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>counting </button>
            
            
            </div>
        )
    }
}
export default Userclass;