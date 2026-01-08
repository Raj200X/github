import {useState} from "react";
function Conditional(){
    const [display,setDisplay] = useState(true);
    return(
        <>
            <h1>{display?"Raj Srivastava":""}</h1>
            <button onClick={()=>{setDisplay(!display)}}>Toggle</button>
        </>
    )
}
export default Conditional;