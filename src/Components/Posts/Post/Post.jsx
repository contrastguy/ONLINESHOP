import React from 'react';


import Col from 'react-bootstrap/esm/Col';


import { Button,Card } from "react-bootstrap";

// import "./CSS/styles.css"
import { useNavigate } from "react-router-dom";


// import './styles.css'


function Post(props) {
    const navigateProduto = useNavigate("/produto") 
    return (
        <>
            <Col style={{width:'25%'}} className='col-4'>
            <Card className="m-4" >
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.nome}</Card.Title>
                        <Card.Text style={{height:"10rem"}}>
                            {props.descricao}
                        </Card.Text>
                        <Button onClick={() =>  { navigateProduto("/produto") }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Post;