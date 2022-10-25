import React, { useEffect, useState } from "react";
import { Container,Row } from "react-bootstrap";
import Post from "../Posts/Post/Post";
import { api } from "../Services/api";

// renderiza os produtos, coloca no useEffect pra não abrir a página antes de tudo renderizar
// Mapeia a Array que possui todos os dados do produto e joga em um Container
function Posts() {

    const [listaProdutos, setListaProdutos] = useState([])
  
    
    const TodosProdutos = async () => {
        try {
          const url = "/produto"
          const res = await api.get(url)
           setListaProdutos(res.data.dados);
           console.log(res.data.dados);
          
        } catch (err) {
          console.log(err);
        }
      }
      
    
    
    
        useEffect(()=>{
          TodosProdutos()
        },[])
    return (
      <>
        <Container>
          <Row>
            {listaProdutos.map((prod) => {
              return (
                <Post 
                key={prod}
                id={prod.id}
                nome={prod.nome}
                image={prod.imagens_produto[0]?.url_imagem}
                descricao={prod.descricao}
                />
              )  
            })}
          </Row>
        </Container>
  
      </>
    )
  }
  
  
  export default Posts;