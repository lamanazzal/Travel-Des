import './Navbar.css'

import { Link } from "react-router-dom";
const  Navbar =() => {
    return (
        <>
            <nav>
               <h1>Tours Destination</h1>
            </nav>
            <nav class="home">
                <Link to="/">Home</Link>
            </nav>
            
        </>
    )}
    export default Navbar ;
