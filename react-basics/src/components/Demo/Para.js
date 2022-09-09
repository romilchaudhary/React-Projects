import React from "react";
import ParaChild from "./ParaChild";

const Para = (props) => {
    console.log("Para Running")
    return (
        <p>
            {
                props.showPara ? <ParaChild />: ""
            }            
        </p>
    )
}

export default React.memo(Para);

// React.memo check the previous props and current props, and if there is a difference then it'll re evaluate the component
// props.showPara !== props.previous.showPara then it'll re evaluate the component

// for premitive type (ex. boolean, string, number) if checks the exact value (false === false return true, 'hi'==='hi' return true)
// for aarray, objects , functions they are not same every time( [1,2] === [1,2] return false, same for functions)