import {useParams} from "react-router-dom";

function Param(){
    const {id} = useParams();

    return(
        <>
            <h1>{id}</h1>
        </>
    )
}

export default Param