import { useState, useEffect} from 'react'
import {Container ,Card, Row, Col, Button} from 'react-bootstrap'; 
import Data from "./category.json"
import Axios from 'axios'
import '../App.css'

const Search = () => {

// Using state to keep track of what the selected data is
let [data, setData] = useState("")
let [url, setUrl] = useState([])


// Using this function to update the state of data
// whenever a new option is selected from the dropdown
let handleDataChange = (e) => {
  setData(e.target.value);
  fetch('http://localhost:8000/search',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(e.target.value)
  }).then(() => {
    console.log("found")
  })
}



const getAPI = () => {
  Axios.get(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword=${data}`).then (
    (response) => {
      setUrl(response.data.Result.Resources.Resource)
    }
  )
};

  return (
    <div className="App">
    <form>
    <select onChange={handleDataChange} className="Form"> 
      <option value=""> -- Select a Category/All -- </option>
      {Data.map((datas) => <option key={datas.id}>{datas.title}</option>)}
    </select>  
    </form>    
    <button onClick={getAPI} className="button-19">Click To See Articles</button>
    <Container>
    <Row>
      {url.map((item, key) => {
        return(
        <Col className="d-flex">
        <Card className="categoryCard"style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.ImageUrl}/>
          <Card.Body>
            <Card.Title>{item.Title}</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" href={item.AccessibleVersion} target="_blank">Link to Article</Button>
          </Card.Body>
        </Card>
        </Col>
        )
      })}
  </Row>
  </Container>
    </div>
  );
}

export default Search