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

            <Col className='col-6'>
            <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.nome}</Card.Title>
                        <Card.Text style={{height:"10rem"}}>
                            {props.descricao}
                        </Card.Text>
                        <Button onClick={() =>{
                            const id = props.produto_id
                            {/* localStorage.setItem("produto", id) */}
                            alert(id)
                        }} variant="danger">Adcionar ao carrinho</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Post;