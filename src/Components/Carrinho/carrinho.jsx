import React, { useState, useEffect, Children } from "react";
import Card from 'react-bootstrap/Card';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Badge, Button, Image, ToastBody } from "react-bootstrap";
import { api } from "../Services/api";

import "./CSS/styles.css"


const Carrinho = () => {
  //useState não podia vir vazio. Página carregava antes e a função que add os dados, carregava depois
  const [ProdutoId, setProdutoId] = useState({imagens_produto:[{url_imagem:""}]}) 
  const [qtd, setQtd] = useState(1)
  const [card, setCard] = useState(true)
  const [total, setTotal] = useState(Number)
  const [usuario_id, setUsuario_id] = useState(1)
  const nomeArr = ProdutoId.nome 
  const precoArr = ProdutoId.valor
  const totalCompra = precoArr * qtd


// Deletava a venda pelo id do produto que estava setado no localStorage
// Muda o estado do Card quando apertar no botão excluir
// remove o id do produto no localStorage
  const DeleteVenda = async () => {
    try {
      const url = `/venda/${localStorage.getItem("produto_id")}`
      const res = await api.delete(url)
      setCard((prev) => !prev)
      localStorage.removeItem("produto_id")
      alert("Deu certo")
    } catch (error) {
      console.log(error)
    }
  }

  // Pego o id do produto que esta no localStorage
  // Coloco os dados do produto no state 
  const ProdutoEspecífico = async () => {
    try {
      const url = `/produto/${localStorage.getItem("produto_id")}`
      const res = await api.get(url)
      setProdutoId(res.data)
    } catch (error) {
      console.log(error)
    }
  }

// Cria um uma venda na tabela vendas, com dados vindo do post
// seta uma venda_id no localStorage 
// remove do localStorage o venda_id e produto_id
  const CadastroVendaCarrinho = async () => {
    try {
      
      
      const url = '/venda/cadastro'
      const res = await api.post(url, {
        "usuario_id": localStorage.getItem("usuario_id"),
        "total": totalCompra,
        "data": "2022-10-19 23:59:40"
      })
      localStorage.setItem("venda_id",res.data.venda_id)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
    try {
      
      const url = '/venda-produto/cadastro'
      const res = await api.post(url,{
        "venda_id":localStorage.getItem("venda_id"),
        "produto_id": localStorage.getItem("produto_id"),
        "qtd_produtos": qtd,
        "total": totalCompra,
        
      })
      console.log(res.data)
      localStorage.removeItem("venda_id")
      localStorage.removeItem("produto_id")
    } catch (error) {
      console.log(error)
    }


  }

  


// A página só carrega se o produto for renderizado/alterado
  useEffect(
    () => {
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
          {/* gambiarra que exclui o componente Card */}
          {card && (
            <Card className="card-container text-dark">
              <Button variant="danger" onClick={DeleteVenda}>Excluir</Button>
              <div className="img-carrinho">
                <Card.Img class="img-card" variant="top" src={ProdutoId.imagens_produto[0].url_imagem} />
              </div>
              <Card.Body>
                <div className="items-carrinho">
                  <Card.Text>
                    <h3 id="nome-produto">{nomeArr}</h3>
                  </Card.Text>
                  <label for="qtd"><h3>Quantidade:</h3></label>
                  <input id="qtd" type="number" onChange={(e) => { setQtd(e.target.value) }} />
                  <h3>Preço:{precoArr}</h3>
                  <h3 onChange={(e) => { setTotal(e.target.value) }}>Total: {(precoArr * qtd)}</h3>
                </div>
              </Card.Body>
            </Card>)}

        </div>
        <div className="secao-ordem-compra text-white">
          <h3>Ordem de Compra</h3>
          <hr />
          <div className="text-secao-compra">
            <h4>Quantidade de Items: {qtd}</h4>
            <h5 onChange={(e) => { setTotal(e.target.value) }}>Total: {(precoArr * qtd)}</h5>
            <Button className="text-white" onClick={CadastroVendaCarrinho} variant="outline-secondary">Finalizar Pedido</Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )



}


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






export default Carrinho


