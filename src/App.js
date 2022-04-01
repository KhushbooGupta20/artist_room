
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Service from './Components/Service'
import Portfolio from './Components/Portfolio'
import Milestones from  './Components/Milestones'
import Testimonials from  './Components/Testimonials'
import Footer from  './Components/Footer'

function App() {
  return (
    <div className="App">
     <Home />
     <Service />
     <Portfolio />
   
     <Testimonials />
     <Footer />
    </div>
  );
}

export default App;
