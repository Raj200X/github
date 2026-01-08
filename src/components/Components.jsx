function Components(){

    return(
        <>
            <h1>Hello from Component</h1>
            <Sum a={10} b={12}/>
        </>
    )
}
function Sum(props){
    return props.a+props.b;
}
export default Components;