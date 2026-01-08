import axios from 'axios'
import {useState,useEffect} from 'react'


function AxiosCRUD(){
    const [data,setData] = useState([]);
    const api = "https://jsonplaceholder.typicode.com/posts";
    async function fetchData(){
        const response = await axios.get(api);

        setData(response.data)
    }
        useEffect(()=>{
            fetchData()
        },[])





    return(
        <>
            {data.map((i)=>(
                <h1 key={i.id}>{i.title}</h1>
            ))}
        </>
    )
}
export default AxiosCRUD;
