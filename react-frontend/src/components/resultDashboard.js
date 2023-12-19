import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';




function ResultDisplay(props){
    let price = props.resultval;
    let INRRupee = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });
    return(
        <div className = "result" style={{display : 'flex', justifyContent : 'center'}}>
            <Card style = {{width : '500px'}}>
              <Card.Header>Predicted Price</Card.Header>  
              <Card.Body>Rs.{INRRupee.format(parseInt(price))}</Card.Body>
              <Card.Footer><b>*Prices are subject to change due to unforeseen circumstances</b></Card.Footer>
            </Card>
        </div>
    );
}

export default ResultDisplay;