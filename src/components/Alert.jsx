function Alert(){
    function HandleClick(){
        alert("You Clicked button");
    }
    return(
        <>
            <button onClick={HandleClick}>Click this</button>
        </>
    )
}
export default Alert;