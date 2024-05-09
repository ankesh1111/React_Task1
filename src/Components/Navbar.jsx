import { Link } from "react-router-dom";
 import "./Navbar.css"
  
 function Navbar(){

    return (
        <div>
          
          
                
    <div class="l2">
        <h2>Weather App</h2>
        <p class="e1"><Link to="/">Home</Link> </p>
        <p class="e1"><Link to="/contact">Contact</Link> </p>
        <p class="e1"><Link to="/services">Services</Link> </p>
        <p class="e1"><Link to="/about">About</Link></p>
         
    </div>

            
        </div>
    )
}
export default Navbar;