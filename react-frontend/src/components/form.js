import React from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.css';
import  {useState}  from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ResultDisplay from "./resultDashboard";

function InputForm(){

    //const [avgAreaIncome, setAreaIncome] = useState('');
    //const [avgRooms, setRooms] = useState('');
    //const [avgHouseAge, setHouseAge] = useState('');
    //const [avgBedrooms, setBedrooms] = useState('');
    //const [population, setPopulation] = useState('');
    //const [address, setAddress] = useState('');

    const [data, setData] = useState({
        avgAreaIncome: "",
        avgHouseAge: "",
        avgRooms: "",
        avgBedrooms: "",
        population: "",
        address: ""
      });

      const [result, setResult] = useState(null);

      const handleChange = (e) => {
        const value = e.target.value;
        console.log('handleChange called');
        setData({
          ...data,
          [e.target.name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit called');
        /*
          const userData = new FormData();
        userData.append('avgAreaIncome', data.avgAreaIncome);
        userData.append('avgHouseAge', data.avgHouseAge);
        userData.append('avgRooms', data.avgRooms);
        userData.append('avgBedrooms', data.avgBedrooms);
        userData.append('population', data.population);
        userData.append('address', data.address);
        ;*/
        const userData = {
          avgAreaIncome: data.avgAreaIncome,
          avgHouseAge: data.avgHouseAge,
          avgRooms: data.avgRooms,
          avgBedrooms: data.avgBedrooms,
          population: data.population,
          address: data.address
      }
        

        

        
        console.log(userData);
        axios
      .post("http://127.0.0.1:8000/result",JSON.stringify(userData))
      .then((response) => {
        console.log(response);
        setResult(response.data.result);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
      }

      

    return(<>
            <Form style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
                <Form.Group className="mb-3" controlId="avgAreaIncome" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Area Income</Form.Label>
                    <Form.Control type="text" name = "avgAreaIncome"value = {data.avgAreaIncome} onChange={handleChange} placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="avgHouseAge" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Area House Age</Form.Label>
                    <Form.Control type="text" name="avgHouseAge" value = {data.avgHouseAge} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="avgRooms" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Number of Rooms</Form.Label>
                    <Form.Control type="text" name="avgRooms" value = {data.avgRooms} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="avgBedrooms" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Number of BedRooms</Form.Label>
                    <Form.Control type="text" name="avgBedrooms" value = {data.avgBedrooms} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="population" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Area Population</Form.Label>
                    <Form.Control type="text" name="population" value = {data.population} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="address" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value = {data.address} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="submitButton">
                  <Button type="submit" style={{ backgroundColor: 'turquoise' }} onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form.Group>

            </Form>
            <ResultDisplay resultval = {result}/>
            </>
    );
}

export default InputForm;