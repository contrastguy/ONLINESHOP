// 
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { Container, Card, Row } from "react-bootstrap";
import Carrossel from "../Carousel/Carousel";
import "./CSS/styles.css"
import React, { useEffect, useState } from "react";
import Post from "../Posts/Post/Post";
import { api } from "../Services/api";

console.log("TESTE")



const Homepage = () => {



  const [listaProdutos, setListaProdutos] = useState([{ imagens_produto: [{ "url_imagem": "" }] }])


  const TodosProdutos = async () => {
    try {
      const url = "/produtos"
      const res = await api.get(url)
      setListaProdutos(res.data);
      console.log(res.data);

    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    TodosProdutos()
    return
  }, [])

  return (

    <div>
      <NavBar />

      <div>
        <Carrossel />
      </div>

      <Container className="d-flex flex-row justify-content-center">
        <Container>
          <Row>
            {listaProdutos.map((prod, index) => {
              return (
                <Post
                  key={index}
                  produto_id={prod.produto_id}
                  nome={prod.nome}
                  image={prod.imagens_produto.length > 0 ? prod.imagens_produto[0].url_imagem : "https://cdn-icons-png.flaticon.com/512/1720/1720759.png"}
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

export default Homepage
