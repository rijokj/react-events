import React from "react";

const Event2 = ()=>{

        const eventHandler= (name)=>{
            console.log("my name is "+name);
            
        }

    return(
        <div>
            <button onDoubleClick={()=>{eventHandler("rijo")}}>Who?</button>
        </div>
    )
}

export default Event2