function Fruit(){
    const fruit = ()=>{
        const display = "Hello from Apple"
        return display;
    }
    return(
        <>
            <h1>{fruit()}</h1>
        </>
    )
}
export default Fruit;