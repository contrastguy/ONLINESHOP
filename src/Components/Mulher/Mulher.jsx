import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { Button, Container, Card,Row } from "react-bootstrap";
import Post from "../Posts/Post/Post";
import Carrossel from "../Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import "./CSS/style.css"
import { api } from "../Services/api";
// import "./CSS/style.css"
console.log("TESTE")

// const produtos = [
//     {

//     }
// ]



const Mulher = () => {
    const [listaProdutos, setListaProdutos] = useState([])
  
    
    const TodosProdutos = async () => {
        try {
          const url = "/produto-filtro/2"
          const res = await api.get(url)
           setListaProdutos(res.data);
           console.log(res.data);
          
        } catch (err) {
          console.log(err);
        }
      }
      
    
    
    
        useEffect(()=>{
          TodosProdutos()
           return 
        },[])

    return (
        
        <div>
            <NavBar />

            <div>
                <Carrossel/>
            </div>
            
            <Container className="d-flex flex-row justify-content-center">
            <Container>
          <Row>
            {listaProdutos.map((prod,index) => {
              // console.log("prod",prod)
              // console.log("index",index)
              return (
                <Post 
                key={index}
                produto_id={prod.produto_id}
                nome={prod.nome}
                image={prod.imagens_produto[0]?.url_imagem}
                descricao={prod.descricao}
                />
              )  
            })}
          </Row>
        </Container>
            </Container>


            <Footer />
            
        </div>
    )
}

export default Mulher;