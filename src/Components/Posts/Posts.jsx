import React, { useEffect, useState } from "react";
import { Container,Row } from "react-bootstrap";
import Post from "../Posts/Post/Post";
import { api } from "../Services/api";

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
           return 
        },[])
    return (
      <>
        <Container>
          <Row>
            {listaProdutos.map((prod) => {
              return (
                <Post 
                key={prod.id}
                nome={prod.nome}
                image={prod.imagens_produto[0].url_imagem}
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