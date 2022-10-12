import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Badge, Button } from "react-bootstrap";
import { ProdutosMulher } from "../Services/api";
import { DeleteVenda } from "../Services/api";
import DolceGabbana from "../Mulher/Imagens/17528762_37436785_600.jpg"
import "./CSS/styles.css"


const Carrinho = () => {
  const [listaProdutos, setListaProdutos] = useState([])
  const [qtd, setQtd] = useState(1)
  const [card,setCard] = useState(true)
  const [venda_id,setVenda] = useState(33)
  const titulo = JSON.stringify(listaProdutos.map((e) => { return e.nome }))
  const nome = titulo.replace("[", "").replace("]", "").replace(/"/g, '')
  const preco = JSON.stringify(listaProdutos.map((e) => { return e.valor })).replace("[", "").replace("]", "")
  const num = parseInt(preco)
  useEffect(
    () => {
      // alert("To do : chamar APi rota que pega lista de produtos e add response no state listaProdutos")
      ProdutosMulher().then(
        (response) => {
          console.log(response.data)
          const dados = response.data
          setListaProdutos(dados)

        }
      ).catch((error) => { console.log(error) })
    }, [])

    function DeletarCard(){
      DeleteVenda({venda_id}).then(
        (response)=>{ 
          alert("Sucess")
        }
      ).catch(
        (error)=>{console.log(error)}
      )
    }


    



  return (
    <>
      <NavBar />

      <div className="global">
        <div className="secao-produtos">
          <h3>
            Carrinho de compras <Badge bg="secondary">New</Badge>
          </h3>

          
            <Card  value={venda_id} className="card-container">
            <Button variant="danger" onClick={()=>{
                DeletarCard()
              }}>Excluir</Button>
              <div className="img-carrinho">
                <Card.Img class="img-card" variant="top" src={DolceGabbana} />
              </div>
              <Card.Body>
                <div className="items-carrinho">
                  <Card.Text>
                    <h3 id="nome-produto">{nome}</h3>
                  </Card.Text>
                  <label for="qtd"><h3>Quantidade:</h3></label>
                  <input id="qtd" type="number" onChange={(e) => { setQtd(e.target.value) }} />
                  <h3>Preço:{num}</h3>
                  <h3>Total:{(num * qtd)}</h3>
                </div>
              </Card.Body>
            </Card>
          
        </div>
        <div className="secao-ordem-compra">
          <h3>Ordem de Compra</h3>
          <hr />
          <div className="text-secao-compra">
            <h4>Quantidade de Items: {qtd}</h4>
            <h5>Total: {(num * qtd)}</h5>
            <Button variant="outline-secondary">Finalizar Pedido</Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )



}

export default Carrinho


