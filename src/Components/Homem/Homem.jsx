import React from "react";
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import Camisa from "./Imagens/Camisa-preta.jpg"
import Jaqueta from "./Imagens/Jaqueta.jpg"
import Moletom from "./Imagens/Moletom-branco.jpg"
import SapatosPretos from "./Imagens/Sapato-preto.jpg"
import { Button,Container,Card } from "react-bootstrap";
import Carrossel from "../Carousel/Carousel";
import "./CSS/styles.css"
import { useNavigate } from "react-router-dom";

console.log("TESTE")



const Homem = () => {

    const navigateProduto = useNavigate("/produto") 



    return (
        
        <div>
            <NavBar />

            <div>
                <Carrossel/>
            </div>
            
            <Container className="d-flex flex-row justify-content-center">
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Moletom} />
                    <Card.Body>
                        <Card.Title>Casaco de Moletom</Card.Title>
                        <Card.Text>
                            Moletom de capuz Branco, com estampa artística
                        </Card.Text>
                        <Button onClick={() =>  { navigateProduto("/produto") }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Camisa} />
                    <Card.Body>
                        <Card.Text>
                        <Card.Title>Camiseta Básica</Card.Title>
                            Camiseta slim, minimalista, com estampa da Logo 
                        </Card.Text>
                        <Button onClick={() =>  { navigateProduto("/produto") }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={SapatosPretos} />
                    <Card.Body>
                        <Card.Title>Sapato Social</Card.Title>
                        <Card.Text>
                           Sapato social preto, com fivela 
                        </Card.Text>
                        <Button onClick={() =>  { navigateProduto("/produto") }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Jaqueta} />
                    <Card.Body>
                        <Card.Title>Jaqueta</Card.Title>
                        <Card.Text>
                           Jaqueta de botão, com estampa artística
                        </Card.Text>
                        <Button onClick={() =>  { navigateProduto("/produto") }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
            </Container>


            <Footer />
            
        </div>
    )
}

export default Homem
