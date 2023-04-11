

import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home.js';
//import Tours from "./components/Tours/Tours";
import Navbar from "./components/navbar/Navbar";
import TourDetails from "./components/tourDetails/TourDetails";
const data =require("./data/db.json")
function App() {
  return (
    <>
     <Navbar />
      <Routes>
<Route  path='/' element={<Home  data={data}/>}/>
<Route path='/city/:id' element={<TourDetails/>}/>

      </Routes>
     
    </>
  );
}

export default App;
