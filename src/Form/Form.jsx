//import {useState,useReducer,useEffect,useMemo} from "react";
//import {useSelector, useDispatch} from "react-redux";
//import {setAge,setEmail,setName} from "../GLobal/slice1.js";
//
//const initialstate = {name:"", age:"",email:"",pass:""};
//
//function reducer(state,action){
//    switch(action.type){
//        case "setName":
//            return {...state , name :action.payload}
//        case "setAge":
//            return {...state, age: action.payload}
//        case "setEmail":
//            return {...state, email: action.payload}
//        case "setPass":
//            return{...state, pass : action.payload}
//        default:
//            return state;
//    }
//}
//
////  action = {type: "setName", payload: undefined};
//
//function Form(){
//
//
//    const {name,age,email} = useSelector(state => state.slice1)
//    const dispatch = useDispatch()
////    const [{name,age,email,pass},dispatch]= useReducer(reducer,initialstate);
////    const [name,setName] = useState("");
////    const [age,setAge] = useState("");
////    const [email,setEmail] = useState("");
////    const [pass,setPass] = useState("");
//    const [error,setErrors] = useState({});
//    const [message,setMessage] = useState(false);
//
////    function fibo(n){
////        if(n<=1) return 1;
////        return fibo(n-1) + fibo(n-2);
////    }
////
////    const val =  useMemo(()=> fibo(Number(age)),[age]);
////
////    console.log(val)
//
//
//    function Validate(){
//        const errors = {};
//        if (!name){
//            errors.name = "Name not given";
//        }
//        if (age<0 || !age){
//            errors.age = "Enter Valid Age"
//        }
//        if (!email.includes('@')){
//            errors.email = "Enter Valid Email"
//        }
////        if (pass.length<8){
////            errors.pass = "Pass must be greater than 8"
////        }
//        return errors;
//    }
//    function handleSubmit(e){
//        e.preventDefault();
//        const errors = Validate();
//        if ((Object.keys(errors).length)>0){
//            setErrors(errors);
//            setMessage(false);
//
//            return;
//        }
//        setMessage(true);
//        setErrors({});
//
//    }
//    return(
//        <>
//            <form onSubmit={(e)=>handleSubmit(e)}>
//                <input type="text" onChange={(e)=> dispatch(setName(e.target.value))} value={name} placeholder="Enter Name"/> <br/>
//            {error.name && <h2>{error.name}</h2>}
//            <input type="Number" onChange={(e)=>dispatch(setAge(e.target.value))} value={age} placeholder="Enter Age"/><br/>
//            {error.age && <h2>{error.age}</h2>}
//            <input type="email" onChange={(e)=>dispatch(setEmail(e.target.value))} value={email} placeholder="Enter email"/><br/>
//            {error.email && <h2>{error.email}</h2>}
//            {/*<input type="password" onChange={(e)=> dispatch({type:"setPass", payload:e.target.value})} value={pass} placeholder="Enter password"/><br/>*/}
//            {/*{error.pass && <h2>{error.pass}</h2>}*/}
//            <button type="submit">Submit</button>
//            </form>
//            {message && <h1>Form Submitted</h1>}
//        </>
//    )
//}
//export default Form;