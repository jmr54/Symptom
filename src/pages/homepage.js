import { useState } from 'react'
import Url from "./url.json"
import Axios from 'axios'
import '../App.css'


const Homepage = () => {
  let [number, setNumber] = useState("https://www.hhs.gov/opioids/sites/default/files/inline-images/opioids-infographic.png")
  let [info, setInfo] = useState("https://www.who.int/news-room/fact-sheets/detail/opioid-overdose")
  let [title, setTitle] = useState("Alcohol Problems")

  const getImage = () => {
    Axios.get(`http://imagechoice.herokuapp.com/imagechoiceapp/6/?`).then (
      (response) => {
        let randomNumber = 0
        if (randomNumber !== response.data){
          setNumber(Url[response.data.data].link)
          setInfo(Url[response.data.data].info)
          setTitle(Url[response.data.data].title)
        }
      }
    )
  };

  return (
    <div className="App">
        <h1>Welcome</h1>
        <a href={info} target="_blank" rel="noopener noreferrer"> <h4>Click here to learn more about {title}</h4></a>
        <img src={number} className = "pic" alt="" /> 
        <div>
          <button className="button-19" onClick={getImage}>Click for new facts</button>
        </div>
    </div>
  );
}

export default Homepage