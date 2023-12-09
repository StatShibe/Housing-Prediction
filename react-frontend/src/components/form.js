import React from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.css';
import  {useState}  from "react";
import axios from 'react';
function InputForm(){

    const [avgAreaIncome, setAreaIncome] = useState('');
    const [avgHouseAge, setHouseAge] = useState('');
    const [avgBedrooms, setBedrooms] = useState('');
    const [population, setPopulation] = useState('');
    const [address, setAddress] = useState('');

    const predictBtn = () => {
        axios.default.headers.common['Content-Type'] = 'application/json';
        axios.default.headers.common['Accept'] = 'application/json' ;
        axios.post('')
     }


    return(
            <Form style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}} onSubmit={predictBtn}>
                <Form.Group className="mb-3" controlId="areaIncome" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Area Income</Form.Label>
                    <Form.Control type="text" value = {avgAreaIncome} onChange={e => setAreaIncome(e.target.value)} placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="avgHouseAge" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Area House Age</Form.Label>
                    <Form.Control type="text" value = {avgHouseAge} onChange={e => setHouseAge(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="avgBedRooms" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Area Number of Number of BedRooms</Form.Label>
                    <Form.Control type="text" value = {avgBedrooms} onChange={e => setBedrooms(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="areaPopulation" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Area Population</Form.Label>
                    <Form.Control type="text" value = {population} onChange={e => setPopulation(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="address" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value = {address} onChange={e => setAddress(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="submitButton">
                    <Form.Control type="Submit" style={{backgroundColor : 'turquoise'}}/>
                </Form.Group>
            </Form>
    );
}

export default InputForm;