// import Navbar from "../Components/Navbar";
 
// import "./Home.css"
//  ;

// function Home(){


//     return (
//         <div>
//           <Navbar/>
//           <input type="text" id="city"/>
//     <button onclick="getData()" id="submit">submit</button>
//     <div id="container"></div>

//     <div class="mapouter"><div class="gmap_canvas">
//         <iframe 
//         width="600" 
//         height="500" 
//         id="gmap_canvas" 
//         src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed" 
//         frameborder="0" 
//         scrolling="no" 
//         marginheight="0" 
//         marginwidth="0"
//         ></iframe> 
//         </div>
//     </div>

//         </div>
//     )
// }

// export default Home

// pages/index.js

import React, { useState } from 'react';
import { fetchWeatherData } from '../Components/weather';
import ModalComponent from '../Components/Modal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.elements.value;
    const data = await fetchWeatherData(city);
    console.log(data)
    setWeatherData(data);
    toggleModal();
  };

  return (
    <div>
      <h1>Welcome to My Weather App</h1>
      <button onClick={toggleModal}>Enter City</button>
      <ModalComponent isOpen={isOpen} onRequestClose={toggleModal} onSubmit={handleSubmit} />
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
