import "./App.css";
import { BrowserRouter as Router,Routes, Route, Switch, Link } from "react-router-dom";
import Navbartemp from "./components/Navbar/Navbartemp";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Userbox from "./components/signin signup/Userbox";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Cartpg from "./pages/Cartpg";

function App() {
  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signin" element={<Userbox />}/>
      {/* <Route path="/proapi" element={<Proapi />}/> */}
      <Route path="/cart" element={<Cartpg />}/>


    </Routes>
    </Router>

    //<div id='main' >
    //   <Navbartemp/>
    //   <br></br>
    //   <br></br>
    //   <br></br>
    //   <br></br>
    //   <Slider/>

    //   <br></br>
    //   <Products1/>
    //   <Userbox/>
    //   <br></br>
    //   <Cart/>
    //   <Footer/>

    // </div>
  );
}

export default App;
