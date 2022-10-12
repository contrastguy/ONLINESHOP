import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import AlessandraRich from "./Imagens/17893739_39837993_1000.jpg"
import Valentino from "./Imagens/17528762_37436785_600.jpg"
import DolceGabbana from "./Imagens/17732979_37915976_1000.jpg"
import IsabelMarant from "./Imagens/18664249_40318077_600.jpg"
import { Button, Container, Card } from "react-bootstrap";
import { ProdutosMulher } from "../Services/api";

import Carrossel from "../Carousel/Carousel";
import { useNavigate } from "react-router-dom";
// import "./CSS/style.css"
console.log("TESTE")

// const produtos = [
//     {

//     }
// ]



const Mulher = () => {
    const [listaProdutos, setListaProdutos] = useState([])
    const navigateProduto = useNavigate("/produto")
    const titulo  = JSON.stringify(listaProdutos.map((e)=>{return e.nome}))
    const descricao = JSON.stringify(listaProdutos.map((e)=>{return e.descricao}))
    const img = JSON.stringify(listaProdutos.map((e)=>{
        const imagem = e.imagens_produto[0].url_imagem
        JSON.stringify(imagem)
        return imagem}))

    useEffect(
        () => {
            // alert("To do : chamar APi rota que pega lista de produtos e add response no state listaProdutos")
            ProdutosMulher().then(
                (response) => {
                   console.log(response.data)
                   const dados = response.data
                   setListaProdutos(dados)
                   
                }
            ).catch((error) => {console.log(error)})

            

        }, [])
    return (

        <div>
            <NavBar />

            <div>
                <Carrossel />
            </div>

            <Container className="d-flex flex-row justify-content-center">
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{titulo}</Card.Title>
                        <Card.Text>{descricao}</Card.Text>
                        <Button onClick={() =>  { navigateProduto("/produto") }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Text>
                            <Card.Title>{titulo}</Card.Title>
                            {descricao}
                        </Card.Text>
                        <Button onClick={() =>  { navigateProduto("/produto") }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{titulo}</Card.Title>
                        <Card.Text>
                            {descricao}
                        </Card.Text>
                        <Button onClick={() =>  { navigateProduto("/produto") }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{titulo}</Card.Title>
                        <Card.Text>
                            {descricao}
                        </Card.Text>
                        <Button onClick={() =>  { navigateProduto("/produto") }} variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
            </Container>


            <Footer />
             
        </div>
    )
}

export default Mulher;