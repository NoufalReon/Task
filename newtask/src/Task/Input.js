import {React,useState} from 'react'
import './Task.css'
import axios from 'axios'


function Input() {

const [id,setId] = useState("");
const [hp, setHp] = useState("");
const [name, setName] = useState("");
const [transmission, setTransmission] = useState("");
const [suspension, setSuspension] = useState("");
const [wheel, setWheel] = useState("");
const [headlight, setHeadlight] = useState("");



const handleSubmit = (event) =>{
    event.preventDefault();
    // console.log(id);
    // console.log(hp);
    // console.log(name);
    // console.log(transmission);
    // console.log(suspension);
    // console.log(wheel);
    // console.log(headlight);
const data = {
    id,
    hp,
    name,
    transmission,
    suspension,
    wheel,
    headlight
};


axios.post("https://mobiledev.refogen.com/api/v1/cars/createCars", {
    
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  
  },
  
  
});




}


  return (
    <div className="input">
      <div>
        <h1>Enter Car Details</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="text"
            placeholder="Category id"
            onChange={(event) => setId(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="text"
            placeholder="Car Hp"
            onChange={(event) => setHp(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="text"
            placeholder="Car Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="text"
            placeholder="Transmission"
            onChange={(event) => setTransmission(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="text"
            placeholder="Suspension Type"
            onChange={(event) => setSuspension(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="text"
            placeholder="Wheel type"
            onChange={(event) => setWheel(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="text"
            placeholder="HeadLight Type"
            onChange={(event) => setHeadlight(event.target.value)}
          />
        </div>
        <div className="">
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Input