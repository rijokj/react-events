import React from "react";

function Event1 (){

    const eventHandler =()=>{
        console.log("clicked me");
        
    }

    return(
        <div>
            <button onClick={eventHandler}>click Here !</button>
        </div>
    )
}

export default Event1