import {createSlice} from "@reduxjs/toolkit";

const slice1 = createSlice({
    name: "slice1",
    initialState: {name:"",age:"",email:""},
    reducers:{
        setName: (state,action) => {state.name = action.payload},
        setAge: (state,action) => {state.age = action.payload},
        setEmail: (state,action)=> {state.email = action.payload}
    }
})

export const {setName,setAge,setEmail} = slice1.actions

export default slice1.reducer