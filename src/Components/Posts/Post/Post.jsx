import React from 'react';


import Col from 'react-bootstrap/esm/Col';


import { Button,Card } from "react-bootstrap";


import { useNavigate } from "react-router-dom";




// Função que renderiza um card , e que os dados desse card são do props
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
                        <Button onClick={() =>  { 
                            navigateProduto("/produto") 
                            localStorage.setItem("produto_id",`${props.produto_id
                            }`)
                    }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Post;