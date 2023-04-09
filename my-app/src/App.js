
import './App.css';
import Home from './components/Home/Home.js';

const tourData =require("./data/data.json")
function App() {
  return (
    <div className="App">
     
     <Home data={tourData} />
    </div>
  );
}

export default App;
