import {useEffect, useState} from "react";

function Fetch(){
    const api = "https://dummyjson.com/users";
    const [data,setData] = useState([]);
    async function fetchData(){
        const response = await  fetch(api,{method:"get"});
        const d = await response.json();
        setData(d.users);

    }

    useEffect(()=>{
        fetchData();
    },[])


    return(
        <>
            {data.map((i)=>(
                <h1 key={i.id}>{i.firstName}</h1>
            ))}
        </>
    )

}
export default Fetch;