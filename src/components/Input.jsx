import {useState} from "react";

function Input() {
    const [state,setState] = useState("");
    return (
        <>
            <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} />
            <h1>{state}</h1>
            <button onClick={()=>{
                        setState("")
                    }}>Clear</button>
        </>
    );
    
}

export default Input;
