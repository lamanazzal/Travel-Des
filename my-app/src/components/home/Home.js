import "./Home.css";
//import Footer from "../Footer/Footer" ;
import Header from "../header/Header";
import Tours from "../tours/Tours";



function Home(props){
   const data=props.data ;
    return(
        <>
        <Header />
        <Tours data={props.data}/>

       {/* {
           data.map(tours=>{
                return(
                <Tours Name={tours.name} image={tours.image}/>)
            })
        } */}
        {/*<Footer />*/}
        </>
    )
}
export default Home;