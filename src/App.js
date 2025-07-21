import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Footer from "./components/footer";
import './index.css'
function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <About/>


      <nav> //normal href code in html
        //normal href code in html
        <Link to="/">Home</Link> | <Link to="/Blog">Blog</Link>
      </nav>
    <Routes><Route path="/" element={<Home />} /><Route path="/About" element={<About />}/>

      </Routes>
      </BrowserRouter>
      
  );
  
  <Footer />
  


        }