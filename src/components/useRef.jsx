import {useRef} from "react";
function UseRef(){
    const inputController = useRef(null)
    const handleRef = ()=>{
        inputController.current.style.color = "Red"
        inputController.current.style.backgroundColor = "yellow"
        
    }
    return(
        <>
            <h1>USE Ref</h1>
            <input ref={inputController} type="text" placeholder="Enter value"/>
            <button onClick={handleRef}>Focus on Input field</button>
        </>
    )
}
export default UseRef