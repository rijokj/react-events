import React from "react";

const Event3 = ()=>{
    const eventHandler = ()=>{
        alert("User Typed")
    }
    return (
        <div>
            <input type="text" onChange={eventHandler} />
        </div>
    )
}

export default Event3