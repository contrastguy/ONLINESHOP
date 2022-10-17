import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Badge, Button } from "react-bootstrap";
import { api } from "../Services/api";

import "./CSS/styles.css"


const Carrinho = () => {
  const [ProdutoId, setProdutoId] = useState([])
  const [qtd, setQtd] = useState(1)
  const [usuario_id, setUsuario_id] = useState(Number)
  const [total, setTotal] = useState(Number)
  const nomeArr = ProdutoId.nome


  const precoArr = ProdutoId.valor


 

  // function DeleteVenda(data) {
  //   return axios({
  //     method: "delete",
  //     // url: `https://onlineshop-1.herokuapp.com/venda/${data.venda_id}`,
  //     url: process.env.REACT_APP_VENDAS + data.venda_id,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
  //       "Access-Control-Allow-Headers": "*",
  //       "Access-Control-Max-Age": "86400",
  //       "Access-Content-Type": "*"
  //     },

  //   })
  // }

  const ProdutoEspecífico = async () => {
    try {
      const url = `/produto/${localStorage.getItem("produto_id")}`
      const res = await api.get(url)
      setProdutoId(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  const CadastroVendaCarrinho = async () => {
    try {
      const url = '/venda/cadastro'
      const res = await api.post(url, {
        "usuario_id": usuario_id,
        "total": total
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const imgArr =ProdutoId.imagens_produto[0].url_imagem
  

  useEffect(
    () => {
      // alert("To do : chamar APi rota que pega lista de produtos e add response no state listaProdutos")
      //     ProdutosMulher().then(
      //       (response) => {
      //         console.log(response.data)
      //         const dados = response.data
      //         setListaProdutos(dados)

      //       }
      //     ).catch((error) => { console.log(error) })
      //   }, [])

      // function DeletarCard() {
      //   DeleteVenda({ venda_id }).then(
      //     (response) => {
      //       alert("Sucess")
      //     }
      //   ).catch(
      //     (error) => { console.log(error) }
      //   )

      ProdutoEspecífico()


    }, []
  )






  return (
    <>
      <NavBar />

      <div className="global">
        <div className="secao-produtos">
          <h3>
            Carrinho de compras <Badge bg="secondary">New</Badge>
          </h3>


          <Card  className="card-container">
            <Button variant="danger" onClick={() => {
              // DeletarCard()
            }}>Excluir</Button>
            <div className="img-carrinho">
              <Card.Img class="img-card" variant="top" src={imgArr} />
            </div>
            <Card.Body>
              <div className="items-carrinho">
                <Card.Text>
                  <h3 id="nome-produto">{nomeArr}</h3>
                </Card.Text>
                <label for="qtd"><h3>Quantidade:</h3></label>
                <input id="qtd" type="number" onChange={(e) => { setQtd(e.target.value) }} />
                <h3>Preço:{precoArr}</h3>
                <h3>Total:{(precoArr * qtd)}</h3>
              </div>
            </Card.Body>
          </Card>

        </div>
        <div className="secao-ordem-compra">
          <h3>Ordem de Compra</h3>
          <hr />
          <div className="text-secao-compra">
            <h4>Quantidade de Items: {qtd}</h4>
            <h5>Total: {(precoArr * qtd)}</h5>
            <Button onClick={CadastroVendaCarrinho} variant="outline-secondary">Finalizar Pedido</Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )



}

export default Carrinho


