import {useNavigate} from "react-router-dom";

function Practice(){
    const navigate = useNavigate()
    return(
        <>
            <h1>This is For Practice</h1>
            <button onClick={()=> navigate("/first")}> Go to First</button>
        </>
    )
}
 export default  Practice;