import React from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.css';
function InputForm(){
    return(
            <Form style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Area Income</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Area House Age</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Average Area Number of Number of BedRooms</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Area Population</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style = {{width : '500px',textAlign : 'left'}}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type="Submit" style={{backgroundColor : 'turquoise'}} onClick={alert('Clicked')}/>
                </Form.Group>
            </Form>
    );
}

export default InputForm;