import  './Tours.css'
function Tours(props){
    return(
        <>
        <h2>{props.Name}</h2>
        <img src={props.image} alt={props.Name} />
        </>
    )
}
export default Tours ;