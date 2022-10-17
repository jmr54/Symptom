import { useState, useEffect} from 'react'
import Data from "./category.json"


const Homepage = () => {
  return (
    <div className="App">
        <h1>Welcome</h1>
        <p> This will have random image from microservice</p>
        <img src="https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg" className = "pic"/>
        <div>
          <button className="button-19">Click for new image</button>
        </div>
    </div>
  );
}

export default Homepage