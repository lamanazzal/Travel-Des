import "./Home.css";
import Footer from "../Footer/Footer" ;
import Header from "../Header/Header";
import Tours from "../Tours/Tours";


function Home(props){
   const data=props.data ;
    return(
        <>
        <Header />

        {
           data.map(tours=>{
                return(
                <Tours Name={tours.name} image={tours.image}/>)
            })
        }
        <Footer />
        </>
    )
}
export default Home;