import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro";
import Services from "./Components/Servicess/Services";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services/>
    </div>
  );
}

export default App;
