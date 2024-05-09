import Home from "../Pages/Home"
 
 
import {Route, Routes} from "react-router-dom";
 
import Services from "../Pages/Services";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
 

function AllRoutes(){


    return (
        <div>
           
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            


           </Routes>
           
        </div>
    )
}
export default AllRoutes