
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CollapsibleExample from './components/Navbar';
import TradingViewWidget from './components/TradingViewWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Fundamentals from './components/Fundamentals';
import About from './About';

function App() {
  return (
    <div className="App">
       <Router>
      <CollapsibleExample/>
      
      
    <Routes>
    
      <Route path="/" element={<Main/>}/>
      <Route path="/fundamentals" element={<Fundamentals/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    {/* <Footer/> */}
   </Router>
    </div>
  );
}

export default App;
