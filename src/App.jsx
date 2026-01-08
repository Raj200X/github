import './App.css'
import UseRef from "./components/useRef.jsx";
import Fetch from "./Form/Fetch.jsx"
import AxiosCRUD from "./Form/AxiosCRUD.jsx";
import FormState from "./Form/FormState.jsx";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import ToDo from "./components/ToDo.jsx";

import StopWatch from "./components/StopWatch.jsx";
const router = createBrowserRouter([
    {
    path : '/',
    element : <><FormState></FormState></>
    },
    {
        path:'/users',
        element:<Fetch/>
    },
    {
        path:'/first',
        element:<><ToDo/></>
    },
    {
        path:'/timer',
        element:<StopWatch/>
    }


])
function App(){
    const userName = [
        {id:1,name:"Raj",Age:21,email:"raj@gmail.com"},
        {id:2,name:"Ajeet",Age:22,email:"Ajeet@gmail.com"},
        {id:3,name:"Pawan",Age:11,email:"pawan@gmail.com"},
        {id:4,name:"Aditya",Age:24,email:"Aditya@gmail.com"},
        {id:5,name:"Vikas",Age:25,email:"Vikas@gmail.com"},
    ];
    return(
        <>
            {/*<h1>Hello</h1>*/}
            {/*<table border={1} >*/}
            {/*    <thead>*/}
            {/*        <tr>*/}
            {/*            <td>id</td>*/}
            {/*            <td>name</td>*/}
            {/*            <td>age</td>*/}
            {/*            <td>email</td>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*        {*/}
            {/*            userName.map((user)=>(*/}
            {/*                <tr key={user.id}>*/}
            {/*                    <td>{user.id}</td>*/}
            {/*                    <td>{user.name}</td>*/}
            {/*                    <td>{user.Age}</td>*/}
            {/*                    <td>{user.email}</td>*/}
            {/*                </tr>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            {/*<UseRef></UseRef>*/}
            {/*<Fetch></Fetch>*/}
            {/*<AxiosCRUD></AxiosCRUD>*/}
            {/*<FormState></FormState>*/}
            <RouterProvider router={router}/>
        </>

    )
}
export default App;